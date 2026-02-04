import React, { createContext, useContext, useState, useEffect } from 'react';

const LanguageContext = createContext();

export const translations = {
    ar: {
        home: "الرئيسية",
        about: "من نحن",
        products: "المنتجات",
        contact: "اتصل بنا",
        heroTitle: "قطع غيار وكنويسات السيارات",
        heroSubtitle: "الوكيل الحصري لشركة بيكمير التركية في اليمن.",
        shopNow: "تسوق الآن",
        learnMore: "اعرف المزيد",
        featuredProducts: "منتجات مميزة",
        viewAll: "عرض الكل",
        footerText: "© 2024 محلات صعده. جميع الحقوق محفوظة.",
        aboutTitle: "من نحن",
        aboutSubtitle: "قصة نجاح وتميز في عالم قطع غيار السيارات",
        ourStory: "قصتنا",
        storyText1: "تأسست محلات صعده برؤية واضحة لتوفير أفضل قطع غيار السيارات في السوق اليمني. نحن نؤمن بأن الجودة هي أساس السلامة، ولذلك نسعى جاهدين لتقديم منتجات أصلية وموثوقة لعملائنا الكرام.",
        storyText2: "نفتخر بكوننا الوكيل الحصري لشركة بيكمير (Beklemer) التركية في اليمن، مما يتيح لنا تقديم منتجات عالية الجودة بمعايير أوروبية وأسعار تنافسية.",
        partnershipTitle: "شراكتنا مع بيكمير",
        partnershipText: "تعتبر شركة بيكمير التركية من الشركات الرائدة في مجال تصنيع قطع غيار السيارات. بصفتنا الوكيل الوحيد في اليمن، نضمن لعملائنا الحصول على قطع غيار أصلية ومضمونة مباشرة من المصنع.",
        feature1: "جودة أوروبية عالية",
        feature2: "ضمان حقيقي",
        feature3: "أسعار تنافسية",
        teamTitle: "فريقنا",
        manager: "المدير العام",
        sales: "مدير المبيعات",
        support: "خدمة العملاء",
        productsTitle: "منتجاتنا",
        productsSubtitle: "اكتشف مجموعتنا الواسعة من قطع الغيار الأصلية",
        all: "الكل",
        batteries: "بطاريات",
        brakes: "فرامل",
        solar: "طاقة شمسية",
        parts: "قطع غيار",
        askPrice: "اسأل عن السعر",
        prod1Title: "بطارية 70 أمبير",
        prod1Desc: "أداء عالي وعمر طويل",
        prod2Title: "فحمات فرامل أمامية",
        prod2Desc: "متوافقة مع تويوتا",
        prod3Title: "لوح شمسي 150 وات",
        prod3Desc: "كفاءة عالية",
        prod4Title: "طقم إصلاح محرك",
        prod4Desc: "قطع أصلية",
        prod5Title: "فحمات فرامل خلفية",
        prod5Desc: "جودة بيكمير",
        contactTitle: "تواصل معنا",
        contactSubtitle: "نحن هنا لمساعدتك في العثور على ما تحتاج",
        getInTouch: "ابقى على تواصل",
        address: "صنعاء - شارع بينون - محلات صعدة لقطع الغيار (بيجو وكنويسات تركية)",
        name: "الاسم",
        email: "البريد الإلكتروني",
        message: "الرسالة",
        sendMessage: "إرسال الرسالة",
        missionTitle: "رؤيتنا ومهمتنا",
        missionText: "نسعى في محلات صعده لتقديم أفضل حلول قطع غيار السيارات في اليمن، مع التركيز على الجودة والموثوقية. شراكتنا مع بيكمير التركية تضمن لكم منتجات تدوم طويلاً وتحافظ على سلامة مركباتكم.",
        quality: "جودة عالية",
        price: "سعر منافس",
        service: "خدمة متميزة"
    }
};

export const LanguageProvider = ({ children }) => {
    // Hardcoded to Arabic
    const lang = 'ar';
    const dir = 'rtl';

    useEffect(() => {
        document.documentElement.lang = lang;
        document.documentElement.dir = dir;
    }, []);

    const t = (key) => {
        return translations[lang][key] || key;
    };

    // Keep switchLanguage as a no-op to avoid breaking components during transition
    const switchLanguage = () => { };

    return (
        <LanguageContext.Provider value={{ lang, switchLanguage, t, dir }}>
            {children}
        </LanguageContext.Provider>
    );
};

export const useLanguage = () => useContext(LanguageContext);
