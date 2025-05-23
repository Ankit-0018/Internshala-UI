import React, { createContext, useState } from 'react';
import { Mail ,Bot, MessageCircle} from 'lucide-react';
import { act } from 'react';

const Navigation = ({active , setActive}) => {
  


  const buttons = [
    { key: 'mail', icon: <Mail size={14} /> },
    { key: 'user', icon: <MessageCircle size={14} /> },
    { key: 'chat', icon: <Bot size={14} /> },
  ];

  return (
    <div className="absolute w-[160px] h-[2.5rem] bg-white md:hidden  rounded-lg bottom-2 shadow-3xl left-[30%] flex justify-between gap-2 py-4 px-2 items-center cursor-pointer">
      {buttons.map(({ key, icon }) => (
        <div
          key={key}
          onClick={() => setActive(active === key ? null : key)}
          className={`size-[2.5rem] transition-all duration-300 ${
            active === key ? 'bg-[#0f1829] text-white' : ''
          } rounded-full flex justify-center items-center`}
        >
          {icon}
        </div>
      ))}
    </div>
  );
};

export default Navigation;



