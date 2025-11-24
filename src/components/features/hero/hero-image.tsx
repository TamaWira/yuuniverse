import Image from "next/image";

export default function HeroImage() {
  return (
    <div className="w-full h-full">
      <Image
        src="/hero-image.png"
        alt="Hero"
        className="object-cover"
        fill
        priority
      />
    </div>
  );
}
