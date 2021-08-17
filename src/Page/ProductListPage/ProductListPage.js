import React, { Component } from 'react';
import ProductItem from '../../components/ProductItem';
import ProductList from '../../components/ProductList';
import { connect } from 'react-redux';
import callAPI from '../../utils/apiCaller';
import { Link} from 'react-router-dom';
import {actionFetchProductRequest,actionDeleteProductRequest} from '../../action/index';

class ProductListPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            products : []
        }
    }
    componentDidMount() {
        this.props.fetchAllProducts();

    }
    onDelete = (id,name) =>{
        // var products = this.state.products;
        // var index = this.findProduct(products,id);
        // callAPI(`products/${id}`, 'DELETE',null).then(res =>{
        //     if (res.status === 200) { //ok
        //         products.splice(index,1);
        //         this.setState({
        //             products : products
        //         })
        //         alert('Xóa thành công sản phẩm ' + name);
        //     }
        // });
        this.props.onDeleteProduct(id,name);
    }
    
    render() {
        var {products} = this.props;
        
        return (
            <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                <Link to='/product/add' className="btn btn-primary" onClick={this.onAddProduct} type="button">
                    Thêm sản phẩm
                </Link>
                <ProductList>
                    {this.showProduct(products)}
                </ProductList>
                
            </div>
        );
    }
    showProduct = (products) =>{
        var result = null;
        if (products.length > 0) {
            result = products.map((product,index) =>{
                return <ProductItem
                            key={index}
                            product = {product}
                            index = {index}
                            onDelete = {this.onDelete}
                    />
            });
        }
        return result
    }
    onAddProduct = () =>{
        console.log('add product');
    }
}
const mapStatetoProps = (state) =>{
    return {
        products : state.products
    }
}
const mapDispatchtoProps = (dispatch,action) =>{
    return {
        fetchAllProducts : ()=>{
            dispatch(actionFetchProductRequest());
        },
        onDeleteProduct: (id,name) =>{
            dispatch(actionDeleteProductRequest(id,name));
        }
    }
}
export default connect(mapStatetoProps,mapDispatchtoProps)(ProductListPage);
