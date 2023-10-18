import imageHome from "../public/assets/home.svg";
import imageSearch from "../public/assets/search.svg";
import imageHeart from "../public/assets/heart.svg";
import imageCreate from "../public/assets/create.svg";
import imageCommunity from "../public/assets/community.svg";
import imageUser from "../public/assets/user.svg";
export const sideBarLinks = [
  {
    imgURL: imageHome,
    route: "/",
    label: "Home",
  },
  {
    imgURL: imageSearch,
    route: "/search",
    label: "Search",
  },
  {
    imgURL: imageHeart,
    route: "/activity",
    label: "Activity",
  },
  {
    imgURL: imageCreate,
    route: "/create-thread",
    label: "Create Thread",
  },
  {
    imgURL: imageCommunity,
    route: "/community",
    label: "Communities",
  },
  {
    imgURL: imageUser,
    route: "/profile",
    label: "Profile",
  },
];
