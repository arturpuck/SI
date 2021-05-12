export default interface Comment {
    id: number
    userNickname: string
    body: string
    avatarFilePath: string
    addedAgo: string
    addedByAuthenticatedUser?: boolean
}