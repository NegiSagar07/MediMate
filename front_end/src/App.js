import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from './pages/Home';
import Signup from './pages/Signup';
import Clinic from './components/Clinic';
import Chemist from './components/Chemist';
import Hospital from './components/Hospital';
import Apparatus from './components/Apparatus';
import Profile from './components/Profile';
import Ctscan from './equipment/Ctscan';
import Defibrillatro from './equipment/Defibrillatro';
import Dialysis from './equipment/Dialysis';
import Ecmo from './equipment/Ecmo';
import Mri from './equipment/Mri';
import Petscan from './equipment/Petscan';
import Ultrasound from './equipment/Ultrasound';
import Ventilators from './equipment/Ventilators';
import Xray from './equipment/Xray';
import Service from './pages/Service';
import HospitalRegister from './business/HospitalRegister';
import ClinicRegister from './business/ClinicRegister';
import ChemistRegister from './business/ChemistRegister';
import EquipmentRegister from './business/EquipmentRegister';
import DoctorRegister from './business/DoctorRegister';
import AboutHospital from './pages/AboutHospital';


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
      path : "/hospitals",
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
    },
    {
      path : "/ctscan",
      element : <Ctscan/>
    },
    {
      path : "/defibrillator",
      element : <Defibrillatro/>
    },
    {
      path : "/dialysis",
      element : <Dialysis/>
    },
    {
      path : "/ecmo",
      element : <Ecmo/>
    },
    {
      path : "/mri",
      element : <Mri/>
    },
    {
      paht : "/petscan",
      element : <Petscan/>
    },
    {
      path : "/ultrasound",
      element : <Ultrasound/>
    },
    {
      path : "/ventilator",
      element : <Ventilators/>
    },
    {
      path : "/xray",
      element : <Xray/>
    },
    {
      path : "/services",
      element: <Service/> 
    },
    {
      path : "/register/hospital",
      element : <HospitalRegister/>
    },
    {
      path : "/register/clinic",
      element : <ClinicRegister/>
    }, 
    {
      path : "/register/chemist",
      element : <ChemistRegister/>
    },
    {
      path : "/register/equipment",
      element : <EquipmentRegister/>,
    },
    {
      path : "/register/doctor",
      element : <DoctorRegister/>
    },
    {
      path : "/about-hospital",
      element : <AboutHospital/>
    }
  ])

  
  return (
    <RouterProvider router = {router}>
      <Home/>
    </RouterProvider>
  );
}

export default App;
