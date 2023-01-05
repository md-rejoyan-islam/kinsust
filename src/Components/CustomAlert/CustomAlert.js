import React from "react";
import "./style.css";
const CustomAlert = ({ children }) => {
  return (
    <section>
      <div class="all">
        <main class="main">
          <div class="alert-div flex justify-center items-center">
            <span className="px-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                version="1.1"
                width="18"
                height="18"
                x="0"
                y="0"
                viewBox="0 0 367.805 367.805"
              >
                <g>
                  <g>
                    <path
                      d="M183.903,0.001c101.566,0,183.902,82.336,183.902,183.902s-82.336,183.902-183.902,183.902
		S0.001,285.469,0.001,183.903l0,0C-0.288,82.625,81.579,0.29,182.856,0.001C183.205,0,183.554,0,183.903,0.001z"
                      fill="#0a2647"
                      data-original="#3bb54a"
                      class=""
                    ></path>
                    <polygon
                      points="285.78,133.225 155.168,263.837 82.025,191.217 111.805,161.96 155.168,204.801 
		256.001,103.968 	"
                      fill="#d4e1f4"
                      data-original="#d4e1f4"
                    ></polygon>
                  </g>
                  <g></g>
                  <g></g>
                  <g></g>
                  <g></g>
                  <g></g>
                  <g></g>
                  <g></g>
                  <g></g>
                  <g></g>
                  <g></g>
                  <g></g>
                  <g></g>
                  <g></g>
                  <g></g>
                  <g></g>
                </g>
              </svg>
              {/* <svg
                xmlns="http://www.w3.org/2000/svg"
                version="1.1"
                width="18"
                height="18"
                x="0"
                y=""
              >
                <g>
                  <ellipse
                    cx="256"
                    cy="256"
                    rx="256"
                    ry="255.832"
                    fill="#0a2647"
                    data-original="#32bea6"
                  ></ellipse>
                  <polygon
                    points="235.472,392.08 114.432,297.784 148.848,253.616 223.176,311.52 345.848,134.504 
	391.88,166.392 "
                    fill="#ffffff"
                    data-original="#ffffff"
                  ></polygon>
                  <g></g>
                  <g></g>
                  <g></g>
                  <g></g>
                  <g></g>
                  <g></g>
                  <g></g>
                  <g></g>
                  <g></g>
                  <g></g>
                  <g></g>
                  <g></g>
                  <g></g>
                  <g></g>
                  <g></g>
                </g>
              </svg> */}
            </span>
            <span> {children}</span>
          </div>
          <div class="bellow"></div>
        </main>
      </div>
    </section>
  );
};

export default CustomAlert;
