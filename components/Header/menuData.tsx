import { Menu } from "@/types/menu";

const menuData: Menu[] = [
  {
    id: 1,
    title: "Home",
    newTab: false,
    path: "/",
  },
 
  {
    id: 2.1,
    title: "Blog",
    newTab: false,
    path: "/blog",
  },
  {
    id: 2.3,
    title: "Pricing",
    newTab: false,
    path: "/pricing",
  },
 
  {
    id: 3,
    title: "Features",
    newTab: false,
    path: "#",
    submenu:[
      {
        id: 3.1,
        title: "Skills",
        newTab: false,
        path: "/skills",
      },
      {
        id: 3.2,
        title: "Portfolio",
        newTab: false,
        path: "/portfolio",
      }
    ]
  },
  {
    id: 4,
    title: "Support",
    newTab: false,
    submenu: [
      {
        id: 31,
        title: "Upwork",
        newTab: true,
        path: "https://www.upwork.com/freelancers/~017281d9f43346f4cd?mp_source=share",
      },
      {
        id: 34,
        title: "Freelancer",
        newTab: true,
        path: "https://www.freelancer.in/u/AbdulHannan08128",
      },
      {
        id: 34,
        title: "Fiverr",
        newTab: true,
        path: "https://www.fiverr.com/ab_hannan_web",
      },
      {
        id: 35,
        title: "LinkedIN",
        newTab: true,
        path: "/auth/signup",
      },
      {
        id: 35,
        title: "Github",
        newTab: true,
        path: "/docs",
      },
      {
        id: 35.1,
        title: "Contact",
        newTab: false,
        path: "/support",
      },
     
    ],
  },

  {
    id: 5,
    title: "Project Catalog",
    newTab: false,
    path: "#",
    submenu: [
      {
        id: 31,
        title: "Restaurant Website",
        newTab: true,
        path: "/blog",
      },]
  },
];

export default menuData;
