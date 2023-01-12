
import './App.css';
import Product from './pages/product';
import Main from './partials/main';
import Login from './pages/login';
import { Provider } from 'react-redux';
import { store } from './store';
import { Routes, Route } from "react-router-dom";
import AdminOwnProduct from "./partials/adminPart/adminOwnProduct";
import CreateProduct from './partials/adminPart/createProduct';
import AdminFilter from './partials/adminPart/adminFilter';
import AdminPainters from './partials/adminPart/adminPainters';
import CreatePainters from './partials/adminPart/CreatePainters';
import CreateCategory from './partials/adminPart/createCategory';
import OrderOwn from './partials/adminPart/orderOwn';
import Paintings from './pages/paintings';
import Call from './pages/call';
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
          <Route path="/" element={<Main />}/>
          <Route path="/product/:id" element={<Product />}/>
          <Route path="/admin" element={<Login />}/>
          <Route path="/admin/painters" element={<AdminPainters />}/>
          <Route path="/admin/AdminOwnProduct/:id" element={<AdminOwnProduct/>}/>
          <Route path="/admin/CreateProduct" element={<CreateProduct/>}/>
          <Route path="/admin/CreatePainters" element={<CreatePainters/>}/>
          <Route path="/product/room/:id" element={<Room/>}/>
          <Route path="/artists" element={<Artists/>}/>
          <Route path="/paintings" element={<Paintings/>}/>
          <Route path="/CreateCategory" element={<CreateCategory/>}/>
          <Route path="/artists/modal" element={<OrderOwn/>}/>
          <Route path="/modal" element={<BusketForm/>}/>
          <Route path="/admin/filter" element={<AdminFilter/>}/>
          <Route path="/call" element={<Call/>}/>
        </Routes>
      </Provider>
    </>
  );
}

export default App;
