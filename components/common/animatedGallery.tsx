"use client"

import { motion } from "framer-motion";
import Image from "next/image";

const items = [
    "/images/gallery1.jpg",
    "/images/gallery2.jpg",
    "/images/gallery3.jpg",
    "/images/gallery4.jpg",
];

export default function AnimatedGallery() {
    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 p-8">
            {items.map((src, idx) => (
                <motion.div
                    key={idx}
                    className="relative w-full h-64 rounded-xl overflow-hidden shadow-xl"
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true, amount: 0.4 }}
                    transition={{
                        type: "spring",
                        stiffness: 200,
                        damping: 20,
                        delay: idx * 0.1,
                    }}
                >
                    <Image
                        src={src}
                        alt={`gallery-${idx}`}
                        fill
                        className="object-cover"
                    />
                </motion.div>
            ))}
        </div>
    );
}
