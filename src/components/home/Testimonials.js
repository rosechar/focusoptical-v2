"use client";
import React, { useState, useEffect } from "react";
import { Star } from "lucide-react";
import { testimonials } from "@/data/testimonials";

export default function Testimonials() {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => {
      setIsAnimating(true);
      setTimeout(() => {
        setCurrentTestimonial((prev) =>
          prev === testimonials.length - 1 ? 0 : prev + 1
        );
        setIsAnimating(false);
      }, 300);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="px-4 py-8">
      <h2 className="mb-8 text-center text-3xl  text-white uppercase">
        What Our Customers Say
      </h2>
      <div className="max-w-2xl">
        <div className="h-auto max-w-lg p-4 ">
          <div className="text-center">
            <div className="m-4 flex justify-center">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  className="size-8 fill-yellow-400 text-yellow-400"
                />
              ))}
            </div>
            <div className="flex h-32 items-center justify-center">
              <div
                className={`transition-all duration-300 ${
                  isAnimating
                    ? "-translate-y-4 opacity-0"
                    : "translate-y-0 opacity-100"
                }`}
              >
                <p className="mb-4 text-lg italic">
                  {`"${testimonials[currentTestimonial].description}"`}
                </p>
                <p className="font-semibold">
                  - {testimonials[currentTestimonial].author}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
