import React from "react";
import { Card, Col, Row } from "antd";
import "./App.css";
import {
  CheckCircleTwoTone,
  CiCircleOutlined,
  HeartTwoTone,
  MinusSquareTwoTone,
  SyncOutlined,
  PercentageOutlined,
  WarningTwoTone,
} from "@ant-design/icons";
import { Space } from "antd";

const App = (props) => {
  function percentage(partialValue, totalValue) {
    return ((100 * partialValue) / totalValue).toFixed(1);
  }

  const totalvalue = props.creo + props.creoegs;
  const partialValue = props.failed;

  const percentage1 = percentage(partialValue, totalvalue);

  console.log(100 - percentage1);

  return (
    <span className>
      <br/>
      <Card title="Jobs in Que" bordered={false}>
        {props.job_que}{" "}
        <space>
        <MinusSquareTwoTone
                style={{
                  fontSize: "18px",
                }}
          />
        </space>
      </Card>
      <br />
      
      <Card title="Processsing" bordered={false} headStyle={{ color: "red" }}>
        {props.processing}{" "}
        <space>
          <SyncOutlined
            spin
            twoToneColor="#eb2f96"
            style={{
              fontSize: "18px",
            }}
          />
        </space>
      </Card>
      <br />

      <Card title="CREO [Layout]" bordered={false}>
        {props.creo}
      </Card>

      <br />
      <Card title="CREO EGS [SLD]" bordered={false}>
        {props.creoegs}
      </Card>
      <br />

      <Card title="Successfull" bordered={false}>
        {props.successfull}{" "}
        <Space>
          <CheckCircleTwoTone
            twoToneColor="#52c41a"
            style={{
              fontSize: "18px",
            }}
          />
        </Space>
      </Card>
      <br />

      <Card title="Failed" bordered={false}>
        {props.failed}{" "}
        <space>
          <WarningTwoTone
            twoToneColor="#eb2f96"
            style={{
              fontSize: "18px",
            }}
          />
        </space>
      </Card>
      <br />

      <Card title="Success percentage" bordered={false}>
        {100 - percentage1}{" "}
        <space>
          <PercentageOutlined
            twoToneColor="#eb2f96"
            style={{
              fontSize: "14px",
            }}
          />
        </space>
      </Card>
    </span>
  );
};

export default App;
