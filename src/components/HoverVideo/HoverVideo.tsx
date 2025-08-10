import { useState } from "react";

export default function HoverVideo({ videoId }: any) {
     const [hovered, setHovered] = useState(false);

     const thumbnail = `https://img.youtube.com/vi/${videoId}/hqdefault.jpg`;
     const embedUrl = `https://www.youtube.com/embed/${videoId}?autoplay=1&mute=0&controls=0&loop=1playlist=${videoId}`;

     return (
          <div
               className="w-full h-full"
               onMouseEnter={() => setHovered(true)}
               onMouseLeave={() => setHovered(false)}
          >
               {!hovered ? (
                    <img
                         src={thumbnail}
                         alt="video thumbnail"
                         className="w-full h-full object-cover"
                    />
               ) : (
                    <iframe
                         className="w-full h-full"
                         src={embedUrl}
                         title="YouTube video"
                         allow="autoplay; encrypted-media"
                    />
               )}
          </div>

     );
}
