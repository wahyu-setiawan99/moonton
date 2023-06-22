<?php

namespace Database\Seeders;

use App\Models\Movie;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class MovieTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run()
    {
        $movies = [
            [
                'name' => 'The shawhank Redempt',
                'slug' => 'shawhank-redemption',
                'category' => 'Drama',
                'video_url' => 'https://www.youtube.com/watch?v=07azA_XZ7sU',
                'thumbnail' => 'https://www.allkpop.com/upload/2022/06/content/141401/web_data/allkpop_1655230193_untitled-1.jpg',
                'rating' => 4.0,
                'is_featured' => 1,
            ],
            [
                'name' => 'The Amazing Spiderman',
                'slug' => 'amazing-spiderman',
                'category' => 'Action',
                'video_url' => 'https://www.youtube.com/watch?v=-n-HmxBDH7M',
                'thumbnail' => 'https://i.pinimg.com/originals/56/cf/e8/56cfe88389afbda161805cb41b787ca3.jpg',
                'rating' => 4.5,
                'is_featured' => 0,
            ],
            [
                'name' => 'Badut Tolol',
                'slug' => 'badut-tolol',
                'category' => 'Thriller',
                'video_url' => 'https://www.youtube.com/watch?v=fCsziW9W6sk&list=RDfCsziW9W6sk&start_radio=1',
                'thumbnail' => 'https://e1.pxfuel.com/desktop-wallpaper/948/452/desktop-wallpaper-beautiful-scenery-group-with-60-items-nice-scenery.jpg',
                'rating' => 4.5,
                'is_featured' => 0,
            ],
        ];

        Movie::insert($movies);
    }
}
