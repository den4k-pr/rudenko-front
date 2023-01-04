
import './App.css';
import Product from './pages/product';
import Main from './partials/main';
import Login from './pages/login';
import { Provider } from 'react-redux';
import { store } from './store';
import { Routes, HashRouter } from "react-router-dom";
import AdminOwnProduct from "./partials/adminPart/adminOwnProduct";
import CreateProduct from './partials/adminPart/createProduct';
import AdminPainters from './partials/adminPart/adminPainters';
import CreatePainters from './partials/adminPart/CreatePainters';
import CreateCategory from './partials/adminPart/createCategory';
import OrderOwn from './partials/adminPart/orderOwn';
import Paintings from './pages/paintings';
import BusketForm from './partials/adminPart/busket-form';
import Room from './pages/room';
import './styles/main.css';
import './firebase';
import Artists from './pages/artists';


function App() {

  return (
    <>
      <Provider store={store}>
        <Routes>
          <HashRouter path="/" element={<Main />}/>
          <HashRouter path="/product/:id" element={<Product />}/>
          <HashRouter path="/admin" element={<Login />}/>
          <HashRouter path="/admin/painters" element={<AdminPainters />}/>
          <HashRouter path="/admin/AdminOwnProduct/:id" element={<AdminOwnProduct/>}/>
          <HashRouter path="/admin/CreateProduct" element={<CreateProduct/>}/>
          <HashRouter path="/admin/CreatePainters" element={<CreatePainters/>}/>
          <HashRouter path="/product/room/:id" element={<Room/>}/>
          <HashRouter path="/artists" element={<Artists/>}/>
          <HashRouter path="/paintings" element={<Paintings/>}/>
          <HashRouter path="/CreateCategory" element={<CreateCategory/>}/>
          <HashRouter path="/artists/modal" element={<OrderOwn/>}/>
          <HashRouter path="/modal" element={<BusketForm/>}/>
        </Routes>
      </Provider>
    </>
  );
}

export default App;
