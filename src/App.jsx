import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './App.css'
import { Provider } from 'react-redux';
import { QueryClient, QueryClientProvider } from 'react-query';
import Store from './Store/Store';
import BookingList from './Components/GaurdComponents/BookingComponent/BookingList';


import Login from './Screens/Login/Login'
// import LandingScreen from './Screens/LandingScreen'
import Layout from './Layout/Layout'
// import Child from './Screens/Child'
import UpdateParkingForm from './Components/VendorComponents/ParkingComponent/UpdateParkingForm';
import Help from './Screens/Help'
import Gaurds from './Screens/VendorScreens/GuardScreen/Gaurds'
import Guard from './Components/VendorComponents/GuardComponent/Gaurd'
import Parkings from './Screens/VendorScreens/ParkingScreen/ParkingListScreen'
import Profile from './Screens/VendorScreens/ProfileScreen/VendorProfile'
import ParkingDetail from './Screens/VendorScreens/ParkingScreen/ParkingScreen' 

import GaurdDetail from './Screens/VendorScreens/GuardScreen/GaurdScreen'
import GLayout from './Layout/GLayout'
// import GLandingScreen from './Screens/GaurdScreens/ProfileScrfeen/GLandingScreen'
import IncomingBooking from './Screens/GaurdScreens/BookingScreen/IncomingScreen/IncomingBooking'
import ParkedBooking from './Screens/GaurdScreens/BookingScreen/ParkedScreen/ParkedBooking'
import CompletedBooking from './Screens/GaurdScreens/BookingScreen/CompletedScreen/CompletedBooking'
import GuardProfile from './Screens/GaurdScreens/ProfileScreen/GuardProfile'
import AssociateParking from './Screens/GaurdScreens/ParkingScreen/ParkingScreen'
import Ereciept from './Components/GaurdComponents/BookingComponent/Ereciept'
import MainPage from './Screens/Login/MainPage'
import GaurdLogin from './Screens/Login/GaurdLogin'
import SignUp from './Screens/Login/SignUp'
import ParkingForm from './Components/VendorComponents/ParkingComponent/ParkingForm';
import TransactionScreen from './Screens/VendorScreens/TransactionScreen/TransactionScreen';
function App() {
  const queryClient = new QueryClient();

  return (
      <>
      <Provider store={Store}>
      <QueryClientProvider client={queryClient}>
       <Router>
      <Routes>

        <Route path="/" element={<MainPage />} />
        <Route path="/login/auth/vendor" element={<Login />} />
        <Route path="/login/auth/guard" element={<GaurdLogin />} />
        <Route path="/register" element={<SignUp />} />
        <Route path="/home" element={<Layout><Profile /></Layout>} />
        <Route path="/create" element={<Layout><ParkingForm /></Layout>} />

        <Route path="/parkings" element={<Layout><Parkings /></Layout>} />
        {/* <Route path="/accounts" element={<Layout><Accounts /></Layout>} /> */}
        <Route path="/gaurds" element={<Layout><Gaurds /></Layout>} />
        <Route path="/transactions" element={<Layout><TransactionScreen /></Layout>} />
        <Route path="/help" element={<Layout><Help /></Layout>} />
        <Route path="/update/:id" element={<Layout>< UpdateParkingForm /></Layout>} />



        <Route path="/createGuard/:parkingId" element={<Layout>< Guard /></Layout>} />




        <Route path="/parking/:id" element={<Layout><ParkingDetail /></Layout>} />
        <Route path="/guard/:id" element={<Layout><GaurdDetail /></Layout>} />
        <Route path="/GaurdHome" element={<GLayout>< GuardProfile /></GLayout>} />
        <Route path="/:parkingId/IncomingBooking" element={<GLayout>< IncomingBooking /></GLayout>} />
        <Route path="/:parkingId/ParkedBooking" element={<GLayout>< ParkedBooking /></GLayout>} />
        <Route path="/:parkingId/CompletedBooking" element={<GLayout>< CompletedBooking /></GLayout>} />
        <Route path="/associateParking/:id" element={<GLayout>< AssociateParking /></GLayout>} />
        {/* <Route path="/generate" element={ <Reciept />}/> */}
        <Route path="/generatee/:detail" element={ <Ereciept />}/>
      </Routes>
    </Router>
    </QueryClientProvider>
    </Provider>
      </>
  )
}

export default App
