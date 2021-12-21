import Head from "next/head"
import Str from "../../lib/str"

const SeoAdvanced = ({ seo }) => {
  const options = {
    no_index: "noindex",
    no_follow: "nofollow",
  }

  let robotOptions = Str("")
    .when(seo.no_index, (string) => {
      return string.concat(options.no_index, ",")
    })
    .when(seo.no_follow, (string) => {
      return string.concat(options.no_index, ",")
    })
    .removeLast(1)

  console.log(robotOptions)

  return (
    <Head>
      {robotOptions && <meta name="robots" content={robotOptions} />}
    </Head>
  )
}

export default SeoAdvanced
