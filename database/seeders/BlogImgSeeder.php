<?php

namespace Database\Seeders;

use App\Models\Blog;
use App\Models\BlogImg;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\File;

class BlogImgSeeder extends Seeder
{
    public function run(): void
    {
        $blogs = Blog::all();

        foreach ($blogs as $blog) {
            $blogImagePath = storage_path('app/public/blogs/images/' . $blog->id);
            
            // Vérifier si le dossier existe
            if (File::exists($blogImagePath)) {
                $images = File::files($blogImagePath);
                
                // Prendre les 2 premières images
                BlogImg::create([
                    'blog_id' => $blog->id,
                    'img' => isset($images[0]) ? 'blogs/images/' . $blog->id . '/' . basename($images[0]->getFilename()) : null,
                    'img2' => isset($images[1]) ? 'blogs/images/' . $blog->id . '/' . basename($images[1]->getFilename()) : null,
                ]);
            }
        }
    }
}