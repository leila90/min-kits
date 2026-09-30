"use client";

import { motion } from "framer-motion";

type Props = {
    card: any;
    onClick: () => void;
};

export default function AppStoreCard({ card, onClick }: Props) {
    return (
        <motion.li
            layoutId={`card-${card.id}`}
            onClick={onClick}
            className="relative h-[420px] flex-[0_0_40%] cursor-pointer"
        >
            <motion.div
                layoutId={`content-${card.id}`}
                className="relative w-full h-full rounded-[20px] overflow-hidden bg-neutral-900"
            >
                {/* Image */}
                <motion.div
                    layoutId={`image-${card.id}`}
                    className="relative h-full overflow-hidden"
                >
                    <img
                        src={card.image}
                        alt=""
                        className={`absolute ${card.imageStyle}`}
                    />
                </motion.div>

                {/* Title */}
                <motion.div
                    layoutId={`title-${card.id}`}
                    className="absolute top-[15px] left-[15px] max-w-[300px] text-white"
                >
                    <span className="text-sm uppercase">{card.category}</span>
                    <h2 className="mt-2 text-xl font-semibold leading-snug">
                        {card.title}
                    </h2>
                </motion.div>
            </motion.div>
        </motion.li>
    );
}
