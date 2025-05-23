import { ChevronDown } from 'lucide-react'
import React from 'react'
import InboxCard from './InboxCard'

const YourInbox = ({active , setActive}) => {


  const mobileDisplay = "w-full h-screene bg-white rounded-lg p-2 relative flex flex-col"
  const display = "md:w-full md:h-screen md:bg-white md:rounded-lg hidden  md:p-2 md:relative md:flex md:flex-col"

  return (
    <div className={`${active == 'mail' ? mobileDisplay : display}`}>
     <header>
       <h1 className="text-xl font-semibold">Your Inbox</h1>
     </header>
      <div className="w-full min-h-[0.5px] bg-gray-300 mt-2 flex">

      </div>

      <div className='flex justify-between items-center my-2'>
        <div className='flex gap-1 justify-between items-center'>
        <button className='text-[0.8rem] font-medium'>5 Open</button>
<ChevronDown size={14}/>
        </div>
        <div className='flex gap-1 justify-between items-center'>
        <button className='text-[0.8rem] font-medium'>Waiting Longest</button>
<ChevronDown size={14}/>
        </div>


      </div>

      <InboxCard/>
    </div>
  )
}

export default YourInbox
