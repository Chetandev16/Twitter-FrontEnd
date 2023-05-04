import Head from 'next/head'
import { BsTwitter } from 'react-icons/bs'

export default function Home() {
  return (
    <div>
      <Head>
        <title>Twitter-Clone</title>
        <link rel="icon" href="/logo.png" />
      </Head>

      <div className='grid grid-cols-12 h-screen w-screen'>
        <div className='col-span-3 flex justify-end'>
          <BsTwitter />
        </div>

        <div className='col-span-6 border-r-[1px] border-l-[1px] border-gray-400'>

        </div>

        <div className='col-span-3'>

        </div>
      </div>
    </div>
  )
}
