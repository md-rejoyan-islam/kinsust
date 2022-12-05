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
      <section className="bg-[#8cadb6] dark:bg-slate-700 dark:text-zinc-300 text-dark">
        {news.length > 0 && (
          <div className="ticker-wrap">
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
      </section>
    );
};

export default NewsTicker;