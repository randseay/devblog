import { Inter } from 'next/font/google';
import Head from 'next/head';
import Image from 'next/image';

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' });

export default function Home() {
  return (
    <>
      <Head>
        <title>Rand Seay | Engineer</title>
        <meta name="description" content="Husband, father, developer" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <h1 className="text-blue-500 text-5xl">Hello There</h1>

        <Image
          src="/headshot.jpg"
          alt="Headshot of Rand"
          width={500}
          height={500}
          priority
        />
      </main>
    </>
  );
}
