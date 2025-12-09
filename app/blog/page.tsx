import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Blog Page",
  description: "Blog Page description",
};

export default function BlogPage() {
  return (
    <main>
      <h1>Blog Page</h1>
      <p>
        <Link href="/blog/post-1">post-1</Link>
      </p>
      <p>
        <Link href="/blog/post-2">post-2</Link>
      </p>
      <p>
        <Link href="/blog/post-3">post-3</Link>
      </p>
    </main>
  );
}
