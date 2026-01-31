import RandomImageComponent from "./random-image-component";
import getRandomImages from "./the-moving-frame-functions";

export default async function TheMovingFrame() {
    const baseImages = await getRandomImages(6);
    return (
        <div className="grid grid-cols-3 gap-4">
            {baseImages.map((image, index) => (
                <RandomImageComponent key={index} baseImageComponent={image} />
            ))}
        </div>
    );
}