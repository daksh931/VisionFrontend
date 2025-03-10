import { Link } from "react-router-dom";

export default function Button(props) {
  return (
    
      <Link
        to={`${props.to}`}
        className={`align-middle min-h-8 duration-300 select-none font-serif font-thin text-center uppercase transition-all disabled:opacity-50  text-xs py-2 px-4 rounded-md bg-white  text-black hover:text-gray-800 shadow-md hover:shadow-lg hover:shadow-white/10 active:opacity-[0.55] border-[1px] border-gray-300 hover:border-gray-100 text-nowrap	 mx-2  ${props.style}`}
        type={`${props.type}:"button"`}
      >
        {props.children}
      </Link>
    
  );
}
