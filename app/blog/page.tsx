import React from "react";
import { Metadata } from "next";
import Link from "next/link";

async function getData() {
  const response = await fetch("https://jsonplaceholder.typicode.com/posts", {
    next: {
      revalidate: 60 // Час через який буде зробиленний запит ще раз
    }
  });

  if(!response.ok) {
    throw new Error('Bad request to server, try latter!')
  }
  return response.json();
}

export const metadata: Metadata = {
  title: "Blog | Next App",
};

async function Blog() {
  const posts = await getData();
  return (
    <section className="blog">
      <h1>Blog Page</h1>
      <ul>
        {posts.map((post: any) => (
          <li key={post.id}>
            <Link href={`/blog/${post.id}`}>{post.title}</Link>
          </li>
        ))}
      </ul>
    </section>
  );
}

export default Blog;
