import React, { useState } from "react";
import { Ellipsis, MoonStar , SquareX ,Zap, Bookmark, Smile , ChevronDown} from "lucide-react";
import ChatMessage from "./ChatMessage";
import { useDb } from "../hooks/useDb";
import { useSelectedUser } from "../hooks/useSelectedUser";

const Chatbox = ({active,setActive}) => {

  const [query,setQuery] = useState("")
  const [chatHistory , setChatHistory] = useState([])
  const {mockData} = useDb()
const {selectedUserId, setSelectedUserId} = useSelectedUser();
const user = mockData[selectedUserId]

const handleSend = () => {


  if(!query) return
  setChatHistory([...chatHistory, query])
  setQuery("")
}


  return (
    
    <div className={`w-full h-full  ${active!="user" &&"hidden md:flex"} flex bg-white rounded-lg p-2 relative  flex-col transition-all duration-300 `} >
      <header className="flex justify-between">
        <h1 className="text-xl font-semibold">{user.name}</h1>
        <div className="flex gap-2">
          <button className="size-7 flex justify-center items-center bg-gray-200 rounded-md hover:translate-0.5 cursor-pointer transition-all duration-300">
            <Ellipsis size={14}  />
          </button>
          <button className="size-7 flex justify-center items-center bg-gray-200 rounded-md hover:translate-0.5 cursor-pointer transition-all duration-300">
            <MoonStar size={14}  />
          </button>

          <button className="flex items-center gap-2 bg-black text-white px-4 py-2 rounded-md text-sm hover:translate-0.5 cursor-pointer transition-all duration-300">
            <SquareX size={14} /> <span className="font-semibold">Close</span>
          </button>
        </div>
      </header>
      <div className="w-full h-[0.5px] bg-gray-300 mt-2">

      </div>
<div className="w-full flex-1 overflow-y-auto max-h-[calc(100vh-12rem)] pr-2 bg-gradient-to-br from-white to-pink-50">
      {user.last_messages.map((info,index) => {
        
          
return <div key={index} className="w-full min-h-20px relative pl-7 mt-6">
<img src="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBwgHBgkIBwgKCgkLDRYPDQwMDRsUFRAWIB0iIiAdHx8kKDQsJCYxJx8fLT0tMTU3Ojo6Iys/RD84QzQ5OjcBCgoKDQwNGg8PGjclHyU3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3N//AABEIAJQAqQMBIgACEQEDEQH/xAAbAAACAwEBAQAAAAAAAAAAAAAAAQIDBQQGB//EADcQAAIBAgMHAgUCBQQDAAAAAAECAAMRBBIhBRMiMUFRYTJxI0KBkaEUUjNiscHRBhXw8SRzkv/EABQBAQAAAAAAAAAAAAAAAAAAAAD/xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIRAxEAPwD7Zu8uoPKLNvOG3OIVCTY9ZNlCDMBqOUBFd1qNekB8TnoR2iUmobNqPEbfD9PWAid1oNfeMLn4ibXgoFQXbnEzFDlU6CAZyvDblpHuwOK+vO0YRWFz11lNXEpSHxaiqvnnAsz5+E6XjKinre8zqu1aCH4NNnPcmwlD7WrsLBEUfeBsA73npbtA3p6DUGYg2niV5ZP/AJkv91rkjMiN+IGyF3ozE29os+U2toJnU9rqBZ6ZT2N53UK1DEDgqAt26wLBTB1udYs+bhIABhnYGw5SRRVF4CyinrcxAmrodIKxc2a1o3G7F15wEfhctbxgbziOkSfE9XSDHIbLygBYpwgXhvT2EkqhxmbnHul7GAFQBcDWVoxLAEm0S5gw5yx/ScvPxAVQZFuukVMZ7ltYU/Ub8rdY6vdfxAVQ5DppeBZFpmpVIAHMmQaqlCk9WsbAd+sw8ZiqmKe7AKl9E7e8DpxW1HYlcNdV/cecz2JYksSSe8UIBaEIQCEIQHAEg3B17xQgd2F2k9I5a4NRO/UTVoVlrgMjZlM85LMPXeg+ZPqO8D0rqFUkCxkaZLmzaynCV0xChgfcHoZ0VfTw/iAqnCQFNoUxmXi1MKfXN+YqnMZeXiAnYq1gbCR3jful1O2UXtfzHw+ICLKQQDrK0BVgSNBDIw10+kkzhwVW9zAKnELLqbxKRTDF9BzuYKDTN25eJn7YxIyLRQ6tq3tA4cfimxVUkaU19I7zmhCAQhCAQvIVqqUUL1WyqOpmTX2wSbUKYA7v/iBswnnv90xd75x7ZRL6O2KgYCvTDr3XQiBtQleHxFPEJnpNcciO0sgEIQgW4au2Hqh15fMO4noMO6sgqA8JGhnmpo7Jr2b9OTo2q36HrA1qnFbLr7R07Ktm0iX4fq+loMM5uv5gJwWa6i4iyv8AtMsVggytz8R7xfP2gR3gOlrXiyZOK/KPdhdedog5fhI5wGW3gt6eus85iam+xD1OhOntNzGncYSqwOtrD6zz0AhCEAiZgqlmNlAuT2jnDtmoaeCIHzkLAyMdi3xdbN8gNkHYf5nNCEAhCEC3DV3w1UVKZPkd/E9NRqrWpLUT0sLzyk2thVSaVSkflNx9f+oGpCEIBJU3am4qJzU3EjCB6ZHXEU1dTpa/3kgd3w85xbKq/wDiDrYkf8+87QN4LnSAZc/EDaLdH90ebd8Ii3p7QAOxNj1jKhAWHMcpIqACQBK0YswDG48wOLazk4Mg9XExpt7aUfpBYfOP7zEgEIQgEztuqWwqHoHuftNGVYuiMRhnpdSNPeB5aEbAqxVhYjQiKAQhCATX2Ap+O3Q5R/WZFr6DrpPR7Mofp8KAdHbiYdvEDrhCEAhCEDX2GMyVlPIMLTQYmnwrMvYxIWqRpqP7zVpjOt2Fz5gNVDjM3OPdL5+8g5KtYGwkc57mAKWuOZlj2CHKBeMsCCAbmVoGVgW5QOXaAL4Op4AP5Ew56esoq02QfMLGeZZWRir6MNDAUIQgEIQgcG0dnriLVKdlqjQ9mmHWpVKLZaqFT5E9U7KouzBQOZJtOOttDBAZXdag7Bc0Dz0kiNUbLTUs3YC81v1ezM19zr/650UcfgQMtMrS91tAp2fsw02FbEevonb3mp/WQp1Edb03Vh/KZOAQhCAQhDXpA2diLbDuxHqad1S+bh5eJTh6Zp4Wig5gcXuZfTOUWbnAklsvFz8x6eJU4LNcAkRZW/aYEgjA3PL3kiyuMo5mG8B011kQpQ5jyEAQFNW0mPtekFriqnpfn7zZJ3mi8/MpxOHWpQanU66gjoYHnYRsjU3KOLFdCIutoATYEnS3eZOM2ta6YUAn955fSU7WxpqOaFM/DBsxHzGZsCdSrUrHNUdmPkyEIQCEIQJJUemc1NmU9wbTTwe1mUhcSMw/eOY9xMqED1qOrqGRgynkRHPPbOxrYapZz8FvUO3mehBvy1gOdGz8Oa+JXTRdSZz2zWAFyToJv4HD/pKPFqzatA6F4PV17RMM5zLGfiWy9O8ARTFjz8QGGCDKTYw3i9/xEVL8Qi3R8QHu8ut+UQYvwnkYBydGGkkVCDMOkBW3fFziHxDr07QUl9Gjf4eq9YHFtLBCqM1P+IBp/N4nnNo1Ww2FqN6X9Iv0JnsFG81aZW3dkptGiURt3VXiDW0bwfvA+fQnRjcHiMDW3WJpGm1ri/JvY9ZzwCEIQCEIQCEIQCeg2PWNXCgMdUOX6dJh4ehWxVZaNCmz1DyVRPcbA2Edm0jUxDCpWaxygcKf5OsDp2dgjRH6iqOP5VPSaF95ofxAMXOXSNgKYuvOAfw/rDLvBfrBbVBxdIMd3oogGc0+G17eYb4/t/MFUOMx5x7te8BlFAJA1laMWYBuRiXMWAufrLHtlOW14CcZBddDyip8d83SFPVuK594VOmX8QByUNlNhJIAygtqYqdiDcfeRckMbEgeIFOKoUsTTNHEU1qU+zCYG0P9Ho3Hs+tk0/h1NR9DPUqBlF7X8yoXzW1tA+eYnYu0cN68K7DvT4h+JwMCpswyns2hn1Z7BdOfS0ryLUIFVAw/mF4Hyy47iAIJAGpPQT6hUweEuCMNQv33YlmHppTU5URfZQIHznC7I2hirbnCVSD8zDKPuZs4L/STXvj6wHdKOv5M9bUJB00HiWLawJgc+B2fhcFRFPC0Vpr1I5n3MsDsTYm8Vzc6kS1rBSQBeAmUKLrzkUJY2aJCc3Fe3mSqem6/cQCpwWy9Y04xducjT1HF+YVLhtDYeICdmVrKbCLeP3llOxUX1PmSsvYQBvSfaU0/WPaOECdX0/WKj1hCAq3qk6XoEUIFT+o+8vPpMIQKafrEsqeiKEBUeZjrcxCECVL0CVP6jCEC8chOdPWIQgXVPQZCjzhCAVun1kqPohCBXU9ZkYQgf//Z" alt="image" className="size-6 object-cover absolute bottom-2 left-0" />
<div className="p-2 bg-gray-200 rounded-xl">
  <p className="text-sm">{info}</p>
</div>

</div>
    
      })}

     <ChatMessage chatHistory={chatHistory}/>
      </div>
      <div className="w-full bottom-0 relative shadow-2xl">
        <input type="text" placeholder="Use xx for shortcuts" className="w-full h-[6rem] px-4 pr-26 outline-none" value={query} onChange={(e) => setQuery(e.target.value)} />
 <div className="flex items-center space-x-2 absolute top-2 right-2">
      <button className="p-2 hover:bg-gray-100 rounded">
        <Zap size={12} />
      </button>

      <div className="w-px h-4 bg-gray-400" />

      <button className="p-2 hover:bg-gray-100 rounded">
        <Bookmark size={12} />
      </button>

      <button className="p-2 hover:bg-gray-100 rounded">
        <Smile size={12} />
      </button>
    </div>
     <div className="inline-flex items-center border rounded-md overflow-hidden shadow-sm bg-white absolute top-10 right-2">

      <button onClick={handleSend} className="px-4 py-2 text-[0.6rem] text-gray-700 font-semibold hover:bg-gray-100 cursor-pointer">
        
        Send
      </button>

      <div className="w-px h-5 bg-gray-300" />

      <button className="px-2 hover:bg-gray-100">
        <ChevronDown size={12} className="text-gray-700" />
      </button>
    </div>
      </div>
      
    </div>
  );
};

export default Chatbox;
