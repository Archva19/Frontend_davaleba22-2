import { useEffect } from "react";
import rightArrow from "../../assets/rightArrow.svg";
import closeIcon from "../../assets/closeIcon.svg";
import type { SideMenuProps } from "../../types";


export default function SideMenu({ menuVis, closeFun }:SideMenuProps) {
  useEffect(() => {
    if (menuVis) {
      document.body.classList.add("overflow-hidden");
    } else {
      document.body.classList.remove("overflow-hidden");
    }
    return () => document.body.classList.remove("overflow-hidden");
  }, [menuVis]);

  return (
    <>
      <div className="flex flex-col fixed top-0 bottom-0 right-0 left-0 w-full h-full bg-[#101010] pt-10 px-12 gap-5 text-[#B1B1B1] text-[18px]">
        <button onClick={() => closeFun()} className="w-6 cursor-pointer">
          <img src={closeIcon} alt="" />
        </button>
        <a className="flex items-center justify-between cursor-pointer hover:text-[white]">
          <p>Jogos</p>
          <div className="flex gap-4 items-center text-[white]">
            <p>View All</p>
            <img src={rightArrow} alt="" />
          </div>
        </a>
        <a className = "cursor-pointer hover:text-[white]">Loja</a>
        <a className = "cursor-pointer hover:text-[white]">Ajuda</a>
      </div>
    </>
  );
}
