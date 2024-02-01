import { AllCategories, Header, Search, ShoppingBasket } from "@/components";
import { Inter } from "next/font/google";
import "./layout.scss";
import "@/helpers/reset.scss";
import { Providers } from "@/lib/StoreProvider";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Next Project",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
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