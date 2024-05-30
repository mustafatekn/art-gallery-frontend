import { memo, useEffect, useState } from "react";
import axios from "axios";
import Head from "next/head";
import DefaultLayout from "../../layouts/DefaultLayout";
import Slider from "../../components/Slider";
import ProjectImages from "../../components/ProjectImages";
import { useRouter } from "next/router";
import ProjectDetailsSkeleton from "../../components/ProjectDetailsSkeleton";

const ProjectDetails = () => {
  const [show, setShow] = useState(false);
  const [sliderIndex, setSliderIndex] = useState(0);
  const [project, setProject] = useState({});
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  useEffect(() => {
    if (!router.isReady) return;

    (async () => {
      try {
        setLoading(true);
        const project = await axios.get(`${process.env.SERVER_URL}/post/${router.query.url}`);
        setProject(project.data)
      } catch (error) {
        console.log(error.message)
      } finally {
        setLoading(false);
      }
    })();
  }, [router])

  return (
    <DefaultLayout>
      <Head>
        <title>{`${project.title ? project.title + " | Rixusart" : "Rixusart"}`}</title>
        <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
        {typeof window !== "undefined" && (
          <meta
            name={`Rixusart ${project.title}(${location.origin + location.pathname}) Details`}
            content="Rixusart"
          />
        )}
        {typeof window !== "undefined" && (
          <meta
            name="description"
            content={`Rixusart ${project.title}(${location.origin + location.pathname
              }) Details with all gallery`}
          />
        )}
        <meta
          name="keywords"
          content="Rixusart, rixusart, Mural, Interior Architecture, Interior, Architecture,iç, mimari, iç mimari, dekorasyon, Art, Resim, Sanat, Dekoratif Boya, Yağlı Boya, Tablo, Emir Teke, Duvar Resmi, Duvar Ressamı, Soyut Resim, Proje, Proje Detayları, Project, Details, Instagram, Facebook, Pinterest, instagram, facebook, pinterest"
        />
        <meta name="robots" content="index, follow" />
        <meta name="revisit-after" content="7 days" />
        <meta name="author" content="Mustafa Osman Tekin" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>
      {
        loading ? (<ProjectDetailsSkeleton />) :
          project._id ? (
            show ? (
              <Slider
                setShow={(show) => setShow(show)}
                index={sliderIndex}
                project={project}
              />
            ) : <ProjectImages
              project={project}
              setSliderIndex={(index) => setSliderIndex(index)}
              setShow={(show) => setShow(show)}
            />
          ) : (
            <div className="container mx-auto my-3">Project not found.</div>
          )
      }
    </DefaultLayout>
  );
}
export default memo(ProjectDetails);