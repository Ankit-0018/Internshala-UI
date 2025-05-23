import { AlignCenter, AppWindow , ArrowUp , Bot} from "lucide-react";
import { useState, useRef, useEffect } from "react";

const Aifeatures = ({active}) => {
  const [activeTab, setActiveTab] = useState("copilot");
  const copilotRef = useRef(null);
  const detailsRef = useRef(null);
  const underlineRef = useRef(null);
  const [query , setQuery] = useState("")

  useEffect(() => {
    const activeBtn = activeTab === "copilot" ? copilotRef.current : detailsRef.current;
    const underline = underlineRef.current;

    if (activeBtn && underline) {
      const { offsetLeft, offsetWidth } = activeBtn;
      underline.style.left = `${offsetLeft}px`;
      underline.style.width = `${offsetWidth}px`;
    }
  }, [activeTab]);

  const gradientText = "bg-gradient-to-r from-blue-500 to-pink-500 bg-clip-text text-transparent";
const display = "md:w-full md:h-screen md:bg-white rounded-lg hidden md:p-2 md:flex md:flex-col md:relative";
  const mobileDisplay = "w-full h-screen bg-white rounded-lg p-2 flex flex-col relative";
  return (
     <div  className={`${active== 'chat'? mobileDisplay : display} ${active != 'chat' && 'hidden'} bg-gradient-to-b from-white via-blue-100 to-purple-200`}>
      <header className="relative">
        <div className="flex justify-between items-center">
          <div className="relative space-x-6">
            <button
              ref={copilotRef}
              onClick={() => setActiveTab("copilot")}
              className={`${gradientText} font-medium text-sm px-1 pb-1 cursor-pointer hover:bg-gradient-to-r hover:from-pink-500 hover:to-blue-500 hover:bg-clip-text hover:text-transparent`}
            >
              AI Copilot
            </button>

            <button
              ref={detailsRef}
              onClick={() => setActiveTab("details")}
              className={`${gradientText} font-medium text-sm px-1 pb-1 cursor-pointer hover:bg-gradient-to-r hover:from-pink-500 hover:to-blue-500 hover:bg-clip-text hover:text-transparent`}
            >
              Details
            </button>
          </div>
          <AppWindow size={18} />
        </div>

        <div className="absolute bottom-0 left-0 w-full h-[1px] bg-gray-300" />

        
        <div
          ref={underlineRef}
          className="absolute bottom-0 h-[2px] bg-gradient-to-r from-blue-500 to-pink-500 transition-all duration-300"
        />
      </header>
      <div className="flex-1 max-h-[full] overflow-y-auto relative">
        
         <div className="w-full mb-6 ">
          <button className="min-w-[70%] cursor-pointer absolute bg-white p-2 bottom-25 text-gray-700 rounded-lg text-left text-sm whitespace-nowrap  flex items-center justify-between shadow-sm hover:bg-gray-100 transition-all duration-300 hover:-translate-y-1.5 ">
            <span className="font-semibold">Suggested </span>✨ How do I get a refund?
            
            <div></div>
          </button>
        </div>
        <div className="text-center flex flex-col justify-center absolute top-50 left-1/2 -translate-x-1/2 -translate-y-1/2">
        
<div className="text-center flex justify-center">

<Bot size={28} className="te" />
</div>
         
<span className="font-semibold text-sm">Hi, I'm Fin AI Copilot</span>
<span className="text-[0.7rem] text-gray-500">Ask me anything about this Conversation.</span>
        </div>
      <div className="w-full bg-gradient-to-r from-purple-200 via-pink-200 to-blue-200 p-[1px] rounded-xl shadow-sm absolute bottom-14">
      <div className="flex items-center bg-white rounded-xl px-4 py-2">
        <input
          type="text"
          placeholder="Ask a question..."
          className="flex-1 bg-transparent outline-none text-sm placeholder-gray-500"
          onChange={(e) => setQuery(e.target.value)}
          value={query}
        />
        <button className="ml-2 text-gray-500 hover:text-gray-700" onClick={() => setQuery("")}>
          <ArrowUp size={16} />
        </button>
      </div>
    </div>
     </div>
    </div>
  );
};

export default Aifeatures;
