<?php

namespace App\Http\Resources;
use App\Helpers\FileManager;

use Illuminate\Http\Resources\Json\JsonResource;

use Illuminate\Support\Facades\DB;

class PodcastResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return array
     */
    
    public function toArray($request)
    {
        $episodes = $this->episodes()
            ->with(['podcast'])
            ->withCount(['likes'])
            ->orderBy('created_at', 'desc')
            ->get();

        $playCounts = collect();

        if ($episodes->isNotEmpty()) {
            $episodeIds = $episodes->pluck('id')
                ->map(function ($id) {
                    return (string) $id;
                })
                ->all();

            $playCounts = DB::table('plays')
                ->select('content_id', DB::raw('COUNT(*) as plays_count'))
                ->where('content_type', 'episode')
                ->whereIn('content_id', $episodeIds)
                ->groupBy('content_id')
                ->pluck('plays_count', 'content_id');
        }

        foreach ($episodes as $episode) {
            $episode->setAttribute(
                'plays_count',
                (int) ($playCounts[(string) $episode->id] ?? 0)
            );
        }

        return [
            'type' => 'podcast',
            'origin' => 'local',
            'id' => $this->id,
            'title' => $this->title,
            'description' => $this->description,
            'episodes' => EpisodeResource::collection($episodes),
            'genres' => $this->genres,
            'nb_followers' => $this->follows->count(),
            'cover' => FileManager::asset_path($this->cover),
            'spotify_link' => $this->spotify_link,
            'youtube_link' => $this->youtube_link,
            'soundcloud_link' => $this->soundcloud_link,
            'itunes_link' => $this->itunes_link,
            'deezer_link' => $this->deezer_link,

            $this->mergeWhen(\Auth::user() && \Auth::user()->isAdmin(), [
                'user' => new UserResource($this->user),
                'created_at' => $this->created_at,
                'updated_at' => $this->updated_at,
            ]),

            $this->mergeWhen($this->artist_id, [
                'artist' => $this->artist(),
            ]),
        ];
    }

}
