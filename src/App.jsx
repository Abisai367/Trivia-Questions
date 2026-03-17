import {Routes, Route} from 'react-router-dom';
import Connection from './Connection'
import FetchData from './FetchData';
import { useLocation } from 'react-router-dom';

function App() {
  
  return(
      <Routes>
        <Route path="/" element={<Connection/>}/>
        <Route path="/quiz" element={<FetchDataWrapper/>}/>
      </Routes>
  )

}


function FetchDataWrapper() {
  const location = useLocation();
  const { number, category, level, type } = location.state || {};
  
  return (
    <FetchData
      number={number}
      category={category}
      level={level}
      type={type}
    />
  );
}

export default App
