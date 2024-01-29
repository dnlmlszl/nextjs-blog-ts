'use client';

import Link from 'next/link';
import getFormattedDate from '@/lib/getFormattedDate';
import MyProfilePic from '../components/MyProfilePic';

type Props = {
  post: Meta;
};

function SidebarItem({ post }: Props) {
  const { id, title, date, tags } = post;
  const formattedDate = getFormattedDate(date);

  return (
    <article className="mb-2">
      <h3 className="text-lg font-semibold text-zinc-800">
        <Link href={`/posts/${id}`}>{title}</Link>
      </h3>
      <p className="text-xs text-zinc-500 mb-4">{formattedDate}</p>
      <div className="flex flex-wrap gap-1 w-full">
        {' '}
        {/* Flex container a tag-eknek */}
        {tags.map((tag) => (
          <Link
            key={tag}
            href={`/tags/${tag}`}
            className="inline-block text-xs text-zinc-500 hover:text-zinc-600 transition duration-200"
          >
            {tag}
          </Link>
        ))}
      </div>
    </article>
  );
}

export default SidebarItem;
