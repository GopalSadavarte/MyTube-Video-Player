import { ToggleMenuContext } from './components/Elements/ToggleMenuContext'
import { createInertiaApp } from '@inertiajs/react'
import { createRoot } from 'react-dom/client'
import { StrictMode } from 'react'
import { Toaster } from 'react-hot-toast'
import '../css/app.css'
createInertiaApp({
    resolve: name => {
        const pages = import.meta.glob('./Pages/**/*.jsx', { eager: true })
        return pages[`./Pages/${name}.jsx`]
    },
    setup ({ el, App, props }) {
        createRoot(el).render(
            <StrictMode>
                <ToggleMenuContext>
                    <Toaster position='top-center' />
                    <App {...props} />
                </ToggleMenuContext>
            </StrictMode>
        )
    },
    progress: {
        color: 'red'
    }
})
