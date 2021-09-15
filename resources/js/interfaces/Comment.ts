export default interface Comment {
    userNickname: string
    body: string
    avatarFilePath?: string
    addedAgo?: string
    addedByAuthenticatedUser: boolean
}