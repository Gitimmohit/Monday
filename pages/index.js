import Image from "next/image";
import { Inter } from "next/font/google";
import { Header } from "@/components/Header";
import NewProduct from "@/components/NewProduct";
import Cart from "@/components/Cart";
import { Middle } from "@/components/Middle";
import { PhotoMiddle } from "@/components/PhotoMiddle";
import { Brand } from "@/components/Brand";
import Footer from "@/components/Footer";
const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <div>
        <Header />
        <Cart />
        <NewProduct/>
        <Middle/>
        <PhotoMiddle/>
        <Brand/>
        <Footer/>
      </div>
    </>
  );
}
