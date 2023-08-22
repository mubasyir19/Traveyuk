import React, { useState } from 'react';
import * as Tabs from '@radix-ui/react-tabs';

export default function Booking() {
  const [flightDate, setFlightDate] = useState('');
  const [checkInDate, setCheckInDate] = useState('');
  const [checkOutDate, setCheckOutDate] = useState('');

  const [activeTab, setActiveTab] = useState(1);

  const switchTab = (tabNumber) => {
    setActiveTab(tabNumber);
  };

  return (
    <div className='choose-tab mx-auto w-fit -mt-32' defaultValue='tab1'>
      {/* <Tabs.Root className='choose-tab mx-auto w-fit -mt-32' defaultValue='tab1'> */}
      <div className='tab-list flex text-white'>
        {/* <Tabs.List className='tab-list flex text-white'> */}
        <button
          data-state='active'
          className={`tab-button flex gap-2.5 py-4 px-6 rounded-tl-lg font-medium ${
            activeTab === 1 ? 'bg-blue-700 text-white' : 'bg-slate-50 text-black'
          } `}
          onClick={() => switchTab(1)}
        >
          <svg width='20' height='21' viewBox='0 0 20 21' fill='none' xmlns='http://www.w3.org/2000/svg'>
            <path
              d='M20 14.5V12.5L11.5 7.5V2C11.5 1.17 10.83 0.5 10 0.5C9.17 0.5 8.5 1.17 8.5 2V7.5L0 12.5V14.5L8.5 12V17.5L6 19V20.5L10 19.5L14 20.5V19L11.5 17.5V12L20 14.5Z'
              fill={`${activeTab === 1 ? 'white' : 'black'}`}
            />
          </svg>
          Flight
        </button>
        <button
          className={`tab-button flex gap-2.5 py-4 px-6 rounded-tr-lg font-medium ${
            activeTab === 2 ? 'bg-blue-700 text-white' : 'bg-slate-50 text-black'
          }`}
          onClick={() => switchTab(2)}
        >
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
              fill={`${activeTab === 2 ? 'white' : 'black'}`}
            />
          </svg>
          <span className='my-auto'>Hotel</span>
        </button>
      </div>
      <div className='tab-content w-fit bg-white rounded-b-2xl rounded-tr-2xl'>
        {activeTab === 1 && (
          <div className='lg:flex lg:flex-grow-1 p-6 grid gap-y-4 lg:gap-6 rounded-b-2xl rounded-tr-2xl' value='tab1'>
            {/* Destination Flight */}
            <div className=' block md:flex justify-between p-6 border-2 gap-x-10 rounded-lg border-stone-300'>
              <div className='take-off flex gap-3'>
                <div className='logo flex my-auto h-12 w-12 p-1.5 justify-center items-center text-center rounded-xl bg-blue-200'>
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
                <div className='my-auto '>
                  <p className='text-sm md:text-base'>Take Off</p>
                  <select className='text-base font-semibold' defaultValue='Jakarta'>
                    <option value='Jakarta'>Jakarta</option>
                    <option value='Bandung'>Bandung</option>
                    <option value='Semarang'>Semarang</option>
                    <option value='Yogyakarta'>Yogyakarta</option>
                    <option value='Surabaya'>Surabaya</option>
                    <option value='Malang'>Malang</option>
                  </select>
                  {/* <p className='text-base font-semibold'>Jakarta</p> */}
                </div>
              </div>
              <div className='arrow flex justify-center my-6 md:my-auto'>
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
                <div className='logo flex my-auto h-12 w-12 p-1.5 justify-center items-center text-center rounded-xl bg-blue-200'>
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

                <div className='my-auto'>
                  <p className='text-sm md:text-base'>Landing</p>
                  <select className='text-base font-semibold' defaultValue='Jakarta'>
                    <option value='Jakarta'>Jakarta</option>
                    <option value='Bandung'>Bandung</option>
                    <option value='Semarang'>Semarang</option>
                    <option value='Yogyakarta'>Yogyakarta</option>
                    <option value='Surabaya'>Surabaya</option>
                    <option value='Malang'>Malang</option>
                  </select>
                </div>
              </div>
            </div>
            {/* Date Flight */}
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
                  <input type='date' value={flightDate} onChange={(event) => setFlightDate(event.target.value)} />
                  {/* <p className='text-base font-semibold'>25 July 2025</p> */}
                </div>
              </div>
            </div>
            {/* Type Flight */}
            <div className=' p-6 border-2 rounded-lg border-stone-300'>
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
                  <select className='text-base font-semibold' defaultValue='Bussines Class'>
                    <option value='VIP Class'>VIP Class</option>
                    <option value='Bussines Class'>Bussines Class</option>
                    <option value='Executive Class'>Executive Class</option>
                  </select>
                  {/* <p className='text-base font-semibold'>Bussine Class</p> */}
                </div>
              </div>
            </div>
            <div className='search p-4 lg:p-8 flex justify-center items-center text-center rounded-xl bg-blue-700'>
              <svg width='28' height='29' viewBox='0 0 28 29' fill='none' xmlns='http://www.w3.org/2000/svg'>
                <circle cx='13' cy='13.2084' r='11.4792' stroke='white' strokeWidth='2.375' />
                <path d='M20.9165 21.9167L26.4582 27.4584' stroke='white' strokeWidth='2.375' strokeLinecap='round' />
              </svg>
            </div>
          </div>
        )}
      </div>
      <div className='tab-content w-fit bg-white rounded-b-2xl rounded-tr-2xl'>
        {activeTab === 2 && (
          <div className='lg:flex lg:flex-grow-1 p-6 grid gap-y-4 lg:gap-6 rounded-b-2xl rounded-tr-2xl' value='tab2'>
            {/* Date Stay */}
            <div className=' block md:flex justify-between p-6 border-2 gap-x-10 rounded-lg border-stone-300'>
              <div className='checkin flex gap-3'>
                <div className='logo flex my-auto h-12 w-12 p-1.5 justify-center items-center text-center rounded-xl bg-blue-200'>
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
                <div className='my-auto '>
                  <p className='text-sm md:text-base'>Check In</p>
                  <input type='date' value={checkInDate} onChange={(event) => setCheckInDate(event.target.value)} />
                </div>
              </div>
              <div className='arrow flex justify-center my-6 md:my-auto'>
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
              <div className='checkout flex gap-3'>
                <div className='logo flex my-auto h-12 w-12 p-1.5 justify-center items-center text-center rounded-xl bg-blue-200'>
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

                <div className='my-auto'>
                  <p className='text-sm md:text-base'>Check Out</p>
                  <input type='date' value={checkOutDate} onChange={(event) => setCheckOutDate(event.target.value)} />
                </div>
              </div>
            </div>
            {/* Date Flight */}
            <div className='p-6 border-2 rounded-lg border-stone-300'>
              <div className='date flex gap-3'>
                <div className='logo my-auto h-12 w-12 p-1.5 flex justify-center items-center text-center rounded-xl bg-blue-200'>
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
                      fill='#3258E8'
                    />
                  </svg>
                </div>
                <div className=''>
                  <p className='text-base'>Room Type</p>
                  <select className='text-base font-semibold' defaultValue='Superior Room'>
                    <option value='Superior Room'>Superior Room</option>
                    <option value='Deluxe Room'>Deluxe Room</option>
                    <option value='Suite Room'>Suite Room</option>
                    <option value='Standard Room'>Standard Room</option>
                  </select>
                </div>
              </div>
            </div>
            {/* Type Flight */}
            <div className=' p-6 border-2 rounded-lg border-stone-300'>
              <div className='type flex gap-3'>
                <div className='logo my-auto h-12 w-12 p-1.5 flex justify-center items-center text-center rounded-xl bg-blue-200'>
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
                      fill='#3258E8'
                    />
                  </svg>
                </div>
                <div className=''>
                  <p className='text-base'>Guests</p>
                  <select className='text-base font-semibold' defaultValue='2 Persons'>
                    <option value='1'>1 Person</option>
                    <option value='2'>2 Persons</option>
                    <option value='3'>3 Persons</option>
                    <option value='4'>4 Persons</option>
                    <option value='5'>5 Persons</option>
                  </select>
                  {/* <p className='text-base font-semibold'>Bussine Class</p> */}
                </div>
              </div>
            </div>
            <div className='search p-4 lg:p-8 flex justify-center items-center text-center rounded-xl bg-blue-700'>
              <svg width='28' height='29' viewBox='0 0 28 29' fill='none' xmlns='http://www.w3.org/2000/svg'>
                <circle cx='13' cy='13.2084' r='11.4792' stroke='white' strokeWidth='2.375' />
                <path d='M20.9165 21.9167L26.4582 27.4584' stroke='white' strokeWidth='2.375' strokeLinecap='round' />
              </svg>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
