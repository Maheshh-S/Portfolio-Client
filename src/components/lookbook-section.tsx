"use client";

import Image from "next/image";
import { useRef, useState } from "react";

const galleryItems = [
  "/gallery/1.jpg",
  "/gallery/2.mp4",
  "/gallery/3.png",
  "/gallery/4.mp4",
  "/gallery/6.jpg",
  "/gallery/7.mp4",
  "/gallery/5.jpg",
  "/gallery/8.mp4",
  "/gallery/9.mp4",
  "/gallery/10.mp4",
  "/gallery/11.mp4",
  "/gallery/12.mp4",

  "/gallery/13.mp4",

  "/gallery/14.mp4",
  "/gallery/15.mp4"

];

export function LookbookSection() {
  const videoRefs = useRef<(HTMLVideoElement | null)[]>([]);
  const [activeVideo, setActiveVideo] = useState<number | null>(null);

  const toggleVideoAudio = (index: number) => {
    videoRefs.current.forEach((video, i) => {
      if (!video) return;

      if (i === index) {
        const shouldUnmute = video.muted;

        video.muted = !shouldUnmute;

        if (shouldUnmute) {
          setActiveVideo(index);
        } else {
          setActiveVideo(null);
        }
      } else {
        video.muted = true;
      }
    });
  };

  return (
    <section
      className="lookbook-section"
      id="lookbook"
      aria-label="Cinematic gallery"
    >
      <div className="lookbook-masonry">
        {galleryItems.map((item, index) => {
          const isVideo = item.endsWith(".mp4");

          return (
            <figure
              className="lookbook-item"
              key={item}
            >
              {isVideo ? (
                <div
                  className="lookbook-video-wrap"
                  onClick={() => toggleVideoAudio(index)}
                >
                  <video
                    ref={(el) => {
                      videoRefs.current[index] = el;
                    }}
                    className="lookbook-video"
                    autoPlay
                    loop
                    muted
                    playsInline
                    preload="metadata"
                  >
                    <source src={item} type="video/mp4" />
                  </video>

                  <div className="video-indicator">
                    {activeVideo === index ? "Sound On" : "Muted"}
                  </div>
                </div>
              ) : (
                <Image
                  src={item}
                  alt=""
                  width={1200}
                  height={1600}
                  className="lookbook-image"
                />
              )}
            </figure>
          );
        })}
      </div>
    </section>
  );
}