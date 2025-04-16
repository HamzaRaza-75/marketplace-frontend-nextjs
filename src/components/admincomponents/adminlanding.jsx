import { HiCurrencyDollar } from 'react-icons/hi'

const AdminLanding = () => {
    return (
        <>
                <div className=" w-full sm:w-fit rounded-[25px] bg-cyan-700 p-4 my-2 shadow-md">
                    <div className="flex items-center justify-between h-12">
                        <HiCurrencyDollar color='#fff' size={40 + "px"}  />
                        <span className="flex items-center justify-center p-1 text-xs font-medium text-white rounded-full w-fit h-fit bg-cyan-600">Default</span>
                    </div>
                    <div className="my-2">
                        <h2 className="text-3xl font-bold text-white"><span>$ 2680.00 </span> +</h2>
                    </div>

                    <div>
                        <p className="mt-2 font-sans text-base font-medium text-gray-100">Put The Client First</p>
                    </div>
                </div>
        </>
    )
}

export default AdminLanding