import Seo from "../components/seo"
import { fetchAPI } from "../lib/api"
import { GlobalContext } from "./_app"
import React, { useContext } from "react"
import Layout from "../components/layout"
import ReactMarkdown from "react-markdown"

const BlogPage = ({ blog }) => {
  const { navigation } = useContext(GlobalContext)
  const router = useRouter()

  if (router.isFallback) {
    return <div>Loading product...</div>
  }

  return (
    <Layout navigation={navigation}>
      <Seo seo={blog.attributes.seo} />
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <h1>{blog.title}</h1>
            <p>{blog.body}</p>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export async function getStaticProps(context) {
  const blogRes = await fetchAPI("/blogs", {
    populate: "*",
  })

  return {
    props: { blog: blogRes.data },
    revalidate: 1,
  }
}

export async function getStaticPaths() {
  const blog = await fetchAPI("/blogs", {
    fields: ["title", "slug"],
  })

  return {
    paths: blog.map((_page) => {
      return {
        params: { slug: _page.slug },
      }
    }),
    fallback: true,
  }
}

export default BlogPage
