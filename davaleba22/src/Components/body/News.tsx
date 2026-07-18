import { useEffect, useState } from "react";
import { news } from "../../arr";
import NewsItem from "./NewsItem";

export default function News() {
  const [isMobile650, setIsMobile650] = useState(window.innerWidth <= 650);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile650(window.innerWidth <= 650);
    };

    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <>
      <div className="w-[80.55%] m-auto max-w-310 mb-28">
        <p className="font-bold text-5xl text-[white] mb-10 max-[450px]:text-[30px]">
          Últimas Notícias
        </p>
        <div className="flex gap-10 max-[1280px]:flex-col">
          <div className="w-[74.13%] max-[1280px]:w-full">
            <NewsItem newsItem={news[0]} type={isMobile650 ? "small" : "large"} />
          </div>
          <div className="flex flex-col justify-between w-[22.41%] gap-10 max-[1280px]:flex-row max-[1280px]:w-full max-[650px]:flex-col">
            <div className="flex-1 max-[1280px]:w-[48%] max-[650px]:w-full">
              <NewsItem
                newsItem={news[1]}
                type="small"
              />
            </div>

            <div className=" max-[1280px]:flex-1 max-[1280px]:w-[48%] max-[650px]:w-full">
              <NewsItem
                newsItem={news[2]}
                type="small"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
