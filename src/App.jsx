import { useState } from 'react'
import YourInbox from './components/YourInbox'
import Chatbox from './components/Chatbox'
import Aifeatures from './components/Aifeatures'
import Navigation from './components/Navigation'
import { MockProvider } from './hooks/useDb'
import { SelectedUserProvider } from './hooks/useSelectedUser'
const App = () => {
  const [active, setActive] = useState('chat');
  return (
    <MockProvider>
      <SelectedUserProvider>


    <div className='bg-[#c4c6f6] w-full overflow-hidden h-screen  p-4 grid md:grid-cols-[1fr_2fr_1fr] gap-2 relative'>
      
      <YourInbox active={active} setActive={setActive}/>
      <Chatbox active={active} setActive={setActive}/>
      <Aifeatures active={active} setActive={setActive}/>
      <Navigation active={active} setActive={setActive}/>
      
    </div>
      </SelectedUserProvider>
    </MockProvider>
  )
}

export default App
