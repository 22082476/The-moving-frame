import RandomImageComponent from "./random-image-component";
import { ImageProvider } from "./image-provider";

export default async function TheMovingFrame() {
    const { getRandomImagePaths } = await import("../app/actions");
    const baseImages = await getRandomImagePaths(6);

    return (
        <ImageProvider initialImages={baseImages}>
            <div className="grid grid-cols-3 gap-4">
                {baseImages.map((image, index) => (
                    <RandomImageComponent key={index} baseImageComponent={image} />
                ))}
            </div>
        </ImageProvider>
    );
}