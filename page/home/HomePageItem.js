import React from "react";
import { Row, Col } from "antd";
import iphone from "../../asset/picture/iphone.jpg";
import Item from "antd/es/list/Item";
import PproductList from "../../llist/productList/PproductList";
import { useState } from "react";
function HomePageItem() {
  const data = [
    {
      name: "Mac OS 20023",
      image: iphone,
      bg_color: "pink",
      price: 1000,
    },
    {
      name: "Del OS 20023",
      image: iphone,
      bg_color: "pink",
      price: 1000,
    },
    {
      name: "Asus OS 20023",
      image: iphone,
      bg_color: "pink",
      price: 1000,
    },
    {
      name: "Mac OS 20023",
      image: iphone,
      bg_color: "pink",
      price: 1000,
    },
    {
      name: "Del OS 20023",
      image: "",
      bg_color: "pink",
      price: 1000,
    },
    {
      name: "Asus OS 20023",
      image: "",
      bg_color: "pink",
      price: 1000,
    },
  ];

  const [product, setProduct] = useState([
    {
      p_id: 101,
      p_name: "makebook",
      p_price: 1000,
      p_device: "S12 SSD RAM 16G",
      image: iphone,
    },
    {
      p_id: 102,
      p_name: "MSI",
      p_price: 2000,
      p_device: "S12 SSD RAM 16G",
      image: iphone,
    },
    {
      p_id: 103,
      p_name: "ASUS",
      p_price: 1500,
      p_device: "S12 SSD RAM 16G",
      image: iphone,
    },
    {
      p_id: 101,
      p_name: "makebook",
      p_price: 1000,
      p_device: "S12 SSD RAM 16G",
      image: iphone,
    },
    {
      p_id: 102,
      p_name: "MSI",
      p_price: 2000,
      p_device: "S12 SSD RAM 16G",
      image: iphone,
    },
    {
      p_id: 103,
      p_name: "ASUS",
      p_price: 1500,
      p_device: "S12 SSD RAM 16G",
      image: iphone,
    },
  ]);
  return (
    <div>
      <Row gutter={24}>
        {product.map((Item, Index) => {
          return (
            <Col
              key={Index}
              span={4}
              style={{
                backgroundColor: "pink",

                margin: 5,
                justifyContent: "center",
                border: 10,
              }}
            >
              <PproductList
                img={Item.image}
                id={Item.p_id}
                name={Item.p_name}
                price={Item.p_price}
                device={Item.p_device}
              />
            </Col>
          );
        })}
      </Row>
    </div>
  );
}

export default HomePageItem;
