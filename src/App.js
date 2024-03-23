import React from 'react';
import Navbar from './Navbar';
import AccountSettings from './AccountSettings';
import Footer from './Footer';
import './styles.css';

function App() {
  return (
    <div className="App">
      <Navbar />
      <AccountSettings />
      {/* Add other components/routes/content here */}
      <Footer />
    </div>
  );
}

export default App;
