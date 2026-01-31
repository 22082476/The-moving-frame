'use server';

import fs from "fs";
import path from "path";

export async function getRandomImagePaths(amount: number) {
    const directory = path.join(process.cwd(), "public/images");
    const files = fs.readdirSync(directory).filter(file => file.endsWith(".jpeg"));

    const randomImages: string[] = [];
    for (let i = 0; i < amount; i++) {
        const randomIndex = Math.floor(Math.random() * files.length);
        randomImages.push(files[randomIndex]);
    }

    return randomImages;
}
