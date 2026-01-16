import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom'
import { useEffect } from 'react'
import { AnimatePresence, motion } from 'framer-motion'

import HomePage from './pages/HomePage'
import DesignPage from './pages/DesignPage'
import WebPage from './pages/WebPage'
import SoftwarePage from './pages/SoftwarePage'
import VfxPage from './pages/VfxPage'
import AIAutomationPage from './pages/AIAutomationPage'
import PortfolioPage from './pages/PortfolioPage'
import Navbar from './components/Navbar/Navbar'
import Footer from './components/Footer/Footer'

function ScrollToHashElement() {
    const { hash } = useLocation()

    useEffect(() => {
        if (hash) {
            const element = document.querySelector(hash)
            if (element) {
                setTimeout(() => {
                    element.scrollIntoView({ behavior: 'smooth' })
                }, 100)
            }
        }
    }, [hash])

    return null
}

function PageWrapper({ children }) {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
        >
            {children}
        </motion.div>
    )
}

function AppRoutes() {
    const location = useLocation()

    return (
        <>
            <ScrollToHashElement />
            <Navbar />
            <AnimatePresence mode="wait">
                <Routes location={location} key={location.pathname}>
                    <Route
                        path="/"
                        element={
                            <PageWrapper>
                                <HomePage />
                            </PageWrapper>
                        }
                    />
                    <Route
                        path="/servicios/diseno"
                        element={
                            <PageWrapper>
                                <DesignPage />
                            </PageWrapper>
                        }
                    />
                    <Route
                        path="/servicios/web"
                        element={
                            <PageWrapper>
                                <WebPage />
                            </PageWrapper>
                        }
                    />
                    <Route
                        path="/servicios/software"
                        element={
                            <PageWrapper>
                                <SoftwarePage />
                            </PageWrapper>
                        }
                    />
                    <Route
                        path="/servicios/vfx"
                        element={
                            <PageWrapper>
                                <VfxPage />
                            </PageWrapper>
                        }
                    />
                    <Route
                        path="/servicios/ia-automatizacion"
                        element={
                            <PageWrapper>
                                <AIAutomationPage />
                            </PageWrapper>
                        }
                    />
                    <Route
                        path="/portafolio"
                        element={
                            <PageWrapper>
                                <PortfolioPage />
                            </PageWrapper>
                        }
                    />
                </Routes>
            </AnimatePresence>
            <Footer />
        </>
    )
}

export default function App() {
    return (
        <Router>
            <AppRoutes />
        </Router>
    )
}
