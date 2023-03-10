<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class SurveyAnswer extends Model
{
    use HasFactory;

    const CREATED_AT = null;
    const UPDATED_AT = null;

    protected $fillable = [
        'survey_id',
        'started_at',
        'finished_at',
    ];

    public function survey()
    {
        return $this->belongsTo(Survey::class);
    }
}