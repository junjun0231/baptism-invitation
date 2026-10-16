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
// block autoplay with sound, so playback also starts on the first interaction.
export default function BackgroundMusic() {
  const { youtubeId = "", src = "", volume = 0.6 } = invitation.music ?? {};
  const containerRef = useRef(null);
  const playerRef = useRef(null);
  const audioRef = useRef(null);
  const [playing, setPlaying] = useState(false);

  useEffect(() => {
    if (!youtubeId) return;
    let player = null;
    let cancelled = false;

    const attemptPlay = () => {
      if (!cancelled && player && typeof player.playVideo === "function") {
        player.playVideo();
      }
    };

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
            event.target.setVolume(Math.round(clamp01(volume) * 100));
            attemptPlay();
          },
          onStateChange: (event) => {
            setPlaying(event.data === YT.PlayerState.PLAYING);
          },
        },
      });
      playerRef.current = player;
    });

    const onInteraction = () => attemptPlay();
    window.addEventListener("pointerdown", onInteraction);
    window.addEventListener("keydown", onInteraction);
    window.addEventListener("touchstart", onInteraction);

    return () => {
      cancelled = true;
      window.removeEventListener("pointerdown", onInteraction);
      window.removeEventListener("keydown", onInteraction);
      window.removeEventListener("touchstart", onInteraction);
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
    const start = () => {
      audio
        .play()
        .then(() => {
          if (!cancelled) setPlaying(true);
        })
        .catch(() => {});
    };

    start();

    const onInteraction = () => {
      if (audio.paused) start();
    };
    window.addEventListener("pointerdown", onInteraction);
    window.addEventListener("keydown", onInteraction);
    window.addEventListener("touchstart", onInteraction);

    return () => {
      cancelled = true;
      window.removeEventListener("pointerdown", onInteraction);
      window.removeEventListener("keydown", onInteraction);
      window.removeEventListener("touchstart", onInteraction);
      audio.pause();
    };
  }, [youtubeId, src, volume]);

  const toggle = useCallback(() => {
    if (youtubeId) {
      const player = playerRef.current;
      if (!player) return;
      if (playing) player.pauseVideo?.();
      else player.playVideo?.();
      return;
    }
    const audio = audioRef.current;
    if (!audio) return;
    if (audio.paused) {
      audio
        .play()
        .then(() => setPlaying(true))
        .catch(() => {});
    } else {
      audio.pause();
      setPlaying(false);
    }
  }, [youtubeId, playing]);

  if (!youtubeId && !src) return null;

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
        aria-label={playing ? "Pause background music" : "Play background music"}
        aria-pressed={playing}
        className="fixed bottom-5 right-5 z-[60] flex h-12 w-12 touch-manipulation items-center justify-center rounded-full border border-gold/40 bg-white/70 text-burgundy shadow-soft backdrop-blur-sm transition-transform hover:-translate-y-0.5 hover:bg-white hover:shadow-card"
      >
        <NoteIcon playing={playing} />
      </button>
    </>
  );
}
