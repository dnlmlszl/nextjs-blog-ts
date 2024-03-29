import { getPostsMeta } from '@/lib/posts';
import ListItem from '@/app/components/ListItem';
import Link from 'next/link';

export const revalidate = 7200;

type Props = {
  params: {
    tag: string;
  };
};

const generateStaticParams = async () => {
  const posts = await getPostsMeta();

  if (!posts) return [];

  const tags = new Set(posts.map((post) => post.tags).flat());

  return Array.from(tags).map((tag) => ({ tag }));
};

const generateMetadata = ({ params: { tag } }: Props) => {
  return {
    title: `Posts about ${tag}`,
  };
};

const TagPostList = async ({ params: { tag } }: Props) => {
  const posts = await getPostsMeta();
  if (!posts)
    return <p className="mt-10 text-center">Sorry, no posts available</p>;

  const tagPosts = posts.filter((post) => post.tags.includes(tag));

  if (!tagPosts.length) {
    return (
      <div className="text-center">
        <p className="mt-10">Sorry, no posts for that keyword.</p>
        <Link href="/">← Back to Home</Link>
      </div>
    );
  }
  return (
    <div className="mx-4">
      <h2 className="text-xl sm:text-3xl text-start lg:text-center mt-4 mb-0">
        Results for: #{tag}
      </h2>
      <section className="mt-6 mx-auto max-w-2xl">
        <ul className="w-full list-none p-0">
          {tagPosts.map((post) => (
            <ListItem key={post.id} post={post} />
          ))}
        </ul>
      </section>
    </div>
  );
};

export { generateStaticParams, generateMetadata };
export default TagPostList;
