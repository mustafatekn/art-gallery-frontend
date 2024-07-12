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