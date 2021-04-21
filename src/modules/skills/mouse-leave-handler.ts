export const mouseLeaveHandler = (iconRef: React.RefObject<HTMLElement>) => {
    iconRef.current?.classList.remove('skills__icon--zoom');
}