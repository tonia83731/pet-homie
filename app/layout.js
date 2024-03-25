import "./globals.css";
// need use client
// import { registerLocale } from "react-datepicker";
// import zhTW from "date-fns/locale/zh-TW";
// registerLocale("zh-TW", zhTW);
import "@fortawesome/fontawesome-svg-core/styles.css";
import { config } from "@fortawesome/fontawesome-svg-core";
config.autoAddCss = false;

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
    <html lang="en">
      <body className="">{children}</body>
    </html>
  );
}
