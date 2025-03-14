import { CiSearch } from "react-icons/ci";

export const Header = () => {
    return(
        <>
        <header className="w-full flex items-center bg-white shadow-md fixed top-0 z-50 px-5 py-6">
            <div className="pl-10">
                <div className="text-yellow-500 text-2xl font-bold">FLA
                    <span className="text-black">VORIZ</span></div>
             </div>

            <div className="flex-1 flex justify-center -ml-12 mr-5">
                <nav className=" flex gap-12">
                <a href="#" className="text-xl hover:text-yellow-500">HOME</a>
                <a href="#" className="text-xl hover:text-yellow-500">ABOUT</a>
                <a href="#" className="text-xl hover:text-yellow-500">RECIPES</a>
                <a href="#" className="text-xl hover:text-yellow-500">RECIPE FORM</a>
                <a href="#" className="text-xl hover:text-yellow-500">CONTACT</a>
            </nav>
           </div>
           <div className="pr-10">
            <CiSearch size={23}/>
           </div>
           
        </header>
        </>
    );
};