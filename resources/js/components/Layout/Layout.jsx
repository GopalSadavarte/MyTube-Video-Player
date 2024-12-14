import { memo } from 'react'
import Navbar from './Navbar'
import SideBar from './SideBar'
import { usePage } from '@inertiajs/react'
const Layout = memo(({ children }) => {
    const page = usePage()
    const subscriptions = page.props.subscriptions
    return (
        <>
            <Navbar />
            <section className='flex'>
                <SideBar subscriptions={subscriptions} />
                {children}
            </section>
        </>
    )
})
export default Layout
