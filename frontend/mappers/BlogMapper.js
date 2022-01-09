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

  getSlug() {
    return this.attributes.slug
  }
}

export default BlogMapper
