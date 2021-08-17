import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class ProductItem extends Component {
    onDelete = (id,name) =>{
        if(window.confirm("Bạn muốn xóa sản phẩm " + name + " không ?")){
            this.props.onDelete(id,name);
        }
        
    }
    render() {
        var {index, product} = this.props;
        var statusName = product.status  ? 'Còn hàng' : 'Hết hàng';
        var statusClass = product.status ? 'primary' : 'warning';
        return (
            <tr>
                <td>{index + 1}</td>
                <td>{product.id}</td>
                <td>{product.name}</td>
                <td>{product.price} VNĐ</td>
                <td>
                    <span className={`badge badge-pill badge-${statusClass}`}>
                        {statusName}
                    </span>
                </td>
                <td>
                <Link to={`/product/${product.id}/edit`} className="btn btn-success mr-3" type="button">
                    <i className="far fa-edit"></i>
                    Sửa
                </Link>
                <button className="btn btn-danger" 
                    onClick={() => this.onDelete(product.id,product.name)} 
                    type="button">
                    <i className="far fa-trash-alt"></i>
                    Xóa
                </button>
                </td>
            </tr>
        );
    }
}

export default ProductItem;
