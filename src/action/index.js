import * as types from '../constants/ActionType';
import callAPI from '../utils/apiCaller';

export const actionFetchProductRequest = () =>{
    return (dispatch) =>{
        return callAPI('products','GET',null).then(res =>{
            dispatch(actionFetchProduct(res.data))
        });
    }
}

export const actionFetchProduct = (products) =>{
    return{
        type : types.FETCH_PRODUCT,
        products : products
    }
}
export const actionDeleteProductRequest = (id,name) =>{
    return (dispatch) =>{
        return callAPI(`products/${id}`, 'DELETE',null).then(res =>{
           
            if (res.status === 200) { //ok
                dispatch(actionDeleteProduct(id,name));
                alert('Xóa thành công sản phẩm ' + name);
            }
        });
      
    }
}
export const actionDeleteProduct = (id,name) =>{
    return{
        type : types.DELETE_PRODUCT,
        id,
        name
    }
}

export const actionAddProductRequest = (product) =>{
    return (dispatch) =>{
        return callAPI('products','POST',product).then(res =>{
                    dispatch(actionAddProduct(res.data))
                })
    }
}
export const actionAddProduct = (product) =>{
    return {
        type : types.ADD_PRODUCT,
        product
    }
}
export const actionUpdateProductRequest = (product) =>{
    return (dispatch) =>{
        return callAPI(`products/${product.id}`,'PUT',product).then(res =>{
                    dispatch(actionUpdateProduct(res.data))
                })
    }
}
export const actionUpdateProduct = (product) =>{
    return {
        type : types.UPDATE_PRODUCT,
        product
    }
}

export const actionEditProductRequest = (id) =>{
    return (dispatch) =>{
        return callAPI(`products/${id}`, 'GET',null).then(res =>{
            dispatch(actionEditProduct(res.data))
            
        });
    }
}
export const actionEditProduct = (product) =>{
    return {
        type: types.EDIT_PRODUCT,
        product
    }
}