'use client';

import { useState, useEffect } from "react";
import getRandomImages from "./the-moving-frame-functions";

function selectRandomInterval(min: number, max: number) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

export default function RandomImageComponent({ baseImageComponent }: { baseImageComponent: any }) {
    const [image, setImage] = useState(baseImageComponent);
    const interval = selectRandomInterval(10, 100);

    useEffect(() => {
        const timer = setInterval(async () => {
            const nextImage = (await getRandomImages(1))[0];
            setImage(nextImage);
        }, interval * 1000);
        return () => clearInterval(timer);
    }, []);
    return (
        image
    );
}