import Link from "next/link"

const DashboardCategories = () => {
    
    return (
        <>
            <nav className="flex flex-wrap items-center justify-center py-2 my-1 border-b border-cyan-700">
                <div className="block lg:hidden">
                    <button className="flex items-center px-3 py-2 text-teal-200 border border-teal-400 rounded hover:text-white hover:border-white">
                        <svg className="w-3 h-3 fill-current" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Menu</title><path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v15z" /></svg>
                    </button>
                </div>
                <div className="flex-grow block w-full lg:flex lg:items-center lg:justify-center lg:w-auto">
                    <div className="text-sm lg:flex-grow lg:item-center lg:justify-center lg:flex">
                        <Link href="#graphics-design" className="block pb-2 mt-4 mr-4 transition-all ease-in-out lg:border-b-2 lg:border-transparent text-cyan-700 lg:inline-block lg:mt-0 hover:border-b-cyan-500 hover:border-b-2">
                            Graphics & Design
                        </Link>
                        <Link href="#graphics-design" className="block pb-2 mt-4 mr-4 transition-all ease-in-out lg:border-b-2 lg:border-transparent text-cyan-700 lg:inline-block lg:mt-0 hover:border-b-cyan-500 hover:border-b-2">
                            Graphics & Design
                       </Link>
                        <Link href="#graphics-design" className="block pb-2 mt-4 mr-4 transition-all ease-in-out lg:border-b-2 lg:border-transparent text-cyan-700 lg:inline-block lg:mt-0 hover:border-b-cyan-500 hover:border-b-2">
                            Graphics & Design
                       </Link>
                        <Link href="#graphics-design" className="block pb-2 mt-4 mr-4 transition-all ease-in-out lg:border-b-2 lg:border-transparent text-cyan-700 lg:inline-block lg:mt-0 hover:border-b-cyan-500 hover:border-b-2">
                            Graphics & Design
                       </Link>
                        <Link href="#graphics-design" className="block pb-2 mt-4 mr-4 transition-all ease-in-out lg:border-b-2 lg:border-transparent text-cyan-700 lg:inline-block lg:mt-0 hover:border-b-cyan-500 hover:border-b-2">
                            Graphics & Design
                       </Link>
                        <Link href="#graphics-design" className="block pb-2 mt-4 mr-4 transition-all ease-in-out lg:border-b-2 lg:border-transparent text-cyan-700 lg:inline-block lg:mt-0 hover:border-b-cyan-500 hover:border-b-2">
                            Graphics & Design
                       </Link>
                        <Link href="#graphics-design" className="block pb-2 mt-4 mr-4 transition-all ease-in-out lg:border-b-2 lg:border-transparent text-cyan-700 lg:inline-block lg:mt-0 hover:border-b-cyan-500 hover:border-b-2">
                            Graphics & Design
                       </Link>
                        <Link href="#graphics-design" className="block pb-2 mt-4 mr-4 transition-all ease-in-out lg:border-b-2 lg:border-transparent text-cyan-700 lg:inline-block lg:mt-0 hover:border-b-cyan-500 hover:border-b-2">
                            Graphics & Design
                       </Link>
                        <Link href="#graphics-design" className="block pb-2 mt-4 mr-4 transition-all ease-in-out lg:border-b-2 lg:border-transparent text-cyan-700 lg:inline-block lg:mt-0 hover:border-b-cyan-500 hover:border-b-2">
                            Graphics & Design
                       </Link>
                        
                        {/* <!-- More categories... --> */}
                    </div>
                </div>
            </nav>
        </>
    )
}

export default DashboardCategories