import { ReactNode } from 'react';

interface Image {
    url: string;
    description: string;
}

export interface ProjectObject {
    _id: string;
    url: string;
    thumbnail: Image;
    images: Array<Image>;
    title: string;
    location: string;
}

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