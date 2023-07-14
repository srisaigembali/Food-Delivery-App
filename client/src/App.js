import React, { useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";
import { Login, Main } from "./containers";
import { getAuth } from "firebase/auth";
import { app } from "./config/firebase.config";
import { validateJWTToken } from "./api";
import { useDispatch } from "react-redux";
import { setUserDetails } from "./context/actions/userAction";
import { motion } from "framer-motion";
import { fadeInOut } from "./animations";

const App = () => {
  const [isLoading, setIsLoading] = useState(false);
  const firebaseAuth = getAuth(app);

  const dispatch = useDispatch();

  useEffect(() => {
    setIsLoading(true);
    firebaseAuth.onAuthStateChanged((cred) => {
      if (cred) {
        cred.getIdToken().then((token) => {
          validateJWTToken(token).then((data) => {
            dispatch(setUserDetails(data));
          });
        });
      }
    });
    setInterval(() => {
      setIsLoading(false);
    }, 2000);
    // eslint-disable-next-line
  }, []);

  return (
    <div className='w-screen min-h-screen h-auto flex flex-col items-center justify-center'>
      {isLoading && (
        <motion.div
          {...fadeInOut}
          className='fixed z-50 inset-0 bg-cardOverlay backdrop-blur-md flex items-center justify-center w-full'
        >
          loading...
        </motion.div>
      )}
      <Routes>
        <Route path='/*' element={<Main />} />
        <Route path='/login' element={<Login />} />
      </Routes>
    </div>
  );
};

export default App;
