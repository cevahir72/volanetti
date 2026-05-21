import fs from "fs";
import path from "path";
import GalleryGrid from "@/components/GalleryGrid";

export default function WoodGalleryPage() {
  const galleryDir = path.join(process.cwd(), "public", "gallery");
  let filenames: string[] = [];
  try {
    filenames = fs.readdirSync(galleryDir)
      .filter((file) => /\.(webp|png|jpe?g|svg)$/i.test(file));
  } catch (error) {
    console.error("Failed to read gallery directory:", error);
  }

  return (
    <div className="bg-background text-on-background min-h-screen pt-32 pb-20">
      <GalleryGrid initialImages={filenames} />
    </div>
  );
}
