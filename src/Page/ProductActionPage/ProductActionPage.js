import React, { Component } from 'react';
import callAPI from '../../utils/apiCaller';
import {Link} from 'react-router-dom';
import { connect } from 'react-redux';
import {actionAddProductRequest ,actionEditProductRequest, actionUpdateProductRequest} from '../../action/index';

class ProductActionPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            id : '',
            txtname : '',
            txtprice: '',
            chkstatus : false
        }
    }
    componentDidMount(){
        var {match} = this.props;
        if(match){
            var id = match.params.id;
            callAPI(`products/${id}`, 'GET',null).then(res =>{
               var data = res.data;
               console.log(data);
               this.setState({
                   id : data.id,
                   txtname : data.name,
                   txtprice : data.price,
                   chkstatus : data.status
               })
            });
            this.props.onEditProduct(id);
          
        }
    }
    componentWillReceiveProps(nextProps){
       if (nextProps && nextProps.itemEditing) {
           var { itemEditing } = nextProps;
           this.setState({
                id : itemEditing.id,
                txtname : itemEditing.name,
                txtprice : itemEditing.price,
                chkstatus : itemEditing.status
            });
       }
    }
    onChange = (e) =>{
        var value = e.target.type === 'checkbox' ? e.target.checked : e.target.value;
        var name = e.target.name;
        this.setState({
            [name] : value
        })
    }
    onSave = (e) =>{
        e.preventDefault();
        console.log(this.state);
        var {id, txtname, txtprice, chkstatus} = this.state;
        var {history} = this.props;
        var product = {
            id:id,
            name : txtname ,
            price : txtprice,
            status : chkstatus
        }
        if (id && id != '') {//edit
            this.props.onUpdateProduct(product);
        }else{ //add
            this.props.onAddProduct(product);

        }
        history.goBack();
        
    }
    render() {
        var { txtname, txtprice, chkstatus,id} = this.state;
        var title = !id && id == '' ? 'Thêm Sản Phẩm' : 'Sửa sản phẩm ' + txtname;
        return (
            <div className="col-md-6 m-auto">
                <h1>{title}</h1>
                  <form onSubmit={this.onSave}>
                    <div className="form-group">
                      <label >Tên Sản Phẩm</label>
                      <input type="text" 
                        name = "txtname"
                        value = {txtname}
                        onChange = {this.onChange}
                        className="form-control" />
                    </div>
                    <div className="form-group">
                      <label >Giá Sản Phẩm</label>
                      <input type="text" 
                        name = "txtprice"
                        value = {txtprice}
                        onChange = {this.onChange}
                        className="form-control" />
                    </div>
                    <div className="form-group">
                      <label >Trạng thái</label>
                      
                    </div>
                    <div className="form-check">
                        <input 
                            id="chkstatus" 
                            className="form-check-input" 
                            type="checkbox" 
                            name="chkstatus" 
                            checked = {chkstatus}
                            onChange = {this.onChange}
                            value={chkstatus} />
                        <label htmlFor="status" className="form-check-label">Còn hàng</label>
                    </div>
                    <Link to="/product-list" className="btn btn-danger float-right ml-3">
                        Trở lại
                    </Link>
                    <button  type="submit" className="btn btn-primary float-right">
                      Lưu lại
                    </button>
                  </form>
                </div>
           
            
        );
    }
}
const mapStatetoProps = (state) =>{
    return {
        itemEditing : state.itemEditing
    }
}
const mapDispatchtoProps = (dispatch,action) =>{
    return {
        onAddProduct : (product)=>{
            dispatch(actionAddProductRequest(product))
        },
        onEditProduct : (id) =>{
            dispatch(actionEditProductRequest(id))
        },
        onUpdateProduct : (id) =>{
            dispatch(actionUpdateProductRequest(id))
        }
    }
}
export default connect(mapStatetoProps,mapDispatchtoProps)(ProductActionPage);
