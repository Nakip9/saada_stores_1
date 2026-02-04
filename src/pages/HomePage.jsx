import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import {
  Truck, Zap, Wrench, Circle, Shield,
  PhoneCall, Star, CheckCircle, ArrowRight, ArrowLeft,
  ShoppingCart
} from 'lucide-react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';
import SEO from '../components/SEO';
import PartnersCarousel from '../components/PartnersCarousel';
import ProductCarousel from '../components/ProductCarousel';
import productsData from '../data/products.json';
import aboutHeroImg from '../assets/about-hero.png';
import heroBg from '../assets/hero.png';
import beklemerLogo from '../assets/beklemer.webp';
import heroPremiumImg from '../assets/hero-premium.png';

// Placeholder Categories
const categories = [
  { id: 1, nameKey: 'brakes', icon: <Circle className="w-8 h-8" />, color: 'bg-slate-100 text-slate-700 group-hover:bg-primary group-hover:text-white' },
  { id: 2, nameKey: 'batteries', icon: <Zap className="w-8 h-8" />, color: 'bg-blue-50 text-blue-600 group-hover:bg-primary group-hover:text-white' },
  { id: 3, nameKey: 'parts', icon: <Truck className="w-8 h-8" />, color: 'bg-indigo-50 text-indigo-600 group-hover:bg-primary group-hover:text-white' },
  { id: 4, nameKey: 'solar', icon: <Wrench className="w-8 h-8" />, color: 'bg-sky-50 text-sky-600 group-hover:bg-primary group-hover:text-white' },
];

