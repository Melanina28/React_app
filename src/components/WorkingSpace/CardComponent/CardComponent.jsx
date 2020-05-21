import React, { useContext, Component } from "react";
import "./CardComponent.css";
import { Card, Skeleton } from "antd";
//import { I18nContext } from "../../locale/locale";

const CardComponentLayout = (props) => {
  // const { translate } = useContext(I18nContext);

  const dataSource = [];

  return (
    <div className="container">
      <Skeleton active loading={false}>
        <Card title="CardComponent" bordered={true}></Card>
      </Skeleton>
    </div>
  );
};

export default class CardComponent extends Component {
  render() {
    return <CardComponentLayout />;
  }
}
