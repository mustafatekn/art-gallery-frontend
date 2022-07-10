import DefaultLayout from "../../layouts/DefaultLayout";
import { projectData } from "../../data";
import Head from "next/head";

export default function ProjectDetails({ project }) {
  return (
    <DefaultLayout>
      <Head>
        <title>{project.title}</title>
      </Head>
      <div className="mx-auto w-full">
        <div className="flex justify-center">
          <img
            src={project.thumbnail.url}
            alt={project.thumbnail.explanation}
            className="object-fill w-full"
            style={{maxHeight:700}}
          />
        </div>
      </div>
      <div className="grid-cols-12 gap-12 mt-12 lg:grid mx-12">
        {project?.images?.map((img) => (
          <div className="flex-col col-span-4 lg:flex">
            <div className="flex flex-col gap-12">
              <img
                src={img.url}
                className="object-center object-cover w-full h-full"
                alt={img.explanation}
                style={{minHeight:500}}
              />
            </div>
          </div>
        ))}
      </div>
    </DefaultLayout>
  );
}

export async function getServerSideProps({ params }) {
  const project = projectData.find((i) => i.url === params.url);

  return {
    props: {
      project,
    },
  };
}
