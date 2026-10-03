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
        logo : <FaLinkedinIn/> ,
        href : "https://www.linkedin.com/in/amirali-ghabraei-33ab38440/?isSelfProfile=false"
    } ,
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
    "اپلیکیشن های ریکتی" ,
    "رابط کاربری ریسپانسیو" ,
    "کامپوننت  محور" ,
    "UI مدرن"
] 

export const skillsdata = [
    "React",
  "JavaScript",
  "Tailwind CSS",
  "Bootstrap",
  "REST API",
  "Git",
  "GitHub",

]

export const projectData = [
    {
        id : 1 ,
        title : "a" ,
        img : "1" ,
        description : "lorem1" ,
        href : "#" ,
        tools : "React"
    } ,
     {
        id : 2 ,
        title : "b" ,
        img : "1" ,
        description : "lorem1" ,
        href : "#" ,
        tools : "React"
    } ,
     {
        id : 3 ,
        title : "c" ,
        img : "1" ,
        description : "lorem1" ,
        href : "#" ,
        tools : "React"
    }
]

export const workSteps = [
  {
    id: 1,
    title: "کشف",
    description: "درک هدف پروژه و تعریف ساختار",
  },
  {
    id: 2,
    title: "طراحی",
    description: "طراحی یک سیستم بصری پیش از نوشتن کد UI",
  },
  {
    id: 3,
    title: "توسعه",
    description: "تبدیل طرح به یک وب‌سایت تعاملی",
  },
  {
    id: 4,
    title: "اصلاح",
    description: "بررسی، تغییر و اصلاح پروژه بر اساس بازخورد",
  },
];