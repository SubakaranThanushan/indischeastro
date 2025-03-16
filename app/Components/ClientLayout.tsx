"use client";

import Navigation from "./Navigation";
import Btn_num from "./Btn_num";
import Footer from "./Footer";
import { DefaultSeo } from "next-seo";
import SEO from "@/next-seo.config";

export default function ClientLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <DefaultSeo {...SEO} />
      <header>
        <Navigation />
      </header>
      <main>{children}</main>
      <Btn_num />
      <Footer />
    </>
  );
}
