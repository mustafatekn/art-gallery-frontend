import DefaultLayout from "../../layouts/DefaultLayout";
import { projectData } from "../../data";
import Head from "next/head";

export default function ProjectDetails({ project }) {
  return (
    <DefaultLayout>
      <Head>
        <title>{project.title}</title>
      </Head>
      <div className="container mx-auto w-full">
        <div className="flex justify-center">
          <img
            src={project?.thumbnail?.url}
            alt={project?.thumbnail?.explanation}
            style={{ width: 1000, height: 400 }}
            className="object-center object-cover"
          />
        </div>
      </div>
      <div className="grid-cols-12 lg:grid mt-2">
        {project?.images?.map((img) => (
          <div className="flex-col col-span-4 lg:flex" key={img.url}>
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
