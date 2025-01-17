import { QueryClient, QueryClientProvider } from 'react-query';
import { Ideas } from './pages/ideas';
import { Header } from './pages/header';
import { Navbar } from './pages/navbar';

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: Infinity,
      refetchOnMount: false,
      refetchOnReconnect: false,
      refetchOnWindowFocus: false,
    }
  }
});

export const App = () => (
  <QueryClientProvider client={queryClient}>
    <Navbar />
    <Header />
    <Ideas />
  </QueryClientProvider>
)

