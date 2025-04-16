import Image from "next/image"
import Link from "next/link"
import image1 from '../../../../public/Images/bsg.jpg'


const page = () => {
    return (
        <div class="px-4 md:px-6 2xl:px-20 2xl:container 2xl:mx-auto">
            <div class="mt-10 flex flex-col xl:flex-row jusitfy-center items-stretch w-full xl:space-x-8 space-y-4 md:space-y-6 xl:space-y-0">

                <div class="w-full border border-gray-200 rounded-md xl:w-96 flex justify-between items-center md:items-start px-4 py-6 md:p-6 xl:p-8 flex-col">
                    <h3 class="text-xl dark:text-white font-semibold leading-5 text-gray-800">Service</h3>
                    <div class="flex flex-col md:flex-row xl:flex-col justify-start items-stretch h-full w-full md:space-x-6 lg:space-x-8 xl:space-x-0">
                        <div class="flex flex-col justify-start items-start flex-shrink-0">
                            <div class="flex justify-center w-full md:justify-start items-center space-x-4 py-8 border-b border-gray-200">
                                <Image src={image1} alt="avatar" />
                            </div>

                            <div class="flex justify-center text-gray-800 dark:text-white md:justify-start items-center space-x-4 py-4 border-b border-gray-200 w-full">
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M19 5H5C3.89543 5 3 5.89543 3 7V17C3 18.1046 3.89543 19 5 19H19C20.1046 19 21 18.1046 21 17V7C21 5.89543 20.1046 5 19 5Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" />
                                    <path d="M3 7L12 13L21 7" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" />
                                </svg>
                                <p class="cursor-pointer text-sm leading-5 ">fiesta@gmail.com</p>
                            </div>
                        </div>
                        <div class="flex justify-between xl:h-full items-stretch w-full flex-col mt-6 md:mt-0">
                            <div class="flex justify-center md:justify-start xl:flex-col flex-col md:space-x-6 lg:space-x-8 xl:space-x-0 space-y-2 xl:space-y-12 md:space-y-0 md:flex-row items-center md:items-start">
                                <div class="flex justify-center md:justify-start items-center md:items-start flex-col space-y-4 xl:mt-8">
                                    <p class="text-base dark:text-white font-semibold leading-4 text-center md:text-left text-gray-800">Service Type</p>
                                    <p class="w-48 lg:w-full dark:text-gray-300 xl:w-48 text-center md:text-left text-sm leading-5 text-gray-600">Yearly</p>
                                </div>
                                <div class="flex justify-center md:justify-start items-center md:items-start flex-col space-y-2">
                                    <p class="text-base dark:text-white font-semibold leading-4 text-center md:text-left text-gray-800">Service Detail</p>
                                    <p class="w-48 lg:w-full dark:text-gray-300 xl:w-48 text-center md:text-left text-sm leading-5 text-gray-600">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Et, ad!</p>
                                </div>
                            </div>
                            <div class="flex w-full justify-center items-center md:justify-start md:items-start">
                                <button href="#" className="text-white bg-gradient-to-r from-cyan-500 to-cyan-700 hover:bg-gradient-to-r hover:from-cyan-700 hover:to-cyan-500 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg transition-all ease-in-out text-sm px-5 py-2.5 text-center">Download File</button>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="flex flex-col justify-start items-start w-full space-y-4 md:space-y-6 xl:space-y-8">
                    <div class="flex flex-col justify-start items-start border border-gray-200 rounded-md px-4 py-4 md:py-6 md:p-6 xl:p-8 w-full">
                        <p class="text-lg md:text-xl dark:text-white font-semibold leading-6 xl:leading-5 text-gray-800">Services Chunks</p>
                        <div class="mt-4 md:mt-6 flex flex-col md:flex-row justify-start items-start md:items-center md:space-x-6 xl:space-x-8 w-full">
                            <div class="pb-4 md:pb-8 w-full md:w-40">
                                <Image class="w-full hidden md:block" src={image1} alt="dress" />
                                <Image class="w-full md:hidden" src={image1} alt="dress" />
                            </div>
                            <div class="border-b border-gray-200 md:flex-row flex-col flex justify-between items-start w-full pb-8 space-y-4 md:space-y-0">
                                <div class="w-full flex flex-col justify-start items-start space-y-8">
                                    <h3 class="text-xl dark:text-white xl:text-2xl font-semibold leading-6 text-gray-800">Academic Writing</h3>
                                    <ol class="flex items-center w-full p-3 space-x-2 text-sm font-medium text-center text-gray-500 bg-white border border-gray-200 rounded-lg shadow-sm dark:text-gray-400 sm:text-base dark:bg-gray-800 dark:border-gray-700 sm:p-4 sm:space-x-4 rtl:space-x-reverse">
                                        <li class="flex items-center text-blue-600 dark:text-blue-500">
                                            <span class="flex items-center justify-center w-5 h-5 me-2 text-xs border border-blue-600 rounded-full shrink-0 dark:border-blue-500">
                                                1
                                            </span>
                                            In<span class="hidden sm:inline-flex sm:ms-2">Progress</span>
                                            <svg class="w-3 h-3 ms-2 sm:ms-4 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 12 10">
                                                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m7 9 4-4-4-4M1 9l4-4-4-4" />
                                            </svg>
                                        </li>
                                        <li class="flex items-center">
                                            <span class="flex items-center justify-center w-5 h-5 me-2 text-xs border border-gray-500 rounded-full shrink-0 dark:border-gray-400">
                                                2
                                            </span>
                                            Testing<span class="hidden sm:inline-flex sm:ms-2"></span>
                                            <svg class="w-3 h-3 ms-2 sm:ms-4 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 12 10">
                                                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m7 9 4-4-4-4M1 9l4-4-4-4" />
                                            </svg>
                                        </li>
                                        <li class="flex items-center">
                                            <span class="flex items-center justify-center w-5 h-5 me-2 text-xs border border-gray-500 rounded-full shrink-0 dark:border-gray-400">
                                                3
                                            </span>
                                            Deployed
                                        </li>
                                    </ol>
                                </div>
                                <div class="flex justify-between space-x-8 items-start w-full">
                                    <p class="text-base dark:text-white xl:text-lg leading-6">$36.00 <span class="text-red-300 line-through"> $45.00</span></p>
                                    <p class="text-base dark:text-white xl:text-lg leading-6 text-gray-800">One Time Service</p>
                                    <p class="text-base dark:text-white xl:text-lg font-semibold leading-6 text-gray-800">$36.00</p>
                                </div>
                            </div>
                        </div>
                        <div class="mt-4 md:mt-6 flex flex-col md:flex-row justify-start items-start md:items-center md:space-x-6 xl:space-x-8 w-full">
                            <div class="pb-4 md:pb-8 w-full md:w-40">
                                <Image class="w-full hidden md:block" src={image1} alt="dress" />
                                <Image class="w-full md:hidden" src={image1} alt="dress" />
                            </div>
                            <div class="border-b border-gray-200 md:flex-row flex-col flex justify-between items-start w-full pb-8 space-y-4 md:space-y-0">
                                <div class="w-full flex flex-col justify-start items-start space-y-8">
                                    <h3 class="text-xl dark:text-white xl:text-2xl font-semibold leading-6 text-gray-800">Academic Writing</h3>
                                    <ol class="flex items-center w-full p-3 space-x-2 text-sm font-medium text-center text-gray-500 bg-white border border-gray-200 rounded-lg shadow-sm dark:text-gray-400 sm:text-base dark:bg-gray-800 dark:border-gray-700 sm:p-4 sm:space-x-4 rtl:space-x-reverse">
                                        <li class="flex items-center text-blue-600 dark:text-blue-500">
                                            <span class="flex items-center justify-center w-5 h-5 me-2 text-xs border border-blue-600 rounded-full shrink-0 dark:border-blue-500">
                                                1
                                            </span>
                                            In<span class="hidden sm:inline-flex sm:ms-2">Progress</span>
                                            <svg class="w-3 h-3 ms-2 sm:ms-4 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 12 10">
                                                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m7 9 4-4-4-4M1 9l4-4-4-4" />
                                            </svg>
                                        </li>
                                        <li class="flex items-center">
                                            <span class="flex items-center justify-center w-5 h-5 me-2 text-xs border border-gray-500 rounded-full shrink-0 dark:border-gray-400">
                                                2
                                            </span>
                                            Testing<span class="hidden sm:inline-flex sm:ms-2"></span>
                                            <svg class="w-3 h-3 ms-2 sm:ms-4 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 12 10">
                                                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m7 9 4-4-4-4M1 9l4-4-4-4" />
                                            </svg>
                                        </li>
                                        <li class="flex items-center">
                                            <span class="flex items-center justify-center w-5 h-5 me-2 text-xs border border-gray-500 rounded-full shrink-0 dark:border-gray-400">
                                                3
                                            </span>
                                            Deployed
                                        </li>
                                    </ol>
                                </div>
                                <div class="flex justify-between space-x-8 items-start w-full">
                                    <p class="text-base dark:text-white xl:text-lg leading-6">$36.00 <span class="text-red-300 line-through"> $45.00</span></p>
                                    <p class="text-base dark:text-white xl:text-lg leading-6 text-gray-800">One Time Service</p>
                                    <p class="text-base dark:text-white xl:text-lg font-semibold leading-6 text-gray-800">$36.00</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="flex justify-center flex-col md:flex-row items-stretch w-full space-y-4 md:space-y-0 md:space-x-6 xl:space-x-8">
                        <div class="flex flex-col border border-gray-200 rounded-md px-4 py-6 md:p-6 xl:p-8 w-full space-y-6">
                            <h3 class="text-xl dark:text-white font-semibold leading-5 text-gray-800">Summary</h3>
                            <div class="flex justify-center items-center w-full space-y-4 flex-col border-gray-200 border-b pb-4">
                                <div class="flex justify-between w-full">
                                    <p class="text-base dark:text-white leading-4 text-gray-800">Subtotal</p>
                                    <p class="text-base dark:text-gray-300 leading-4 text-gray-600">$56.00</p>
                                </div>
                                <div class="flex justify-between items-center w-full">
                                    <p class="text-base dark:text-white leading-4 text-gray-800">Discount <span class="bg-gray-200 p-1 text-xs font-medium dark:bg-white dark:text-gray-800 leading-3 text-gray-800">STUDENT</span></p>
                                    <p class="text-base dark:text-gray-300 leading-4 text-gray-600">-$28.00 (50%)</p>
                                </div>
                            </div>
                            <div class="flex justify-between items-center w-full">
                                <p class="text-base dark:text-white font-semibold leading-4 text-gray-800">Total</p>
                                <p class="text-base dark:text-gray-300 font-semibold leading-4 text-gray-600">$36.00</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default page