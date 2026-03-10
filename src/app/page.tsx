import Image from "next/image";
import Banner from "@/components/Banner";
import styles from "./page.module.css";
import ProductCard from "@/components/Card";
  
export default function Home() {
  return (
      <main>
        <Banner/>
        <div style={{margin: '20px', display: 'flex', flexDirection: 'row', 
          flexWrap: 'wrap', justifyContent: 'space-around', alignContent: 'space-around'}}>
          <ProductCard imageSrc="/img/card1.jpg" title="Card 1" description="งานแต่งงาน" />
          {/* <ProductCard imageSrc="/img/card2.jpg" title="Card 2" description="ปาร์ตี้" />
          <ProductCard imageSrc="/img/card3.jpg" title="Card 3" description="งานเลี้ยง" />
          <ProductCard imageSrc="/img/card4.jpg" title="Card 4" description="ประชุม" /> */}
        </div>
      </main>
  );
}
