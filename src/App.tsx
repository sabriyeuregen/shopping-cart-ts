import './App.css'
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link,
  createRoutesFromElements,
} from "react-router-dom";
  
import Home from "./pages/Home/Home";
import Store from "./pages/Store/Store";
import Contact from "./pages/Contact/Contact";
import RootLayout from './pages/RootLayout/RootLayout';
import ShoppingCartPage from './pages/ShoppingCartPage/ShoppingCartPage';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route element={<RootLayout/>}>
    <Route path='/' element={<Home/>}></Route>
    <Route path='/store' element={<Store/>}></Route>
    <Route path='/contact' element={<Contact/>}></Route>
    <Route path='/shoppingcart' element={<ShoppingCartPage/>}></Route>
    <Route></Route>
    </Route>
  )
)

const App = () => {

  return (
    <div className='App'>
      <RouterProvider router={router}></RouterProvider>
    </div>
    
  )
}

export default App;
