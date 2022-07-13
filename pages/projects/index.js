import DefaultLayout from "../../layouts/DefaultLayout";
import { projectData } from "../../data";
import Link from "next/link";
import Image from "next/image";
import Head from "next/head";

export default function Projects({ projects }) {
  return (
    <DefaultLayout title="Projects">
      <Head>
        <title>Projects | Rixusart</title>
      </Head>
      <div className="container flex flex-col mx-auto my-10">
        <div className="grid grid-cols-1  lg:grid-cols-2 gap-x-20 gap-y-10">
          {projects?.map((project) => (
            <div className="mx-auto px-5 xl:px-0" key={project.id}>
              <div className="font-medium text-lg mb-2 text-center lg:text-start">{project.title}</div>
              <div>
                <Link href={`/projects/${project.url}`}>
                  <a>
                    <Image
                      loader={() => project.thumbnail.url}
                      src={project.thumbnail.url}
                      alt={project.thumbnail.explanation}
                      className="object-cover object-center hover:contrast-75"
                      width={700}
                      height={500}
                      unoptimized
                    />
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
