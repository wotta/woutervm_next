import Head from "next/head"
import Str from "../../lib/str"

const SeoAdvanced = ({ seo }) => {
  const options = {
    no_index: "noindex",
    no_follow: "nofollow",
  }

  let robotOptions = getRobotOptions(seo, options)

  let canonical = getCanonical(seo)

  return (
    <Head>
      {robotOptions && <meta name="robots" content={robotOptions} />}
      {canonical && <link rel="canonical" href={canonical} />}
    </Head>
  )
}

const getRobotOptions = (seo, options) => {
  return Str("")
    .when(seo.no_index, (string) => {
      return string.concat(options.no_index, ",")
    })
    .when(seo.no_follow, (string) => {
      return string.concat(options.no_index, ",")
    })
    .removeLast(1)
}

const getCanonical = (seo) => {
  return Str("")
    .when(seo.canonical === "current", (string) => {
      return string.concat(seo.canonical, ",")
    })
    .when(seo.canonical === "external", (string) => {
      return string.concat(seo.canonical, ",")
    })
    .when(seo.canonical === "entry", (string) => {
      return string.concat(seo.canonical, ",")
    })
    .removeLast(1)
}

export default SeoAdvanced
