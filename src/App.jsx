// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './App.css'
import { Provider } from 'react-redux';
import { QueryClient, QueryClientProvider } from 'react-query';
import Store from './Store/Store';
import BookingList from './Components/BookingComponents/BookingList';


import Login from './Screens/Login'
// import LandingScreen from './Screens/LandingScreen'
import Layout from './Layout/Layout'
// import Child from './Screens/Child'
import Help from './Screens/Help'
import Transactions from './Screens/Transactions'
import Gaurds from './Screens/Gaurds'
import Accounts from './Screens/Accounts'
import Parkings from './Screens/Parkings'
import Profile from './Screens/Profile'
import ParkingDetail from './Screens/ParkingDetail' 

import GaurdDetail from './Screens/GaurdDetail'
import GLayout from './Layout/GLayout'
// import GLandingScreen from './Screens/GaurdScreens/GLandingScreen'
import IncomingBooking from './Screens/GaurdScreens/IncomingBooking'
import ParkedBooking from './Screens/GaurdScreens/ParkedBooking'
import CompletedBooking from './Screens/GaurdScreens/CompletedBooking'
import GuardProfile from './Screens/GaurdScreens/GuardProfile'
import AssociateParking from './Screens/GaurdScreens/AssociateParking'
import Reciept from './Components/Reciept'
import Ereciept from './Components/Ereciept'
import MainPage from './Screens/MainPage'
import GaurdLogin from './Screens/GaurdScreens/GaurdLogin'
import SignUp from './Screens/SignUp'
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
        <Route path="/parkings" element={<Layout><Parkings /></Layout>} />
        <Route path="/accounts" element={<Layout><Accounts /></Layout>} />
        <Route path="/gaurds" element={<Layout><Gaurds /></Layout>} />
        <Route path="/transactions" element={<Layout><Transactions /></Layout>} />
        <Route path="/help" element={<Layout><Help /></Layout>} />
        <Route path="/parking/:id" element={<Layout><ParkingDetail /></Layout>} />


        <Route path="/gaurd/:id" element={<Layout><GaurdDetail /></Layout>} />
        <Route path="/GaurdHome" element={<GLayout>< GuardProfile /></GLayout>} />
        <Route path="/:parkingId/IncomingBooking" element={<GLayout>< IncomingBooking /></GLayout>} />
        <Route path="/:parkingId/ParkedBooking" element={<GLayout>< ParkedBooking /></GLayout>} />
        <Route path="/:parkingId/CompletedBooking" element={<GLayout>< CompletedBooking /></GLayout>} />
        <Route path="/associateParking/:id" element={<GLayout>< AssociateParking /></GLayout>} />
        <Route path="/generate" element={ <Reciept />}/>
        <Route path="/generatee/:detail" element={ <Ereciept />}/>



      </Routes>
    </Router>
    </QueryClientProvider>
    </Provider>
      </>
  )
}

export default App
