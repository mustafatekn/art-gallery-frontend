import React, { useEffect, useState } from "react";
import DefaultLayout from "../../layouts/DefaultLayout";
import { projectData } from "../../data";
import Link from "next/link";
import Image from "next/image";
import Head from "next/head";

export default function Projects({ projects }) {
  return (
    <DefaultLayout>
      <Head>
        <title>Rixusart | Projects</title>
      </Head>
      <div className="container flex flex-col mx-auto text-center">
        {projects?.map((project) => (
          <div className="mx-auto my-6" key={project.id}>
            <div className="font-medium text-lg mb-1">{project.title}</div>
            <Link href={`/projects/${project.url}`}>
              <a>
                <Image
                  loader={() => project.thumbnail.url}
                  src={project.thumbnail.url}
                  alt={project.thumbnail.explanation}
                  className="object-cover object-center hover:contrast-75"
                  width={500}
                  height={300}
                  unoptimized
                />
              </a>
            </Link>
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