import React from 'react';
import { Link,  Outlet } from 'react-router-dom';
import Header from '../Pages/Shared/Header/Header';
import './DashBoardLayout.css'
const DashboardLayout = () => {
  
 
  const closeNav = () => {
    document.getElementById("mySidenav").style.width = "0";
    
  };
    return (
      <section>
        <Header></Header>
        <div className="drawer drawer-mobile">
          <input id="my-drawer-2" type="checkbox" className="drawer-toggle " />
          <div className="drawer-content">
            {/* <!-- Page content here --> */}
            <Outlet></Outlet>
          </div>
          <div className="drawer-side">
            <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
            <ul className="menu p-4 w-80 bg-base-100 ">
              {/* Sidebar content here  */}
              <li className="parent man" style={{ borderRadius: "1px" }}>
                <Link className="text-lg font-bold rounded-none">
                  <span className="pr-2">Programs</span>
                  <svg
                    className="fill-current inline-block"
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                  >
                    <path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z" />
                  </svg>
                </Link>
                <ul className="py-0  dark:bg-slate-800 dark:text-zinc-200 down left-0 rounded-none">
                  <li>
                    <Link
                      to={"/dashboard/all-program"}
                      onClick={closeNav}
                      className=" text-lg font-bold "
                    >
                      Programs List
                    </Link>
                  </li>
                  <li>
                    <Link
                      to={"/dashboard/add-program"}
                      className=" text-lg font-bold"
                      onClick={closeNav}
                    >
                      Add Program
                    </Link>
                  </li>
                </ul>
              </li>
              <li className="parent man" style={{ borderRadius: "1px" }}>
                <Link className="text-lg font-bold rounded-none">
                  <span className="pr-2">Slider</span>
                  <svg
                    className="fill-current inline-block"
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                  >
                    <path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z" />
                  </svg>
                </Link>
                <ul className="py-0  dark:bg-slate-800 dark:text-zinc-200 down left-0 rounded-none">
                  <li>
                    <Link
                      to={"/dashboard/slider-list"}
                      onClick={closeNav}
                      className=" text-lg font-bold "
                    >
                      Slider List
                    </Link>
                  </li>
                  <li>
                    <Link
                      to={"/dashboard/add-slider"}
                      className=" text-lg font-bold"
                      onClick={closeNav}
                    >
                      Slider Add
                    </Link>
                  </li>
                </ul>
              </li>
              <li className="parent man" style={{ borderRadius: "1px" }}>
                <Link className="text-lg font-bold rounded-none">
                  <span className="pr-2">Post</span>
                  <svg
                    className="fill-current inline-block"
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                  >
                    <path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z" />
                  </svg>
                </Link>
                <ul className="py-0  dark:bg-slate-800 dark:text-zinc-200 down left-0 rounded-none">
                  <li>
                    <Link
                      to={"/dashboard/post-list"}
                      onClick={closeNav}
                      className=" text-lg font-bold "
                    >
                      Post List
                    </Link>
                  </li>
                  <li>
                    <Link
                      to={"/dashboard/post-add"}
                      className=" text-lg font-bold"
                      onClick={closeNav}
                    >
                      Post Add
                    </Link>
                  </li>
                </ul>
              </li>
              <li>
                <Link to={'/dashboard/news-ticker'} className="text-lg font-bold">
                  News Ticker
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </section>
    );
};

export default DashboardLayout;