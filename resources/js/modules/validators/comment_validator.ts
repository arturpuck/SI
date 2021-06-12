import Comment from "@interfaces/Comment";

interface CommentValidationResult 
{
  success : boolean,
  message? : string
}

export default function validateComment(commentData: Comment): CommentValidationResult {

    try {

      if (!commentData.body) {
        throw new Error('comment_text_is_missing');
      }

      if (commentData.body.length > 1000) {
        throw new Error('comment_text_exceeds_1000_characters');
      }

      if (commentData.userNickname.length > 20) {
        throw new Error('nickname_exceeds_20_characters');
      }

    }
    catch (error) {
      return { success: false, message: error.message };
    }

    return { success: true };
  }