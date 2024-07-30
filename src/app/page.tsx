import MaxWidthWrapper from '@/components/MaxWidthWrapper';
import { Button } from '@/components/ui/button';
import {
  ArrowRight,
  ArrowRightCircleIcon,
  ArrowRightFromLine,
  Check,
  ChevronRight,
  Instagram,
} from 'lucide-react';
import { cn } from '@/lib/utils';
import { Dancing_Script } from 'next/font/google';
import Image from 'next/image';
import Link from 'next/link';

const dancing = Dancing_Script({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
});

const OFFERINGS = [
  {
    id: 1,
    title: 'First 2 visits free!',
    description: 'Get your first two visits completely free of charge.',
  },
  {
    id: 2,
    title: 'Complementary Consultation',
    description: 'Enjoy a complimentary consultation with our experts.',
  },
  {
    id: 3,
    title: 'Best customer experience',
    description: 'Experience the best customer service tailored to your needs.',
  },
];

const MEMBERSHIP = [
  {
    id: 1,
    mName: 'Basic',
    amount: 0,
    benefits: [
      'First 2 visit free',
      '1 free consultation',
      'No discount on medicines',
    ],
  },
  {
    id: 2,
    mName: 'Smile',
    amount: 200,
    benefits: [
      'First 4 visit free',
      '3 free consultation',
      '10% discount on medicines',
      '1st home visit free',
    ],
  },
  {
    id: 3,
    mName: 'Laugh',
    amount: 500,
    benefits: [
      'First 6 visit free',
      '5 free consultation',
      '30% discount on medicines',
      '3st home visit free',
    ],
  },
];

const FOOTERLINKS = [
  {
    title: 'Quick Links',
    links: ['About Us', 'Privacy Policy', 'Locations', 'Blog'],
  },
  {
    title: 'Contact Us',
    links: ['xxx@xxx.com', '+91 1234567897'],
  },
];

