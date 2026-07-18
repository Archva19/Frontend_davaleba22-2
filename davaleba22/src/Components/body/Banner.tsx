import banner from "../../assets/GTA 6 banner.webp";

export default function Banner() {
  return (
    <>
        <div className = "w-full m-auto">
            <img className = "w-full object-contain" src={banner} alt="" />
        </div>
    </>
  )
}
