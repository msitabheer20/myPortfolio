import { Bebas_Neue, Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/navbar/Navbar";
import ThemeProvider from "@/providers/ThemeProvider";
import { ThemeContextProvider } from "@/context/ThemeContext";
// import Cursor from "@/components/customCursor/cursor";
// import Image from "next/image";
// import Social from "@/components/social/Social";

const inter = Inter({ subsets: ["latin"] });
const bebas = Bebas_Neue({subsets: ['latin'], weight: '400'})

export const metadata = {
  title: "Abheer Dey",
 Description: "Hello!, this is my portfolio website, come in and take a look",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={bebas.className}>
        <ThemeContextProvider>
          <ThemeProvider>
            {/* <Cursor
              innerSize={10}
              outerSize={35}
              innerScale={1}
              outerScale={2}
              outerAlpha={0}
              hasBlendMode={true}
              innerStyle={{
                backgroundColor: '#fff',
                border: '1px solid #111'
              }}
              outerStyle={{
                backgroundColor: '#fff',
                mixBlendMode: 'exclusion'
              }}
              clickables={[
                'a',
                'input[type="text"]',
                'input[type="email"]',
                'input[type="number"]',
                'input[type="submit"]',
                'input[type="image"]',
                'label[for]',
                'select',
                'textarea',
                'button',
                '.link',
                'img'
              ]}

            /> */}
            <div className="container">
              <div className="wrapper">
              {/* <div className="background"></div> */}
                <Navbar />
                {children}
                
              </div>
            </div>
          </ThemeProvider>
        </ThemeContextProvider>
      </body>
    </html>
  );
}
