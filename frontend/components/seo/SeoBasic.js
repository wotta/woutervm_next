import Head from "next/head"

const SeoBasic = ({ seo }) => {
  if (!seo.title) return null

  return (
    <Head>
      <title>{seo.title}</title>
    </Head>
  )
}

export default SeoBasic
