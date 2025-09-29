<?php

namespace Database\Seeders;

use App\Models\Blog;
use App\Models\BlogTag;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class BlogTagPivotSeeder extends Seeder
{
    public function run(): void{
        $blogTags = [
            ['blog_id' => 1, 'blog_tag_id' => 1],
            ['blog_id' => 11, 'blog_tag_id' => 4],
            ['blog_id' => 12, 'blog_tag_id' => 2],
            ['blog_id' => 6, 'blog_tag_id' => 3],
            ['blog_id' => 7, 'blog_tag_id' => 3],
            ['blog_id' => 7, 'blog_tag_id' => 9],
            ['blog_id' => 2, 'blog_tag_id' => 1],
            ['blog_id' => 2, 'blog_tag_id' => 10],
            ['blog_id' => 8, 'blog_tag_id' => 1],
            ['blog_id' => 8, 'blog_tag_id' => 8],
            ['blog_id' => 3, 'blog_tag_id' => 6],
            ['blog_id' => 9, 'blog_tag_id' => 4],
            ['blog_id' => 4, 'blog_tag_id' => 5],
            ['blog_id' => 10, 'blog_tag_id' => 4],
            ['blog_id' => 5, 'blog_tag_id' => 6]
        ];
        foreach ($blogTags as $bt) {
            $blog = Blog::find($bt['blog_id']);
            $blog->blogTag()->attach($bt['blog_tag_id']);
        }
    }
}