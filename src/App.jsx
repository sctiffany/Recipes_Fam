import "./App.css";
import {
  createBrowserRouter,
  useNavigation,
  NavLink,
  Outlet,
  RouterProvider,
} from "react-router-dom";
import { Recipe } from "./pages/Recipe";
import { Home } from "./pages/Home";
// import { Recipes } from "./pages/Recipes";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      { path: "accueil", element: <Home /> },
      {
        path: "voir-recettes",
        children: [
          {
            path: "",
            element: <div>Voir toutes les recettes</div>,
            loader: () => {
              console.log("loader");
              // c'est ici qu'on va pré-charger toutes les recettes
            },
          },
          {
            path: ":id",
            element: <Recipe />,
          },
        ],
      },
      {
        path: "ajouter-recette",
        element: <div>Ajouter une recette</div>,
      },
      {
        path: "faire-menu",
        element: <div>Faire le menu</div>,
      },
    ],
  },
]);

function Root() {
  const { state } = useNavigation();
  return (
    <>
      <header>
        <nav className="main-nav">
          <NavLink to="/accueil">Accueil</NavLink>
          <NavLink to="/ajouter-recette">Ajouter une recette</NavLink>
          <NavLink to="/voir-recettes">Voir toutes les recettes</NavLink>
          <NavLink to="/faire-menu">Faire le menu</NavLink>
        </nav>
      </header>
      <div className="container">
        <Outlet />
      </div>
    </>
  );
}

function App() {
  return <RouterProvider router={router} />;
}

export default App;
