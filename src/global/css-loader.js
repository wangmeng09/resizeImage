const CSSLoader = {
  name: 'css-loader',
  render (createElement) {
    var self = this
    if (!s3.istore.getLocal(this.url)) {
      return createElement('link', {
        attrs: {type: 'text/css', rel: 'stylesheet', href: self.url},
        on: {
          load: function () {
            s3.istore.setLocal(self.url, 'loaded')
          }
        }
      })
    }
  },
  props: {
    url: { type: String, required: true }
  }
}

CSSLoader.install = function (Vue) {
  Vue.component(CSSLoader.name, CSSLoader)
}

export default CSSLoader
