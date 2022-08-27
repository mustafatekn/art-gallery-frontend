import DefaultLayout from "../../layouts/DefaultLayout";
import Head from "next/head";
import Project from "../../components/Project";
import axios from "axios";

export default function Projects({ projects }) {
  console.log(projects);
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
          content="Rixusart, rixusart, Mural, Interior Architecture, Interior, Architecture,iç, mimari, iç mimari, dekorasyon, Art, Resim, Sanat, Dekoratif Boya, Yağlı Boya, Tablo, Emir Teke, Duvar Resmi, Duvar Ressamı, Soyut Resim, Proje, Projects, Projeler, Instagram, Facebook, Pinterest, instagram, facebook, pinterest"
        />
        <meta name="robots" content="index, follow" />
        <meta name="revisit-after" content="7 days" />
        <meta name="author" content="Mustafa Osman Tekin" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>
      <div className="container flex flex-col mx-auto my-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-20 gap-y-10">
          {projects?.map((project) => (
            <Project project={project} key={project._id} />
          ))}
        </div>
      </div>
    </DefaultLayout>
  );
}

export async function getStaticProps() {
  const response = await axios.get("https://rixusart-backend.herokuapp.com/posts");
  const projects = await response.data;

  return {
    props: {
      projects,
    },
  };
}
