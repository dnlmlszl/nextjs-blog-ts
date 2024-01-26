import { getPostsMeta } from '@/lib/posts';
import ListItem from './ListItem';

const Posts = async () => {
  const posts = await getPostsMeta();

  if (!posts) {
    return (
      <p className="mt-10 text-center text-orange-500 tracking-widest">
        Sorry, no posts available
      </p>
    );
  }

  return (
    <section className="mt-2 mx-auto max-w-7xl p-4 min-h-screen">
      <p className="text-xl font-semibold text-center mb-6">
        A wise man told me once...
      </p>
      <div className="grid grid-cols-1 lg:grid-cols-2  gap-6">
        {posts.map((post) => (
          <ListItem key={post.id} post={post} />
        ))}
      </div>
    </section>
  );
};

export default Posts;
