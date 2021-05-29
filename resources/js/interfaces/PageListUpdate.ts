export default interface PageListUpdate<ContentType> {
    totalElements: number
    currentPage: number
    content: ContentType[]
}