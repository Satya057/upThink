 
import './App.css';
import Active from './Components/Active';
import Submissions from './Components/Submission';
import TotalActive from './Components/TotalActive';
import TotalSub from './Components/TotalSub';
import {Flex} from "@chakra-ui/react"

function App() {
  return (
    <div className="App">
    <div className='dd'>
    <h1 className='ha'>assignment-1</h1>
    
    <h1 className='ss'>invite link </h1>
     
    
    </div>
      <Flex gap='10px'>
        <TotalActive/>
        <TotalSub/>
      </Flex>
      <Active/>
      <Submissions/>
    </div>
  );
}

export default App;