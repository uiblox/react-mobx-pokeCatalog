import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "react-query";
import { Suspense, lazy } from "react";

const PokeList = lazy(() => import("./components/PokeList/PokeList"));
const PokeDetail = lazy(() => import("./components/PokeDetail/PokeDetail"));

const queryClient = new QueryClient();
const router = createBrowserRouter([
  {
    path: "/react-mobx-pokeCatalog/",
    element: <PokeList />,
  },
  {
    path: "/react-mobx-pokeCatalog/details/:name",
    element: <PokeDetail />,
  },
]);

const App = () => {
  return (
    <Suspense fallback={<>...loading</>}>
      <QueryClientProvider client={queryClient}>
        <RouterProvider router={router} />
      </QueryClientProvider>
    </Suspense>
  );
};

export default App;
