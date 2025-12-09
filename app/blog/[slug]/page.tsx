import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Blog post",
  description: "Blog post description",
};

export default function BlogPostPage({ params }) {
  return (
    <main>
      <h1>Blog post</h1>
      <p>{params.slug}</p>
    </main>
  );
}
