import axios from "axios";
import React from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import CustomAlert from "../../../Components/CustomAlert/CustomAlert";

const AddPost = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const handlePost = (data, e) => {
    const subTitle = data.sub_title.replaceAll("\n", "<br>");
    const replaceData1 = data.details.replaceAll("\n", "<br>");
    const replaceData2 = data.details2.replaceAll("\n", "<br>");
    const replaceData3 = data.details3.replaceAll("\n", "<br>");
    data.details = replaceData1;
    data.details2 = replaceData2;
    data.details3 = replaceData3;
    data.sub_title = subTitle;
    const time = {};
    const date = new Date();
    const month = date.getMonth();
    const year = date.getFullYear();
    const day = date.getDay();
    const publish = date.getDate();
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
    time.date = date;
    time.year = year;
    time.publish = publish;
    data.time = time;
    data.comment = [];
    if(!data.photo){
      data.photo =
        "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAASsAAACoCAMAAACPKThEAAAA51BMVEX////tHyQAAADsAAD2pqfsAA31nJ20tLTsAAztEBf84+P71tftKi/yenz2qqvtGyH97++goKCTk5Pt7e339/dhYWGDg4O7u7va2tr09PTR0dHExMSvr6/p6enS0tJ8fHxERERzc3Pg4OA6OjpqampOTk6YmJikpKQPDw8bGxuNjY0wMDApKSlISEhbW1uAgID4ubrwXmD0jI35x8fvREchISHxamz6zs/ydHbuP0L96OjxZWfzhYaumZns0dHvTlHuODmisLDaNDXfREWpFBVhEQ8YPj7rVFSgVlb9JSefAACnbGwgEA699R3DAAASNklEQVR4nO2dCXfbuBHHKWgdSs4hS6RMiYcO6qAuy4kT7SbZtJu2u0237ff/PMUAIAmAAElZ9HPSh3/esy0KhMCfgMHMAGQsy8jIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMhIrXHw3C34YRQgdHzuNvwg2iHQ6Lmb8QNovEBoHe8R6j93S7574fGHJvj3FKHVc7flOxcef3euNZmOMmhGao1nCA0sK8SjkA7GwXO36LuVT7sS7lE2eY072cx95jZ9p6Ljz7K2KGRHAJ7/nE36TuXO2JAbIyQcvH22Jn2v4roQx8qyBggtxvWref+TSuqyL5VlqV5cp6U+K99/KdX1pkaZXO4LxSfe1L3GdPyB5oJJn2CI9UOej+2rgjpXyqLX7U6xLFP7RVbspaLGq7aMv1esq9PWXv2Nos72ta60qGz8ETkIOfy7K4Sm9eqxrNfdVkG9lqrkdbtXLMrUfpuXe9lWFOi8kWp7pais+0nXyhtFnTVZySZ8IIWDfYQOjlVLtVmVoOq1f+EKPp5Vq/Na08rHsyq6BnI0OMIwvTpV1Wb1uQyVYGguYCX0T16PZSWOP6oQzaUjQ1Q4pFRNVp87WlTd7meh6CWsWu3PlkqPZKV0oRy0kQ9hX34bVdZWk9VNV4/qlWSRL2LVe6Vs5eNYqV1zR3AbqOItynxUvWqxKkNVsMcXsWp1f1W18jGsYPztFMfnaKg4ukTKw4LqsLrpaVF1vhVqvIxVq+BdkBacz8rXpPSmCMWq8jbSvJGrBiu3pSjD2vtzscYLWbXaCpf0fFbYJb9zjknh+ErhfEbJ9Di1okNVCrCalftKj+qLosZLWfW6RRtzLis6/tbovvjOX/4qe7xzklYOqlOA1axKUL1Q1Xgpq1b3t0KdZ7Ji89+64ArcfOl22u3uA38MW6rbICbuqFeeAqxk9VWPSu0MXcyq1X6Q6zyP1YDNf548471tY1D4+jpf82MxQrm74JSmAKtYfdKh6rXfq2u8nFWrUPU5rLj5D89tvNv0tv3w/v0DVMVNIGsxHrzl4uwzWX3Qo9JlBRpg1ZKj6DNY8f4npNU3w11IX9+8IhCucV3d3NAuWZ7U4s7RpADLWf2mRdVVO9gNsep9fSyrgeB/OrdbYrjRCpvulP/HLt9xN7KnoPPLKlhpUXVb+uRRE6xaVx8fxUp1nXGQwEyXe5rfepxBVHnxuhRgGatvVzpU2uRJU6ykiaMmK30KPcl9p/ftK87dtVXuuiYFWMLqnQ7VVXFS59QMKxFFPVaDkqWZATqR39dg29vvsmGxUeZjXGUKUM/q147uKhTOevOsBMelDiu9nQGN6Fh70QOnodVl/u5ozxAWpEoBaln9rEWlS8g1y6rVfXcWq4olrAnas6oeIBPXfY0dK2L3dTlRSAGKM6SW1UfVFZMmKp31J2DFf1I1q7LxB4qPmad13e21eleWhf3Ofdna8xChZR1Wr7Wo5It+OlZcFF3Fqnz8yQIPq12jHKQAeYdCyerrgxaVxlnn1ByrXiftKRWsai8hx4Fnh+Hf/t7r/aMk/zJ2mMcAKUAuVaFihT1NXfM7moT4k7BqdT/UYqXfmhAHtu1xWawh9Ux/b/35h9qFGtvTPSlymhOnYcnvAlSyKpF+De8JWLU6X6pZ6cZflKwQ05H4Be97r95Yd/jlP7+1f4foB6MRTwlnpPjibkF+gzGzuZThuawUCZMnZJWO+RJW2fibn7hpyw3J5e6Xt7dL0lE8SAP0Op/+Bd2q/TYgKSvstO+yXueTPNY8oBOjY6/o+ONSgOeyUud4m2GlwkcXdvSsvOx7x9eE7gk1N1jCZS9T13scYrsztl622u321Z+tV/+mHgEKLdKP5onnkTAI3Ql+abym3Q6lS2Jns9ItS13OqvdO4dLRhR09qynKlkJt0oFO1N4cEsGChcQ5uHn5y3/++C94pffMtYrWi3Sg7tfKZS+w7+jwSFa9smDwEladt18UsLo/l7K6R94xWwqN19RErfraWY7sQ6alWCdyJ3bSDwPNfpk1pu8zP/Z8Vq1OIW3ZEKs3yswieHR6Vrc4yE0EP2hcultvnXYjVGdTH+ybnFvjx7NSrrQ0w+pGtRMAQylnJftBZeoDJjJwayzLezTf4FzASrM43AAr6xfFyb1uFSuyFrOq6ijk/RAwWdT2V6FKK72EVeuqLHy+iJX1QnF2951bxQomq1LXPVlQODY16nfVsEabNC/joMXjWbWETUSNsrK+KRrUUbWyyKpk9ycmtTnClSfEqsfEw0DHkgWudW7+L2OFh8VTsbJUGwJUjVSwQntNhmWKTsQJm6SG3XHpb0uTaBjP0PmsNKFhV5/vu5TVtS5ur8GqkHKicsEVJQhCLwj8yQjAOTBhLpHSV/BYbWex6n56UGeSdbvKLmdlvakHS81KudvF0+4JXSr3hyzRI1hdfVCPCVgf1AXRF7OyPuoS/XVYqXbH7NTdzYJpcVUYtmDUhV5ai1UH0rhv1V9zt7ibqClW1tc6gbWWFdxvI2oo8lsvcnTY6UfbxfE+jwQHXE31WbXpIt1vmu2KmgxpA6xU7lRtVpBNlozQQbBKC2E7TLAbroghp54/3NS0P59VuuKoM7aaILoBVtb7GrB0rMgqu7i6J6yX7hUdz3J3dBcpGHU/OZtVnnzRlNEE0U2wslRRdF1WhdW9Pr+lfa2ZK2ewXWZJPPX+uay4iU7lNZMize6/EspoN53UYEWivhPLsLj+UjD3W427PkckqZVY1rmsxO39ullcuf2iGVaufpO48OE7FtmIrKx4Qy87Jof4EanbcOz5uMcdIkvJqiwelHcMnbPDuhlW6moKrPpbtIoUrLJVheFiKi7CzzQJhnF+h5zECsJtsv1ds44jmW1V+A+6UmwYbYiVMoqWWS3JpBWpWOk2NNr8Pj7hcBZ7i6zwVLG+J9UqWXULfuY7jflQBNFNsdJ+Zs7Kh67jkwxvkRWZ/hULPAdmfQQJa1siqy04HAH0uZr3mOg8HkUQ3RgrS7lYwbOaM0M+UbKiG6mKbnkxLwhGnbNiAqsRLX2H6t+7pAkLW92PcsnmWJVH0ZjVlgR/EaxJKVmRJYjCnqGpnD/eSaUEVh6dRNe4d9W+J053m0lh1b45VrrwKmOFvaiwP7HAt1SyIom9oo+AhH3vDlnJ4celxMofLFbeAPOtzUrX7l5byt02yMp6XRJFY1YzEo0s4JJUrEJ2ZCOt6oR8IZsV4salwCpOKznnvtQPuruN3onlmmRVFkVjVtgjCidzstCnYBXmx8R7R1zO4xpmZfKQUbTtZK3+CF3xnHt4dY0Wr7FRVsqFnYxVgk5+tCOXWWTFoZIXLjJ4E66Ibh7EIcD6loTb9VnBXmdNqwUXo1FWJVE0ZrXKL6nAys6PxNKeoyid9XY8zryvCayCvN4zWOnCwnzrzxOwsvRbwa6tzdbbovkABonMikPly4+tmNGdj06eexF7pGTbQ5+skjnnsLJ+qrUvsmFW2k32mNVpGxBWRZ+BQ0W7yzpbuIjY46+4IkxpbkJg5aM9ZrvanNevym6Q5ILoplm5Gm+F+KJZzxFZeYi/XKJ0ryyMRxiB2KgfZFgjBSuo+YSIOTuLldZ48PeENM1KF0VjVtiW+M6c4BFYcag4V2BIFy6SnUONuhcgSQcVqxU26w7pimex0odo3H6Qxllpxj71GfYw6Us+A4dKWP7L9+jtyIjkyjH1i6zG7M/Fuaw+62elLInTPCvrV81a6myGaS36MKY4VhwCaSHaoflj+AWJmSIruttdmgcD+7icDJDmeTL6VeUH1cNiyDmdnNUjnydTsh38leJJNjTGgR0d4jzo538WM1X44Iou06tZrQqsWDyYYIxvX6ikbbSlLE6UxoWfle/KuRtVGf1WJWWdN9ZBFTvnUiyr8hQ4Vrn37smsfBpWz4u3g/1YSnMyvpKV6j5vDStxapDmQQirxz/8A1xJrm8i5fpSzVRn6Fjlf05lVgO0jCaHH//xrXOSQ4Y0QgHVXnmCjlUWLsFMKeXbYWn6/+HhrckWzUjGRUaludVNy2rMnSmv4wTcE0GCRRZYjme0r3nc8HRm6mf4jCoeKQLy53fD6ofasM+eq/b3xNCgSfGhFExrFgbLrDQbIrWsuLREIq878+vWiA8baRbxwC2BJJpHFhSfjVQQ2UaeusNVGig7+hbattI+YmKgZLXVPbFQz4reF0A01bPin1LDHv/g8gtDfTUrV3FXtSRwlIfbug8ftpW305Ls1Fx7S6Sa1UH3NKsSVo7cNVWsdmiTfaMOhRTwHB7Piqaxb+s+e1jJgyYstU+2VLPSPlWuhBVnpvSs9ihBd+mLE3l/R/ITcRjQOjArD1obT4j9GJOHQ0QsIghCG367tjXCp5LaHZoH8VnvPEBtk9iyienBpaEea+zR6vEbUUj6NT7XjUDwwmVvkz5PK3Q9m36iY43CqJyV5tbLMlaWnM8qsnKIK5bawlsSGMzgeyEZD4eyGhF4cM4BxQgCLfiJf4237FscIPzRC480fUqT1wO2OpKgLT73bgefDZWO9lmAC9nfGRiBBIqF6bVQw5BugR1aS5iISFoghClrCtY3KGelHvhCv5NZxZWsbGzO77I+GxCLDReB23PcwFUCq4AEDIB0g+Afcsa05UO0362gLmoQbTI3sLqXLHad4NcunIR2GMHigP+EETzcbeHbR1tykza17bDvfAMv8IfvTvgLgrMG2Lb7MKtD1m2CL+kAqadNBSu0VYzpUlZSThllI5nbJBFyTz9yoSuRZW9SEh5fwLOCIzOYnGxWA/sRkeeVxQF53nDEfOYVM4MRoId1OtsdAssj2VA2hc5zRx6QAz/8bB5cYMQTKDeizSA1+fhCjtDtj/D17+DHuIKV6nkU5aysbQUruNAJb708jG6HGwpfXIIvSWZFnqqVMNu+hKbOsE25p97GHo8Wm22cu2OZNvKsWDrXEq8OnpXgnMbwxokdWuFaGauEbDeDmcylHWxMWe1hhoBDEft+4kpWxQ18FaxG5axGbNClXsMOf6tH3HKPXDt88zKrGAr1s3lwtN4iwmpNTw+xTaKVHVlbYxi71CTSc+jPYE4GEkWesRqn3SGYIoFVWkFEWe01rE5r/mLlVEMFK2uKBEms1ohuUU69hgB3fHgvpFMhjqtkVhE1LZQVJGNPe8KKNNrHozmtespGdkCv2cr8DPgJtmGlYLWi/bNP3s5ZTVitGFFEApiFrl9ZQmr4IHobVayk/imxSt3VWV7ahxe0X00U/UpghefCGF9Kxgp78276bSbsM25xfS7fo+gF2a6bGaSMlUe7D54DwrGl6Fcb6FeHUlaWI5gdwberZOXzp0qs8DX0wyQc5F7DHf4+BzA28RRIHohLWc3Y849EVsQ6Y6csZzVEaYgGY8+jHzVIWW1heMJ625zuFTjJrNg8fQumLhJYkbQItVcVrPiVdyTuIKpkld8zUWSVPtMu93RhvPvkSAAU6Dw4AZZTgRWpgTCMoWjKCmLQNMKYwRvRAkw7Y3UPbPdkbTIk41BiNWduEUwe0BJ426GsbqG7DvD7Mc+qGDuTl4IPzqWSq1kJo1Bkdc9WEJfZPpsJOxd/3PIEf/ZpPnuzRyfiX0XUtkMEA8ntHTiGfXx1tNERymPqmH3kILNUEbzE8HClGxsia4dnlaQxmY0jyRDHRghuXlugEbDC790d4Wusw0rYqYAWWdahBis+Cy+zCliJ+7w+mmsgHTmGnpLQOy8C2Ny2h8GawEgBFzyG6536eO7cpd7MgdtbTkf/jvs8CKfZ2MLXDTMmeeMeM8B+O7tTDc+fYHKCW+J14T9yvx3+vxZiW1fUv9KxIjsgc6XpoxqsaG5PxcpNR3N+j36UTol+n/r45HWQxNYI7i32skN2H1uQoI+NJ7bDWUVHIW71+iF1nwNiY13XHdHPdhM4CV+oDwN+nNBKnRERfhEm+LyE1ODjgBFOdsKEXLMHP2PatjWLQ7LLyxNFtzys7KqZ4IvNJ0yBFcc9EFg1r9I71FfwqSNNgvcxWqPVHIvzi5ZDpjniNZze39/n+FbL5fIue3VcZmcNh8t87Z7UPZ8/DauRPc9zFgod0TIaLRr8r1YKIdzTqLH2coKxXvYfErAg4oz/aKVCUWgTefVln68n+T+HgsWifMUjmi8W05r/F4aRkZGRkZGRkZGRkZGRkZGRkZGRkZGRkZGRkZGRkZGRkZGRkZGRkZGRkZGRkZHRj6D/AXSrfhtN3PGmAAAAAElFTkSuQmCC";
    }
   
console.log(data);
    axios
      .post("https://kin-server-side-rejoyanislam.vercel.app/api/v1/post", data)
      .then((res) => {
        console.log(res);
        if (res.status === 200) {
          toast.custom(<CustomAlert>Successfully Added</CustomAlert>, {
            duration: 1000,
          });
          // toast.success("Successfully Added");
          e.target.reset();
        }
      })
      .catch((error) => console.log(error));
  };
  return (
    <section>
      <div className="my-20 ">
        <div className="card-body text-left rounded-md mx-auto md:w-[500px] bg-white">
          <form onSubmit={handleSubmit(handlePost)}>
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
            <div className="form-control">
              <label className="label">
                <span className="label-text">Sub Title</span>
              </label>
              <textarea
                type="text"
                rows={"4"}
                {...register("sub_title", {})}
                className="border p-3 rounded-md border-zinc-300 w-full max-full "
              />
            </div>

            <div className="form-control">
              <label className="label">
                <span className="label-text">Details</span>
              </label>
              <textarea
                type="text"
                rows={"10"}
                {...register("details", {})}
                className="border p-3 rounded-md border-zinc-300 w-full max-full "
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Post Photo Link</span>
              </label>
              <input
                type="text"
                placeholder="Slider Link"
                {...register("photo")}
                className="border p-3 rounded-md  w-full max-full "
              />
              {errors.photo && (
                <p className="text-red-600">{errors.photo?.message}</p>
              )}
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Details 2</span>
              </label>
              <textarea
                type="text"
                rows={"10"}
                {...register("details2", {})}
                className="border p-3 rounded-md border-zinc-300 w-full max-full "
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Post Photo Link</span>
              </label>
              <input
                type="text"
                placeholder="Slider Link"
                {...register("photo2", {})}
                className="border p-3 rounded-md  w-full max-full "
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Details 3</span>
              </label>
              <textarea
                type="text"
                rows={"10"}
                {...register("details3", {})}
                className="border p-3 rounded-md border-zinc-300 w-full max-full "
              />
            </div>
            {/* <div className="form-control">
                <label className="label">
                  <span className="label-text">Photo</span>
                </label>
                <input
                  type="file"
                  placeholder="Photo"
                  {...register("photo", {
                    required: "Photo is required",
                  })}
                  className="input input-bordered w-full max-full "
                />
                {errors.photo && (
                <p className="text-red-600">{errors.photo?.message}</p>
              )}
              </div> */}
            <div className="form-control mt-6">
              <button
                className="p-3 rounded-md border-none bg-zinc-600 text-lg text-white"
                type="submit"
              >
                Add Post
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default AddPost;
