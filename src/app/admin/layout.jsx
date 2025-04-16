import Adminsidebar from "@/components/admincomponents/adminsidebar"
import Adminheader from "@/components/admincomponents/adminheader"


const AdminLayout = ({ children }) => {
    return (
        <>

            <Adminsidebar />
            <Adminheader />
            <div className='ml-0 md:ml-[18vw] px-12 mt-[11vh] background bg-gray-50 min-h-[88vh] '>
                {children}
            </div>


        </>
    )
}

export default AdminLayout
