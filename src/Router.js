import {createBrowserRouter} from 'react-router-dom'
import LayoutPage from './Pages/LayoutPage/LayoutPage'
import Products from './Pages/Products/Products'
import ProductDetails from './Pages/ProductDetails/ProductDetails'
import CartPage from './Pages/Cart/Cart'



export const router =createBrowserRouter([{
       path:"/",
       element:<LayoutPage/>,
       children:[{
        path:"/products",
        element:<Products/>
       },{
        path:"/product/:id",
        element:<ProductDetails/>
    },{
        path:"/cart",
        element:<CartPage/>
    }]
}])