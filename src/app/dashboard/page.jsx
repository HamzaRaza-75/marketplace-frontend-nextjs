'use client'
import Image from 'next/image';
import Sliderimage from '../../../public/Images/webslider.jpg'
import ServiceCart from '@/components/usercomponents/servicecart';
import Carousel from '@/components/usercomponents/carousel';

const page = () => {

    const slides = [
        Sliderimage,
        Sliderimage,
        Sliderimage
    ];
    return (
        <>
            <div className='flex justify-between min-w-full'>
                <div className="flex items-center justify-start">
                    <div className="w-[65vw] h-auto">
                        {/* <Image src={Sliderimage} alt='' className='w-full' /> */}
                        <Carousel autoSlide={true}>
                            {[...slides.map((s) => (
                                <Image src={s} className='w-full h-full' />
                            ))]}
                        </Carousel>

                    </div>
                </div>
                <div className='flex flex-col items-center justify-evenly '>
                    <Image src={Sliderimage} alt="" className='w-96' />
                    <Image src={Sliderimage} alt="" className='w-96' />
                </div>
            </div>
            <div className='m-5'>
                <span className='text-3xl font-bold leading-tight text-cyan-600 [text-shadow:_3px_2px_0_rgb(7_144_179_/_20%)]'>Top Rated Services</span>
                <div className='flex flex-row items-center my-5 justify-evenly'>
                    <ServiceCart />
                    <ServiceCart />
                    <ServiceCart />
                    <ServiceCart />
                </div>
            </div>
            <div className='m-5'>
                <span className='text-3xl font-bold leading-tight text-cyan-600 [text-shadow:_3px_2px_0_rgb(7_144_179_/_20%)]'>New Items</span>
                <div className='flex flex-row items-center my-5 justify-evenly'>
                    <ServiceCart />
                    <ServiceCart />
                    <ServiceCart />
                    <ServiceCart />
                </div>
            </div>
            <div className='m-5'>
                <span className='text-3xl font-bold leading-tight text-cyan-600 [text-shadow:_3px_2px_0_rgb(7_144_179_/_20%)]'>Top Rated Sellers</span>
                <div className='flex flex-row items-center my-5 justify-evenly'>
                    <ServiceCart />
                    <ServiceCart />
                    <ServiceCart />
                    <ServiceCart />
                </div>
            </div>
        </>
    )
}

export default page