import Head from 'next/head';
import Layout from '../components/Layout';

export default function Home() {
  return (
    <>
      <Head>
        <title>Your Website</title>
        <meta name="description" content="Your Website" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout>
        <div className="flex flex-col justify-center">
          <h1 className="text-4xl text-gray-900 dark:text-blue-400 font-extrabold mb-4">
            Your Name
          </h1>
          <h2 className="text-xl text-gray-900 dark:text-white mb-16">
            What you do <br />
            What you do
          </h2>
          <h3 className="text-gray-900 dark:text-white ">Areas of Interest</h3>
        </div>
      </Layout>
    </>
  );
}
