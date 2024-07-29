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
    <div className='min-h-screen  bg-cyan-500/30'>
      <div className='h-screen max-h-screen overflow-y-hidden flex items-start justify-between'>
        <div className='h-full flex-[0.5]  ml-4 p-16 pl-24'>
          <h1
            className={cn(
              ' text-cyan-800 text-5xl font-black rounded-xl',
              dancing.className
            )}
          >
            Smile Scheduler
          </h1>
          <div className='mt-8 max-w-[40rem] h-full'>
            <h2 className='text-[7rem] mt-4 leading-[7.5rem]  font-medium tracking-tighter text-black '>
              Your smile comes first
            </h2>

            <div className=''>
              <p className='mt-4 p-2 tracking-tight leading-7 text-zinc-700 font-medium text-lg pr-4 text-justify '>
                Appointment booking to your nearest dental clinic made easy and
                hassle free. So no waiting in those long queues. Just book and
                arrive on time.
              </p>

              <Button
                variant={'default'}
                className='mt-12 rounded-full'
                size={'lg'}
              >
                Book Appointment <ArrowRight className='size-4 ml-1' />
              </Button>
            </div>
          </div>
        </div>
        <div className='flex-[0.5]  h-full flex justify-end scale-95 '>
          <Image
            src={'/2.png'}
            width={500}
            height={500}
            alt='hero-image'
            className='h-full object-cover w-[35rem] pt-12 mr-24 bg-white/60 rounded-b-full rounded-t-full mt-0.5  '
          />
        </div>
      </div>

      <MaxWidthWrapper className='pb-12 mt-8'>
        <div className='bg-white/70 shadow-md  rounded-[3rem] p-4'>
          <div className='p-6 grid gap-y-8'>
            <div className='bg-cyan-500 text-white rounded-[2.5rem] flex items-center justify-center text-center px-4 text-3xl  w-[15rem] h-[15rem]'>
              25+ years of experienced doctors
            </div>
            <div className='bg-cyan-500 text-white rounded-[2.5rem] flex items-center justify-center text-center px-4 text-3xl  w-[15rem] h-[15rem]'>
              25+ years of experienced doctors
            </div>
          </div>
          <div></div>
          <div></div>
        </div>
      </MaxWidthWrapper>
    </div>
  );
};
export default Home;
