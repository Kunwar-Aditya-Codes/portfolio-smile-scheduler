import MaxWidthWrapper from '@/components/MaxWidthWrapper';
import { Button } from '@/components/ui/button';
import { ArrowRight, ArrowRightFromLine } from 'lucide-react';
import { cn } from '@/lib/utils';
import { Dancing_Script } from 'next/font/google';
import Image from 'next/image';

const dancing = Dancing_Script({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
});

const Home = () => {
  return (
    <div className='min-h-screen  bg-teal-800'>
      <div className='h-screen  flex items-start justify-between'>
        <div className='h-full flex-[0.5]  p-16 pl-24'>
          <h1
            className={cn(
              ' text-teal-300 text-5xl font-black rounded-xl',
              dancing.className
            )}
          >
            Smile Scheduler
          </h1>
          <div className='mt-8 max-w-[40rem]'>
            <h2 className='text-[7rem] mt-4 leading-[7.5rem]  font-medium tracking-tighter text-white '>
              Your smile comes first
            </h2>

            <p className='mt-4 p-2 tracking-tight leading-7 text-zinc-200 text-lg pr-4 text-justify '>
              Appointment booking to your nearest dental clinic made easy and
              hassle free. So no waiting in those long queues. Just book and
              arrive on time.
            </p>

            <Button
              className='mt-12 rounded-full'
              size={'lg'}
              variant={'secondary'}
            >
              Book Appointment <ArrowRight className='size-4 ml-1' />
            </Button>
          </div>
        </div>
        <div className='flex-[0.5]   h-full flex justify-end   '>
          <Image
            src={'/2.png'}
            width={500}
            height={500}
            alt='hero-image'
            className='h-full object-cover w-[35rem] pt-12'
          />
        </div>
      </div>
    </div>
  );
};
export default Home;
