import { getPostsMeta } from '@/lib/posts';
import ListItem from './ListItem';
import FeaturedItem from './FeaturedItem';
import SidebarItem from './SidebarItem';

const Posts = async () => {
  const posts = await getPostsMeta();

  if (!posts) {
    return (
      <p className="mt-10 text-center text-orange-500 tracking-widest">
        Sorry, no posts available
      </p>
    );
  }

  const featuredPost = posts[0];
  const otherPosts = posts.slice(1, 4);
  const sidebarPosts = posts.slice(4);

  return (
    <>
      <section className="mt-2 mx-auto max-w-7xl p-4 min-h-screen grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2">
          <article className="grid grid-rows-[45vh_1fr] gap-6">
            <div className="row-span-1 bg-featuredImage bg-cover bg-center relative rounded-xl">
              <div className="absolute inset-0 bg-black bg-opacity-10 z-10 rounded-lg">
                <FeaturedItem post={featuredPost} />
              </div>
            </div>
            {otherPosts.map((post) => (
              <div key={post.id}>
                <ListItem post={post} />
              </div>
            ))}
          </article>
        </div>
        <aside className="lg:col-span-1 lg:ml-12">
          <h2 className="text-3xl text-center font-medium text-zinc-600 tracking-widest mb-4">
            All posts
          </h2>
          <div className="h-1 bg-blue-500 mx-auto w-5/12 mb-4"></div>
          {posts.map((post) => (
            <div className="mb-4" key={post.id}>
              <SidebarItem post={post} />
              <div className="h-[2px] bg-zinc-400 my-4"></div>
            </div>
          ))}
        </aside>
      </section>
    </>
  );
};

export default Posts;
