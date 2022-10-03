import Document, { Html, Head, Main, NextScript } from "next/document"
import Footer from "@/components/footer"

class MyDocument extends Document {
  render() {
    return (
      <Html>
        <Head />
        <body className="bg-gray-100 font-sans antialiased">
          <Main />
          <Footer />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default MyDocument
