import './App.css';
import { Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import PredictionForm from './components/PredictionForm';
import Navbar from './components/Navbar';
import LoginPage from './pages/LoginPage';
import SignupPage from './pages/SignupPage';
import PredictionFormCopy from './components/PredictionFormCopy';
import UserListPage from './pages/UsersListPage';
import SinglePredictions from './pages/AllPredictionPage';
import { useContext } from 'react';
import { AuthContext } from './contexts/auth.context';
import Results from './components/Results';

function App() {

  const { message } = useContext(AuthContext)

  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/login' element={<LoginPage />} />
        <Route path='/signup' element={<SignupPage />} />
        <Route path='/prediction' element={<PredictionFormCopy />} />
        <Route path='/users' element={<UserListPage />} />
        <Route path='/prediction/:predictionId' element={<SinglePredictions />} />
        <Route path='/results' element={<Results />} />
      </Routes>
      {message && <p style={{ color: 'red' }}>{message}</p>}
    </div>
  );
}

export default App;
