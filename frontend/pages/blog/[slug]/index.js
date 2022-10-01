import Link from "next/link"
import Seo from "@/components/seo"
import { fetchAPI } from "@/lib/api"
import Layout from "@/components/layout"
import React, { useContext } from "react"
import ReactMarkdown from "react-markdown"
import { GlobalContext } from "@/pages/_app"
import BlogMapper from "@/mappers/BlogMapper"

const BlogPage = ({ blog }) => {
  const { navigation } = useContext(GlobalContext)

  blog = new BlogMapper(blog)

  return (
    <Layout navigation={navigation}>
      <Seo seo={blog.getSeo()} />
      <div className="container mt-24 md:mt-18 p-8 rounded prose prose-pink prose-sm sm:prose-lg lg:prose-lg xl:prose-2xl mx-auto">
        <main>
          <p>
            <Link href="/blog">
              <a>&larr; blog overview</a>
            </Link>

            <time
              className="ml-1 text-base muted font-normal"
              dateTime={blog.getDateTime()}
            >
              {blog.getFormattedDate()}
            </time>
          </p>
          <h1>{blog.getTitle()}</h1>
          <article>
            {blog.getContent().map((_content) => {
              return (
                <div key={_content.id}>
                  <ReactMarkdown>{_content.content}</ReactMarkdown>
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
