<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\JsonResource;

class PageResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return array
     */
    public function toArray($request)
    {
        return [
            'id' => $this->id,
            'title' => $this->title,
            'name' => $this->name,
            'isEditable' => $this->isEditable,
            'showLinkOnTheRightSidebar' => $this->showLinkOnTheRightSidebar,
            'content' => $this->content,
            'blank' => $this->blank,
            'icon' => $this->icon,
            'description' => $this->description,
            'path' => $this->path,
            'sections' => SectionResource::collection($this->sections()->orderBy('rank')->get()),
        ];
    }
}
