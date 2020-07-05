import React, { Component } from "react";

const ProductContext = React.createContext();
//Provider
//Consumer
class ProductProvider extends Component {

  state = {
    sidebarState: false,
    cardState: false,
    cardItems: 3
  }

  handleSidebar = () => {
    this.setState({sidebarState: !this.state.sidebarState});
  }

  handleCard = () => {
    this.setState({cardState: !this.state.cardState});
  }

  closeCart = () => {
    this.setState({cardState: false});
  }

  openCart = () => {
    this.setState({cardState: true});
  }

  render() {
    return (
      <ProductContext.Provider value="{
        {
          ...this.satate,
          handleSidebar: this.handleSidebar,
          handleCard: this.handleCard,
          closeCart: this.closeCart,
          openCart: this.openCart
        }
      }">
        {this.props.children}
      </ProductContext.Provider>
    );
  }
}

const ProductConsumer = ProductContext.Consumer;

export { ProductProvider, ProductConsumer };
