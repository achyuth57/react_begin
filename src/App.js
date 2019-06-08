import React from 'react';
import './App.css';
import Greet from './components/greet'
import FragmentDemo from './components/fragmentdemo'
import Table from './components/table';

import ParentComponent from './components/ParentComponent';
import Refs from './components/Refs';
import FocusInput from './components/FocusInput';
import ForwordParentRefs from './components/ForwordParentRefs';
import PortalDemo from './components/portals';
import Hero from './components/Hero';
import ErrorBoundary from './components/ErrorBoundry';
import ComponentC from './context/ComponentC.js';
import { UserProvider } from './context/userContext';

function App() {
  return (
    <div className="App">
      {/* <Greet /> */}
      {/* <FragmentDemo /> */}
      {/* <Table /> */}
      {/* <ParentComponent /> */}
      {/* <Refs /> */}
      {/* <FocusInput /> */}
      {/* <ForwordParentRefs /> */}
      {/* <PortalDemo /> 
        <ErrorBoundary>
        <Hero heroName="Batman" />
        </ErrorBoundary>
        <ErrorBoundary>
        <Hero heroName="Superman" />
        </ErrorBoundary>
        <ErrorBoundary>
        <Hero heroName="jocker" />
      </ErrorBoundary>
      */}
      <UserProvider value="Achytuh">
        <ComponentC />
      </UserProvider>
  

    </div>
  );
}

export default App;
