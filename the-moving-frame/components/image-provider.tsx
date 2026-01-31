'use client';

import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { getAllImagePaths } from '../app/actions';

interface ImageContextType {
    swapImage: (currentImage: string) => string;
}

const ImageContext = createContext<ImageContextType | undefined>(undefined);

export function ImageProvider({ children, initialImages }: { children: ReactNode, initialImages: string[] }) {
    const [activeImages, setActiveImages] = useState<Set<string>>(new Set(initialImages));
    const [pool, setPool] = useState<string[]>([]);

    useEffect(() => {
        const fetchPool = async () => {
            const allImages = await getAllImagePaths();
            setPool(allImages);
        };
        fetchPool();
    }, []);

    const swapImage = (currentImage: string) => {
        if (pool.length === 0) return currentImage;

        const available = pool.filter(img => !activeImages.has(img));

        if (available.length === 0) {
            const random = pool[Math.floor(Math.random() * pool.length)];
            return random;
        }

        const nextImage = available[Math.floor(Math.random() * available.length)];

        setActiveImages(prev => {
            const newSet = new Set(prev);
            newSet.delete(currentImage);
            newSet.add(nextImage);
            return newSet;
        });

        return nextImage;
    };

    return (
        <ImageContext.Provider value={{ swapImage }}>
            {children}
        </ImageContext.Provider>
    );
}

export function useImageContext() {
    const context = useContext(ImageContext);
    if (!context) {
        throw new Error("useImageContext must be used within an ImageProvider");
    }
    return context;
}
