"use client";

import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";
import { useEffect, useRef, useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowLeft, ArrowRight } from "lucide-react";

const demoPosts = [
  {
    title: "Demo Post 1",
    description: "This is a sample description for the first post.",
    image: "https://picsum.photos/400/200?random=1",
  },
  {
    title: "Demo Post 2",
    description: "Another engaging description goes here.",
    image: "https://picsum.photos/400/200?random=2",
  },
  {
    title: "Demo Post 3",
    description: "Sample text for a third card in the carousel.",
    image: "https://picsum.photos/400/200?random=3",
  },
  {
    title: "Demo Post 4",
    description: "A fourth sample post description for layout testing.",
    image: "https://picsum.photos/400/200?random=4",
  },
  {
    title: "Demo Post 5",
    description: "Final demo post. Responsive and clean design.",
    image: "https://picsum.photos/400/200?random=5",
  },
];

export default function PostList({ posts }) {
  const [sliderRef, instanceRef] = useKeenSlider({
    loop: true,
    slides: {
      perView: 1,
      spacing: 16,
    },
    breakpoints: {
      "(min-width: 640px)": {
        slides: { perView: 1.2, spacing: 16 },
      },
      "(min-width: 768px)": {
        slides: { perView: 1.5, spacing: 16 },
      },
      "(min-width: 1024px)": {
        slides: { perView: 2, spacing: 16 },
      },
      "(min-width: 1280px)": {
        slides: { perView: 2.5, spacing: 16 },
      },
    },
  });

  // Auto-scroll + pause on hover
  useEffect(() => {
    let timeout;
    let mouseOver = false;
    const slider = instanceRef.current;

    const clearNext = () => clearTimeout(timeout);
    const nextTimeout = () => {
      clearNext();
      if (!mouseOver && slider) {
        timeout = setTimeout(() => {
          slider.next();
        }, 3000);
      }
    };

    if (slider) {
      slider.on("created", () => {
        slider.container.addEventListener("mouseover", () => {
          mouseOver = true;
          clearNext();
        });
        slider.container.addEventListener("mouseout", () => {
          mouseOver = false;
          nextTimeout();
        });
        nextTimeout();
      });
      slider.on("dragStarted", clearNext);
      slider.on("animationEnded", nextTimeout);
      slider.on("updated", nextTimeout);
    }

    return () => clearNext();
  }, [instanceRef]);

  // ⬅️⬆️ Render Demo Carousel when no real posts
  if (!Array.isArray(posts) || posts.length === 0) {
    return (
      <div className="relative px-4 py-10">
        {/* Navigation Arrows - Only visible on md+ */}
        <div className="hidden md:flex absolute top-1/2 left-0 -translate-y-1/2 z-10">
          <button
            onClick={() => instanceRef.current?.prev()}
            className="bg-white/80 hover:bg-white text-black p-2 rounded-full shadow-md transition"
          >
            <ArrowLeft size={20} />
          </button>
        </div>
        <div className="hidden md:flex absolute top-1/2 right-0 -translate-y-1/2 z-10">
          <button
            onClick={() => instanceRef.current?.next()}
            className="bg-white/80 hover:bg-white text-black p-2 rounded-full shadow-md transition"
          >
            <ArrowRight size={20} />
          </button>
        </div>

        <div ref={sliderRef} className="keen-slider">
          {demoPosts.map((post, index) => (
            <div key={index} className="keen-slider__slide">
              <Card className="w-full h-full shadow-md">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-48 object-cover"
                />
                <CardHeader>
                  <CardTitle className="text-base">{post.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground line-clamp-3">
                    {post.description}
                  </p>
                </CardContent>
              </Card>
            </div>
          ))}
        </div>
      </div>
    );
  }

  // ✅ Actual Posts
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 px-4 pb-10">
      {posts.map((post) => (
        <Card key={post._id}>
          <CardHeader>
            <CardTitle className="text-base">{post.title}</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-muted-foreground line-clamp-3">
              {post.description}
            </p>
          </CardContent>
        </Card>
      ))}
    </div>
  );
}