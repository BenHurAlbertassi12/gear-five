/* eslint-disable react/prop-types */
import { Route, Routes } from 'react-router-dom';
import { Home } from './templates/Home/Home';
import { AppProvider } from './context/AppContext';
import { Contact } from './templates/Contatos/Contatos';

export const App = () => {
  return (
    <AppProvider>
      <Routes>
        <Route path="/" exact element={<Home />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </AppProvider>
  );
};
