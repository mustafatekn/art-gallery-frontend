import DefaultLayout from "../../layouts/DefaultLayout";
import { projectData } from "../../data";
import Link from "next/link";
import Head from "next/head";

export default function Projects({ projects }) {
  return (
    <DefaultLayout title="Projects">
      <Head>
        <title>Projects | Rixusart</title>
        <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
        <meta name="Rixusart Projects" content="Rixusart" />
        <meta
          name="description"
          content="Yağlı boya tablo, soyut resim, duvar resmi ve dekoratif boya gibi sanatın birçok dalından projeler"
        />
        <meta
          name="keywords"
          content="Rixusart, rixusart, Art, Resim, Sanat, Dekoratif Boya, Yağlı Boya, Tablo, Emir Teke, Duvar Resmi, Duvar Ressamı, Soyut Resim, Proje, Projects, Projeler, Instagram, Facebook, Pinterest, instagram, facebook, pinterest"
        />
        <meta name="robots" content="index, follow" />
        <meta name="revisit-after" content="7 days" />
        <meta name="author" content="Mustafa Osman Tekin" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>
      <div className="container flex flex-col mx-auto my-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-20 gap-y-10">
          {projects?.map((project) => (
            <div
              className="mx-auto px-5 xl:px-0 box-border w-full h-full"
              key={project.id}
            >
              <div className="relative filter ease-in-out duration-700 w-full h-full">
                <Link href={`/projects/${project.url}`}>
                  <a>
                    <img
                      src={project.thumbnail.url}
                      alt={project.thumbnail.explanation}
                      className="object-cover object-center w-full h-full rounded-sm"
                      loading="lazy"
                    />
                    <div className="font-medium text-5xl duration-700 hover:backdrop-brightness-50 hover:backdrop-grayscale-0 text-white absolute top-0 bottom-0 left-0 right-0 flex flex-col items-center justify-center opacity-0 hover:opacity-100">
                      {project.title}
                    </div>
                  </a>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </DefaultLayout>
  );
}

export async function getStaticProps() {
  const projects = [...projectData];
  return {
    props: {
      projects,
    },
  };
}
