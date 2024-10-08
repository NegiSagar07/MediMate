import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';
import Home from './pages/Home';
import Signup from './pages/Signup';
import Clinic from './components/Clinic';
import Chemist from './components/Chemist';
import Hospital from './components/Hospital';
import Apparatus from './components/Apparatus';


function App() {

  const router = createBrowserRouter([
    {
      path : "/",
      element : <Home/>
    },
    {
      path : "/signup",
      element : <Signup/>
    },
    {
      path : "/clinic",
      element : <Clinic/>
    },
    {
      path : "/hospital",
      element : <Hospital/>
    },
    {
      path : "/chemist",
      element : <Chemist/>
    },
    {
      path : "/apparatus",
      element : <Apparatus/>
    }
  ])

  
  return (
    <RouterProvider router = {router}>
      <Home/>
    </RouterProvider>
  );
}

export default App;
