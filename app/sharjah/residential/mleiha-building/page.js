export const metadata = {
  title: "بناية سكنية جديدة للإيجار في مليحة | من المالك مباشرة",
  description: "بناية سكنية جديدة في مليحة - الشارقة بالقرب من طريق E102. 11 وحدة سكنية متنوعة مع تواصل مباشر مع المالك.",
};

const PHONE = "971553404293";
const photos = [
  "/images/IMG_0851.jpeg",
  "/images/IMG_0852.jpeg",
  "/images/3B73EB21-E983-41C8-9C33-C9B1FEDFEDD5.png",
  "/images/7175D554-B284-42A1-B324-602B745158E0.png",
  "/images/82DD23AC-94C3-47E2-8547-AB6AF53E0F31.png",
  "/images/C5CBBB21-D3D4-4198-A2BA-14FBB251F3D2.png",
  "/images/DCDC10B3-4F46-4971-B009-2E7988C9F757.png",
  "/images/E87EB0E3-CA44-4BE5-A6E0-71A99F263764.png",
];

export default function MleihaBuildingPage() {
  return (
    <main dir="rtl" style={{background:"#f6f4ef",color:"#171717",minHeight:"100vh",fontFamily:"Tahoma,Arial,sans-serif"}}>
      <div style={{maxWidth:1180,margin:"0 auto",padding:"24px 18px 64px"}}>
        <a href="/" style={{color:"#087f5b",fontWeight:800,textDecoration:"none"}}>← العودة للعقارات</a>
        <div style={{marginTop:20,display:"grid",gridTemplateColumns:"repeat(auto-fit,minmax(280px,1fr))",gap:12}}>
          <img src={photos[0]} alt="بناية سكنية جديدة في مليحة" style={{width:"100%",height:430,objectFit:"cover",borderRadius:24,gridRow:"span 2"}}/>
          {photos.slice(1,5).map((src,i)=><img key={src} src={src} alt={`صورة العقار ${i+2}`} style={{width:"100%",height:209,objectFit:"cover",borderRadius:18}}/>)}
        </div>
        <section style={{background:"white",borderRadius:24,padding:"28px",marginTop:20,boxShadow:"0 10px 35px rgba(0,0,0,.06)"}}>
          <div style={{display:"flex",gap:10,flexWrap:"wrap",marginBottom:14}}><span style={{background:"#e9f8f1",color:"#087f5b",padding:"7px 12px",borderRadius:99,fontWeight:800}}>متاح للإيجار</span><span style={{background:"#f1f1f1",padding:"7px 12px",borderRadius:99,fontWeight:700}}>مالك مباشر</span></div>
          <h1 style={{fontSize:"clamp(28px,5vw,48px)",lineHeight:1.2,margin:"0 0 12px"}}>بناية سكنية جديدة للإيجار في مليحة</h1>
          <p style={{fontSize:18,color:"#666",margin:"0 0 24px"}}>مليحة - الشارقة · بالقرب من طريق E102</p>
          <div style={{display:"grid",gridTemplateColumns:"repeat(auto-fit,minmax(170px,1fr))",gap:12,marginBottom:26}}>
            {[['إجمالي الوحدات','11 وحدة'],['غرفة وصالة','8 وحدات'],['استديو','2 استديو'],['غرفتان وصالة','1 وحدة']].map(([a,b])=><div key={a} style={{background:"#f7f7f5",padding:18,borderRadius:16}}><small style={{color:"#777"}}>{a}</small><strong style={{display:"block",fontSize:20,marginTop:5}}>{b}</strong></div>)}
          </div>
          <h2>تفاصيل العقار</h2>
          <p style={{fontSize:17,lineHeight:2,color:"#444"}}>بناية سكنية جديدة تضم 8 وحدات غرفة وصالة، لكل وحدة مطبخ وحمام منفصلان، إضافة إلى استديوهين، ووحدة واحدة مكونة من غرفتين وصالة ومطبخ وحمام. الصور المعروضة صور حقيقية من العقار.</p>
          <div style={{display:"flex",gap:12,flexWrap:"wrap",marginTop:24}}><a href={`https://wa.me/${PHONE}?text=${encodeURIComponent("السلام عليكم، أستفسر عن البناية السكنية الجديدة في مليحة")}`} style={{background:"#087f5b",color:"white",padding:"14px 22px",borderRadius:14,textDecoration:"none",fontWeight:800}}>تواصل واتساب</a><a href={`tel:+${PHONE}`} style={{background:"#171717",color:"white",padding:"14px 22px",borderRadius:14,textDecoration:"none",fontWeight:800}}>اتصال 0553404293</a></div>
        </section>
        <section style={{marginTop:28}}><h2 style={{fontSize:28}}>صور إضافية</h2><div style={{display:"grid",gridTemplateColumns:"repeat(auto-fit,minmax(230px,1fr))",gap:12}}>{photos.slice(5).map((src,i)=><img key={src} src={src} alt={`صورة داخلية ${i+1}`} style={{width:"100%",height:300,objectFit:"cover",borderRadius:18}}/>)}</div></section>
      </div>
    </main>
  );
}
