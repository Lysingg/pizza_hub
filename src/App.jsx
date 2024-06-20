import { createBrowserRouter, Route, RouterProvider } from "react-router-dom";
import RootLayout from "./Layout/RootLayout";
import { Home, Menu, About, Contact } from "./pages/app";
import Footer from "./components/Footer";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "menu",
        element: <Menu />,
      },
      {
        path: "about",
        element: <About />,
      },
      {
        path: "contact",
        element: <Contact />,
      },
    ],
  },
]);
function App() {
  return (
    <div className="App">
      <RouterProvider router={router} />
      <Footer />
    </div>
  );
}

export default App;
