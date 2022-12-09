import { useQuery } from '@tanstack/react-query';

import React from 'react';
import { Link} from 'react-router-dom';
import "./NewsTicker.css"

const NewsTicker = () => {
 const { data: news = [] } = useQuery({
   queryKey: ["news"],
   queryFn: () =>
     fetch(
       `https://kin-server-side-rejoyanislam.vercel.app/api/v1/news-ticker`
     ).then((res) => res.json()),
 });

    return (
      <section className="bg-[#bae5fd48] dark:bg-[rgb(32,44,76)] dark:text-white text-dark h-fit overflow-hidden ">
        <div className="max-w-screen-2xl mx-auto">
          {news.length > 0 && (
            <div className="ticker-wrap overflow-hidden">
              <div className="ticker">
                <div className="ticker__headline">
                  <Link
                    to={news[0].fb_url}
                    target="_blank"
                    className="cursor-pointer"
                  >
                    {news[0]?.title}
                  </Link>
                </div>
                <div className="ticker__headline">
                  <Link to={news.fb_url}>{news[0]?.title}</Link>
                </div>
                <div className="ticker__headline">
                  <Link to={news.fb_url}>{news[0]?.title}</Link>
                </div>
                <div className="ticker__headline">
                  <Link to={news.fb_url}>{news[0]?.title}</Link>
                </div>
                <div className="ticker__headline">
                  <Link to={news.fb_url}>{news[0]?.title}</Link>
                </div>
              </div>
            </div>
          )}
        </div>
      </section>
    );
};

export default NewsTicker;