import Document, { Html, Head, Main, NextScript } from 'next/document'

class MyDocument extends Document {

  render() {
    return (
      <Html lang='en'>
        {/* <Head /> */}
        <Head>
          <title>Ankit Jain - Portfolio</title>
          <meta name="description" content="A Backend developer from Gurugram,helping businesses to grow and solving problems by providing a efficient & scalable backend service" />
          <meta property='og:url' content='https://anksjain.com/cover1.png' />
          <meta property='og:type' content='website' />
          <meta property='og:title' content='Ankit Jain - Portfolio' />
          <meta
            property='og:description'
            content='A Backend developer from Gurugram,helping businesses to grow and solving problems by providing a efficient & scalable backend service'
          />
          <meta property='og:image' content='https://anksjain.com/cover1.png' />
          <meta property='og:image:alt' content='Ankit Jain Portfolio' />
          {/* Twitter OG Section */}
          <meta name='twitter:title' content='Ankit Jain - Portfolio' />
          <meta
            name='twitter:description'
            content='A Backend developer from Gurugram,helping businesses to grow and solving problems by providing a efficient & scalable backend service'
          />
          <meta name='twitter:image' content='https://anksjain.com/cover1.png' />
          <meta name='twitter:card' content='summary_large_image' />


          <link rel='apple-touch-icon' sizes='180x180' href='/favicon.ico' />

          <link rel='icon' type='image/png' sizes='32x32' href='/favicon.ico' />

          <link rel='icon' type='image/png' sizes='16x16' href='/favicon.ico' />
        </Head>
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