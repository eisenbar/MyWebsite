import Head from 'next/head'
import Layout, { siteTitle } from '../components/layout'
import utilStyles from '../styles/utils.module.css'
import { getSortedPostsData } from "../lib/posts";
import Link from 'next/link';
import Date from '../components/date';
import React from "react";
import {TitleLoadFade} from "../animations/TitleLoadFade";
import {TransitionExit} from "../animations/TransitionExit";
import { motion } from "framer-motion";


/*
Use this for server side rendering on compile time
Use to grab external data
 */
export async function getStaticProps() {
    const allPostsData = getSortedPostsData();

    return {
        props: {
            allPostsData
        }
    }
}

/*
Use this for server side rendering on runtime
Used to pre-render data that needs to be fetched at request time
 */
/*export async function getServerSideProps(context) {
    return {
        props: {
            // props for your component
        }
    }
}*/

export default function Home({allPostsData}) {
  return (
      <Layout home>
          <Head>
              <title>{siteTitle}</title>
          </Head>

          <section className={`${utilStyles.headingMd} ${utilStyles.padding1px} `}>

              <TitleLoadFade title={<h1 className={utilStyles.header}>Index</h1>} />

              <div className={utilStyles.indexItem}>
                  <Link href="/Example">
                      <a>Example</a>
                  </Link>
              </div>

              <div className={utilStyles.indexItem}>
                  <Link href="/aboutMe">
                      <a>About Me</a>
                  </Link>
              </div>

              <div className={utilStyles.indexItem}>
                  <Link href="/skills">
                      <a>Skills</a>
                  </Link>
              </div>

              <div className={utilStyles.indexItem}>
                  <Link href="/experience">
                      <a>Experience</a>
                  </Link>
              </div>


          </section>
      </Layout>
  )
}



/*
Deprecated code, might use later

<section className={utilStyles.headingMd}>
          <p>Hello, I am a software developer</p>
          <p>
            (This is a sample website I have built with the help of {' '}
            <a href="https://nextjs.org/learn">Next.js tutorial</a>.)
          </p>
        </section>



<ul className={utilStyles.list}>
                      {allPostsData.map(({id, date, title}) => (
                          <li className={utilStyles.listItem} key={id}>
                              <Link href="/posts/[id]" as={`/posts/${id}`}>
                                  <a>{title}</a>
                              </Link>
                              <br/>
                              <small className={utilStyles.lightText}>
                                  <Date dateString={date}/>
                              </small>
                          </li>
                      ))}
                  </ul>
 */