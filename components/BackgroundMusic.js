"use client";
import { useCallback, useEffect, useRef, useState } from "react";
import { invitation } from "@/config/invitation";

function NoteIcon({ playing }) {
  return (
    <svg viewBox="0 0 24 24" className="h-5 w-5" aria-hidden="true" focusable="false">
      <path
        d="M9 17.5V6.2c0-.5.3-.9.8-1l7-1.7c.7-.2 1.4.3 1.4 1v1.2M9 17.5a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0Zm9-2.3a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0Z"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      {playing ? (
        <g className="animate-twinkle" style={{ transformBox: "fill-box", transformOrigin: "center" }}>
          <path d="M19.5 6.5c1 .6 1.6 1.6 1.6 2.8" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
        </g>
      ) : (
        <path d="M4 4 20 20" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
      )}
    </svg>
  );
}

function clamp01(n) {
  return Math.min(Math.max(Number(n) || 0, 0), 1);
}

function isButtonTarget(event) {
  const target = event && event.target;
  return !!(target && typeof target.closest === "function" && target.closest("button"));
}

let ytApiPromise;
function loadYouTubeApi() {
  if (typeof window === "undefined") return Promise.resolve(null);
  if (window.YT && window.YT.Player) return Promise.resolve(window.YT);
  if (!ytApiPromise) {
    ytApiPromise = new Promise((resolve) => {
      const previous = window.onYouTubeIframeAPIReady;
      window.onYouTubeIframeAPIReady = () => {
        if (typeof previous === "function") previous();
        resolve(window.YT);
      };
      if (!document.querySelector("script[data-youtube-api]")) {
        const script = document.createElement("script");
        script.src = "https://www.youtube.com/iframe_api";
        script.async = true;
        script.dataset.youtubeApi = "";
        document.head.appendChild(script);
      }
    });
  }
  return ytApiPromise;
}

// Background music with a small floating toggle. Plays a hidden YouTube player
// (when `music.youtubeId` is set) or a local audio file (`music.src`). Browsers
// block audible autoplay, so playback starts immediately if allowed and falls
// back to muted playback that unmutes on the first user interaction.
export default function BackgroundMusic() {
  const { youtubeId = "", src = "", volume = 0.6 } = invitation.music ?? {};
  const containerRef = useRef(null);
  const playerRef = useRef(null);
  const audioRef = useRef(null);
  const [playing, setPlaying] = useState(false);
  const [muted, setMuted] = useState(false);

  const addGestureListener = (handler) => {
    const guarded = (event) => {
      if (isButtonTarget(event)) return;
      handler();
    };
    window.addEventListener("pointerdown", guarded);
    window.addEventListener("keydown", guarded);
    window.addEventListener("touchstart", guarded);
    return () => {
      window.removeEventListener("pointerdown", guarded);
      window.removeEventListener("keydown", guarded);
      window.removeEventListener("touchstart", guarded);
    };
  };

  useEffect(() => {
    if (!youtubeId) return;
    let player = null;
    let cancelled = false;
    const volumePct = Math.round(clamp01(volume) * 100);

    loadYouTubeApi().then((YT) => {
      if (cancelled || !YT || !containerRef.current) return;
      player = new YT.Player(containerRef.current, {
        videoId: youtubeId,
        playerVars: {
          controls: 0,
          loop: 1,
          playlist: youtubeId,
          playsinline: 1,
          modestbranding: 1,
          rel: 0,
          disablekb: 1,
        },
        events: {
          onReady: (event) => {
            const p = event.target;
            p.setVolume(volumePct);
            p.playVideo();
            // If audible autoplay was blocked, start muted so it still plays.
            setTimeout(() => {
              if (cancelled) return;
              const state = p.getPlayerState?.();
              const started = state === YT.PlayerState.PLAYING || state === YT.PlayerState.BUFFERING;
              if (!started) {
                p.mute?.();
                p.playVideo();
                setMuted(true);
              }
            }, 700);
          },
          onStateChange: (event) => {
            if (!cancelled) setPlaying(event.data === YT.PlayerState.PLAYING);
          },
        },
      });
      playerRef.current = player;
    });

    const removeGesture = addGestureListener(() => {
      if (!player) return;
      player.unMute?.();
      player.setVolume?.(volumePct);
      player.playVideo?.();
      setMuted(false);
      removeGesture();
    });

    return () => {
      cancelled = true;
      removeGesture();
      playerRef.current = null;
      if (player && typeof player.destroy === "function") player.destroy();
    };
  }, [youtubeId, volume]);

  useEffect(() => {
    if (youtubeId || !src) return;
    const audio = audioRef.current;
    if (!audio) return;
    audio.volume = clamp01(volume);

    let cancelled = false;
    const onPlaying = () => {
      if (!cancelled) setPlaying(true);
    };
    const onPause = () => {
      if (!cancelled) setPlaying(false);
    };
    audio.addEventListener("playing", onPlaying);
    audio.addEventListener("pause", onPause);

    audio
      .play()
      .catch(() => {
        // Audible autoplay blocked — start muted instead.
        if (cancelled) return;
        audio.muted = true;
        setMuted(true);
        audio.play().catch(() => {});
      });

    const removeGesture = addGestureListener(() => {
      audio.muted = false;
      setMuted(false);
      if (audio.paused) audio.play().catch(() => {});
      removeGesture();
    });

    return () => {
      cancelled = true;
      removeGesture();
      audio.removeEventListener("playing", onPlaying);
      audio.removeEventListener("pause", onPause);
      audio.pause();
    };
  }, [youtubeId, src, volume]);

  const toggle = useCallback(() => {
    const player = playerRef.current;
    const audio = audioRef.current;

    if (player) {
      if (muted) {
        player.unMute?.();
        player.setVolume?.(Math.round(clamp01(volume) * 100));
        player.playVideo?.();
        setMuted(false);
        return;
      }
      if (playing) player.pauseVideo?.();
      else player.playVideo?.();
      return;
    }

    if (audio) {
      if (muted) {
        audio.muted = false;
        setMuted(false);
        if (audio.paused) audio.play().catch(() => {});
        return;
      }
      if (audio.paused) audio.play().catch(() => {});
      else audio.pause();
    }
  }, [muted, playing, volume]);

  if (!youtubeId && !src) return null;

  const active = playing && !muted;

  return (
    <>
      {youtubeId ? (
        <div
          ref={containerRef}
          aria-hidden="true"
          className="pointer-events-none fixed left-0 top-0 z-0 h-px w-px overflow-hidden opacity-0"
        />
      ) : (
        <audio ref={audioRef} src={src} loop preload="auto" />
      )}

      <button
        type="button"
        onClick={toggle}
        aria-label={muted ? "Unmute background music" : playing ? "Pause background music" : "Play background music"}
        aria-pressed={playing}
        className="fixed bottom-5 right-5 z-[60] flex h-12 w-12 touch-manipulation items-center justify-center rounded-full border border-gold/40 bg-white/70 text-burgundy shadow-soft backdrop-blur-sm transition-transform hover:-translate-y-0.5 hover:bg-white hover:shadow-card"
      >
        <NoteIcon playing={active} />
      </button>
    </>
  );
}
