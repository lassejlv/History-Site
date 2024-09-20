import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import Home from './pages/Home';
import './app.scss';
import ByDate from './pages/ByDate';

const routes = createBrowserRouter([
  {
    path: "/date",
    element: <ByDate />,
  },
  {
    path: '/',
    element: <Home />,
  },
]);

const queryClient = new QueryClient({ defaultOptions: { queries: { retry: false }}});

const root = document.getElementById('root') as HTMLElement;

createRoot(root).render(
  <StrictMode>
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={routes} />
    </QueryClientProvider>
  </StrictMode>
);
