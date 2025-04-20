import { LuChefHat } from "react-icons/lu";
import { LuUserRound } from "react-icons/lu";
import { LuHeart } from "react-icons/lu";
import { FaCircleHalfStroke } from "react-icons/fa6";
import { FaPlay } from "react-icons/fa";
import { FaArrowRightLong } from "react-icons/fa6";
import { PiKnifeLight } from "react-icons/pi";
import { MdLiveTv } from "react-icons/md";
import { BiDish } from "react-icons/bi";
import { FaClock } from "react-icons/fa6";

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

        <section className="mt-12 mx-12">
            <div className="">
                <h3 className="text-5xl font-bold text-center ">Become a true <span className="text-yellow-500">chef</span><ul>with our recipes.</ul></h3>
                <p className="mt-3 text-xl text-gray-500 text-center">We are a home to variety of recipes<ul>world wide for you to learn.</ul></p>                
            </div>
            <div className="grid grid-cols-4 gap-5 mt-12">
                <div className="mt-16 bg-[url('https://framerusercontent.com/images/KOKKHl5aPTDYEH2gUtjgjMyB2I.png?scale-down-to=1024')] bg-cover bg-center rounded-3xl h-80 relative">
                <div>
                <LuChefHat className="absolute top-4 right-4 bg-black text-white p-2 rounded-full shadow-md" size={35}/>
                <div className="flex justify-content items-center gap-2 bg-white rounded-3xl shadow-md text-gray-800 absolute bottom-4 left-4 py-1 px-2"> <span className="flex justify-content items-center bg-orange-100 text-orange-300 rounded-full p-2"><PiKnifeLight size={20}/></span>Easy to follow recipes</div>
                </div>
                </div>
                <div className="bg-orange-400 rounded-3xl h-72 mt-32">
                    <div className="py-16 px-8">
                    <h1 className="text-white text-4xl font-bold">"Cooking has never been this easy"!</h1>
                    <div className="mt-5 flex items-center gap-3">
                        <img className="w-10 h-10 object-cover" src="https://framerusercontent.com/images/P62zYS44ywQITCMHRRdwvgy6AmU.png"></img>
                        <div>
                            <h3 className="text-white font-bold text-xl">Marsha Rianty</h3>
                            <p className="text-white">Master Chef 2023</p>
                        </div>
                    </div>
                    </div>                  
                </div>
                <div className="bg-gray-100 rounded-3xl h-72 mt-40 hover:scale-105 transistion-all duration-300">
                    <div className="m-5">
                        <div className="bg-white rounded-2xl h-full w-full p-3 hover:bg-gray-100 transistion-all duration-300 cursor-pointer">
                            <div className="flex items-center gap-3">
                                <MdLiveTv className="bg-orange-100 text-orange-300 rounded-full px-2 py-3" size={50}/>
                                <div>
                                <h3 className="font-bold">Watch Now</h3>
                                <p className="text-gray-500">Cook with Chef Johnson</p>
                                </div>
                            </div>

                        </div>
                        <div className="bg-white rounded-2xl h-full w-full mt-3 p-3 hover:bg-gray-100 transistion-all duration-300 cursor-pointer">
                            <div className="flex items-center gap-3">
                                <BiDish className="bg-orange-100 text-orange-300 rounded-full px-2 py-3" size={50}/>
                                <div>
                                <h3 className="font-bold">Today's Recipe</h3>
                                <p className="text-gray-500">Caprese Salad Skewers</p>
                                </div>
                            </div>

                        </div>
                        <div className="bg-white rounded-2xl h-full w-full mt-3 p-3 hover:bg-gray-100 transistion-all duration-300 cursor-pointer">
                            <div className="flex items-center gap-3">
                                <LuChefHat className="bg-orange-100 text-orange-300 rounded-full px-2 py-3" size={50}/>
                                <div>
                                <h3 className="font-bold">Contribute Now</h3>
                                <p className="text-gray-500">Share your special recipe!</p>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
                <div className="relative cursor-pointer">
                   
                    <video className="rounded-3xl object-cover h-[466px] w-full" src="https://framerusercontent.com/assets/ufTWNcW7c0eYOfAV6OynHuzEaDo.mp4" autoPlay loop muted preload="auto"/>
                    <button className="group bg-white text-black rounded-3xl px-3 py-2 absolute top-4 right-4 z-10 flex justify-center items-center gap-3 hover:bg-black hover:text-white transistion-all duration-300" href=""><MdLiveTv className="bg-orange-100 text-orange-300 rounded-full px-1 group-hover:bg-orange-500 group-hover:text-white transition-all duration-300" size={25}/> Watch Now</button>
                    <div className="absolute bottom-0 left-0 w-full h-full bg-gradient-to-t from-orange-400 to-transparent rounded-3xl p-5 pointers-events-none">
                    <h3 className="absolute bottom-4 text-white font-bold text-4xl p-5">Cook with Master Chefs</h3>
                    </div>
                </div>
            </div>
        </section>

        <section className="mt-12 mx-12">
            <div className="mt-40 w-full h-[666px] bg-[url('https://framerusercontent.com/images/ZKztGxPALx9VM5DXgXlZ35WIFiA.jpg')] bg-cover bg-center rounded-3xl">
                <div className="w-[60%] ml-[40%] relative">
                    <div className="absolute top-8 right-8">
                    <button className="group bg-black text-white rounded-full px-12 py-3 flex justify-center items-center relative">
                        <span className="text-white group-hover:translate-x-[-6px] transistion-all duration-300">See Details</span>
                        <span className="absolute right-7 text-orange-500 opacity-0 translate-x-[-6px] group-hover:opacity-100 transistion-all duration-300 translate-x-0"><FaArrowRightLong size={16}/></span>
                    </button>
                    </div>
                    <div className="absolute mt-40">
                    <h1 className="text-[80px] font-bold">Spicy Beef Mexican Tacos</h1>
                    <h3 className="text-gray-500 text-xl">This mouthwatering dish combines juicy, seasoned beef with the vibrant flavors of traditional Mexican cuisine. </h3>
                    <div className="mt-32 flex items-center justify-start gap-5">
                        <div className="flex justify-center items-center gap-3">
                            <FaClock size={35}/>
                            <p className="text-lg">15 minutes</p>
                        </div>
                        <div className="flex justify-center items-center gap-3">
                            <LuChefHat size={35}/>
                            <p className="text-lg">Chef Maria Rodriguez</p>
                        </div>
                    </div>
                </div>
                </div>
                
            </div>
        </section>
        </>
        
    );
}