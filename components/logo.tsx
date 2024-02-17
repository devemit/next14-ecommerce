import { Gem } from 'lucide-react';

export default function Logo() {
  return (
    <>
      <div className='flex items-center z-20 cursor-pointer'>
        <Gem size={25} />
        <span className='uppercase text-xl ml-1'>Ultra</span>
        <span className='font-bold uppercase text-xl'>shop</span>
      </div>
    </>
  );
}
