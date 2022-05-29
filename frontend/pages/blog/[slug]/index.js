import Seo from "@/components/seo"
import { fetchAPI } from "@/lib/api"
import React, { useContext } from "react"
import Layout from "@/components/layout"
import ReactMarkdown from "react-markdown"
import { GlobalContext } from "@/pages/_app"
import BlogMapper from "@/mappers/BlogMapper"
import remarkGfm from "remark-gfm"

const BlogPage = ({ blog }) => {
  const { navigation } = useContext(GlobalContext)

  blog = new BlogMapper(blog)

  return (
    <Layout navigation={navigation}>
      <Seo seo={blog.getSeo()} />
      <div className="container mt-24 md:mt-18 p-8 rounded prose prose-pink prose-sm sm:prose-lg lg:prose-lg xl:prose-2xl mx-auto">
        <main>
          <h1>{blog.getTitle()}</h1>
          <article>
            {blog.getContent().map((_content) => {
              return (
                <div key={_content.id}>
                  <ReactMarkdown
                    children={_content.content}
                    // remarkPlugins={[remarkGfm]}
                  />
                </div>
              )
            })}
          </article>
        </main>
      </div>
    </Layout>
  )
}

export async function getStaticProps({ params }) {
  const blogRes = await fetchAPI(`/blogs`, {
    filters: {
      slug: { $eq: params.slug },
    },
    populate: "*",
  })

  return {
    props: { blog: blogRes.data[0] },
    revalidate: 1,
    notFound: blogRes.data.length === 0,
  }
}

export async function getStaticPaths() {
  const blog = await fetchAPI("/blogs", {
    fields: ["title", "slug"],
  })

  return {
    paths: blog.data.map((_page) => {
      return {
        params: { slug: _page.attributes.slug },
      }
    }),
    fallback: "blocking",
  }
}

export default BlogPage
