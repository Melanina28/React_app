import React from 'react';
import { Layout } from 'antd';

function LoginLayout(props) {
  return (
    <Layout>
      <div className="content-login-wrapper">
        {props.children}
       </div>
    </Layout>
  );
}

export default LoginLayout;
