import React, {useState} from 'react';
import * as PropTypes from 'prop-types';
import './modal.scss';
import { ReactComponent as CloseIcon } from '../../assets/icons/close.svg';
import Button from '../Button';
import Input from "../Input";
import Textarea from '../Textarea/Textarea';


const Modal = (props) => {

    const [isOpen, setisOpen] = useState(true);
    //console.log(props);

    const onCloseCall = () => {
        setisOpen(false);
        props.onCloseCall();
    };

    return (
        <>
            { isOpen ?
            <div className="modal modal_small">
                <div className="modal__container">
                    <div className="modal__header">
                        <div className="title title_modal">
                            { props.title }
                        </div>
                        <div className="modal__header-close">
                            <CloseIcon onClick={onCloseCall} />
                        </div>
                    </div>
                    <div className="modal__body">
                        { props.children }
                        <div className="modal__body-item">
                            <Input children="Имя" className="input-group_label input-group_prepend input-group_user" />
                        </div>
                        <div className="modal__body-item">
                            <Input children="Телефон" className="input-group_label input-group_prepend input-group_phone" />
                        </div>
                        <div className="modal__body-item">
                            <Input children="Дата" className="input-group_label input-group_prepend input-group_clock" />
                        </div>
                        <div className="modal__body-item">
                            <Textarea children="Текст" />
                        </div>
                    </div>
                    <div className="modal__footer">
                        <Button className="button_white" onClick={onCloseCall}>Отменить</Button>
                        <Button className="button_coral" onClick={onCloseCall}>Отправить</Button>
                    </div>
                </div>
                <div className="modal__overlay"></div>
            </div> : null
            }
        </>
    );
};

Modal.propTypes = {
    title: PropTypes.string,
    isOpen: PropTypes.bool,
    onCancel: PropTypes.func,
    onSubmit: PropTypes.func,
    children: PropTypes.node,
    className: PropTypes.string,
};

Modal.defaultProps = {
    title: '',
    isOpen: false,
    children: null,
    className: undefined,
};

export default Modal;
