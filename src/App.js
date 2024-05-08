import { useState } from 'react';
import './App.css';
import RoomChat from './components/RoomChat';
import RoomMessage from './components/RoomMessage';
import SideBar from './components/SideBar';
import EastIcon from '@mui/icons-material/East';


function App() {
  const [state, setState] = useState({ options: false, drop: false })
  return (
    <div className='h-screen flex'>
      <SideBar state={state} setState={setState} />
      <div className='border-r'>
        <RoomMessage />
      </div>
      <RoomChat state={state} setState={setState} />
      <div className={`${state.options ? 'block' : 'hidden'} bg-green-400 lg:w-1/3 w-1/2`}
        onClick={() => setState({ ...state, options: false })}>
        <EastIcon fontSize='large' />
      </div>
    </div >
  );
}

export default App;
