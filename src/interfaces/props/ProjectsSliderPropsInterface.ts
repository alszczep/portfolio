import { ProjectInterface } from "../ProjectInterface";

export interface ProjectsSliderPropsInterface {
    setProjectId: React.Dispatch<React.SetStateAction<number>>;
    projectsList: ProjectInterface[];
    setProjectsList: React.Dispatch<React.SetStateAction<ProjectInterface[]>>;
    projectsCount: number;
}