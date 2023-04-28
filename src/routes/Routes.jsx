import { createBrowserRouter} from 'react-router-dom';
import About from '../components/About/About';
import Home from '../components/Home/Home';
import Main from '../components/layout/Main';
const router = createBrowserRouter([
	{
		path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/about',
                element: <About></About>
            },
            
            
        ]
	},
]);

export default router;
