// import logo from "./logo.svg";
// import "./App.css";
import { Fragment, useState } from "react";
// import { CartContext } from "../src/store/cart-context";
// import { Router, renderRoutes } from "react-router-dom";
// import routes from "./Router/routes";
import Slide from "../Carousel/Slides";
import Carousel from "../Carousel/Carousel";
import Meals from "../Meals/Meals";
import CartProvider from "../../store/CartProvider";
import Cart from "../Cart/Cart";
import Header from "./Header";
import { Footer } from "../../footer/Footer";

function Main() {
  const [CartisShown, setCartisShown] = useState(false);

  const showCartHandler = () => {
    setCartisShown(true);
  };

  const hideCartHandler = () => {
    setCartisShown(false);
  };
  return (
    <CartProvider>
      {CartisShown && <Cart onHideCart={hideCartHandler} />}
      <Header onShowCart={showCartHandler} />

      <main>
        <Meals />
      </main>
      <main>
        <Carousel />
        {/* <Loader /> */}
      </main>
      <main>
        <Slide />
      </main>
      <Footer />
    </CartProvider>
  );
}

export default Main;
