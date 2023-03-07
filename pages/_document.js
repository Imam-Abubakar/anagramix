import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html>
      <Head>
        <meta property="og:title" content="Anagramix" key="title"/>
        <meta property="og:description" content="Word Anagram Solver" key="description"/>
        <meta
          property="og:image"
          content="https://drive.google.com/file/d/1IsdRd8vwLoa5Z017VQOGmOpb1PeUq6fo/view?usp=share_link"
        />
        <meta name="twitter:card" content="Anagramix by Abubakardev"></meta>
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
