import Posts from './components/Posts';
import MyProfilePic from './components/MyProfilePic';

export const revalidate = 7200;

export default function Home() {
  return (
    <div className="mx-auto">
      <p className="mt-12 mb-4 text-3xl text-center dark:text-white">
        Hello and Welcome 😉&nbsp;
        <span className="whitespace-nowrap">
          I'm <span className="font-medium tracking-widest">LMD</span>
        </span>
      </p>
      {/* @ts-expect-error Server Component */}
      <Posts />
    </div>
  );
}
