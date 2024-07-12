"use client";
import React from 'react';
import ReactDOM from 'react-dom';
import { ModalConfig, ModalComponent, ModalMethods } from './types';
import { MODAL_TYPES } from '@/utils/enums';
import SuccessIcon from '@/assets/svg/success.svg';
import ErrorIcon from '@/assets/svg/error.svg';

const Modal: ModalComponent = (props) => {
  const { title, icon, children, message, onClose } = props;

  return ReactDOM.createPortal(
    <div className="absolute inset-0 backdrop-brightness-50 w-screen h-screen z-[999]">
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 bg-white rounded-lg overflow-hidden z-[999] min-w-[450px]">
        <div className="space-y-2 text-center">
          {title && (
            <div className="shadow-sm py-3">
              <h5 className="ml-3 font-bold text-2xl tracking-wider">
                {title}
              </h5>
            </div>
          )}
          <div className="pb-8 pt-5 space-y-8 text-lg">
            {icon}
            {message && <div className="font-bold">{message}</div>}
            {children}
            <button
              className="px-10 py-1 rounded-md text-white font-bold bg-slate-800"
              onClick={onClose}
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </div>,
    document.body
  );
};

const modalIcons = {
  [MODAL_TYPES.success]: <SuccessIcon className="w-16 h-16 text-green-500 block mx-auto" fill="rgb(34 197 94 / var(--tw-text-opacity))" />,
  [MODAL_TYPES.error]: <ErrorIcon className="w-16 h-16 block mx-auto text-red-500" fill="rgb(239 68 68 / var(--tw-text-opacity))" />,
};

const createModal = (config: ModalConfig): void => {
  const modalRoot = document.createElement('div');
  document.body.appendChild(modalRoot);

  const handleClose = () => {
    //eslint-disable-next-line
    ReactDOM.unmountComponentAtNode(modalRoot);
    document.body.removeChild(modalRoot);
    if (config.onClose) {
      config.onClose();
    }
  };
  //eslint-disable-next-line
  ReactDOM.render(<Modal {...config} onClose={handleClose} />, modalRoot);
};

const modalMethods: ModalMethods = {
  success: (config: ModalConfig) => {
    return createModal({ ...config, type: MODAL_TYPES.success, icon: modalIcons[MODAL_TYPES.success] });
  },
  error: (config: ModalConfig) => {
    return createModal({ ...config, type: MODAL_TYPES.error, icon: modalIcons[MODAL_TYPES.error] });
  }
};

const EnhancedModal: ModalComponent & ModalMethods = Object.assign(Modal, modalMethods);
export default EnhancedModal;