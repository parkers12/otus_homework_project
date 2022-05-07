import React, {useState} from 'react';
import { BrowserRouter, Route } from "react-router-dom";
import './app.scss';
import Header from 'src/components/Header';
import Footer from 'src/components/Footer';
import MainPage from "src/pages/MainPage";
import ContactsPage from "src/pages/ContactsPage";
import Modal from "src/components/Modal";
import MenuMobile from "src/components/MenuMobile";

function App() {
    const [btn, setbtn] = useState(false);

    const onOpenCall = () => {
        setbtn(true);
        //console.log(props);
    };

    const onCloseCall = () => {
        setbtn(false);
    };

    const [menumb, setmenumb] = useState(false);

    const onOpenMenuMobile = () => {
      setmenumb(true);
      //console.log(menumb);
    };

    const onCloseMenuMobile = () => {
        setmenumb(false);
    };

    return (
        <BrowserRouter>
            <div className="content">
                <Header onOpenCall={onOpenCall} onOpenMenuMobile={onOpenMenuMobile} />
                <Route path='/mainPage' component={MainPage} />
                <Route path='/contactsPage' component={ContactsPage} />
            </div>

            <Footer/>
            {btn ?
              <Modal onCloseCall={onCloseCall} />
              : null
            }
            {menumb ?
              <MenuMobile onCloseMenuMobile={onCloseMenuMobile} />
              : null
            }
        </BrowserRouter>
    );
}

export default App;
