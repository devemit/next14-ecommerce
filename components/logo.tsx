import { Gem } from 'lucide-react';

export default function Logo() {
  return (
    <>
      <div className='flex items-center z-20 cursor-pointer gap-1'>
        <span className='uppercase text-xl font-bold'>Diamond</span>
        <Gem size={20} />
        <span className=' uppercase text-xl'>shop</span>
      </div>
    </>
  );
}
