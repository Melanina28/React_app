import React from 'react';

import {
  Input, Button, message, Form,
} from 'antd';
import 'antd/dist/antd.css';

// @imports api
import accountAPI from '../../api/accountAPI';

// @imports config
import auth from '../../config/auth';

class LoginComponent extends React.Component {
  state = {
    loading: {
      loading__LoginAccount: false,
    },
    form: {
      email: '',
      password: '',
    },
    requestError: {
      status: null,
      error: null,
    },
  };

  handleChange = (e) => {
    this.setState({
      ...this.state,
      form: {
        email: this.state.form.email,
        password: this.state.form.password,
        [e.target.name]: e.target.value,
      },
    });
  }

  changeStatusloding(statusBoolean) {
    this.setState({
      ...this.state,
      loading: {
        loading__LoginAccount: statusBoolean,
      },
    });
  }

  handleLogin = () => {
    this.changeStatusloding(true);
    accountAPI.accountLogin(this.state.form)
      .then(
        (resp) => {
          if (resp.data && resp.data.token) {
            auth.authorization(resp.data.token.access_token);
            
            accountAPI.accountAvatar()
            .then(
              ({data})=> {
                console.log(data);
                if(data.has_courses == 0){
                  this.props.history.push('/');
                }else{
                  this.props.history.push('/home');
                }
              }
            ).catch((error) => {
                this.props.history.push('/');
            });

          } else {
            message.error(resp.data.response);
            this.changeStatusloding(false);
          }
        },
      ).catch((error) => {
        // Colocamos estado en caso de que se quiera mostrar en la vista
        this.setState({
          ...this.state,
          requestError: {
            ...error,
          },
        });

        // Desplegamos mensaje de error
        message.error('Intentalo nuevamente');

        // Se cambiar el estado de loading
        this.changeStatusloding(false);
      });
  }

  render() {
    return (
      <React.Fragment>
        <Form layout="vertical">
          <Form.Item label="Email" name="email__input">
              <Input type="email" name="email" onChange={ this.handleChange }
                    defaultValue={ this.state.form.email }
                    placeholder="Type your email" />
          </Form.Item>

          <Form.Item label="Password" name="password__input">
            <Input type="password" name="password" onChange={ this.handleChange }
                  defaultValue={ this.state.form.password }
                  placeholder="Type your password" />
          </Form.Item>
            <Button type="primary"
                style={{ width: '100%' }}
                loading={this.state.loading.loading__LoginAccount}
                onClick={ this.handleLogin }>LogIn</Button>
        </Form>
      </React.Fragment>
    );
  }
}

export default LoginComponent;
