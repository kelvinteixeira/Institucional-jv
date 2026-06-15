"use client";

import { cn } from "@/lib/utils/cn";
import { getWhatsAppUrl } from "@/lib/constants/site";
import { MessageCircle } from "lucide-react";
import { motion } from "framer-motion";

interface WhatsAppButtonProps {
  message?: string;
  className?: string;
  label?: string;
  floating?: boolean;
}

export function WhatsAppButton({
  message,
  className,
  label = "WhatsApp",
  floating = false,
}: WhatsAppButtonProps) {
  const href = getWhatsAppUrl(message);

  if (floating) {
    return (
      <motion.a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Falar no WhatsApp"
        className={cn(
          "fixed bottom-6 right-6 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-lg shadow-[#25D366]/30 transition-shadow hover:shadow-xl hover:shadow-[#25D366]/40 sm:bottom-8 sm:right-8 sm:h-16 sm:w-16",
          className
        )}
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 1, type: "spring", stiffness: 260, damping: 20 }}
        whileHover={{ scale: 1.08 }}
        whileTap={{ scale: 0.95 }}
      >
        <MessageCircle className="h-7 w-7 sm:h-8 sm:w-8" fill="white" />
      </motion.a>
    );
  }

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={cn(
        "inline-flex items-center justify-center gap-2 rounded-sm bg-[#25D366] px-6 py-3 text-sm font-semibold text-white shadow-md shadow-[#25D366]/20 transition-all duration-300 hover:bg-[#20bd5a] hover:shadow-lg hover:shadow-[#25D366]/30",
        className
      )}
    >
      <MessageCircle className="h-5 w-5" fill="white" />
      {label}
    </a>
  );
}
