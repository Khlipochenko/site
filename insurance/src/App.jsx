
import { FaShield } from "react-icons/fa6";
import { MdOutlineWatchLater } from "react-icons/md";
import { RiTeamFill } from "react-icons/ri";
import { PiBuildingsBold } from "react-icons/pi";
import { MdCable } from "react-icons/md";
import { MdOutlineLocationOn } from "react-icons/md";
import { FaPhoneAlt } from "react-icons/fa";
import { MdOutlineEmail } from "react-icons/md";
import office from "./assets/office.png";
import './App.css'
import { Insurances } from './components/Insurances';
import { HiOutlineCheck } from "react-icons/hi";
import { RouteButton } from './components/RouteButton';
import { 
  MdDirectionsCar,   // 🚗 ОСАГО
  MdSecurity,        // 🛡 КАСКО
  MdDirectionsBus,   // 🚌 ОСГОП
  MdPublic,          // 🌍 Синяя карта
  MdHome,            // 🏠 Жильё
  MdSportsSoccer,    // 🏃 Спортивное
  MdHealthAndSafety, // 🩺 Несчастный случай
  MdDescription      // 📝 Консультации
} from 'react-icons/md';

function App() {
  
const insurances= [{icon:<MdDirectionsCar />, name: "ОСАГО", description:"Обязательное страхование авто"},
   {icon:<MdSecurity />, name: "КАСКО", description:"Комплексная защита автомобиля"},
  {icon: <MdDirectionsBus />,name: "ОСГОП", description:"Страхование пассажиров"},
  {icon: <MdPublic />,name: "Синяя карта", description:"Страхование за рубежом"},
  {icon:<MdHome />,name: "Жильё", description:"Страхование жилых помещений"},
  {icon:<MdSportsSoccer />,name: "Спортивное", description:"Защита при занятиях спортом"},
  {icon:<MdHealthAndSafety />,name: "Несчастный случай", description:"Личное страхование"},
  {icon:<MdDescription />,name: "Изменения в страховке", description:"Помощь и консультации"},
]


  return (
    <>
    <div className='grid grid-cols-[4fr_1fr]'>
    <div className=' flex flex-col p-2 md:p-4  bg-[#0D4F7A] '>
     <div className='flex  gap-2 text-[#E87722] items-center'> <span><FaShield /></span>< h2 className='uppercase tracking-wider font-medium md:text-2xl '>  Офис страхования </h2></div>
    <h1 className='tracking-wider font-bold text-white  md:text-lg'>г. Себеж</h1>
    <p className='italic text-white/80 text-sm md:text-base '>Надежная защита для вас и вашего имущества</p>
    </div>
<div className='bg-[#E87722] flex flex-col items-center justify-center gap-1 px-2 '>
  <span className='text-white text-2xl'><MdOutlineWatchLater /></span>
<h2 className='text-white uppercase tracking-wider'>круглосуточно</h2>
<p className='text-white text-sm'>Без выходных</p>

</div>
    </div>


 {/* MAIN    */}
<div className=' md:max-w-2/3 m-auto'>
   {/* НАШ ОФИС */}
   <div className=' p-6   '>
<h2 className=' pt-6  tracking-wide font-bold text-3xl text-[#0D4F7A]'>НАШ ОФИС</h2>
<span className="inline-block w-full h-0.5 bg-[#E87722] mt-2 mb-6"></span>
<div className='flex gap-4 flex-wrap md:flex-nowrap md:gap-10'>
<div>
  <img className='w-full' src={office} alt="office"/>
</div>
<div className='min-w-full md:min-w-1/2 text-xl flex flex-col gap-4 md:gap-8'>
  <h2 className='font-medium text-[#E87722]'>АДРЕС И КОНТАКТЫ</h2>
  <div className='flex  '>
    <span className='text-[#0D4F7A] text-xl pt-1.5 pr-2'><MdOutlineLocationOn /></span>
    < p> Псковская обл., Себежский р-н,
     д. Затурье, ул. Загородная, д. 1Б</p>
  </div>
  <div className='flex gap-2 items-center'>
    <span className=' text-[#E87722] '><FaPhoneAlt /></span>
    <a href="tel:89118870227" className='font-medium  text-[#E87722]'> 8-911-887-02-27</a>

  </div>


  <div className='flex gap-2 items-center '>
    <span className=' text-[#E87722] text-xl'><MdOutlineEmail /></span>
    <a  href="mailto:sebezh.ofis.1414@mail.ru" className='font-medium  text-[#E87722]'> sebezh.ofis.1414@mail.ru</a>

  </div>

    <div >
    <div className='flex gap-2 items-center'><span className='text-[#0D4F7A] text-xl'><MdOutlineWatchLater /></span>
    
    <h3 className='font-medium text-[#0D4F7A] '> Режим работы:</h3></div>
   <p>Круглосуточно, без выходных</p>

  </div>

</div></div>

   </div>

   {/* Vorteile */}
   
    <div className='grid grid-cols-1 md:grid-cols-3 text-[#0D4F7A]  p-6   '>
<div className='bg-[#E3F2FD] flex items-center flex-col p-4 pt-6 gap-2 '>
  <span className='text-2xl text-[#E87722]'><RiTeamFill /></span>
  <h3 className=' tracking-wide font-bold md:text-xl text-center'>Опытные специалисты</h3>
  <p className='text-center'>Наши сотрудники с большим опытом работы подберут оптимальные условия именно для вас.</p>
</div>
<div className='flex items-center flex-col p-4 pt-6  gap-2'>
  <span className='text-2xl text-[#E87722] '><PiBuildingsBold /></span>
  <h3  className='font-bold tracking-wide md:text-xl text-center'>Свобода выбора</h3>
  <p className='text-center'>Мы работаем с несколькими компаниями — сравним условия и найдём лучшую цену именно для вас.</p>
  </div>
<div className='bg-[#E3F2FD] flex items-center flex-col p-4 pt-6  gap-2  '>
<span className='text-2xl text-[#E87722]'> <MdCable /></span>
<h3  className='font-bold tracking-wide md:text-xl text-center '>Оптоволокно</h3>
<p className='text-center'>Высокоскоростной интернет в офисе — оформляем полисы быстро и без задержек.</p></div>


  </div>

   {/* ВИДЫ СТРАХОВАНИЯ */}
   <div className=' p-6 '>
<h2 className=' pt-6  tracking-wide font-bold text-3xl text-[#0D4F7A]'>ВИДЫ СТРАХОВАНИЯ</h2>
<span className="inline-block w-full h-0.5 bg-[#E87722] mt-2 mb-6"></span>

<div className='grid grid-cols-1 md:grid-cols-2 md:grid-rows-3 border border-gray-200 auto-rows-auto bg-[#E3F2FD] md:bg-white'>
<Insurances items={insurances}></Insurances>
  </div>

 

  {/* Почему выбирают нас? */}
  <div className='bg-[#E3F2FD] border-l-3 border-l-[#E87722] mt-4 md:mt-15 p-4'>
    <h2 className=' font-bold text-2xl text-[#0D4F7A] pb-4'>Почему выбирают нас?</h2>
    <p>Специалисты с большим опытом подберут оптимальные условия. Работаем с несколькими компаниями — вы всегда можете выбрать лучшее.</p>
  <ul className='font-bold text-[#0D4F7A]'>
    <li className='flex gap-1 items-center'> <HiOutlineCheck /> <span>Проверка КБМ</span></li>
    <li className='flex gap-1 items-center'> <HiOutlineCheck /> <span> Помощь при страховом случае</span></li>
    <li className='flex gap-1 items-center'> <HiOutlineCheck /> <span> Оптоволокно — быстрое оформление</span></li>
  </ul>
  </div> </div>

   {/* Как нас найти */}
  <div className=' p-5 mb-6 ' >
  
 <h2 className='pt-6  tracking-wide font-bold text-3xl text-[#0D4F7A] uppercase'>Как нас найти</h2>  
 <span className="inline-block w-full h-0.5 bg-[#E87722] mt-2 mb-6"></span>
 <div className='flex justify-center md:justify-end pb-6'><RouteButton></RouteButton></div>
 <div className=' flex justify-center bg-amber-200 w-3/4 md:w-full m-auto'>
 <iframe className='h-75 md:h-125'
        src="https://yandex.ru/map-widget/v1/?ll=28.489890%2C56.288776&z=17&pt=28.489890,56.288776,pm2rdm"
        width="100%"
        
        frameBorder="0"
        allowFullScreen={true}
      ></iframe></div>
    </div>  </div>
  {/* FOOTER */}
  <footer className='bg-[#E87722] p-6 min-w-screen'>
    <div className=' text-center '>
      <h2 className='font-bold text-2xl text-white pb-2'>Позвоните нам прямо сейчас</h2>
       <a href="tel:89118870227" className='font-bold text-4xl text-[#0D4F7A]'> 8-911-887-02-27</a>
       <p className='text-white'>Мы работаем круглосуточно</p>

    </div>
  </footer>
    </>
  )
}

export default App
