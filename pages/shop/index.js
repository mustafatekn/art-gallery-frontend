import React, { useState } from "react";
import Product from "../../components/Product";
import DefaultLayout from "../../layouts/DefaultLayout";

export default function Shop() {
  const [products] = useState([
    {
      _id: "62ee6a478ffef5fbafc4bc20",
      title: "Title 1",
      location: "Ankara",
      images: [
        {
          url: "https://www.thoughtco.com/thmb/VG5-1LGCmdWyW23Uf7Vr-R_5tqk=/3504x2336/filters:fill(auto,1)/GettyImages-116248249-5be59c3cc9e77c00514fed87.jpg",
          description: "link",
        },
        {
          url: "https://static.remove.bg/remove-bg-web/5c20d2ecc9ddb1b6c85540a333ec65e2c616dbbd/assets/start-1abfb4fe2980eabfbbaaa4365a0692539f7cd2725f324f904565a9a744f8e214.jpg",
          description: "girl",
        },
        {
          url: "https://www.pixsy.com/wp-content/uploads/2021/04/ben-sweet-2LowviVHZ-E-unsplash-1.jpeg",
          description: "profile-image",
        },
        {
          url: "https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg",
          description: "tree",
        },
      ],
      thumbnail: {
        url: "https://static.remove.bg/remove-bg-web/5c20d2ecc9ddb1b6c85540a333ec65e2c616dbbd/assets/start-1abfb4fe2980eabfbbaaa4365a0692539f7cd2725f324f904565a9a744f8e214.jpg",
        description: "girl",
      },
      url: "first-project",
    },
    {
      _id: "62ee6a7d8ffef5fbafc4bc21",
      title: "Title 2",
      location: "Ankara",
      images: [
        {
          url: "https://helpx.adobe.com/content/dam/help/en/stock/how-to/visual-reverse-image-search/jcr_content/main-pars/image/visual-reverse-image-search-v2_intro.jpg",
          description: "butterfly",
        },
        {
          url: "https://static.remove.bg/remove-bg-web/5c20d2ecc9ddb1b6c85540a333ec65e2c616dbbd/assets/start-1abfb4fe2980eabfbbaaa4365a0692539f7cd2725f324f904565a9a744f8e214.jpg",
          description: "girl",
        },
        {
          url: "https://www.pixsy.com/wp-content/uploads/2021/04/ben-sweet-2LowviVHZ-E-unsplash-1.jpeg",
          description: "profile-image",
        },
      ],
      thumbnail: {
        url: "https://helpx.adobe.com/content/dam/help/en/stock/how-to/visual-reverse-image-search/jcr_content/main-pars/image/visual-reverse-image-search-v2_intro.jpg",
        description: "butterfly",
      },
      url: "second-project",
    },
    {
      _id: "62ee6ac28ffef5fbafc4bc22",
      title: "Title 3",
      location: "İstanbul",
      images: [
        {
          url: "https://helpx.adobe.com/content/dam/help/en/stock/how-to/visual-reverse-image-search/jcr_content/main-pars/image/visual-reverse-image-search-v2_intro.jpg",
          description: "butterfly",
        },
        {
          url: "https://static.remove.bg/remove-bg-web/5c20d2ecc9ddb1b6c85540a333ec65e2c616dbbd/assets/start-1abfb4fe2980eabfbbaaa4365a0692539f7cd2725f324f904565a9a744f8e214.jpg",
          description: "girl",
        },
        {
          url: "https://www.pixsy.com/wp-content/uploads/2021/04/ben-sweet-2LowviVHZ-E-unsplash-1.jpeg",
          description: "profile-image",
        },
      ],
      thumbnail: {
        url: "https://www.pixsy.com/wp-content/uploads/2021/04/ben-sweet-2LowviVHZ-E-unsplash-1.jpeg",
        description: "profile-image",
      },
      url: "third-project",
    },
    {
      _id: "62ee6b438ffef5fbafc4bc24",
      title: "Title 4",
      location: "Ankara",
      images: [
        {
          url: "https://helpx.adobe.com/content/dam/help/en/stock/how-to/visual-reverse-image-search/jcr_content/main-pars/image/visual-reverse-image-search-v2_intro.jpg",
          description: "butterfly",
        },
        {
          url: "https://static.remove.bg/remove-bg-web/5c20d2ecc9ddb1b6c85540a333ec65e2c616dbbd/assets/start-1abfb4fe2980eabfbbaaa4365a0692539f7cd2725f324f904565a9a744f8e214.jpg",
          alt: "girl",
        },
        {
          url: "https://www.pixsy.com/wp-content/uploads/2021/04/ben-sweet-2LowviVHZ-E-unsplash-1.jpeg",
          description: "profile-image",
        },
        {
          url: "https://www.thoughtco.com/thmb/VG5-1LGCmdWyW23Uf7Vr-R_5tqk=/3504x2336/filters:fill(auto,1)/GettyImages-116248249-5be59c3cc9e77c00514fed87.jpg",
          description: "link",
        },
      ],
      thumbnail: {
        url: "https://www.thoughtco.com/thmb/VG5-1LGCmdWyW23Uf7Vr-R_5tqk=/3504x2336/filters:fill(auto,1)/GettyImages-116248249-5be59c3cc9e77c00514fed87.jpg",
        description: "link",
      },
      url: "fourth-project",
    },
  ]);

  return (
    <DefaultLayout>
      <div className="container flex flex-col mx-auto my-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-20 gap-y-10">
          {products.length > 0 &&
            products.map((product) => (
              <Product product={product} key={product._id} />
            ))}
        </div>
      </div>
    </DefaultLayout>
  );
}
