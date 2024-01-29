import Image from 'next/image';

const MyProfilePic = ({ width, height }: { width: number; height: number }) => {
  return (
    <section className="w-full mx-auto">
      <Image
        className="border-4 border-zinc-700 dar:border-slate-500 drop-shadow-xl shadow-black rounded-full mx-auto my-0"
        src="/images/LMDpic.jpg"
        alt="profile pic"
        width={width}
        height={height}
        priority={true}
      />
    </section>
  );
};

export default MyProfilePic;
