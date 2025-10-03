"use client";

import React, { useState } from "react";
import { Play } from "lucide-react"; // Import Play icon instead of PlayCircle
import { cn } from "@/lib/utils";

interface YouTubeVideoPlayerProps {
  videoId: string;
  title?: string;
  className?: string;
}

const YouTubeVideoPlayer: React.FC<YouTubeVideoPlayerProps> = ({ videoId, title = "YouTube video player", className }) => {
  const [isPlaying, setIsPlaying] = useState(false);

  const thumbnailUrl = `https://img.youtube.com/vi/${videoId}/maxresdefault.jpg`;
  const embedUrl = `https://www.youtube.com/embed/${videoId}?autoplay=1&rel=0`;

  return (
    <div className={cn("relative w-full aspect-video rounded-lg overflow-hidden", className)}>
      {!isPlaying ? (
        <div
          className="relative w-full h-full flex items-center justify-center bg-cover bg-center cursor-pointer group"
          style={{ backgroundImage: `url(${thumbnailUrl})` }}
          onClick={() => setIsPlaying(true)}
        >
          <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
            {/* Custom play button: purple circle with white play triangle */}
            <div className="h-20 w-20 rounded-full bg-accent flex items-center justify-center opacity-80 group-hover:opacity-100 transition-opacity duration-300">
              <Play className="h-10 w-10 text-accent-foreground" /> {/* Use Play icon and white text */}
            </div>
          </div>
          <span className="sr-only">Play video</span>
        </div>
      ) : (
        <iframe
          className="w-full h-full"
          src={embedUrl}
          title={title}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      )}
    </div>
  );
};

export default YouTubeVideoPlayer;