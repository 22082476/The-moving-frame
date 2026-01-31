import Image from "next/image";
import { getRandomImagePaths } from "../app/actions";

async function selectRandomImageByAmount(amount: number) {
    const images = await getRandomImagePaths(amount);
    const randomImages = []

    for (let i = 0; i < amount; i++) {
        const randomIndex = Math.floor(Math.random() * images.length);
        randomImages.push(`/images/${images[randomIndex]}`);
    }
    return randomImages;
}

export default async function getRandomImages(amount: number) {
    const images = await selectRandomImageByAmount(amount);
    return mapImagesToImageComponents(images);
}

function mapImagesToImageComponents(images: string[]) {
    return images.map(image => (
        <Image key={image} src={image} alt={image} width={400} height={400} className="rounded-lg" />
    ));
}