import Link from "next/link"
import Str from "@/lib/str"

const CustomLink = (props) => {
  const fullMarkdownText = props.children.toString()

  const hasTarget = fullMarkdownText.includes("{{target")

  const tagText = hasTarget
    ? Str(fullMarkdownText).before("{{target").trim()
    : fullMarkdownText

  return (
    <>
      {hasTarget && (
        <a
          href={props.href}
          title={`Visit ${tagText}`}
          target={Str(fullMarkdownText).between('{{target="', '"}}')}
        >
          {tagText}
        </a>
      )}

      {!hasTarget && (
        <a href={props.href} title={`Visit ${tagText}`}>
          {tagText}
        </a>
      )}
    </>
  )
}

export default CustomLink
