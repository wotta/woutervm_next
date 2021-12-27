import React from "react"
import Seo from "../components/seo"
import { fetchAPI, getStrapiURL } from "../lib/api"
import Layout from "../components/layout"
import ReactMarkdown from "react-markdown"
import MarkdownComponents from "../components/MarkdownComponents"

const Home = ({ navigation, homepage }) => {
  let content = homepage.attributes.builder.find(
    (item) => item.__component === "builder.content"
  )

  const markdownComponents = MarkdownComponents

  return (
    <Layout navigation={navigation}>
      <Seo seo={homepage.attributes.seo} />
      <div className="container mt-24 md:mt-18 p-8 rounded prose prose-pink prose-sm sm:prose-lg lg:prose-lg xl:prose-2xl mx-auto">
        <main>
          <article>
            <ReactMarkdown components={markdownComponents}>
              {content.content}
            </ReactMarkdown>
          </article>
        </main>
      </div>
    </Layout>
  )
}

export async function getStaticProps() {
  // Run API calls in parallel
  const [navigationRes, homepageRes] = await Promise.all([
    fetchAPI("/navigation", { populate: "*" }),
    fetchAPI("/homepage", {
      populate: {
        seo: { populate: "*" },
        builder: { populate: "*" },
      },
    }),
  ])

  return {
    props: {
      navigation: navigationRes.data.attributes.items,
      homepage: homepageRes.data,
    },
    revalidate: 1,
  }
}

export default Home
