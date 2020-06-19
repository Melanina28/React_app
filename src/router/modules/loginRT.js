import LoginLayout from '../../layouts/LoginLayout';
import Login from '../../views/Login';

const prefix = '/login';

const routes = [
  {
    path: `${prefix}`,
    component: Login,
    exact: true,
  },
];

export default { layout: LoginLayout, routes };
