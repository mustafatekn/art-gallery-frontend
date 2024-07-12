"use client";
import { ProjectObject } from "../types";
import { memo, useEffect, useState } from "react";
import ProjectDetailsSkeleton from "@/components/ProjectDetailsSkeleton";
import Slider from "@/components/Slider";
import ProjectImages from "@/components/ProjectDetails";
import Error from "next/error";
import { apiRequest } from "@/utils/api/apiRequest";
import { services } from "@/utils/api/apiUrls";

type ProjectDetailsPageProps = {
    params: {
        url: string;
    }
}

const getProjectDetails = async (url: string): Promise<ProjectObject | null> => {
    const res = await apiRequest<ProjectObject>({ url: services.getPostByUrl(url) });
    return res.data;
};

const ProjectDetailsPage = (props: ProjectDetailsPageProps) => {
    const { params } = props;
    const [show, setShow] = useState(false);
    const [project, setProject] = useState<ProjectObject | null>(null);
    const [sliderIndex, setSliderIndex] = useState(0);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchProjectDetails = async () => {
            const url = params.url;
            if (!url) return;
            setLoading(true);

            getProjectDetails(url)
                .then((data) => setProject(data))
                .catch((error: Error) => console.log(error))
                .finally(() => setLoading(false));
        };

        fetchProjectDetails();
    }, [params.url]);

    return (
        loading ? (<ProjectDetailsSkeleton />) :
            project ? (
                show ? (
                    <Slider
                        setShow={(show: boolean) => setShow(show)}
                        index={sliderIndex}
                        project={project}
                    />
                ) : <ProjectImages
                    project={project}
                    setSliderIndex={(index: number) => setSliderIndex(index)}
                    setShow={(show: boolean) => setShow(show)}
                />
            ) : (
                <div className="container mx-auto my-3">Project not found.</div>
            )
    );
};

export default memo(ProjectDetailsPage);