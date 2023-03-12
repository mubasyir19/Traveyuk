import Head from "next/head";
import Image from "next/image";
import { Nunito, Poppins } from "@next/font/google";
// import styles from "../styles/Home.module.css";

const nunito = Nunito({
  weight: ["300", "400", "500", "600", "700"],
  style: ["normal", "italic"],
  subsets: ["latin"],
});
const poppins = Poppins({
  weight: ["300", "400", "500", "600", "700"],
  style: ["normal", "italic"],
  subsets: ["latin"],
});

export default function Home() {
  return (
    <>
      <Head>
        <title>Traveyuk</title>
      </Head>
      <main className='bg-slate-100' style={poppins.style}>
        <div className="h-screen bg-cover bg-[url('/assets/images/background.png')]">
          <div className='navbar flex justify-between px-16 pt-9'>
            <div className='title'>
              <p className='title text-4xl font-bold text-white my-auto' style={nunito.style}>
                Traveyuk
              </p>
            </div>
            <div className='my-auto'>
              <ul className='flex gap-x-7 text-white text-base text-center'>
                <li>
                  <a href='#' className='border-b-2 border-white'>
                    Home
                  </a>
                </li>
                <li>
                  <a href='#' className=''>
                    Featured
                  </a>
                </li>
                <li>
                  <a href='#' className=''>
                    Service
                  </a>
                </li>
                <li>
                  <a href='#' className=''>
                    Contact Us
                  </a>
                </li>
              </ul>
            </div>
            <div className='my-auto'>
              <a href='#' className='button px-8 py-3 text-base text-white font-semibold'>
                Sign In
              </a>
              <a href='#' className='button px-8 py-3 text-baset text-white font-semibold rounded-lg bg-blue-500'>
                Sign Up
              </a>
            </div>
          </div>
          {/* <div className='Jumbotron text-center pt-32'> */}
          <div className='Jumbotron h-fit my-auto text-center pt-40'>
            <p className='text-xl text-stone-300 font-semibold'>Life Is Too short For A Wide And Beautiful World</p>
            <p className='mt-3 text-5xl text-white font-bold'>
              Enjoy Your Tour With Heavenly <br /> experience you&apos;ve never had
            </p>
          </div>
        </div>
        <div className='choose-tab mx-auto w-fit -mt-32'>
          <div className='flex text-white'>
            <button className='flex gap-2.5 py-4 px-6 rounded-tl-lg font-medium bg-blue-700' data-tab='tab1'>
              <svg width='20' height='21' viewBox='0 0 20 21' fill='none' xmlns='http://www.w3.org/2000/svg'>
                <path
                  d='M20 14.5V12.5L11.5 7.5V2C11.5 1.17 10.83 0.5 10 0.5C9.17 0.5 8.5 1.17 8.5 2V7.5L0 12.5V14.5L8.5 12V17.5L6 19V20.5L10 19.5L14 20.5V19L11.5 17.5V12L20 14.5Z'
                  fill='white'
                />
              </svg>
              Flight
            </button>
            <button className='flex gap-2.5 py-4 px-6 rounded-tr-lg text-black font-medium bg-slate-50' data-tab='tab2'>
              <svg
                className='my-auto'
                width='22'
                height='16'
                viewBox='0 0 22 16'
                fill='none'
                xmlns='http://www.w3.org/2000/svg'
              >
                <path
                  d='M6 8.5C7.66 8.5 9 7.16 9 5.5C9 3.84 7.66 2.5 6 2.5C4.34 2.5 3 3.84 3 5.5C3 7.16 4.34 8.5 6 8.5ZM18 2.5H10V9.5H2V0.5H0V15.5H2V12.5H20V15.5H22V6.5C22 4.29 20.21 2.5 18 2.5Z'
                  fill='black'
                />
              </svg>
              <span className='my-auto'>Hotel</span>
            </button>
          </div>
          <div className='tab-content w-fit bg-white rounded-b-2xl rounded-tr-2xl '>
            <div className='flex p-6 gap-6 rounded-b-2xl rounded-tr-2xl' id='tab1'>
              <div className='flex justify-between p-6 border-2 gap-x-14 rounded-lg border-stone-300'>
                <div className='take-off flex gap-3'>
                  <div className='logo my-auto h-12 w-12 p-1.5 flex justify-center items-center text-center rounded-xl bg-blue-200'>
                    <svg
                      className=''
                      width='27'
                      height='22'
                      viewBox='0 0 27 22'
                      fill='none'
                      xmlns='http://www.w3.org/2000/svg'
                    >
                      <path
                        d='M8.24042 13.0438L24.9676 4.46424C25.9043 3.9838 26.6406 2.81368 25.8166 2.15847C24.389 1.02322 22.3972 1.81092 20.7435 2.58029L16.3907 4.60525L9.09836 0.5H5.45218L11.4577 6.88594L6.73906 9.39471L2.44944 7.79822L0.519104 8.7105L2.87839 11.9035C1.84888 12.6333 2.87839 13.2719 3.52183 13.5L8.24042 13.0438Z'
                        fill='#3258E8'
                      />
                      <path
                        d='M0 19.9376C0 19.0747 0.699553 18.3751 1.5625 18.3751H25.4375C26.3004 18.3751 27 19.0747 27 19.9376C27 20.8006 26.3004 21.5001 25.4375 21.5001H1.5625C0.699553 21.5001 0 20.8006 0 19.9376Z'
                        fill='#3258E8'
                      />
                    </svg>
                  </div>
                  <div className=''>
                    <p className='text-base'>Take Off</p>
                    <p className='text-base font-semibold'>Jakarta</p>
                  </div>
                </div>
                <div className='arrow my-auto'>
                  <svg width='11' height='20' viewBox='0 0 11 20' fill='none' xmlns='http://www.w3.org/2000/svg'>
                    <path
                      d='M1.5 18L9.5 10L1.5 2'
                      stroke='#232631'
                      strokeWidth='3'
                      strokeLinecap='round'
                      strokeLinejoin='round'
                    />
                  </svg>
                </div>
                <div className='landing flex gap-3'>
                  <div className='logo my-auto h-12 w-12 p-1.5 flex justify-center items-center text-center rounded-xl bg-blue-200'>
                    <svg
                      className='my-auto'
                      width='29'
                      height='28'
                      viewBox='0 0 29 28'
                      fill='none'
                      xmlns='http://www.w3.org/2000/svg'
                    >
                      <path
                        d='M6.527 13.79L24.5837 19.021C25.5949 19.3139 26.9332 18.9675 26.7831 17.9255C26.523 16.1202 24.5334 15.3271 22.8023 14.7526L18.246 13.2403L15.7556 5.25097L13.1025 2.74989L13.092 11.5161L7.93761 10.1049L5.91133 6.00078L3.88095 5.3405L3.4075 9.28222C2.15775 9.10709 2.46884 10.278 2.78061 10.8853L6.527 13.79Z'
                        fill='#3258E8'
                      />
                      <path
                        d='M1.00003 25.9375C1.00003 25.0746 1.69958 24.375 2.56253 24.375H26.4375C27.3005 24.375 28 25.0746 28 25.9375C28 26.8004 27.3005 27.5 26.4375 27.5H2.56253C1.69958 27.5 1.00003 26.8004 1.00003 25.9375Z'
                        fill='#3258E8'
                      />
                    </svg>
                  </div>

                  <div className=''>
                    <p className='text-base'>Landing</p>
                    <p className='text-base font-semibold'>New York</p>
                  </div>
                </div>
              </div>
              <div className='p-6 border-2 rounded-lg border-stone-300'>
                <div className='date flex gap-3'>
                  <div className='logo my-auto h-12 w-12 p-1.5 flex justify-center items-center text-center rounded-xl bg-blue-200'>
                    <svg
                      className='m-auto'
                      width='22'
                      height='25'
                      viewBox='0 0 22 25'
                      fill='none'
                      xmlns='http://www.w3.org/2000/svg'
                    >
                      <path
                        d='M7.33333 11.2777H4.88889V13.7222H7.33333V11.2777ZM12.2222 11.2777H9.77778V13.7222H12.2222V11.2777ZM17.1111 11.2777H14.6667V13.7222H17.1111V11.2777ZM19.5556 2.72215H18.3333V0.27771H15.8889V2.72215H6.11111V0.27771H3.66667V2.72215H2.44444C1.08778 2.72215 0.0122222 3.82215 0.0122222 5.1666L0 22.2777C0 23.6222 1.08778 24.7222 2.44444 24.7222H19.5556C20.9 24.7222 22 23.6222 22 22.2777V5.1666C22 3.82215 20.9 2.72215 19.5556 2.72215ZM19.5556 22.2777H2.44444V8.83327H19.5556V22.2777Z'
                        fill='#3258E8'
                      />
                    </svg>
                  </div>
                  <div className=''>
                    <p className='text-base'>Choose Flight Date</p>
                    <p className='text-base font-semibold'>25 July 2025</p>
                  </div>
                </div>
              </div>
              <div className='p-6 border-2 rounded-lg border-stone-300'>
                <div className='type flex gap-3'>
                  <div className='logo my-auto h-12 w-12 p-1.5 flex justify-center items-center text-center rounded-xl bg-blue-200'>
                    <svg width='22' height='23' viewBox='0 0 22 23' fill='none' xmlns='http://www.w3.org/2000/svg'>
                      <path
                        d='M0 13.8874V2.80631C0 1.53257 1.03257 0.5 2.30631 0.5H2.50062C3.49296 0.5 4.37405 1.13477 4.68826 2.07606L7.20363 9.61145C7.51784 10.5527 8.39893 11.1875 9.39127 11.1875H18.3438C20.363 11.1875 22 12.8245 22 14.8438C22 16.863 20.363 18.5 18.3438 18.5H4.61261C2.06514 18.5 0 16.4349 0 13.8874Z'
                        fill='#3258E8'
                      />
                      <path d='M11 7.5H18' stroke='#3258E8' strokeWidth='2.5' strokeLinecap='round' />
                      <path d='M4 21.5H16' stroke='#3258E8' strokeWidth='2.5' strokeLinecap='round' />
                    </svg>
                  </div>
                  <div className=''>
                    <p className='text-base'>Choose Flight Type</p>
                    <p className='text-base font-semibold'>Bussine Class</p>
                  </div>
                </div>
              </div>
              <div className='search p-8 flex justify-center items-center text-center rounded-xl bg-blue-700'>
                <svg width='28' height='29' viewBox='0 0 28 29' fill='none' xmlns='http://www.w3.org/2000/svg'>
                  <circle cx='13' cy='13.2084' r='11.4792' stroke='white' strokeWidth='2.375' />
                  <path d='M20.9165 21.9167L26.4582 27.4584' stroke='white' strokeWidth='2.375' strokeLinecap='round' />
                </svg>
              </div>
            </div>
            <div className='hidden p-6 gap-6 rounded-b-2xl rounded-tr-2xl' id='tab2'>
              <div className='flex justify-between p-6 border-2 gap-x-14 rounded-lg border-stone-300'>
                <div className='take-off flex gap-3'>
                  <div className='logo my-auto h-12 w-12 p-1.5 flex justify-center items-center text-center rounded-xl bg-blue-200'>
                    <svg
                      className=''
                      width='27'
                      height='22'
                      viewBox='0 0 27 22'
                      fill='none'
                      xmlns='http://www.w3.org/2000/svg'
                    >
                      <path
                        d='M8.24042 13.0438L24.9676 4.46424C25.9043 3.9838 26.6406 2.81368 25.8166 2.15847C24.389 1.02322 22.3972 1.81092 20.7435 2.58029L16.3907 4.60525L9.09836 0.5H5.45218L11.4577 6.88594L6.73906 9.39471L2.44944 7.79822L0.519104 8.7105L2.87839 11.9035C1.84888 12.6333 2.87839 13.2719 3.52183 13.5L8.24042 13.0438Z'
                        fill='#3258E8'
                      />
                      <path
                        d='M0 19.9376C0 19.0747 0.699553 18.3751 1.5625 18.3751H25.4375C26.3004 18.3751 27 19.0747 27 19.9376C27 20.8006 26.3004 21.5001 25.4375 21.5001H1.5625C0.699553 21.5001 0 20.8006 0 19.9376Z'
                        fill='#3258E8'
                      />
                    </svg>
                  </div>
                  <div className=''>
                    <p className='text-base'>Take Off</p>
                    <p className='text-base font-semibold'>Jakarta</p>
                  </div>
                </div>
                <div className='arrow my-auto'>
                  <svg width='11' height='20' viewBox='0 0 11 20' fill='none' xmlns='http://www.w3.org/2000/svg'>
                    <path
                      d='M1.5 18L9.5 10L1.5 2'
                      stroke='#232631'
                      strokeWidth='3'
                      strokeLinecap='round'
                      strokeLinejoin='round'
                    />
                  </svg>
                </div>
                <div className='landing flex gap-3'>
                  <div className='logo my-auto h-12 w-12 p-1.5 flex justify-center items-center text-center rounded-xl bg-blue-200'>
                    <svg
                      className='my-auto'
                      width='29'
                      height='28'
                      viewBox='0 0 29 28'
                      fill='none'
                      xmlns='http://www.w3.org/2000/svg'
                    >
                      <path
                        d='M6.527 13.79L24.5837 19.021C25.5949 19.3139 26.9332 18.9675 26.7831 17.9255C26.523 16.1202 24.5334 15.3271 22.8023 14.7526L18.246 13.2403L15.7556 5.25097L13.1025 2.74989L13.092 11.5161L7.93761 10.1049L5.91133 6.00078L3.88095 5.3405L3.4075 9.28222C2.15775 9.10709 2.46884 10.278 2.78061 10.8853L6.527 13.79Z'
                        fill='#3258E8'
                      />
                      <path
                        d='M1.00003 25.9375C1.00003 25.0746 1.69958 24.375 2.56253 24.375H26.4375C27.3005 24.375 28 25.0746 28 25.9375C28 26.8004 27.3005 27.5 26.4375 27.5H2.56253C1.69958 27.5 1.00003 26.8004 1.00003 25.9375Z'
                        fill='#3258E8'
                      />
                    </svg>
                  </div>

                  <div className=''>
                    <p className='text-base'>Landing</p>
                    <p className='text-base font-semibold'>New York</p>
                  </div>
                </div>
              </div>
              <div className='p-6 border-2 rounded-lg border-stone-300'>
                <div className='date flex gap-3'>
                  <div className='logo my-auto h-12 w-12 p-1.5 flex justify-center items-center text-center rounded-xl bg-blue-200'>
                    <svg
                      className='m-auto'
                      width='22'
                      height='25'
                      viewBox='0 0 22 25'
                      fill='none'
                      xmlns='http://www.w3.org/2000/svg'
                    >
                      <path
                        d='M7.33333 11.2777H4.88889V13.7222H7.33333V11.2777ZM12.2222 11.2777H9.77778V13.7222H12.2222V11.2777ZM17.1111 11.2777H14.6667V13.7222H17.1111V11.2777ZM19.5556 2.72215H18.3333V0.27771H15.8889V2.72215H6.11111V0.27771H3.66667V2.72215H2.44444C1.08778 2.72215 0.0122222 3.82215 0.0122222 5.1666L0 22.2777C0 23.6222 1.08778 24.7222 2.44444 24.7222H19.5556C20.9 24.7222 22 23.6222 22 22.2777V5.1666C22 3.82215 20.9 2.72215 19.5556 2.72215ZM19.5556 22.2777H2.44444V8.83327H19.5556V22.2777Z'
                        fill='#3258E8'
                      />
                    </svg>
                  </div>
                  <div className=''>
                    <p className='text-base'>Choose Flight Date</p>
                    <p className='text-base font-semibold'>25 July 2025</p>
                  </div>
                </div>
              </div>
              <div className='p-6 border-2 rounded-lg border-stone-300'>
                <div className='type flex gap-3'>
                  <div className='logo my-auto h-12 w-12 p-1.5 flex justify-center items-center text-center rounded-xl bg-blue-200'>
                    <svg width='22' height='23' viewBox='0 0 22 23' fill='none' xmlns='http://www.w3.org/2000/svg'>
                      <path
                        d='M0 13.8874V2.80631C0 1.53257 1.03257 0.5 2.30631 0.5H2.50062C3.49296 0.5 4.37405 1.13477 4.68826 2.07606L7.20363 9.61145C7.51784 10.5527 8.39893 11.1875 9.39127 11.1875H18.3438C20.363 11.1875 22 12.8245 22 14.8438C22 16.863 20.363 18.5 18.3438 18.5H4.61261C2.06514 18.5 0 16.4349 0 13.8874Z'
                        fill='#3258E8'
                      />
                      <path d='M11 7.5H18' stroke='#3258E8' strokeWidth='2.5' strokeLinecap='round' />
                      <path d='M4 21.5H16' stroke='#3258E8' strokeWidth='2.5' strokeLinecap='round' />
                    </svg>
                  </div>
                  <div className=''>
                    <p className='text-base'>Choose Flight Type</p>
                    <p className='text-base font-semibold'>Bussine Class</p>
                  </div>
                </div>
              </div>
              <div className='search p-8 flex justify-center items-center text-center rounded-xl bg-blue-700'>
                <svg width='28' height='29' viewBox='0 0 28 29' fill='none' xmlns='http://www.w3.org/2000/svg'>
                  <circle cx='13' cy='13.2084' r='11.4792' stroke='white' strokeWidth='2.375' />
                  <path d='M20.9165 21.9167L26.4582 27.4584' stroke='white' strokeWidth='2.375' strokeLinecap='round' />
                </svg>
              </div>
            </div>
          </div>
        </div>
        <section id='New' className='mt-32 mx-auto w-fit bg-slate-100'>
          <div className='flex gap-x-14'>
            <div className='picture flex gap-x-7'>
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
                <a href='#' className='py-3 px-8 font-semibold bg-blue-700 text-white rounded-xl'>
                  Get Started
                </a>
                <a href='#' className='py-3 px-8 font-medium text-slate-500'>
                  View More
                </a>
              </div>
            </div>
          </div>
        </section>
        <section id='Best-Offer' className='mt-32 bg-slate-100'>
          <div className='head text-center'>
            <p className='text-lg text-blue-500 font-semibold'>Best Offer From Us</p>
            <h1 className='mt-1.5 text-4xl font-bold'>Special Trip Packages</h1>
          </div>
          <div className='package mt-8 w-fit mx-auto p-3 rounded-xl bg-white'>
            <button className='py-2 px-6 text-white text-lg rounded-xl bg-blue-700' data-tab='solo'>
              Solo
            </button>
            <button className='py-2 px-6 text-lg' data-tab='couple'>
              Couple
            </button>
            <button className='py-2 px-6 text-lg' data-tab='group'>
              Group
            </button>
          </div>
          <div className='list-destination w-fit mt-14 mx-auto flex gap-x-9'>
            <div className='card p-6 w-fit rounded-3xl bg-white'>
              <Image
                src={"/assets/images/dest1.png"}
                className='rounded-3xl'
                width={336}
                height={280}
                alt='destionation1'
              />
              <div className='type-rate flex mt-4 gap-x-1.5'>
                <a href='#' className='type py-1.5 px-4 text-sm font-medium text-blue-700 bg-blue-200 rounded-xl'>
                  Beach
                </a>
                <div className='star flex my-auto'>
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
              <p className='name-destination mt-3 text-2xl text-black font-semibold'>Mereum sanctuary</p>
              <div className='location mt-1.5 flex gap-x-1.5'>
                <svg
                  className='my-auto'
                  width='14'
                  height='20'
                  viewBox='0 0 14 20'
                  fill='none'
                  xmlns='http://www.w3.org/2000/svg'
                >
                  <path
                    d='M7.00005 -9.15527e-05C3.13005 -9.15527e-05 4.57764e-05 3.12991 4.57764e-05 6.99991C4.57764e-05 12.2499 7.00005 19.9999 7.00005 19.9999C7.00005 19.9999 14 12.2499 14 6.99991C14 3.12991 10.87 -9.15527e-05 7.00005 -9.15527e-05ZM7.00005 9.49991C5.62005 9.49991 4.50005 8.37991 4.50005 6.99991C4.50005 5.61991 5.62005 4.49991 7.00005 4.49991C8.38005 4.49991 9.50005 5.61991 9.50005 6.99991C9.50005 8.37991 8.38005 9.49991 7.00005 9.49991Z'
                    fill='#848484'
                  />
                </svg>
                <p className='my-auto text-gray-400 text-base font-medium'>NGL, Indonesia</p>
              </div>
              <div className='action mt-12'>
                <a href='#' className='py-3 px-11 text-white font-semibold rounded-xl bg-blue-700'>
                  Book Now
                </a>
                <a href='#' className='py-3 px-9 text-blue-500 font-medium'>
                  View Details
                </a>
              </div>
            </div>
            <div className='card p-6 w-fit rounded-3xl bg-white'>
              <Image
                src={"/assets/images/dest2.png"}
                className='rounded-3xl'
                width={336}
                height={280}
                alt='destionation1'
              />
              <div className='type-rate flex mt-4 gap-x-1.5'>
                <a href='#' className='type py-1.5 px-4 text-sm font-medium text-blue-700 bg-blue-200 rounded-xl'>
                  Beach
                </a>
                <div className='star flex my-auto'>
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
              <p className='name-destination mt-3 text-2xl text-black font-semibold'>Negan Seasides</p>
              <div className='location mt-1.5 flex gap-x-1.5'>
                <svg
                  className='my-auto'
                  width='14'
                  height='20'
                  viewBox='0 0 14 20'
                  fill='none'
                  xmlns='http://www.w3.org/2000/svg'
                >
                  <path
                    d='M7.00005 -9.15527e-05C3.13005 -9.15527e-05 4.57764e-05 3.12991 4.57764e-05 6.99991C4.57764e-05 12.2499 7.00005 19.9999 7.00005 19.9999C7.00005 19.9999 14 12.2499 14 6.99991C14 3.12991 10.87 -9.15527e-05 7.00005 -9.15527e-05ZM7.00005 9.49991C5.62005 9.49991 4.50005 8.37991 4.50005 6.99991C4.50005 5.61991 5.62005 4.49991 7.00005 4.49991C8.38005 4.49991 9.50005 5.61991 9.50005 6.99991C9.50005 8.37991 8.38005 9.49991 7.00005 9.49991Z'
                    fill='#848484'
                  />
                </svg>
                <p className='my-auto text-gray-400 text-base font-medium'>Lombok, Indonesia</p>
              </div>
              <div className='action mt-12'>
                <a href='#' className='py-3 px-11 text-white font-semibold rounded-xl bg-blue-700'>
                  Book Now
                </a>
                <a href='#' className='py-3 px-9 text-blue-500 font-medium'>
                  View Details
                </a>
              </div>
            </div>
            <div className='card p-6 w-fit rounded-3xl bg-white'>
              <Image
                src={"/assets/images/dest3.png"}
                className='rounded-3xl'
                width={336}
                height={280}
                alt='destionation1'
              />
              <div className='type-rate flex mt-4 gap-x-1.5'>
                <a href='#' className='type py-1.5 px-4 text-sm font-medium text-blue-700 bg-blue-200 rounded-xl'>
                  Beach
                </a>
                <div className='star flex my-auto'>
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
              <p className='name-destination mt-3 text-2xl text-black font-semibold'>Ascent Tower</p>
              <div className='location mt-1.5 flex gap-x-1.5'>
                <svg
                  className='my-auto'
                  width='14'
                  height='20'
                  viewBox='0 0 14 20'
                  fill='none'
                  xmlns='http://www.w3.org/2000/svg'
                >
                  <path
                    d='M7.00005 -9.15527e-05C3.13005 -9.15527e-05 4.57764e-05 3.12991 4.57764e-05 6.99991C4.57764e-05 12.2499 7.00005 19.9999 7.00005 19.9999C7.00005 19.9999 14 12.2499 14 6.99991C14 3.12991 10.87 -9.15527e-05 7.00005 -9.15527e-05ZM7.00005 9.49991C5.62005 9.49991 4.50005 8.37991 4.50005 6.99991C4.50005 5.61991 5.62005 4.49991 7.00005 4.49991C8.38005 4.49991 9.50005 5.61991 9.50005 6.99991C9.50005 8.37991 8.38005 9.49991 7.00005 9.49991Z'
                    fill='#848484'
                  />
                </svg>
                <p className='my-auto text-gray-400 text-base font-medium'>Bali, Indonesia</p>
              </div>
              <div className='action mt-12'>
                <a href='#' className='py-3 px-11 text-white font-semibold rounded-xl bg-blue-700'>
                  Book Now
                </a>
                <a href='#' className='py-3 px-9 text-blue-500 font-medium'>
                  View Details
                </a>
              </div>
            </div>
          </div>
          <div className='list-destination w-fit mt-9 mx-auto flex gap-x-9'>
            <div className='card p-6 w-fit rounded-3xl bg-white'>
              <Image
                src={"/assets/images/dest4.png"}
                className='rounded-3xl'
                width={336}
                height={280}
                alt='destionation1'
              />
              <div className='type-rate flex mt-4 gap-x-1.5'>
                <a href='#' className='type py-1.5 px-4 text-sm font-medium text-blue-700 bg-blue-200 rounded-xl'>
                  Beach
                </a>
                <div className='star flex my-auto'>
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
              <p className='name-destination mt-3 text-2xl text-black font-semibold'>Half Heaven</p>
              <div className='location mt-1.5 flex gap-x-1.5'>
                <svg
                  className='my-auto'
                  width='14'
                  height='20'
                  viewBox='0 0 14 20'
                  fill='none'
                  xmlns='http://www.w3.org/2000/svg'
                >
                  <path
                    d='M7.00005 -9.15527e-05C3.13005 -9.15527e-05 4.57764e-05 3.12991 4.57764e-05 6.99991C4.57764e-05 12.2499 7.00005 19.9999 7.00005 19.9999C7.00005 19.9999 14 12.2499 14 6.99991C14 3.12991 10.87 -9.15527e-05 7.00005 -9.15527e-05ZM7.00005 9.49991C5.62005 9.49991 4.50005 8.37991 4.50005 6.99991C4.50005 5.61991 5.62005 4.49991 7.00005 4.49991C8.38005 4.49991 9.50005 5.61991 9.50005 6.99991C9.50005 8.37991 8.38005 9.49991 7.00005 9.49991Z'
                    fill='#848484'
                  />
                </svg>
                <p className='my-auto text-gray-400 text-base font-medium'>Lombok, Indonesia</p>
              </div>
              <div className='action mt-12'>
                <a href='#' className='py-3 px-11 text-white font-semibold rounded-xl bg-blue-700'>
                  Book Now
                </a>
                <a href='#' className='py-3 px-9 text-blue-500 font-medium'>
                  View Details
                </a>
              </div>
            </div>
            <div className='card p-6 w-fit rounded-3xl bg-white'>
              <Image
                src={"/assets/images/dest5.png"}
                className='rounded-3xl'
                width={336}
                height={280}
                alt='destionation1'
              />
              <div className='type-rate flex mt-4 gap-x-1.5'>
                <a href='#' className='type py-1.5 px-4 text-sm font-medium text-blue-700 bg-blue-200 rounded-xl'>
                  Beach
                </a>
                <div className='star flex my-auto'>
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
              <p className='name-destination mt-3 text-2xl text-black font-semibold'>Ascent Tower</p>
              <div className='location mt-1.5 flex gap-x-1.5'>
                <svg
                  className='my-auto'
                  width='14'
                  height='20'
                  viewBox='0 0 14 20'
                  fill='none'
                  xmlns='http://www.w3.org/2000/svg'
                >
                  <path
                    d='M7.00005 -9.15527e-05C3.13005 -9.15527e-05 4.57764e-05 3.12991 4.57764e-05 6.99991C4.57764e-05 12.2499 7.00005 19.9999 7.00005 19.9999C7.00005 19.9999 14 12.2499 14 6.99991C14 3.12991 10.87 -9.15527e-05 7.00005 -9.15527e-05ZM7.00005 9.49991C5.62005 9.49991 4.50005 8.37991 4.50005 6.99991C4.50005 5.61991 5.62005 4.49991 7.00005 4.49991C8.38005 4.49991 9.50005 5.61991 9.50005 6.99991C9.50005 8.37991 8.38005 9.49991 7.00005 9.49991Z'
                    fill='#848484'
                  />
                </svg>
                <p className='my-auto text-gray-400 text-base font-medium'>Bali, Indonesia</p>
              </div>
              <div className='action mt-12'>
                <a href='#' className='py-3 px-11 text-white font-semibold rounded-xl bg-blue-700'>
                  Book Now
                </a>
                <a href='#' className='py-3 px-9 text-blue-500 font-medium'>
                  View Details
                </a>
              </div>
            </div>
            <div className='card p-6 w-fit rounded-3xl bg-white'>
              <Image
                src={"/assets/images/dest6.png"}
                className='rounded-3xl'
                width={336}
                height={280}
                alt='destionation1'
              />
              <div className='type-rate flex mt-4 gap-x-1.5'>
                <a href='#' className='type py-1.5 px-4 text-sm font-medium text-blue-700 bg-blue-200 rounded-xl'>
                  Beach
                </a>
                <div className='star flex my-auto'>
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
              <p className='name-destination mt-3 text-2xl text-black font-semibold'>Maldive Islands</p>
              <div className='location mt-1.5 flex gap-x-1.5'>
                <svg
                  className='my-auto'
                  width='14'
                  height='20'
                  viewBox='0 0 14 20'
                  fill='none'
                  xmlns='http://www.w3.org/2000/svg'
                >
                  <path
                    d='M7.00005 -9.15527e-05C3.13005 -9.15527e-05 4.57764e-05 3.12991 4.57764e-05 6.99991C4.57764e-05 12.2499 7.00005 19.9999 7.00005 19.9999C7.00005 19.9999 14 12.2499 14 6.99991C14 3.12991 10.87 -9.15527e-05 7.00005 -9.15527e-05ZM7.00005 9.49991C5.62005 9.49991 4.50005 8.37991 4.50005 6.99991C4.50005 5.61991 5.62005 4.49991 7.00005 4.49991C8.38005 4.49991 9.50005 5.61991 9.50005 6.99991C9.50005 8.37991 8.38005 9.49991 7.00005 9.49991Z'
                    fill='#848484'
                  />
                </svg>
                <p className='my-auto text-gray-400 text-base font-medium'>NGL, Indonesia</p>
              </div>
              <div className='action mt-12'>
                <a href='#' className='py-3 px-11 text-white font-semibold rounded-xl bg-blue-700'>
                  Book Now
                </a>
                <a href='#' className='py-3 px-9 text-blue-500 font-medium'>
                  View Details
                </a>
              </div>
            </div>
          </div>
        </section>
        <section id='Review' className='mt-32 pb-32 mx-auto w-fit bg-slate-100'>
          <div className='flex gap-x-16'>
            <div className='ilustration relative'>
              <Image src={"/assets/images/review.png"} width={522} height={604} alt='review' />
              <div className='emoji absolute bottom-24 -left-8 w-fit p-6 rounded-3xl bg-white'>
                <p className='text-2xl font-semibold'>How your experience?</p>
                <div className='flex mt-3 gap-x-3'>
                  <Image src={"/assets/images/angry.png"} width={46} height={46} alt='angry' />
                  <Image src={"/assets/images/sad.png"} width={46} height={46} alt='sad' />
                  <Image src={"/assets/images/flat.png"} width={46} height={46} alt='flat' />
                  <Image src={"/assets/images/happy.png"} width={46} height={46} alt='happy' />
                  <Image src={"/assets/images/love.png"} width={46} height={46} alt='love' />
                </div>
              </div>
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
                    src={"/assets/images/reviewer.png"}
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
