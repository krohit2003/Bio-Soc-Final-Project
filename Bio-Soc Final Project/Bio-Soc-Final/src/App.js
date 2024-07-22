import About from "./components/About";
import Contact from "./components/Contact";
import Experience from "./components/Experience";
import Home from "./components/Home";
import NavBar from "./components/NavBar";
import Portfolio from "./components/Portfolio";
import SocialLinks from "./components/SocialLinks";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Link } from "react-router-dom";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: (
        <div>
          <NavBar></NavBar>
          <SocialLinks />
          <Home></Home>
        </div>
      ),
    },
    {
      path: "/About",
      element: (
        <div>
          <NavBar></NavBar>
          <SocialLinks />
          <About></About>
        </div>
      ),
    },
    {
      path: "/Contact",
      element: (
        <div>
          <NavBar></NavBar>
          <SocialLinks />
          <Contact></Contact>
        </div>
      ),
    },
    {
      path: "/Portfolio",
      element: (
        <div>
          <NavBar></NavBar>
          <SocialLinks />
          <Portfolio></Portfolio>
        </div>
      ),
    },
    {
      path: "/Experience",
      element: (
        <div>
          <NavBar></NavBar>
          <SocialLinks />
          <Experience></Experience>
        </div>
      ),
    },
  ]);

  return (
    <div>
      <RouterProvider router={router}></RouterProvider>
      {/* <NavBar />
      <Home />
      <About />
      <Portfolio />
      <Experience />
      <Contact />

      <SocialLinks /> */}
    </div>
  );
}

export default App;
