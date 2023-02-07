import { Link, NavLink } from "react-router-dom";
import logo from "../../../Assets/Images/Logo/kin-logo.gif";
import logoDark from "../../../Assets/Images/Logo/kin-logo-dark.gif";
import { useContext, useState } from "react";
import "./Header.css";
import { AuthContext } from "../../../Context/AuthContext/AuthProvider";

const Header = () => {
  const { user, userSignOut } = useContext(AuthContext);
  let dark = localStorage.getItem("dark") || false;
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
  if (localStorage.getItem("dark")) {
    if (localStorage.getItem("mood") === "dark") {
      document.querySelector("body").classList.add("dark");
      dark = true;
    }
    if (localStorage.getItem("mood") === "light") {
      document.querySelector("body").classList.remove("dark");
      dark = false;
    }
  }

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

  const [direction, setDirection] = useState(false);
  let oldScrollY = window.scrollY;

  window.onscroll = (e) => {
    if (oldScrollY < window.scrollY) {
      setDirection(false);
    } else {
      setDirection("sticky");
    }
    oldScrollY = window.scrollY;
  };

  const handleSignOut = (e) => {
    e.preventDefault();
    userSignOut()
      .then((result) => console.log(result))
      .catch((error) => console.log(error));
  };

  return (
    <section
      style={{ zIndex: "100", position: direction }}
      className=" top-0  bg-[#d4eaf6] shadow-md py-0 lg:py-0 dark:bg-[#16213E] dark:text-zinc-100"
    >
      <div className=" px-4 py-0 lg:w-[1150px] m-auto  navbar hidden lg:flex">
        <div className=" navbar-start  w-fit">
          <NavLink className="">
            <img src={dark ? logoDark : logo} alt="" className="w-28" />
          </NavLink>
        </div>
        <div className="navbar-center pl-6   lg:flex hover">
          <ul className="menu menu-horizontal p-0 menu-compact ">
            <li>
              <NavLink
                to={"/"}
                className="hover:text-[#ff03a7cb] text-lg font-bold"
              >
                Home
              </NavLink>
            </li>
            <li tabIndex={0}>
              <NavLink
                to={"/about-us"}
                className="hover:text-[#ff03a7cb] text-lg font-bold  "
              >
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
                className="py-0 shadow-md  top-[42px] dark:bg-slate-600 dark:text-zinc-100 bg-[#daf1fe] "
                style={{ zIndex: "100" }}
              >
                <li className="">
                  <NavLink
                    to={"/our-history"}
                    className=" hover:text-[#ff03a7cb] text-lg font-bold "
                  >
                    Our History
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to={"/executive-committee"}
                    className=" hover:text-[#ff03a7cb] text-lg font-bold"
                  >
                    Executive Committee
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to={"/advisors"}
                    className="hover:text-[#ff03a7cb] text-lg font-bold "
                  >
                    Advisors
                  </NavLink>
                </li>
              </ul>
            </li>
            <li tabIndex={0}>
              <NavLink
                to={"/wings"}
                className="hover:text-[#ff03a7cb] text-lg font-bold  "
              >
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
                className=" shadow-md top-[42px] py-0 dark:bg-slate-600 dark:text-zinc-100 bg-[#daf1fe]"
                style={{ zIndex: "100" }}
              >
                <li>
                  <NavLink
                    to={"/kin-school"}
                    className="hover:text-[#ff03a7cb] text-lg font-bold "
                  >
                    KIN School
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to={"/blood-donation"}
                    className="hover:text-[#ff03a7cb] text-lg font-bold "
                  >
                    Blood Donation
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to={"/social-awarness"}
                    className="hover:text-[#ff03a7cb] text-lg font-bold "
                  >
                    Social Awarness
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to={"/charity-aid"}
                    className="hover:text-[#ff03a7cb] text-lg font-bold "
                  >
                    Charity & Aid
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to={"/winter-cloth-distribution"}
                    className="hover:text-[#ff03a7cb] text-lg font-bold "
                  >
                    Winter Cloth Distribution
                  </NavLink>
                </li>
              </ul>
            </li>

            <li>
              <NavLink
                to={"/post"}
                className="hover:text-[#ff03a7cb] text-lg font-bold"
              >
                Post
              </NavLink>
            </li>
            <li tabIndex={0}>
              <NavLink
                to={"/gallery"}
                className="hover:text-[#ff03a7cb] text-lg font-bold  "
              >
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
                className="shadow-md top-[42px] py-0 dark:bg-slate-600 dark:text-zinc-100 bg-[#daf1fe]"
                style={{ zIndex: "100" }}
              >
                <li className="">
                  <NavLink
                    to={"/photo"}
                    className="hover:text-[#ff03a7cb] text-lg font-bold"
                  >
                    Photo
                  </NavLink>
                </li>
                <li className="">
                  <NavLink
                    to={"/video"}
                    className="hover:text-[#ff03a7cb] text-lg font-bold"
                  >
                    Video
                  </NavLink>
                </li>
              </ul>
            </li>
            <li>
              <NavLink
                to={"/programs"}
                className="hover:text-[#ff03a7cb] text-lg font-bold"
              >
                Programs
              </NavLink>
            </li>
            <li>
              {!user?.uid ? (
                <NavLink
                  to={"/login"}
                  className="hover:text-[#ff03a7cb] text-lg font-bold"
                  onClick={closeNav}
                >
                  Login
                </NavLink>
              ) : (
                <Link
                  className="hover:text-[#ff03a7cb] text-lg font-bold"
                  onClick={handleSignOut}
                >
                  Sign Out
                </Link>
              )}
            </li>
            <li>
              {user?.uid && (
                <NavLink
                  to={"/dashboard"}
                  className="hover:text-[#ff03a7cb] text-lg font-bold"
                  onClick={closeNav}
                >
                  Dashboard
                </NavLink>
              )}
            </li>
            <li className="darkLi">
              <span onClick={moon} id="darkBtnChange" className="darkBtnChange">
                {dark === false ? (
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
              </span>
            </li>

            {/* <li>
              <NavLink to={"/account"} className="hover:text-[#ff03a7cb] text-lg font-bold">
                Account
              </NavLink>
            </li> */}
          </ul>
        </div>
      </div>
      <div className="flex items-center justify-evenly px-6 lg:hidden">
        <div className="basis-1 justify-start flex">
          {open ? (
            <></>
          ) : (
            <button className="border p-[1px] border-[#a8acc4]  ">
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
        <div className="grow  basis-11/12">
          <div className="px-2 mx-2 justify-between  flex items-center ">
            <img src={dark ? logoDark : logo} alt="" className="w-32 " />
            <div>
              <button onClick={moon} className=" text-right darkBtn pr-5">
                {dark === true ? (
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
                ) : (
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
        className="sidenav bg-[#d4eaf6f2] dark:bg-slate-800 dark:text-zinc-200"
      >
        <li className="pb-3 ">
          <button className=" closebtn" onClick={closeNav}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="#000"
              className="w-6 h-6 block  border border-[#ca00fc] bg-[#eaebb8] dark:text-white"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </li>
        <li className="hover:bg-slate-400">
          <NavLink
            to={"/"}
            className=" hover:text-[#ff03a7cb] text-lg font-bold"
            onClick={closeNav}
          >
            Home
          </NavLink>
        </li>

        <li className="parent-menu hover:bg-slate-400 ">
          <NavLink
            to={"/about-us"}
            className="hover:text-[#ff03a7cb] text-lg font-bold "
          >
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
          <ul className="py-0  shadow-md top-[42px]   dark:bg-slate-600 dark:text-zinc-100 bg-[#daf1fe] down-menu">
            <li>
              <NavLink
                to={"/our-history"}
                onClick={closeNav}
                className=" hover:text-[#ff03a7cb] text-lg font-bold "
              >
                Our History
              </NavLink>
            </li>
            <li>
              <NavLink
                to={"/executive-committee"}
                className=" hover:text-[#ff03a7cb] text-lg font-bold"
                onClick={closeNav}
              >
                Executive Committee
              </NavLink>
            </li>
            <li>
              <NavLink
                to={"/advisors"}
                className="hover:text-[#ff03a7cb] text-lg font-bold "
                onClick={closeNav}
              >
                Advisors
              </NavLink>
            </li>
          </ul>
        </li>
        <li className="parent-menu">
          <NavLink
            to={"/wings"}
            className="hover:text-[#ff03a7cb] text-lg font-bold "
          >
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
                className="hover:text-[#ff03a7cb] text-lg font-bold "
              >
                KIN School
              </NavLink>
            </li>
            <li>
              <NavLink
                onClick={closeNav}
                to={"/blood-donation"}
                className="hover:text-[#ff03a7cb] text-lg font-bold "
              >
                Blood Donation
              </NavLink>
            </li>
            <li>
              <NavLink
                onClick={closeNav}
                to={"/social-awarness"}
                className="hover:text-[#ff03a7cb] text-lg font-bold "
              >
                Social Awarness
              </NavLink>
            </li>
            <li>
              <NavLink
                onClick={closeNav}
                to={"/charity-aid"}
                className="hover:text-[#ff03a7cb] text-lg font-bold "
              >
                Charity & Aid
              </NavLink>
            </li>
            <li>
              <NavLink
                onClick={closeNav}
                to={"/winter-cloth-distribution"}
                className="hover:text-[#ff03a7cb] text-lg font-bold "
              >
                Winter Cloth Distribution
              </NavLink>
            </li>
          </ul>
        </li>

        <li>
          <NavLink
            to={"/post"}
            className="hover:text-[#ff03a7cb] text-lg font-bold"
            onClick={closeNav}
          >
            Post
          </NavLink>
        </li>
        <li className="parent-menu">
          <NavLink
            to={"/gallery"}
            className="hover:text-[#ff03a7cb] text-lg font-bold "
          >
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
              <Link
                to={"/photo"}
                className="hover:text-[#ff03a7cb] text-lg font-bold justify-center"
              >
                Photo
              </Link>
            </li>
            <li className="">
              <Link
                to={"/video"}
                className="hover:text-[#ff03a7cb] text-lg font-bold justify-center"
              >
                Video
              </Link>
            </li>
          </ul>
        </li>
        <li>
          <NavLink
            to={"/programs"}
            className="hover:text-[#ff03a7cb] text-lg font-bold"
            onClick={closeNav}
          >
            Programs
          </NavLink>
        </li>
        <li>
          {!user?.uid ? (
            <NavLink
              to={"/login"}
              className="hover:text-[#ff03a7cb] text-lg font-bold"
              onClick={closeNav}
            >
              Login
            </NavLink>
          ) : (
            <Link
              className="hover:text-[#ff03a7cb] text-lg font-bold"
              onClick={handleSignOut}
            >
              Sign Out
            </Link>
          )}
        </li>
        <li>
          {user?.uid && (
            <NavLink
              to={"/dashboard"}
              className="hover:text-[#ff03a7cb] text-lg font-bold"
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
