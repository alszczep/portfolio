export const clickHandler = (iconRef: React.RefObject<HTMLElement>, animations: boolean) => {
    if(animations && !iconRef.current?.classList.contains('skills__icon--active')){
        iconRef.current?.classList.add('skills__icon--active');
        setTimeout(() => {
            iconRef.current?.classList.remove('skills__icon--active');
        }, 500);
    }
}