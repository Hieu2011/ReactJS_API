import React, { Component } from 'react';

class NotFoundPage extends Component {
    render() {
        return (
            <div className="container">
                <div className="alert alert-primary" role="alert">
                    <h4 className="alert-heading">NotFound 404</h4>
                    Không tìm thấy trang
                </div>
            </div>
        );
    }
}

export default NotFoundPage;
