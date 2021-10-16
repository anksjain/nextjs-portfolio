export interface ISkill{
    Name:string
    Level:string
}

export interface IProject{
    name:string,
    description:string
    imageUrl:string
    github_url:string
    app_url?:string
    tag:string[]
}

export interface ITimeLineData{
    date:string,
    description:string[]
    title:string
    subDetail?:string
}