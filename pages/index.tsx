import Head from 'next/head'
import { useCallback } from "react"
import { BsTwitter, BsBell, BsEnvelope, BsBookmark } from 'react-icons/bs'
import { BiHomeCircle, BiHash, BiUser } from 'react-icons/bi'
import { CredentialResponse, GoogleLogin } from "@react-oauth/google"
import FeedCard from '@/components/FeedCard'
import { toast } from 'react-hot-toast'
import { graphqlClient } from '@/clients/api'
import { verifyUserGoogleTokenQuery } from '@/graphql/query/user'

interface TwitterSidebarButton {
  title: string,
  icon: React.ReactNode
}

const SidebarMenuItems: TwitterSidebarButton[] = [
  {
    title: 'Home',
    icon: <BiHomeCircle />
  },
  {
    title: 'Explore',
    icon: <BiHash />
  },
  {
    title: 'Notifications',
    icon: <BsBell />
  },
  {
    title: 'Messages',
    icon: <BsEnvelope />
  },
  {
    title: 'Bookmarks',
    icon: <BsBookmark />
  },
  {
    title: 'Profile',
    icon: <BiUser />
  }
]

export default function Home() {


  const handelLoginWithGoogle = useCallback(async (cred: CredentialResponse) => {
    const googleToken = cred.credential
    if (!googleToken) {
      return toast.error('Error while login with google')
    }

    const { verifyGoogleToken } = await graphqlClient.request(verifyUserGoogleTokenQuery, { token: googleToken })
    toast.success('Login success')
    if (verifyGoogleToken) {
      window.localStorage.setItem('__twitter_token', verifyGoogleToken)
    }
  }, [])

  return (
    <div className='overflow-x-hidden'>
      <Head>
        <title>Twitter-Clone</title>
        <link rel="icon" href="/logo.png" />
      </Head>

      <div className='grid grid-cols-12 h-screen px-52 w-screen'>
        <div className='col-span-3 flex flex-col justify-start pt-1 ml-32'>
          <div className='text-2xl transition-all ease-linear hover:bg-gray-800 h-fit w-fit object-fit cursor-pointer p-4 rounded-full'>
            <BsTwitter />
          </div>

          <div className='mt-2 text-xl font-semibold'>
            {SidebarMenuItems.map((item, index) => {
              return (
                <div key={index} className='flex mt-2 gap-4 w-fit items-center justify-start px-3 pr-10 py-3 rounded-full transition-all ease-linear hover:bg-gray-800 cursor-pointer'>
                  <div className='text-2xl'>
                    {item.icon}
                  </div>
                  <div className='ml-2'>
                    {item.title}
                  </div>
                </div>
              )
            })}
          </div>

          <button className='bg-[#1d9bf0] w-[70%] transition-colors ease-linear hover:bg-[#1A8CD8] rounded-full py-2 px-2 mt-6 text-xl font-semibold mr-10'>Tweet</button>
        </div>


        {/* card */}
        <div className='col-span-5 border-[1px] border-b-0 overflow-y-scroll no-scrollbar border-gray-700 '>
          <FeedCard />
          <FeedCard />
          <FeedCard />
          <FeedCard />
          <FeedCard />
          <FeedCard />
          <FeedCard />
          <FeedCard />
          <FeedCard />
          <FeedCard />
          <FeedCard />
          <FeedCard />
        </div>

        <div className='col-span-3 p-5'>
          <div className='p-5 bg-slate-700 rounded-lg'>
            <h1 className='my-2 text-xl'>New To Twitter?</h1>
            <GoogleLogin onSuccess={handelLoginWithGoogle} />
          </div>
        </div>
      </div>
    </div>
  )
}
