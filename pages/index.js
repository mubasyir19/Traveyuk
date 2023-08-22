import Head from 'next/head';
import Image from 'next/image';
import { Nunito, Poppins } from '@next/font/google';
import Navbar from '../components/Navbar';
import Booking from '../components/Booking';
import Packages from '../components/Packages';

const nunito = Nunito({
  weight: ['300', '400', '500', '600', '700'],
  style: ['normal', 'italic'],
  subsets: ['latin'],
});
const poppins = Poppins({
  weight: ['300', '400', '500', '600', '700'],
  style: ['normal', 'italic'],
  subsets: ['latin'],
});

export default function Home() {
  return (
    <>
      <Head>
        <title>Traveyuk</title>
      </Head>
      <main className='bg-slate-100' style={poppins.style}>
        <div className="h-screen bg-cover bg-center bg-[url('/assets/images/background.png')]">
          <Navbar />
          {/* <div className='Jumbotron text-center pt-32'> */}
          <div className='Jumbotron h-fit my-auto text-center pt-40 px-2'>
            <p className='text-xl text-stone-300 font-semibold'>Life Is Too short For A Wide And Beautiful World</p>
            <p className='mt-3 text-5xl text-white font-bold'>
              Enjoy Your Tour With Heavenly <br /> experience you&apos;ve never had
            </p>
          </div>
        </div>
        <div className='px-4'>
          <Booking />
        </div>
        <section id='New' className='mt-32 px-6 mx-auto w-fit bg-slate-100'>
          <div className='flex gap-x-14'>
            <div className='picture hidden md:flex gap-x-7'>
              <div className='left'>
                <Image src='/assets/images/new1.png' className='rounded-2xl' width={310} height={240} alt='new1' />
                <div className='h-7'></div>
                <Image src='/assets/images/new2.png' className='rounded-2xl' width={310} height={240} alt='new2' />
              </div>
              <div className='right'>
                <Image src='/assets/images/new3.png' className='rounded-2xl' width={320} height={648} alt='new3' />
              </div>
            </div>
            <div className='content my-auto'>
              <p id='tags' className='text-lg text-blue-500 font-semibold'>
                New For You
              </p>
              <h1 className='title mt-1.5 text-4xl font-bold'>
                Enjoy Your Vacation <br /> With A New Experience
              </h1>
              <p className='desc mt-3 text-lg text-gray-500'>
                Lorem Ipsum is simply dummy text of the printing <br />
                and typesetting industry. Lorem Ipsum has been the <br />
                industry&apos;s standard dummy text ever since the 1500s
              </p>
              <div className='facility mt-10 flex gap-x-7'>
                <div className='destination'>
                  <p className='font-bold text-xl'>560+</p>
                  <p className='text-base text-gray-500'>Destination</p>
                </div>
                <div className='hotels'>
                  <p className='font-bold text-xl'>120+</p>
                  <p className='text-base text-gray-500'>Luxury Hotels</p>
                </div>
                <div className='tourist'>
                  <p className='font-bold text-xl'>360K+</p>
                  <p className='text-base text-gray-500'>Happy Tourist</p>
                </div>
              </div>
              <div className='button mt-10 flex gap-x-3'>
                <a href='#' className='py-3 px-8 font-semibold text-sm md:text-base bg-blue-700 text-white rounded-xl'>
                  Get Started
                </a>
                <a href='#' className='py-3 px-8 font-medium text-sm md:text-base text-slate-500'>
                  View More
                </a>
              </div>
            </div>
          </div>
        </section>
        <section id='Best-Offer' className='mt-32 px-6 bg-slate-100'>
          <Packages />
        </section>
        <section id='Review' className='mt-32 pb-32 mx-auto w-fit bg-slate-100'>
          <div className='flex gap-x-16 px-6'>
            <div className='ilustration hidden md:flex'>
              <Image src={'/assets/images/review.png'} className='' width={522} height={604} alt='review' />
              {/* <div className='emoji absolute bottom-24 -left-8 w-fit p-6 rounded-3xl bg-white'>
                <p className='text-2xl font-semibold'>How your experience?</p>
                <div className='flex mt-3 gap-x-3'>
                  <Image src={'/assets/images/angry.png'} width={46} height={46} alt='angry' />
                  <Image src={'/assets/images/sad.png'} width={46} height={46} alt='sad' />
                  <Image src={'/assets/images/flat.png'} width={46} height={46} alt='flat' />
                  <Image src={'/assets/images/happy.png'} width={46} height={46} alt='happy' />
                  <Image src={'/assets/images/love.png'} width={46} height={46} alt='love' />
                </div>
              </div> */}
            </div>
            <div className='content my-auto'>
              <p id='tags' className='text-lg text-blue-500 font-semibold'>
                What They Say
              </p>
              <h1 className='title mt-1.5 text-4xl font-bold'>
                What Our Customer <br /> Say About Us
              </h1>
              <p className='desc mt-7 text-lg text-gray-500'>
                “Lorem Ipsum is simply dummy text of the printing <br />
                and typesetting industry. Lorem Ipsum has been the <br />
                industry&apos;s standard dummy text ever since the 1500s”
              </p>
              <div className='reviewer mt-5 flex gap-x-3'>
                <div className='left'>
                  <Image
                    src={'/assets/images/reviewer.png'}
                    className='rounded-full'
                    width={64}
                    height={64}
                    alt='reviewer'
                  />
                </div>
                <div className='right my-auto'>
                  <p className='font-semibold text-lg'>
                    Thressa Mazzie <span className='font-medium text-gray-500'>• Backpackers</span>
                  </p>
                  <div className='star flex'>
                    <svg width='20' height='19' viewBox='0 0 20 19' fill='none' xmlns='http://www.w3.org/2000/svg'>
                      <path
                        d='M9.04894 1.42705C9.3483 0.505741 10.6517 0.50574 10.9511 1.42705L12.4697 6.10081C12.6035 6.51284 12.9875 6.7918 13.4207 6.7918H18.335C19.3037 6.7918 19.7065 8.03141 18.9228 8.60081L14.947 11.4894C14.5966 11.744 14.4499 12.1954 14.5838 12.6074L16.1024 17.2812C16.4017 18.2025 15.3472 18.9686 14.5635 18.3992L10.5878 15.5106C10.2373 15.256 9.7627 15.256 9.41221 15.5106L5.43648 18.3992C4.65276 18.9686 3.59828 18.2025 3.89763 17.2812L5.41623 12.6074C5.5501 12.1954 5.40345 11.744 5.05296 11.4894L1.07722 8.60081C0.293507 8.03141 0.696283 6.7918 1.66501 6.7918H6.57929C7.01252 6.7918 7.39647 6.51284 7.53035 6.10081L9.04894 1.42705Z'
                        fill='#FF9900'
                      />
                    </svg>
                    <svg width='20' height='19' viewBox='0 0 20 19' fill='none' xmlns='http://www.w3.org/2000/svg'>
                      <path
                        d='M9.04894 1.42705C9.3483 0.505741 10.6517 0.50574 10.9511 1.42705L12.4697 6.10081C12.6035 6.51284 12.9875 6.7918 13.4207 6.7918H18.335C19.3037 6.7918 19.7065 8.03141 18.9228 8.60081L14.947 11.4894C14.5966 11.744 14.4499 12.1954 14.5838 12.6074L16.1024 17.2812C16.4017 18.2025 15.3472 18.9686 14.5635 18.3992L10.5878 15.5106C10.2373 15.256 9.7627 15.256 9.41221 15.5106L5.43648 18.3992C4.65276 18.9686 3.59828 18.2025 3.89763 17.2812L5.41623 12.6074C5.5501 12.1954 5.40345 11.744 5.05296 11.4894L1.07722 8.60081C0.293507 8.03141 0.696283 6.7918 1.66501 6.7918H6.57929C7.01252 6.7918 7.39647 6.51284 7.53035 6.10081L9.04894 1.42705Z'
                        fill='#FF9900'
                      />
                    </svg>
                    <svg width='20' height='19' viewBox='0 0 20 19' fill='none' xmlns='http://www.w3.org/2000/svg'>
                      <path
                        d='M9.04894 1.42705C9.3483 0.505741 10.6517 0.50574 10.9511 1.42705L12.4697 6.10081C12.6035 6.51284 12.9875 6.7918 13.4207 6.7918H18.335C19.3037 6.7918 19.7065 8.03141 18.9228 8.60081L14.947 11.4894C14.5966 11.744 14.4499 12.1954 14.5838 12.6074L16.1024 17.2812C16.4017 18.2025 15.3472 18.9686 14.5635 18.3992L10.5878 15.5106C10.2373 15.256 9.7627 15.256 9.41221 15.5106L5.43648 18.3992C4.65276 18.9686 3.59828 18.2025 3.89763 17.2812L5.41623 12.6074C5.5501 12.1954 5.40345 11.744 5.05296 11.4894L1.07722 8.60081C0.293507 8.03141 0.696283 6.7918 1.66501 6.7918H6.57929C7.01252 6.7918 7.39647 6.51284 7.53035 6.10081L9.04894 1.42705Z'
                        fill='#FF9900'
                      />
                    </svg>
                    <svg width='20' height='19' viewBox='0 0 20 19' fill='none' xmlns='http://www.w3.org/2000/svg'>
                      <path
                        d='M9.04894 1.42705C9.3483 0.505741 10.6517 0.50574 10.9511 1.42705L12.4697 6.10081C12.6035 6.51284 12.9875 6.7918 13.4207 6.7918H18.335C19.3037 6.7918 19.7065 8.03141 18.9228 8.60081L14.947 11.4894C14.5966 11.744 14.4499 12.1954 14.5838 12.6074L16.1024 17.2812C16.4017 18.2025 15.3472 18.9686 14.5635 18.3992L10.5878 15.5106C10.2373 15.256 9.7627 15.256 9.41221 15.5106L5.43648 18.3992C4.65276 18.9686 3.59828 18.2025 3.89763 17.2812L5.41623 12.6074C5.5501 12.1954 5.40345 11.744 5.05296 11.4894L1.07722 8.60081C0.293507 8.03141 0.696283 6.7918 1.66501 6.7918H6.57929C7.01252 6.7918 7.39647 6.51284 7.53035 6.10081L9.04894 1.42705Z'
                        fill='#FF9900'
                      />
                    </svg>
                    <svg width='20' height='19' viewBox='0 0 20 19' fill='none' xmlns='http://www.w3.org/2000/svg'>
                      <path
                        d='M9.04894 1.42705C9.3483 0.505741 10.6517 0.50574 10.9511 1.42705L12.4697 6.10081C12.6035 6.51284 12.9875 6.7918 13.4207 6.7918H18.335C19.3037 6.7918 19.7065 8.03141 18.9228 8.60081L14.947 11.4894C14.5966 11.744 14.4499 12.1954 14.5838 12.6074L16.1024 17.2812C16.4017 18.2025 15.3472 18.9686 14.5635 18.3992L10.5878 15.5106C10.2373 15.256 9.7627 15.256 9.41221 15.5106L5.43648 18.3992C4.65276 18.9686 3.59828 18.2025 3.89763 17.2812L5.41623 12.6074C5.5501 12.1954 5.40345 11.744 5.05296 11.4894L1.07722 8.60081C0.293507 8.03141 0.696283 6.7918 1.66501 6.7918H6.57929C7.01252 6.7918 7.39647 6.51284 7.53035 6.10081L9.04894 1.42705Z'
                        fill='#FF9900'
                      />
                    </svg>
                  </div>
                </div>
              </div>
              <div className='button mt-14'>
                <a href='#' className='py-3 px-8 font-semibold bg-blue-700 text-white rounded-xl'>
                  Get Started
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
