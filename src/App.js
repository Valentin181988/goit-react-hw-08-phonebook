import './App.css';
import {
  Routes,
  Route,
  Navigate
} from "react-router-dom";
import { Toaster } from 'react-hot-toast';
import { Layout } from './components/Layout/Layout';
import { RegistrationPage } from './pages/registrationPage';
import { LoginPage } from './pages/loginPage';
import { ContactsPage } from './pages/contactsPage';


function App() { 

  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="register" element={<RegistrationPage />}/>
          <Route path="login" element={<LoginPage />}/>
          <Route path="contacts" element={<ContactsPage />}/>
          <Route path="*" element={<Navigate to="/" replace />} />
        </Route>
      </Routes>
      <Toaster />
    </>
  );
};

export default App;
