'use client';

import { useState, useEffect } from "react";
import { useImageContext } from "./image-provider";
import Image from "next/image";

function selectRandomInterval(min: number, max: number) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

export default function RandomImageComponent({ baseImageComponent }: { baseImageComponent: any }) {
    const [imagePath, setImagePath] = useState<string>(baseImageComponent);
    const { swapImage } = useImageContext();
    const interval = selectRandomInterval(10, 100);

    useEffect(() => {
        const timer = setInterval(() => {
            const nextPath = swapImage(imagePath);
            setImagePath(nextPath);
        }, interval * 1000);
        return () => clearInterval(timer);
    }, [imagePath, interval, swapImage]);

    return (
        <Image key={imagePath} src={imagePath} alt={imagePath} width={400} height={400} className="rounded-lg" />
    );
}