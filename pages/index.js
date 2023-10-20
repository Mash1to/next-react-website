import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <header>HEADER</header>
      
      <main>
        <div className={styles.container}>
          <h1>CUBE</h1>
          <p>アウトプットしていくサイト</p>
        </div>
      </main>
      
      <footer>FOOTER</footer>
    </>
  )
}

function EachPost() {
  return (
    <article>
      <a href="post.html">
        <h3>記事のタイトル</h3>
      </a>
    </article>
  )
}

export default function Posts() {
  return (
    <section>
      <h2>おすすめ記事</h2>
      <EachPost />
      <EachPost />
    </section>
  )
}