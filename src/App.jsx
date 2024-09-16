import "./App.css";
import Product from "./components/product/product";

export default function App() {
  const imgList = [
    "https://www.hermanmiller.com/content/dam/hmicom/page_assets/products/embody_chairs/ig_prd_ovw_embody_chairs_01.jpg.rendition.1152.1152.jpg",
    "https://www.hermanmiller.com/content/dam/hmicom/page_assets/products/embody_chairs/ig_prd_ovw_embody_chairs_02.jpg.rendition.1152.1152.jpg",
    "https://www.hermanmiller.com/content/dam/hmicom/page_assets/products/embody_chairs/ig_prd_ovw_embody_chairs_03.jpg.rendition.1152.1152.jpg",
  ];

  return (
    <div className="App">
      <Product img={[...imgList]} />
    </div>
  );
}
