import App from "next/app"
import Head from "next/head"
import "../assets/css/style.css"
import { createContext } from "react"
import { fetchAPI } from "@/lib/api"
import { getStrapiMedia } from "@/lib/media"

// Store Strapi Global object in context
export const GlobalContext = createContext({})

const MyApp = ({ Component, pageProps }) => {
  const { global, navigation } = pageProps
  const combinedProps = {
    ...global?.attributes,
    navigation,
  }

  return (
    <>
      <Head>
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        />
        <link rel="manifest" href="/site.webmanifest" />
      </Head>
      <GlobalContext.Provider value={combinedProps}>
        <Component {...pageProps} />
      </GlobalContext.Provider>
    </>
  )
}

// getInitialProps disables automatic static optimization for pages that don't
// have getStaticProps. So article, category and home pages still get SSG.
// Hopefully we can replace this with getStaticProps once this issue is fixed:
// https://github.com/vercel/next.js/discussions/10949
MyApp.getInitialProps = async (ctx) => {
  // Calls page's `getInitialProps` and fills `appProps.pageProps`
  const appProps = await App.getInitialProps(ctx)
  // Fetch global site settings from Strapi
  const [globalRes, navigationRes] = await Promise.all([
    fetchAPI("/global", {
      populate: {
        favicon: "*",
      },
    }),
    fetchAPI("/navigation", { populate: "*" }),
  ])
  // Pass the data to our page via props
  return {
    ...appProps,
    pageProps: {
      global: globalRes.data,
      navigation: navigationRes.data.attributes.items,
    },
  }
}

export default MyApp
