import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "react-query";
import { PokeList } from "./components/PokeList/PokeList";
import { PokeDetail } from "./components/PokeDetail/PokeDetail";

const queryClient = new QueryClient();
const router = createBrowserRouter([
  {
    path: "/",
    element: <PokeList />,
  },
  {
    path: "/details/:name",
    element: <PokeDetail />,
  },
]);

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router} />
    </QueryClientProvider>
  );
};

export default App;
