export type ServiceType = {
    image: string,
    heading: {
        label: string,
        path: string,
    },
    points: Array<{
        label: string,
        path?: string,
    }>
}