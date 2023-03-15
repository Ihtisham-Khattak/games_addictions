import './App.css';
import Header from './components/Header';
import { Routes, Route } from 'react-router-dom';
import Footer from './components/Footer';
import Addiction from "./pages/Addiction"
import Popularity from "./pages/Popularity"
import AddictionCard from "./pages/AddictionCard"
import Testinomial from "./pages/Testinomial"

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path='/' element={<Addiction />} exact>Addiciton</Route>
        <Route path='/card' element={<AddictionCard />}>Card</Route>
        <Route path='/popularity' element={<Popularity />}>Popularity</Route>
        <Route path='/testimonial' element={<Testinomial />}>Testinomial</Route>
      </Routes>
      <Footer />
         </div>
  );
}

export default App;