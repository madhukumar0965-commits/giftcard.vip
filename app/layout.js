import "./globals.css";
import schemaData from "./schema.json";

export const metadata = {
  metadataBase: new URL("https://giftcare.vip"),
  title: "Giftcare.vip | Independent Gift Card Balance Guide",
  description:
    "GiftCardMall/MyGift balance guide: learn to check your prepaid Visa or Mastercard gift card balance safely. Help with www.giftcardmall.com/mygift, activation, transactions and declined cards.",
  
  alternates: {
    canonical: "/",
  },
  robots: {
    index: true,
    follow: true,
    "max-snippet": -1,
    "max-image-preview": "large",
    "max-video-preview": -1,
  },
  
};

export const viewport = {
  themeColor: "#26342f",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({ children }) {
  return (
    <html lang="en-US">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
