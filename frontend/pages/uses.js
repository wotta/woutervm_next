import Seo from "../components/seo"
import { fetchAPI } from "../lib/api"
import { GlobalContext } from "./_app"
import React, { useContext } from "react"
import Layout from "../components/layout"
import ReactMarkdown from "react-markdown"

const Uses = ({ uses }) => {
  const { navigation } = useContext(GlobalContext)

  return (
    <Layout navigation={navigation}>
      <Seo seo={uses.attributes.seo} />
      <div className="container mt-24 md:mt-18 p-8 rounded prose prose-pink prose-sm sm:prose-lg lg:prose-lg xl:prose-2xl mx-auto">
        <main>
          {uses.attributes.builder &&
            uses.attributes.builder.map((builder, index) => {
              return (
                <div key={index} className="mb-8">
                  <ReactMarkdown>{builder.content}</ReactMarkdown>
                </div>
              )
            })}
        </main>
      </div>
    </Layout>
  )
}

export async function getStaticProps(context) {
  const usesRes = await fetchAPI("/use", {
    populate: "*",
  })

  return {
    props: { uses: usesRes.data },
    revalidate: 1,
  }
}

export default Uses
