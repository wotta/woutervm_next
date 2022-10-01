class Strapi {
  constructor(options) {
    this.options = options

    this.api = axios.create({
      baseURL: options.url,
      headers: {
        Authorization: `Bearer ${options.token}`,
      },
    })
  }

  async get(path, params) {
    return this.api.get(path, { params })
  }
}
