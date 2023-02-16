import { Table } from "antd";
import React from "react";
import CardComponent from "./card";


import {
  CheckCircleTwoTone,
  HeartTwoTone,
  SmileTwoTone,
  SyncOutlined,
  MinusSquareTwoTone,
  WarningTwoTone,
} from "@ant-design/icons";
import { Space } from "antd";

const columns = [
  //   {
  //     key: 1,
  //     title: "Job_type",
  //     dataIndex: "jobtypeid",
  //     render: (text) => <a>{text}</a>,
  //   },
  {
    key: 2,
    title: "Job Type",
    dataIndex: "jobtypeid",
    render: (jobtypeid) => (
      <div>
        {jobtypeid === "4" ? (
          "creo"
        ) : (
          <> {jobtypeid === "7" ? "creo_egs" : "ppbip"}</>
        )}
      </div>
    ),
  },

  {
    key: 4,
    title: "Starting Time",
    dataIndex: "startprocess",
    render: (startprocess) => (
      <div>{startprocess != null ? startprocess : "NULL"}</div>
    ),
  },
  {
    key: 5,
    title: "Finished at",
    dataIndex: "endprocess",
    render: (endprocess) => (
      <div>{endprocess != null ? endprocess : "NULL"}</div>
    ),
  },
  {
    key: 3,
    title: "Status",
    dataIndex: "statusid",
    render: (statusid) => (
      <div>
        {statusid === "5" ? (
         <> 
          <Space>
            <CheckCircleTwoTone
              twoToneColor="#52c41a"
              style={{
                fontSize: "32px",
              }}
            />
          </Space>
          </>
        ) : (
          <>
            {statusid === "4" ? (
              <space>
                <SyncOutlined
                  spin
                  style={{
                    fontSize: "32px",
                  }}
                />
              </space>
            ) : (
              <>
                {statusid === "1" ? (
                  <space>
                    <MinusSquareTwoTone
                      style={{
                        fontSize: "32px",
                      }}
                    />
                  </space>
                ) : (
                  <space>
                    <WarningTwoTone
                      twoToneColor="#eb2f96"
                      style={{
                        fontSize: "32px",
                      }}
                    />
                  </space>
                )}
              </>
            )}
          </>
        )}
      </div>
    ),
    key: "age",
    responsive: ["md"],
  },
];

const App = (props) => {
  console.log(props.data.length);
  const successfull = props.data.filter((i) => i.statusid === "5");
  //console.log(creo.length);

  const creo = props.data.filter((i) => i.jobtypeid === "4");
  //console.log(creoegs.length);

  const creoegs = props.data.filter((i) => i.jobtypeid === "7");
  //console.log(creoegs.length);

  const failed = props.data.filter((i) => i.statusid === "6");
  console.log(failed.length);

  const processing = props.data.filter((i) => i.statusid === "4");

  const que = props.data.filter((i) => i.statusid === "1");

  return (
    <>
      <div className="contentdisplay">
        <div>
          <CardComponent
            total={props.data.length}
            successfull={successfull.length}
            creoegs={creoegs.length}
            creo={creo.length}
            failed={failed.length}
            processing={processing.length}
            job_que={que.length}
          />
        </div>
        <br />

        <div>
          <Table columns={columns} dataSource={props.data} />
        </div>
      </div>
    </>
  );
};

export default App;
