const SeoBasic = ({ seo }) => {
  console.log(seo)
  return (
    <>
      {seo.title && (
        <>
          <title>{seo.title}</title>
        </>
      )}
    </>
  )
}

export default SeoBasic
