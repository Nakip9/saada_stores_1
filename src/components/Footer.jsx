import React from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';
import { Facebook, Instagram, Twitter, MapPin, Phone, Mail, ArrowRight, Send } from 'lucide-react';
import logo from '../assets/logo.svg';

const Footer = () => {
    const { t, lang } = useLanguage();
    const isRtl = lang === 'ar';

    return (
        <footer className="bg-secondary text-white pt-16 pb-10 border-t-4 border-primary">
            <div className="container mx-auto px-6">
                <div className="flex flex-col lg:grid lg:grid-cols-3 gap-12 lg:gap-16 mb-12 text-center lg:text-start">
                    
                    {/* Column 1: Brand & About */}
                    <div className="flex flex-col items-center lg:items-start gap-6">
                        <img src={logo} alt="Saada Store" loading="lazy" className="h-32 w-32 md:h-48 md:w-48 object-contain drop-shadow-2xl" />
                        <div className="flex flex-col">
                            <span className="text-3xl md:text-4xl font-black bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent tracking-tight">
                                {lang === 'ar' ? 'محلات صعده' : 'Saada Store'}
                            </span>
                            <span className="text-xs md:text-sm font-bold text-gray-400 uppercase tracking-widest mt-2">
                                {lang === 'ar' ? 'جملة وتجزئة' : 'Retail & Wholesale'}
                            </span>
                        </div>
                        <p className="text-gray-400 leading-relaxed text-sm md:text-base max-w-md mx-auto lg:mx-0">
                            {lang === 'ar' 
                                ? 'الخيار الأول لقطع غيار السيارات الأصلية في اليمن. نوفر حلولاً متكاملة للأفراد وتجار الجملة مع ضمان الجودة العالية والأسعار التنافسية.' 
                                : 'The premier choice for genuine auto parts in Yemen. We provide comprehensive solutions for individuals and wholesalers with a guarantee of high quality and competitive pricing.'}
                        </p>
                        <div className="flex justify-center lg:justify-start gap-4">
                            {[Facebook, Instagram, Twitter].map((Icon, idx) => (
                                <a 
                                    key={idx} 
                                    href="#" 
                                    className="w-10 h-10 md:w-12 md:h-12 rounded-xl bg-white/5 flex items-center justify-center hover:bg-primary hover:text-white transition-all duration-300 hover:-translate-y-1 shadow-lg"
                                >
                                    <Icon size={18} />
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* Column 2: Quick Links */}
                    <div className="lg:pl-12 flex flex-col items-center lg:items-start">
                        <h3 className="text-xl md:text-2xl font-bold mb-6 md:mb-8 border-b-4 lg:border-b-0 lg:border-l-4 border-primary pb-2 lg:pb-0 lg:pl-4 inline-block">
                            {lang === 'ar' ? 'روابط سريعة' : 'Quick Links'}
                        </h3>
                        <ul className="space-y-4 md:space-y-5 w-full flex flex-col items-center lg:items-start">
                            {[
                                { name: t('home'), path: '/' },
                                { name: t('about'), path: '/about' },
                                { name: t('products'), path: '/products' },
                                { name: t('contact'), path: '/contact' }
                            ].map((link) => (
                                <li key={link.path}>
                                    <Link 
                                        to={link.path} 
                                        className="text-gray-400 hover:text-primary transition-colors flex items-center gap-3 group text-base md:text-lg font-medium"
                                    >
                                        <span className={`hidden lg:block w-2 h-2 rounded-full bg-primary/50 group-hover:bg-primary transition-colors`} />
                                        {link.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Column 3: Contact Info */}
                    <div className="flex flex-col items-center lg:items-start">
                        <h3 className="text-xl md:text-2xl font-bold mb-6 md:mb-8 border-b-4 lg:border-b-0 lg:border-l-4 border-primary pb-2 lg:pb-0 lg:pl-4 inline-block">
                            {lang === 'ar' ? 'تواصل معنا' : 'Contact Us'}
                        </h3>
                        <div className="space-y-6 md:space-y-8 w-full max-w-sm">
                            <div className="bg-white/5 p-6 rounded-2xl border border-white/5 hover:border-primary/30 transition-colors text-center lg:text-start">
                                <h4 className="text-primary font-bold mb-4 flex flex-col lg:flex-row items-center gap-2 justify-center lg:justify-start">
                                    <MapPin size={20} />
                                    {lang === 'ar' ? 'المقر الرئيسي' : 'Headquarters'}
                                </h4>
                                <p className="text-gray-300 text-sm md:text-base">
                                    {lang === 'ar' ? 'صنعاء، شارع تعز، اليمن' : 'Sanaa, Taiz Street, Yemen'}
                                </p>
                            </div>

                            <ul className="space-y-4 md:space-y-5">
                                <li className="flex flex-col lg:flex-row items-center gap-4 text-gray-300 group cursor-pointer justify-center lg:justify-start">
                                    <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-colors">
                                        <Phone size={20} />
                                    </div>
                                    <span dir="ltr" className="font-bold text-base md:text-lg">+967 775 576 900</span>
                                </li>
                                <li className="flex flex-col lg:flex-row items-center gap-4 text-gray-300 group cursor-pointer justify-center lg:justify-start">
                                    <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-colors">
                                        <Mail size={20} />
                                    </div>
                                    <span className="font-medium text-sm md:text-base">khwlanbdalmlk719@gmail.com</span>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-6 text-sm text-gray-500">
                    <p className="font-medium">
                        &copy; {new Date().getFullYear()} {lang === 'ar' ? 'محلات صعده لقطع الغيار. جميع الحقوق محفوظة.' : 'Saada Store Auto Parts. All Rights Reserved.'}
                    </p>
                    <div className="flex gap-8">
                        <Link to="#" className="hover:text-primary transition-colors">{lang === 'ar' ? 'سياسة الخصوصية' : 'Privacy Policy'}</Link>
                        <Link to="#" className="hover:text-primary transition-colors">{lang === 'ar' ? 'الشروط والأحكام' : 'Terms & Conditions'}</Link>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;