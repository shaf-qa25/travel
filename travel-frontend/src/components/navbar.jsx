import react from "react"
import { NavLink } from "react-router-dom"

export const Navbar = () => {
    return (
        <>

            <nav className="fixed top-6 left-0 right-0 z-50 ">
                
                <div className="mx-auto bg-white/80 rounded-4xl p-4 w-3/4 max-w-5xl z-50 relative">
                    <div className="flex justify-between items-center border rounded-4xl bg-primary-green/80 p-4  mx-auto  backdrop-blur-md shadow-lg ">
                        <div>
                            <h1 className="text-4xl underline">GooMo</h1>
                        </div>
                        <NavLink to="/destinations" className={({isActive})=>`px-5 py-2 transition-all duration-300 rounded-4xl border-2 ${
                            isActive ? 'border-[#AFD8FE]  bg-[#9A3412]/70 text-emerald-900 ' 
                            :
                            ' border-transparent hover:border-[#AFD8FE] hover:bg-[#9A3412]/60'
                        }`}>
                            Destinations
                        </NavLink>
                        <NavLink to="/destinations" className={({isActive})=>`px-5 py-2 transition-all duration-300 rounded-4xl border-2 ${
                            isActive ? 'border-[#AFD8FE]  bg-[#9A3412]/70 text-emerald-900 ' 
                            :
                            ' border-transparent hover:border-[#AFD8FE] hover:bg-[#9A3412]/60'
                        }`}>
                            Packages
                        </NavLink>
                        <NavLink to="/destinations" className={({isActive})=>`px-5 py-2 transition-all duration-300 rounded-4xl border-2 ${
                            isActive ? 'border-[#AFD8FE]  bg-[#9A3412]/70 text-emerald-900 ' 
                            :
                            ' border-transparent hover:border-[#AFD8FE] hover:bg-[#9A3412]/60'
                        }`}>
                            Blogs
                        </NavLink>
                        <NavLink to="/destinations" className={({isActive})=>`px-5 py-2 transition-all duration-300 rounded-4xl border-2 ${
                            isActive ? 'border-[#AFD8FE]  bg-[#9A3412]/70 text-emerald-900 ' 
                            :
                            ' border-transparent hover:border-[#AFD8FE] hover:bg-[#9A3412]/60'
                        }`}>
                            Search
                        </NavLink>
                        <NavLink to="/destinations" className={({isActive})=>`px-5 py-2 transition-all duration-300 rounded-4xl border-2 ${
                            isActive ? 'border-[#AFD8FE]  bg-[#9A3412]/70 text-emerald-900 ' 
                            :
                            ' border-transparent hover:border-[#AFD8FE] hover:bg-[#9A3412]/60'
                        }`}>
                            Location
                        </NavLink>
                        <NavLink to="/destinations" className={({isActive})=>`px-5 py-2 transition-all duration-300 rounded-4xl border-2 ${
                            isActive ? 'border-[#AFD8FE]  bg-[#9A3412]/70 text-emerald-900 ' 
                            :
                            ' border-transparent hover:border-[#AFD8FE] hover:bg-[#9A3412]/60'
                        }`}>
                            <h3 className="font-extrabold">Sign In</h3>
                        </NavLink>
                    </div>
                </div>
            </nav>

            <div className="absolute w-full h-screen overflow-hidden">
            <img src="https://images.contentstack.io/v3/assets/bltcedd8dbd5891265b/bltcb5c5add9f186f0d/664cbc617f154494ea151f48/4832845-AdobeStock_216195684.jpeg?q=70&width=640&auto=webp" alt="" className="z-0 relative w-full h-full object-cover " />
            </div>
        </>
    )
}