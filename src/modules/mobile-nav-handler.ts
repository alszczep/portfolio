export const mobileNavHandler = (navRef: React.RefObject<HTMLElement>, isNavOpen: boolean) => {
    if(navRef && navRef.current){
        if(isNavOpen) navRef.current.classList.add('active');
        else navRef.current.classList.remove('active');
    }
}