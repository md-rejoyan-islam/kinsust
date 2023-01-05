import { useQuery } from "@tanstack/react-query";
import React from "react";


const Dashboard = () => {
  const {
    data: post = [],
  } = useQuery({
    queryKey: ["post"],
    queryFn: () =>
      fetch(`https://kin-server-side-rejoyanislam.vercel.app/api/v1/post`).then(
        (res) => res.json()
      ),
  });
  const { data: program = [] } = useQuery({
    queryKey: ["program"],
    queryFn: () =>
      fetch(
        `https://kin-server-side-rejoyanislam.vercel.app/api/v1/program`
      ).then((res) => res.json()),
  });
  const { data: slider = [] } = useQuery({
    queryKey: ["slider"],
    queryFn: () =>
      fetch(
        `https://kin-server-side-rejoyanislam.vercel.app/api/v1/slider`
      ).then((res) => res.json()),
  });
  return (
    <section>
      <h2 className="bg-zinc-200 text-lg py-2">Summary</h2>
      <div className="overflow-x-auto">
        <table className="table w-full">
          <thead>
            <tr>
              <th></th>
              <th>Title</th>
              <th>Amount</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th>1</th>
              <td>Posts</td>
              <td>{post?.result?.length}</td>
            </tr>
            <tr>
              <th>2</th>
              <td>
                Programs{" "}
               
              </td>
              <td>{program?.length}</td>
            </tr>
            <tr>
              <th>3</th>
              <td>Sliders</td>
              <td>{slider?.length}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </section>
  );
};

export default Dashboard;
