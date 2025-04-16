import Image from "next/image"
import Link from "next/link"
import image1 from '../../../../public/Images/bsg.jpg'

const Adminserviceproduct = () => {
    return (
        <>
            <div class="py-2">
                <div class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div class="flex flex-col md:flex-row -mx-4">
                        <div class="md:flex-1 px-4">
                            <div class="h-[460px] rounded-lg bg-gray-300 dark:bg-gray-700 mb-4">
                                <Image class="w-full h-full object-cover" src={image1} alt="Product Image" />
                            </div>

                        </div>
                        <div class="md:flex flex-col w-[50%] border border-gray-100 shadow-lg justify-center items-center px-4">
                            <div>
                                <h2 class="text-2xl font-bold text-gray-800 dark:text-white mb-2">Photography Service</h2>
                                <p class="text-gray-600 dark:text-gray-300 text-sm mb-4">
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sed
                                    ante justo. Integer euismod libero id mauris malesuada tincidunt.
                                </p>
                                <div class="flex mb-4">
                                    <div class="mr-4">
                                        <span class="font-bold text-gray-700 dark:text-gray-300">Price:</span>
                                        <span class="text-gray-600 dark:text-gray-300">$29.99</span>
                                    </div>
                                    <div>
                                        <span class="font-bold text-gray-700 dark:text-gray-300">Impressions:</span>
                                        <span class="text-gray-600 dark:text-gray-300"> 24,000</span>
                                    </div>
                                </div>
                                <div class="mb-4">
                                    <span class="font-bold text-gray-700 dark:text-gray-300">Product Category</span>
                                    <div class="flex items-center mt-2">
                                        <p class="">Graphic Design</p>
                                    </div>
                                </div>
                                <div>
                                    <span class="font-bold text-gray-700 dark:text-gray-300">Total Service Provided:</span>
                                    <p class="text-gray-600 dark:text-gray-300 text-sm mt-2">
                                        2000
                                    </p>
                                </div>
                                <div>
                                    <span class="font-bold text-gray-700 dark:text-gray-300">Active Services:</span>
                                    <p class="text-gray-600 dark:text-gray-300 text-sm mt-2">
                                        2
                                    </p>
                                </div>
                                <div>
                                    <span class="font-bold text-gray-700 dark:text-gray-300">Last Project Deliver:</span>
                                    <p class="text-gray-600 dark:text-gray-300 text-sm mt-2">
                                        6
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}

export default Adminserviceproduct