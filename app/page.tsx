import Posts from './components/Posts';

export const revalidate = 7200;

export default function Home() {
  return (
    <div className="mx-auto">
      <p className="text-3xl font-medium text-center text-zinc-600 mb-6">
        A wise man told me once...
      </p>
      {/* @ts-expect-error Server Component */}
      <Posts />
    </div>
  );
}
