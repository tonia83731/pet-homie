import "./globals.css";
import { Lato, Playfair_Display } from "next/font/google";
// need use client
// import { registerLocale } from "react-datepicker";
// import zhTW from "date-fns/locale/zh-TW";
// registerLocale("zh-TW", zhTW);
import "@fortawesome/fontawesome-svg-core/styles.css";
import { config } from "@fortawesome/fontawesome-svg-core";
config.autoAddCss = false;

const playfairDisplay = Playfair_Display({
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500", "700", "900"],
});
const lato = Lato({
  subsets: ["latin"],
  display: "swap",
  weight: ["100", "300", "400", "700", "900"],
});

export const metadata = {
  title: {
    default: "Pet Homie",
    template: "%s | Pet Homie",
  },
  description: "Rescue a Heart, Adopt a Pet: Find Your Forever Friend Today!",
  // colorScheme: "",
  // keywords: [],
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${playfairDisplay.variable} ${lato.variable}`}>
      <body className={lato.className}>{children}</body>
    </html>
  );
}
