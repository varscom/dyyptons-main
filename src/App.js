import './App.scss';
import { Routes, Route } from "react-router-dom"
import Layout from "./components/Layout"
import  Home  from './components/Home';
import Artists from "./components/Artists";
import Contact from './components/Contact';

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />} >
          <Route index element={<Home />} /> 
          <Route path="artists" element={<Artists />} />
          <Route part="contact" element={<Contact/>} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
