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
            style={{ maxHeight: 700 }}
          />
        </div>
      </div>
      <div className="container w-full mx-auto text-center my-10">
        <h2 className="font-extrabold text-3xl ">{project.title}</h2>
        <h6 className="font-bold text-2xl">{project.location}</h6>
        <p className="font-semibold text-xl">{project.text}</p>
      </div>
      <div className="grid-cols-12 gap-12 lg:grid mx-12">
        {project?.images?.map((img, index) => (
          <div
            className={
              index > 2
                ? "flex-col col-span-4 lg:flex my-12"
                : "flex-col col-span-4 lg:flex mb-12"
            }
            key={img.url}
          >
            <div className="flex flex-col gap-12">
              <img
                src={img.url}
                className="object-center object-cover w-full h-full"
                alt={img.explanation}
                style={{ minHeight: 500 }}
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
