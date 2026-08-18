"use client";

import { MessageCircle } from "lucide-react";
import { whatsappHref } from "@/config/site";

export function WhatsAppButton() {
  const href = whatsappHref("Hi, I'd like to find out more about The Startup Company.");
  if (!href) return null;

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      data-cursor="hover"
      aria-label="Chat with us on WhatsApp"
      className="fixed bottom-6 right-6 z-40 flex h-13 w-13 items-center justify-center rounded-full bg-green text-text shadow-[0_10px_30px_-8px_rgba(62,107,74,0.6)] transition-transform hover:scale-105"
      style={{ height: 52, width: 52 }}
    >
      <MessageCircle className="h-6 w-6" strokeWidth={1.8} />
    </a>
  );
}
