"use client";

import { Alert, AlertDescription } from "@/components/ui/alert";
import { Volume2 } from "lucide-react";

export default function Marquee({ text }) {
  if (!text) return null; // Hide when no data

  return (
    <Alert className="rounded-none border-0 bg-muted text-muted-foreground px-4 py-2">
      <div className="flex items-center gap-2">
        <Volume2 className="h-4 w-4 text-yellow-500" />
        <AlertDescription className="truncate whitespace-nowrap">
          {text}
        </AlertDescription>
      </div>
    </Alert>
  );
}