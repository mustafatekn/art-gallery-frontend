import { ReactNode } from 'react';

export type ModalConfig = {
  title?: string;
  message?: string;
  type?: string;
  onClose?: () => void;
  children?: ReactNode;
  icon?: any;
};

export type ModalComponent = (props: ModalConfig) => React.ReactPortal | null;

export type ModalMethods = {
  success: (config: ModalConfig) => void;
  error: (config: ModalConfig) => void;
};