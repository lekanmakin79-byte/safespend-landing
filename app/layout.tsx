import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";


const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  display: "swap",
});


export const metadata: Metadata = {

  title:
    "SafeSpend - Tax Reserve App for Freelancers",

  description:
    "SafeSpend helps freelancers separate estimated tax money from every client payment and instantly see their true safe-to-spend balance.",


  keywords: [
    "freelancer tax calculator",
    "self employed tax app",
    "freelance money management",
    "tax reserve app",
    "safe spending app",
    "quarterly tax planning",
  ],


  authors:[
    {
      name:"SafeSpend"
    }
  ],


  creator:"SafeSpend",


  metadataBase:
    new URL("https://safespend.app"),


  openGraph: {

  title:
    "SafeSpend - Never Spend Your Tax Money Again",

  description:
    "Automatically separate tax money from freelance payments and instantly know your safe-to-spend balance.",

  url:
    "https://safespend.app",

  siteName:
    "SafeSpend",

  type:
    "website",

  images: [
    {
      url: "/og-image.png",
      width: 1200,
      height: 630,
      alt: "SafeSpend - Tax Reserve App for Freelancers",
    },
  ],

},


  twitter: {

  card:
    "summary_large_image",

  title:
    "SafeSpend - Tax Money Made Simple",

  description:
    "A smarter way for freelancers to manage tax reserves.",

  images:[
    "/og-image.png"
  ],

},
};


export default function RootLayout({

 children,

}: Readonly<{

 children: React.ReactNode;

}>) {


return (

<html lang="en">

<body className={jakarta.className}>

{children}

</body>

</html>

);

}