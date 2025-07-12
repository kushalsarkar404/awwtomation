
// src/components/BlogCard.tsx
import Link from "next/link";
import Image from "next/image";

export interface BlogCardProps {
  post: {
    slug: string;
    title: string;
    excerpt: string;
    date: string;
    coverImage?: string;
  };
}

export function BlogCard({ post }: BlogCardProps) {
  return (
    <Link
      href={`/blog/${post.slug}`}
      className="group rounded-xl border border-muted p-4 transition-shadow hover:shadow-lg bg-background"
    >
      {post.coverImage && (
        <div className="mb-4 rounded-md overflow-hidden">
          <Image
            src={post.coverImage}
            alt={post.title}
            width={600}
            height={300}
            className="rounded-md object-cover w-full h-48 transition-transform group-hover:scale-105"
          />
        </div>
      )}
      <div className="space-y-2">
        <h2 className="text-lg font-semibold text-foreground group-hover:text-primary transition">
          {post.title}
        </h2>
        <p className="text-sm text-muted-foreground">{post.excerpt}</p>
        <p className="text-xs text-gray-400 mt-1">{post.date}</p>
      </div>
    </Link>
  );
}