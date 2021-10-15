import Document, { Html, Head, Main, NextScript } from 'next/document'

class MyDocument extends Document {

  render() {
    return (
      <Html lang='en'>
        <Head />
        <body id="console">
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
} 

export default MyDocument

// className="bg-fixed bg-gradient-to-r from-green-500 to-blue-500 dark:from-black dark:to-black"