import getFormattedDate from '@/lib/getFormattedDate';
import { getPostsMeta, getPostByName } from '@/lib/posts';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import 'highlight.js/styles/github-dark.css';

export const revalidate = 86400;

type Props = {
  params: {
    postId: string;
  };
};

const generateStaticParams = async () => {
  const posts = await getPostsMeta();

  if (!posts) return [];

  return posts.map((post) => {
    postId: post.id;
  });
};

const generateMetadata = async ({ params: { postId } }: Props) => {
  const post = await getPostByName(`${postId}.mdx`);

  if (!post) {
    return {
      title: 'Post Not Found',
    };
  }

  return {
    title: post.meta.title,
  };
};

const Post = async ({ params: { postId } }: Props) => {
  const post = await getPostByName(`${postId}.mdx`);

  if (!post) notFound();

  const { meta, content } = post;

  const pubDate = getFormattedDate(meta.date);

  const tags = meta.tags.map((tag, i) => (
    <Link key={i} href={`/tags/${tag}`}>
      {tag}
    </Link>
  ));

  return (
    // <main className="px-6 prose prose-xl prose-slate dark:prose-invert mx-auto">
    //     <h1 className="text-3xl mt-4 mb-0">{title}</h1>
    //     <p className="mt-0">{pubDate}</p>
    //     <article>
    //         <section dangerouslySetInnerHTML={{ __html: contentHtml }} />
    //         <p>
    //             <Link href='/'>← Back to home</Link>
    //         </p>
    //     </article>
    // </main>

    <>
      <h2 className="text-3xl mt-4 mb-0">{meta.title}</h2>
      <p className="mt-0 text-sm">{pubDate}</p>
      <article>{content}</article>
      <section>
        <h3>Related:</h3>
        <div className="flex flex-row gap-4">{tags}</div>
      </section>
      <p className="mb-10">
        <Link href="/">← Back to home</Link>
      </p>
    </>
  );
};

export default Post;
export { generateMetadata, generateStaticParams };
