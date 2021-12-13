import React from "react"
import Image from "next/image"
import Seo from "../components/seo"
import { fetchAPI } from "../lib/api"
import Layout from "../components/layout"
import ReactMarkdown from "react-markdown"

const Home = ({ categories, homepage }) => {
  let content = homepage.attributes.builder.find(
    (item) => item.__component === "builder.content"
  )

  return (
    <Layout categories={categories}>
      <Seo seo={homepage.attributes.seo} />
      <div className="container mt-24 md:mt-18 p-8 rounded prose prose-pink prose-sm sm:prose-lg lg:prose-lg xl:prose-2xl mx-auto">
        <main>
          <h1>{homepage.attributes.hero.title}</h1>
          <article>
            <ReactMarkdown
              source={content.content}
              escapeHtml={false}
              components={{
                img: (props) => {
                  console.log(props)
                  return (
                    <Image
                      src={props.src}
                      width={props.width}
                      height={props.height}
                      alt={props.alt}
                      quality={80}
                      className="rounded-lg"
                    />
                  )
                },
              }}
            />
          </article>
        </main>
      </div>
    </Layout>
  )
}

export async function getStaticProps() {
  // Run API calls in parallel
  const [categoriesRes, homepageRes] = await Promise.all([
    fetchAPI("/categories", { populate: "*" }),
    fetchAPI("/homepage", {
      populate: {
        hero: "*",
        seo: { populate: "*" },
        builder: { populate: "*" },
      },
    }),
  ])

  return {
    props: {
      categories: categoriesRes.data,
      homepage: homepageRes.data,
    },
    revalidate: 1,
  }
}

export default Home
