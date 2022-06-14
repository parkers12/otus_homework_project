import React, { useState } from "react";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import "./app.scss";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Main from "./pages/Main";
import Catalog from "./pages/Catalog";
import Contacts from "./pages/Contacts";
import Modal from "./components/Modal";
import MenuMobile from "./components/MenuMobile";

export default function App() {
  const [btn, setbtn] = useState(false);

  const onOpenCall = () => {
    setbtn(true);
    // console.log(props);
  };

  const onCloseCall = () => {
    setbtn(false);
  };

  const [menumb, setmenumb] = useState(false);

  const onOpenMenuMobile = () => {
    setmenumb(true);
    // console.log(menumb);
  };

  const onCloseMenuMobile = () => {
    setmenumb(false);
  };

  return (
    <BrowserRouter >
      <div className="content">
        <Header onOpenCall={onOpenCall} onOpenMenuMobile={onOpenMenuMobile} />
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/catalog" element={<Catalog />} />
          <Route path="/contacts" element={<Contacts />} />
        </Routes>
      </div>

      <Footer />
      {btn ? <Modal onCloseCall={onCloseCall} /> : null}
      {menumb ? <MenuMobile onCloseMenuMobile={onCloseMenuMobile} /> : null}
    </BrowserRouter>
  );
}
