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
      <div className="container flex flex-col mx-auto text-center">
        {projects?.map((project) => (
          <div className="mx-auto my-6" key={project.id}>
            <div className="font-medium text-lg mb-1">{project.title}</div>
            <div className="px-2 md:px-0">
              <Link href={`/projects/${project.url}`}>
                <a>
                  <Image
                    loader={() => project.thumbnail.url}
                    src={project.thumbnail.url}
                    alt={project.thumbnail.explanation}
                    className="object-cover object-center hover:contrast-75"
                    width={700}
                    height={400}
                    unoptimized
                  />
                </a>
              </Link>
            </div>
          </div>
        ))}
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
