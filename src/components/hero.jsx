import { LuChefHat } from "react-icons/lu";
import { LuUserRound } from "react-icons/lu";
import { LuHeart } from "react-icons/lu";
import { FaCircleHalfStroke } from "react-icons/fa6";
import { FaPlay } from "react-icons/fa";
import { FaArrowRightLong } from "react-icons/fa6";

export const Hero = () => {
    return(
        <>
        <section className="flex-grow">
            <div className="px-12">
            <div className="w-full h-[500px] bg-[url('/public/hero.jpg')] bg-cover bg-center px-24 py-14 rounded-2xl grid grid-cols-2 gap-x-10">
            <div>
            <h1 className="text-7xl font-bold">Adventure <ul className="text-yellow-400">of Delicacies</ul></h1>
            <h3 className="mt-6 text-2xl text-gray-500">Unlock a world of variety culinary recipes and unleash your inner chef the easy way with Flavoriz.</h3>
            <div className="mt-24">
                <button className="group bg-black text-white text-lg rounded-full px-6 py-3 flex justify-center items-center gap-3 hover:bg-yellow-500 hover:text-black hover:scale-105 active:translate-y-1 transistion-all duration-300">Explore Recipes 
                    <span className="bg-white w-7 h-7 text-black rounded-full flex justify-center items-center transistion-color duration-300 group-hover:text-yellow-500"><LuChefHat size={25}/></span></button>
            </div>
            </div>
                
            </div>

            <div className="flex flex-col sm:flex-row gap-x-10 mt-10">
                <div className="bg-primary rounded-2xl px-10 py-5">
                    <div className="grid grid-cols-3 gap-8">
                    <div>
                        <div className="bg-white text-black w-7 h-7 rounded-full flex justify-center items-center"><LuUserRound size={23}/></div>                       
                        <h3 className="mt-8 font-bold">User-Center</h3>
                        <p className="mt-2 text-gray-500">Your feedback shapes our platform, ensuring a seamless and satisfying culinary journey.</p>
                    </div>
                    <div>
                    <div className="bg-white text-black w-9 h-9 rounded-full flex justify-center items-center"><FaCircleHalfStroke size={23}/></div>
                        <h3 className="mt-8 font-bold">Diverse Recipes</h3>
                        <p className="mt-2 text-gray-500">We celebrate diverse culinary traditions from around the world, inspiring you today.</p>
                    </div>
                    <div>
                    <div className="bg-white text-black w-9 h-9 rounded-full flex justify-center items-center"><LuHeart size={23}/></div>
                    <h3 className=" mt-8 font-bold">Fun Community</h3>
                    <p className="mt-2 text-gray-500">We foster a vibrant foodie community where joy comes with  sharing recipes with us.</p>
                    </div>
                    </div>
                   
                </div>
                <div className="basis-full grid grid-cols-2 gap-5">
                    <div className="">
                        <img src="/mexifood.jpg" alt="mexican food" className="w-full h-[175px] object-cover rounded-2xl"/>
                        <div className="mt-5 flex items-center justify-center gap-3">
                        <FaPlay size={16}/>
                        <p className="text-sm">0:00/1:34</p>
                        <div className="bg-yellow-500 w-full h-1 rounded-full"></div>
                        </div>
                    </div>
                    <div className="p-5 font-bold"> 
                        <a href="">
                        <h3 className="text-lg text-yellow-500 ">FEATURED</h3>
                        <h2 className="text-2xl pr-5">Spicy Beef Mexican Tacos</h2>
                        <p className="mt-20 inline-flex items-center relative cursor-pointer group">See Recipe
                            <span className="absolute left-0 -bottom-1 bg-black w-0 h-[0.8px] group-hover:w-28 transistion-all duration-300"></span>
                            <span className="ml-2 text-black opacity-0 translate-x-[-4px] group-hover:opacity-100 transistion-all duration-300 translate-x-0"><FaArrowRightLong size={16}/></span>
                        </p>
                        </a>
                    </div>
                </div>
            </div>
            </div>
        </section>
        </>
    );
}