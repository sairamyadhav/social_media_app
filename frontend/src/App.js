import "./App.css";
import { lazy } from "react";
import { Route, Routes } from "react-router-dom";
import LazyLoadSuspense from "./components/LazyLoadSuspense";
import PrivateRoute from "./components/PrivateRoute";
import Navigation from './components/Navigation';
import { createSlice, configureStore } from '@reduxjs/toolkit';



function App() {

  const Login = lazy(() => import('./pages/Login'));
  const Profile = lazy(() => import('./pages/Profile'));

  return (
    <div className="App">
      <Navigation />
      <Routes>
        <Route
          path="/login"
          element={
            <LazyLoadSuspense>
              <Login />
            </LazyLoadSuspense>
          }
        />
        <Route path='/profile' element={<PrivateRoute />}>
          <Route path='/profile' element={
            <LazyLoadSuspense>
              <Profile />
            </LazyLoadSuspense>
          } />
        </Route>
      </Routes>
      </div>
  );
}

export default App;
