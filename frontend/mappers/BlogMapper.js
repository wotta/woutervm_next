import { format } from "date-fns"

class BlogMapper {
  constructor(blog) {
    this.blog = blog

    this.attributes = this.blog?.attributes || {}
  }

  getId() {
    return this.blog.id
  }

  getTitle() {
    return this.attributes.title
  }

  getReadMore(maxLength=50) {
    return this.getTitle().length > maxLength ?
        this.getTitle().substring(0, maxLength) + " ... read more" :
        this.getTitle();
  }

  getSlug() {
    return this.attributes.slug
  }

  getContent() {
    return this.attributes.builder.filter(
      (item) => item.__component === "builder.content"
    )
  }

  getSeo() {
    return this.attributes.seo
  }

  getFormattedDate() {
    return format(new Date(this.attributes.publishedAt), "MMMM dd, yyyy")
  }

  getDateTime() {
    return this.attributes.publishedAt
  }
}

export default BlogMapper
