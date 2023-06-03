import { RouterProvider } from "react-router-dom";
import { router } from './Router/Router';
import { Toaster } from 'react-hot-toast';
import {
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query';

function App() {
  const queryClient = new QueryClient();
  return (
    <div className="bg-red-50">
      <QueryClientProvider client={queryClient}>
        <RouterProvider router={router}>
        </RouterProvider>
        <Toaster></Toaster>
      </QueryClientProvider>
    </div>
  );
}

export default App;
