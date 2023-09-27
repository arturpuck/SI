<?php

namespace App\CustomQueryBuilders\Prostitution;

use Illuminate\Support\Facades\Auth;
use Illuminate\Database\Eloquent\Builder;

final class ProstitutionAnnouncementPhotoTokenQueryBuilder extends Builder
{
    public function assignToCurrentUser(string $token): void
    {
        $this->updateOrCreate(['user_id' => Auth::user()->id, 'token' => $token]);
    }

    public function removeFromCurrentUser(): void
    {
        $this->where('user_id', Auth::user()->id)->delete();
    }

    public function getForCurrentUser() : ?string
    {
        return $this->where('user_id', Auth::user()->id)->get()?->first()?->token;
    }
}