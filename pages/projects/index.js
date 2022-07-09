import React, { useEffect, useState } from "react";
import DefaultLayout from "../../layouts/DefaultLayout";
import { projectData } from "../../data";
import Link from "next/link";

export default function Projects() {
  const [projects, setProjects] = useState();

  useEffect(() => {
    setProjects([...projectData]);
  }, []);

  return (
    <DefaultLayout>
      <div className="container flex flex-col mx-auto text-center">
        {projects?.map((project) => (
          <div className="mx-auto my-6" key={project.id}>
            <div className="font-medium text-lg mb-1">{project.title}</div>
            <Link href={`/projects/${project.url}`}>
              <img
                src={project.thumbnail.url}
                alt={project.thumbnail.explanation}
                className="object-cover object-center hover:contrast-75"
                style={{ width: 500, height: 300 }}
              />
            </Link>
          </div>
        ))}
      </div>
    </DefaultLayout>
  );
}
