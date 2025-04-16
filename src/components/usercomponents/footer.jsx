import Link from "next/link"

const Footer = () => {
    return (
        <>
            <footer className="bg-white dark:bg-gray-900">
                <div className="w-full max-w-screen-xl mx-auto">
                    <div className="grid grid-cols-2 gap-8 px-4 py-6 lg:py-8 md:grid-cols-5">
                        <div>
                            <h2 className="mb-6 text-sm font-bold text-gray-900 uppercase dark:text-white">Categories</h2>
                            <ul className="font-medium text-gray-500 dark:text-gray-400">
                                <li className="mb-4">
                                    <Link href="#" className=" hover:underline">Graphic & Desing</Link>
                                </li>
                                <li className="mb-4">
                                    <Link href="#" className="hover:underline">Digital Marketing</Link>
                                </li>
                                <li className="mb-4">
                                    <Link href="#" className="hover:underline">Writing & Translation</Link>
                                </li>
                                <li className="mb-4">
                                    <Link href="#" className="hover:underline">Video & animation </Link>
                                </li>
                                <li className="mb-4">
                                    <Link href="#" className="hover:underline">Data </Link>
                                </li>
                            </ul>
                        </div>
                        <div>
                            <h2 className="mb-6 text-sm font-bold text-gray-900 uppercase dark:text-white">About</h2>
                            <ul className="font-medium text-gray-500 dark:text-gray-400">
                                <li className="mb-4">
                                    <Link href="#" className="hover:underline">Careers</Link>
                                </li>
                                <li className="mb-4">
                                    <Link href="#" className="hover:underline">Parterships</Link>
                                </li>
                                <li className="mb-4">
                                    <Link href="#" className="hover:underline">Privay Policy</Link>
                                </li>
                                <li className="mb-4">
                                    <Link href="#" className="hover:underline">Terms of Service</Link>
                                </li>
                            </ul>
                        </div>
                        <div>
                            <h2 className="mb-6 text-sm font-bold text-gray-900 uppercase dark:text-white">Support and Education
                            </h2>
                            <ul className="font-medium text-gray-500 dark:text-gray-400">
                                <li className="mb-4">
                                    <Link href="#" className="hover:underline">Help & Support</Link>
                                </li>
                                <li className="mb-4">
                                    <Link href="#" className="hover:underline">Trust & Safety</Link>
                                </li>
                                <li className="mb-4">
                                    <Link href="#" className="hover:underline">Guides</Link>
                                </li>
                                <li className="mb-4">
                                    <Link href="#" className="hover:underline">Learn</Link>
                                </li>
                            </ul>
                        </div>
                        <div>
                            <h2 className="mb-6 text-sm font-bold text-gray-900 uppercase dark:text-white">Community</h2>
                            <ul className="font-medium text-gray-500 dark:text-gray-400">
                                <li className="mb-4">
                                    <Link href="#" className="hover:underline">Customer Success Stories</Link>
                                </li>
                                <li className="mb-4">
                                    <Link href="#" className="hover:underline">Community Hub</Link>
                                </li>
                                <li className="mb-4">
                                    <Link href="#" className="hover:underline">Forum</Link>
                                </li>
                                <li className="mb-4">
                                    <Link href="#" className="hover:underline">Events</Link>
                                </li>
                                <li className="mb-4">
                                    <Link href="#" className="hover:underline">Blogs</Link>
                                </li>
                                <li className="mb-4">
                                    <Link href="#" className="hover:underline">Invite a Friend</Link>
                                </li>
                            </ul>
                        </div>
                        <div>
                            <h2 className="mb-6 text-sm font-bold text-gray-900 uppercase dark:text-white">Business Solutions</h2>
                            <ul className="font-medium text-gray-500 dark:text-gray-400">
                                <li className="mb-4">
                                    <Link href="#" className="hover:underline">About Business Solutions</Link>
                                </li>
                                <li className="mb-4">
                                    <Link href="#" className="hover:underline">Pro</Link>
                                </li>
                                <li className="mb-4">
                                    <Link href="#" className="hover:underline">Certified</Link>
                                </li>
                                <li className="mb-4">
                                    <Link href="#" className="hover:underline">Contact Sales</Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </footer>
        </>
    )
}

export default Footer