import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import { Provider } from 'react-redux';
import { QueryClient, QueryClientProvider } from 'react-query';
import Store from './Store/Store';
import BookingList from './Components/GaurdComponents/BookingComponent/BookingList';
import IncomingBookingListIn15min from './Components/GaurdComponents/BookingComponent/IncomingBookingListIn15min';

import Login from './Screens/Login/Login';
import Layout from './Layout/Layout';
import UpdateParkingForm from './Components/VendorComponents/ParkingComponent/UpdateParkingForm';
import Help from './Screens/Help';
import Guard from './Components/VendorComponents/GuardComponent/Gaurd';
import Parkings from './Screens/VendorScreens/ParkingScreen/ParkingListScreen';
import Profile from './Screens/VendorScreens/ProfileScreen/VendorProfile';
import ParkingDetail from './Screens/VendorScreens/ParkingScreen/ParkingScreen';

import GaurdDetail from './Screens/VendorScreens/GuardScreen/GaurdScreen';
import GLayout from './Layout/GLayout';
import IncomingBooking from './Screens/GaurdScreens/BookingScreen/IncomingScreen/IncomingBooking';
import ParkedBooking from './Screens/GaurdScreens/BookingScreen/ParkedScreen/ParkedBooking';
import CompletedBooking from './Screens/GaurdScreens/BookingScreen/CompletedScreen/CompletedBooking';
import GuardProfile from './Screens/GaurdScreens/ProfileScreen/GuardProfile';
import AssociateParking from './Screens/GaurdScreens/ParkingScreen/ParkingScreen';
import Ereciept from './Components/GaurdComponents/BookingComponent/Ereciept';
import MainPage from './Screens/Login/MainPage';
import GaurdLogin from './Screens/Login/GaurdLogin';
import SignUp from './Screens/Login/SignUp';
import ParkingForm from './Components/VendorComponents/ParkingComponent/ParkingForm';
import TransactionScreen from './Screens/VendorScreens/TransactionScreen/TransactionScreen';
import NotFound from './Components/Utils/NotFound';
import VendorProfileComponent from './Components/VendorComponents/VendorProfileComponent';
import UpdateGuard from './Components/VendorComponents/GuardComponent/UpdateGuard';
import Account from './Screens/VendorScreens/AccountScreen/Account';

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
              <Route path="/Home" element={<Layout><Profile /></Layout>} />
              <Route path="/create" element={<Layout><ParkingForm /></Layout>} />
              <Route path="/accounts" element={<Layout><Account /></Layout>} />
              <Route path="/:parkingid/RecentIncomingBooking" element={<GLayout><IncomingBookingListIn15min /></GLayout>} />
              <Route path="/parkings" element={<Layout><Parkings /></Layout>} />
              <Route path="/transactions" element={<Layout><TransactionScreen /></Layout>} />
              <Route path="/help" element={<Layout><Help /></Layout>} />
              <Route path="/update/:id" element={<Layout><UpdateParkingForm /></Layout>} />
              <Route path="/update/vendor" element={<Layout><VendorProfileComponent /></Layout>} />
              <Route path="/createGuard/:parkingId" element={<Layout><Guard /></Layout>} />
              <Route path="/parking/:id" element={<Layout><ParkingDetail /></Layout>} />
              <Route path="/guard/:id" element={<Layout><GaurdDetail /></Layout>} />
              <Route path="/update/guard/:id" element={<Layout><UpdateGuard /></Layout>} />
              <Route path="/GaurdHome" element={<GLayout><GuardProfile /></GLayout>} />
              <Route path="/:parkingid/RecentIncomingBooking" element={<GLayout><IncomingBooking /></GLayout>} />
              <Route path="/:parkingid/IncomingBooking" element={<GLayout><IncomingBooking /></GLayout>} />
              <Route path="/:parkingid/ParkedBooking" element={<GLayout><ParkedBooking /></GLayout>} />
              <Route path="/:parkingid/CompletedBooking" element={<GLayout><CompletedBooking /></GLayout>} />
              <Route path="/associateParking/:parkingid" element={<GLayout><AssociateParking /></GLayout>} />
              <Route path="/generatee/:detail/:etInminn/:ep" element={<Ereciept />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </Router>
        </QueryClientProvider>
      </Provider>
    </>
  );
}

export default App;
