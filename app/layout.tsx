import type { Metadata } from "next";
import type { ReactNode } from "react";
import Footer from "./footer";
import "./globals.css";
import Header from "./header";
import SearchBar from "./search-bar";

export const metadata: Metadata = {
  title: "MovieDB - Your Movie Database",
  description: "Discover and explore movies, TV shows, and more.",
};

const RootLayout = ({
  children,
}: Readonly<{
  children: ReactNode;
}>) => {
  return (
    <html lang="en">
      <body className="flex min-h-screen flex-col antialiased">
        <Header />
        <SearchBar />

        <main className="container mx-auto flex-grow px-4 py-8">
          {children}
        </main>

        <Footer />
      </body>
    </html>
  );
};

export default RootLayout;
