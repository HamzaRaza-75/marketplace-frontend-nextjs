import { FaBell, FaFacebookMessenger, FaHeart , FaBars } from "react-icons/fa6";
import { IoSearchOutline } from "react-icons/io5";
import logo from '../../../public/Images/logo-new.png'
import Link from "next/link";
import Image from "next/image";


const Navbar = () => {
    return (
        <>
            <nav className="flex items-center justify-center w-full px-4 bg-cyan-700 lg:px-4 lg:py-2.5 ">
                <div className="flex items-center justify-between w-full">
                    <Link href="https://flowbite.com" className="flex items-center">
                        <Image src={logo} className="mr-3 h-9 w-36 sm:h-9" alt="fc logo" />
                    </Link>
                    <div className="w-96">
                        <form>
                            <div className="flex">
                                <div className="relative w-full">
                                    <input type="search" id="search-dropdown"
                                        className="block p-2.5 w-full z-20 text-sm text-gray-900 bg-gray-50 rounded-lg border-s-2 border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-s-gray-700  dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:border-blue-500"
                                        placeholder="Search Mockups, Logos, Design Templates..." required />
                                    <button type="submit"
                                        className="absolute top-0 end-0 p-2.5 text-sm font-medium h-full text-white bg-cyan-300 rounded-e-lg border border-cyan-400 hover:bg-cyan-500 hover:border-cyan-500 focus:ring-4 focus:outline-none focus:ring-blue-300">
                                        <IoSearchOutline />
                                    </button>
                                </div>
                            </div>
                        </form>
                    </div>
                    <div className="flex items-center w-auto">

                        {/* <!-- icons area --> */}

                        <div className="hidden md:block md:w-auto" id="navbar-default">
                            <ul
                                className="flex flex-col p-4 mt-4 font-medium border border-gray-100 rounded-lg bg-inherit md:p-0 md:flex-row md:space-x-8 rtl:space-x-reverse md:items-center md:mt-0 md:border-0 md:bg-inherit">
                                <li>
                                    <div className='p-2 bg-white rounded-full'> <FaBell color='rgb(7, 144, 179)' /> </div>
                                </li>
                                <li>
                                    <div className='p-2 bg-white rounded-full'> <FaFacebookMessenger color='rgb(7, 144, 179)' /> </div>
                                </li>
                                <li>
                                    <div className='p-2 bg-white rounded-full'> <FaHeart color='rgb(7, 144, 179)' /> </div>
                                </li>
                                <li>
                                    <a href="#"
                                        className="block px-3 py-2 rounded text-gray-50 hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">Orders</a>
                                </li>

                                <li>
                                    <div className="h-6">
                                        <Image className="w-6 h-6 rounded-full"
                                            src={logo}
                                            alt="image description" width={300} height={300} />
                                    </div>
                                </li>
                            </ul>
                        </div>

                        <button data-collapse-toggle="mobile-menu-2" type="button"
                            className="inline-flex items-center p-2 ml-1 text-sm text-gray-500 rounded-lg lg:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600">
                            <span className="sr-only">Open main menu</span>
                            <FaBars className="text-white" />
                        </button>
                    </div>
                    <div className="items-center justify-between hidden w-full lg:flex lg:w-auto lg:order-1" id="mobile-menu-2">
                        <ul className="flex flex-col mt-4 font-medium lg:flex-row lg:space-x-8 lg:mt-0">

                        </ul>
                    </div>
                </div>
            </nav>
        </>
    )
}

export default Navbar