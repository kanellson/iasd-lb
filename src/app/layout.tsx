import type { Metadata } from "next";
import "../nrc/css/main.css";
import Link from "next/link";


export const metadata: Metadata = {
  title: "Iasd Lb",
  description:
    "Um projeto de construção da Igreja Adventista do Sétimo Dia de Liberdade",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>      
        <header className="mainHeader">
          <div className="container navbar">            
            <div className="navbar_logo">
              <Link href="./">
               <span>lb</span>
              </Link>              
            </div>            
            <nav className="navbar_menu">
              <ul>
                <li>
                  <Link href="./projeto">Projeto Construção</Link>
                </li>
                <li>
                  <Link href="./">Doe</Link>
                </li>
              </ul>
            </nav>
          </div>
        </header>

        <main>{children}</main>
      </body>
    </html>
  );
}
