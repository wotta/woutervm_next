import Head from "next/head"
import Str from "../../lib/str"
import Route from "../../lib/route"

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
    .when(seo.canonical_url === "current", (string) => {
      return Route().current()
    })
    .when(seo.canonical_url === "external" && seo.url, (string) => {
      return seo.url
    })
    .when(seo.canonical_url === "entry", (string) => {
      return string.concat(seo.canonical, ",")
    })
    .value()
}

export default SeoAdvanced
