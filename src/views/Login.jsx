import React from 'react';
import LoginComponent from '../components/Login/LoginComponent';
import accountAPI from '../api/accountAPI';
import auth from '../config/auth';

import { Layout, Row, Col } from 'antd';
const { Header, Content } = Layout;

class Login extends React.Component {
  Logo = 'https://staginglms.thincrs.com/assets/img/thincrs-logo.svg';

  render() {
    return (
      <Layout>
        <Header style={{ textAlign: 'center' }}>
          <img src={ this.Logo } alt="source-logo" height="18"/>
        </Header>
        <Content>
        <Row style={{ margin: '10px'}}>
          <Col span={6} offset={9}>
            <LoginComponent history={this.props.history}/>
          </Col>
        </Row>
        </Content>
    </Layout>
    );
  }
}

export default Login;
