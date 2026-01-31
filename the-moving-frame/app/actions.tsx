'use server';

import fs from "fs";
import path from "path";

export async function getRandomImagePaths(amount: number) {
    const directory = path.join(process.cwd(), "public/images");
    const files = fs.readdirSync(directory).filter(file => file.endsWith(".jpeg"));

    const shuffled = files.sort(() => 0.5 - Math.random());
    return shuffled.slice(0, amount).map(file => `/images/${file}`);
}

export async function getAllImagePaths() {
    const directory = path.join(process.cwd(), "public/images");
    const files = fs.readdirSync(directory).filter(file => file.endsWith(".jpeg"));
    return files.map(file => `/images/${file}`);
}
