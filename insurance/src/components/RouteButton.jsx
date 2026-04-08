import { FaCar } from "react-icons/fa";

export const RouteButton=()=> {
  return (
    <a className="inline-block py-2 px-4 bg-[#0D4F7A] text-white "
      href="https://yandex.ru/maps/?rtext=~56.288776,28.489890&rtt=auto"
      target="_blank"
      rel="noopener noreferrer"
      style={{
     
      
        borderRadius: "8px",
        textDecoration: "none",
        fontWeight: "500"
      }}
    >
      <p className="flex  justify-center items-center gap-2 "> <span className="text-[#E87722]"><FaCar /></span>Построить маршрут</p>
    </a>
  );
}