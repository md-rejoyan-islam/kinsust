import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import React from "react";

import { PhotoProvider, PhotoView } from "react-photo-view";

const SliderList = () => {
    const { data: sliders = [], refetch } = useQuery({
      queryKey: ["slider"],
      queryFn: () =>
        fetch(
          `https://kin-server-side-rejoyanislam.vercel.app/api/v1/slider`
        ).then((res) => res.json()),
    });

    const sliderDelete=(id)=>{
axios
  .delete(
    `https://kin-server-side-rejoyanislam.vercel.app/api/v1/slider/${id}`
  )
  .then((res) => {
    if (res.statusText === "OK") {
      refetch();
      console.log(res);
    }
  })
  .catch((result) => console.log(result));
    }



  return (
    <section>
      <div className="overflow-x-auto">
        <table className="table w-full">
          <thead className="">
            <tr>
              <th></th>
              <th>Title</th>
              <th>Photo</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {sliders.map((slider, index) => (
              <tr className="hover" key={slider._id}>
                <th>{index + 1}</th>
                <td>{slider.title}</td>
                <td>
                  <PhotoProvider>
                    <PhotoView src={slider.link}>
                      <img
                        src={slider.link}
                        className="w-16 cursor-pointer"
                        alt=""
                      />
                    </PhotoView>
                  </PhotoProvider>
                </td>
                <td>


                  <button
                    className="mx-2 border px-3 py-1 border-zinc-300 bg-zinc-200"
                    onClick={() => sliderDelete(slider._id)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
         
      </div>
    </section>
  );
};

export default SliderList;
