import { QueryClient, QueryClientProvider } from "react-query";
import { PokeList } from "./components/PokeList/PokeList";

const queryClient = new QueryClient();

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <PokeList />
    </QueryClientProvider>
  );
};

export default App;
