const Str = (str) => {
  return {
    explode: (delimiter) => {
      return str.split(delimiter)
    },

    before: (key) => {
      return str.valueOf().substring(0, str.indexOf(key))
    },

    beforeLast: (key) => {
      return str.valueOf().substring(0, str.lastIndexOf(key))
    },

    after: (key) => {
      let location = str.indexOf(key)
      return str.valueOf().substring(location + key.length)
    },

    between: (from, to) => {
      if (from === "" || to === "") {
        return Str(str)
      }

      return Str(Str(str).after(from)).beforeLast(to)
    },

    trim: () => {
      return str.trim()
    },

    replace: (search, replace) => {
      return str.replace(search, replace)
    },

    toLowerCase: () => {
      return str.toLowerCase()
    },

    toUpperCase: () => {
      return str.toUpperCase()
    },

    length: () => {
      return str.length
    },

    isEmpty: () => {
      return str.length === 0
    },

    isNotEmpty: () => {
      return str.length > 0
    },

    removeFirst: (n) => {
      let locator = str.indexOf(n)

      return Str(str.substring(0, locator) + str.substring(locator + 1))
    },

    removeLast: (n = 1) => {
      return str.substring(0, str.length - n)
    },

    endsWith: (suffix) => {
      return str.indexOf(suffix, str.length - suffix.length) !== -1
    },

    append: (suffix) => {
      return Str(str + suffix)
    },

    when: (condition, callback, defaultReturn = null) => {
      if (condition) {
        str = callback instanceof Function ? callback(str) : str

        return Str(str)
      } else if (defaultReturn) {
        str = defaultReturn instanceof Function ? defaultReturn(str) : str

        return Str(str)
      }

      return Str(str)
    },

    unless: (condition, callback, defaultReturn = null) => {
      if (!condition) {
        str = callback instanceof Function ? callback(str) : str

        return Str(str)
      } else if (defaultReturn) {
        str = defaultReturn instanceof Function ? defaultReturn(str) : str

        return Str(str)
      }

      return Str(str)
    },

    value: () => {
      return str
    },
  }
}

export default Str
