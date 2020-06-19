import React, { useContext, Component } from "react";
import "./WorkingSpaceComponent.css";
import { Button, Card, Skeleton, Tooltip } from "antd";
import { SearchOutlined } from "@ant-design/icons";

import CardComponent from "./CardComponent/CardComponent";
import InternshipTableComponent from "../InternshipTableComponent/InternshipTableComponent";

//import { I18nContext } from "../../locale/locale";

const WorkingSpaceLayout = (props) => {
  // const { translate } = useContext(I18nContext);

  const dataSource = [];

  return (
    <div className="test">
      <Skeleton active loading={false}>
        <InternshipTableComponent />
      </Skeleton>
    </div>
  );
};

export default class WorkingSpaceComponent extends Component {
  render() {
    return <WorkingSpaceLayout />;
  }
}
