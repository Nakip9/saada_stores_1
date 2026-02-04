
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useLanguage } from '../context/LanguageContext';
import { MessageCircle, Filter, Search, ShoppingCart, Info } from 'lucide-react';
import SEO from '../components/SEO';
import productsData from '../data/products.json';

const ProductsPage = () => {
    const { t, lang } = useLanguage();
    const [filter, setFilter] = useState('all');

    const categories = [
        { id: 'all', label: t('all') },
        { id: 'batteries', label: t('batteries') },
        { id: 'brakes', label: t('brakes') },
        { id: 'solar', label: t('solar') },
        { id: 'parts', label: t('parts') },
    ];

    const products = productsData; // Use imported data

    const filteredProducts = filter === 'all'
        ? products
        : products.filter(p => p.category === filter);

    return (
        <div className="bg-light min-h-screen">
            <SEO
                title={t('products')}
                description="منتجات محلات صعده: بطاريات، فرامل، طاقة شمسية وتجهيزات متكاملة."
            />

            {/* --- HERO SECTION: Immersive Product Header --- */}
            <section className="relative w-full min-h-[60dvh] flex items-center justify-center overflow-hidden bg-secondary">
                {/* Background Image */}
                <div className="absolute inset-0 z-0">
                    <img 
                        src="https://ik.imagekit.io/onxay8yzf/Gemini_Generated_Image_tf1drztf1drztf1d.png" 
                        alt="Products Hero" 
                        className="w-full h-full object-cover"
                        fetchPriority="high"
                    />
                </div>
                
                {/* Overlays */}
                <div className="absolute inset-0 bg-gradient-to-t from-light via-secondary/40 to-transparent z-10"></div>
                <div className="absolute top-0 left-0 right-0 h-32 bg-gradient-to-b from-black/40 to-transparent z-10"></div>

                <div className="container mx-auto px-4 relative z-20 flex flex-col items-center">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        className="max-w-3xl w-full text-center bg-secondary/30 backdrop-blur-xl p-8 md:p-12 rounded-3xl border border-white/10 shadow-2xl mt-20"
                    >
                        <span className="inline-block py-1.5 px-4 rounded-full bg-blue-600/90 text-white text-[10px] font-black tracking-[0.2em] mb-6 uppercase shadow-lg">
                            {lang === 'ar' ? 'كتالوج المنتجات' : 'PRODUCT CATALOG'}
                        </span>
                        <h1 className="text-4xl md:text-6xl font-black text-white mb-4 leading-tight tracking-tight">
                            {t('productsTitle')}
                        </h1>
                        <p className="text-lg md:text-xl text-gray-200 leading-relaxed font-medium">
                            {t('productsSubtitle')}
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Content Section */}
            <section className="py-8 container mx-auto px-4 relative z-30 -mt-8 min-h-screen">
                
                {/* --- SMART FILTER BAR --- */}
                <div className="sticky top-24 z-40 mb-10">
                    <div className="bg-white/90 backdrop-blur-xl p-3 rounded-2xl shadow-xl border border-white/20 ring-1 ring-black/5 flex flex-col md:flex-row justify-between items-center gap-4">
                        
                        {/* Categories - App-like Scroll */}
                        <div className="flex overflow-x-auto w-full md:w-auto no-scrollbar gap-1 p-1">
                            {categories.map((cat) => (
                                <button
                                    key={cat.id}
                                    onClick={() => setFilter(cat.id)}
                                    className={`relative px-5 py-2.5 rounded-xl font-bold text-sm transition-all whitespace-nowrap flex-shrink-0 z-10 ${filter === cat.id
                                        ? 'text-white'
                                        : 'text-gray-500 hover:bg-gray-100'
                                        }`}
                                >
                                    {filter === cat.id && (
                                        <motion.div
                                            layoutId="activeFilter"
                                            className="absolute inset-0 bg-gradient-to-r from-blue-600 to-slate-900 rounded-xl shadow-md -z-10"
                                            transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                                        />
                                    )}
                                    {cat.label}
                                </button>
                            ))}
                        </div>

                        {/* Search Input - Clean & Minimal */}
                        <div className="relative w-full md:w-64">
                            <input 
                                type="text" 
                                placeholder={lang === 'ar' ? 'بحث...' : 'Search...'} 
                                className="w-full pl-10 pr-4 py-2.5 bg-gray-100/50 border border-gray-200 rounded-xl focus:bg-white focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all outline-none text-sm font-medium"
                            />
                            <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 w-4 h-4" />
                        </div>
                    </div>
                </div>

                {/* --- PRODUCT GRID --- */}
                <motion.div
                    layout
                    className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
                >
                    <AnimatePresence mode='popLayout'>
                        {filteredProducts.length > 0 ? (
                            filteredProducts.map((product, idx) => (
                                <motion.div
                                    layout
                                    key={product.id}
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    exit={{ opacity: 0, scale: 0.95 }}
                                    transition={{ duration: 0.3, delay: idx * 0.05 }}
                                    className="bg-white rounded-3xl overflow-hidden shadow-lg shadow-gray-200/50 hover:shadow-xl hover:shadow-blue-900/10 border border-gray-100 group flex flex-col h-full transform hover:-translate-y-1 transition-all duration-300"
                                >
                                    {/* Image Area */}
                                    <div className="relative h-60 bg-gradient-to-b from-gray-50 to-white p-6 flex items-center justify-center overflow-hidden">
                                        <div className="absolute top-4 left-4 z-10 flex gap-2">
                                            {product.featured && (
                                                <span className="bg-amber-400 text-white text-[10px] font-black px-2 py-1 rounded-lg shadow-sm uppercase tracking-wide">
                                                    {lang === 'ar' ? 'مميز' : 'FEATURED'}
                                                </span>
                                            )}
                                            <span className="bg-white/80 backdrop-blur text-blue-600 text-[10px] font-bold px-2 py-1 rounded-lg border border-blue-100 uppercase tracking-wide">
                                                {t(product.category)}
                                            </span>
                                        </div>

                                        <img
                                            src={product.image}
                                            alt={t(product.titleKey)}
                                            loading="lazy"
                                            className="w-full h-full object-contain drop-shadow-lg group-hover:scale-110 transition-transform duration-500 ease-out"
                                        />
                                        
                                        {/* Quick Actions Overlay (Desktop) */}
                                        <div className="absolute bottom-4 right-4 translate-y-10 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300 hidden md:flex gap-2">
                                            <button className="w-10 h-10 bg-white rounded-full shadow-lg text-gray-600 hover:text-blue-600 flex items-center justify-center hover:scale-110 transition-transform">
                                                <Info size={18} />
                                            </button>
                                        </div>
                                    </div>

                                    {/* Content Area */}
                                    <div className="p-5 flex flex-col flex-grow relative">
                                        <div className="flex-grow">
                                            <h3 className="font-bold text-lg text-secondary leading-tight mb-2 line-clamp-2 group-hover:text-blue-600 transition-colors">
                                                {t(product.titleKey)}
                                            </h3>
                                            <p className="text-gray-400 text-sm line-clamp-2 mb-4 font-medium">
                                                {t(product.descKey)}
                                            </p>
                                        </div>

                                        {/* Divider */}
                                        <div className="h-px w-full bg-gray-100 mb-4"></div>

                                        {/* Footer: Price & Action */}
                                        <div className="flex flex-col gap-3">
                                            <div className="flex justify-between items-end">
                                                <div>
                                                    <p className="text-xs text-gray-400 font-bold mb-0.5">{lang === 'ar' ? 'السعر' : 'Price'}</p>
                                                    <span className="font-black text-xl text-secondary">{product.price}</span>
                                                </div>
                                                <span className="flex items-center gap-1.5 text-[10px] font-bold text-emerald-600 bg-emerald-50 px-2 py-1 rounded-full">
                                                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse"></span>
                                                    {lang === 'ar' ? 'متوفر' : 'In Stock'}
                                                </span>
                                            </div>

                                            <a
                                                href="https://wa.me/967775576900"
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="w-full py-3.5 rounded-xl bg-gradient-to-r from-emerald-500 to-emerald-600 hover:from-emerald-400 hover:to-emerald-500 text-white font-bold flex items-center justify-center gap-2 shadow-lg shadow-emerald-500/20 active:scale-95 transition-all text-sm"
                                            >
                                                <MessageCircle size={18} />
                                                <span>{lang === 'ar' ? 'اطلب الآن' : 'Order Now'}</span>
                                            </a>
                                        </div>
                                    </div>
                                </motion.div>
                            ))
                        ) : (
                            <div className="col-span-full py-20 text-center flex flex-col items-center justify-center opacity-50">
                                <Filter className="w-16 h-16 text-gray-300 mb-4" />
                                <h3 className="text-xl font-bold text-gray-400">{lang === 'ar' ? 'لا توجد منتجات مطابقة' : 'No products found'}</h3>
                                <p className="text-sm text-gray-400">{lang === 'ar' ? 'جرب اختيار فئة أخرى' : 'Try selecting a different category'}</p>
                            </div>
                        )}
                    </AnimatePresence>
                </motion.div>
            </section>
        </div>
    );
};

export default ProductsPage;

