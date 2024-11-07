import data from "../../component/data/Data";
import { useState } from "react";
import { Bs0Circle } from "react-icons/bs";
import PproductList from "../../llist/productList/PproductList";
import HomePageItem from "./HomePageItem";

function HomePage() {
  // const [product, setProduct] = useState([
  //   {
  //     p_id: 101,
  //     p_name: "makebook",
  //     p_price: 1000,
  //     p_device: "S12 SSD RAM 16G",
  //     img: "",
  //   },
  //   {
  //     p_id: 102,
  //     p_name: "MSI",
  //     p_price: 2000,
  //     p_device: "S12 SSD RAM 16G",
  //     img: "",
  //   },
  //   {
  //     p_id: 103,
  //     p_name: "ASUS",
  //     p_price: 1500,
  //     p_device: "S12 SSD RAM 16G",
  //     img: "",
  //   },
  // ]);
  return (
    <div>
      <HomePageItem />
    </div>
  );
}
export default HomePage;
