import "./globals.css";

export const metadata = {
  title: "من المالك مباشرة | عقارات ومساحات في الإمارات",
  description:
    "منصة مباشرة بين المالك والباحث عن عقار: صناعية، محلات تجارية، مكاتب، مستودعات، سكني، حوطات، مزارع متاجر وأراضي استثمارية."
};

export default function RootLayout({ children }) {
  return (
    <html lang="ar" dir="rtl">
      <body>{children}</body>
    </html>
  );
}
