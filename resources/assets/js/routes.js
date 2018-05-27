import Home from './components/Home.vue';
import Login from './components/auth/Login.vue';
import CustomersMain from './components/customers/CustomersMain.vue';
import CustomersList from './components/customers/CustomersList.vue';
import NewCustomer from './components/customers/NewCustomer.vue';
import Customer from './components/customers/Customer.vue';


export const routes = [
  {
    path: '/',
    component: Home,
    meta: {
      requiresAuth: true
    }
  },
  {
    path: '/login',
    component: Login
  },
  {
    path: '/customers',
    component: CustomersMain,
    meta: {
      requiresAuth: true
    },
    children: [
      {
        path: '/',
        component: CustomersList
      },
      {
        path: 'new',
        component: NewCustomer
      },
      {
        path: ':id',
        component: Customer
      }
    ]
  }
];
