import { Inter } from "next/font/google";
import "@/helpers/reset.scss";
import { Providers } from "@/lib/StoreProvider";
import { Header } from "@/components";
import { AdminAllCategories } from "@/components/admin";

import './style.scss'

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Next Project admin",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${inter.className} container`}
        style={{ height: "100vh" }}
      >
        <Providers>
          <Header />
          <main className="all_Products fluid">
            <AdminAllCategories />
            {children}
          </main>
        </Providers>
      </body>
    </html>
  );
}