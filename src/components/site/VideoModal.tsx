import { X } from "lucide-react";
import { useEffect } from "react";

interface VideoModalProps {
  open: boolean;
  onClose: () => void;
  title?: string;
  youtubeId?: string;
  src?: string;
}

export function VideoModal({ open, onClose, youtubeId, src, title = "Walkthrough" }: VideoModalProps) {
  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && onClose();
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [open, onClose]);

  if (!open) return null;
  if (!youtubeId && !src) return null;

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center bg-black/85 backdrop-blur-sm p-4 animate-in fade-in"
      onClick={onClose}
    >
      <button
        aria-label="Close video"
        onClick={onClose}
        className="absolute right-6 top-6 grid h-11 w-11 place-items-center rounded-full bg-white/10 text-white hover:bg-white/20 transition"
      >
        <X className="h-5 w-5" />
      </button>
      <div
        className="relative w-full max-w-5xl aspect-video shadow-2xl ring-1 ring-white/10"
        onClick={(e) => e.stopPropagation()}
      >
        {src ? (
          <video
            src={src}
            title={title}
            className="h-full w-full bg-black"
            controls
            autoPlay
            playsInline
          />
        ) : (
          <iframe
            src={`https://www.youtube.com/embed/${youtubeId}?autoplay=1&rel=0`}
            title={title}
            className="h-full w-full"
            allow="autoplay; encrypted-media; picture-in-picture"
            allowFullScreen
          />
        )}
      </div>
    </div>
  );
}
