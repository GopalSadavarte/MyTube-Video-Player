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
    }
})
// import '../css/app.css'
// import './bootstrap'

// import { createInertiaApp } from '@inertiajs/react'
// import { resolvePageComponent } from 'laravel-vite-plugin/inertia-helpers'
// import { createRoot } from 'react-dom/client'

// const appName = import.meta.env.VITE_APP_NAME || 'Laravel'

// createInertiaApp({
//     // title: title => `${title} - ${appName}`,
//     resolve: name =>
//         resolvePageComponent(
//             `./Pages/${name}.jsx`,
//             import.meta.glob('./Pages/**/*.jsx')
//         ),
//     setup ({ el, App, props }) {
//         const root = createRoot(el)

//         root.render(<App {...props} />)
//     },
//     progress: {
//         color: '#4B5563'
//     }
// })
