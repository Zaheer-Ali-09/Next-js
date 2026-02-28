import React from "react";
import Link from "next/link";
export default function Home({ todos }) {
  if (!todos) return <p>Loading...</p>;

  const todosList = todos.map((todo) => {
    return (

      <Link key={todo.id} href={`/todos/${todo.id}`}>
        <li className="border cursor-pointer px-3" key={todo.id}>{todo.title}</li>
      </Link>
    );
  }

  );
  return (
    <div>
      <ul className="flex flex-col gap-2 m-2">{todosList}</ul>
    </div>
  );
}
export async function getServerSideProps() {
  const response = await fetch("https://jsonplaceholder.typicode.com/todos");
  const data = await response.json();

  return {
    props: {
      todos: data,
    },
  };
}
