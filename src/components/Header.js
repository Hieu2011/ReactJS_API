import React, { Component } from 'react';
import { Route,Link} from 'react-router-dom';

const MenuLink = ({
    label, // nội dung trong thẻ
    to, // giống như href trong thẻ a
    activeOnlyWhenExact
}) => {
    return (
        <Route 
            path={to}
            exact={activeOnlyWhenExact}
            children={ ({ match }) => { //match la doi tuong xac dinh su trung khop cua URL
                var active = match ? 'active' : '';

                return (
                   
                    <Link  to={to} className={`my-link ${active}`}>{label}</Link>
                
                );
            }}
        />
    );
}
class Header extends Component {
    
    render() {
        return (
            <div id="navbar">
                <Link  to="/" id="logo">Call API</Link>

                <div id="navbar-right">
                    <MenuLink label="Home" to ="/" activeOnlyWhenExact={true} />
                    <MenuLink label="Product" to ="/product-list" activeOnlyWhenExact={false} />
                   
                </div>
            
            </div>
        );
    }
}

export default Header;
