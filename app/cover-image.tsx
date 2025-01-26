import ContentfulImage from "../lib/contentful-image";
import Link from "next/link";

function cn(...classes: (string | { [key: string]: boolean })[]) {
   return classes
    .map((cls) => {
      if (typeof cls === "string") {
        return cls;
      } else if (typeof cls === "object") {
        return Object.entries(cls)
          .filter(([key, value]) => value)
          .map(([key]) => key)
          .join(" ");
      }
    })
    .filter(Boolean)
    .join(" ");
}


export default function CoverImage({
  title,
  url,
  slug,
}: {
  title: string;
  url: string;
  slug?: string;
}) {
  const image = (
    <ContentfulImage
      alt={`Cover Image for ${title}`}
      priority
      width={2000}
      height={1000}
      className={cn("shadow-small", {
        "hover:shadow-medium transition-shadow duration-200": !!slug,
      },
      "absolute","top-0","left-0","w-full","h-full","object-cover","background-position-center"
    
    )}
      src={url}
    />
  );

  return (
    <div className="sm:mx-0">
      {slug ? (
        <Link href={`/posts/${slug}`} aria-label={title}>
          {image}
        </Link>
      ) : (
        image
      )}
    </div>
  );
}
