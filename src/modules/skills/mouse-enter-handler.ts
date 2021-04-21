export const mouseEnterHandler = (iconRef: React.RefObject<HTMLElement>, animations: boolean) => {
    if(animations && !iconRef.current?.classList.contains('skills__icon--zoom')){
        iconRef.current?.classList.add('skills__icon--zoom');
    }
}