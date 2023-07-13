import {
  Home,
  Help,
  Favourites,
  Settings,
  NotFound,
  Login,
  Products,
  Categories,
} from "../pages";

export const routes = [
  {
    id: 1,
    path: "/",
    component: <Home />,
    isPage: true,
  },
  {
    id: 2,
    path: "/help",
    component: <Help />,
    isPage: true,
  },
  {
    id: 3,
    path: "/favourites",
    component: <Favourites />,
    isPage: true,
  },
  {
    id: 4,
    path: "/settings",
    component: <Settings />,
    isPage: true,
  },
  {
    id: 5,
    path: "/login",
    component: <Login />,
    isPage: false,
  },
  {
    id: 7,
    path: "*",
    component: <NotFound />,
    isPage: false,
  },
];

export const authRoutes = [
  {
    id: 1,
    path: "/products",
    component: <Products />,
    isPage: true,
  },
  {
    id: 2,
    path: "/categories",
    component: <Categories />,
    isPage: true,
  },
];
