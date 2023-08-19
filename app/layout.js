import { MenuProvider } from "@/context/MenuContext";
import Head from "next/head";
import "./globals.css";
import { Open_Sans } from "next/font/google";
import { Toaster } from "react-hot-toast";
export const metadata = {
  verification: {
    google: "5o-vUqayTL-c9YWDGmYzfQI9MjGn0rAQtgAwM1-inSk",
  },
};

const roboto = Open_Sans({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
});

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`bg-hero bg-no-repeat bg-cover h-screen ${roboto.className}`}
        suppressHydrationWarning={true}
      >
        <Toaster position="top-center" />
        <MenuProvider>
          <div className="h-screen bg-fixed bg-dot">
            <div className="h-screen overflow-hidden overflow-y-auto ">
              <div className="scroll-wrapper">{children}</div>
            </div>
          </div>
        </MenuProvider>
      </body>
    </html>
  );
}
