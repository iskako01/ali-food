import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Blog post",
  description: "Blog post description",
};

export default async function BlogPostPage(props) {
  const { slug } = await props.params;

  console.log({ slug });

  return (
    <main>
      <h1>Blog post</h1>
      <p>{slug}</p>
    </main>
  );
}
