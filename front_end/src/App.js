import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from './pages/Home';
import Signup from './pages/Signup';
import Clinic from './components/Clinic';
import Chemist from './components/Chemist';
import Hospital from './components/Hospital';
import Apparatus from './components/Apparatus';
import Profile from './components/Profile';


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
    },
    {
      path : "/profile",
      element : <Profile/>
    }
  ])

  
  return (
    <RouterProvider router = {router}>
      <Home/>
    </RouterProvider>
  );
}

export default App;
