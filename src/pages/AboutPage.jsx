import React from 'react';
import { motion } from 'framer-motion';
import { useLanguage } from '../context/LanguageContext';
import { CheckCircle, Zap, Shield, Truck, Wrench, Battery, Settings, Award, Users, Globe, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import SEO from '../components/SEO';
import Typewriter from '../components/Typewriter'; // Import Typewriter
import aboutHeroImg from '../assets/about-hero.png'; // Assuming this exists or using placeholder

const AboutPage = () => {
    const { t, lang } = useLanguage();
    const isRtl = lang === 'ar';

    const stats = [
        { value: "15+", label: lang === 'ar' ? "سنة خبرة" : "Years Experience", icon: <Award className="w-6 h-6" /> },
        { value: "10k+", label: lang === 'ar' ? "عميل سعيد" : "Happy Clients", icon: <Users className="w-6 h-6" /> },
        { value: "500+", label: lang === 'ar' ? "منتج أصلي" : "Original Parts", icon: <Settings className="w-6 h-6" /> },
        { value: "24/7", label: lang === 'ar' ? "دعم فني" : "Support", icon: <Shield className="w-6 h-6" /> },
    ];

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2
            }
        }
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0 }
    };

    return (
        <div className="bg-light min-h-screen overflow-x-hidden font-sans">
            <SEO
                title={t('about')}
                description={lang === 'ar' ? "قصة نجاح محلات صعده - الريادة في قطع غيار السيارات" : "The Success Story of Saada Stores - Leaders in Auto Parts"}
            />

                                                                        {/* --- HERO SECTION: Full Image Showcase --- */}

                                                                        <section className="relative w-full h-screen flex items-center justify-center overflow-hidden bg-secondary">

                                                                            {/* Hero Image Background - Full Impact */}
                                                                            <div className="absolute inset-0 z-0">
                                                                                <img 
                                                                                    src="https://ik.imagekit.io/onxay8yzf/Gemini_Generated_Image_d7iorfd7iorfd7io.png" 
                                                                                    alt="About Hero" 
                                                                                    className="w-full h-full object-cover"
                                                                                    fetchPriority="high"
                                                                                />
                                                                            </div>

                                                                            

                                                                            {/* Minimal Top Vignette for Nav Contrast only */}

                                                                            <div className="absolute top-0 left-0 right-0 h-32 bg-gradient-to-b from-black/30 to-transparent z-10"></div>

                                                            

                                                                            <div className="container mx-auto px-4 relative z-20 h-full flex flex-col justify-center items-center md:items-start">
                                                                                <motion.div
                                                                                    initial={{ opacity: 0, x: -30 }}
                                                                                    animate={{ opacity: 1, x: 0 }}
                                                                                    transition={{ duration: 1, ease: "easeOut" }}
                                                                                    className="max-w-2xl w-full bg-secondary/30 backdrop-blur-xl p-6 md:p-12 rounded-3xl border border-white/10 shadow-2xl"
                                                                                >
                                    
                                                                            <span className="inline-block py-1.5 px-4 rounded-full bg-action text-white text-[10px] md:text-xs font-black tracking-[0.2em] mb-6 uppercase shadow-lg shadow-action/30">
                                    
                                                                                {lang === 'ar' ? 'منذ 2010' : 'ESTABLISHED 2010'}
                                    
                                                                            </span>
                                    
                                                                            <h1 className="text-4xl md:text-6xl lg:text-7xl font-black text-white mb-6 leading-[1.1] tracking-tight drop-shadow-xl min-h-[3em] md:min-h-[2.5em]">
                                                                                <span className="block mb-2">{lang === 'ar' ? 'نحن نصنع' : 'We Create'}</span>
                                                                                <span className="text-blue-400 block">
                                                                                    <Typewriter 
                                                                                        texts={lang === 'ar' 
                                                                                            ? ['الثقة.', 'الجودة.', 'المستقبل.'] 
                                                                                            : ['Trust.', 'Quality.', 'The Future.']
                                                                                        } 
                                                                                        speed={80}
                                                                                        pause={2000}
                                                                                    />
                                                                                </span>
                                                                            </h1>
                                    
                                                                            <p className="text-base md:text-xl text-gray-100 leading-relaxed font-medium drop-shadow-md border-l-4 border-action pl-4 md:pl-6">
                                    
                                                                                {lang === 'ar' 
                                    
                                                                                    ? 'رحلة بدأت بالشغف، واستمرت بالالتزام، لتصبح اليوم معياراً للجودة في عالم قطع الغيار.' 
                                    
                                                                                    : 'A journey fueled by passion, sustained by commitment, and today, the gold standard for quality in the auto parts industry.'}
                                    
                                                                            </p>
                                    
                                                                        </motion.div>
                                    
                                                                    </div>

                                    

                                                    {/* Scroll Indicator */}

                                                    <motion.div 

                                                        animate={{ y: [0, 10, 0] }}

                                                        transition={{ repeat: Infinity, duration: 2 }}

                                                        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 hidden md:flex flex-col items-center gap-2"

                                                    >

                                                        <div className="w-px h-12 bg-gradient-to-b from-blue-400 to-transparent"></div>

                                                    </motion.div>

                                                </section>

            {/* --- STATS SECTION: Authority Indicators --- */}
            <section className="relative -mt-20 z-20 container mx-auto px-4 mb-20">
                <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12 border border-gray-100">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-8 divide-x divide-gray-100 rtl:divide-x-reverse">
                        {stats.map((stat, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 + 0.5 }}
                                className="flex flex-col items-center text-center group"
                            >
                                <div className="mb-4 p-3 bg-blue-50 text-action rounded-xl group-hover:bg-action group-hover:text-white transition-all duration-300 transform group-hover:scale-110 shadow-sm">
                                    {stat.icon}
                                </div>
                                <span className="text-3xl md:text-4xl font-black text-secondary mb-1">{stat.value}</span>
                                <span className="text-sm font-bold text-gray-500 uppercase tracking-wide">{stat.label}</span>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* --- OUR STORY: Visual Split --- */}
            <section className="py-16 container mx-auto px-4">
                <div className="flex flex-col lg:flex-row items-center gap-16">
                    {/* Visual Side */}
                    <motion.div
                        initial={{ opacity: 0, x: isRtl ? 50 : -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="lg:w-1/2 relative"
                    >
                        <div className="relative rounded-3xl overflow-hidden shadow-2xl border-4 border-white">
                            <img
                                src="https://ik.imagekit.io/onxay8yzf/Gemini_Generated_Image_7i5cv67i5cv67i5c.png"
                                alt="Modern Auto Workshop"
                                loading="lazy"
                                className="w-full h-[500px] object-cover hover:scale-105 transition-transform duration-700"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                            <div className="absolute bottom-8 left-8 right-8 text-white">
                                <p className="font-bold text-lg mb-2">{lang === 'ar' ? 'رؤيتنا' : 'Our Vision'}</p>
                                <p className="text-sm opacity-90 leading-relaxed">
                                    {lang === 'ar' ? 'أن نكون الخيار الأول لكل مالك سيارة يبحث عن الموثوقية.' : 'To be the first choice for every car owner seeking reliability.'}
                                </p>
                            </div>
                        </div>
                        {/* Floating Element */}
                        <div className="absolute -top-10 -right-10 w-40 h-40 bg-dots-pattern opacity-20 hidden md:block"></div>
                    </motion.div>

                    {/* Content Side */}
                    <motion.div
                        initial={{ opacity: 0, x: isRtl ? -50 : 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="lg:w-1/2"
                    >
                        <h2 className="text-sm font-bold text-action tracking-widest uppercase mb-2">
                            {lang === 'ar' ? 'من نحن' : 'Who We Are'}
                        </h2>
                        <h3 className="text-3xl md:text-5xl font-black text-secondary mb-8 leading-tight">
                            {lang === 'ar' ? 'رواد التميز منذ 2010' : 'Pioneering Excellence Since 2010'}
                        </h3>
                        <div className="space-y-6 text-gray-600 text-lg leading-relaxed">
                            <p>
                                {lang === 'ar'
                                    ? 'تأسست محلات صعده برؤية واضحة: سد الفجوة بين قطع الغيار العالمية عالية الجودة والسوق المحلي. بدأنا كمتجر صغير، واليوم نحن فخورون بكوننا الوكيل المعتمد لعمالقة الصناعة مثل بيكميلر وسنودا.'
                                    : 'Saada Stores was founded with a clear vision: to bridge the gap between high-quality global auto parts and the local market. We started as a small shop, and today we are proud to be the authorized agent for industry giants like Bekmeler and Sunwoda.'}
                            </p>
                            <p>
                                {lang === 'ar'
                                    ? 'نحن نؤمن بأن كل قطعة تهم. لذلك، نطبق معايير صارمة في اختيار منتجاتنا لضمان سلامتك وراحتك على الطريق.'
                                    : 'We believe every part matters. That\'s why we apply rigorous standards in selecting our products to ensure your safety and comfort on the road.'}
                            </p>
                        </div>

                        <div className="mt-10 pt-8 border-t border-gray-200 flex gap-6">
                            <Link to="/products" className="btn-secondary flex items-center gap-2">
                                {t('shopNow')} <ArrowRight className="w-4 h-4" />
                            </Link>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* --- CORE VALUES / SERVICES: Bento Grid --- */}
            <section className="py-24 bg-gray-50">
                <div className="container mx-auto px-4">
                    <div className="text-center mb-16 max-w-3xl mx-auto">
                        <h2 className="text-3xl md:text-5xl font-black text-secondary mb-6">
                            {lang === 'ar' ? 'قيمنا وخدماتنا' : 'Our Core Values'}
                        </h2>
                        <p className="text-gray-500 text-lg">
                            {lang === 'ar' ? 'ما يميزنا عن غيرنا هو التزامنا الراسخ بالمبادئ التي تضمن رضاك.' : 'What sets us apart is our unwavering commitment to principles that ensure your satisfaction.'}
                        </p>
                    </div>

                    <motion.div
                        variants={containerVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        className="grid grid-cols-1 md:grid-cols-3 gap-6"
                    >
                        {/* Item 1: Large Box */}
                        <motion.div variants={itemVariants} className="md:col-span-2 bg-white p-8 md:p-12 rounded-3xl shadow-lg border border-gray-100 hover:shadow-xl transition-all group overflow-hidden relative">
                            <div className="absolute top-0 right-0 w-64 h-64 bg-blue-50 rounded-full -mr-32 -mt-32 transition-transform group-hover:scale-150 duration-700"></div>
                            <div className="relative z-10 flex flex-col md:flex-row gap-8 items-start">
                                <div className="p-4 bg-action/10 text-action rounded-2xl">
                                    <Globe className="w-10 h-10" />
                                </div>
                                <div>
                                    <h3 className="text-2xl font-bold text-secondary mb-3">
                                        {lang === 'ar' ? 'شراكات عالمية حصرية' : 'Exclusive Global Partnerships'}
                                    </h3>
                                    <p className="text-gray-500 leading-relaxed text-lg">
                                        {lang === 'ar'
                                            ? 'بصفتنا الوكيل الحصري لشركة بيكميلر (Beklemer) وسنودا (Sunwoda) في المنطقة، نوفر لك إمكانية الوصول المباشر لأحدث تقنيات قطع الغيار دون وسطاء.'
                                            : 'As the exclusive agent for Bekmeler and Sunwoda in the region, we provide you direct access to the latest auto parts technologies without intermediaries.'}
                                    </p>
                                </div>
                            </div>
                        </motion.div>

                        {/* Item 2: Vertical Box */}
                        <motion.div variants={itemVariants} className="bg-secondary text-white p-8 rounded-3xl shadow-lg hover:-translate-y-2 transition-all relative overflow-hidden group">
                            <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                            <Shield className="w-12 h-12 mb-6 text-action" />
                            <h3 className="text-xl font-bold mb-3">{lang === 'ar' ? 'ضمان الأصالة' : 'Authenticity Guarantee'}</h3>
                            <p className="text-gray-400">
                                {lang === 'ar' ? 'لا مجال للمقلد. منتجاتنا أصلية 100% ومصحوبة بضمان المصنع.' : 'No room for fakes. Our products are 100% genuine and come with factory warranty.'}
                            </p>
                        </motion.div>

                        {/* Item 3 */}
                        <motion.div variants={itemVariants} className="bg-white p-8 rounded-3xl shadow-lg border border-gray-100 hover:-translate-y-2 transition-all">
                            <Truck className="w-12 h-12 mb-6 text-blue-600" />
                            <h3 className="text-xl font-bold text-secondary mb-3">{lang === 'ar' ? 'لوجستيات سريعة' : 'Fast Logistics'}</h3>
                            <p className="text-gray-500">
                                {lang === 'ar' ? 'شبكة توصيل تغطي كافة المناطق بسرعة وكفاءة عالية.' : 'Delivery network covering all regions with high speed and efficiency.'}
                            </p>
                        </motion.div>

                        {/* Item 4 */}
                        <motion.div variants={itemVariants} className="md:col-span-2 bg-white p-8 rounded-3xl shadow-lg border border-gray-100 hover:-translate-y-2 transition-all flex flex-col md:flex-row items-center gap-8">
                            <div className="flex-1">
                                <h3 className="text-2xl font-bold text-secondary mb-3">{lang === 'ar' ? 'خبراء فنيين في خدمتك' : 'Technical Experts at Your Service'}</h3>
                                <p className="text-gray-500 leading-relaxed mb-6">
                                    {lang === 'ar' ? 'فريقنا ليس مجرد بائعين، بل فنيين مؤهلين لمساعدتك في تشخيص احتياجك بدقة.' : 'Our team are not just sellers, but qualified technicians to help you diagnose your needs accurately.'}
                                </p>
                                <Link to="/contact" className="text-action font-bold hover:underline flex items-center gap-1">
                                    {lang === 'ar' ? 'تحدث مع خبير' : 'Talk to an Expert'} <ArrowRight className="w-4 h-4" />
                                </Link>
                            </div>
                            <div className="w-full md:w-1/3 h-48 bg-gray-100 rounded-2xl overflow-hidden relative">
                                <img src="https://ik.imagekit.io/onxay8yzf/saa.jpg" className="absolute inset-0 w-full h-full object-cover" alt="Mechanic" loading="lazy" />
                            </div>
                        </motion.div>
                    </motion.div>
                </div>
            </section>

            {/* --- FAQ SECTION: Expert Answers --- */}
            <section className="py-24 bg-white border-t border-gray-100">
                <div className="container mx-auto px-4">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl font-black text-secondary mb-4">
                            {lang === 'ar' ? 'الأسئلة الشائعة' : 'Frequently Asked Questions'}
                        </h2>
                        <p className="text-gray-500 max-w-2xl mx-auto">
                            {lang === 'ar' ? 'إجابات سريعة على ما يدور في ذهنك' : 'Quick answers to your most common concerns'}
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
                        {[
                            {
                                q: lang === 'ar' ? 'هل جميع القطع أصلية؟' : 'Are all parts genuine?',
                                a: lang === 'ar' ? 'نعم، نحن الوكيل المعتمد لبيكميلر وسنودا، ونضمن لك أصالة كل قطعة 100% مع شهادة المنشأ.' : 'Yes, as authorized agents for Bekmeler and Sunwoda, we guarantee 100% authenticity with certificates of origin.'
                            },
                            {
                                q: lang === 'ar' ? 'هل توفرون ضمان على المنتجات؟' : 'Do you offer warranty?',
                                a: lang === 'ar' ? 'بالتأكيد. جميع منتجاتنا تأتي بضمان شامل ضد عيوب التصنيع، لراحة بالك التامة.' : 'Absolutely. All our products come with a comprehensive warranty against manufacturing defects for your peace of mind.'
                            },
                            {
                                q: lang === 'ar' ? 'هل لديكم خدمة توصيل؟' : 'Do you offer shipping?',
                                a: lang === 'ar' ? 'نعم، لدينا شبكة توزيع تغطي كافة المحافظات اليمنية. اطلب قطعتك وستصلك أينما كنت.' : 'Yes, our distribution network covers all Yemeni governorates. Order your part and it will reach you wherever you are.'
                            }
                        ].map((faq, idx) => (
                            <motion.div 
                                key={idx}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: idx * 0.1 }}
                                className="bg-gray-50 p-8 rounded-2xl border border-gray-100 hover:border-action/30 hover:bg-white hover:shadow-lg transition-all group"
                            >
                                <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-sm text-action font-black text-xl mb-4 group-hover:bg-action group-hover:text-white transition-colors">
                                    ?
                                </div>
                                <h3 className="font-bold text-lg text-secondary mb-3">{faq.q}</h3>
                                <p className="text-gray-500 leading-relaxed text-sm">{faq.a}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* --- CTA: Footer Banner --- */}
            <section className="py-20 bg-gradient-to-r from-blue-900 to-slate-900 relative overflow-hidden">
                <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-20"></div>
                <div className="container mx-auto px-4 text-center relative z-10">
                    <h2 className="text-3xl md:text-5xl font-black text-white mb-8">
                        {lang === 'ar' ? 'جاهز للارتقاء بأداء سيارتك؟' : 'Ready to Upgrade Your Ride?'}
                    </h2>
                    <div className="flex justify-center gap-4">
                        <Link to="/contact" className="bg-action text-white px-8 py-4 rounded-xl font-bold text-lg shadow-lg hover:bg-blue-700 transition-all hover:-translate-y-1">
                            {lang === 'ar' ? 'تواصل معنا' : 'Contact Us'}
                        </Link>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default AboutPage;
