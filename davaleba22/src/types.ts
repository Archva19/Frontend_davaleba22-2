export interface SideMenuProps {
    menuVis:boolean,
    closeFun:() => void
}

interface NewsItem{
    id:number,
    image:string,
    title:string,
    game:string,
    date:string
}

export interface NewsItemProps{
    newsItem:NewsItem,
    type:string
}
