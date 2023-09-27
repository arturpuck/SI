import Comment from "@interfaces/Comment";

interface CommentValidationResult 
{
  success : boolean,
  message? : string
}

export default function validateComment(commentData: Comment): CommentValidationResult {

    try {
      const nicknameLength = commentData.userNickname.length;

      if (!commentData.body) {
        throw new Error('comment_text_is_missing');
      }

      if (commentData.body.length > 1000) {
        throw new Error('comment_text_exceeds_1000_characters');
      }

      if(!commentData.addedByAuthenticatedUser){
        if ((nicknameLength > 20) || (nicknameLength < 3)) {
          throw new Error('the_nickname_must_be_between_2_and_20_characters');
        }
      }

    }
    catch (error) {
      return { success: false, message: error.message };
    }

    return { success: true };
  }