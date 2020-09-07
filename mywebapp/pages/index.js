import Head from 'next/head'
import Layout, { siteTitle } from '../components/layout'
import utilStyles from '../styles/utils.module.css'

export default function Home() {
  return (
      <Layout home>
        <Head>
          <title>{siteTitle}</title>
        </Head>
        <section className={utilStyles.headingMd}>
          <p>Hello, I am a software developer</p>
          <p>
            (This is a sample website I have built with the help of {' '}
            <a href="https://nextjs.org/learn">Next.js tutorial</a>.)
          </p>
        </section>
      </Layout>
  )
}