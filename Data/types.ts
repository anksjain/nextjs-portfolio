export interface ISkill{
    Name:string
    Level:string
}

export interface IProject{
    name:string,
    description:string
    imageUrl:string
    github_url:string
    category:Category[]
    tag:string[]
}
export type Category="react" | "node" |"mongo" | "express"

export interface ITimeLineData{
    date:string,
    description:string[]
    title:string
    subDetail?:string
}