import { images } from "../../arr";

export default function GameList() {
  const gameListBtnStyle =
    "flex items-center justify-center cursor-pointer py-1 px-6 bg-[#606060] rounded-[100px] text-[white]";
  return (
    <>
      <div className="w-[80.55%] m-auto max-w-310 mt-20 flex flex-col items-center mb-[112.15px]">
        <div className="w-full flex items-center justify-between mb-10 max-[1100px]:flex-col max-[1100px]:gap-8 max-[450px]:gap-4 max-[450px]:mb-5">
          <p className="font-bold text-[48px] text-[white] max-[550px]:text-[30px] max-[450px]:text-[20px]">
            Jogos em Destaque
          </p>
          <div className="flex items-center wrap gap-4 max-[550px]:text-[12px] max-[450px]:flex-col">
            <div className = "flex gap-4 items-center">
              <button className={gameListBtnStyle}>PC</button>
              <button className={gameListBtnStyle}>Console</button>
            </div>
            <button className={gameListBtnStyle}>Dispositivos Portáteis</button>
          </div>
        </div>

        <div className="w-full flex flex-wrap items-center justify-center gap-[39.9px] mb-16 max-[550px]:gap-5 max-[325px]:mb-8">
          {images.map((el) => (
            <div key={el.id}>
              <img
                className="max-[700px]:w-50 max-[550px]:w-40 max-[450px]:w-30 max-[325px]:w-25"
                src={el.src}
                alt=""
              />
            </div>
          ))}
        </div>

        <div>
          <button className="text-bold text-[20px] bg-[#FCAF17] py-3.75 px-12 rounded-lg max-[450px]:text-[15px]">
            Ver todos es jogos
          </button>
        </div>
      </div>
    </>
  );
}
