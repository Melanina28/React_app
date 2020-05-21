import React, { useContext, Component } from "react";
import "./WorkingSpaceComponent.css";
import { Button, Card, Skeleton, Tooltip } from "antd";
import { SearchOutlined } from "@ant-design/icons";

import CardComponent from "./CardComponent/CardComponent";

//import { I18nContext } from "../../locale/locale";

const WorkingSpaceLayout = (props) => {
  // const { translate } = useContext(I18nContext);

  const dataSource = [];

  return (
    <div className="test">
      <Skeleton active loading={false}>
        <CardComponent title="titulo desde props" />
        <CardComponent />
        <CardComponent />
        <CardComponent />
        <CardComponent />
        <Tooltip title="search">
          <Button type="primary" shape="circle" icon={<SearchOutlined />} />
        </Tooltip>
        <Button type="primary" shape="circle">
          Button
        </Button>
      </Skeleton>
    </div>
  );
};

export default class WorkingSpaceComponent extends Component {
  render() {
    return <WorkingSpaceLayout />;
  }
}
