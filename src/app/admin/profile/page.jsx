import Image from "next/image"
import Link from "next/link"
import image1 from '../../../../public/Images/h16.png'

const Adminprofile = () => {
    return (
        <>
            <div className="">
                <div className="container py-8 mx-auto">
                    <div className="grid grid-cols-4 gap-6 px-4 sm:grid-cols-12">
                        <div className="col-span-4 sm:col-span-3">
                            <div className="p-6 bg-white rounded-lg shadow">
                                <div className="flex flex-col items-center">
                                    <Image src={image1} className="w-32 h-32 mb-4 bg-gray-300 rounded-full shrink-0" />
                                    <h1 className="text-xl font-bold">Ahsan Irfan</h1>
                                    <p className="text-gray-700">CEO</p>
                                    <div className="flex flex-wrap justify-center gap-4 mt-6">
                                        <Link href="#" className="px-4 py-2 text-white rounded bg-cyan-700 hover:bg-cyan-600">Dashboard</Link>
                                    </div>
                                </div>
                                <hr className="my-6 border-t border-gray-300" />
                                <div className="flex flex-col">
                                    <span className="mb-2 font-bold tracking-wider text-gray-700 uppercase">Services</span>
                                    <ul>
                                        <li className="mb-2">Academic Writting</li>
                                        <li className="mb-2">Website Designing</li>
                                        <li className="mb-2">SEO</li>
                                        <li className="mb-2">Graphic Designing</li>
                                        <li className="mb-2">Content Writing</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="col-span-4 sm:col-span-9">
                            <div className="p-6 bg-white rounded-lg shadow">
                                <h2 className="mb-4 text-xl font-bold">About Me</h2>
                                <p className="text-gray-700">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed finibus est
                                    vitae tortor ullamcorper, ut vestibulum velit convallis. Aenean posuere risus non velit egestas
                                    suscipit. Nunc finibus vel ante id euismod. Vestibulum ante ipsum primis in faucibus orci luctus
                                    et ultrices posuere cubilia Curae; Aliquam erat volutpat. Nulla vulputate pharetra tellus, in
                                    luctus risus rhoncus id.
                                </p>
                                <div className='mt-20'>
                                    <form class="w-full">   
                                    <div className='my-4 text-2xl font-bold text-cyan-600'>Change Password</div>
                                        <input type="text" id="disabled-input-2" aria-label="disabled input 2" class="bg-cyan-900 border border-cyan-900 text-white text-sm rounded-lg  block w-full p-2.5 cursor-not-allowed mb-5" value="ahsanirfan@gmail.com" disabled readonly />

                                        <div class="relative z-0 w-full mb-5 group">
                                            <input type="email" name="floating_email" id="floating_email" class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-cyan-500 focus:outline-none focus:ring-0 focus:border-cyan-600 peer" placeholder=" " required />
                                            <label for="floating_email" class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-cyan-600 peer-focus:dark:text-cyan-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Password </label>
                                        </div>
                                        <div class="relative z-0 w-full mb-5 group">
                                            <input type="password" name="floating_password" id="floating_password" class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-cyan-500 focus:outline-none focus:ring-0 focus:border-cyan-600 peer" placeholder=" " required />
                                            <label for="floating_password" class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-cyan-600 peer-focus:dark:text-cyan-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Confirm Password</label>
                                        </div>
                                        <button type="submit" class="text-white bg-cyan-700 hover:bg-cyan-800 focus:ring-4 focus:outline-none focus:ring-cyan-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center">Submit</button>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Adminprofile