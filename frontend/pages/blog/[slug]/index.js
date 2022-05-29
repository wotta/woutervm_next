import Seo from "@/components/seo"
import { fetchAPI } from "@/lib/api"
import React, { useContext } from "react"
import Layout from "@/components/layout"
import ReactMarkdown from "react-markdown"
import { useRouter } from "next/router"
import { GlobalContext } from "@/pages/_app"
import BlogMapper from "@/mappers/BlogMapper"

const BlogPage = ({ blog }) => {
  const { navigation } = useContext(GlobalContext)
  const router = useRouter()

  if (router.isFallback) {
    return <div>Loading blog...</div>
  }

  blog = new BlogMapper(blog)

  return (
    <Layout navigation={navigation}>
      {blog.attributes?.seo ? <Seo seo={blog.attributes.seo} /> : null}
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <h1>{blog.getTitle()}</h1>
            <p>{blog.getContent()}</p>
          </div>
        </div>
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
