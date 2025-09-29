<?php

namespace Database\Seeders;

use App\Models\Blog;
use App\Models\BlogCat;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class BlogSeeder extends Seeder
{
    public function run(): void
    {
        $blogs = [
            [
                'titre' => 'Road trip en Toscane : itinéraire de 7 jours inoubliable',
                'article' => 'La Toscane offre un cadre idyllique pour un road trip mémorable. Entre vignobles à perte de vue, villages médiévaux perchés et villes d\'art exceptionnelles, suivez notre itinéraire détaillé de 7 jours. De Florence à Sienne, en passant par San Gimignano et les Cinque Terre, chaque étape vous révélera les trésors de cette région emblématique...',
                'blog_cat_id' => 1, // Destinations Europe
                'user_id' => 1
            ],
            [
                'titre' => 'Guide gastronomique du Japon : où manger à Tokyo',
                'article' => 'Tokyo est un véritable paradis pour les gourmets. Des stands de rue traditionnels aux restaurants étoilés, la capitale japonaise offre une expérience culinaire unique. Découvrez nos adresses incontournables, des meilleurs ramen aux sushis d\'exception, en passant par les izakayas authentiques du quartier de Shinjuku...',
                'blog_cat_id' => 2, // Destinations Asie
                'user_id' => 1
            ],
            [
                'titre' => 'Randonnée dans les Alpes : les 5 plus beaux sentiers',
                'article' => 'Les Alpes offrent des paysages à couper le souffle pour les amateurs de randonnée. Du Mont-Blanc au Cervin, découvrez notre sélection des 5 sentiers les plus spectaculaires. Conseils pratiques, niveau de difficulté et points de vue exceptionnels : tout ce qu\'il faut savoir pour préparer votre prochaine aventure alpine...',
                'blog_cat_id' => 1, // Destinations Europe
                'user_id' => 1
            ],
            [
                'titre' => 'New York en famille : 10 activités incontournables',
                'article' => 'Big Apple regorge d\'activités pour petits et grands. Central Park, musées interactifs, Broadway et bien plus encore : découvrez comment organiser un séjour parfait à New York avec des enfants. Nos conseils pratiques et bons plans pour des vacances familiales réussies dans la ville qui ne dort jamais...',
                'blog_cat_id' => 3, // Destinations Amérique
                'user_id' => 1
            ],
            [
                'titre' => 'Voyager avec un petit budget : 15 astuces infaillibles',
                'article' => 'Voyager ne doit pas nécessairement coûter une fortune. Découvrez nos 15 astuces éprouvées pour explorer le monde sans se ruiner. Du choix des destinations aux hébergements économiques, en passant par les transports et la nourriture, apprenez à optimiser votre budget voyage sans sacrifier la qualité de votre expérience...',
                'blog_cat_id' => 4, // Conseils Voyage
                'user_id' => 1
            ],
            [
                'titre' => 'Safari au Kenya : à la rencontre des Big Five',
                'article' => 'Le Kenya offre l\'une des expériences safari les plus authentiques d\'Afrique. Dans les réserves du Masai Mara et d\'Amboseli, partez à la découverte des Big Five dans leur habitat naturel. Guide complet pour organiser votre safari : meilleure période, lodges recommandés et conseils photo pour immortaliser ces moments magiques...',
                'blog_cat_id' => 4, // Conseils Voyage
                'user_id' => 1
            ],
            [
                'titre' => 'Les temples d\'Angkor : merveille du Cambodge',
                'article' => 'Angkor Wat et les temples d\'Angkor constituent l\'un des sites archéologiques les plus extraordinaires au monde. Plongez dans l\'histoire de l\'Empire khmer et découvrez nos conseils pour visiter ce joyau du Cambodge. Itinéraires optimisés, meilleurs moments pour les photos et temples secrets à ne pas manquer...',
                'blog_cat_id' => 2, // Destinations Asie
                'user_id' => 1
            ],
            [
                'titre' => 'Lune de miel en Grèce : les îles les plus romantiques',
                'article' => 'La Grèce et ses îles offrent un cadre idyllique pour une lune de miel. De Santorin aux couchers de soleil légendaires à Mykonos la festive, en passant par Naxos la secrète, découvrez notre sélection des destinations les plus romantiques de l\'archipel grec. Hôtels de charme, restaurants avec vue et plages privées...',
                'blog_cat_id' => 1, // Destinations Europe
                'user_id' => 1
            ],
            [
                'titre' => 'Aventure en Patagonie : trek du W à Torres del Paine',
                'article' => 'Le parc Torres del Paine en Patagonie chilienne offre l\'un des treks les plus spectaculaires au monde. Le circuit du W vous mènera à travers des paysages grandioses : glaciers, lacs turquoise et pics rocheux vertigineux. Guide complet pour préparer cette aventure de 4-5 jours avec équipement, refuges et conseils de sécurité...',
                'blog_cat_id' => 3, // Destinations Amérique
                'user_id' => 1
            ],
            [
                'titre' => 'Les plus beaux hôtels avec vue sur mer en Méditerranée',
                'article' => 'La Méditerranée abrite certains des plus beaux hôtels au monde. De la Côte d\'Azur aux îles grecques, découvrez notre sélection d\'établissements d\'exception offrant des vues imprenables sur la Grande Bleue. Suites avec terrasse privée, spas face à la mer et restaurants gastronomiques : l\'art de vivre méditerranéen à son apogée...',
                'blog_cat_id' => 5, // Hébergement & Restaurants
                'user_id' => 1
            ],
            [
                'titre' => 'Street food asiatique : tour du monde des saveurs de rue',
                'article' => 'L\'Asie offre une incroyable diversité de street food. Des pad thaï de Bangkok aux xiaolongbao de Shanghai, en passant par les takoyaki d\'Osaka, embarquez pour un voyage culinaire à travers les marchés et stands de rue les plus réputés d\'Asie. Adresses incontournables et conseils pour goûter en toute sécurité...',
                'blog_cat_id' => 2, // Destinations Asie
                'user_id' => 1
            ],
            [
                'titre' => 'Road trip sur la côte ouest américaine : de LA à San Francisco',
                'article' => 'La Highway 1 offre l\'un des plus beaux road trips au monde. De Los Angeles à San Francisco, longez le Pacifique sur plus de 600 km à travers des paysages époustouflants. Big Sur, Monterey, Carmel : découvrez notre itinéraire détaillé avec les plus beaux arrêts et points de vue de la côte californienne...',
                'blog_cat_id' => 3, // Destinations Amérique
                'user_id' => 1
            ],
        ];

        foreach ($blogs as $blog) {
            Blog::create([
                'titre' => $blog['titre'],
                'article' => $blog['article'],
                'blog_cat_id' => $blog['blog_cat_id'],
                'user_id' => $blog['user_id'],
                'created_at' => now(),
                'updated_at' => now(),
            ]);
        }
    }}