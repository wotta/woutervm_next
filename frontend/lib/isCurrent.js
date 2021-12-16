import { useRouter } from "next/router"

export function isCurrent(path) {
  const { asPath, pathname } = useRouter()

  // console.log(asPath) // '/blog/xyz'
  // console.log(pathname) // '/blog/[slug]'

  return asPath === path
}
