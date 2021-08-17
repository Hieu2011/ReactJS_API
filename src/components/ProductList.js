import React, { Component } from 'react';


class ProductList extends Component {
    render() {
        return (
            
            <table className="table table-dark mt-3">
                    <thead>
                    <tr>
                        <td>STT</td>
                        <td>Mã</td>
                        <td>Tên</td>
                        <td>Giá</td>
                        <td>Trạng thái</td>
                        <td>Hành động</td>
                    </tr>
                    </thead>
                    <tbody>
                        {this.props.children}
                        
                        
                    </tbody>
                </table>
        

      
        );
    }
}

export default ProductList;
