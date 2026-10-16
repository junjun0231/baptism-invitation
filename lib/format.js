import { invitation } from "@/config/invitation";

const tz = invitation.timeZone;

export const formatLongDate = (iso) =>
  new Intl.DateTimeFormat("en-US", {
    weekday: "long", month: "long", day: "numeric", year: "numeric", timeZone: tz,
  }).format(new Date(iso));

export const formatTime = (iso) =>
  new Intl.DateTimeFormat("en-US", {
    hour: "numeric", minute: "2-digit", timeZone: tz,
  }).format(new Date(iso));
