import Navbar from "@/components/usercomponents/navbar"
import DashboardCategories from "@/components/usercomponents/dashboardcategories"
import Footer from "@/components/usercomponents/footer"

const userdashboardlayout = ({ children }) => {
    return (
        <>
            <Navbar />
            <DashboardCategories />
            {children}
            <Footer />
        </>
    )
}

export default userdashboardlayout