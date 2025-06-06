import type { Metadata } from "next";
import "./globals.css";
import Header from "@/app/ui/header";
import { saira } from "./ui/fonts";
import StyledComponentsRegistry from "./registry";


export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${saira.className}`}>
        <StyledComponentsRegistry>
          <Header />
          <div className="pages-background">
            <div className="pages-maxsize">
              {children}
            </div>
          </div>
        </StyledComponentsRegistry>
      </body>
    </html>
  );
}