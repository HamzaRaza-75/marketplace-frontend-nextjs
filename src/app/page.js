import Image from "next/image";
import Link from "next/link";
import newlogo from '../../public/Images/logo-new.png'
import img4 from '../../public/Images/img4.jpg'
import aws from '../../public/Images/aws.jpg'
import Fade from "@/components/transitions/fade";
import Slideup from "@/components/transitions/slideup";
import content1 from '../../public/Images/content1.jpg'
import content2 from '../../public/Images/content2.jpg'
import content3 from '../../public/Images/content3.jpg'
import content4 from '../../public/Images/content4.jpg'
import content5 from '../../public/Images/content5.jpg'
import content6 from '../../public/Images/content6.jpg'
import content7 from '../../public/Images/content7.jpg'
import white from '../../public/Images/white.png'
import client1 from '../../public/Images/clients-img-1.png'
import client2 from '../../public/Images/clients-img-2.png'
import client3 from '../../public/Images/clients-img-3.png'
import client4 from '../../public/Images/clients-img-4.png'
import { FaBars } from "react-icons/fa6";

export default function Home() {
  return (
    <>
      <nav className='fixed top-0 left-0 z-50 w-full '>
        <div>
          <div className="container flex items-center justify-between px-10 py-2 mx-auto bg-cyan-600">
            <Fade>
              <Link className="text-xl font-bold text-white lg:text-2xl" href="/home">
                <Image src={newlogo} width={200} alt="fiesta content logo" priority />
              </Link>
            </Fade>
            <div className="block lg:hidden">
              <button className="flex items-center px-3 py-2 text-white border border-white rounded appearance-none hover:text-white hover:border-white focus:outline-none">
                <FaBars />
              </button>
            </div>
            <div className="hidden lg:block">
              <ul className="inline-flex">
                <li><Fade><Link href="/login" className="px-4 font-bold text-white">Login</Link> </Fade></li>
                <li><Fade><Link href="/signup" className="px-4 text-white hover:text-gray-800">Sign Up</Link></Fade></li>
              </ul>
            </div>
          </div>
        </div>
      </nav>
      <Fade>
        <div className="flex py-2 mt-12 justify-evenly bg-gradient-to-b from-cyan-600 to-green-800">
          <div className="w-[50%] px-10 py-14">
            <Fade>
              <h1 className='text-white'>
                Hire the best Freelancers for any job,
              </h1>
            </Fade>

            <h1 className='font-bold text-teal-200 underline uppercase'>online.</h1>
            <div className='flex my-10 space-x-24'>
              <button type="button" className="text-white bg-gradient-to-r from-teal-400 via-teal-500 to-teal-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-teal-300 dark:focus:ring-teal-800 shadow-lg shadow-teal-500/50 dark:shadow-lg dark:shadow-teal-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">Start Consulting</button>
              <div className="flex items-center">
                <div className="w-3 h-3 mr-2 bg-green-300 rounded-full"></div>
                <p className="text-white">Available for freelance</p>              </div>
            </div>
            <div className='flex flex-col items-center justify-center my-4 bg-white rounded-xl py-9 w-52'>
              <h1 className='text-4xl font-extrabold text-teal-600'>10K</h1>
              <p className='text-sm font-bold'>Happy Satisfied Customers</p>
            </div>
          </div>
          <div className='w-[50%] flex justify-center items-center'>
            <Image src={img4} className='rounded-full' height={400} alt="landing page image" placeholder="blur" />
          </div>
        </div>
      </Fade>

      {/* product section */}
      <div className='flex items-center justify-center my-4'>
        <Fade><p className='p-4 text-3xl font-bold text-cyan-500'>Cards Section</p></Fade>
      </div>
      <Slideup>
        <div className='flex items-center justify-between px-10 my-5'>
          <div className='flex flex-col items-center justify-center transition-all duration-500 ease-in-out rounded-lg shadow-2xl hover:-translate-y-3 w-72 hover:shadow-cyan-900'>
            <Image src={aws} alt="transition cart" />
            <p className='text-xl font-bold'>Graphic Design</p>
            <p className='p-2 text-sm text-justify'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi sed ducimus amet quia reprehenderit nostrum hic, natus!</p>
          </div>
          <div className='flex flex-col items-center justify-center transition-all duration-500 ease-in-out rounded-lg shadow-2xl hover:-translate-y-3 w-72 hover:shadow-cyan-900'>
            <Image src={aws} alt="transition cart" />
            <p className='text-xl font-bold'>Graphic Design</p>
            <p className='p-2 text-sm text-justify'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi sed ducimus amet quia reprehenderit nostrum hic, natus!</p>
          </div>
          <div className='flex flex-col items-center justify-center transition-all duration-500 ease-in-out rounded-lg shadow-2xl hover:-translate-y-3 w-72 hover:shadow-cyan-900'>
            <Image src={aws} alt="transition cart" />
            <p className='text-xl font-bold'>Graphic Design</p>
            <p className='p-2 text-sm text-justify'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi sed ducimus amet quia reprehenderit nostrum hic, natus!</p>
          </div>
          <div className='flex flex-col items-center justify-center transition-all duration-500 ease-in-out rounded-lg shadow-2xl hover:-translate-y-3 w-72 hover:shadow-cyan-900'>
            <Image src={aws} alt="transition cart" />
            <p className='text-xl font-bold'>Graphic Design</p>
            <p className='p-2 text-sm text-justify'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi sed ducimus amet quia reprehenderit nostrum hic, natus!</p>
          </div>
        </div>
      </Slideup>

      {/* product section ends here */}

      {/* work showcase section */}
      <div className='flex flex-col items-center justify-center my-10'>
        <p className='text-xl font-bold uppercase'>Collection of my project</p>
        <p className='underline uppercase underline-offset-8'>Work Showcase</p>
      </div>

      <Slideup>
        <div className='flex items-center justify-evenly'>
          <div className='flex flex-col justify-center rounded-lg w-[45%]'>
            <Image src={content1} alt="graphic design" className='rounded-lg' />
            <p className='my-2 text-xl font-bold underline underline-offset-8'>Graphic Design</p>
            <p className='py-4 text-sm font-thin text-gray-600'>Website Design, Branding</p>
          </div>
          <div className='flex flex-col justify-center rounded-lg w-[45%]'>
            <Image src={content2} alt="" className='rounded-lg' />
            <p className='my-2 text-xl font-bold underline underline-offset-8'>Graphic Design</p>
            <p className='py-4 text-sm font-thin text-gray-600'>Website Design, Branding</p>
          </div>
        </div>
      </Slideup>
      <Slideup >
        <div className='flex items-center justify-evenly'>
          <div className='flex flex-col justify-center rounded-lg w-96'>
            <Image src={content5} alt="" className='rounded-lg' />
            <p className='my-2 text-xl font-bold underline underline-offset-8'>Graphic Design</p>
            <p className='py-4 text-sm font-thin text-gray-600'>Website Design, Branding</p>
          </div>
          <div className='flex flex-col justify-center rounded-lg w-96'>
            <Image src={content6} alt="" className='rounded-lg' />
            <p className='my-2 text-xl font-bold underline underline-offset-8'>Graphic Design</p>
            <p className='py-4 text-sm font-thin text-gray-600'>Website Design, Branding</p>
          </div>
          <div className='flex flex-col justify-center rounded-lg w-96'>
            <Image src={content7} alt="" className='rounded-lg' />
            <p className='my-2 text-xl font-bold underline underline-offset-8'>Graphic Design</p>
            <p className='py-4 text-sm font-thin text-gray-600'>Website Design, Branding</p>
          </div>
        </div>
      </Slideup>
      <Slideup>
        <div className='flex items-center justify-evenly'>
          <div className='flex flex-col justify-center rounded-lg w-[45%]'>
            <Image src={content3} alt="" className='rounded-lg' />
            <p className='my-2 text-xl font-bold underline underline-offset-8'>Graphic Design</p>
            <p className='py-4 text-sm font-thin text-gray-600'>Website Design, Branding</p>
          </div>
          <div className='flex flex-col justify-center rounded-lg w-[45%]'>
            <Image src={content4} alt="" className='rounded-lg' />
            <p className='my-2 text-xl font-bold underline underline-offset-8'>Graphic Design</p>
            <p className='py-4 text-sm font-thin text-gray-600'>Website Design, Branding</p>
          </div>
        </div>
      </Slideup>

      <Slideup >
        <div className='flex items-center justify-center py-4'>
          <button type="button" className="text-cyan-700 bg-gray-100 transition-all ease-in-out hover:text-white border border-cyan-700 hover:bg-cyan-800 focus:ring-4 focus:outline-none focus:ring-cyan-300 font-medium rounded-full text-sm px-5 py-2.5 text-center me-2 mb-2">Load More</button>
        </div>
      </Slideup>


      {/* work showcase section ends here */}

      {/* stepper  */}
      <Slideup>
        <div
          className='py-24 px-28 bg-gradient-to-b from-cyan-200 to-white'>
          <h1 className='text-2xl font-bold'>Professional Experience</h1>
          <h1 className='text-4xl font-extrabold pb-9'>Work Experience</h1>
          <ol className="flex items-center w-[80vw] mx-auto justify-center ">
            <li className="flex w-full items-center text-blue-600 after:content-[''] after:w-full after:h-1 after:border-b after:border-cyan-600 after:border-4 after:inline-block dark:after:border-blue-800">
              <span className="flex items-center justify-center w-6 h-6 rounded-full bg-cyan-600 lg:h-8 lg:w-8 shrink-0">
                <Image src={white} alt="" className='w-4' />
              </span>
            </li>
            <li className="flex w-full items-center text-blue-600  after:content-[''] after:w-full after:h-1 after:border-b after:border-cyan-600 after:border-4 after:inline-block dark:after:border-blue-800">
              <span className="flex items-center justify-center w-6 h-6 rounded-full bg-cyan-600 lg:h-8 lg:w-8 shrink-0">
                <Image src={white} alt="" className='w-4' />
              </span>
            </li>
            <li className="flex items-center">
              <span className="flex items-center justify-center w-6 h-6 rounded-full bg-cyan-600 lg:h-8 lg:w-8 shrink-0">
                <Image src={white} alt="" className='w-4' />
              </span>
            </li>
          </ol>
          <ol className="flex items-center w-[80vw] mx-auto justify-center ">
            <li className="flex flex-col items-start w-full">
              <p className='text-xl text-cyan-600'>2018 to present</p>
              <p className='text-gray-600'>Graphic Designer</p>
            </li>
            <li className="flex flex-col items-center w-full">
              <p className='text-xl font-bold text-cyan-600'>2018 to present</p>
              <p className='text-gray-600'>Graphic Designer</p>
            </li>
            <li className="flex flex-col items-end w-full">
              <p className='text-xl font-bold text-cyan-600'>2018 to present</p>
              <p className='text-gray-600'>Graphic Designer</p>
            </li>
          </ol>

          <div className='flex items-center justify-between mt-8 '>
            <div className="w-56 h-auto p-4 rounded-md shadow-lg bg-gradient-to-b from-white to bg-cyan-200"><p className='text-xl font-bold'>Evato Studio</p> <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit.</p></div>
            <div className="w-56 h-auto p-4 rounded-md shadow-lg bg-gradient-to-b from-white to bg-cyan-200"><p className='text-xl font-bold'>Evato Studio</p> <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit.</p></div>
            <div className="w-56 h-auto p-4 rounded-md shadow-lg bg-gradient-to-b from-white to bg-cyan-200"><p className='text-xl font-bold'>Evato Studio</p> <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit.</p></div>
          </div>
        </div>
      </Slideup>

      {/* stepper end */}

      {/* contact us form */}
      <Slideup>
        <section
          className="py-6 dark:bg-gray-800 dark:text-gray-50">
          <div
            className="grid max-w-6xl grid-cols-1 px-6 mx-auto lg:px-8 md:grid-cols-2 md:divide-x">
            <div className="py-6 md:py-0 md:px-6">
              <h1 className="text-4xl font-bold">Get in touch</h1>
              <p className="pt-2 pb-4">Fill in the form to start a conversation</p>
              <div className="space-y-4">
                <p className="flex items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5 mr-2 sm:mr-6">
                    <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd"></path>
                  </svg>
                  <span>Fake address, 9999 City</span>
                </p>
                <p className="flex items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5 mr-2 sm:mr-6">
                    <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z"></path>
                  </svg>
                  <span>123456789</span>
                </p>
                <p className="flex items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5 mr-2 sm:mr-6">
                    <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"></path>
                    <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"></path>
                  </svg>
                  <span>contact@business.com</span>
                </p>
              </div>
            </div>
            <form className="flex flex-col py-6 space-y-6 md:py-0 md:px-6">
              <label className="block">
                <span className="mb-1">Full name</span>
                <input type="text" placeholder="Leroy Jenkins" className="block w-full rounded-md shadow-sm focus:ring focus:ri dark:bg-gray-800" />
              </label>
              <label className="block">
                <span className="mb-1">Email address</span>
                <input type="email" placeholder="leroy@jenkins.com" className="block w-full rounded-md shadow-sm focus:ring focus:ri dark:bg-gray-800" />
              </label>
              <label className="block">
                <span className="mb-1">Message</span>
                <textarea rows="3" className="block w-full rounded-md focus:ring focus:ri"></textarea>
              </label>
              <button type="button" className="self-center px-6 py-2 text-lg text-white transition-all ease-in-out rounded-full bg-cyan-600 hover:scale-110">Submit</button>
            </form>
          </div>
        </section>
      </Slideup>
      {/* contact us form ends here */}

      {/* sponsered componies section */}
      <Slideup>
        <div className='flex items-center justify-center'>
          <Image src={client1} alt="" />
          <Image src={client2} alt="" />
          <Image src={client3} alt="" />
          <Image src={client4} alt="" />
        </div>
      </Slideup>

      {/* sponserer componies section ends here */}

      {/* Footer container */}
      <Slideup>
        <footer className="flex flex-col items-center text-center text-white bg-cyan-600">
          <div className="container px-6 pt-6">
            <div className="flex justify-center mb-6">
              <Link href="#" type="button"
                className="m-1 leading-normal text-white uppercase transition duration-150 ease-in-out border-2 border-white rounded-full h-9 w-9 hover:bg-black hover:bg-opacity-5 focus:outline-none focus:ring-0"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-full mx-auto" fill="currentColor"
                  viewBox="0 0 24 24">
                  <path
                    d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z" />
                </svg>
              </Link>

              <Link href="#" type="button"
                className="m-1 leading-normal text-white uppercase transition duration-150 ease-in-out border-2 border-white rounded-full h-9 w-9 hover:bg-black hover:bg-opacity-5 focus:outline-none focus:ring-0"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-full mx-auto" fill="currentColor"
                  viewBox="0 0 24 24">
                  <path
                    d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" />
                </svg>
              </Link>

              <Link href="#" type="button"
                className="m-1 leading-normal text-white uppercase transition duration-150 ease-in-out border-2 border-white rounded-full h-9 w-9 hover:bg-black hover:bg-opacity-5 focus:outline-none focus:ring-0"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-full mx-auto" fill="currentColor"
                  viewBox="0 0 24 24">
                  <path
                    d="M7 11v2.4h3.97c-.16 1.029-1.2 3.02-3.97 3.02-2.39 0-4.34-1.979-4.34-4.42 0-2.44 1.95-4.42 4.34-4.42 1.36 0 2.27.58 2.79 1.08l1.9-1.83c-1.22-1.14-2.8-1.83-4.69-1.83-3.87 0-7 3.13-7 7s3.13 7 7 7c4.04 0 6.721-2.84 6.721-6.84 0-.46-.051-.81-.111-1.16h-6.61zm0 0 17 2h-3v3h-2v-3h-3v-2h3v-3h2v3h3v2z"
                  />
                </svg>
              </Link>

              <Link href="#" type="button"
                className="m-1 leading-normal text-white uppercase transition duration-150 ease-in-out border-2 border-white rounded-full h-9 w-9 hover:bg-black hover:bg-opacity-5 focus:outline-none focus:ring-0"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-full mx-auto" fill="currentColor"
                  viewBox="0 0 24 24">
                  <path
                    d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                </svg>
              </Link>

              <Link href="#" type="button"
                className="m-1 leading-normal text-white uppercase transition duration-150 ease-in-out border-2 border-white rounded-full h-9 w-9 hover:bg-black hover:bg-opacity-5 focus:outline-none focus:ring-0"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-full mx-auto" fill="currentColor"
                  viewBox="0 0 24 24">
                  <path
                    d="M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38 1.11-2.5 2.48-2.5s2.48 1.12 2.48 2.5zm.02 4.5h-5v16h5v-16zm7.982 0h-4.968v16h4.969v-8.399c0-4.67 6.029-5.052 6.029 0v8.399h4.988v-10.131c0-7.88-8.922-7.593-11.018-3.714v-2.155z" />
                </svg>
              </Link>

              <Link href="#" type="button"
                className="m-1 leading-normal text-white uppercase transition duration-150 ease-in-out border-2 border-white rounded-full h-9 w-9 hover:bg-black hover:bg-opacity-5 focus:outline-none focus:ring-0"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-full mx-auto" fill="currentColor"
                  viewBox="0 0 24 24">
                  <path
                    d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                </svg>
              </Link>
            </div>
          </div>

          <div className="w-full p-4 text-center bg-black bg-opacity-20">
            © 2023 Copyright:
            <Link className="text-whitehite" href="https://tw-elements.com/">Fiesta Content Solutions</Link>
          </div>
        </footer>
      </Slideup>
    </>
  );
}
