<?php

namespace App\Repositories;
use App\PornstarComment;
use App\Http\Requests\Pornstars\AddPornstarCommentRequest;
use Symfony\Component\HttpFoundation\Response;


Class PornstarCommentsRepository extends BaseRepository{

    public const MODEL_NAME = PornstarComment::class;

    public function filterByPornstarId(int $pornstarID) : PornstarCommentsRepository{

        $this->query = $this->query->where('pornstar_id', $pornstarID);
        return $this;
    }

    public function orderByAddDate(string $direction = 'desc') : PornstarCommentsRepository{

        $this->query = $this->query->orderBy('created_at', $direction);
        return $this;
    }

    public function getTotalCommentsAndSelectByPage(int $pageNumber, int $perPage = 10): array{
        $totalComments = PornstarComment::count();
        $howManyToSkip = ($pageNumber - 1) * $perPage;
        $comments = $this->query
                         ->skip($howManyToSkip)
                         ->take($perPage)
                         ->get();

        return ['comments' => $comments, 'total_comments' => $totalComments];
    }

    public function storeComment(AddPornstarCommentRequest $request){

          $data = [
            'comment' => $request->get('comment_text'),
            'nickname' => $request->get('nickname'),
            'pornstar_id' => $request->get('pornstar_id'),
            'parent_comment_id' => $request->get('parent_comment_id')
          ];

          if(\Auth::check()){
              $data['user_id'] = \Auth::user()->id;
          }

          PornstarComment::create($data);

    }
}