const Home = () => {
  return (
    <div className='min-h-screen bg-gradient-to-br from-cyan-200 to-rose-200'>
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
            <h2 className='text-[7rem] mt-4 leading-[7.5rem] font-medium tracking-tighter text-black '>
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
                className='mt-12 rounded-full py-6 text-base bg-cyan-800 hover:bg-cyan-900'
                size={'lg'}
              >
                Book Appointment <ArrowRight className='size-4 ml-1 ' />
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
        <div className='bg-white/70 shadow-sm rounded-[3rem] p-4'>
          {/* Achievements */}
          <div className=' flex items-center justify-between '>
            <div className='p-6 grid gap-y-8'>
              <div className='bg-cyan-600 text-white rounded-[2.5rem] flex flex-col justify-center px-7  w-[15rem] h-[15rem]'>
                <span className='text-6xl font-medium'>25+</span>{' '}
                <span className='mt-2 text-xl'>
                  years of experienced doctors.
                </span>
              </div>
              <div className='bg-amber-600 text-white rounded-[2.5rem] flex flex-col justify-center px-7 w-[15rem] h-[15rem]'>
                <span className='text-6xl font-medium'>+50k</span>{' '}
                <span className='mt-2 text-xl'>
                  satisfied and happy customers.
                </span>
              </div>
            </div>
            <div className='flex w-full  items-start'>
              <Image
                src={'/nurse.png'}
                alt='nurse'
                width={500}
                height={500}
                className='max-w-[30%] bg-gradient-to-br from-rose-100 to-blue-200 rounded-[3rem] p-2'
              />
              <div className='flex-1   px-16 py-4'>
                <div className=''>
                  <h3 className='text-5xl font-medium text-zinc-900 tracking-tight'>
                    Dr. John Doe
                  </h3>
                  <p className='mt-4 text-justify italic tracking-tight font-medium text-zinc-700'>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Repellendus ipsam consectetur reprehenderit? Non,
                    perferendis, necessitatibus repellat ut illo recusandae
                    impedit ratione consequatur hic numquam, aperiam dicta quasi
                    repudiandae unde nam maiores. Vel excepturi minima, et
                    veniam ipsam placeat quam amet.
                  </p>
                  <Button
                    variant={'default'}
                    className='mt-8 rounded-full py-6 text-base bg-cyan-800 hover:bg-cyan-900'
                    size={'lg'}
                  >
                    Check pincode
                  </Button>
                </div>
                <p className='mt-8 text-sm text-zinc-400'>
                  Doctors and clinics are subject to change as per your locality
                  and pincode you enter. We provide you with the best of the
                  clinics in your area.
                </p>
              </div>
            </div>
          </div>

          {/* Offerings */}
          <div className='mt-12 p-6'>
            <h2 className='text-5xl font-semibold text-zinc-800 tracking-tight'>
              Our Unique Offerings
            </h2>
            <div className='grid grid-cols-3 mt-10'>
              {OFFERINGS.map((offer) => (
                <div
                  key={offer.id}
                  className='w-[20rem] h-[17rem] rounded-3xl p-9 first:text-white first:bg-cyan-800 border border-zinc-300 first:border-none flex flex-col justify-between'
                >
                  <div className=''>
                    <p className='text-3xl font-medium'>{offer.title}</p>
                    <p className='mt-4 first:text-zinc-100'>
                      {offer.description}
                    </p>
                  </div>
                  <button className=''>
                    <ArrowRightCircleIcon className='size-8' />
                  </button>
                </div>
              ))}
            </div>
          </div>
        </div>
      </MaxWidthWrapper>

      {/* Pricing Plans */}
      <MaxWidthWrapper>
        <div className='p-6'>
          <div>
            <h2 className='text-5xl font-semibold text-zinc-800 tracking-tight'>
              Membership Plans
            </h2>
          </div>
          <div className='grid grid-cols-3 gap-12 mt-10'>
            {MEMBERSHIP.map((plan) => (
              <div
                className='bg-white/50 hover:bg-white/70 even:border-4 even:border-amber-600 p-12 rounded-[3rem]'
                key={plan.id}
              >
                <h3 className='text-3xl font-semibold tracking-tight  border-b pb-3 border-zinc-300  '>
                  {plan.mName}
                </h3>
                <p className='mt-4 text-zinc-700 '>
                  ₹
                  <span className='text-6xl ml-1 text-zinc-900 '>
                    {plan.amount}
                  </span>{' '}
                  / month
                </p>
                <div className='mt-12'>
                  <h4 className='mb-4 text-xl font-medium text-zinc-700 tracking-tight border-b border-zinc-300'>
                    Benefits
                  </h4>
                  {plan.benefits.map((benefit, i) => (
                    <p className='flex items-center gap-x-2.5 mt-2.5' key={i}>
                      <Check className='text-amber-600 size-5' /> {benefit}
                    </p>
                  ))}
                </div>
              </div>
            ))}
          </div>
          <p className='mt-8 tracking-tight text-zinc-600 px-2'>
            To upgrade your plan go to your{' '}
            <Link
              href={'/dashboard'}
              className='text-zinc-950 font-medium underline underline-offset-4'
            >
              Dashbaboard
            </Link>
          </p>
        </div>
      </MaxWidthWrapper>

      <footer className='mt-24 bg-white'>
        <MaxWidthWrapper className='p-12'>
          <div className='flex items-start justify-between'>
            <div>
              <h1
                className={cn(
                  ' text-cyan-800 text-4xl font-black rounded-xl',
                  dancing.className
                )}
              >
                Smile Scheduler
              </h1>

              <div className='flex items-center gap-x-4 mt-6 text-zinc-500'>
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  width='22'
                  height='22'
                  viewBox='0 0 24 24'
                  fill='none'
                  stroke='currentColor'
                  stroke-width='2'
                  stroke-linecap='round'
                  stroke-linejoin='round'
                  className='lucide lucide-instagram'
                >
                  <rect width='20' height='20' x='2' y='2' rx='5' ry='5' />
                  <path d='M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z' />
                  <line x1='17.5' x2='17.51' y1='6.5' y2='6.5' />
                </svg>

                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  width='22'
                  height='22'
                  viewBox='0 0 24 24'
                  fill='none'
                  stroke='currentColor'
                  stroke-width='2'
                  stroke-linecap='round'
                  stroke-linejoin='round'
                  className='lucide lucide-facebook'
                >
                  <path d='M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z' />
                </svg>
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  width='22'
                  height='22'
                  viewBox='0 0 24 24'
                  fill='none'
                  stroke='currentColor'
                  stroke-width='2'
                  stroke-linecap='round'
                  stroke-linejoin='round'
                  className='lucide lucide-twitter'
                >
                  <path d='M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z' />
                </svg>
              </div>
            </div>
            <div className='grid grid-cols-2 gap-x-16 '>
              {FOOTERLINKS.map((footer) => (
                <div key={footer.title}>
                  <h5 className='font-medium tracking-tight'>{footer.title}</h5>
                  <ul className='text-zinc-700'>
                    {footer.links.map((link) => (
                      <li
                        key={link}
                        className='flex items-center mt-1 gap-x-0.5'
                      >
                        <ChevronRight className='size-4' />
                        {link}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </MaxWidthWrapper>
        <div className='bg-cyan-800 flex items-center justify-center p-1 text-white text-xs'>
          <p>
            &copy; {new Date(Date.now()).getFullYear()}. Created by Kunwar
            Aditya
          </p>
        </div>
      </footer>
    </div>
  );
};
export default Home;
