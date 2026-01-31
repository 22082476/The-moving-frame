'use client';

import { useState, useEffect } from "react";
import { useImageContext } from "./image-provider";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";

function selectRandomInterval(min: number, max: number) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

export default function RandomImageComponent({ baseImageComponent }: { baseImageComponent: any }) {
    const [imagePath, setImagePath] = useState<string>(baseImageComponent);
    const { swapImage } = useImageContext();
    const interval = selectRandomInterval(5, 50);

    useEffect(() => {
        const timer = setInterval(() => {
            const nextPath = swapImage(imagePath);
            setImagePath(nextPath);
        }, interval * 1000);
        return () => clearInterval(timer);
    }, [imagePath, interval, swapImage]);

    return (
        <AnimatePresence mode="wait">
            <motion.div
                className="inline-block relative w-[350px] h-[350px]"
                key={imagePath}
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -50 }}
                transition={{ duration: 1.2, ease: "easeInOut" }}
            >
                <Image src={imagePath} alt={imagePath} fill className="rounded-lg block" />
            </motion.div>
        </AnimatePresence>
    );
}