'use client';

import Link from 'next/link';
import getFormattedDate from '@/lib/getFormattedDate';
import { useContext } from 'react';
import DarkThemeContext from '../store/DarkmodeContext';

type Props = {
  post: Meta;
};

function ListItem({ post }: Props) {
  const { isDarkTheme } = useContext(DarkThemeContext);
  const { id, title, date } = post;
  const formattedDate = getFormattedDate(date);

  const darkModeClasses = isDarkTheme
    ? 'bg-zinc-800 text-zinc-300 hover:text-zinc-200 tracking-widest rounded-lg'
    : 'bg-zinc-200 text-zinc-600 hover:text-zinc-700 tracking-widest rounded-lg';

  return (
    <article
      className={`flex flex-col justify-between border rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300 ${darkModeClasses}`}
    >
      <div className="p-4">
        <h3 className="text-xl font-bold mb-2 tracking-widest">{title}</h3>
        <p className="text-sm text-gray-500">{formattedDate}</p>
      </div>
      <div className="p-4 bg-gray-100 dark:bg-gray-700">
        <Link
          href={`/posts/${id}`}
          className="text-emerald-500 hover:text-emerald-700 transition duration-200 linear"
        >
          Read More
        </Link>
      </div>
    </article>
  );
}

export default ListItem;
