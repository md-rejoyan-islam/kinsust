import React from 'react';
import { PhotoProvider, PhotoView } from 'react-photo-view';

const KinSchool = () => {
    return (
      <section className=" px-5 m-auto text-justify font-serif text-[17px] py-5 bg-base-100 dark:bg-slate-800 dark:text-slate-300">
        <div className="xl:w-[1100px] mx-auto">
          <div className="my-5">
            <p className="my-5">
              Education is one of the basic necessities of human life, and it is
              the only weapon that holds the power of changing an entire nation.
              But unfortunately some children are lagging behind in that race
              either because they are not aware of its importance or they can’t
              bear the expenses the opportunity brings with it. In Year 2004 , A
              group of young dreamer of Shahjalal University of Science &
              Technology (SUST), one day took the aim of spreading the light of
              education among the leftover, underprivileged children of the
              society so that they can also have the access to that opportunity.
              To fulfill that the noble aim, “KIN School” was formed.
            </p>
          </div>
          <div>
            <PhotoProvider>
              <PhotoView src="https://kinsust.org/wp-content/uploads/2022/02/FB_IMG_1644694773792-1024x571.jpg">
                <img
                  src="https://kinsust.org/wp-content/uploads/2022/02/FB_IMG_1644694773792-1024x571.jpg"
                  alt=""
                  className="mx-auto"
                />
              </PhotoView>
            </PhotoProvider>
          </div>
          <div>
            <span className="font-bold text-lg">Our Activities: </span>
            <div className="pl-16">
              <li>
                KIN School strongly believes that it is necessary for a child to
                stay fit in order to get the best out of what he reads. With
                that view, other than their education it also arranges different
                health related programs like free health checkups, free eye
                checkups for the children. On 28th June 2019 , KIN School along
                with ” সাঁকো “ arranged free dental camp for kids where dentists
                from “Shahjalal Microscopic and Endodontic Center” came and gave
                free checkups and advises to the children.
              </li>
              <li>
                Moreover to raise patriotism and moral awareness among children,
                KIN School arranged various educational programs and contests
                for the children on various national days like- International
                Mother Language Day, Independence Day, Victory Day etc.
              </li>
              <li>
                KIN every year celebrates its annual anniversary to mark the day
                of its establishment. Last year on 29th March, KIN School along
                with its students and well-wishers has arranged a cultural
                program and celebrated the day wholeheartedly.
              </li>{" "}
              <li>
                KIN School also provides warm clothes every year during winter
                season among the underprivileged children of the society to make
                sure they are also enjoying the same kind of warmness in cold
                days like other children. Last year on 19th December, KIN School
                provided warm clothes for the 90 students of this school.
              </li>
               
              <li>
                KIN believes in the fact that sharing is caring. That is why
                every year KIN School distributes EID clothes among the poor
                children with a view to mutually share the happiness that EID
                brings in our lives. On 2019 KIN School arranged “KIN ঈদ আনন্দ”
                where it distributed EID clothes among 125 students of KIN
                School.
              </li>
            </div>
            <p className="my-5">
              KIN School discharges its curricular activities every day from
              4:00 pm – 5:00 pm in the room no-131 of IICT Building, SUST. The
              workforce of this school are some young, helpful students of SUST
              who voluntarily come and work for the children wholeheartedly. You
              are also cordially being invited to spend an hour from your busy
              schedule with these poor innocent souls so their belief in
              humanity grows a bit more and they can generalize themselves with
              other privileged children of the society a bit more.
            </p>
          </div>
          <div>
            <p className="font-bold text-lg">Objectives:</p>
            <div className="pl-16 mb-10">
              <li>
                From the very beginning, KIN School is working for both the
                institutional and extra curricular activities of the
                underprivileged children. It also works devotedly for the
                mental, character and moral development of them.
              </li>
              <li>
                It has been providing study materials like pen, pencil, eraser,
                sharpener etc to its students and also monetarily helping its
                students in their need.
              </li>
            </div>
          </div>
        </div>
      </section>
    );
};

export default KinSchool;