import "./globals.css";

import { Navbar } from "@/components";
import Providers from "./Providers";
import { Modals } from "./Modals";
export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Providers>
          <Navbar />
          {children}
          <Modals></Modals>
        </Providers>
      </body>
    </html>
  );
}
