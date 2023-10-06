import { CardanoWallet } from '@meshsdk/react'

export default function Home() {
  return (
    <>
      <Head>
        <title>Persistent Cardano Button</title>
        <meta name='description' content='Generated by create next app' />
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <main>
        <CardanoWallet />
      </main>
    </>
  )
}
