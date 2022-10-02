import Link from "next/link"
import Layout from "@/components/layout"
import React, { useContext } from "react"
import { GlobalContext } from "@/pages/_app"
import Route from "@/lib/route"
import Str from "@/lib/str"

const Error404 = () => {
  const { navigation } = useContext(GlobalContext)

  return (
    <Layout navigation={navigation}>
      <div className="container mt-24 md:mt-18 p-8 rounded prose prose-pink prose-sm sm:prose-lg lg:prose-lg xl:prose-2xl mx-auto">
        <main>
          <h1>So... what were you looking for?</h1>
          <p>
            {/* eslint-disable-next-line react/no-unescaped-entities */}
            So this is kinda funny but I'm not sure what you were looking for.
            You were looking for{" "}
            <code>
              {Str(Route().current()).removeFirst("/").after("/").toLowerCase()}
            </code>{" "}
            but I never made a page for that. Maybe you should try one of the
            following links?{" "}
          </p>
          <ul>
            <li>
              <Link href="/">Home</Link>
            </li>
            <li>
              <Link href="/blog">Blog</Link>
            </li>
          </ul>
        </main>
      </div>
    </Layout>
  )
}

export default Error404
