import logo from "../../assets/Logo.svg";
import arrow from "../../assets/arrow_drop_down.svg";
import search from "../../assets/search.svg";
import person from "../../assets/person.svg";
import sandwich from "../../assets/sandwich.svg";
import { useState } from "react";
import SideMenu from "./SideMenu";
import { Link } from "react-router-dom";

export default function Header() {
  const [menuVis, setMenuVis] = useState(false);
  const navItemStyle =
    "flex items-center gap-[6px] text-[white] font-medium cursor-pointer group";
  const headBtnStyle =
    "w-12 h-12 bg-[#5A5A5A] flex items-center justify-center rounded-[50%] cursor-pointer max-[750px]:w-10 max-[750px]:h-10";
  return (
    <>
      <header className="bg-[#020202] flex items-center justify-between px-35 py-7.25 max-[1000px]:px-10 max-[750px]:px-8">
        <div className="flex gap-11.75 items-center max-[750px]:gap-8 max-[600px]:gap-0">
          <button
            onClick={() => setMenuVis(true)}
            className="hidden max-[600px]:inline-block cursor-pointer"
          >
            <img src={sandwich} alt="" />
          </button>
          <Link to="/" className="cursor-pointer">
            <img
              className="max-[750px]:w-10 max-[600px]:hidden"
              src={logo}
              alt=""
            />
          </Link>
          <nav className="flex items-center gap-6 max-[600px]:hidden">
            <a className={navItemStyle}>
              <p>Jogos</p>
              <img src={arrow} className = "group-hover:rotate-180 transition duration-150 ease-in-out"alt="" />
            </a>
            <a className={navItemStyle}>Loja</a>
            <a className={navItemStyle}>Ajuda</a>
          </nav>
        </div>

        <Link to="/" className="cursor-pointer">
          <img
            className="hidden w-10 max-[600px]:inline-block"
            src={logo}
            alt=""
          />
        </Link>

        <div className="flex items-center gap-10">
          <button className="bg-[#FCAF17] py-2.75 px-4 font-medium text-[20px] rounded-lg cursor-pointer max-[750px]:hidden">
            Baixe o Launcher
          </button>
          <div className="flex gap-6">
            <button className={headBtnStyle}>
              <img src={search} alt="" />
            </button>
            <button className={headBtnStyle}>
              <img src={person} alt="" />
            </button>
          </div>
        </div>
      </header>
      {menuVis ? (
        <SideMenu menuVis={menuVis} closeFun={() => setMenuVis(false)} />
      ) : null}
    </>
  );
}
