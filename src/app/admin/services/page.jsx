import Image from "next/image"
import image1 from '../../../../public/Images/h16.png'

const Adminservices = () => {
    return (
        <>
            <div class="relative overflow-x-auto shadow-md sm:rounded-lg">
                <table class="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                    <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                        <tr>
                            <th scope="col" class="px-16 py-3">
                                <span class="">Image</span>
                            </th>
                            <th scope="col" class="px-6 py-3">
                                Product
                            </th>
                            <th scope="col" class="px-6 py-3">
                                category
                            </th>
                            <th scope="col" class="px-6 py-3">
                                Price
                            </th>
                            <th scope="col" class="px-6 py-3">
                                Action
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                            <td class="p-4">
                                <Image src={image1} class="w-16 md:w-32 max-w-full max-h-full" alt="Apple Watch" />
                            </td>
                            <td class="px-6 py-4 font-semibold text-gray-900 dark:text-white">
                                Apple Watch
                            </td>
                            <td class="px-6 py-4">
                                Academic Writing
                            </td>
                            <td class="px-6 py-4 font-semibold text-gray-900 dark:text-white">
                                $599
                            </td>
                            <td class="px-6 py-4">
                                <a href="#" class="font-medium text-red-600 dark:text-red-500 hover:underline">Remove</a>
                            </td>
                        </tr>
                        <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                            <td class="p-4">
                                <Image src={image1} class="w-16 md:w-32 max-w-full max-h-full" alt="Apple Watch" />
                            </td>
                            <td class="px-6 py-4 font-semibold text-gray-900 dark:text-white">
                                Apple Watch
                            </td>
                            <td class="px-6 py-4">
                                Academic Writing
                            </td>
                            <td class="px-6 py-4 font-semibold text-gray-900 dark:text-white">
                                $599
                            </td>
                            <td class="px-6 py-4">
                                <a href="#" class="font-medium text-red-600 dark:text-red-500 hover:underline">Remove</a>
                            </td>
                        </tr><tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                            <td class="p-4">
                                <Image src={image1} class="w-16 md:w-32 max-w-full max-h-full" alt="Apple Watch" />
                            </td>
                            <td class="px-6 py-4 font-semibold text-gray-900 dark:text-white">
                                Apple Watch
                            </td>
                            <td class="px-6 py-4">
                                Academic Writing
                            </td>
                            <td class="px-6 py-4 font-semibold text-gray-900 dark:text-white">
                                $599
                            </td>
                            <td class="px-6 py-4">
                                <a href="#" class="font-medium text-red-600 dark:text-red-500 hover:underline">Remove</a>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>

        </>
    )
}

export default Adminservices