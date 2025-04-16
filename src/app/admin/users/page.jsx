import Image from "next/image";
import Link from "next/link";
import image1 from '../../../../public/Images/h16.png'
import { HiMiniUserMinus } from "react-icons/hi2";

const Adminusers = () => {
  return (
    <>
      <div class="relative overflow-x-auto shadow-md sm:rounded-lg">
        <div class="flex items-center justify-between flex-column md:flex-row flex-wrap space-y-4 md:space-y-0 py-4 bg-white dark:bg-gray-900">
          <label for="table-search" class="sr-only">Search</label>
          <div class="relative ml-4">
            <div class="absolute inset-y-0 rtl:inset-r-0 start-0 flex items-center ps-3 pointer-events-none">
              <svg class="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" />
              </svg>
            </div>
            <input type="text" id="table-search-users" class="block ps-10 p-4 text-sm text-gray-900 border border-gray-300 rounded-lg w-80 bg-gray-50 focus:ring-cyan-500 focus:border-cyan-500 " placeholder="Search for users" />
          </div>
        </div>
        <table class="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
          <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th scope="col" class="p-4">
                <div class="flex items-center">
                  <input id="checkbox-all-search" type="checkbox" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
                  <label for="checkbox-all-search" class="sr-only">checkbox</label>
                </div>
              </th>
              <th scope="col" class="px-6 py-3">
                Name
              </th>
              <th scope="col" class="px-6 py-3">
                Gender
              </th>
              <th scope="col" class="px-6 py-3">
                Role
              </th>
              <th scope="col" class="px-6 py-3">
                Action
              </th>
            </tr>
          </thead>
          <tbody>
        
            <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
              <td class="w-4 p-4">
                <div class="flex items-center">
                  <input id="checkbox-table-search-1" type="checkbox" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
                  <label for="checkbox-table-search-1" class="sr-only">checkbox</label>
                </div>
              </td>
              <th scope="row" class="flex items-center px-6 py-4 text-gray-900 whitespace-nowrap dark:text-white">
                <Image class="w-10 h-10 rounded-full" src={image1} alt="Jese image" />
                <div class="ps-3">
                  <div class="text-base font-semibold">Neil Sims</div>
                  <div class="font-normal text-gray-500">neil.sims@flowbite.com</div>
                </div>
              </th>
              <td class="px-6 py-4">
                Male
              </td>
              <td class="px-6 py-4">
                <div class="flex items-center">
                 Admin
                </div>
              </td>
              <td class="px-6 py-4">
                <div className='flex items-center justify-start'>
                <div className='flex items-center justify-center p-2 border rounded-xl bg-cyan-800 w-fit'>
                <HiMiniUserMinus size={24} color='white' />
                </div>
                <div className='flex items-center justify-center p-2 border rounded-xl bg-cyan-800 w-fit'>
                <HiMiniUserMinus size={24} color='white' />
                </div>
                </div>
              </td>
            </tr>
            <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
              <td class="w-4 p-4">
                <div class="flex items-center">
                  <input id="checkbox-table-search-1" type="checkbox" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
                  <label for="checkbox-table-search-1" class="sr-only">checkbox</label>
                </div>
              </td>
              <th scope="row" class="flex items-center px-6 py-4 text-gray-900 whitespace-nowrap dark:text-white">
                <Image class="w-10 h-10 rounded-full" src={image1} alt="Jese image" />
                <div class="ps-3">
                  <div class="text-base font-semibold">Neil Sims</div>
                  <div class="font-normal text-gray-500">neil.sims@flowbite.com</div>
                </div>
              </th>
              <td class="px-6 py-4">
                Male
              </td>
              <td class="px-6 py-4">
                <div class="flex items-center">
                 Admin
                </div>
              </td>
              <td class="px-6 py-4">
                <div className='flex items-center justify-start'>
                <div className='flex items-center justify-center p-2 border rounded-xl bg-cyan-800 w-fit'>
                <HiMiniUserMinus size={24} color='white' />
                </div>
                <div className='flex items-center justify-center p-2 border rounded-xl bg-cyan-800 w-fit'>
                <HiMiniUserMinus size={24} color='white' />
                </div>
                </div>
              </td>
            </tr>
            <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
              <td class="w-4 p-4">
                <div class="flex items-center">
                  <input id="checkbox-table-search-1" type="checkbox" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
                  <label for="checkbox-table-search-1" class="sr-only">checkbox</label>
                </div>
              </td>
              <th scope="row" class="flex items-center px-6 py-4 text-gray-900 whitespace-nowrap dark:text-white">
                <Image class="w-10 h-10 rounded-full" src={image1} alt="Jese image" />
                <div class="ps-3">
                  <div class="text-base font-semibold">Neil Sims</div>
                  <div class="font-normal text-gray-500">neil.sims@flowbite.com</div>
                </div>
              </th>
              <td class="px-6 py-4">
                Male
              </td>
              <td class="px-6 py-4">
                <div class="flex items-center">
                 Admin
                </div>
              </td>
              <td class="px-6 py-4">
                <div className='flex items-center justify-start'>
                <div className='flex items-center justify-center p-2 border rounded-xl bg-cyan-800 w-fit'>
                <HiMiniUserMinus size={24} color='white' />
                </div>
                <div className='flex items-center justify-center p-2 border rounded-xl bg-cyan-800 w-fit'>
                <HiMiniUserMinus size={24} color='white' />
                </div>
                </div>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </>
  )
}

export default Adminusers