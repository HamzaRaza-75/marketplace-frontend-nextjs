'use client'

import Image from "next/image";
import Link from "next/link";
import image1 from '../../../public/Images/h16.png'
import { FiTrash2, FiEdit } from "react-icons/fi";
import AdminLanding from "@/components/admincomponents/adminlanding";
import AdminChart from "@/components/admincomponents/adminchart";

const adminpage = () => {
  return (
    <>
      <div className='flex flex-col flex-wrap items-between flex-center sm:flex-row sm:justify-between sm:items-center'>
        <AdminLanding />
        <AdminLanding />
        <AdminLanding />
        <AdminLanding />
      </div>
      <div className='flex flex-col justify-center w-full p-5 bg-gray-100 rounded-lg items-between md:justify-between md:items-center md:flex-row'>
        <AdminChart />

        <div className='w-[50%]'>
          <div className="flex items-center mb-2 ">
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
          <p className="text-sm font-medium text-gray-500 dark:text-gray-400">1,745 global ratings</p>
          <div className="flex items-center mt-4">
            <Link href="#" className="text-sm font-medium text-blue-600 dark:text-blue-500 hover:underline">5 star</Link>
            <div className="w-2/4 h-5 mx-4 bg-gray-200 rounded dark:bg-gray-700">
              <div className="h-5 rounded bg-cyan-500" style={{ width: 70 + "%" }}></div>
            </div>
            <span className="text-sm font-medium text-gray-500 dark:text-gray-400">70%</span>
          </div>
          <div className="flex items-center mt-4">
            <Link href="#" className="text-sm font-medium text-blue-600 dark:text-blue-500 hover:underline">4 star</Link>
            <div className="w-2/4 h-5 mx-4 bg-gray-200 rounded dark:bg-gray-700">
              <div className="h-5 rounded bg-cyan-500" style={{ width: 17 + "%" }}></div>
            </div>
            <span className="text-sm font-medium text-gray-500 dark:text-gray-400">17%</span>
          </div>
          <div className="flex items-center mt-4">
            <Link href="#" className="text-sm font-medium text-blue-600 dark:text-blue-500 hover:underline">3 star</Link>
            <div className="w-2/4 h-5 mx-4 bg-gray-200 rounded dark:bg-gray-700">
              <div className="h-5 rounded bg-cyan-500" style={{ width: 8 + "%" }}></div>
            </div>
            <span className="text-sm font-medium text-gray-500 dark:text-gray-400">8%</span>
          </div>
          <div className="flex items-center mt-4">
            <Link href="#" className="text-sm font-medium text-blue-600 dark:text-blue-500 hover:underline">2 star</Link>
            <div className="w-2/4 h-5 mx-4 bg-gray-200 rounded dark:bg-gray-700">
              <div className="h-5 rounded bg-cyan-500" style={{ width: 4 + "%" }}></div>
            </div>
            <span className="text-sm font-medium text-gray-500 dark:text-gray-400">4%</span>
          </div>
          <div className="flex items-center mt-4">
            <Link href="#" className="text-sm font-medium text-blue-600 dark:text-blue-500 hover:underline">1 star</Link>
            <div className="w-2/4 h-5 mx-4 bg-gray-200 rounded dark:bg-gray-700">
              <div className="h-5 rounded bg-cyan-500" style={{ width: 1 + "%" }}></div>
            </div>
            <span className="text-sm font-medium text-gray-500 dark:text-gray-400">1%</span>
          </div>
        </div>
      </div>
      <div className="my-5 overflow-hidden border border-gray-200 rounded-lg shadow-md">
        <table className="w-full text-sm text-left text-gray-500 bg-white border-collapse">
          <thead className="bg-gray-50">
            <tr>
              <th scope="col" className="px-6 py-4 font-medium text-gray-900">Name</th>
              <th scope="col" className="px-6 py-4 font-medium text-gray-900">State</th>
              <th scope="col" className="px-6 py-4 font-medium text-gray-900">Role</th>
              <th scope="col" className="px-6 py-4 font-medium text-gray-900">Team</th>
              <th scope="col" className="px-6 py-4 font-medium text-gray-900"></th>
            </tr>
          </thead>
          <tbody className="border-t border-gray-100 divide-y divide-gray-100">
            <tr className="hover:bg-gray-50">
              <th className="flex gap-3 px-6 py-4 font-normal text-gray-900">
                <div className="relative w-10 h-10">
                  <Image
                    className="object-cover object-center w-full h-full rounded-full"
                    src={image1}
                    alt="" width={100} height={100}
                  />
                  <span className="absolute bottom-0 right-0 w-2 h-2 bg-green-400 rounded-full ring ring-white"></span>
                </div>
                <div className="text-sm">
                  <div className="font-medium text-gray-700">Steven Jobs</div>
                  <div className="text-gray-400">jobs@sailboatui.com</div>
                </div>
              </th>
              <td className="px-6 py-4">
                <span
                  className="inline-flex items-center gap-1 px-2 py-1 text-xs font-semibold text-green-600 rounded-full bg-green-50"
                >
                  <span className="h-1.5 w-1.5 rounded-full bg-green-600"></span>
                  Active
                </span>
              </td>
              <td className="px-6 py-4">Product Designer</td>
              <td className="px-6 py-4">
                <div className="flex gap-2">
                  <span
                    className="inline-flex items-center gap-1 px-2 py-1 text-xs font-semibold text-blue-600 rounded-full bg-blue-50"
                  >
                    Design
                  </span>
                  <span
                    className="inline-flex items-center gap-1 px-2 py-1 text-xs font-semibold text-indigo-600 rounded-full bg-indigo-50"
                  >
                    Product
                  </span>
                  <span
                    className="inline-flex items-center gap-1 px-2 py-1 text-xs font-semibold rounded-full bg-violet-50 text-violet-600"
                  >
                    Develop
                  </span>
                </div>
              </td>
              <td className="px-6 py-4">
                <div className="flex justify-end gap-4">
                  <Link href="#" className='p-2 border-none rounded-lg bg-cyan-700'>
                    <FiTrash2 size={16} color='white' />
                  </Link>
                  <Link href="#" className='p-2 bg-red-700 border-none rounded-lg'>
                    <FiEdit size={16} color='white' />
                  </Link>
                </div>
              </td>
            </tr>
            <tr className="hover:bg-gray-50">
              <th className="flex gap-3 px-6 py-4 font-normal text-gray-900">
                <div className="relative w-10 h-10">
                  <Image
                    className="object-cover object-center w-full h-full rounded-full"
                    src={image1}
                    alt=""
                  />
                  <span className="absolute bottom-0 right-0 w-2 h-2 bg-green-400 rounded-full ring ring-white"></span>
                </div>
                <div className="text-sm">
                  <div className="font-medium text-gray-700">Steven Jobs</div>
                  <div className="text-gray-400">jobs@sailboatui.com</div>
                </div>
              </th>
              <td className="px-6 py-4">
                <span
                  className="inline-flex items-center gap-1 px-2 py-1 text-xs font-semibold text-green-600 rounded-full bg-green-50"
                >
                  <span className="h-1.5 w-1.5 rounded-full bg-green-600"></span>
                  Active
                </span>
              </td>
              <td className="px-6 py-4">Product Designer</td>
              <td className="px-6 py-4">
                <div className="flex gap-2">
                  <span
                    className="inline-flex items-center gap-1 px-2 py-1 text-xs font-semibold text-blue-600 rounded-full bg-blue-50"
                  >
                    Design
                  </span>
                  <span
                    className="inline-flex items-center gap-1 px-2 py-1 text-xs font-semibold text-indigo-600 rounded-full bg-indigo-50"
                  >
                    Product
                  </span>
                  <span
                    className="inline-flex items-center gap-1 px-2 py-1 text-xs font-semibold rounded-full bg-violet-50 text-violet-600"
                  >
                    Develop
                  </span>
                </div>
              </td>
              <td className="px-6 py-4">
                <div className="flex justify-end gap-4">
                  <Link href="#" className='p-2 border-none rounded-lg bg-cyan-700'>
                    <FiTrash2 size={16} color='white' />
                  </Link>
                  <Link href="#" className='p-2 bg-red-700 border-none rounded-lg'>
                    <FiEdit size={16} color='white' />
                  </Link>
                </div>
              </td>
            </tr>
            <tr className="hover:bg-gray-50">
              <th className="flex gap-3 px-6 py-4 font-normal text-gray-900">
                <div className="relative w-10 h-10">
                  <Image
                    className="object-cover object-center w-full h-full rounded-full"
                    src={image1}
                    alt=""
                  />
                  <span className="absolute bottom-0 right-0 w-2 h-2 bg-green-400 rounded-full ring ring-white"></span>
                </div>
                <div className="text-sm">
                  <div className="font-medium text-gray-700">Steven Jobs</div>
                  <div className="text-gray-400">jobs@sailboatui.com</div>
                </div>
              </th>
              <td className="px-6 py-4">
                <span
                  className="inline-flex items-center gap-1 px-2 py-1 text-xs font-semibold text-green-600 rounded-full bg-green-50"
                >
                  <span className="h-1.5 w-1.5 rounded-full bg-green-600"></span>
                  Active
                </span>
              </td>
              <td className="px-6 py-4">Product Designer</td>
              <td className="px-6 py-4">
                <div className="flex gap-2">
                  <span
                    className="inline-flex items-center gap-1 px-2 py-1 text-xs font-semibold text-blue-600 rounded-full bg-blue-50"
                  >
                    Design
                  </span>
                  <span
                    className="inline-flex items-center gap-1 px-2 py-1 text-xs font-semibold text-indigo-600 rounded-full bg-indigo-50"
                  >
                    Product
                  </span>
                  <span
                    className="inline-flex items-center gap-1 px-2 py-1 text-xs font-semibold rounded-full bg-violet-50 text-violet-600"
                  >
                    Develop
                  </span>
                </div>
              </td>
              <td className="px-6 py-4">
                <div className="flex justify-end gap-4">
                  <Link href="#" className='p-2 border-none rounded-lg bg-cyan-700'>
                    <FiTrash2 size={16} color='white' />
                  </Link>
                  <Link href="#" className='p-2 bg-red-700 border-none rounded-lg'>
                    <FiEdit size={16} color='white' />
                  </Link>
                </div>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </>
  )
}

export default adminpage