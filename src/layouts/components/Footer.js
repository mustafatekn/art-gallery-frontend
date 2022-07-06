import React from 'react'

export default function Footer() {
    return (
        <div className="fixed bottom-0 w-full pt-6 pb-2 bg-white">
            <div className="container mx-auto bottom-0">
                <div className="flex justify-center mb-1">
                    <a
                        href="https://www.instagram.com/rixusart/"
                        target="_blank"
                        rel="noreferrer"
                        className="mx-2"
                    >
                        <svg role="img" className="w-9 h-9 text-primary-black">
                            <use xlinkHref="/assets/icons/sprite.svg#instagram" />
                        </svg>
                    </a>

                    <a
                        href="https://www.facebook.com/rixusart"
                        target="_blank"
                        rel="noreferrer"
                        className="mx-2"
                    >
                        <svg role="img" className="w-9 h-9 text-primary-black">
                            <use xlinkHref="/assets/icons/sprite.svg#facebook" />
                        </svg>
                    </a>

                    <a
                        href="https://tr.pinterest.com/rixusart/"
                        target="_blank"
                        rel="noreferrer"
                        className="mx-2"
                    >
                        <svg role="img" className="w-9 h-9 text-primary-black">
                            <use xlinkHref="/assets/icons/sprite.svg#pinterest" />
                        </svg>
                    </a>
                </div>
                <div className="text-center w-full">
                    ©2022 by rixusart Ankara, Turkey
                </div>
            </div>
        </div>
    )
}
