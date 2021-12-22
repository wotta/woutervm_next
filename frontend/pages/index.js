import React from "react"
import Seo from "../components/seo"
import { fetchAPI, getStrapiURL } from "../lib/api"
import Layout from "../components/layout"
import ReactMarkdown from "react-markdown"

const Home = ({ navigation, homepage }) => {
  let content = homepage.attributes.builder.find(
    (item) => item.__component === "builder.content"
  )

  return (
    <Layout navigation={navigation}>
      <Seo seo={homepage.attributes.seo} />
      <div className="container mt-24 md:mt-18 p-8 rounded prose prose-pink prose-sm sm:prose-lg lg:prose-lg xl:prose-2xl mx-auto">
        <main>
          <article>
            <ReactMarkdown
              children={content.content}
              components={{
                p: ({ node, children }) => {
                  if (node.children[0].tagName === "img") {
                    let image = node.children[0]
                    return (
                      <img
                        {...{
                          ...image.properties,
                          src: getStrapiURL(image.properties.src),
                        }}
                        className="
                          flex w-32 h-32 rounded-full mr-5 ml-3 float-right place-content-start mt-0
                          [shape-outside: circle(50% at 50% 50%)]
                          "
                      />
                    )
                  }

                  return <p>{children}</p>
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
