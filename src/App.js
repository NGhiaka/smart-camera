import React from 'react';
import { Header } from "./components/Header";
// import { Footer } from "./components/Footer";
import { AppRoutes } from './AppRoutes';

import { library } from '@fortawesome/fontawesome-svg-core'
import { faHome, faCameraRetro, faUsers } from '@fortawesome/free-solid-svg-icons'

library.add(faHome, faCameraRetro, faUsers)

export default function App() {
  return (
    <div className="App">
      <AppRoutes />
      <Header />

      {/* <Footer /> */}
    </div>
  );
}