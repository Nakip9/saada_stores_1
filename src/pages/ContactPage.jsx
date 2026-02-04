import React from 'react';
import { motion } from 'framer-motion';
import { useLanguage } from '../context/LanguageContext';
import { MapPin, Phone, Mail, Send, MessageCircle, Facebook, Instagram, Clock, ArrowRight } from 'lucide-react';
import SEO from '../components/SEO';

const ContactPage = () => {
    const { t, lang } = useLanguage();
    const isRtl = lang === 'ar';

    const contactInfo = [
        {
            icon: <Phone className="w-6 h-6" />,
            title: lang === 'ar' ? 'اتصل بنا' : 'Call Us',
            value: '+967 775 576 900',
            action: lang === 'ar' ? 'اتصل الآن' : 'Call Now',
            link: 'tel:+967775576900',
            bg: 'bg-blue-50',
            color: 'text-blue-600',
        },
        {
            icon: <MessageCircle className="w-6 h-6" />,
            title: lang === 'ar' ? 'واتساب' : 'WhatsApp',
            value: '+967 775 576 900',
            action: lang === 'ar' ? 'أرسل رسالة' : 'Chat Now',
            link: 'https://wa.me/967775576900',
            bg: 'bg-green-50',
            color: 'text-green-600',
        },
        {
            icon: <Mail className="w-6 h-6" />,
            title: lang === 'ar' ? 'البريد الإلكتروني' : 'Email Us',
            value: 'khwlanbdalmlk719@gmail.com',
            action: lang === 'ar' ? 'أرسل إيميل' : 'Send Email',
            link: 'mailto:khwlanbdalmlk719@gmail.com',
            bg: 'bg-orange-50',
            color: 'text-orange-600',
        },
        {
            icon: <MapPin className="w-6 h-6" />,
            title: lang === 'ar' ? 'موقعنا' : 'Our Location',
            value: t('address'),
            action: lang === 'ar' ? 'عرض الخريطة' : 'View Map',
            link: '#map',
            bg: 'bg-purple-50',
            color: 'text-purple-600',
        }
    ];

    return (
        <div className="bg-light min-h-screen font-sans">
            <SEO
                title={t('contact')}
                description="تواصل مع محلات صعده - نحن هنا لمساعدتك في العثور على قطع الغيار المناسبة."
            />

            {/* --- HERO SECTION: Immersive & Full Image --- */}
            <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-secondary">
                 {/* High-Quality Image Background - Optimized for Mobile */}
                 <div className="absolute inset-0 z-0">
                    <img
                        src="https://ik.imagekit.io/onxay8yzf/Gemini_Generated_Image_tf1drztf1drztf1d.png"
                        alt="Contact Hero"
                        className="w-full h-full object-cover"
                        fetchPriority="high"
                    />
                 </div>
                 
                 {/* Minimal Top Vignette for Nav Contrast only */}
                 <div className="absolute top-0 left-0 right-0 h-32 bg-gradient-to-b from-black/40 to-transparent z-10"></div>
                 
                 {/* Content Overlay for Text Legibility */}
                 <div className="absolute inset-0 bg-black/20 z-0"></div>

                <div className="container mx-auto px-4 relative z-10 h-full flex flex-col justify-center items-center">
                    <motion.div
                        initial={{ opacity: 0, y: 40 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                        className="max-w-3xl bg-secondary/30 backdrop-blur-xl p-8 md:p-12 rounded-3xl border border-white/10 shadow-2xl"
                    >
                        <span className="inline-block py-1.5 px-5 rounded-full bg-blue-600/90 text-white text-xs font-black tracking-[0.2em] mb-8 uppercase shadow-lg shadow-blue-600/20">
                            {lang === 'ar' ? 'نحن هنا لخدمتك' : 'EXPERT SUPPORT'}
                        </span>
                        <h1 className="text-5xl md:text-7xl font-black text-white mb-6 leading-tight tracking-tighter drop-shadow-2xl">
                            {lang === 'ar' ? 'تواصل مع' : 'Connect with'}
                            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-blue-200 mt-2">
                                {lang === 'ar' ? 'فريق الخبراء' : 'The Experts'}
                            </span>
                        </h1>
                        <p className="text-lg md:text-2xl text-gray-100 leading-relaxed font-medium drop-shadow-md max-w-2xl mx-auto">
                            {lang === 'ar' 
                                ? 'سواء كان لديك استفسار عن منتج، أو تحتاج إلى استشارة فنية، فريقنا جاهز لخدمتك على مدار الساعة.' 
                                : 'Whether you have a product inquiry or need technical consultation, our dedicated team is ready to serve you around the clock.'}
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* --- MAIN CONTENT: Split Layout --- */}
            <section className="relative -mt-20 z-20 pb-24">
                <div className="container mx-auto px-4">
                    <div className="bg-white rounded-3xl shadow-2xl overflow-hidden border border-gray-100 flex flex-col lg:flex-row">
                        
                        {/* LEFT: Contact Info (Dark Side) */}
                        <div className="lg:w-2/5 bg-secondary text-white p-10 lg:p-14 relative overflow-hidden">
                            <div className="absolute inset-0 bg-gradient-to-br from-slate-900 to-blue-900 opacity-90"></div>
                            <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-10 mix-blend-overlay"></div>
                            
                            <div className="relative z-10 h-full flex flex-col justify-between">
                                <div>
                                    <h3 className="text-2xl font-bold mb-6">{lang === 'ar' ? 'معلومات التواصل' : 'Contact Information'}</h3>
                                    <p className="text-gray-400 mb-12 leading-relaxed">
                                        {lang === 'ar' ? 'تفضل بزيارتنا أو تواصل معنا عبر القنوات التالية. نحن نرد بسرعة!' : 'Visit us or contact us via the following channels. We reply fast!'}
                                    </p>
                                    
                                    <div className="space-y-8">
                                        {contactInfo.map((item, idx) => (
                                            <a key={idx} href={item.link} className="flex items-start gap-4 group hover:translate-x-2 transition-transform duration-300">
                                                <div className="w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center text-action group-hover:bg-action group-hover:text-white transition-colors">
                                                    {item.icon}
                                                </div>
                                                <div>
                                                    <p className="text-sm text-gray-400 font-bold uppercase tracking-wider mb-1">{item.title}</p>
                                                    <p className="text-lg font-semibold text-white group-hover:text-action transition-colors">{item.value}</p>
                                                </div>
                                            </a>
                                        ))}
                                    </div>
                                </div>

                                <div className="mt-12 pt-12 border-t border-white/10">
                                    <h4 className="font-bold mb-4 flex items-center gap-2">
                                        <Clock className="w-5 h-5 text-action" />
                                        {lang === 'ar' ? 'ساعات العمل' : 'Working Hours'}
                                    </h4>
                                    <ul className="space-y-2 text-gray-400 text-sm">
                                        <li className="flex justify-between">
                                            <span>{lang === 'ar' ? 'السبت - الخميس:' : 'Sat - Thu:'}</span>
                                            <span className="text-white font-bold">8:00 AM - 9:00 PM</span>
                                        </li>
                                        <li className="flex justify-between">
                                            <span>{lang === 'ar' ? 'الجمعة:' : 'Friday:'}</span>
                                            <span className="text-action font-bold">{lang === 'ar' ? 'مغلق' : 'Closed'}</span>
                                        </li>
                                    </ul>
                                    
                                    <div className="flex gap-4 mt-8">
                                        <a href="https://www.facebook.com/abdulmlk.mohammed" target="_blank" rel="noreferrer" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-[#1877F2] transition-colors text-white">
                                            <Facebook className="w-5 h-5" />
                                        </a>
                                        <a href="https://instagram.com/abdulmlk.mohammed" target="_blank" rel="noreferrer" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-[#E1306C] transition-colors text-white">
                                            <Instagram className="w-5 h-5" />
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* RIGHT: Direct Department Directory (Light Side) */}
                        <div className="lg:w-3/5 p-10 lg:p-14 bg-white flex flex-col justify-center">
                            <div className="mb-8">
                                <h3 className="text-2xl font-black text-secondary mb-2">
                                    {lang === 'ar' ? 'تواصل مع القسم المختص مباشرة' : 'Connect with the Right Team'}
                                </h3>
                                <p className="text-gray-500">
                                    {lang === 'ar' 
                                        ? 'لخدمة أسرع، اختر القسم الذي يناسب احتياجك وتحدث مع خبراؤنا فوراً.' 
                                        : 'For faster service, select the department that suits your needs and talk to our experts instantly.'}
                                </p>
                            </div>

                            <div className="grid gap-5">
                                {/* Sales Department */}
                                <div className="p-6 rounded-2xl border border-gray-100 hover:border-blue-200 hover:shadow-lg transition-all group bg-gray-50/50 hover:bg-white cursor-pointer">
                                    <div className="flex items-center gap-4">
                                        <div className="w-12 h-12 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center group-hover:bg-blue-600 group-hover:text-white transition-colors">
                                            <Send className="w-5 h-5" />
                                        </div>
                                        <div className="flex-1">
                                            <h4 className="font-bold text-secondary text-lg">
                                                {lang === 'ar' ? 'المبيعات وقطع الغيار' : 'Sales & Parts'}
                                            </h4>
                                            <p className="text-sm text-gray-500">
                                                {lang === 'ar' ? 'استفسارات الأسعار وتوفر المنتجات' : 'Price inquiries and product availability'}
                                            </p>
                                        </div>
                                        <a href="https://wa.me/96775576900" target="_blank" rel="noreferrer" className="px-4 py-2 rounded-lg bg-white border border-gray-200 text-gray-600 font-bold text-sm group-hover:bg-blue-600 group-hover:text-white group-hover:border-blue-600 transition-all">
                                            {lang === 'ar' ? 'تواصل' : 'Connect'}
                                        </a>
                                    </div>
                                </div>

                                {/* Wholesale Department */}
                                <div className="p-6 rounded-2xl border border-gray-100 hover:border-purple-200 hover:shadow-lg transition-all group bg-gray-50/50 hover:bg-white cursor-pointer">
                                    <div className="flex items-center gap-4">
                                        <div className="w-12 h-12 rounded-full bg-purple-100 text-purple-600 flex items-center justify-center group-hover:bg-purple-600 group-hover:text-white transition-colors">
                                            <ArrowRight className="w-5 h-5" />
                                        </div>
                                        <div className="flex-1">
                                            <h4 className="font-bold text-secondary text-lg">
                                                {lang === 'ar' ? 'إدارة الجملة والشركات' : 'Wholesale & B2B'}
                                            </h4>
                                            <p className="text-sm text-gray-500">
                                                {lang === 'ar' ? 'للطلبات الكبيرة والتوريد' : 'For bulk orders and supply'}
                                            </p>
                                        </div>
                                        <a href="tel:+967775576900" className="px-4 py-2 rounded-lg bg-white border border-gray-200 text-gray-600 font-bold text-sm group-hover:bg-purple-600 group-hover:text-white group-hover:border-purple-600 transition-all">
                                            {lang === 'ar' ? 'اتصل' : 'Call'}
                                        </a>
                                    </div>
                                </div>

                                {/* Technical Support */}
                                <div className="p-6 rounded-2xl border border-gray-100 hover:border-orange-200 hover:shadow-lg transition-all group bg-gray-50/50 hover:bg-white cursor-pointer">
                                    <div className="flex items-center gap-4">
                                        <div className="w-12 h-12 rounded-full bg-orange-100 text-orange-600 flex items-center justify-center group-hover:bg-orange-600 group-hover:text-white transition-colors">
                                            <MessageCircle className="w-5 h-5" />
                                        </div>
                                        <div className="flex-1">
                                            <h4 className="font-bold text-secondary text-lg">
                                                {lang === 'ar' ? 'الدعم الفني والاستشارات' : 'Technical Support'}
                                            </h4>
                                            <p className="text-sm text-gray-500">
                                                {lang === 'ar' ? 'تأكد من توافق القطعة مع سيارتك' : 'Verify part compatibility'}
                                            </p>
                                        </div>
                                        <a href="https://wa.me/96775576900" target="_blank" rel="noreferrer" className="px-4 py-2 rounded-lg bg-white border border-gray-200 text-gray-600 font-bold text-sm group-hover:bg-orange-600 group-hover:text-white group-hover:border-orange-600 transition-all">
                                            {lang === 'ar' ? 'واتساب' : 'Chat'}
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

             {/* Map Section */}
             <section id="map" className="pb-24 container mx-auto px-4">
                 <div className="relative h-[450px] md:h-[600px] rounded-3xl overflow-hidden shadow-2xl border border-gray-200 mx-auto w-full">
                     <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d481.01543456789!2d44.2236329!3d15.3378491!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1603dba0a150c10b%3A0x49c3ed9c83d0e33e!2z1YXYrdmE2KfYqiDYtdi52K_YqSDZhNmC2LfYuCDYutuK2KfYsSDYp9mE2LPZitmK2KfYsdmF2Kog2KjZitmI2KzZiNiqINmI2KzZhdmK2Lkg2KfZhtmI2KfYuCDYp9mE2YPYp9mI2YrYs9mF2Kog2KfZhNiq2LHZg9mK2KkgRFlORVgh!5e0!3m2!1sar!2sye!4v1700000000000"
                        width="100%"
                        height="100%"
                        style={{ border: 0 }}
                        allowFullScreen=""
                        loading="lazy"
                        className="grayscale hover:grayscale-0 transition-all duration-700"
                    ></iframe>
                     <div className="absolute top-6 right-6 left-6 md:left-auto bg-white/95 backdrop-blur px-8 py-6 rounded-2xl shadow-2xl border border-gray-100 max-w-sm">
                        <div className="flex items-center gap-3 mb-4 text-blue-600">
                            <MapPin className="w-6 h-6" />
                            <p className="font-black text-secondary text-lg leading-tight">
                                {lang === 'ar' ? 'تفضل بزيارتنا' : 'Visit Our Store'}
                            </p>
                        </div>
                        <p className="text-gray-600 text-sm leading-relaxed mb-6 font-medium">{t('address')}</p>
                        <a 
                            href="https://maps.app.goo.gl/1uciLMeuLvFJnJJp6" 
                            target="_blank" 
                            rel="noreferrer" 
                            className="w-full inline-flex items-center justify-center gap-2 bg-secondary text-white py-3 rounded-xl font-bold hover:bg-blue-600 transition-all shadow-lg shadow-blue-900/20"
                        >
                            {lang === 'ar' ? 'فتح في خرائط جوجل' : 'Open in Google Maps'} 
                            <ArrowRight className="w-4 h-4" />
                        </a>
                     </div>
                </div>
             </section>

        </div>
    );
};

export default ContactPage;
