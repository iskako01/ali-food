"use client";

export default function ErrorPage({ error }) {
  console.log(error);

  return (
    <main className="error">
      <h1>Error</h1>
      <p>{error.message}</p>
    </main>
  );
}
