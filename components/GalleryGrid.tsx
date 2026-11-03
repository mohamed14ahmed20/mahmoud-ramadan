"use client";

import React, { useState } from "react";
import Image from "next/image";
import { siteConfig } from "@/data/site";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";

export function GalleryGrid({ limit, className }: { limit?: number, className?: string }) {
    const [open, setOpen] = useState(false);
    const [index, setIndex] = useState(0);

    const items = limit ? siteConfig.gallery.slice(0, limit) : siteConfig.gallery;

    const slides = siteConfig.gallery.map((img) => ({
        src: img.src,
        alt: img.alt,
        width: 3840,
        height: 2560,
    }));

    return (
        <>
            <div className={`grid gap-6 ${className || "grid-cols-2 md:grid-cols-3"}`}>
                {items.map((img, i) => (
                    <div
                        key={img.id}
                        className="relative aspect-square rounded-xl overflow-hidden cursor-pointer group shadow-md hover:shadow-xl transition-all"
                        onClick={() => {
                            setIndex(i);
                            setOpen(true);
                        }}
                    >
                        <Image
                            src={img.src}
                            alt={img.alt}
                            fill
                            className="object-cover transition-transform duration-700 group-hover:scale-110"
                        />
                        <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center p-4 text-center">
                            <span className="text-white font-bold text-lg translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                                {img.alt}
                            </span>
                        </div>
                    </div>
                ))}
            </div>

            <Lightbox
                open={open}
                close={() => setOpen(false)}
                index={index}
                slides={slides}
            />
        </>
    );
}
