import Fade from "@/components/transitions/fade"
import Slideup from "@/components/transitions/slideup"
import Link from "next/link"
import logo from '../../../public/Images/logo.png'

const Signup = () => {
    return (
        <>
            <div className="flex justify-center min-h-screen text-gray-900 bg-gray-100">
                <div className="flex justify-center flex-1 max-w-screen-xl m-0 bg-white shadow sm:m-10 sm:rounded-lg">
                    <div className="w-1/2 py-2">
                        <Fade>
                            <div className='flex items-center justify-center w-full'>
                                <img src={logo} alt="" className='w-24' />
                            </div>
                            <div className="flex flex-col items-center mt-12">
                                <h1 className="text-2xl font-extrabold xl:text-3xl">
                                    Sign up
                                </h1>
                                <div className="flex-1 w-full mt-8">
                                    <div className="max-w-xs mx-auto">
                                        <input
                                            className="w-full px-8 py-4 text-sm font-medium placeholder-gray-500 bg-gray-100 border border-gray-200 rounded-lg focus:outline-none focus:border-gray-400 focus:bg-white"
                                            type="email" placeholder="Email" />
                                        <input
                                            className="w-full px-8 py-4 mt-5 text-sm font-medium placeholder-gray-500 bg-gray-100 border border-gray-200 rounded-lg focus:outline-none focus:border-gray-400 focus:bg-white"
                                            type="password" placeholder="Password" />
                                        <button
                                            className="flex items-center justify-center w-full py-4 mt-5 font-semibold tracking-wide text-gray-100 transition-all duration-300 ease-in-out rounded-lg bg-cyan-600 hover:bg-cyan-900 focus:shadow-outline focus:outline-none">
                                            <svg className="w-6 h-6 -ml-2" fill="none" stroke="currentColor" strokeWidth="2"
                                                strokeLinecap="round" strokeLinejoin="round">
                                                <path d="M16 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2" />
                                                <circle cx="8.5" cy="7" r="4" />
                                                <path d="M20 8v6M23 11h-6" />
                                            </svg>
                                            <span className="ml-3">
                                                Sign Up
                                            </span>
                                        </button>

                                    </div>


                                    <div className="my-12 text-center border-b">
                                        <div
                                            className="inline-block px-2 text-sm font-medium leading-none tracking-wide text-gray-600 transform translate-y-1/2 bg-white">
                                            Or sign up with e-mail
                                        </div>
                                    </div>
                                    <div className="flex flex-col items-center">
                                        <button
                                            className="flex items-center justify-center w-full max-w-xs py-3 font-bold text-white transition-all duration-300 ease-in-out rounded-lg shadow-sm bg-cyan-700 focus:outline-none hover:shadow-2xl hover:bg-cyan-900 focus:shadow-sm focus:shadow-outline">
                                            <div className="p-2 bg-white rounded-full">
                                                <svg className="w-4" viewBox="0 0 533.5 544.3">
                                                    <path
                                                        d="M533.5 278.4c0-18.5-1.5-37.1-4.7-55.3H272.1v104.8h147c-6.1 33.8-25.7 63.7-54.4 82.7v68h87.7c51.5-47.4 81.1-117.4 81.1-200.2z"
                                                        fill="#4285f4" />
                                                    <path
                                                        d="M272.1 544.3c73.4 0 135.3-24.1 180.4-65.7l-87.7-68c-24.4 16.6-55.9 26-92.6 26-71 0-131.2-47.9-152.8-112.3H28.9v70.1c46.2 91.9 140.3 149.9 243.2 149.9z"
                                                        fill="#34a853" />
                                                    <path
                                                        d="M119.3 324.3c-11.4-33.8-11.4-70.4 0-104.2V150H28.9c-38.6 76.9-38.6 167.5 0 244.4l90.4-70.1z"
                                                        fill="#fbbc04" />
                                                    <path
                                                        d="M272.1 107.7c38.8-.6 76.3 14 104.4 40.8l77.7-77.7C405 24.6 339.7-.8 272.1 0 169.2 0 75.1 58 28.9 150l90.4 70.1c21.5-64.5 81.8-112.4 152.8-112.4z"
                                                        fill="#ea4335" />
                                                </svg>
                                            </div>
                                            <span className="ml-4">
                                                Sign Up with Google
                                            </span>
                                        </button>
                                        <p className="mt-6 text-xs text-center text-gray-600">
                                            I agree to
                                            <Link href="#" className="border-b border-gray-500 border-dotted">
                                                Terms of Service
                                            </Link>
                                            and its
                                            <Link href="#" className="border-b border-gray-500 border-dotted">
                                                Privacy Policy
                                            </Link>
                                        </p>
                                    </div>


                                </div>
                            </div>
                        </Fade>
                    </div>

                    <div
                        className="relative items-center justify-around hidden w-1/2 overflow-hidden md:flex bg-gradient-to-b from-cyan-800 to-green-700 i">
                        <div>
                            <Fade>
                                <h1 className="font-sans text-4xl font-bold text-white">Grap Freelance Services</h1>
                                <p className="mt-1 text-white">The most popular freelance services Website</p>
                                <button type="submit" className="block py-2 mt-4 mb-2 font-bold text-indigo-800 bg-white w-28 rounded-2xl">Read More</button>
                            </Fade>
                        </div>
                        <div className="absolute border-4 border-t-8 rounded-full -bottom-32 -left-40 w-80 h-80 border-opacity-30"></div>
                        <div className="absolute border-4 border-t-8 rounded-full -bottom-40 -left-20 w-80 h-80 border-opacity-30"></div>
                        <div className="absolute border-4 border-t-8 rounded-full -top-40 -right-0 w-80 h-80 border-opacity-30"></div>
                        <div className="absolute border-4 border-t-8 rounded-full -top-20 -right-20 w-80 h-80 border-opacity-30"></div>
                    </div>

                </div>
            </div>
        </>
    )
}

export default Signup