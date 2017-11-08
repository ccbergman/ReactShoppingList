import React, { Component } from 'react';

class ShopItem extends Component {
    
        render() {
            return (
                <div className="ShopItem">
                    <div className="ShopItem__name">{this.props.item.name}</div>
                    <div className="ShopItem__price">{this.props.item.price || "No Price"}</div>
                    <button className="ShopItem__delete-button"
                            title={"Delete " + this.props.item.name}
                            onClick={this.props.onDelete}>
                        <i className="fa fa-trash fa-lg"></i>
                    </button>
                </div>
            );
        }
    }
    
    export default ShopItem;