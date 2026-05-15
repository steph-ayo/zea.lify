import { useState } from "react";
import { CartProvider } from "./context/CartContext";
import type { Order, Page } from "./types/index";
import Nav from "./components/Nav";
import Hero from "./components/Hero";
import Catalogue from "./components/Catalogue";
import CustomBranding from "./components/CustomBranding";
import CartDrawer from "./components/CartDrawer";
import Checkout from "./components/Checkout";
import Confirmation from "./components/Confirmation";
import Footer from "./components/Footer";

export default function App() {
  const [cartOpen, setCartOpen] = useState(false);
  const [page, setPage] = useState<Page>("home");
  const [order, setOrder] = useState<Order | null>(null);

  const handleCheckout = () => {
    setCartOpen(false);
    setPage("checkout");
  };

  const handleSuccess = (o: Order) => {
    setOrder(o);
    setPage("confirmation");
  };

  const handleContinue = () => {
    setOrder(null);
    setPage("home");
  };

  return (
    <CartProvider>
      <div className="bg-black min-h-screen font-sans">
        <Nav onCartOpen={() => setCartOpen(true)} />
        <>
          {page === "home" && (
            <>
              <Hero />
              <Catalogue />
              <CustomBranding />
              <Footer />
            </>
          )}
          {page === "checkout" && (
            <Checkout
              onBack={() => {
                setPage("home");
                setCartOpen(true);
              }}
              onSuccess={handleSuccess}
            />
          )}
          {page === "confirmation" && order && (
            <Confirmation order={order} onContinue={handleContinue} />
          )}

          <CartDrawer
            open={cartOpen}
            onClose={() => setCartOpen(false)}
            onCheckout={handleCheckout}
          />
        </>
      </div>
    </CartProvider>
  );
}
