import Image from 'next/image';
import logo from '../../../public/Images/logo-new.png'
import { HiFolderOpen, HiOutlineLogout } from "react-icons/hi";
import { FaMessage, FaChartPie, FaHandHoldingDollar, FaJediOrder, FaBarsProgress, FaQuora, FaRegCommentDots, FaUserGroup } from "react-icons/fa6";
import Link from "next/link";

function Adminsidebar() {
    return (
        <>
            <aside className="fixed z-20 top-0 left-0 w-[40vw] h-screen sm:w-[30vw] md:w-[25vw]  px-4 py-8 overflow-y-auto lg:w-[20vw] bg-cyan-700 border-r rtl:border-r-0 rtl:border-l ">
                <span></span>
                <span>
                    <Image src={logo} alt="" className="w-48 -mt-2" />
                </span>
                <div className="flex flex-col justify-between flex-1 mt-2">
                    <nav>
                        <p>
                            <Link className="flex items-center px-4 py-2 bg-white rounded-md text-cyan-700" href="/admin">
                                <HiFolderOpen />
                                <span className="mx-4 text-sm font-small">Dashboard</span>
                            </Link>
                        </p>
                        <p>
                            <Link className="flex items-center px-4 py-2 text-white rounded-md bg-cyan-700" href="/admin/clients">
                                <FaChartPie />
                                <span className="mx-4 text-sm font-small">Clients</span>
                            </Link>
                        </p>
                        <p>
                            <Link className="flex items-center px-4 py-2 mt-2 text-gray-200 transition rounded-md all hover:bg-gray-100 hover:text-gray-700" href="#">
                                <FaHandHoldingDollar />
                                <span className="mx-4 text-sm font-small">Earnings</span>
                            </Link>
                        </p>
                        <p>
                            <Link className="flex items-center px-4 py-2 mt-2 text-gray-200 transition rounded-md all hover:bg-gray-100 hover:text-gray-700" href="#">
                                <FaJediOrder />
                                <span className="mx-4 text-sm font-small">Orders</span>
                            </Link>
                        </p>
                        <p>
                            <Link className="flex items-center px-4 py-2 mt-2 text-gray-200 transition rounded-md all hover:bg-gray-100 hover:text-gray-700" href="#">
                                <FaBarsProgress />
                                <span className="mx-4 text-sm font-small">Services</span>
                            </Link>
                        </p>
                        <p>
                            <Link className="flex items-center px-4 py-2 mt-2 text-gray-200 transition rounded-md all hover:bg-gray-100 hover:text-gray-700" href="#">
                                <FaQuora />
                                <span className="mx-4 text-sm font-small">Add Faqs</span>
                            </Link>
                        </p>
                        <p>
                            <Link className="flex items-center px-4 py-2 mt-2 text-gray-200 transition rounded-md all hover:bg-gray-100 hover:text-gray-700" href="#">
                                <FaRegCommentDots />
                                <span className="mx-4 text-sm font-small">Chats</span>
                            </Link>
                        </p>
                        <p>
                            <Link className="flex items-center px-4 py-2 mt-2 text-gray-200 transition rounded-md all hover:bg-gray-100 hover:text-gray-700" href="#">
                                <FaUserGroup />
                                <span className="mx-4 text-sm font-small">Users List</span>
                            </Link>
                        </p>

                        <hr className="mx-6 mt-6" />
                    </nav>

                    <p>
                        <Link className="flex items-center px-4 py-2 mt-2 text-gray-200" href="#">
                            <HiOutlineLogout size={22} />
                            <span className="mx-4 font-medium">Logout</span>
                        </Link>
                    </p>
                </div>
            </aside>
        </>

    );
}

export default Adminsidebar;