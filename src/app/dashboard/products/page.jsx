import Image from 'next/image'
import BAWS from '../../../../public/Images/BAWS.jpg'
import Reviews from '@/components/usercomponents/reviews'

const products = () => {
    return (
        <>
            <div className="py-8">
                <div className="max-w-6xl px-4 mx-auto sm:px-6 lg:px-8">
                    <div className="flex flex-col -mx-4 md:flex-row">
                        <div className="px-4 md:flex-1">
                            <div className="h-[460px] rounded-lg bg-gray-300 dark:bg-gray-700 mb-4">
                                <Image className="object-cover w-full h-full" src={BAWS} alt="Product Image" />
                            </div>
                            <div className="flex mb-4 -mx-2">
                                <div className="w-1/2 px-2">
                                    <button href="#" className="w-full px-4 py-2 font-bold text-center text-white transition-all ease-in-out rounded-full bg-gradient-to-r from-cyan-500 to-cyan-700 hover:bg-gradient-to-r hover:from-cyan-700 hover:to-cyan-500 focus:ring-4 focus:outline-none focus:ring-blue-300">Add Service</button>
                                </div>
                                <div className="w-1/2 px-2">
                                    <button className="w-full px-4 py-2 font-bold text-gray-800 bg-gray-200 rounded-full hover:bg-gray-300 ">Add to Wishlist</button>
                                </div>
                            </div>
                        </div>
                        <div className="px-4 md:flex-1">
                            <h2 className="text-3xl my-2 font-bold leading-tight text-cyan-600 [text-shadow:_3px_2px_0_rgb(7_144_179_/_20%)]">Bussines Artice Writing</h2>
                            <div className="flex items-center my-4">
                                <svg className="w-4 h-4 text-cyan-500 me-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                                    <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                                </svg>
                                <svg className="w-4 h-4 text-cyan-500 me-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                                    <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                                </svg>
                                <svg className="w-4 h-4 text-cyan-500 me-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                                    <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                                </svg>
                                <svg className="w-4 h-4 text-cyan-500 me-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                                    <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                                </svg>
                                <svg className="w-4 h-4 text-gray-300 me-1 dark:text-gray-500" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                                    <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                                </svg>
                                <p className="text-sm font-medium text-gray-500 ms-1 dark:text-gray-400">4.95</p>
                                <p className="text-sm font-medium text-gray-500 ms-1 dark:text-gray-400">out of</p>
                                <p className="text-sm font-medium text-gray-500 ms-1 dark:text-gray-400">5</p>
                            </div>
                            <div className="flex mb-4">
                                <div className="mr-4">
                                    <span className="font-bold text-gray-700 dark:text-gray-300">Starting From.</span>
                                    <span className="text-gray-600 dark:text-gray-300"> $80</span>
                                </div>
                            </div>
                            <div>
                                <p className="mt-2 text-sm text-justify text-gray-600 dark:text-gray-300">
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                                    sed ante justo. Integer euismod libero id mauris malesuada tincidunt. Vivamus commodo nulla ut
                                    lorem rhoncus aliquet. Duis dapibus augue vel ipsum pretium, et venenatis sem blandit. Quisque
                                    ut erat vitae nisi ultrices placerat non eget velit. Integer ornare mi sed ipsum lacinia, non
                                    sagittis mauris blandit. Morbi fermentum libero vel nisl suscipit, nec tincidunt mi consectetur.
                                </p>
                            </div>
                            <main className="bg-light-blue">
                                <div className="flex items-start justify-center my-2">
                                    <div className="w-full my-1">
                                        <h2 className="mb-2 text-xl font-semibold text-vnet-blue">FAQ - About Services etc.</h2>
                                        <ul className="flex flex-col">
                                            <li className="my-2 bg-white shadow-lg">
                                                <h2 className="flex flex-row items-center justify-between p-3 font-semibold cursor-pointer">
                                                    <span>Can i get reupdate of my existing projects?</span>
                                                    <svg className="w-6 h-6 transition-transform duration-500 transform fill-current text-cyan-700"
                                                        viewBox="0 0 20 20">
                                                        <path
                                                            d="M13.962,8.885l-3.736,3.739c-0.086,0.086-0.201,0.13-0.314,0.13S9.686,12.71,9.6,12.624l-3.562-3.56C5.863,8.892,5.863,8.611,6.036,8.438c0.175-0.173,0.454-0.173,0.626,0l3.25,3.247l3.426-3.424c0.173-0.172,0.451-0.172,0.624,0C14.137,8.434,14.137,8.712,13.962,8.885 M18.406,10c0,4.644-3.763,8.406-8.406,8.406S1.594,14.644,1.594,10S5.356,1.594,10,1.594S18.406,5.356,18.406,10 M17.521,10c0-4.148-3.373-7.521-7.521-7.521c-4.148,0-7.521,3.374-7.521,7.521c0,4.147,3.374,7.521,7.521,7.521C14.148,17.521,17.521,14.147,17.521,10">
                                                        </path>
                                                    </svg>
                                                </h2>
                                                <div className="overflow-hidden transition-all duration-500 border-l-2 border-cyan-600 max-h-0">
                                                    <p className="p-3 text-gray-900">
                                                        Shipping time is set by our delivery partners, according to the delivery method chosen by you. Additional
                                                        details can be found in the order confirmation
                                                    </p>
                                                </div>
                                            </li>
                                            <li className="my-2 text-white shadow-lg bg-cyan-700">
                                                <h2 className="flex flex-row items-center justify-between p-3 font-semibold cursor-pointer">
                                                    <span>Can i get reupdate of my existing projects?</span>
                                                    <svg className="w-6 h-6 text-white transition-transform duration-500 transform fill-current"
                                                        viewBox="0 0 20 20">
                                                        <path
                                                            d="M13.962,8.885l-3.736,3.739c-0.086,0.086-0.201,0.13-0.314,0.13S9.686,12.71,9.6,12.624l-3.562-3.56C5.863,8.892,5.863,8.611,6.036,8.438c0.175-0.173,0.454-0.173,0.626,0l3.25,3.247l3.426-3.424c0.173-0.172,0.451-0.172,0.624,0C14.137,8.434,14.137,8.712,13.962,8.885 M18.406,10c0,4.644-3.763,8.406-8.406,8.406S1.594,14.644,1.594,10S5.356,1.594,10,1.594S18.406,5.356,18.406,10 M17.521,10c0-4.148-3.373-7.521-7.521-7.521c-4.148,0-7.521,3.374-7.521,7.521c0,4.147,3.374,7.521,7.521,7.521C14.148,17.521,17.521,14.147,17.521,10">
                                                        </path>
                                                    </svg>
                                                </h2>
                                                <div className="overflow-hidden transition-all duration-500 border-l-2 border-cyan-600 max-h-0">
                                                    <p className="p-3 text-gray-900">
                                                        Shipping time is set by our delivery partners, according to the delivery method chosen by you. Additional
                                                        details can be found in the order confirmation
                                                    </p>
                                                </div>
                                            </li>
                                            <li className="my-2 bg-white shadow-lg">
                                                <h2 className="flex flex-row items-center justify-between p-3 font-semibold cursor-pointer">
                                                    <span>Can i get reupdate of my existing projects?</span>
                                                    <svg className="w-6 h-6 transition-transform duration-500 transform fill-current text-cyan-700"
                                                        viewBox="0 0 20 20">
                                                        <path
                                                            d="M13.962,8.885l-3.736,3.739c-0.086,0.086-0.201,0.13-0.314,0.13S9.686,12.71,9.6,12.624l-3.562-3.56C5.863,8.892,5.863,8.611,6.036,8.438c0.175-0.173,0.454-0.173,0.626,0l3.25,3.247l3.426-3.424c0.173-0.172,0.451-0.172,0.624,0C14.137,8.434,14.137,8.712,13.962,8.885 M18.406,10c0,4.644-3.763,8.406-8.406,8.406S1.594,14.644,1.594,10S5.356,1.594,10,1.594S18.406,5.356,18.406,10 M17.521,10c0-4.148-3.373-7.521-7.521-7.521c-4.148,0-7.521,3.374-7.521,7.521c0,4.147,3.374,7.521,7.521,7.521C14.148,17.521,17.521,14.147,17.521,10">
                                                        </path>
                                                    </svg>
                                                </h2>
                                                <div className="overflow-hidden transition-all duration-500 border-l-2 border-cyan-600 max-h-0">
                                                    <p className="p-3 text-gray-900">
                                                        Shipping time is set by our delivery partners, according to the delivery method chosen by you. Additional
                                                        details can be found in the order confirmation
                                                    </p>
                                                </div>
                                            </li>
                                            <li className="my-2 bg-white shadow-lg">
                                                <h2 className="flex flex-row items-center justify-between p-3 font-semibold cursor-pointer">
                                                    <span>Can i get reupdate of my existing projects?</span>
                                                    <svg className="w-6 h-6 transition-transform duration-500 transform fill-current text-cyan-700"
                                                        viewBox="0 0 20 20">
                                                        <path
                                                            d="M13.962,8.885l-3.736,3.739c-0.086,0.086-0.201,0.13-0.314,0.13S9.686,12.71,9.6,12.624l-3.562-3.56C5.863,8.892,5.863,8.611,6.036,8.438c0.175-0.173,0.454-0.173,0.626,0l3.25,3.247l3.426-3.424c0.173-0.172,0.451-0.172,0.624,0C14.137,8.434,14.137,8.712,13.962,8.885 M18.406,10c0,4.644-3.763,8.406-8.406,8.406S1.594,14.644,1.594,10S5.356,1.594,10,1.594S18.406,5.356,18.406,10 M17.521,10c0-4.148-3.373-7.521-7.521-7.521c-4.148,0-7.521,3.374-7.521,7.521c0,4.147,3.374,7.521,7.521,7.521C14.148,17.521,17.521,14.147,17.521,10">
                                                        </path>
                                                    </svg>
                                                </h2>
                                                <div className="overflow-hidden transition-all duration-500 border-l-2 border-cyan-600 max-h-0">
                                                    <p className="p-3 text-gray-900">
                                                        Shipping time is set by our delivery partners, according to the delivery method chosen by you. Additional
                                                        details can be found in the order confirmation
                                                    </p>
                                                </div>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </main>
                        </div>
                    </div>
                </div>
                <div className='py-4 text-4xl font-bold text-center text-cyan-600 [text-shadow:_3px_2px_0_rgb(7_144_179_/_20%)]'>Reviews</div>
                <div className='flex justify-evenly'>
                    <Reviews />
                    <Reviews />
                </div>
            </div>
        </>
    )
}

export default products