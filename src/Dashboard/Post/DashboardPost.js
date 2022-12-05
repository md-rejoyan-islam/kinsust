import React, {  useState } from "react";
import "./style.css";
const DashboardPost = () => {
  let [para, setPara] = useState(1);
  const addPara = () => {
    para = para + 1;
    const add = document.querySelector(".add");
    const div = document.createElement("div");
    const text = document.createElement("textarea");
    text.placeholder = `Para-${para}`;
    text.name = `details${para}`;
    div.appendChild(text);
    add.appendChild(div);
    setPara(para);
  
  };
  const time={}
  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.target);
    let formData = Object.fromEntries(data.entries());
    const date = new Date();
    const month = date.getMonth();
    const year = date.getFullYear();
    const day = date.getDay();
    const monthName = [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
    ];
    const dayName = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
    time.day = dayName[day];
    time.month = monthName[month];
    time.date=date;
    time.year=year;
    formData.date=time

   const replaceData=formData.details1.replaceAll("\n", "<br>");
   formData.details1=replaceData
  console.log(formData);
  
    fetch(`https://kin-server-side-rejoyanislam.vercel.app/api/v1/post`, {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(formData),
    })
      .then((res) => res.json())
      .then((data) => {
        setPara(1);
        const add = document.querySelector(".add");
        add.innerHTML = "";
        console.log(data);
        event.target.reset();
      });
  };

  return (
    <div style={{ backgroundColor: "#242933" }} className="py-16">
      <div className="w-[400px] m-auto bg-zinc-400 px-10 py-5 ">
        <h1 className="my-3 text-white text-xl font-bold">Post Form</h1>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Title"
            className="input input-bordered w-full my-2" required
            name="title"
          />
          <input
            type="text" required
            placeholder="Image Link"
            className="input input-bordered w-full my-2"
            name="photo"
          />
          <textarea
            className="textarea my-2 w-full"
            placeholder="Para-1" required
            name="details1"
          ></textarea>

          <div className="add"></div>

          <div>
            <input
              type="submit"
              value={"submit"}
              className="btn btn-primary w-full my-3 "
            />
          </div>
        </form>
        <button
          className="btn btn-outline my-3 w-full"
          onClick={addPara}
        >
          Add para
        </button>
      </div>
    </div>
  );
};

export default DashboardPost;
