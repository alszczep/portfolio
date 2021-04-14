export const imageHandler = (id: number, setProjectId: React.Dispatch<React.SetStateAction<number>>, currentImage: (HTMLImageElement | undefined), setCurrentImage: React.Dispatch<React.SetStateAction<HTMLImageElement | undefined>>) => {
    return (event: any) => {
        setProjectId(id);
        currentImage?.classList.remove('currentProject');
        event.target.classList.add('currentProject');
        setCurrentImage(event.target);
    } 
}