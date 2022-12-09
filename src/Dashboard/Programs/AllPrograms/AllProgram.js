import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import React from 'react';
import toast from 'react-hot-toast';

import { PhotoProvider, PhotoView } from 'react-photo-view';

const AllProgram = () => {

  const { data: programs = [], refetch } = useQuery({
    queryKey: ["programs"],
    queryFn: () =>
      fetch(
        `https://kin-server-side-rejoyanislam.vercel.app/api/v1/program`
      ).then((res) => res.json()),
  });

  const programDelete = (id) => {
    console.log(id);
    axios.delete(
        `https://kin-server-side-rejoyanislam.vercel.app/api/v1/program/${id}`
      )
      .then((res) => {
        if (res.statusText === "OK") {
          toast.success("successfully deleted");
          refetch();
          console.log(res);
        }
      })
      .catch((result) => console.log(result));
  };
    return (
      <section>
        <div className="overflow-x-auto">
          <table className="table w-full">
            <thead className="">
              <tr>
                <th>#</th>
                <th>Title</th>
                <th>Photo</th>
                <th>Publish Date</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {programs.map((program, index) => (
                <tr className="hover" key={program._id}>
                  <th>{index + 1}</th>
                  <td>{program.title}</td>
                  <td>
                    <PhotoProvider>
                      <PhotoView src={program.photo}>
                        <img
                          src={program.photo}
                          className="w-16 cursor-pointer"
                          alt=""
                        />
                      </PhotoView>
                    </PhotoProvider>
                  </td>
                  <td>
                    {program?.time?.day} &nbsp;
                    {program?.time?.publish} {program?.time?.month} &nbsp;
                    {program?.time?.year}
                  </td>
                  <td>
                    <button
                      className="mx-2 border px-3 py-1 border-zinc-300 bg-zinc-200"
                      onClick={() => programDelete(program._id)}
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

export default AllProgram;