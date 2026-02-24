"use client"
import { useEffect, useState } from "react";

export default function CSRPage() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts?_limit=5")
      .then(res => res.json())
      .then(data => setData(data));
  }, []);

  return (
    <div style={{ padding: "20px" }}>
      <h1>CSR Page</h1>

      {data.length === 0 ? (
        <p>Loading...</p>
      ) : (
        data.map(post => (
          <div key={post.id}>
            <h3>{post.title}</h3>
          </div>
        ))
      )}
    </div>
  );
}
// Server Side Rendering 
// async function getPosts() {
//     const res = await fetch("https://jsonplaceholder.typicode.com/posts?_limit=5", {
//         cache: "no-store",
//     });
//     return res.json();
// }

// export default async function SSRPage() {
//     const data = await getPosts();

//     return (
//         <div style={{ padding: "20px" }}>
//             <h1>SSR Page</h1>

//             {data.map(post => (
//                 <div key={post.id}>
//                     <h3>{post.title}</h3>
//                 </div>
//             ))}
//         </div>
//     );
// }