// Typewriter Component
const Typewriter = ({ texts, speed = 100, pause = 2000 }) => {
  const [displayText, setDisplayText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [textIndex, setTextIndex] = useState(0);

  useEffect(() => {
    const currentText = texts[textIndex];
    let timer;

    if (isDeleting) {
      if (currentIndex > 0) {
        timer = setTimeout(() => {
          setDisplayText(currentText.substring(0, currentIndex - 1));
          setCurrentIndex(prev => prev - 1);
        }, speed / 2);
      } else {
        setIsDeleting(false);
        setTextIndex((prev) => (prev + 1) % texts.length);
      }
    } else {
      if (currentIndex < currentText.length) {
        timer = setTimeout(() => {
          setDisplayText(currentText.substring(0, currentIndex + 1));
          setCurrentIndex(prev => prev + 1);
        }, speed);
      } else {
        timer = setTimeout(() => setIsDeleting(true), pause);
      }
    }

    return () => clearTimeout(timer);
  }, [currentIndex, isDeleting, textIndex, texts, speed, pause]);

  return (
    <span className="inline-block min-h-[1.2em]">
      {displayText}
      <span className="animate-pulse text-action">|</span>
    </span>
  );
};

const HomePage = () => {
  const { t, lang } = useLanguage();
  const isRtl = lang === 'ar';
  const featuredProducts = productsData.filter(p => p.featured);

  return (
    <div className="bg-light min-h-screen">
      <SEO
        title={t('home')}
        description={lang === 'ar' ? "أفضل قطع غيار السيارات في اليمن" : "Best Auto Parts in Yemen"}
      />

      {/* --- HERO SECTION: Immersive Premium Redesign --- */}
      <section className="relative w-full min-h-[100dvh] flex flex-col justify-center overflow-hidden bg-slate-900">

        {/* Background Image - Cinematic Breathe Animation */}
        <div className="absolute inset-0 z-0 overflow-hidden">
          <motion.div
            animate={{ scale: [1, 1.05, 1] }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            className="w-full h-full"
          >
            <img
              src={heroBg}
              alt="Hero Background"
              className="w-full h-full object-cover"
              fetchPriority="high"
            />
          </motion.div>
          {/* Noise Texture Overlay for Premium Feel */}
          <div className="absolute inset-0 opacity-[0.03] z-[5] pointer-events-none mix-blend-overlay" style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")` }}></div>
          
          {/* Enhanced Overlays */}
          <div className="absolute inset-0 bg-gradient-to-b from-slate-900/80 via-slate-900/50 to-slate-900/90 z-10"></div>
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-blue-900/20 via-transparent to-transparent z-10"></div>
        </div>

        {/* Content Container */}
        <div className="container mx-auto px-4 relative z-20 flex flex-col items-center pt-32 pb-12 md:py-0">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            className="max-w-5xl mx-auto text-center"
          >
            {/* Brand Badge - Floating Animation */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1, y: [0, -5, 0] }}
              transition={{ 
                opacity: { delay: 0.2, duration: 0.5 },
                scale: { delay: 0.2, duration: 0.5 },
                y: { repeat: Infinity, duration: 4, ease: "easeInOut" }
              }}
              className="inline-flex items-center gap-2 py-1.5 px-4 md:py-2 md:px-6 rounded-full bg-white/5 backdrop-blur-md border border-white/10 text-blue-200 text-[10px] md:text-xs font-black tracking-[0.3em] mb-4 md:mb-8 uppercase shadow-2xl ring-1 ring-white/5"
            >
              <Star className="w-3 h-3 md:w-4 md:h-4 text-action fill-action animate-pulse" />
              {lang === 'ar' ? 'منذ 2010' : 'ESTABLISHED 2010'}
            </motion.div>

            {/* Main Title - Extreme Impact with Animated Gradient */}
            <h1 className="text-5xl sm:text-6xl md:text-8xl lg:text-9xl font-black text-white tracking-tighter mb-4 md:mb-8 leading-[0.9] drop-shadow-[0_10px_10px_rgba(0,0,0,0.5)]">
              <span className="block mb-1 md:mb-2">
                {lang === 'ar' ? 'محلات صعده' : 'SAADA'}
              </span>
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-200 via-white to-blue-200 animate-gradient pb-2">
                {lang === 'ar' ? 'التجارية' : 'STORES'}
              </span>
            </h1>

            {/* Premium Divider */}
            <div className="flex items-center justify-center gap-4 mb-4 md:mb-8">
              <div className="h-px w-8 md:w-16 bg-gradient-to-r from-transparent to-blue-500/50"></div>
              <div className="text-blue-400 font-black tracking-widest uppercase text-[10px] md:text-sm drop-shadow-md">
                {lang === 'ar' ? 'الوكيل المعتمد' : 'AUTHORIZED AGENT'}
              </div>
              <div className="h-px w-8 md:w-16 bg-gradient-to-l from-transparent to-blue-500/50"></div>
            </div>

            {/* Typewriter - High Visibility */}
            <div className="text-lg md:text-4xl font-bold text-gray-100 h-12 md:h-20 flex items-center justify-center mb-4 md:mb-8 drop-shadow-lg">
              <Typewriter
                texts={lang === 'ar'
                  ? ['بيكملر التركية', 'ويل بارت العالمية', 'سنودا للطاقة']
                  : ['Bekmeler Turkish', 'Wellpart Global', 'Sunwoda Energy']
                }
                speed={50}
                pause={3000}
              />
            </div>

            {/* Description - Floating Glass Card */}
            <motion.div 
              animate={{ y: [0, 8, 0] }}
              transition={{ repeat: Infinity, duration: 6, ease: "easeInOut" }}
              className="max-w-3xl mx-auto bg-slate-900/40 backdrop-blur-xl border border-white/10 p-5 md:p-8 rounded-2xl md:rounded-[2rem] shadow-2xl mb-8 md:mb-12 relative overflow-hidden group"
            >
              {/* Card Highlight Effect */}
              <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/20 to-transparent"></div>
              
              <p className="text-gray-200 text-sm md:text-xl font-medium leading-relaxed italic opacity-90 relative z-10">
                "{lang === 'ar'
                  ? 'شراكة حصرية مع كبرى الشركات العالمية لضمان أعلى معايير الجودة والأداء لسيارتك. وجهتك الموثوقة لقطع الغيار الأصلية.'
                  : 'Exclusive partnerships with top global manufacturers ensuring the highest standards of quality and performance for your vehicle.'}"
              </p>
            </motion.div>

            {/* Action Buttons - Modern & Balanced */}
            <div className="flex flex-col sm:flex-row gap-4 md:gap-6 justify-center items-center w-full">
              <Link to="/products" className="w-full sm:w-auto group relative flex items-center justify-center gap-2 md:gap-3 bg-action hover:bg-blue-600 text-white font-black py-4 px-6 md:py-5 md:px-10 rounded-xl md:rounded-2xl shadow-[0_0_40px_rgba(37,99,235,0.3)] transition-all hover:-translate-y-1 active:scale-95 overflow-hidden ring-1 ring-white/20">
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
                <span className="text-base md:text-lg relative z-10">{t('shopNow')}</span>
                <ArrowRight className="w-5 h-5 md:w-6 md:h-6 group-hover:translate-x-1 transition-transform relative z-10" />
              </Link>

              <Link to="/contact" className="w-full sm:w-auto flex items-center justify-center gap-2 md:gap-3 py-4 px-6 md:py-5 md:px-10 rounded-xl md:rounded-2xl font-black bg-white/5 border border-white/10 backdrop-blur-md hover:bg-white text-white hover:text-secondary transition-all shadow-2xl text-base md:text-lg hover:shadow-[0_0_30px_rgba(255,255,255,0.2)]">
                {lang === 'ar' ? 'تواصل معنا' : 'Contact Us'}
                <PhoneCall className="w-5 h-5 md:w-6 md:h-6" />
              </Link>
            </div>

          </motion.div>
        </div>

        {/* Dynamic Floating Background Details - Hidden on Mobile */}
        <motion.div 
          animate={{ scale: [1, 1.2, 1], opacity: [0.2, 0.3, 0.2] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          className="hidden md:block absolute -bottom-24 -right-24 w-96 h-96 bg-blue-600/30 rounded-full blur-[120px] pointer-events-none"
        ></motion.div>
        <motion.div 
          animate={{ scale: [1, 1.2, 1], opacity: [0.2, 0.3, 0.2] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 1 }}
          className="hidden md:block absolute -top-24 -left-24 w-96 h-96 bg-action/20 rounded-full blur-[120px] pointer-events-none"
        ></motion.div>

        {/* Scroll Indicator - Hidden on Mobile */}
        <motion.div
          animate={{ y: [0, 10, 0], opacity: [0.4, 1, 0.4] }}
          transition={{ repeat: Infinity, duration: 2.5 }}
          className="hidden md:flex absolute bottom-10 left-1/2 -translate-x-1/2 z-20 flex-col items-center gap-3"
        >
          <span className="text-[10px] text-white/40 font-black tracking-[0.3em] uppercase">{lang === 'ar' ? 'اكتشف' : 'Explore'}</span>
          <div className="w-1 h-12 bg-gradient-to-b from-action to-transparent rounded-full"></div>
        </motion.div>
      </section>

      {/* --- QUICK PRODUCT ACCESS (Under Hero) --- */}
      <section className="relative -mt-16 z-20 pb-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { title: lang === 'ar' ? 'البطاريات' : 'Batteries', img: 'https://ik.imagekit.io/onxay8yzf/Gemini_Generated_Image_35fsds35fsds35fs.png', link: '/products' },
              { title: lang === 'ar' ? 'فحمات الفرامل' : 'Brake Pads', img: 'https://ik.imagekit.io/onxay8yzf/ChatGPT%20Image%20Feb%203,%202026,%2008_58_35%20AM.png', link: '/products' },
              { title: lang === 'ar' ? 'قطع الغيار' : 'Spare Parts', img: 'https://ik.imagekit.io/onxay8yzf/ChatGPT%20Image%20Feb%203,%202026,%2008_55_09%20AM.png', link: '/products' },
              { title: lang === 'ar' ? 'ألواح الطاقة الشمسية' : 'Solar Panels', img: 'https://ik.imagekit.io/onxay8yzf/Gemini_Generated_Image_dwebpmdwebpmdweb.png', link: '/products' },
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 + 0.5 }}
                className="group bg-surface rounded-xl shadow-card hover:shadow-card-hover overflow-hidden transition-all duration-300 border border-gray-100"
              >
                <div className="relative h-40 overflow-hidden bg-gray-50 p-6 flex items-center justify-center">
                  <img
                    src={item.img}
                    alt={item.title}
                    loading="lazy"
                    className="w-full h-full object-contain group-hover:scale-110 transition-transform duration-500"
                  />
                </div>
                <div className="p-4 text-center border-t border-gray-100">
                  <h3 className="font-bold text-lg text-secondary group-hover:text-primary transition-colors">{item.title}</h3>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* --- TRUST BADGES --- */}
      <section className="bg-white border-b border-gray-100">
        <div className="container mx-auto px-4 py-10">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {[
              { icon: <Shield className="w-6 h-6" />, text: t('feature2') }, // Warranty
              { icon: <Star className="w-6 h-6" />, text: t('feature1') }, // Quality
              { icon: <Truck className="w-6 h-6" />, text: lang === 'ar' ? 'شحن سريع' : 'Fast Shipping' },
              { icon: <PhoneCall className="w-6 h-6" />, text: t('service') } // Support
            ].map((item, idx) => (
              <div key={idx} className="flex flex-col items-center gap-3 text-gray-600 group">
                <div className="p-4 bg-light rounded-full text-primary group-hover:bg-primary group-hover:text-white transition-colors">
                  {item.icon}
                </div>
                <span className="font-bold text-sm uppercase tracking-wide">{item.text}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* --- BEKMELER TURKISH PARTNERSHIP (NEW PREMIUM SECTION) --- */}
      <section className="relative py-24 bg-secondary overflow-hidden">
        {/* Background Elements - Cleaned */}
        <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-white/5 to-transparent"></div>
        <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-pulse"></div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="flex flex-col lg:flex-row items-center gap-16">

            {/* Visual Brand Side */}
            <motion.div
              initial={{ opacity: 0, x: isRtl ? 50 : -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="lg:w-1/2 relative"
            >
              <div className="relative z-10 p-10 bg-white/5 backdrop-blur-lg border border-white/10 rounded-2xl shadow-2xl transform hover:rotate-1 transition-transform duration-500">
                <img
                  src={beklemerLogo}
                  alt="Beklemer Turkish"
                  loading="lazy"
                  className="w-full h-auto object-contain max-h-48 drop-shadow-2xl"
                />

                {/* Floating Badge */}
                <div className="absolute -top-6 -right-6 bg-action text-white p-4 rounded-xl shadow-lg shadow-action/40 rotate-12">
                  <Star className="w-8 h-8 fill-white" />
                </div>
              </div>
            </motion.div>

            {/* Content Side */}
            <div className="lg:w-1/2 space-y-8 text-center lg:text-start">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 text-action font-bold text-sm mb-6 border border-white/10">
                  <Shield className="w-4 h-4" />
                  {lang === 'ar' ? 'شريك استراتيجي حصري' : 'Exclusive Strategic Partner'}
                </div>

                <h2 className="text-4xl lg:text-5xl font-black text-white leading-tight mb-6">
                  {lang === 'ar' ? 'بيكميلر التركية' : 'Bekmeler Turkish'}
                  <br />
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-gray-200 to-gray-500 text-3xl lg:text-4xl block mt-2">
                    {lang === 'ar' ? 'قمة الهندسة والجودة' : 'Pinnacle of Engineering'}
                  </span>
                </h2>

                <p className="text-gray-400 text-lg leading-relaxed mb-8">
                  {lang === 'ar'
                    ? 'نفخر بشراكتنا الحصرية مع شركة بيكميلر التركية، الرائدة عالمياً في تصنيع قطع الغيار عالية الأداء. نقدم لكم منتجات تم اختبارها في أقسى الظروف لضمان الجودة والمتانة التي تستحقونها.'
                    : 'We are proud of our exclusive partnership with Bekmeler Turkish, a global leader in manufacturing high-performance auto parts. We bring you products tested in the harshest conditions to ensure the quality and durability you deserve.'}
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {[
                    { title: lang === 'ar' ? 'جودة تركية أصلية' : 'Genuine Turkish Quality', desc: lang === 'ar' ? 'مصنعة بأحدث التقنيات' : 'Manufactured with latest tech' },
                    { title: lang === 'ar' ? 'استيراد مباشر' : 'Direct Import', desc: lang === 'ar' ? 'من المصنع إليك مباشرة' : 'Direct from factory to you' },
                    { title: lang === 'ar' ? 'أداء مضمون' : 'Guaranteed Performance', desc: lang === 'ar' ? 'خضعت لاختبارات صارمة' : 'Rigorous testing passed' },
                    { title: lang === 'ar' ? 'أسعار تنافسية' : 'Competitive Pricing', desc: lang === 'ar' ? 'أفضل قيمة مقابل المال' : 'Best value for money' },
                  ].map((item, idx) => (
                    <div key={idx} className="bg-white/5 p-4 rounded-xl border border-white/5 hover:bg-white/10 transition-colors text-start">
                      <h4 className="font-bold text-white mb-1 flex items-center gap-2">
                        <CheckCircle className="w-4 h-4 text-action" />
                        {item.title}
                      </h4>
                      <p className="text-gray-500 text-sm pl-6">{item.desc}</p>
                    </div>
                  ))}
                </div>

                <div className="pt-8">
                  <Link to="/products" className="inline-flex items-center gap-2 btn-action hover:-translate-y-1">
                    {lang === 'ar' ? 'تصفح منتجات بيكميلر' : 'Explore Bekmeler Products'}
                    <ArrowRight className="w-5 h-5" />
                  </Link>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* --- SHOP BY CATEGORY & FEATURED --- */}
      <section className="py-24 bg-light">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <span className="text-primary font-bold tracking-widest uppercase text-sm">{t('featuredProducts')}</span>
            <h2 className="text-4xl lg:text-5xl font-black text-secondary mt-4">
              {lang === 'ar' ? 'نخبة المنتجات المختارة' : 'Featured Collection'}
            </h2>
          </div>

          <ProductCarousel products={featuredProducts} />

          <div className="mt-16 text-center">
            <Link to="/products" className="inline-flex items-center gap-3 btn-secondary">
              {t('viewAll')}
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* --- COMPANY SUMMARY & EXCELLENCE --- */}
      <section className="relative w-full bg-white overflow-hidden">
        <div className="flex flex-col lg:flex-row min-h-[600px]">

          {/* Visual Side - Full Width/Height Image */}
          <div className="relative lg:w-1/2 min-h-[400px] lg:min-h-full group">
            <div className="absolute inset-0 bg-secondary/20 group-hover:bg-transparent transition-colors duration-500 z-10"></div>
            <img
              src="https://ik.imagekit.io/onxay8yzf/unwatermarked_Gemini_Generated_Image_aodxkgaodxkgaodx.png"
              alt="Expert Mechanics"
              loading="lazy"
              className="absolute inset-0 w-full h-full object-cover transform hover:scale-105 transition-transform duration-1000"
              onError={(e) => { e.target.src = aboutHeroImg }}
            />

            {/* Floating Experience Badge */}
            <div className="absolute bottom-8 left-8 lg:bottom-12 lg:left-12 z-20 bg-surface/90 backdrop-blur-md p-6 rounded-xl border-l-4 border-primary shadow-2xl max-w-xs">
              <p className="text-5xl font-black text-secondary mb-1">15+</p>
              <p className="text-sm font-bold text-gray-600 uppercase tracking-widest leading-relaxed">
                {lang === 'ar' ? 'سنة من التميز والخبرة' : 'Years of Excellence'}
              </p>
            </div>
          </div>

          {/* Content Side - Spacious & Modern */}
          <div className="lg:w-1/2 flex items-center bg-gray-50/50 relative">
            {/* Decorative Pattern */}
            <div className="absolute top-0 right-0 p-12 opacity-5 pointer-events-none">
              <Shield className="w-64 h-64 text-primary" />
            </div>

            <div className="px-6 py-16 lg:px-20 xl:px-32 w-full relative z-10">
              <div className="mb-8">
                <div className="flex items-center gap-4 mb-6">
                  <span className="h-px w-12 bg-primary"></span>
                  <span className="text-primary font-bold uppercase tracking-widest text-sm">
                    {lang === 'ar' ? 'قصتنا' : 'Our Story'}
                  </span>
                </div>

                <h2 className="text-3xl lg:text-5xl font-black text-secondary leading-tight mb-6">
                  {lang === 'ar' ? 'الريادة في عالم السيارات' : 'Driving the Future of Auto Parts'}
                </h2>

                <p className="text-lg text-gray-600 leading-relaxed font-light">
                  {lang === 'ar'
                    ? 'نحن نعيد تعريف مفهوم خدمة السيارات. من خلال دمج التكنولوجيا المتطورة مع الخبرة العريقة، نقدم حلولاً تتجاوز مجرد بيع قطع الغيار. نحن نبني علاقات دائمة قائمة على الثقة والأداء المتفوق.'
                    : 'We are redefining the automotive service experience. By merging cutting-edge inventory technology with deep industry expertise, we deliver solutions that go beyond simple parts supply. We build lasting relationships founded on trust, reliability, and superior performance.'}
                </p>
              </div>

              <div className="space-y-8">
                {/* Feature 1 */}
                <div className="flex gap-5 group">
                  <div className="w-14 h-14 bg-white rounded-full shadow-lg flex items-center justify-center border border-gray-100 group-hover:border-primary transition-colors shrink-0">
                    <Shield className="w-6 h-6 text-primary group-hover:text-primary transition-colors" />
                  </div>
                  <div>
                    <h4 className="font-bold text-xl text-secondary mb-2 group-hover:text-primary transition-colors">
                      {lang === 'ar' ? 'ضمان شامل' : 'Comprehensive Warranty'}
                    </h4>
                    <p className="text-gray-500 leading-relaxed">
                      {lang === 'ar' ? 'راحة بالك هي أولويتكم. ضمان حقيقي على جميع منتجاتنا.' : 'Peace of mind is standard. Genuine warranty on our entire catalog.'}
                    </p>
                  </div>
                </div>

                {/* Feature 2 */}
                <div className="flex gap-5 group">
                  <div className="w-14 h-14 bg-white rounded-full shadow-lg flex items-center justify-center border border-gray-100 group-hover:border-primary transition-colors shrink-0">
                    <Truck className="w-6 h-6 text-primary group-hover:text-primary transition-colors" />
                  </div>
                  <div>
                    <h4 className="font-bold text-xl text-secondary mb-2 group-hover:text-primary transition-colors">
                      {lang === 'ar' ? 'سلسلة توريد ذكية' : 'Smart Supply Chain'}
                    </h4>
                    <p className="text-gray-500 leading-relaxed">
                      {lang === 'ar' ? 'نصل إليك أينما كنت بأسرع وقت ممكن.' : 'Reaching you wherever you are with optimized logistics speed.'}
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-10 pt-8 border-t border-gray-200">
                <Link to="/about" className="inline-flex items-center gap-3 text-secondary font-bold hover:text-primary transition-all text-lg group">
                  {lang === 'ar' ? 'اكتشف المزيد عنا' : 'Discover More About Us'}
                  <span className="w-8 h-8 rounded-full bg-gray-200 flex items-center justify-center group-hover:bg-primary group-hover:text-white transition-all">
                    <ArrowRight className="w-4 h-4" />
                  </span>
                </Link>
              </div>
            </div>
          </div>

        </div>
      </section>

      <PartnersCarousel />

      {/* --- CTA SECTION --- */}
      <section className="relative py-28 overflow-hidden">
        {/* Premium Dark Gradient Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-[#0f172a] to-blue-950"></div>

        {/* Abstract Tech/Auto Pattern Overlay */}
        <div className="absolute inset-0 opacity-20" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, rgba(255,255,255,0.15) 1px, transparent 0)', backgroundSize: '32px 32px' }}></div>
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-10 mix-blend-overlay"></div>

        {/* Ambient Glow Effects */}
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-600/20 rounded-full blur-[120px] pointer-events-none"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-action/10 rounded-full blur-[100px] pointer-events-none"></div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">

            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-500/10 border border-blue-400/20 text-blue-300 font-semibold text-sm mb-8 backdrop-blur-sm"
            >
              <Star className="w-4 h-4 fill-current" />
              <span>{lang === 'ar' ? 'خدمة عملاء مميزة' : 'Premium Customer Support'}</span>
            </motion.div>

            {/* Headline */}
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-4xl md:text-6xl font-black text-white mb-6 leading-tight"
            >
              {lang === 'ar'
                ? 'ابدأ رحلة التميز لسيارتك اليوم'
                : 'Elevate Your Vehicle Performance'}
            </motion.h2>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-gray-300 text-lg md:text-xl mb-12 leading-relaxed font-light max-w-2xl mx-auto"
            >
              {lang === 'ar'
                ? 'لا تضيع وقتك في البحث عن الجودة. خبراؤنا هنا لتوفير القطع الأصلية الدقيقة التي تضمن لك الأمان والأداء العالي بأفضل الأسعار.'
                : 'Stop searching for quality. Our experts are here to provide the precise genuine parts that ensure safety and peak performance at the best prices.'}
            </motion.p>

            {/* Action Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="flex flex-col sm:flex-row gap-5 justify-center items-center mb-16"
            >
              <Link
                to="/contact"
                className="w-full sm:w-auto min-w-[220px] bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-500 hover:to-blue-600 text-white font-bold py-4 px-8 rounded-xl shadow-xl hover:shadow-blue-600/30 hover:-translate-y-1 transition-all flex items-center justify-center gap-3 border border-white/10"
              >
                <span>{lang === 'ar' ? 'اطلب عرض سعر' : 'Request Quote'}</span>
                <ArrowRight className="w-5 h-5" />
              </Link>

              <a
                href="tel:+967775576900"
                className="w-full sm:w-auto min-w-[220px] bg-white/5 hover:bg-white/10 text-white font-bold py-4 px-8 rounded-xl backdrop-blur-md border border-white/10 hover:border-white/20 transition-all flex items-center justify-center gap-3"
              >                <PhoneCall className="w-5 h-5" />
                <span>{lang === 'ar' ? 'تحدث مع خبير' : 'Talk to Expert'}</span>
              </a>
            </motion.div>

            {/* Trust Indicators / Stats */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              className="grid grid-cols-1 md:grid-cols-3 gap-8 pt-8 border-t border-white/10"
            >
              {[
                { icon: <Zap className="w-6 h-6 text-yellow-400" />, title: lang === 'ar' ? 'رد سريع' : 'Fast Response', desc: lang === 'ar' ? 'خلال 24 ساعة' : 'Within 24 Hours' },
                { icon: <Shield className="w-6 h-6 text-blue-400" />, title: lang === 'ar' ? 'ضمان الجودة' : 'Quality Guarantee', desc: lang === 'ar' ? '100% قطع أصلية' : '100% Genuine Parts' },
                { icon: <Wrench className="w-6 h-6 text-green-400" />, title: lang === 'ar' ? 'استشارة مجانية' : 'Free Consultation', desc: lang === 'ar' ? 'توصيات الخبراء' : 'Expert Recommendations' },
              ].map((item, idx) => (
                <div key={idx} className="flex flex-col items-center justify-center text-center group">
                  <div className="mb-3 p-3 rounded-full bg-white/5 group-hover:bg-white/10 transition-colors">
                    {item.icon}
                  </div>
                  <h4 className="text-white font-bold mb-1">{item.title}</h4>
                  <p className="text-sm text-gray-400">{item.desc}</p>
                </div>
              ))}
            </motion.div>

          </div>
        </div>
      </section>

    </div>
  );
};

export default HomePage;