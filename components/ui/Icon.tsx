import type { Service } from "@/content/services";

type Name = Service["icon"] | "arrow" | "phone" | "mail" | "pin" | "clock" | "whatsapp" | "check" | "plus";

const PATHS: Record<Name, string> = {
  compass: "M12 3v3m0 0 5.5 14M12 6 6.5 20M8 15h8M12 6a1.5 1.5 0 1 0 0-.01",
  calc: "M5 3h14v18H5zM8 7h8M8 11h2m3 0h3M8 15h2m3 0h3M8 18h2m3 0h3",
  beam: "M3 6h18M3 18h18M12 6v12M7 6v2m10-2v2M7 18v-2m10 2v-2",
  crane: "M4 21h7M7.5 21V4l10 3M7.5 4 4 8h3.5m10-1v6m-1.5 0h3l-1 3h-1z",
  key: "M14.5 9.5a4 4 0 1 1-1.2-2.8M13.3 6.7 21 14.4V17h-2.6v-2h-2v-2h-2",
  chart: "M4 20V10m6 10V4m6 16v-7m4 7H2",
  arrow: "M5 12h14m-5-5 5 5-5 5",
  phone: "M5 4h4l2 5-2.5 1.5a11 11 0 0 0 5 5L15 13l5 2v4a2 2 0 0 1-2 2A16 16 0 0 1 3 6a2 2 0 0 1 2-2",
  mail: "M3 6h18v12H3zm0 0 9 7 9-7",
  pin: "M12 21s7-6.2 7-12a7 7 0 0 0-14 0c0 5.8 7 12 7 12zm0-9.5a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5",
  clock: "M12 7v5l3 2m6-2a9 9 0 1 1-18 0 9 9 0 0 1 18 0",
  whatsapp: "M4 20l1.3-4A8 8 0 1 1 8 18.7zM9 8.5c0 3.5 3 6.5 6.5 6.5l1-1.5-2-1-1 1a4 4 0 0 1-2.5-2.5l1-1-1-2z",
  check: "M5 12.5 10 17 19 7",
  plus: "M12 5v14M5 12h14",
};

export function Icon({ name, className = "h-6 w-6" }: { name: Name; className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      <path d={PATHS[name]} />
    </svg>
  );
}
