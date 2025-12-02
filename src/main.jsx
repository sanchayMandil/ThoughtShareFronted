import { StrictMode, useState, useEffect, useRef } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.jsx';
import { BrowserRouter } from 'react-router-dom';
import LoadingBar from 'react-top-loading-bar';
import axios from 'axios';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <AppWithLoadingBar />
    </BrowserRouter>
  </StrictMode>
);

function AppWithLoadingBar() {
  const [progress, setProgress] = useState(0);
  const intervalRef = useRef(null);

  useEffect(() => {
    // --- Ping backend once ---
    axios
      .get(import.meta.env.VITE_API_BASE_URL + '/')
      .catch((err) => console.error("Ping failed:", err));

    // --- Start loading bar ---
    setProgress(10);

    intervalRef.current = setInterval(() => {
      setProgress((prev) => {
        if (prev < 100) {
          return prev + 10; // increase
        }

        // Reached 100 -> stop
        clearInterval(intervalRef.current);
        intervalRef.current = null;
        return 100;
      });
    }, 300);

    // Cleanup (StrictMode safe)
    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, []);

  return (
    <>
      <LoadingBar
        color="#f11946"
        progress={progress}
        height={3}
        shadow={true}
      />
      <App />
    </>
  );
}
