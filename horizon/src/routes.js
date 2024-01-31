import React from "react";

// Admin Imports
import MainDashboard from "views/admin/default";
import NFTMarketplace from "views/admin/marketplace";
import Profile from "views/admin/profile";
import DataTables from "views/admin/tables";
import RTLDefault from "views/rtl/default";

// Auth Imports
import SignIn from "views/auth/SignIn";

// Icon Imports
import {
  MdHome,
  MdOutlineShoppingCart,
  MdBarChart,
  MdPerson,
  MdLock,
  MdChat,
} from "react-icons/md";
import Budget from "views/admin/budget";
import Contact from "views/admin/contact";

import PaintWall from "views/admin/PaintWall"

const routes = [
  {
    name: "Main Dashboard",
    layout: "/admin",
    path: "default",
    icon: <MdHome className="h-6 w-6" />,
    component: <MainDashboard />,
  },
  {
    name: "Contact",
    layout: "/admin",
    path: "contact",
    icon: <MdHome className="h-6 w-6" />,
    component: <Contact />,
  },

  {
    name: "Budget",
    layout: "/admin",
    path: "budget-tracking",
    icon: <MdHome className="h-6 w-6" />,
    component: <Budget />,
  },
  // {
  //   name: "NFT Marketplace",
  //   layout: "/admin",
  //   path: "nft-marketplace",
  //   icon: <MdOutlineShoppingCart className="h-6 w-6" />,
  //   component: <NFTMarketplace />,
  //   secondary: true,
  // },
  {
    name: "Paint Wall",
    layout: "/admin",
    path: "paintwall",
    icon: <MdHome className="h-6 w-6" />,
    component: <PaintWall />,
  },
  {
    name: "Data Tables",
    layout: "/admin",
    icon: <MdBarChart className="h-6 w-6" />,
    path: "data-tables",
    component: <DataTables />,
  },
  {
    name: "Profile",
    layout: "/admin",
    path: "profile",
    icon: <MdPerson className="h-6 w-6" />,
    component: <Profile />,
  },
  {
    name: "Sign In",
    layout: "/auth",
    path: "sign-in",
    icon: <MdLock className="h-6 w-6" />,
    component: <SignIn />,
  },
  {
    name: "RTL Admin",
    layout: "/rtl",
    path: "rtl",
    icon: <MdHome className="h-6 w-6" />,
    component: <RTLDefault />,
  },
  {
    name: "Contact",
    layout: "/admin",
    path: "contact",
    icon: <MdChat className="h-6 w-6" />,
    component: <Contact />,
  },
];
export default routes;
