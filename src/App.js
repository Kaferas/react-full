import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/layouts/Header';
import Footer from './components/layouts/Footer';
import About from './components/pages/About';
import Home from './components/pages/Home';
import NotFound from './components/pages/NotFound';

function App() {
  return (
   <Router>
      <div className='flex flex-col justify-between h-screen'>
        <Header/>
        <main className='container mx-auto px-3 pb-12'>
          <Routes>
            <Route path='/' element={<Home/>}></Route>
            <Route path='/about' element={<About/>}></Route>
            <Route path='/notfound' element={<NotFound/>}></Route>
            <Route path='/*' element={<NotFound/>}></Route>
          </Routes>
        </main>
        <Footer/>
      </div>
   </Router>
  );
}

export default App;
