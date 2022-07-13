import DefaultLayout from "../../layouts/DefaultLayout";
import { projectData } from "../../data";
import Head from "next/head";

export default function ProjectDetails({ project }) {
  return (
    <DefaultLayout>
      <Head>
        <title>{project.title} | Rixusart</title>
      </Head>
      <div className="mx-auto w-full">
        <div className="flex justify-center">
          <img
            src={project.thumbnail.url}
            alt={project.thumbnail.explanation}
            className="object-fill w-full h-auto"
            loading="lazy"
            style={{maxHeight:600}}
          />
        </div>
      </div>
      <div className="container w-full mx-auto text-center my-10">
        <h2 className="font-extrabold text-3xl ">{project.title}</h2>
        <h6 className="font-bold text-2xl">{project.location}</h6>
        <p className="font-semibold text-xl">{project.text}</p>
      </div>
      <div className="grid-cols-8 xl:grid-cols-12 gap-12 lg:grid mx-12">
        {project?.images?.map((img, index) => (
          <div
            className={
              index > 2
                ? "flex-col col-span-4 lg:flex my-12 lg:my-0 w-full h-full"
                : "flex-col col-span-4 lg:flex mb-12 lg:mb-0 w-full h-full"
            }
            key={img.url}
          >
            <div className="flex flex-col gap-12 w-full h-full">
              <img
                src={img.url}
                className="object-center object-cover w-full h-full"
                alt={img.explanation}
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
