import { FaLinkedinIn } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaTelegramPlane } from "react-icons/fa";




export const headerMenuData = [
    {
    path : "#about" ,
    title : "درباره من"
    } , 
    {
        path : "#skills" , 
        title : "مهارت ها"
    } , 
    {
        path : "#projects" ,
        title : "پروژه ها"
    } ,
    {
        path : "#contact" , 
        title : "ارتباط با من"
    }
]

 export const icons = [
    {
        logo : <FaGithub/> ,
        href : "https://github.com/amiralighabraei"
    } , 
    {
        logo : <FaTelegramPlane/> ,
        href : "https://t.me/Amir_ghbr"
    }
 ]


export const currentFocus = [
    "توسعه اپلیکیشن با React" ,
    "طراحی رابط کاربری ریسپانسیو" ,
    "معماری کامپوننت‌ محور" ,
    "اتصال به Rest API و مدیریت داده ها" ,
    "توجه به جزئیات بصری و تجربه کاربری(UX)"
] 

export const skillsdata = [
  {
    title: "React",
    description: "توسعه رابط‌های کاربری کامپوننت‌محور",
  },
  {
    title: "JavaScript",
    description: "پیاده‌سازی منطق و تعاملات صفحات",
  },
  {
    title: "Tailwind CSS",
    description: "طراحی سریع و واکنش‌گرای رابط کاربری",
  },
  {
    title: "REST API",
    description: "دریافت و مدیریت داده‌های داینامیک",
  },
  {
    title: "Git & GitHub",
    description: "مدیریت نسخه و نگهداری پروژه‌ها",
  },
];

export const projectData = [
    {
        id : 1 ,
        title : "Cinemax | وب‌سایت نمایش و جست‌وجوی فیلم" ,
        img : "./images/Cinemax.png" ,
        description : "وب‌سایتی برای کشف و بررسی فیلم‌ها با استفاده از API پایگاه داده‌ی TMDB. برای بارگذاری اطلاعات و تصاویر فیلم‌ها، ممکن است به VPN نیاز داشته باشید." ,
        href : "https://cinemax-weld-chi.vercel.app/" ,
        tools : "ReactJS-Tailwind css-Rest API" ,
        github : "https://github.com/amiralighabraei/Cinemax"
    } ,
     
]


export const stepsData = [
  {
    id: 1,
    title: "کشف و تحلیل",
    description:
      "شناخت اهداف پروژه، بررسی نیازها و تعیین ساختار و مسیر اجرای محصول.",
  },
  {
    id: 2,
    title: "طراحی",
    description:
      "تعریف هویت بصری، انتخاب الگوهای طراحی و شکل‌دهی تجربه کاربری پیش از توسعه.",
  },
  {
    id: 3,
    title: "توسعه",
    description:
      "پیاده‌سازی رابط کاربری با React و ساخت تجربه‌ای تعاملی، واکنش‌گرا و منسجم.",
  },
  {
    id: 4,
    title: "بازبینی و بهبود",
    description:
      "بررسی عملکرد و جزئیات رابط، رفع ایرادها و اعمال اصلاحات برای ارتقای کیفیت محصول.",
  },
];
