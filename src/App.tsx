import { Route, Routes } from 'react-router-dom';
import './App.css';
import { RoutesMaster } from './app/routes';
import MiniDrawer from './features/sidebar';

function App() {
 
  return (
    <div className="App">
      <MiniDrawer/>  
      <Routes>
          {RoutesMaster.map((rts, index) => {
            return(
              <Route key = {index} path = {rts.Path} element={<rts.Element/>}/>
            )
          })}
      </Routes>
    </div>
  );
}

export default App;
