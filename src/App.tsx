import "./App.css";
import {createBrowserRouter, RouterProvider} from "react-router";
import {useState, useEffect} from "react";
import RootLayout from "./components /Background.tsx";
import NeuralNetwork from "./components /NeuralNetwork.tsx";
//import Home from "./pages/Home.tsx";
//import About from "./pages/About.tsx";
//import Works from "./pages/Works.tsx";
//import Contact from "./pages/Contact.tsx";
import Loader from "./components /Loader.tsx";

 const router = createBrowserRouter([
     {
         path: "/",
         element: <RootLayout/>,
//         children: [
//             {path: "/", element: <Home/>},
//             {path: "/home", element: <Home/>},
//             {path: "/about", element: <About/>},
//             {path: "/works", element: <Works/>},
//             {path: "/contact", element: <Contact/>},
//         ],
     },
 ]);

function App() {
  return (
    <>
      <NeuralNetwork />
    </>
  );
}

export default App;