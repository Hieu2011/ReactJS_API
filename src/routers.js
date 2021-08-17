import HomePage from './Page/HomePage/HomePage';
import NotFoundPage from './Page/NotFoundPage/NotFoundPage';
import ProductActionPage from './Page/ProductActionPage/ProductActionPage';
import ProductListPage from './Page/ProductListPage/ProductListPage';

const routers = [
    {
        path: '/',
        exact : true,
        main : () => <HomePage/>

    },
    {
        path: '/product-list',
        exact : false,
        main : () => <ProductListPage/>
    },
    {
        path: '/product/add',
        exact : false,
        main : ({history}) => <ProductActionPage history={history}/>
    },
    {
        path: '/product/:id/edit',
        exact : false,
        main : ({match,history}) => <ProductActionPage match={match} history={history}/>
    },
    {
        path: '',
        exact : false,
        main : () => <NotFoundPage/>
    }
    
]
export default routers;

