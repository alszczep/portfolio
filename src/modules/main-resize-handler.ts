const mainMargin = 15;

export const resizeHandler = () => {
    if(document.getElementsByTagName('main')[0]){
        let mainPageElement = document.getElementsByTagName('main')[0];
        if(mainPageElement.classList.contains('projectsPage') || mainPageElement.classList.contains('contactPage')){
            let rootHeight = document.getElementById('root')!.clientHeight;
            let rootWidth = document.getElementById('root')!.clientWidth;
            let navHeight = document.getElementsByClassName('navigation')[0].clientHeight;
            let footerHeight = document.getElementsByClassName('footer')[0].clientHeight;
            mainPageElement.style.height = `${rootHeight - navHeight - footerHeight - mainMargin * 2}px`;
            mainPageElement.style.margin = `${mainMargin}px`;
            mainPageElement.style.marginTop = `${navHeight - footerHeight + mainMargin}px`;
            mainPageElement.style.width = `${rootWidth - mainMargin * 2}px`;
        }
    }
};