use App\Models\ProductCategory;

class ProductsCatSeeder extends Seeder
{
    public function run(): void
    {
        $categories = [
            ['name' => 'Électronique'],
            ['name' => 'Vêtements'],
            ['name' => 'Maison & Jardin'],
            ['name' => 'Sport & Loisirs'],
            ['name' => 'Livres'],
        ];

        foreach ($categories as $cat) {
            ProductCategory::create($cat);
        }
    }
}