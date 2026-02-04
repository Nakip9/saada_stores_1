import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Home, ArrowLeft } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import SEO from '../components/SEO';

const NotFoundPage = () => {
    const { t, lang } = useLanguage();

    return (
        <div className="min-h-[80vh] flex items-center justify-center bg-light px-4">
            <SEO title="404 - Not Found" description="Page not found" />
            
            <div className="text-center max-w-lg">
                <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5 }}
                    className="relative mb-8"
                >
                    <h1 className="text-9xl font-black text-gray-200">404</h1>
                    <div className="absolute inset-0 flex items-center justify-center">
                        <span className="text-2xl font-bold text-secondary uppercase tracking-widest bg-light px-4">
                            {lang === 'ar' ? 'الصفحة غير موجودة' : 'Page Not Found'}
                        </span>
                    </div>
                </motion.div>

                <p className="text-gray-500 mb-8 text-lg">
                    {lang === 'ar' 
                        ? 'عذراً، يبدو أن الصفحة التي تبحث عنها قد تم نقلها أو حذفها.' 
                        : 'Sorry, the page you are looking for might have been removed or moved.'}
                </p>

                <div className="flex justify-center gap-4">
                    <Link to="/" className="btn-primary flex items-center gap-2">
                        <Home size={20} />
                        {t('home')}
                    </Link>
                    <button onClick={() => window.history.back()} className="btn-secondary flex items-center gap-2 bg-gray-200 text-gray-700 hover:bg-gray-300">
                        <ArrowLeft size={20} />
                        {lang === 'ar' ? 'عودة' : 'Go Back'}
                    </button>
                </div>
            </div>
        </div>
    );
};

export default NotFoundPage;
