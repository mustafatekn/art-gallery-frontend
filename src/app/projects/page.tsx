import { apiRequest } from "@/utils/api/apiRequest"
import Project from "@/components/Project";
import { ProjectObject } from "@/app/types";
import { services } from "@/utils/api/apiUrls"

type Projects = Array<ProjectObject>

async function getProjects() {
  const config = {
    url: services.getPosts,
    headers: {
      'Cache-Control': 'no-store, max-age=0'
    }
  };

  const res = await apiRequest<Projects>(config);
  return res.data;
}

export const revalidate = 600;

const Projects = async () => {
  const projects: Projects = await getProjects();

  return (
    <div className="container flex flex-col mx-auto my-10">
      <h1 className="text-3xl mb-8">Projects</h1>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-20 gap-y-10">
        {projects.length > 0 ? projects.map((project: ProjectObject) => (
          <Project project={project} key={project._id} />
        )) : (
          <p>No project found</p>
        )}
      </div>
    </div>
  )
}

export default Projects