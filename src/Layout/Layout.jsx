import { useEffect, useState } from 'react';
import LandingScreen from '../Screens/Login/LandingScreen';

function Layout({ children }) {
  const [isLandingVisible, setIsLandingVisible] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  const toggleLandingScreen = () => {
    setIsLandingVisible(!isLandingVisible);
  };

  useEffect(() => {
    const handleResize = () => {
      const mobile = window.innerWidth < 768;
      setIsMobile(mobile);
      if (!mobile) {
        setIsLandingVisible(true); // Show landing screen on larger screens
      } else {
        setIsLandingVisible(false); // Hide landing screen on smaller screens
      }
    };

    // Set the initial state
    handleResize();

    // Add resize event listener
    window.addEventListener('resize', handleResize);

    // Cleanup listener on component unmount
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <>
      <div className='flex min-h-screen bg-[#fff]'>
        <div className={`py-6 bg-gray-800 transition-all duration-300 ${isLandingVisible ? (isMobile ? 'w-1/2' : 'w-1/6') : 'w-0 overflow-hidden'}`}>
          <LandingScreen />
        </div>
        <div className='w-full max-h-screen overflow-y-scroll'>
          {children}
        </div>
      </div>

      <button
        onClick={toggleLandingScreen}
        className={`fixed top-1 left-2 py-2 px-4 text-lg font-semibold rounded transition-all duration-300 z-60 ${isLandingVisible ? 'bg-gray-800 text-white' : 'bg-white text-gray-800'}`}
      >
        {isLandingVisible ? '☰' : '☰'}
      </button>
    </>
  );
}

export default Layout;
