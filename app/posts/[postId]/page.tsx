import getFormattedDate from '@/lib/getFormattedDate';
import { getPostsMeta, getPostByName } from '@/lib/posts';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import 'highlight.js/styles/github-dark.css';

export const revalidate = 7200;

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
    <div className="px-4 lg:px-0 prose prose-xl prose-slate mx-auto">
      <h2 className="text-zinc-700 text-xl sm:text-2xl mt-4 mb-0">
        {meta.title}
      </h2>
      <p className="text-zinc-600 mt-0 text-sm">{pubDate} by LMD</p>
      <article className="prose prose-xl text-zinc-600 mx-auto">
        {content}
      </article>
      <section>
        <h3 className="text-zinc-600">Related:</h3>
        <div className="flex flex-row flex-wrap gap-4 text-zinc-600">
          {tags}
        </div>
      </section>
      <p className="mb-10">
        <Link href="/">← Back to home</Link>
      </p>
    </div>
  );
};

export default Post;
export { generateMetadata, generateStaticParams };
