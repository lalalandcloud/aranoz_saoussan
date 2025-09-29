<?php

namespace Database\Seeders;

use App\Models\BlogImg;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\File;

class BlogImgSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $basePath = storage_path('app/public/blogs/images');
        $directories = File::directories($basePath);

        foreach ($directories as $directory) {
            $blogId = basename($directory);
            $images = File::files($directory);

            $blog_img = [
                'img' => isset($images[0]) ? 'blogs/images/' . $blogId . '/' . basename($images[0]->getFilename()) : null,
                'img2' => isset($images[1]) ? 'blogs/images/' . $blogId . '/' . basename($images[1]->getFilename()) : null,
                'blog_id' => $blogId,
            ];

            BlogImg::create($blog_img);
        }
    }
}