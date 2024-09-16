import "./App.css";
import Header from "./components/header/header";
import Product from "./components/product/product";

export default function App() {
  const imgList = [
    "https://www.hermanmiller.com/content/dam/hmicom/page_assets/products/embody_chairs/ig_prd_ovw_embody_chairs_01.jpg.rendition.1152.1152.jpg",
    "https://www.hermanmiller.com/content/dam/hmicom/page_assets/products/embody_chairs/ig_prd_ovw_embody_chairs_02.jpg.rendition.1152.1152.jpg",
    "https://www.hermanmiller.com/content/dam/hmicom/page_assets/products/embody_chairs/ig_prd_ovw_embody_chairs_03.jpg.rendition.1152.1152.jpg",
  ];

  return (
    <div className="App">
      <Header />
      <div className="mainContent">
        <Product
          img={[...imgList]}
          name="Embody chair"
          price="R$ Caro"
          description="The benchmark for pressure distribution, natural alignment, and support for healthy movement"
          specs="More than 20 physicians and PhDs in the fields of biomechanics, vision, physical therapy, and ergonomics contributed their expertise to help guide the development of this chair. As a result, Embody has set a new benchmark for pressure distribution, natural alignment, and support for healthy movement in ergonomic seating."
        />
      </div>
    </div>
  );
}
