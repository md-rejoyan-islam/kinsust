import { Link, NavLink } from "react-router-dom";
import logo from "../../../Assets/Images/Logo/kinLogo.gif";
import { useContext, useState } from "react";
import "./Header.css";
import { AuthContext } from "../../../Context/AuthContext/AuthProvider";

const Header = () => {
  const { user, userSignOut } = useContext(AuthContext);
  let dark = "";
  const [checkDark, setCheckDark] = useState(localStorage.getItem("dark"));
  const [open, setOpen] = useState(false);
  const openNav = () => {
    document.getElementById("mySidenav").style.width = "250px";
    setOpen(true);
  };
  const closeNav = () => {
    document.getElementById("mySidenav").style.width = "0";
    setOpen(false);
  };
  //
  if (localStorage.getItem("mood")) {
    if (localStorage.getItem("mood") === "dark") {
      document.querySelector("body").classList.add("dark");
      dark = true;
      localStorage.setItem("dark", true);
    } else {
      document.querySelector("body").classList.remove("dark");
      dark = false;
      localStorage.setItem("dark", false);
    }
  } else {
    localStorage.setItem("mood", "light");
    localStorage.setItem("dark", false);
    dark = false;
  }
  //  console.log(localStorage.getItem('mood'));
  //mood
  const moon = () => {
    const darkBtn = document.querySelector(".darkBtn");
    if (dark === true) {
      document.querySelector("body").classList.remove("dark");
      darkBtn.title = "Dark Mood";
      localStorage.setItem("mood", "light");
      localStorage.setItem("dark", false);
      setCheckDark(false);
      dark = false;
    } else if (dark === false) {
      darkBtn.title = "Light Mood";
      localStorage.setItem("mood", "dark");
      localStorage.setItem("dark", true);
      setCheckDark(true);
      document.querySelector("body").classList.add("dark");
      dark = true;
    }
  };

  // On page load or when changing themes, best to add inline in `head` to avoid FOUC
  // if (
  //   localStorage.theme === "dark" ||
  //   (!("theme" in localStorage) &&
  //     window.matchMedia("(prefers-color-scheme: dark)").matches)
  // ) {
  //   document.documentElement.classList.add("dark");
  // } else {
  //   document.documentElement.classList.remove("dark");
  // }

  // Whenever the user explicitly chooses light mode
  // localStorage.theme = "light";

  // // Whenever the user explicitly chooses dark mode
  // localStorage.theme = "dark";

  // Whenever the user explicitly chooses to respect the OS preference
  // localStorage.removeItem("theme");

  const handleSignOut = (e) => {
    e.preventDefault();
    userSignOut()
      .then((result) => console.log(result))
      .catch((error) => console.log(error));
  };

  return (
    <section
      style={{ zIndex: "-100" }}
      className=" bg-white shadow-md py-3 lg:py-0 dark:bg-slate-600 dark:text-zinc-100"
    >
      <div
        className=" px-4  lg:w-[1150px] m-auto  navbar hidden lg:flex"
        style={{ zIndex: "-10" }}
      >
        <div className="navbar-start  w-fit">
          <NavLink className="">
            <img src={logo} alt="" className="w-32" />
          </NavLink>
        </div>
        <div className="navbar-center pl-6   lg:flex hover">
          <ul className="menu menu-horizontal p-0 menu-compact">
            <li>
              <NavLink to={"/"} className="text-lg font-bold">
                Home
              </NavLink>
            </li>
            <li tabIndex={0}>
              <NavLink to={"/about-us"} className="text-lg font-bold  ">
                About Us
                <svg
                  className="fill-current"
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                >
                  <path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z" />
                </svg>
              </NavLink>
              <ul
                className="py-0 shadow-md  top-[42px] dark:bg-slate-600 dark:text-zinc-100 bg-white "
                style={{ zIndex: "100" }}
              >
                <li className="">
                  <NavLink
                    to={"/our-history"}
                    className="hover:bg-zinc-300 text-lg font-bold "
                  >
                    Our History
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to={"/executive-committee"}
                    className="hover:bg-zinc-300 text-lg font-bold"
                  >
                    Executive Committee
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to={"/advisors"}
                    className="text-lg font-bold hover:bg-zinc-300"
                  >
                    Advisors
                  </NavLink>
                </li>
              </ul>
            </li>
            <li tabIndex={0}>
              <NavLink to={"/wings"} className="text-lg font-bold  ">
                Wings
                <svg
                  className="fill-current"
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                >
                  <path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z" />
                </svg>
              </NavLink>
              <ul
                className=" shadow-md top-[42px] py-0 dark:bg-slate-600 dark:text-zinc-100 bg-white"
                style={{ zIndex: "100" }}
              >
                <li>
                  <NavLink
                    to={"/kin-school"}
                    className="text-lg font-bold hover:bg-zinc-300"
                  >
                    KIN School
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to={"/blood-donation"}
                    className="text-lg font-bold hover:bg-zinc-300"
                  >
                    Blood Donation
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to={"/social-awarness"}
                    className="text-lg font-bold hover:bg-zinc-300"
                  >
                    Social Awarness
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to={"/charity-aid"}
                    className="text-lg font-bold hover:bg-zinc-300"
                  >
                    Charity & Aid
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to={"/winter-cloth-distribution"}
                    className="text-lg font-bold hover:bg-zinc-300"
                  >
                    Winter Cloth Distribution
                  </NavLink>
                </li>
              </ul>
            </li>

            <li>
              <NavLink to={"/post"} className="text-lg font-bold">
                Post
              </NavLink>
            </li>
            <li tabIndex={0}>
              <NavLink to={"/gallery"} className="text-lg font-bold  ">
                Gallery
                <svg
                  className="fill-current"
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                >
                  <path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z" />
                </svg>
              </NavLink>
              <ul
                className="shadow-md top-[42px] py-0 dark:bg-slate-600 dark:text-zinc-100 bg-white"
                style={{ zIndex: "100" }}
              >
                <li className="hover:bg-zinc-300">
                  <NavLink to={"/photo"} className="text-lg font-bold">
                    Photo
                  </NavLink>
                </li>
                <li className="hover:bg-zinc-300">
                  <NavLink to={"/video"} className="text-lg font-bold">
                    Video
                  </NavLink>
                </li>
              </ul>
            </li>
            <li>
              <NavLink to={"/programs"} className="text-lg font-bold">
                Programs
              </NavLink>
            </li>
            <li>
              {!user?.uid ? (
                <NavLink
                  to={"/login"}
                  className="text-lg font-bold"
                  onClick={closeNav}
                >
                  Login
                </NavLink>
              ) : (
                <Link className="text-lg font-bold" onClick={handleSignOut}>
                  Sign Out
                </Link>
              )}
            </li>
            <li>
              {user?.uid && (
                <NavLink
                  to={"/dashboard"}
                  className="text-lg font-bold"
                  onClick={closeNav}
                >
                  Dashboard
                </NavLink>
              )}
            </li>
            <li>
              <button onClick={moon}>
                {checkDark === false ? (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-6 h-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M21.752 15.002A9.718 9.718 0 0118 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 003 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 009.002-5.998z"
                    />
                  </svg>
                ) : (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="w-6 h-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-4.773-4.227l-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z"
                    />
                  </svg>
                )}
              </button>
            </li>

            {/* <li>
              <NavLink to={"/account"} className="text-lg font-bold">
                Account
              </NavLink>
            </li> */}
          </ul>
        </div>

        {/* <div className="navbar-end  w-fit">
          <Link
            to={""}
            className="text-sm px-4 py-2 leading-none border rounded text-black border-black hover:border-transparent hover:text-teal-500 hover:bg-white mt-4 lg:mt-0 hidden lg:block"
          >
            Download
          </Link>
          <div className="dropdown border rounded ">
            <div className=" lg:hidden h-8 flex">
              <button
                className="flex items-center px-3 py-0 border rounded text-black border-black checkBtn"
                // onClick={again}
              >
                <svg
                  className="fill-current h-3 w-3"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <title>Menu</title>
                  <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
                </svg>
              </button>
            </div>

            <ul
              tabIndex={0}
              className="menu dropdown-content  mt-3 p-2 shadow bg-base-100 rounded-box w-screen  right-[-15px] top-[45px] m-auto lg:hidden text-center menu-compact"

              // style={{ visibility: change }}
            >
              <li className="">
                <Link to={"/"} className="text-lg font-bold justify-center">
                  Home
                </Link>
              </li>

              <li tabIndex={0}>
                <Link className="justify-center">
                  <Link
                    to={"/about-us"}
                    className="justify-center text-lg font-bold "
                  >
                    About Us
                  </Link>
                  <svg
                    className="fill-current"
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                  >
                    <path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z" />
                  </svg>
                </Link>
                <ul className="relative p-2 left-0 bg-base-100 shadow-lg">
                  <li className="hover:bg-zinc-300">
                    <Link
                      to={"/our-history"}
                      className="justify-center text-lg font-bold "
                    >
                      Our History
                    </Link>
                  </li>
                  <li className="hover:bg-zinc-300">
                    <Link
                      to={"/executive-committee"}
                      className="text-lg font-bold justify-center"
                    >
                      Executive Committee
                    </Link>
                  </li>
                  <li className="hover:bg-zinc-300">
                    <Link
                      to={"/advisors"}
                      className="text-lg font-bold justify-center "
                    >
                      Advisors
                    </Link>
                  </li>
                </ul>
              </li>
              <li tabIndex={0}>
                <Link className="justify-center">
                  <Link
                    to={"/wings"}
                    className="text-lg font-bold justify-center"
                  >
                    wings
                  </Link>
                  <svg
                    className="fill-current"
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                  >
                    <path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z" />
                  </svg>
                </Link>
                <ul className="p-2 relative left-0 bg-base-100 shadow-lg">
                  <li className="hover:bg-zinc-300">
                    <Link
                      to={"/kin-school"}
                      className="text-lg font-bold justify-center "
                    >
                      KIN School
                    </Link>
                  </li>
                  <li className="hover:bg-zinc-300">
                    <Link
                      to={"/blood-donation"}
                      className="text-lg font-bold justify-center"
                    >
                      Blood Donation
                    </Link>
                  </li>
                  <li className="hover:bg-zinc-300">
                    <Link
                      to={"/social-awarness"}
                      className="text-lg font-bold justify-center"
                    >
                      Social Awarness
                    </Link>
                  </li>
                  <li className="hover:bg-zinc-300">
                    <Link
                      to={"/charity-aid"}
                      className="text-lg font-bold justify-center"
                    >
                      Charity & Aid
                    </Link>
                  </li>
                  <li className="hover:bg-zinc-300">
                    <Link
                      to={"/winter-cloth-distribution"}
                      className="text-lg font-bold justify-center"
                    >
                      Winter Cloth Distribution
                    </Link>
                  </li>
                </ul>
              </li>

              <li>
                <Link to={"/post"} className="text-lg font-bold justify-center">
                  Post
                </Link>
              </li>
              <li tabIndex={0} className="justify-center">
                <Link className="justify-center">
                  <Link to={"/gallery"} className="text-lg font-bold ">
                    Gallery
                  </Link>
                  <svg
                    className="fill-current"
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                  >
                    <path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z" />
                  </svg>
                </Link>
                <ul className=" left-0 relative bg-base-100 shadow-lg">
                  <li className="hover:bg-zinc-300">
                    <Link
                      to={"/photo"}
                      className="text-lg font-bold justify-center"
                    >
                      Photo
                    </Link>
                  </li>
                  <li className="hover:bg-zinc-300">
                    <Link
                      to={"/video"}
                      className="text-lg font-bold justify-center"
                    >
                      Video
                    </Link>
                  </li>
                </ul>
              </li>
              <li>
                <Link
                  to={"/programs"}
                  className="text-lg font-bold justify-center"
                >
                  Programs
                </Link>
              </li>
              <li>
                <Link
                  to={"/login"}
                  className="text-lg font-bold justify-center"
                >
                  Login
                </Link>
              </li>
            </ul>
          </div>
        </div> */}
      </div>
      <div className="flex items-center justify-evenly px-6 lg:hidden">
        <div className="basis-1/3 justify-start flex">
          {open ? (
            <></>
          ) : (
            <button className="border p-[1px] border-pink-500  ">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="w-6 h-6 border "
                onClick={openNav}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25H12"
                />
              </svg>
            </button>
          )}
        </div>
        <div className="grow basis-2/3">
          <div className="px-2 mx-2 justify-between  flex items-center ">
            <img src={logo} alt="" className="w-32 " />
            <div>
              <button onClick={moon} className=" text-right darkBtn pr-5">
                {dark === true ? (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-6 h-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M21.752 15.002A9.718 9.718 0 0118 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 003 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 009.002-5.998z"
                    />
                  </svg>
                ) : (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="w-6 h-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-4.773-4.227l-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z"
                    />
                  </svg>
                )}
              </button>

              {window.location.pathname === "/dashboard" && (
                <label
                  htmlFor="my-drawer-2"
                  className="inline-block cursor-pointer lg:hidden"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-6 h-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M3.75 6.75h16.5M3.75 12H12m-8.25 5.25h16.5"
                    />
                  </svg>
                </label>
              )}
            </div>
          </div>
        </div>
        <div className="flex-1"></div>
      </div>
      <div
        id="mySidenav"
        className="sidenav bg-white dark:bg-slate-800 dark:text-zinc-200"
      >
        <li>
          <button className=" closebtn" onClick={closeNav}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="w-6 h-6 block mt-3 border border-zinc-500 dark:text-white"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </li>
        <li>
          <NavLink to={"/"} className=" text-lg font-bold" onClick={closeNav}>
            Home
          </NavLink>
        </li>

        <li className="parent-menu">
          <NavLink to={"/about-us"} className="text-lg font-bold ">
            <span className="pr-2">About Us</span>
            <svg
              className="fill-current inline-block"
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 24 24"
            >
              <path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z" />
            </svg>
          </NavLink>
          <ul className="py-0  shadow-md top-[42px]  bg-white dark:bg-slate-800 dark:text-zinc-200 down-menu">
            <li>
              <NavLink
                to={"/our-history"}
                onClick={closeNav}
                className="hover:bg-zinc-300 text-lg font-bold "
              >
                Our History
              </NavLink>
            </li>
            <li>
              <NavLink
                to={"/executive-committee"}
                className="hover:bg-zinc-300 text-lg font-bold"
                onClick={closeNav}
              >
                Executive Committee
              </NavLink>
            </li>
            <li>
              <NavLink
                to={"/advisors"}
                className="text-lg font-bold hover:bg-zinc-300"
                onClick={closeNav}
              >
                Advisors
              </NavLink>
            </li>
          </ul>
        </li>
        <li className="parent-menu">
          <NavLink to={"/wings"} className="text-lg font-bold ">
            <span className="pr-2">Wings</span>
            <svg
              className="fill-current inline-block"
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 24 24"
            >
              <path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z" />
            </svg>
          </NavLink>
          <ul className=" shadow-md top-[42px] py-0  bg-white dark:bg-slate-800 dark:text-zinc-200 down-menu">
            <li>
              <NavLink
                onClick={closeNav}
                to={"/kin-school"}
                className="text-lg font-bold hover:bg-zinc-300"
              >
                KIN School
              </NavLink>
            </li>
            <li>
              <NavLink
                onClick={closeNav}
                to={"/blood-donation"}
                className="text-lg font-bold hover:bg-zinc-300"
              >
                Blood Donation
              </NavLink>
            </li>
            <li>
              <NavLink
                onClick={closeNav}
                to={"/social-awarness"}
                className="text-lg font-bold hover:bg-zinc-300"
              >
                Social Awarness
              </NavLink>
            </li>
            <li>
              <NavLink
                onClick={closeNav}
                to={"/charity-aid"}
                className="text-lg font-bold hover:bg-zinc-300"
              >
                Charity & Aid
              </NavLink>
            </li>
            <li>
              <NavLink
                onClick={closeNav}
                to={"/winter-cloth-distribution"}
                className="text-lg font-bold hover:bg-zinc-300"
              >
                Winter Cloth Distribution
              </NavLink>
            </li>
          </ul>
        </li>

        <li>
          <NavLink
            to={"/post"}
            className="text-lg font-bold"
            onClick={closeNav}
          >
            Post
          </NavLink>
        </li>
        <li className="parent-menu">
          <NavLink to={"/gallery"} className="text-lg font-bold ">
            <span className="pr-2">Gallery</span>

            <svg
              className="fill-current inline-block"
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 24 24"
            >
              <path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z" />
            </svg>
          </NavLink>

          <ul className=" left-0 relative  bg-white dark:bg-slate-800 dark:text-zinc-200 shadow-lg down-menu">
            <li className="">
              <Link to={"/photo"} className="text-lg font-bold justify-center">
                Photo
              </Link>
            </li>
            <li className="">
              <Link to={"/video"} className="text-lg font-bold justify-center">
                Video
              </Link>
            </li>
          </ul>
        </li>
        <li>
          <NavLink
            to={"/programs"}
            className="text-lg font-bold"
            onClick={closeNav}
          >
            Programs
          </NavLink>
        </li>
        <li>
          {!user?.uid ? (
            <NavLink
              to={"/login"}
              className="text-lg font-bold"
              onClick={closeNav}
            >
              Login
            </NavLink>
          ) : (
            <Link className="text-lg font-bold" onClick={handleSignOut}>
              Sign Out
            </Link>
          )}
        </li>
        <li>
          {user?.uid && (
            <NavLink
              to={"/dashboard"}
              className="text-lg font-bold"
              onClick={closeNav}
            >
              Dashboard
            </NavLink>
          )}
        </li>
      </div>
    </section>
  );
};

export default Header;
