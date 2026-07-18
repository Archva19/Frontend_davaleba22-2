import type { NewsItemProps } from "../../types";

export default function NewsItem({newsItem, type}:NewsItemProps) {
  return (
    <>
        <div className = {`h-full w-full flex flex-col`}>
            <img className = {`rounded-tr-2xl rounded-tl-2xl w-full object-cover ${type === "large" ? "h-88" : "h-35.5"}`} src={newsItem.image} alt="" />
            <div className = {`bg-[#020202] rounded-br-2xl rounded-bl-2xl  flex flex-col flex-1 ${type === "large" ? "pt-6 pb-8 pl-8" : "pt-2 pb-3 pl-3"}`}>
                <p className = {`text-[white] ${type === "large" ? "text-[32px] mb-2 pr-5 max-[650px]:text-[20px]" : "text-[13px] mb-1 h-10 pr-12.25 max-[1320px]:pr-1 max-[1280px]:h-auto"}`}>{newsItem.title}</p>
                <div className = {`text-[#797979] flex items-center gap-3 font-light ${type === "large" ? "text-[16px]" : "text-[12px]"}`}>
                    <p>{newsItem.game}</p>
                    <p>{newsItem.date}</p>
                </div>
            </div>
        </div>
    </>
  )
}
