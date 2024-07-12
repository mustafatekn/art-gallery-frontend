import Image from "next/image"
import Link from "next/link"
import { ProjectObject } from "@/app/types"; 

type ProjectProps = {
    project: ProjectObject
}

const Project = (props: ProjectProps) => {
    const { url, thumbnail, title } = props.project;

    return (
        <div className="mx-auto px-5 xl:px-0 box-border w-full h-full max-h-[480px]">
            <div className="relative filter ease-in-out duration-700 w-full h-full">
                <Link href={`/projects/${url}`}>
                    <Image
                        width={500}
                        height={400}
                        src={thumbnail.url}
                        alt={thumbnail.description}
                        className="object-cover object-center w-full h-full rounded-sm"
                        loading="lazy"
                    />
                    <div className="font-medium text-5xl duration-700 hover:backdrop-brightness-50 hover:backdrop-grayscale-0 text-white absolute top-0 bottom-0 left-0 right-0 flex flex-col items-center justify-center opacity-0 hover:opacity-100">
                        {title}
                    </div>
                </Link>
            </div>
        </div>
    )
}

export default Project