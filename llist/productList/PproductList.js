import React from "react";
import { useState } from "react";
import { UploadOutlined } from "@ant-design/icons";
import { Button, Popconfirm, Space, Upload, Flex } from "antd";
function PproductList(props) {
  const [loding, setLoding] = useState(false);
  const onclickms = () => {
    setLoding(true);
    setTimeout(() => {
      setLoding(false);
    }, 2000);
  };
  return (
    <div style={{ justifyContent: "space-between" }}>
      <div style={{ justifyContent: "center" }}>
        <div>
          <div>
            <img src={props.img} width={"150"} />
          </div>
          <div>{props.id}</div>
          <div style={{ fontSize: "boll" }}>{props.name}</div>
          <div>{props.price}</div>
          <div>{props.device}</div>
        </div>
        <div style={{ paddingTop: 12 }}>
          <Flex gap="small" wrap>
            <Button
              onClick={onclickms}
              type="primary"
              size="small"
              loading={loding}
            >
              Primary
            </Button>
          </Flex>
        </div>
      </div>
    </div>
  );
}

export default PproductList;
