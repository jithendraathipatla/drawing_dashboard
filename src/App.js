import {
  Descriptions,
  Layout,
  Menu,
  Card,
  Col,
  Row,
  Statistic,
  Progress,
  DatePicker,
} from "antd";
import React, { useEffect, useState } from "react";
import axios from "axios";
//import "antd/dist/antd.css";
import DataTabelComponent from "./dataTabel";
import { LoadingOutlined } from "@ant-design/icons";
import { Spin } from "antd";
//import Clock from 'react-live-clock';
import DatePickercomponent from './datepicker';
import { CSVLink } from "react-csv";
import { DownloadOutlined } from '@ant-design/icons';
import { Button, Radio, Space, Divider } from 'antd';


const { Header, Content, Footer } = Layout;

const antIcon = (
  <LoadingOutlined style={{ fontSize: 46, margin: "50%" }} spin />
);

function App() {
  const [ButtonName, setButtonName] = useState("Home");
  const [Data, setData] = useState();
  const [MainData, setMainData] = useState();
  const [ErrorJobs, setErrorJobs] = useState([]);
  const [Total, setTotal] = useState();
  const [TotalCreo, setTotalCreo] = useState();
  const [TotalCreoegs, setTotalCreoegs] = useState();
  const [pbbip, setpbbip] = useState();

  useEffect(() => {
    const fetchPosts = async () => {
      const res = await axios.get("http://10.62.32.184:8000/api/contents");
      const filteringcreoandegs =  res.data.recordset.filter((item)=> (item.jobtypeid === "4") || (item.jobtypeid  === "7"));
      setData(filteringcreoandegs);
      setMainData(filteringcreoandegs);
    };
    fetchPosts();
  }, []);
 
  const onRangeChange = (dates, dateStrings) => {
    if (dates) {
      console.log('From: ', dates[0], ', to: ', dates[1]);
      console.log('From: ', dateStrings[0], ', to: ', dateStrings[1]);
      var startdate = dateStrings[0];
      var startdatevalue = startdate.replace(/[&\/\\#,+()$~%.'":*?<>{} ]/gi,"");
     console.log(startdatevalue);
      var enddate = dateStrings[1];
      var enddatevalue = enddate.replace(/[&\/\\#,+()$~%.'":*?<>{} ]/g,"");
      console.log(enddatevalue);
      const filteredData = MainData.filter((item) => item.submitted >= startdatevalue && item.submitted <= enddatevalue);
      setData(filteredData);
    } else {
      console.log('Clear');
    }
  };

  const Demo = () => {
  
    return (
      <Layout className="layout">
        <Header
          style={{
            color: "white",
            fontSize: "26px",
            position: "fixed",
            width: "100%",
            zIndex: "100",
          }}
        >
          GISC Drawing dashboard(PROD Server - 1132)
        </Header>
        <span className="filters">
        <DatePickercomponent setdate={onRangeChange}/>
        <Button  type="primary" shape="round" icon={<DownloadOutlined />}><CSVLink data={Data} filename={"prod_job.csv"} style={{color:"white"}}>Download CSV</CSVLink></Button>
          
          {/* <SelectComponent selectdropdown={handelchange} /> */}
        </span>
       
        <Content
          style={{
            padding: "0 5rem",
          }}
        >
          <br/>
          {/* <Clock format={'HH:mm:ss'} ticking={true} timezone={'US/Pacific'} /> */}
          <div className="site-layout-content">
            {<DataTabelComponent data={Data} />}
          </div>
        </Content>
      </Layout>
    );
  };

  return <div>{Data == undefined ? <Spin indicator={antIcon} /> : Demo()}</div>;
}

export default App;
