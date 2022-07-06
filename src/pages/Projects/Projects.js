import React, { useState } from 'react'
import DefaultLayout from '../../layouts/DefaultLayout'

export default function Projects() {
    //eslint-disable-next-line
    const [projects, setProjects] = useState([
        {
            id: 1,
            title: 'title 1',
            text: 'text 1',
            imageUrl:
                'https://www.thoughtco.com/thmb/VG5-1LGCmdWyW23Uf7Vr-R_5tqk=/3504x2336/filters:fill(auto,1)/GettyImages-116248249-5be59c3cc9e77c00514fed87.jpg',
            url: 'black',
        },
        {
            id: 1,
            title: 'title 2',
            text: 'text 2',
            imageUrl:
                'https://static.remove.bg/remove-bg-web/5c20d2ecc9ddb1b6c85540a333ec65e2c616dbbd/assets/start-1abfb4fe2980eabfbbaaa4365a0692539f7cd2725f324f904565a9a744f8e214.jpg',
            url: 'girl',
        },
        {
            id: 1,
            title: 'title 3',
            text: 'text 3',
            imageUrl:
                'https://www.pixsy.com/wp-content/uploads/2021/04/ben-sweet-2LowviVHZ-E-unsplash-1.jpeg',
            url: 'profile-image',
        },
        {
            id: 1,
            title: 'title 4',
            text: 'text 4',
            imageUrl:
                'https://helpx.adobe.com/content/dam/help/en/stock/how-to/visual-reverse-image-search/jcr_content/main-pars/image/visual-reverse-image-search-v2_intro.jpg',
            url: 'butterfly',
        },
        {
            id: 1,
            title: 'title 5',
            text: 'text 5',
            imageUrl:
                'https://images.ctfassets.net/hrltx12pl8hq/7yQR5uJhwEkRfjwMFJ7bUK/dc52a0913e8ff8b5c276177890eb0129/offset_comp_772626-opt.jpg?fit=fill&w=800&h=300',
            url: 'camera',
        },
    ])

    return <DefaultLayout>
        <div className='container'>selam</div>
    </DefaultLayout>
}
