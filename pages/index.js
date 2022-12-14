import Head from 'next/head';
import Image from 'next/image';
import Header from '../components/header';
import { SearchIcon } from '@heroicons/react/solid';
import { CameraIcon } from '@heroicons/react/outline';
import Footer from '../components/Footer';

export default function Home() {
  return (
    <div className=''>
      <Head>
        <title>Google clone</title>
        <meta name='description' content='Generated by create next app' />
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <Header />

      {/*<Body/>*/}
      <form className='flex flex-col items-center mt-40'>
        <Image
          src='https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Google_2015_logo.svg/1200px-Google_2015_logo.svg'
          alt='google logo'
          width='300'
          height='100'
          objectFit='cover'
        />
        <div className='flex w-full mt-5 mx-auto max-w-[90%] border border-gray-200 items-center hover:shadow-lg focus-within:shadow-lg px-5 py-3 rounded-full sm:max-w-xl lg:max-w-2xl'>
          <SearchIcon className='h-5 text-gray-500 mr-3' />
          <input
            className='flex-grow focus:outline-none'
            type='text'
          />
          <CameraIcon className='h-5' />
        </div>
        <div className='flex flex-col sm:flex-row w-[50%] space-y-2 mt-8 sm:space-y-0 sm:space-x-4 justify-center'>
          <button className='btn'>Google Search</button>
          <button className='btn'>I'm Feeling Lucky</button>
        </div>
      </form>

      {/*<Footer/>*/}
      <Footer />
    </div>
  );
}
