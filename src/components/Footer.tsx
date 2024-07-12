import { memo } from "react"
import InstagramIcon from '@/assets/svg/instagram.svg';
import FacebookIcon from '@/assets/svg/facebook.svg';
import PinterestIcon from '@/assets/svg/pinterest.svg';

const Footer = () => {
    return (
        <div className="w-full  pb-2 bg-white z-40 flex flex-col flex-1 flex-grow justify-end raleway-medium">
            <div className="container mx-auto bottom-0">
                <div className="flex justify-center mb-1">
                    <a
                        href="https://www.instagram.com/rixusart/"
                        target="_blank"
                        rel="noreferrer"
                        className="mx-2"
                    >
                        <InstagramIcon className="w-9 h-9 text-primary-black" />
                    </a>

                    <a
                        href="https://www.facebook.com/rixusart"
                        target="_blank"
                        rel="noreferrer"
                        className="mx-2"
                    >
                        <FacebookIcon className="w-9 h-9 text-primary-black" />
                    </a>

                    <a
                        href="https://tr.pinterest.com/rixusart/"
                        target="_blank"
                        rel="noreferrer"
                        className="mx-2"
                    >
                        <PinterestIcon className="w-9 h-9 text-primary-black" />
                    </a>
                </div>
                <div className="text-center w-full">
                    ©<span className="segoe">{new Date().getFullYear()}</span> by rixusart Ankara, Turkey
                </div>
            </div>
        </div>
    )
}

export default memo(Footer)