import { fetchAPI } from "@/lib/api"
import Layout from "@/components/layout"
import React, { useContext } from "react"
import { GlobalContext } from "@/pages/_app"
import BlogMapper from "@/mappers/BlogMapper"

const BlogIndex = ({ blogs }) => {
  const { navigation } = useContext(GlobalContext)

  return (
    <Layout navigation={navigation}>
      <div className="container mt-24 md:mt-18 p-8 rounded prose prose-pink prose-sm sm:prose-lg lg:prose-lg xl:prose-2xl mx-auto">
        <main>
          <h1>Blogs</h1>
          <p>
            You can find posts about things that I find interesting or wanted to
            share my experience about.
          </p>

          <hr />

          {blogs.map((_blog) => {
            const blog = new BlogMapper(_blog)

            return (
              <div key={blog.getId()}>
                <h2>{blog.getTitle()}</h2>
                <p>
                  <a href={`blog/${blog.getSlug()}`}>Read more</a>
                </p>
              </div>
            )
          })}
        </main>
      </div>
    </Layout>
  )
}

export async function getStaticProps() {
  const blogsRes = await fetchAPI("/blogs", {
    fields: ["title", "slug"],
  })

  return {
    props: {
      blogs: blogsRes.data,
    },
    revalidate: 1,
  }
}

export default BlogIndex
