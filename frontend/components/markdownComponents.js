import { getStrapiURL } from "../lib/api"

const MarkdownComponents = {
  p: function p({ node, children }) {
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
}

export default MarkdownComponents
