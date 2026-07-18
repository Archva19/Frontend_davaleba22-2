import { Link } from "react-router-dom";
import logo from "../../assets/Logo-3.svg";
import { socials } from "../../arr";
import { footerBtns } from "../../arr";

export default function Footer() {
  return (
    <>
      <footer className="bg-[#020202] py-22.75 px-35 flex items-center justify-between max-[1050px]:items-start max-[750px]:px-20 max-[750px]:flex-col max-[750px]:gap-6">
        <div className="flex gap-10 max-[1050px]:flex-col">
          <Link to="/" className="cursor-pointer shrink-0">
            <img className = "w-14 h-15"src={logo} alt="" />
          </Link>
          <div className="flex flex-col gap-2 text-[#B1B1B1] max-[1050px]:gap-6">
            <div className="flex gap-6 font-medium max-[1050px]:flex-col max-[1050px]:items-start">
              {footerBtns.map((btn) => (
                <button key={btn.id} className="cursor-pointer">
                  {btn.title}
                </button>
              ))}
            </div>
            <p className="font-light">
              ©2023 Rockstar Games, Inc. - YWR Studio.
            </p>
          </div>
        </div>
        <div className="flex gap-8 items-center max-[750px]:flex-wrap">
          {socials.map((el) => (
            <a className="cursor-pointer" href={el.href} key={el.id}>
              <img src={el.iconSrc} alt={el.alt} />
            </a>
          ))}
        </div>
      </footer>
    </>
  );
}
