import Image from 'next/image';

export default function Home() {
  return (
    <div className='px-6 md:px-10 lg:px-14 flex'>
      <div className='flex-1'>
        <h1>Where you sell your products matters</h1>
        <p>
          We`&apos;`ll help you find the right marketing channels to scale. Optimize and automate
          all of your online activity
        </p>
        <button>Explore</button>
      </div>
      <div className='flex-1'>
        <div className='relative w-full h-screen'>
          <div>Image will be here</div>
          <div>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem eos repudiandae dicta
            quae. Quaerat itaque magnam sequi modi, expedita soluta!
          </div>
        </div>
      </div>
    </div>
  );
}
