import { HiChevronDown } from 'react-icons/hi';
import { FcBusinessman } from "react-icons/fc";
import Link from 'next/link';

const Adminheader = () => {
    return (
        <>
            <nav className="w-full flex z-10 fixed top-0 right-0 items-center px-6 justify-between lg:w-[80vw] h-[10vh] lg:ml-[20vw] flex-wrap bg-gray-100 shadow-xl ">
                <div className="flex items-center flex-shrink-0 mr-6 text-cyan-700">
                    <svg className="w-8 h-8 mr-2 fill-current" width="54" height="54" viewBox="0 0 54 54" xmlns="http://www.w3.org/2000/svg"><path d="M13.5 22.1c1.8-7.2 6.3-10.8 13.5-10.8 10.8 0 12.15 8.1 17.55 9.45 3.6.9 6.75-.45 9.45-4.05-1.8 7.2-6.3 10.8-13.5 10.8-10.8 0-12.15-8.1-17.55-9.45-3.6-.9-6.75.45-9.45 4.05zM0 38.3c1.8-7.2 6.3-10.8 13.5-10.8 10.8 0 12.15 8.1 17.55 9.45 3.6.9 6.75-.45 9.45-4.05-1.8 7.2-6.3 10.8-13.5 10.8-10.8 0-12.15-8.1-17.55-9.45-3.6-.9-6.75.45-9.45 4.05z" /></svg>
                    <span className="text-xl font-semibold tracking-tight">FCS Admin</span>
                </div>
                <div className="block pr-4 lg:hidden">
                    <button className="flex items-center px-3 py-2 text-teal-700 border border-teal-700 rounded">
                        <svg className="w-3 h-3 fill-current" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Menu</title><path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" /></svg>
                    </button>
                </div>
                <div className="hidden lg:flex lg:items-center lg:w-auto">
                    <Link href="#" className="flex items-center justify-center" data-toggle="dropdown">
                        <HiChevronDown />
                        <div className="user-names">
                            <span className="text-sm text-gray-500">  Admin</span>
                        </div>
                        <span className="ml-2 user-img">
                            <FcBusinessman size={30} />
                        </span>
                    </Link>
                </div>
            </nav>
        </>
    )
}

export default Adminheader