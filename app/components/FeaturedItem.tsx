'use client';

import Link from 'next/link';
import getFormattedDate from '@/lib/getFormattedDate';
import MyProfilePic from '../components/MyProfilePic';

type Props = {
  post: Meta;
};

function FeaturedItem({ post }: Props) {
  const { id, title, date, tags } = post;
  const formattedDate = getFormattedDate(date);

  return (
    <article
      className={`flex flex-col justify-between h-full border bg-zinc-200/60 text-zinc-700 hover:text-zinc-600 tracking-widest rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300`}
    >
      <div className="p-4">
        <h3 className="text-xl font-bold mb-2 tracking-widest text-zinc-600">
          {title}
        </h3>
        <div className="flex items-center justify-start gap-2">
          <p className="inline-block text-sm text-zinc-500">{formattedDate}</p>
          <div className="">
            <MyProfilePic width={25} height={25} />
          </div>
        </div>
      </div>
      <div className="p-4">
        <Link
          href={`/posts/${id}`}
          className="text-zinc-700 text-xl hover:text-zinc-500 transition duration-200 linear"
        >
          Read More
        </Link>
      </div>
    </article>
  );
}

export default FeaturedItem;
