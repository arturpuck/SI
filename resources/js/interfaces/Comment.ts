export default interface Comment {
    id? : number,
    parentCommentID? : number,
    userNickname: string
    body: string
    avatarFilePath?: string
    addedAgo?: string
    createdAt? : string,
    addedByAuthenticatedUser: boolean
}