import { LuChefHat } from "react-icons/lu";

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
            </div>
        </section>
        </>
    );
}