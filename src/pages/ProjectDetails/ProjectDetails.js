import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import DefaultLayout from '../../layouts/DefaultLayout'
import { projectData } from '../../data'

export default function ProjectDetails() {
    const [project, setProject] = useState(null)
    const { url } = useParams()

    useEffect(() => {
        const exactProject = projectData.find((i) => i.url === url)
        setProject(exactProject)
        //eslint-disable-next-line
    }, [])

    useEffect(() => {}, [project])

    return (
        <DefaultLayout>
            <div className="container mx-auto w-full">
                <div className="flex justify-center">
                    <img
                        src={project?.thumbnail?.url}
                        alt={project?.thumbnail?.explanation}
                        style={{ width: 1000, height: 400 }}
                        className="object-center object-cover mt-1"
                    />
                </div>
            </div>
            <div className="grid-cols-12 lg:grid mt-2">
                {project?.images?.map((img) => (
                    <div className="flex-col col-span-4 lg:flex">
                        <div className="flex flex-col gap-4">
                            <img
                                src={img?.url}
                                className="object-center object-cover w-full h-full"
                                alt={img?.explanation}
                                style={{ height: 500 }}
                            />
                        </div>
                    </div>
                ))}
            </div>
        </DefaultLayout>
    )
}
