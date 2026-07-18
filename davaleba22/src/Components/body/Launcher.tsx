import Logo from "../../assets/Logo-2.svg";
import launcherImg from "../../assets/launcherImg.webp";


export default function Launcher() {
  return (
    <>
        <div className="w-[80.55%] m-auto max-w-310 mb-23.75 bg-[url('/background-image.svg')] bg-cover bg-center bg-no-repeat pt-8 pb-8 pl-19 rounded-2xl flex items-center justify-between max-[1200px]:flex-col max-[1200px]:px-4 max-[1200px]:gap-8 max-[1200px]:justify-center">
            <div className = "flex flex-col items-start max-[1200px]:items-center max-[1200px]:text-center max-[1200px]:gap-5">
                <div className = "flex items-center gap-[18.24px] mb-8 max-[1200px]:mb-0 max-[350px]:flex-col">
                    <img className = "max-[500px]:w-25" src={Logo} alt="" />
                    <p className = "font-extrabold text-[41.57px] leading-[120%] w-47.5 max-[500px]:text-[25px] max-[500px]:w-auto">Games Launcher</p>
                </div>
                <p className = "text-[32px] font-medium mb-16 max-w-81.5 max-[1200px]:mb-0 max-[400px]:text-[16px]">Todos os seus jogos em um so lugar</p>
                <button className = "bg-[#FCAF17] rounded-lg py-3.75 px-12 font-extrabold text-[20px]">Download</button>
            </div>
            <img className = "max-[1350px]:w-130" src={launcherImg} alt="" />
        </div>
    </>
  )
}
