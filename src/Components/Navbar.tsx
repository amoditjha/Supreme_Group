import { Linkedin, Languages} from "lucide-react"
export default function Navbar(){
    return(
        <nav>
        <div className="bg-white top-0 left-0 right-0 z-[9999] p-2">
            <header className="2xl:py-2 xlg:py-1 py-2 z-50">
                <div className="w-container h-full xlg:py-3 py-1 mt-[2px] flex gap-4 items-center justify-between md:mx-30 mx-5">
                    <a href="/">
                    <span>
                    <img src="/logo.jpg" alt="supremelogo" className="h-full !cursor-pointer" loading="eager" height="41" width="148"/>
                    </span>
                    </a>
                    <div className="Options md:flex md:gap-10 gap-3 items-center hidden">
                        <button className="bg-[#5cd6ff] px-3 py-1 rounded-full">Contact us</button>
                        <div>
                        <Linkedin />
                        </div>
                       <div className="flex">
                       <Languages /><span className="uppercase">Eng</span>
                       </div>
                        
                    </div>
                </div>
                
            </header>
        </div>
        </nav>
    )
}