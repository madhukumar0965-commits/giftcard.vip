import "./globals.css";
import schemaData from "./schema.json";

export const metadata = {
  metadataBase: new URL("https://giftcare.vip"),
  title: "Giftcare.vip | Independent Gift Card Balance Guide",
  description:
    "GiftCardMall/MyGift balance guide: learn to check your prepaid Visa or Mastercard gift card balance safely. Help with www.giftcardmall.com/mygift, activation, transactions and declined cards.",
  keywords: [
    "giftcardmall/mygift",
    "www.giftcardmall.com/mygift",
    "giftcardmall mygift balance",
    "mygift card balance check",
    "giftcardmall balance check",
    "prepaid visa gift card balance",
    "mastercard gift card balance",
    "gift card activation",
    "prepaid card transaction history",
  ],
  authors: [{ name: "Giftcare.vip Independent Guide" }],
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
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://giftcare.vip/",
    siteName: "Giftcare.vip — Independent Balance Guide",
    title: "Giftcare.vip | Independent Gift Card Balance Guide",
    description:
      "An independent, practical guide to GiftCardMall/MyGift balance checks, safe URL verification, transactions, activation and card problems.",
  },
  twitter: {
    card: "summary",
    title: "Giftcare.vip | Gift Card Balance & Cardholder Help",
    description:
      "Find the right place to check a prepaid gift card balance and learn what to do if your card is declined.",
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
