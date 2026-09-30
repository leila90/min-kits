import localFont from "next/font/local";

export const siteFont = localFont({
  src: [
    { path: "./styles/fonts/YekanBakhFaNum-Regular.ttf", weight: "400", style: "normal" },
    { path: "./styles/fonts/YekanBakhFaNum-SemiBold.ttf", weight: "600", style: "normal" },
  ],
  variable: "--font-site",
  display: "swap",
  preload: true,
});
