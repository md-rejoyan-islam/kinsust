import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import React from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";

const NewsTicker = () => {
 
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const { data: news = [], refetch } = useQuery({
    queryKey: ["news"],
    queryFn: () =>
      fetch(
        `https://kin-server-side-rejoyanislam.vercel.app/api/v1/news-ticker`
      ).then((res) => res.json()),
  });
  const handleNews = (data, e) => {
    const changeLink= data.fb_url.split("://")[1]
       axios
         .post(
           "https://kin-server-side-rejoyanislam.vercel.app/api/v1/news-ticker",
           { title: data.title, fb_url: `//${changeLink}` }
         )
         .then((res) => {
           console.log(res);
           if (res.statusText === "OK") {
             toast.success("Successfully Added");
             refetch();
             e.target.reset();
           }
         })
         .catch((error) => console.log(error));
  };
  const newsDelete=(id)=>{
    axios
      .delete(
        `https://kin-server-side-rejoyanislam.vercel.app/api/v1/news-ticker/${id}`
      )
      .then((res) => {
        if (res.statusText === "OK") {
          toast.success("successfully deleted");
          refetch();
        }
      })
      .catch((result) => console.log(result));
  }

  return (
    <section>
      <div>
        <h1 className="text-xl py-3 bg-zinc-200">News Ticker Add</h1>
        <div className="text-left">
        
            <label
              htmlFor="my-modal-3" disabled={news.length>0}
              className="border-none text-left my-2 btn"
            >
              Add New News
            </label>
        
        </div>
      </div>
      <div className="table-section">
        <div className="overflow-x-auto">
          <table className="table w-full">
            <thead>
              <tr>
                <th></th>
                <th>Title</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {news.map((singleNews) => (
                <tr className="hover" key={singleNews._id}>
                  <th>1</th>
                  <td>{singleNews.title}</td>
                  <td>
                    <button
                      className="mx-2 border px-3 py-1 border-zinc-300 bg-zinc-200"
                      onClick={() => newsDelete(singleNews._id)}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Put this part before </body> tag */}
      <input type="checkbox" id="my-modal-3" className="modal-toggle" />
      <div className="modal">
        <div className="modal-box relative">
          <label
            htmlFor="my-modal-3"
            className="btn btn-sm btn-circle absolute right-2 top-2"
          >
            ✕
          </label>
          <form onSubmit={handleSubmit(handleNews)}>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Title</span>
              </label>
              <textarea
                type="text"
                rows={"4"}
                {...register("title", {
                  required: "Title is required",
                })}
                className="border p-3 rounded-md border-zinc-300 w-full max-full "
              />
              {errors.title && (
                <p className="text-red-600">{errors.title?.message}</p>
              )}
            </div>

            <div className="form-control my-3">
              <label className="label">
                <span className="label-text">Facebook Link</span>
              </label>
              <input
                type="text"
                placeholder="Facebook URL"
                {...register("fb_url", {
                  required: "photo is required",
                })}
                className="border p-3 rounded-md  w-full max-full "
              />
              {errors.fb_url && (
                <p className="text-red-600">{errors.fb_url?.message}</p>
              )}
            </div>

            <div className="form-control mt-6">
              <button
                className="p-3 rounded-md border-none bg-zinc-600 text-lg text-white"
                type="submit"
              >
                Add News
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default NewsTicker;
