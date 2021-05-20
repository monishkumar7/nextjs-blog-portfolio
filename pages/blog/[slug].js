import Head from 'next/head';
import Link from 'next/link';
import { useRouter } from 'next/router';

import { getSinglePost, getPosts } from '../../lib/posts';
import Footer from '../../components/Footer';

const PostPage = (props) => {
  const router = useRouter();
  if (router.isFallback) {
    return <div>Loading...</div>;
  }
  return (
    <>
      <Head>
        <title>{props.post.title}</title>
        <meta name="description" content={props.post.excerpt} />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="min-h-screen bg-blue-50 dark:bg-gray-900">
        <div className="container max-w-prose pt-16 pb-4 px-4 md:mx-auto">
          <Link href="/blog">
            <h4 className="text-blue-400 cursor-pointer underline text-xl">
              {'<'} Your Blog Title
            </h4>
          </Link>
          <h1 className="font-bold mt-8 mb-2 text-3xl text-gray-900 dark:text-white">
            {props.post.title}
          </h1>
          <div className="flex justify-between text-gray-500 dark:text-gray-400 text-sm mt-2 mb-8">
            <span>
              {new Date(Date.parse(props.post.published_at)).toLocaleDateString(
                undefined,
                {
                  month: 'short',
                  year: 'numeric',
                  day: 'numeric',
                }
              )}
            </span>
            <span>{props.post.reading_time} mins read</span>
          </div>
          <div
            dangerouslySetInnerHTML={{ __html: props.post.html }}
            className="prose mb-8 dark:prose-dark"
          />
        </div>
        <Footer />
      </div>
    </>
  );
};

export default PostPage;

export async function getStaticPaths() {
  const posts = await getPosts();

  const paths = posts.map((post) => ({
    params: { slug: post.slug },
  }));

  return { paths, fallback: true };
}

export async function getStaticProps(context) {
  const post = await getSinglePost(context.params.slug);

  if (!post) {
    return { notFound: true };
  }

  return {
    props: { post },
    revalidate: 1,
  };
}
