import React from 'react'

function page({ posts }) {
  const postsList = posts.map(post => {
    return (
      <li key={post.id}>
        {post.title} <br />
        {post.body}
      </li>
    )
  })

}

export async function getServerSideProps() {
  const response = await fetch("https://jsonplaceholder.typicode.com/posts");
  const data = await response.json()
  return {
    props: {
      posts: {
        posts: data
      }
    }
  }
}

export default page
