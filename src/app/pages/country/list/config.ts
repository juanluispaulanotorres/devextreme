export interface ICountry {
    name: string,
    region: string,
    languages: string[],
    language: string
    population: number,
    flags?: IFlags,
    flag?: string
}

export interface IFlags {
    png: string,
    svg: string,
    alt?: string
}