import WorkingSpaceComponent from '../../components/WorkingSpace/WorkingSpaceComponent';
import EmptyLayout from '../../layouts/EmptyLayout';

const prefix = '/home';

const routes = [
    {
      path: `${prefix}`,
      component: WorkingSpaceComponent,
      exact: true,
    },
  ];
  
  export default { layout: EmptyLayout, routes };
  