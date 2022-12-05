import { createBrowserRouter } from "react-router-dom";
import Dashboard from "../Dashboard/Dashboard";
import NewsTicker from "../Dashboard/NewsTicker/NewsTicker";
import AddPost from "../Dashboard/Post/AddPost/AddPost";
import DashboardPost from "../Dashboard/Post/DashboardPost";
import PostList from "../Dashboard/Post/PostList/PostList";
import AddProgram from "../Dashboard/Programs/AddProgram/AddProgram";
import AllProgram from "../Dashboard/Programs/AllPrograms/AllProgram";
import AddSlider from "../Dashboard/Slider/AddSlider/AddSlider";
import Slider from "../Dashboard/Slider/Slider";
import SliderList from "../Dashboard/Slider/SliderList/SliderList";
import DashboardLayout from "../DashboardLayout/DashboardLayout";
import About from "../Pages/About Us/About";
import Advisors from "../Pages/About Us/Advisors/Advisors";
import ExecutiveCommittee from "../Pages/About Us/ExecutiveCommittee/ExecutiveCommittee";
import OurHistory from "../Pages/About Us/OurHistory/OurHistory";
import Faq from "../Pages/Faq/Faq";
import Gallery from "../Pages/Gallery/Gallery";
import Photo from "../Pages/Gallery/Photo/Photo";
import Video from "../Pages/Gallery/Video/Video";
import Home from "../Pages/Home/Home";
import Login from "../Pages/Login/Login";
import Post from "../Pages/Post/Post";
import SinglePost from "../Pages/Post/SinglePost/SinglePost";
import Programs from "../Pages/Programs/Programs";
import Main from "../Pages/Shared/Main/Main";
import SignUp from "../Pages/SignUp/SignUp";
import BloodDonation from "../Pages/Wings/BloodDonation/BloodDonation";
import CharityAid from "../Pages/Wings/Charity&Aid/CharityAid";
import KinSchool from "../Pages/Wings/Kin School/KinSchool";
import SocailAwarness from "../Pages/Wings/SocialAwarnes/SocailAwarness";
import Wings from "../Pages/Wings/Wings";
import WinterClothDistribution from "../Pages/Wings/Winter Cloth Distribution/WinterClothDistribution";
import PrivateRoutes from "./PrivateRoutes.js/PrivateRoutes";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/post",
        element: <Post></Post>,
      },
      {
        path: "/post/:id",
        element: <SinglePost></SinglePost>,
        loader: ({ params }) =>
          fetch(
            `https://kin-server-side-rejoyanislam.vercel.app/api/v1/post/${params.id}`
          ),
      },
      {
        path: "/gallery",
        element: <Gallery></Gallery>,
      },
      {
        path: "/about-us",
        element: <About></About>,
      },
      {
        path: "/faq",
        element: <Faq></Faq>,
      },
      {
        path: "/wings",
        element: <Wings></Wings>,
      },
      {
        path: "/programs",
        element: <Programs></Programs>,
      },
      {
        path: "/our-history",
        element: <OurHistory></OurHistory>,
      },
      {
        path: "/photo",
        element: <Photo></Photo>,
      },
      {
        path: "/video",
        element: <Video></Video>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/executive-committee",
        element: <ExecutiveCommittee></ExecutiveCommittee>,
      },
      {
        path: "/advisors",
        element: <Advisors></Advisors>,
      },
      {
        path: "/kin-school",
        element: <KinSchool></KinSchool>,
      },
      {
        path: "/winter-cloth-distribution",
        element: <WinterClothDistribution></WinterClothDistribution>,
      },
      {
        path: "/charity-aid",
        element: <CharityAid></CharityAid>,
      },
      {
        path: "/social-awarness",
        element: <SocailAwarness></SocailAwarness>,
      },
      {
        path: "/blood-donation",
        element: <BloodDonation></BloodDonation>,
      },
      {
        path: "/register",
        element: <SignUp></SignUp>,
      },
    ],
  },
  {
    path: "/dashboard",
    element: (
      <PrivateRoutes>
        <DashboardLayout>
          <Dashboard></Dashboard>
        </DashboardLayout>
      </PrivateRoutes>
    ),
    children: [
      {
        path: "/dashboard",
        element: <Dashboard></Dashboard>,
      },
      {
        path: "/dashboard/post",
        element: <DashboardPost></DashboardPost>,
      },
      {
        path: "/dashboard/add-program",
        element: <AddProgram></AddProgram>,
      },
      {
        path: "/dashboard/all-program",
        element: <AllProgram></AllProgram>,
      },
      {
        path: "/dashboard/slider",
        element: <Slider></Slider>,
      },
      {
        path: "/dashboard/add-slider",
        element: <AddSlider></AddSlider>,
      },
      {
        path: "/dashboard/slider-list",
        element: <SliderList></SliderList>,
      },
      {
        path: "/dashboard/post-list",
        element: <PostList></PostList>,
      },
      {
        path: "/dashboard/post-add",
        element: <AddPost></AddPost>,
      },
      {
        path: "/dashboard/news-ticker",
        element: <NewsTicker></NewsTicker>,
      },
    ],
  },
]);

export default router;
