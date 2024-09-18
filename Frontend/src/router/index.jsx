import React, { Suspense, lazy } from 'react';
import { createBrowserRouter } from 'react-router-dom';
import { ROUTE_PATHS } from '@/constant/routes';
import MainLayout from '@/layouts/MainLayout';

const Home = lazy(() => import('@/pages/home/Home.jsx'));
const Error = lazy(() => import('@/pages/error/Error'));
const Login = lazy(() => import('@/pages/login/Login'));
const Reservation = lazy(() => import('@/pages/reservation/Reservation'));

export const router = createBrowserRouter([
  {
    path: ROUTE_PATHS.HOME,
    element: (
      <MainLayout>
        <Suspense fallback={<div>Loading...</div>}>
          <Home />
        </Suspense>
      </MainLayout>
    ),
    errorElement: (
      <MainLayout>
        <Suspense fallback={<div>Loading...</div>}>
          <Error />
        </Suspense>
      </MainLayout>
    ),
  },
  {
    path: ROUTE_PATHS.LOGIN,
    element: (
      <MainLayout>
        <Suspense fallback={<div>Loading...</div>}>
          <Login />
        </Suspense>
      </MainLayout>
    ),
    errorElement: (
      <MainLayout>
        <Suspense fallback={<div>Loading...</div>}>
          <Error />
        </Suspense>
      </MainLayout>
    ),
  },
  {
    path: ROUTE_PATHS.RESERVATION,
    element: (
      <MainLayout>
        <Suspense fallback={<div>Loading...</div>}>
          <Reservation />
        </Suspense>
      </MainLayout>
    ),
    errorElement: (
      <MainLayout>
        <Suspense fallback={<div>Loading...</div>}>
          <Error />
        </Suspense>
      </MainLayout>
    ),
  }
]);
