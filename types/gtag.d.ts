declare global {
  interface Window {
    gtag?: (
      command: "config" | "event" | "set",
      targetId: string,
      config?: {
        event_category?: string;
        event_label?: string;
        event_value?: number;
        [key: string]: string | number | boolean | undefined;
      }
    ) => void;
  }
}

export {};
