import Meta from 'components/meta';
import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from 'styles/home.module.css'
import Container from 'components/container'
import Hero from '../components/hero'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <Container>
      <Meta />
      <Hero title="CUBE" subtitle="アウトプットしていくサイト" imageOn />
    </Container>
  )
}