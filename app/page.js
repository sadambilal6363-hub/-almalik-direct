"use client";

import { useMemo, useState } from "react";
import {
  ArrowLeft, ArrowUpLeft, BadgeCheck, Building2, Check, ChevronDown,
  Factory, Fence, Home as HomeIcon, LandPlot, Map, MapPin, Menu, MessageCircle,
  Search, SlidersHorizontal, Store, Warehouse, X, BriefcaseBusiness,
  KeyRound, ShieldCheck, Sparkles, UserRound, UsersRound
} from "lucide-react";
const categories = [
  ["سكني", HomeIcon, "/images/3B73EB21-E983-41C8-9C33-C9B1FEDFEDD5.png"],
  ["مكاتب", BriefcaseBusiness, "/images/IMG_8834.png"],
  ["مستودعات", Warehouse, "/images/IMG_8833.png"],
  ["محلات تجارية", Store, "/images/IMG_8830.png"],
  ["حوطات", Fence, "/images/IMG_8832.png"],
  ["مزارع", LandPlot, "/images/IMG_8829.png"],
  ["صناعية", Factory, "/images/IMG_8835.png"],
];
const listings = [
  {
    title: "مستودع واسع جاهز للاستخدام",
    area: "الشارقة الصناعية 10",
    type: "مستودعات",
    size: "8,500 قدم²",
    price: "280,000 د.إ / سنوي",
    image: "/images/IMG_8910.jpeg"
  },
  {
    title: "محل شارع رئيسي بواجهة ممتازة",
    area: "دبي - القوز",
    type: "محلات تجارية",
    size: "1,250 قدم²",
    price: "190,000 د.إ / سنوي",
    image: "/images/IMG_8911.jpeg"
  },
  {
    title: "حوطة مسورة للتخزين والمعدات",
    area: "عجمان - الجرف الصناعية",
    type: "حوطات",
    size: "15,000 قدم²",
    price: "165,000 د.إ / سنوي",
    image: "/images/IMG_8919.jpeg"
  },
  {
    title: "مكتب إداري جاهز للشركات",
    area: "أبوظبي - مصفح",
    type: "مكاتب",
    size: "2,100 قدم²",
    price: "145,000 د.إ / سنوي",
    image: "/images/IMG_8916.jpeg"
  },
  {
    title: "مزرعة جاهزة للاستخدام",
    area: "أم القيوين",
    type: "مزارع",
    size: "32,000 قدم²",
    price: "اتصل للسعر",
    image: "/images/IMG_8912.jpeg"
  },
  {
    title: "سكن منظم قريب من الصناعية",
    area: "رأس الخيمة",
    type: "سكني",
    size: "24 غرفة",
    price: "360,000 د.إ / سنوي",
    image: "/images/IMG_8913.jpeg"
  }
];
  



const faq = [
  ["هل كل العقارات من المالك مباشرة؟","الهوية الأساسية للمنصة مبنية على العقارات المباشرة من المالك، ويمكن لاحقًا إضافة وسطاء في قسم منفصل إذا رغبت."],
  ["كيف يضيف المالك عقاره؟","من خلال نموذج واضح يرسل الفئة والموقع والمساحة والسعر والصور وبيانات التواصل، ثم يمر الإعلان بالمراجعة قبل النشر."],
  ["هل يمكن تمييز العقارات الموثقة؟","نعم، يوجد شارة توثيق يمكن منحها بعد مراجعة بيانات المالك والعقار."],
  ["هل يمكن فتح حساب لكل مالك؟","نعم، في المرحلة التالية يمكن إضافة تسجيل دخول ولوحة لكل مالك لإدارة عقاراته واستفساراته."]
];

