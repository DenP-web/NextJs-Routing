import { Metadata } from "next";
import React from "react";

async function getData(id: string) {
  const response = await fetch(
    `https://jsonplaceholder.typicode.com/posts/${id}`,
    {
      next: {
        revalidate: 60, // Час через який буде зробиленний запит ще раз
      },
    }
  );
  return response.json();
}

type Props = {
  params: {
    id: string;
  };
};

export async function generateMetadata({
  params: { id },
}: Props): Promise<Metadata> {
  const post = await getData(id)
  // Генерує мета данні для динамічної сторінки
  return {
    title: post.title,
  };
}

async function Post({ params: { id } }: Props) {
  const post = await getData(id);
  return (
    <div className="">
      <h1>Post title: {post.title}</h1>
      <p>{post.body}</p>
    </div>
  );
}

export default Post;
