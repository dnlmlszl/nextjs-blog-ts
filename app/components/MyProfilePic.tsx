import Image from 'next/image';

const MyProfilePic = () => {
  return (
    <section className="w-full mx-auto">
      <Image
      className='border-4 border-black dar:border-slate-500 drop-shadow-xl shadow-black rounded-full mx-auto mt-8'
        src="/images/LMDpic.jpg"
        alt="profile pic"
        width={200}
        height={200}
        priority={true}
      />
    </section>
  );
};

export default MyProfilePic;
