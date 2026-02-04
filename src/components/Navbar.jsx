import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Phone, Globe } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { motion, AnimatePresence } from 'framer-motion';
import logo from '../assets/logo.svg';

const Navbar = () => {
    const { t, lang, switchLanguage } = useLanguage();
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const location = useLocation();

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);


    const navLinks = [
        { name: t('home'), path: '/' },
        { name: t('about'), path: '/about' },
        { name: t('products'), path: '/products' },
        { name: t('contact'), path: '/contact' },
    ];

    return (
        <motion.nav
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.5, type: "spring" }}
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${scrolled
                ? 'bg-white/80 backdrop-blur-lg border-b border-gray-200/50 shadow-lg'
                : 'bg-transparent border-b border-white/10'
                }`}
        >
                        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                            <div className="flex justify-between items-center h-16 lg:h-24">
                                
                                {/* --- LOGO SECTION (DESKTOP) --- */}
                                <Link to="/" className="hidden lg:flex items-center gap-4 group">
                                    <div className="relative bg-white p-2 rounded-2xl border border-gray-100 shadow-sm group-hover:shadow-md transition-all">
                                        <img src={logo} alt="Saada Store" className="h-12 w-12 object-contain" />
                                    </div>
                                    <div className="flex flex-col justify-center">
                                        <span className={`text-2xl font-black tracking-tight leading-none transition-colors ${scrolled ? 'text-secondary' : 'text-white'}`}>
                                            {lang === 'ar' ? 'محلات صعده' : 'Saada Store'}
                                        </span>
                                        <span className={`text-[10px] font-bold tracking-[0.2em] uppercase mt-1 ${scrolled ? 'text-gray-400' : 'text-gray-300'}`}>
                                            {lang === 'ar' ? 'لقطع الغيار الأصلية' : 'GENUINE PARTS'}
                                        </span>
                                    </div>
                                </Link>
            
                                {/* --- MOBILE HEADER --- */}
                                <div className="lg:hidden flex items-center justify-between w-full">
                                    <button
                                        onClick={() => setIsOpen(!isOpen)}
                                        className={`p-2.5 rounded-xl transition-colors border shadow-sm ${scrolled 
                                            ? 'bg-gray-50 text-secondary border-gray-100' 
                                            : 'bg-white/10 text-white border-white/20 backdrop-blur-md'}`}
                                    >
                                        <AnimatePresence mode="wait">
                                            {isOpen ? <X size={22} /> : <Menu size={22} />}
                                        </AnimatePresence>
                                    </button>

                                    <Link to="/" className="flex items-center gap-2">
                                        <span className={`text-xl font-black uppercase tracking-tighter ${scrolled ? 'text-secondary' : 'text-white'}`}>
                                            {lang === 'ar' ? 'محلات صعده' : 'Saada Store'}
                                        </span>
                                    </Link>

                                    <div className={`w-11 h-11 p-1.5 rounded-xl border shadow-sm flex items-center justify-center ${scrolled ? 'bg-white border-gray-100' : 'bg-white/10 border-white/20 backdrop-blur-md'}`}>
                                        <img src={logo} alt="Saada Store" className="w-full h-full object-contain" />
                                    </div>
                                </div>
            
                                {/* --- DESKTOP ACTIONS --- */}
                                <div className="hidden lg:flex items-center gap-8">
                                    <div className={`flex items-center gap-1 p-1 rounded-full border transition-all ${scrolled ? 'bg-gray-100/50 border-gray-200' : 'bg-white/5 border-white/10 backdrop-blur-sm'}`}>
                                        {navLinks.map((link) => (
                                            <Link
                                                key={link.path}
                                                to={link.path}
                                                className={`px-6 py-2.5 rounded-full font-bold text-sm transition-all ${
                                                    location.pathname === link.path
                                                    ? (scrolled ? 'bg-white text-blue-600 shadow-sm' : 'bg-white/20 text-white shadow-sm')
                                                    : (scrolled ? 'text-gray-500 hover:text-gray-900 hover:bg-gray-100' : 'text-gray-200 hover:text-white hover:bg-white/10')
                                                }`}
                                            >
                                                {link.name}
                                            </Link>
                                        ))}
                                    </div>
            
                                    <div className="flex items-center gap-3">
                                        <button 
                                            onClick={switchLanguage}
                                            className={`w-10 h-10 rounded-full flex items-center justify-center transition-colors border ${scrolled 
                                                ? 'bg-gray-50 hover:bg-gray-100 text-gray-600 border-gray-200' 
                                                : 'bg-white/10 hover:bg-white/20 text-white border-white/10'}`}
                                        >
                                            <Globe size={18} />
                                        </button>
                
                                        <Link 
                                            to="/contact"
                                            className={`px-8 py-3.5 rounded-2xl font-bold transition-all shadow-lg hover:-translate-y-0.5 active:scale-95 text-sm ${scrolled
                                                ? 'bg-blue-600 hover:bg-blue-700 text-white shadow-blue-600/20'
                                                : 'bg-white text-secondary hover:bg-gray-100 shadow-white/10'}`}
                                        >
                                            {lang === 'ar' ? 'اطلب عرض سعر' : 'Request Quote'}
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
            {/* --- MOBILE FULLSCREEN MENU --- */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 z-40 bg-white/95 backdrop-blur-xl lg:hidden flex flex-col pt-28 px-6 pb-10"
                    >
                        {/* Links */}
                        <div className="flex flex-col gap-4 flex-grow">
                            {navLinks.map((link, idx) => (
                                <motion.div
                                    key={link.path}
                                    initial={{ opacity: 0, x: -20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ delay: 0.1 + idx * 0.1 }}
                                >
                                    <Link
                                        to={link.path}
                                        onClick={() => setIsOpen(false)}
                                        className={`flex items-center justify-between p-5 rounded-2xl text-lg font-bold transition-all ${
                                            location.pathname === link.path
                                            ? 'bg-blue-50 text-blue-600 border border-blue-100'
                                            : 'bg-gray-50 text-gray-600 border border-transparent'
                                        }`}
                                    >
                                        {link.name}
                                        {location.pathname === link.path && <div className="w-2 h-2 rounded-full bg-blue-600" />}
                                    </Link>
                                </motion.div>
                            ))}
                        </div>

                        {/* Mobile Footer Actions */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.5 }}
                            className="mt-auto grid grid-cols-2 gap-4"
                        >
                            <button 
                                onClick={() => { switchLanguage(); setIsOpen(false); }}
                                className="flex items-center justify-center gap-2 p-4 rounded-2xl bg-gray-100 text-secondary font-bold"
                            >
                                <Globe size={20} />
                                {lang === 'ar' ? 'English' : 'العربية'}
                            </button>
                            <Link 
                                to="/contact"
                                onClick={() => setIsOpen(false)}
                                className="flex items-center justify-center gap-2 p-4 rounded-2xl bg-blue-600 text-white font-bold shadow-lg shadow-blue-600/20"
                            >
                                {lang === 'ar' ? 'اطلب الآن' : 'Quote'}
                            </Link>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </motion.nav>
    );
};

export default Navbar;
