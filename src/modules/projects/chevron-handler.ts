import { ProjectInterface } from '../../interfaces/ProjectInterface';

export const chevronHandler = (direction: string, setProjectsList: React.Dispatch<React.SetStateAction<ProjectInterface[]>>, projectsList: ProjectInterface[], projectsCount: number) => {
    let newProjectsList;
    switch(direction){
        case 'left':
            newProjectsList = projectsList.map((item: any, index: number) => {
                if(index < projectsCount - 1)
                    return item;
                return null;
            });
            newProjectsList.unshift(projectsList[projectsCount - 1])
            setProjectsList(newProjectsList.slice(0, projectsCount));
            break;
        case 'right':
            newProjectsList = projectsList.map((item: any, index: number) => {
                if(index > 0)
                    return item;
                return null;
            });
            newProjectsList.push(projectsList[0])
            setProjectsList(newProjectsList.slice(1, projectsCount + 1));
            break;
    }
}