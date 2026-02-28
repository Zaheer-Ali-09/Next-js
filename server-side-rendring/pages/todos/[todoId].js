import React from "react";

export default function Home({ todo }) {
    if (!todo) return <p>Loading...</p>;

    return (
        <div className="flex flex-col gap-2 m-2">
            <p className="border cursor-pointer px-3">{todo.title}</p>
        </div>
    );
}
export async function getServerSideProps({ params }) {
    const { todoId } = params;
    const response = await fetch(`https://jsonplaceholder.typicode.com/todos/${todoId}`);
    const data = await response.json();

    return {
        props: {
            todo: data,
        },
    };
}
