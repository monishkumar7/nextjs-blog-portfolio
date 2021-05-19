import Head from 'next/head';
import Link from 'next/link';

import { getPosts } from '../../lib/posts';
import Footer from '../../components/Footer';
import ActiveLink from '../../components/ActiveLink';

export async function getStaticProps() {
  const posts = await getPosts();

  if (!posts) {
    return {
      notFound: true,
    };
  }

  return {
    props: { posts },
    revalidate: 1,
  };
}

export default function Home(props) {
  return (
    <div>
      <Head>
        <title>Your Blog Title</title>
        <meta name="description" content="Monish Kumar's Blog" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="bg-blue-50 dark:bg-gray-900 md:h-screen md:flex">
        <div className="bg-blue-100 dark:bg-gray-800 md:bg-blue-50 md:dark:bg-gray-900 text-center md:text-left md:pl-8 xl:w-1/4 2xl:w-1/5 pt-20 md:w-1/3 md:flex md:justify-between md:flex-col">
          <div>
            <div className="md:border-b-4 md:border-blue-400 pb-4">
              <h1 className="px-1 md:px-0 text-center md:text-left text-3xl md:text-4xl text-dark-900 dark:text-blue-400 font-extrabold mb-1">
                Your Blog Title
              </h1>
              <h2 className="text-xl text-gray-900 dark:text-white text-center md:text-left">
                Your Blog Subtitle
              </h2>
            </div>
            <div className="flex md:flex-col md:items-start md:space-x-0 md:space-y-2 py-8 space-x-4 justify-center items-center">
              <ActiveLink href="/">
                <a className="nav-link pl-0">Home</a>
              </ActiveLink>
              <ActiveLink activeClassName="active-link" href="/projects">
                <a className="nav-link pl-0">Projects</a>
              </ActiveLink>
            </div>
          </div>
          <div className="hidden md:block">
            <Footer />
          </div>
        </div>
        <div className="md:flex-1 md:flex md:overflow-hidden">
          <div className="md:flex-1 md:overflow-y-scroll">
            <p className="text-center md:text-left tracking-wider pt-8 md:pt-20 mb-8 md:pl-16 uppercase text-gray-500 dark:text-gray-400">
              Latest Posts
            </p>
            <div className="space-y-8 px-2 md:px-8 max-w-prose pb-20">
              {props.posts.map((post) => (
                <div className="px-4 md:px-8" key={post.id}>
                  <Link href={`/blog/${post.slug}`}>
                    <h3 className="text-gray-900 dark:text-white font-bold text-xl cursor-pointer">
                      {post.title}
                    </h3>
                  </Link>
                  <div className="flex justify-between text-gray-500 dark:text-gray-400 text-sm mt-1 mb-3">
                    <span>
                      {new Date(
                        Date.parse(post.published_at)
                      ).toLocaleDateString(undefined, {
                        month: 'short',
                        year: 'numeric',
                        day: 'numeric',
                      })}
                    </span>
                    <span>{post.reading_time} mins read</span>
                  </div>
                  <p className="text-gray-700 dark:text-gray-200">
                    {post.excerpt}
                  </p>
                  <hr class="border-0 bg-blue-400 my-16 w-1/3 h-px mx-auto"></hr>
                </div>
              ))}
            </div>
          </div>
        </div>
      </main>
      <div className="bg-blue-50 dark:bg-gray-900 block md:hidden">
        <Footer />
      </div>
    </div>
  );
}
