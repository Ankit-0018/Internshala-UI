import React, { useState } from 'react';
import {useDb} from '../hooks/useDb'
import { useSelectedUser } from '../hooks/useSelectedUser';


const InboxCard = () => {
  const {selectedUserId, setSelectedUserId} = useSelectedUser();

 const {mockData} = useDb();
 

  return (
    <div className="w-full h-full ">
      {mockData.map((info) => (
        <div
          key={info.id}
          onClick={() => setSelectedUserId(info.id)}
          className={`flex items-center gap-4 p-3 rounded-lg cursor-pointer transition-colors mb-2 ${
            selectedUserId === info.id
              ? 'bg-blue-100'
              : 'hover:bg-gray-200'
          }`}
        >
          <img
            src={info.profile_pic}
            alt={info.name}
            className="size-8 rounded-full object-cover"
          />
         <div className="flex-1">
            <div className="flex justify-between items-center">
              <h3 className="font-semibold text-[0.8rem] text-gray-900">
                {info.name}
              </h3>
              <span className="text-xs text-gray-500">{info.waiting_since}</span>
            </div>
            <p className="text-xs text-gray-600 dark:text-gray-400 mt-1 truncate">
              Hey I have a ques...
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default InboxCard;
