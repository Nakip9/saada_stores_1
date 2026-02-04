import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import { useLanguage } from '../context/LanguageContext';

const Layout = ({ children }) => {
    const { dir } = useLanguage();
    return (
        <div dir="rtl" className="min-h-screen flex flex-col font-sans">
            <Navbar />
            <main className="flex-grow">
                {children}
            </main>
            <Footer />
        </div>
    );
};

export default Layout;
