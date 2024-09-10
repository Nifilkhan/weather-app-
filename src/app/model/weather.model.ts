export interface weatherModel {
    name:string,
    main: {
        temp:number
        humidity:number
    },
    wind: {
        speed:number
    }
}
