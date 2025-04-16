import Fade from '@/components/transitions/fade'

const page = () => {
  return (
    <div className="h-screen md:flex">
            <div
                className="relative items-center justify-around hidden w-1/2 overflow-hidden md:flex bg-gradient-to-b from-cyan-800 to-green-700 i">
                <Fade>
                    <div>
                        <h1 className="font-sans text-4xl font-bold text-white">Grap Freelance Services</h1>
                        <p className="mt-1 text-white">The most popular peer to peer lending at SEA</p>
                        <button type="submit" className="block py-2 mt-4 mb-2 font-bold text-indigo-800 bg-white w-28 rounded-2xl">Read More</button>
                    </div>
                </Fade>
                <div className="absolute border-4 border-t-8 rounded-full -bottom-32 -left-40 w-80 h-80 border-opacity-30"></div>
                <div className="absolute border-4 border-t-8 rounded-full -bottom-40 -left-20 w-80 h-80 border-opacity-30"></div>
                <div className="absolute border-4 border-t-8 rounded-full -top-40 -right-0 w-80 h-80 border-opacity-30"></div>
                <div className="absolute border-4 border-t-8 rounded-full -top-20 -right-20 w-80 h-80 border-opacity-30"></div>
            </div>
            <div className="flex items-center justify-center py-10 bg-white md:w-6/12">
                <form className="w-10/12 bg-white">
                    <h1 className="mb-1 text-2xl font-bold text-center text-gray-800">Hello</h1>
                    <p className="text-sm font-normal text-center text-gray-600 mb-7">Welcome to FC Market Place</p>
                    <Fade>
                        <div className="flex items-center px-3 py-2 mb-4 border-2 rounded-2xl">
                            <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 text-gray-400" fill="none"
                                viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                                    d="M12 11c0 3.517-1.009 6.799-2.753 9.571m-3.44-2.04l.054-.09A13.916 13.916 0 008 11a4 4 0 118 0c0 1.017-.07 2.019-.203 3m-2.118 6.844A21.88 21.88 0 0015.171 17m3.839 1.132c.645-2.266.99-4.659.99-7.132A8 8 0 008 4.07M3 15.364c.64-1.319 1-2.8 1-4.364 0-1.457.39-2.823 1.07-4" />
                            </svg>
                            <input className="pl-2 border-none outline-none" type="text" name="" id="" placeholder="Username" />
                        </div>
                    </Fade>
                    <Fade>
                        <div className="flex items-center px-3 py-2 mb-4 border-2 rounded-2xl">
                            <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 text-gray-400" fill="none"
                                viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                                    d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207" />
                            </svg>
                            <input className="pl-2 border-none outline-none" type="text" name="" id="" placeholder="Email Address" />
                        </div>
                    </Fade>
                    <Fade>
                        <div className="flex items-center px-3 py-2 border-2 rounded-2xl">
                            <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 text-gray-400" viewBox="0 0 20 20"
                                fill="currentColor">
                                <path fillRule="evenodd"
                                    d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z"
                                    clipRule="evenodd" />
                            </svg>
                            <input className="pl-2 border-none outline-none" type="text" name="" id="" placeholder="Password" />
                        </div>
                    </Fade>
                    <Fade>
                        <div className='flex flex-col items-center justify-center'>
                            <button type="submit" className="block w-6/12 py-2 mt-4 mb-2 font-semibold text-white transition-all ease-in-out hover:bg-cyan-900 hover:shadow-xl bg-cyan-600 rounded-2xl">Create Account</button>
                            <span className="text-sm cursor-pointer hover:text-blue-500">Forgot Password ?</span>
                        </div>
                    </Fade>
                    <Fade>
                        <div className="my-12 text-center border-b">
                            <div
                                className="inline-block px-2 text-sm font-medium leading-none tracking-wide text-gray-600 transform translate-y-1/2 bg-white">
                                Or sign up with e-mail
                            </div>
                        </div>
                    </Fade>
                    <Fade>

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
                        </div>
                    </Fade>
                </form>
            </div>
        </div >
  )
}

export default page