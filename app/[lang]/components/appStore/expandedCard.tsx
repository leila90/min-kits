"use client";

import { motion } from "framer-motion";

type Props = {
    card: any;
    onClose: () => void;
};

export default function ExpandedCard({ card, onClose }: Props) {
    return (
        <>
            {/* Overlay */}
            <motion.div
                className="fixed inset-0 bg-black/80 z-40"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={onClose}
            />

            {/* Expanded card */}
            <motion.div
                layoutId={`card-${card.id}`}
                className="fixed inset-0 z-50 flex items-center justify-center"
                drag="y"
                dragConstraints={{ top: 0, bottom: 0 }}
                onDragEnd={(_, info) => {
                    if (info.offset.y > 150) onClose();
                }}
            >
                <motion.div className="relative w-[90vw] max-w-[700px] h-[80vh] rounded-[20px] overflow-hidden bg-black">

                    {/* Image */}
                    <motion.div
                        layoutId={`image-${card.id}`}
                        className="absolute inset-0"
                    >
                        <img
                            src={card.image}
                            className="w-full h-full object-cover"
                        />
                    </motion.div>

                    {/* Close button */}
                    <button
                        onClick={onClose}
                        className="absolute top-5 right-5 z-50 text-white bg-black/50 rounded-full px-3 py-1 text-sm"
                    >
                        ✕
                    </button>

                    {/* Text – فقط بعد از زوم */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.25 }}
                        className="absolute top-8 left-8 z-40 text-white max-w-md"
                    >
            <span className="uppercase text-sm opacity-80">
              {card.category}
            </span>
                        <h2 className="mt-3 text-3xl font-semibold leading-snug">
                            {card.title}
                        </h2>
                    </motion.div>
                </motion.div>
            </motion.div>
        </>
    );
}
