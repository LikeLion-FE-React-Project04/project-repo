import { StrictMode, lazy, Suspense } from 'react';
import { createRoot } from 'react-dom/client';
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from 'react-router-dom';
import '@/styles/main.module.css';

// import { loader as productDetailLoader } from '@/pages/ProductDetail/ProductDetail.jsx';

const Layout = lazy(() => import('@/pages/Layout/Layout'));
const Home = lazy(() => import('@/pages/Home/Home'));
const SignIn = lazy(() => import('@/pages/SignIn/SignIn'));
const SignUp = lazy(() => import('@/pages/SignUp/SignUp'));
const ProductList = lazy(() => import('@/pages/ProductList/ProductList'));
const ProductDetail = lazy(() => import('@/pages/ProductDetail/ProductDetail'));
const Cart = lazy(() => import('@/pages/Cart/Cart'));
const NotFound = lazy(() => import('@/pages/NotFound/NotFound'));

// React Element Type: Router
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route element={<Layout />} errorElement={<NotFound />} path="/">
      <Route index element={<Home />} />
      <Route element={<SignIn />} path="signIn" />
      <Route element={<SignUp />} path="signUp" />
      <Route element={<ProductList />} path="productList" />
      <Route
        type="text/html"
        element={<ProductDetail />}
        // loader={productDetailLoader}
        path="productDetail/:id"
      />
      <Route element={<Cart />} path="cart" />
    </Route>
  )
);

const rootContainer = document.getElementById('root');

createRoot(rootContainer).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
