import { LuChefHat } from "react-icons/lu";
import { CiGlobe } from "react-icons/ci";
import { LuUserRound } from "react-icons/lu";
import { IoMdTime } from "react-icons/io";
import { CiStar } from "react-icons/ci";

export const Recipe = () => {
    return(
        <>
        <section className="flex-grow">
         <div className="px-12">
                    <div className="w-full h-[500px] bg-[url('https://framerusercontent.com/images/uPa5gLmmWxU7jOU1uLZfopDAGhY.png')] bg-cover bg-center px-12 py-14 rounded-2xl grid grid-cols-2">
                    <div className="pt-24">
                    <h3 className="mt-6 text-2xl text-gray-500">Let's Cook</h3>
                    <h1 className="text-8xl font-bold">Mango Tango Smoothie</h1>
                    
                    </div>                       
                    </div>
                    </div>

        <div className="px-12 mt-12">
            <div className="grid md:grid-cols-5 grid-cols-1 gap-x-7">
                <div>
                 <div className="flex items-center gap-3">
                        <CiGlobe className="bg-orange-100 text-orange-300 rounded-full p-3" size={50}/>
                            <div>
                                <h3 className="text-gray-500 text-lg">Cuisine</h3>
                                <p className="font-bold text-xl">Drinks & Beverages</p>
                            </div>
                </div>
                </div>

                 <div>
                 <div className="flex items-center gap-3">
                        <LuUserRound className="bg-orange-100 text-orange-300 rounded-full p-3" size={50}/>
                            <div>
                                <h3 className="text-gray-500 text-lg">Servings</h3>
                                <p className="font-bold text-xl">1 Person</p>
                            </div>
                </div>
                </div>

                <div>
                 <div className="flex items-center gap-3">
                        <IoMdTime className="bg-orange-100 text-orange-300 rounded-full p-3" size={50}/>
                            <div>
                                <h3 className="text-gray-500 text-lg">Prep Time</h3>
                                <p className="font-bold text-xl">5 minutes</p>
                            </div>
                </div>
                </div>

                <div>
                 <div className="flex items-center gap-3">
                        <LuChefHat className="bg-orange-100 text-orange-300 rounded-full p-3" size={50}/>
                            <div>
                                <h3 className="text-gray-500 text-lg">Cook Time</h3>
                                <p className="font-bold text-xl">-</p>
                            </div>
                </div>
                </div>

                <div>
                 <div className="flex items-center gap-3">
                        <CiStar className="bg-orange-100 text-orange-300 rounded-full p-3" size={50}/>
                            <div>
                                <h3 className="text-gray-500 text-lg">Difficulty</h3>
                                <p className="font-bold text-xl">Easy Level</p>
                            </div>
                </div>
                </div>
            </div>
        </div>
        </section>

        <section className="mt-12 p-12"> 
            <div className="flex flex-col sm:flex-row gap-x-10">
                <div className="">
                    <p className="text-lg text-gray-500">Our Mango Tango Smoothie is a delightful concoction designed to invigorate your senses and provide a nutritious boost. At the heart of this smoothie are luscious, ripe mangoes, celebrated for their naturally sweet and succulent flesh. Rich in vitamins A and C, mangoes are a powerhouse of antioxidants, promoting healthy skin and a strong immune system.</p>
                    <div className="mt-5">
                        <div>
                            <h3>Tags</h3>
                            <p className="text-orange-500 font-bold">Beverages Mango Quick & Easy Supper Healthy Eats</p>
                        </div>
                    </div>

                    <div className="shadow-md rounded-2xl bg-white p-10 mt-10">
                        <h3 className="font-bold text-xl">Ingredients</h3>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-5 mt-5 text-xl text-gray-500">
                            <div>
                                <p>2 ripe mangoes, peeled and chopped</p>
                                <p>1 cup plain Greek yogurt</p>
                                <p>1/2 cup orange juice</p>
                            </div>
                            <div>
                                <p>1/2 cup almond milk (or any milk of your choice)</p>
                                <p>1 tbsp honey or maple syrup (optional)</p>
                                <p>Ice cubes (optional)</p>
                            </div>
                        </div>
                    </div>


                    <div className="mt-10">
                        <h1 className="font-bold text-4xl">Cooking <span className="text-orange-400">Instructions</span></h1>
                        <div className="mt-5">
                            <div className="bg-gray-100 rounded-2xl p-5 mt-5">
                                <div className="flex items-center justify-start gap-3">
                                    <h3 className="text-3xl text-orange-400 font-bold">01</h3>
                                    <p className="text-gray-500 text-xl">Place the chopped mangoes, Greek yogurt, orange juice, almond milk, and honey (if using) in a blender.</p>
                                </div>
                            </div>

                            <div className="bg-gray-100 rounded-2xl p-5 mt-5">
                                <div className="flex items-center justify-start gap-3">
                                    <h3 className="text-3xl text-orange-400 font-bold">02</h3>
                                    <p className="text-gray-500 text-xl">Blend on high speed until smooth and creamy.</p>
                                </div>
                            </div>

                            <div className="bg-gray-100 rounded-2xl p-5 mt-5">
                                <div className="flex items-center justify-start gap-3">
                                    <h3 className="text-3xl text-orange-400 font-bold">03</h3>
                                    <p className="text-gray-500 text-xl">If desired, add ice cubes and blend again until the smoothie reaches your desired consistency.</p>
                                </div>
                            </div>

                            <div className="bg-gray-100 rounded-2xl p-5 mt-5">
                                <div className="flex items-center justify-start gap-3">
                                    <h3 className="text-3xl text-orange-400 font-bold">04</h3>
                                    <p className="text-gray-500 text-xl">Pour the smoothie into glasses and serve immediately.</p>
                                </div>
                            </div>

                            <div className="bg-gray-100 rounded-2xl p-5 mt-5">
                                <div className="flex items-center justify-start gap-3">
                                    <h3 className="text-3xl text-orange-400 font-bold">05</h3>
                                    <p className="text-gray-500 text-xl">Enjoy the refreshing and tropical flavors of the Mango Tango Smoothie!</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="mt-10">
                    <h1 className="font-bold text-4xl">Cooking <span className="text-orange-400">Reviews</span></h1>
                    <div className="mt-5">
                        <div className="flex items-center justify-center gap-5">
                            <div className="w-[350px] h-[227px] bg-[url('https://framerusercontent.com/images/9AD9JTA4Y9KX88UXHOnBVHM.jpg?scale-down-to=512')] bg-cover bg-center rounded-2xl"></div>
                            <div>
                                <h3 className="text-5xl text-orange-400 font-bold">"</h3>
                                <p className="text-2xl text-gray-500"> It's a great way to enjoy a healthy snack or a light meal. I loved how easy it was to prepare and how satisfying it was. I'll definitely be making this smoothie regularly!</p>
                                <div className="flex items-center justify-start gap-5 mt-5">
                                    <img className="rounded-full w-10 h-10" src="https://framerusercontent.com/images/oDpGaeXbBqrFlSzX0gC2tqUpW0.jpg?scale-down-to=512"></img>
                                    <div>
                                        <h3 className="text-lg font-bold">Ethan Rodriguez</h3>
                                        <p className="text-lg text-gray-500">April 5, 2025</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    </div>
                </div>

                
                <div className="">
                    <div className="relative cursor-pointer">
                        <img className="w-full h-full object-cover rounded-3xl" src="https://framerusercontent.com/images/Xqg5UhsHqYpwcmVIGHtJlTL71I.png"></img>
                        <div className="absolute bottom-0 left-0 w-full h-full bg-gradient-to-t from-orange-400 to-transparent rounded-3xl p-5 pointers-events-none">
                            <div className="absolute bottom-4 p-5">
                                <h3 className="text-white text-lg">Recipe By</h3>
                                <p className="text-white text-2xl font-bold">Chef Olivia Johnson</p>
                            </div>                           
                        </div>
                     </div>

                     <div className="bg-gray-100 rounded-2xl p-7 mt-10">
                        <h3 className="font-bold text-2xl">Nutritional Info</h3>
                        <div className="text-gray-500 text-lg mt-5">
                            <p>Calories: 220</p>
                            <p>Protein: 10g</p>
                            <p>Fat: 2g</p>
                            <p>Carbohydrates: 45g</p>
                            <p>Fiber: 5g</p>
                            <p>Sugars: 35g</p>
                        </div>
                     </div>

                      <div className="relative cursor-pointer">
                        <img className="w-full h-full object-cover rounded-3xl mt-10" src="https://framerusercontent.com/images/iXL9Wpcar8N42V1YwsMFa9kAc9k.png"></img>
                        <div className="absolute top-4 right-4 z-10">
                            <div className="text-yellow-500 text-xl font-bold">FLA
                                <span className="text-black">VORIZ</span></div>
                        </div>         
                        <div className="absolute bottom-0 left-0 w-full h-full bg-gradient-to-t from-orange-400 to-transparent rounded-3xl p-5 pointers-events-none">
                            <h3 className="absolute bottom-14 text-white font-bold text-4xl p-5">Let’s Get into Cooking!</h3>
                            <div className="absolute bottom-4 mt-5">
                                <button className="group bg-black text-white text-lg rounded-full px-10 py-3 flex justify-center items-center gap-3 hover:bg-yellow-500 hover:text-black hover:scale-105 active:translate-y-1 transistion-all duration-300">Explore Recipes 
                                <span className="bg-white w-7 h-7 text-black rounded-full flex justify-center items-center transistion-color duration-300 group-hover:text-yellow-500"><LuChefHat size={25}/></span></button>
                            </div>
                        </div>
                        </div>
                </div>
            </div>
        </section>
        </>
    );
}