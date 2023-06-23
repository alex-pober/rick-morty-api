import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import CharactersListView from '@/components/CharactersView'


export default function Home() {

  return (
    <>
      <Head>
        <title>Rick & Morty Characters</title>
        <meta name="description" content="Rick & Morty Character List" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <CharactersListView />
      </main>
    </>
  )
}
