import { pagesList } from './../data/pagesList';
export const swipeHandler = (history: any, location: any)  => {
    return (eventData: any) => {
        if(eventData.absX > 70){
            let pageIndex = pagesList.indexOf(location.pathname);
            if(eventData.dir === 'Right'){
                if(pageIndex > 0)
                    pageIndex--;
                else
                    pageIndex = pagesList.length - 1;
            }else{
                if(pageIndex < pagesList.length - 1)
                    pageIndex++;
                else
                    pageIndex = 0;
            }
            history.push(pagesList[pageIndex]);
        } 
    }
}