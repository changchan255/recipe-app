export const Footer = () => {
    return(
        <footer className="mx-5 rounded-xl bg-black grid grid-cols-1 md:grid-cols-2 gap-x-32 text-white px-10 py-10">
            <div className="flex flex-col gap-y-28">
                <div >
                <div className="text-5xl">FLA<span className="text-yellow-500">VORIZ</span></div>
                <p className="mt-5 text-2xl">Join Flavoriz now and embark on a culinary journey to explore, create, and savor amazing recipes!</p>
                </div>
                <p className="mt-10">Copyright © 2025 Flavoriz. All rights reserved.</p>
            </div>
            <div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
                    <div>
                        <h3 className="font-bold text-xl">Company</h3>
                        <p className="mt-3 hover:underline cursor-pointer">Home</p>
                        <p className="mt-3 hover:underline cursor-pointer">About Us</p>
                        <p className="mt-3 hover:underline cursor-pointer">Recipes</p>
                        <p className="mt-3 hover:underline cursor-pointer">Recipe Form</p>
                    </div>
                    <div>
                        <h3 className="font-bold text-xl">Recipes</h3>
                        <p className="mt-3 hover:underline cursor-pointer">Appetizers</p>
                        <p className="mt-3 hover:underline cursor-pointer">Main Courses</p>
                        <p className="mt-3 hover:underline cursor-pointer">Deserts & Sweets</p>
                        <p className="mt-3 hover:underline cursor-pointer">International Flavors</p>
                    </div>
                    <div>
                        <h3 className="font-bold text-xl">Contact</h3>
                        <p className="mt-3 hover:underline cursor-pointer">Instagram</p>
                        <p className="mt-3 hover:underline cursor-pointer">Facebook</p>
                        <p className="mt-3 hover:underline cursor-pointer">Twitter</p>
                        <p className="mt-3 hover:underline cursor-pointer">LinkedIn</p>
                    </div>
                </div>

                <div className="mt-16 flex justify-between gap-3">
                    <input type="text" placeholder="Enter your email" className="rounded-full w-full py-5 px-6"/>
                    <button className="bg-yellow-500 text-white rounded-full px-8 py-5">Signup</button>
                </div>
            </div>
        </footer>
    )
}