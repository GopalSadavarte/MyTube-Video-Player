import Navbar from './Navbar'
import SideBar from './SideBar'
export default function Layout ({ children }) {
    return (
        <>
            <Navbar />
            <section className='flex'>
                <SideBar />
                {children}
            </section>
        </>
    )
}
