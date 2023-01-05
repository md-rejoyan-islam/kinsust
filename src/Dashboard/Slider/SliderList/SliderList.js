import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import React from "react";
import { toast } from "react-hot-toast";

import { PhotoProvider, PhotoView } from "react-photo-view";
import CustomAlert from "../../../Components/CustomAlert/CustomAlert";

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
    if (res.status === 200) {
      refetch();
      toast.custom(<CustomAlert>successfully Deleted
      </CustomAlert>, {
        duration: 1000,
      });
      
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
            <tr>
              <th>1</th>
              <td>It’s good to be blessed. It’s better to be a blessing</td>
              <td>
                <img
                  src="https://kinsust.org/wp-content/uploads/2021/05/photo6170088535432997804.jpg"
                  alt=""
                  className="w-16 cursor-pointer"
                />
              </td>
              <td>
                <button
                  className="mx-2 border px-3 py-1 border-zinc-300 bg-zinc-200"
                  disabled={true}
                >
                  Delete
                </button>
              </td>
            </tr>
            {sliders.map((slider, index) => (
              <tr className="hover" key={slider._id}>
                <th>{index + 2}</th>
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