export default function Home() {
  const [menu, setMenu] = useState(false);
  const [activeCat, setActiveCat] = useState("الكل");
  const [purpose, setPurpose] = useState("إيجار");
  const [faqOpen, setFaqOpen] = useState(0);
  const [submitted, setSubmitted] = useState(false);

  const visible = useMemo(() => activeCat==="الكل" ? listings : listings.filter(x=>x.type===activeCat), [activeCat]);

  return (
    <main>
      <header className="nav shell">
        <a className="brand" href="#top">من المالك <span>مباشرة</span></a>
        <nav className="navlinks">
          <a href="#properties">العقارات</a>
          <a href="#categories">الفئات</a>
          <a href="#owners">أضف عقارك</a>
          <a href="#how">كيف تعمل</a>
        </nav>
        <div className="navActions">
          <a className="plain" href="#properties"><Search size={17}/> بحث</a>
          <a className="pill dark" href="#owners">اعرض عقارك</a>
          <button className="menu" onClick={()=>setMenu(!menu)}>{menu?<X/>:<Menu/>}</button>
        </div>
      </header>

      {menu && <div className="mobileMenu">
        <a href="#properties" onClick={()=>setMenu(false)}>العقارات</a>
        <a href="#categories" onClick={()=>setMenu(false)}>الفئات</a>
        <a href="#owners" onClick={()=>setMenu(false)}>أضف عقارك</a>
        <a href="#how" onClick={()=>setMenu(false)}>كيف تعمل</a>
      </div>}

      <section className="hero shell" id="top">
        <div className="heroCopy">
          <div className="eyebrow"><Sparkles size={15}/> بدون تعقيد — تواصل مباشر مع المالك</div>
          <h1>هلوفيرا للعقارت.<br/><em>من المالك مباشرة.</em></h1>
<img src="https://raw.githubusercontent.com/sadambilal6363-hub/-almalik-direct/main/app/D34DF3E5-4626-4620-93F7-E2EEB9470D74.png" alt="صورة" />
          <p>منصة تجمع الصناعيات، المحلات التجارية، المكاتب، المستودعات، السكني، الحوطات، المتاجر والأراضي الخالية في الإمارات، مع تواصل مباشر وبيانات واضحة.</p>

          <div className="searchPanel">
            <div className="segmented">
              {["إيجار","بيع"].map(x=><button key={x} className={purpose===x?"active":""} onClick={()=>setPurpose(x)}>{x}</button>)}
            </div>
            <div className="searchGrid">
              <label><span>نوع العقار</span>
                <select value={activeCat} onChange={e=>setActiveCat(e.target.value)}>
                  <option>الكل</option>{categories.map(([n])=><option key={n}>{n}</option>)}
                </select>
              </label>
              <label><span>الإمارة</span><select><option>كل الإمارات</option><option>دبي</option><option>أبوظبي</option><option>الشارقة</option><option>عجمان</option><option>رأس الخيمة</option><option>الفجيرة</option><option>أم القيوين</option></select></label>
              <label><span>المساحة</span><select><option>أي مساحة</option><option>أقل من 2,000 قدم²</option><option>2,000 - 5,000 قدم²</option><option>5,000 - 10,000 قدم²</option><option>أكثر من 10,000 قدم²</option></select></label>
              <a className="searchBtn" href="#properties"><Search size={20}/> ابحث الآن</a>
            </div>
          </div>

          <div className="trustRow">
            <span><BadgeCheck size={16}/> عقارات مباشرة</span>
            <span><ShieldCheck size={16}/> مراجعة قبل النشر</span>
            <span><MessageCircle size={16}/> واتساب مباشر</span>
          </div>
        </div>

        <div className="heroVisual">
  <img
    src="/images/D0D5804C-1764-45C6-A42E-E96388DF61EB.png"
    alt="مالك مباشر - صناعية مليحة الذيد"
    style={{
      width: "100%",
      height: "100%",
      objectFit: "cover",
      borderRadius: "32px"
    }}
  />
</div>

      </section>

      <section className="metrics">
        <div className="shell metricGrid">
          <div><strong>8</strong><span>فئات رئيسية</span></div>
          <div><strong>7</strong><span>إمارات</span></div>
          <div><strong>Direct</strong><span>من المالك</span></div>
          <div><strong>24/7</strong><span>استقبال طلبات</span></div>
        </div>
      </section>

      <section className="categories shell" id="categories">
        <div className="sectionHead">
          <span className="kicker">01 — الفئات</span>
          <h2>كل نوع مساحة في مكانه الصحيح.</h2>
        </div>
        <div className="catGrid">
          {categories.map(([name, Icon, image], i) => (
            <button key={name} className={`catCard ${activeCat===name?"selected":""}`} onClick={()=>setActiveCat(name)}><span className="num">{String(i+1).padStart(2,"0")}</span>
  <img className="catImage" src={image} alt={name} />
              <span className="num">{String(i+1).padStart(2,"0")}</span>
              <div className="catIcon"><Icon size={25}/></div>
              <div
  style={{
    position: "absolute",
    bottom: "0",
    left: "0",
    right: "0",
    height: "46px",
    background: "white",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    padding: "0 14px",
    boxSizing: "border-box"
  }}
>
  <span
    style={{
      color: "#0a8cff",
      fontSize: "15px",
      fontWeight: "700"
    }}
  >
    {name}
  </span>

  <ArrowUpLeft size={14} color="#0a8cff" />
</div>
            </button>
          ))}
        </div>
      </section>

      <section className="properties shell" id="properties">
        <div className="sectionHead row">
          <div><span className="kicker">02 — العقارات</span><h2>عروض من المالك مباشرة.</h2></div>
          <div className="filters"><button><SlidersHorizontal size={16}/> فلترة</button><button><Map size={16}/> الخريطة</button></div>
        </div>

        <div className="categoryTabs">
          <button className={activeCat==="الكل"?"active":""} onClick={()=>setActiveCat("الكل")}>الكل</button>
          {categories.map(([n])=><button key={n} className={activeCat===n?"active":""} onClick={()=>setActiveCat(n)}>{n}</button>)}
        </div>

        <div className="listingGrid">
          {visible.map((item,i)=>(
            <article className="listing" key={item.title}>
              <div className={`propertyArt art${i%6}`}>
  <img
    src={item.image}
    alt={item.title}
    style={{
      width: "100%",
      height: "100%",
      objectFit: "cover"
    }}
  />

  <span className="status">{item.badge}</span>
  <span className="direct"><UserRound size={13}/>{item.owner}</span>
</div>
                
              <div className="listingBody">
                <div className="meta"><span><MapPin size={14}/>{item.area}</span><span>{item.size}</span></div>
                <h3>{item.title}</h3>
                <strong>{item.price}</strong>
                <div className="listingActions">
                  <a href="#contact">التفاصيل <ArrowLeft size={16}/></a>
                  <a className="whatsMini" href="https://wa.me/"><MessageCircle size={16}/> تواصل مع المالك</a>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="owners" id="owners">
        <div className="shell ownerGrid">
          <div>
            <span className="kicker light">03 — للمالك</span>
            <h2>اعرض عقارك بنفسك.</h2>
            <p>أرسل بيانات العقار، ونحن نجهز الإعلان ونراجعه قبل ظهوره. لاحقًا يمكن تحويل هذا القسم إلى لوحة مالك كاملة.</p>
            <div className="ownerSteps">
              <span><b>1</b> أرسل البيانات</span>
              <span><b>2</b> نراجع العقار</span>
              <span><b>3</b> ينشر كـ “مالك مباشر”</span>
            </div>
          </div>

          <form className="ownerForm" onSubmit={(e)=>{e.preventDefault();setSubmitted(true)}}>
            <h3>إضافة عقار</h3>
            <div className="formGrid">
              <label>اسم المالك<input required placeholder="الاسم الكامل"/></label>
              <label>رقم الهاتف<input required placeholder="+971"/></label>
              <label>نوع العقار<select>{categories.map(([n])=><option key={n}>{n}</option>)}</select></label>
              <label>الإمارة<select><option>دبي</option><option>أبوظبي</option><option>الشارقة</option><option>عجمان</option><option>رأس الخيمة</option><option>الفجيرة</option><option>أم القيوين</option></select></label>
              <label>المساحة<input placeholder="مثال: 5000 قدم²"/></label>
              <label>السعر<input placeholder="السعر السنوي أو البيع"/></label>
            </div>
            <label className="wide">وصف مختصر<textarea placeholder="الموقع، الاستخدام، المميزات، الشروط..."></textarea></label>
            <button className="submit" type="submit">إرسال للمراجعة <ArrowLeft size={16}/></button>
            {submitted && <div className="success"><Check size={17}/> تم استلام الطلب تجريبيًا — عند ربط قاعدة البيانات سيُحفظ فعليًا.</div>}
          </form>
        </div>
      </section>

      <section className="how shell" id="how">
        <div className="sectionHead"><span className="kicker">04 — كيف تعمل</span><h2>من المالك إلى المستأجر أو المشتري بخطوات واضحة.</h2></div>
        <div className="howGrid">
          <div><UserRound/><b>مالك مباشر</b><p>العقار يضاف بواسطة المالك وتظهر صفته بوضوح.</p></div>
          <div><ShieldCheck/><b>مراجعة</b><p>تدقيق أساسي قبل نشر الإعلان للعامة.</p></div>
          <div><UsersRound/><b>تواصل مباشر</b><p>العميل يفتح الإعلان ويتواصل مع المالك مباشرة.</p></div>
          <div><KeyRound/><b>إدارة لاحقة</b><p>يمكن إضافة حسابات ولوحة تحكم للمالك في المرحلة التالية.</p></div>
        </div>
      </section>

      <section className="faq shell">
        <div className="sectionHead"><span className="kicker">05 — الأسئلة</span><h2>هوية واضحة: من المالك مباشرة.</h2></div>
        <div className="faqList">
          {faq.map(([q,a],i)=>(
            <button className="faqItem" key={q} onClick={()=>setFaqOpen(faqOpen===i?-1:i)}>
              <div><b>{q}</b><ChevronDown className={faqOpen===i?"rot":""}/></div>
              {faqOpen===i && <p>{a}</p>}
            </button>
          ))}
        </div>
      </section>

      <section className="finalCta" id="contact">
        <div className="shell finalInner">
          <div><span className="kicker light">من المالك مباشرة</span><h2>عندك عقار؟ اعرضه أمام الباحث الحقيقي.</h2><p>ابدأ بمخزونك، وافتح الباب لاحقًا لكل مالك يريد عرض عقاره بشكل مباشر واحترافي.</p></div>
          <a className="ctaCircle" href="#owners"><ArrowUpLeft size={32}/><span>أضف عقارك</span></a>
        </div>
      </section>

      <footer className="footer shell">
        <div><div className="footerBrand">من المالك مباشرة</div><p>منصة عقارات ومساحات متعددة الاستخدام في الإمارات.</p></div>
        <div className="footerLinks"><a href="#properties">العقارات</a><a href="#categories">الفئات</a><a href="#owners">أضف عقارك</a><a href="#contact">تواصل</a></div>
        <div className="copy">© 2026 MIN ALMALIK DIRECT — NEXT.JS PLATFORM</div>
      </footer>

      <a className="floatingWhats" href="https://wa.me/971588920359" aria-label="WhatsApp"><MessageCircle size={22}/><span>واتساب</span></a>
    </main>
  );
}


