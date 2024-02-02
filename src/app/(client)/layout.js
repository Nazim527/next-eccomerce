import { AllCategories, Header, Search, ShoppingBasket } from "@/components";
import { Inter } from "next/font/google";
import "./layout.scss";
import "@/helpers/reset.scss";
import { Providers } from "@/lib/StoreProvider";
import Head from "../Head";

const inter = Inter({ subsets: ["latin"] });



export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <Head/>
      <body className={`${inter.className} container`}>
        <Providers>
          <Header />
          <Search />
          <main className="AllCategories_section fluid">
            <AllCategories />
            {children}
          </main>
          {/* //! Shopping Basket */}
          <ShoppingBasket />
        </Providers>
      </body>
    </html>
  );
}
