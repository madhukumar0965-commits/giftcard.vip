import "./globals.css";
import schemaData from "./schema.json";

export const metadata = {
  metadataBase: new URL("https://giftcare.vip"),
  title: "GiftCardMall/MyGift | Check Balance | Official Website Guide",
  description:
    "Learn about GiftCardMall/MyGift balance checks, card activation, registration, declined payments, transaction issues, and safe ways to find cardholder support.",
  keywords: [
    "giftcardmall/mygift",
    "giftcardmall",
    "giftcardmall balance",
    "giftcardmall/mygift balance",
    "mygift giftcardmall",
    "giftcardmall mygift",
    "giftcardmall mygift check balance",
    "giftcardmall/mygift check balance",
    "giftcardmall/mygift visa",
    "www.giftcardmall.com mygift",
    "giftcardmall activation",
    "giftcardmall register card",
    "mcgiftcard balance",
    "mcgiftgiftcardmall balance",
    "giftcardmall balance check",
    "mygift card balance",
    "gift card balance check",
    "prepaid visa gift card balance",
    "mastercard gift card balance",
    "gift card activation",
    "prepaid card transaction history",
  ],
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
