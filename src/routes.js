import forgotPassword from './screens/forgot-password';
import Login from './screens/login';
import Signup from './screens/signup';
import ForgotPassword from './screens/forgot-password';
import Dashboard from './screens/dashboard';
import NotFound from './screens/404';
const routes = [

    {
        path: '/',
        component: Login,
        exact: true

    },
    {
        path: '/signup',
        component: Signup
    },
    {
        path: '/forgotpassword',
        component: ForgotPassword
    },
    {
        path: '/dashboard',
        component: Dashboard
    }
    ,{
        path: '/*',
        component: NotFound
    }

  


    

    
];

export default routes;