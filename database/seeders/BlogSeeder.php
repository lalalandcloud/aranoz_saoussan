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
                'article' => 'La Toscane offre un cadre idyllique pour un road trip mémorable. Entre vignobles à perte de vue, villages médiévaux perchés et villes d\'art exceptionnelles, suivez notre itinéraire détaillé de 7 jours.

                    Jour 1-2 : Florence, le berceau de la Renaissance
                    Commencez votre aventure à Florence, capitale de la Toscane. Prenez le temps d\'explorer la cathédrale Santa Maria del Fiore et son célèbre dôme conçu par Brunelleschi. Flânez sur le Ponte Vecchio au coucher du soleil, visitez la Galerie des Offices pour admirer les chefs-d\'œuvre de Botticelli et Michel-Ange. Ne manquez pas le marché central de San Lorenzo pour goûter aux spécialités locales : ribollita, pappa al pomodoro et bistecca alla fiorentina.

                    Jour 3 : San Gimignano et ses tours médiévales
                    Prenez la route vers San Gimignano, surnommée "la Manhattan du Moyen Âge" pour ses 14 tours médiévales. Perdez-vous dans ses ruelles pavées, dégustez le célèbre vin blanc Vernaccia, et savourez la meilleure glace du monde chez Gelateria Dondoli, double champion du monde. La vue depuis la Rocca di Montestaffoli au coucher du soleil est absolument époustouflante.

                    Jour 4-5 : Sienne et le Val d\'Orcia
                    Direction Sienne avec sa magnifique Piazza del Campo en forme de coquillage, théâtre du célèbre Palio. Visitez le Duomo aux façades de marbre noir et blanc. Puis explorez le Val d\'Orcia, paysage classé UNESCO : Pienza, la cité idéale de la Renaissance, Montalcino et son Brunello réputé, et Montepulciano perché sur sa colline. Séjournez dans un agriturismo pour une expérience authentique.

                    Jour 6-7 : Les Cinque Terre, joyaux de la Riviera
                    Terminez en beauté aux Cinque Terre. Ces cinq villages colorés accrochés aux falaises offrent des panoramas à couper le souffle. Randonnez sur le sentier de l\'Azzurro entre Monterosso et Vernazza, dégustez le pesto local et les anchois de Monterosso. Baignez-vous dans les eaux cristallines et admirez le coucher de soleil depuis Manarola.

                    Conseils pratiques : Louez une voiture compacte, réservez vos hébergements à l\'avance en haute saison, et prévoyez de bonnes chaussures de marche. La meilleure période est mai-juin ou septembre-octobre pour éviter la foule estivale.',
                'blog_cat_id' => 1, // Destinations Europe
                'user_id' => 1
            ],
            [
                'titre' => 'Guide gastronomique du Japon : où manger à Tokyo',
                'article' => 'Tokyo est un véritable paradis pour les gourmets. Des stands de rue traditionnels aux restaurants étoilés, la capitale japonaise offre une expérience culinaire unique.

Les ramen : une institution tokyoïte
Commencez votre exploration culinaire par les ramen. À Shibuya, Ichiran propose une expérience unique dans des boxes individuels pour se concentrer sur les saveurs. À Shinjuku, ne manquez pas Fuunji pour leurs tsukemen (nouilles à tremper). Chaque boutique a sa spécialité : tonkotsu crémeux, shoyu léger ou miso corsé.

Sushi et poissons d\'exception
Le marché de Tsukiji (déplacé à Toyosu) reste le temple du poisson frais. Visitez-le tôt le matin et dégustez des sushi au comptoir dans les restaurants environnants. Pour une expérience mémorable, réservez chez Sukiyabashi Jiro (3 étoiles Michelin) ou Sushi Saito. Budget plus serré ? Les kaiten-zushi (sushi tournants) comme Sushiro offrent une qualité surprenante.

Izakayas et vie nocturne culinaire
Les izakayas sont les bistrots japonais où se retrouver entre amis. À Shinjuku, le quartier de Golden Gai abrite des dizaines de minuscules bars. Commandez des yakitori (brochettes), edamame, et gyoza en accompagnement de saké ou bière. L\'ambiance conviviale et les prix doux en font une expérience authentique.

Street food et spécialités locales
Ne manquez pas les takoyaki (boulettes de poulpe), okonomiyaki (crêpe salée), et taiyaki (gâteau en forme de poisson) dans les stands de rue. Le quartier d\'Asakusa près du temple Senso-ji offre une concentration de stands traditionnels. Pour le petit-déjeuner, testez le tamago kake gohan (riz à l\'œuf cru) dans un café local.

Conseils pratiques : Prévoyez 3000-5000 yens par repas pour un bon restaurant, 1000-2000 pour du street food. Réservez les restaurants étoilés 2-3 mois à l\'avance. Téléchargez Google Translate pour les menus en japonais.',

                'blog_cat_id' => 2, // Destinations Asie
                'user_id' => 1
            ],
            [
                'titre' => 'Randonnée dans les Alpes : les 5 plus beaux sentiers',
                'article' => 'Les Alpes offrent des paysages à couper le souffle pour les amateurs de randonnée. Du Mont-Blanc au Cervin, découvrez notre sélection des 5 sentiers les plus spectaculaires.

1. Le Tour du Mont-Blanc (TMB)
170 km à travers la France, l\'Italie et la Suisse en 10-12 jours. Ce trek mythique vous mène au pied du toit de l\'Europe avec des vues spectaculaires sur les glaciers. Niveau intermédiaire, dénivelé positif total de 10 000m. Meilleure période : juin à septembre. Hébergement en refuges ou hôtels de montagne.

2. Le Cervin - Hörnliweg
L\'approche du Cervin depuis Zermatt est un incontournable. La randonnée jusqu\'au refuge Hörnli (3260m) offre une vue imprenable sur cette pyramide parfaite. 6h de montée, niveau difficile. Départ depuis Schwarzsee, accessible en téléphérique depuis Zermatt.

3. Les Cinque Torri et le Tre Cime di Lavaredo
Dans les Dolomites italiennes, ce parcours vous fait découvrir les formations rocheuses les plus photographiées des Alpes. Boucle de 10km, 4-5h de marche, niveau moyen. Le lever de soleil depuis le refuge Auronzo est magique. Accessible de juin à octobre.

4. Le Sentier des Bouquetins - Vanoise
Dans le Parc National de la Vanoise, ce sentier permet d\'observer bouquetins et marmottes. De Pralognan-la-Vanoise au refuge de la Valette, 4h de montée. Vue sur la Grande Casse (3855m). Niveau modéré, idéal pour les familles sportives.

5. L\'Oberland bernois - Schynige Platte à First
En Suisse, cette traversée panoramique de 15km offre une vue sur l\'Eiger, le Mönch et la Jungfrau. Départ depuis Schynige Platte (accessible en train à crémaillère), arrivée à First. 6h de marche, niveau moyen. Prairies alpines fleuries en juin-juillet.

Équipement essentiel : Chaussures de randonnée montantes, bâtons, vêtements en couches, protection solaire. Vérifiez la météo et les conditions d\'enneigement avant de partir. Les refuges se réservent souvent plusieurs mois à l\'avance en haute saison.',

                'blog_cat_id' => 1, // Destinations Europe
                'user_id' => 1
            ],
            [
                'titre' => 'New York en famille : 10 activités incontournables',
                'article' => 'New York regorge d\'activités pour petits et grands. Central Park, musées interactifs, Broadway et bien plus encore : découvrez comment organiser un séjour parfait avec des enfants.

Central Park : le poumon vert de Manhattan
Louez des vélos pour explorer le parc en famille. Ne manquez pas le zoo de Central Park, le lac où faire du bateau, et l\'aire de jeux Ancient Playground près du Met. En été, assistez à un spectacle gratuit au Delacorte Theater. Pique-niquez sur Sheep Meadow avec vue sur les gratte-ciels.

Musées adaptés aux enfants
L\'American Museum of Natural History fascine avec ses dinosaures et la salle de l\'espace. Le Children\'s Museum of Manhattan (CMOM) propose des expositions interactives pour les 0-7 ans. L\'Intrepid Sea, Air & Space Museum sur un porte-avions historique plaira aux passionnés d\'aviation. Réservez en ligne pour éviter les files.

Broadway avec des enfants
Le Roi Lion, Aladdin ou Frozen sont parfaits pour les familles. Réservez des matinées du mercredi ou week-end, moins chères. Pour les petits budgets, tentez la loterie des billets à prix réduit sur les sites officiels des spectacles, 2-3h avant la représentation.

Attractions emblématiques family-friendly
Montez à l\'Empire State Building (évitez 11h-15h), visitez la Statue de la Liberté (réservez la couronne 3-4 mois à l\'avance), traversez le Brooklyn Bridge à pied. Times Square émerveille les enfants, surtout à la tombée de la nuit. Le High Line, parc suspendu, offre une promenade originale.

Où manger avec des enfants
Ellen\'s Stardust Diner : serveurs qui chantent du Broadway. Shake Shack pour les meilleurs burgers. Grimaldi\'s à Brooklyn pour la pizza. Les food courts comme Chelsea Market offrent du choix pour tous les goûts. Les épiceries Whole Foods ont des espaces repas pratiques.

Conseils pratiques : Achetez le New York CityPASS pour économiser sur les entrées. Le métro accepte les poussettes pliantes. Prévoyez des pauses : New York fatigue ! Téléchargez l\'app MTA pour naviguer dans le métro. Logez à Midtown pour être au centre de tout.',

                'blog_cat_id' => 3, // Destinations Amérique
                'user_id' => 1
            ],
            [
                'titre' => 'Voyager avec un petit budget : 15 astuces infaillibles',
                'article' => 'Voyager ne doit pas nécessairement coûter une fortune. Découvrez nos 15 astuces éprouvées pour explorer le monde sans se ruiner.

Choisir les bonnes destinations
Privilégiez les pays où le coût de la vie est bas : Asie du Sud-Est (Thaïlande, Vietnam), Europe de l\'Est (Pologne, Roumanie), Amérique du Sud (Bolivie, Pérou). Évitez les destinations tendance surpeuplées. Un mois en Thaïlande coûte moins cher qu\'une semaine en Norvège.

Réserver au bon moment
Pour les vols, réservez 2-3 mois à l\'avance pour l\'Europe, 3-6 mois pour les long-courriers. Utilisez Skyscanner, Google Flights et activez les alertes prix. Soyez flexible sur les dates : partir un mardi plutôt qu\'un vendredi peut diviser le prix par deux. Les vols de nuit sont souvent moins chers.

Hébergements économiques malins
Les auberges de jeunesse ne sont pas que pour les jeunes : chambres privées disponibles. Couchsurfing pour dormir gratuitement chez l\'habitant. Workaway ou Worldpackers : logement et repas contre quelques heures de bénévolat. Airbnb : négociez pour les longs séjours (réductions hebdomadaires).

Transports locaux intelligents
Bus longue distance plutôt que train (FlixBus en Europe). Covoiturage via BlaBlaCar. Location de scooter en Asie (8-10€/jour). Marche à pied dans les villes. Apps de transport local (Grab en Asie, Uber). Évitez les taxis touristiques.

Manger comme un local
Mangez dans les marchés locaux et street food. Faites vos courses en supermarché et cuisinez (si auberge avec cuisine). Menu du jour le midi plutôt que le soir. Evitez les zones ultra-touristiques. Demandez aux locaux leurs bonnes adresses. Une bouteille d\'eau réutilisable économise des centaines d\'euros.

Activités gratuites ou pas chères
Free walking tours (pourboire à discrétion). Musées gratuits certains jours. Randonnées et nature (gratuites). Plages publiques. Marchés locaux pour l\'ambiance. Couchers de soleil (le meilleur spectacle gratuit).

Autres astuces
Carte SIM locale plutôt que roaming (5-20€ vs 50-100€). Voyagez léger pour éviter les frais bagages. Réservez directement sur les sites officiels. Cartes bancaires sans frais à l\'étranger (Revolut, N26). Négociez dans les marchés. Buvez l\'eau du robinet (si potable) avec une gourde filtrante.',

                'blog_cat_id' => 4, // Conseils Voyage
                'user_id' => 1
            ],
            [
                'titre' => 'Safari au Kenya : à la rencontre des Big Five',
                'article' => 'Le Kenya offre l\'une des expériences safari les plus authentiques d\'Afrique. Dans les réserves du Masai Mara et d\'Amboseli, partez à la découverte des Big Five dans leur habitat naturel.

Masai Mara : le royaume de la faune
La réserve nationale du Masai Mara est célèbre pour sa densité exceptionnelle de lions, léopards, guépards, éléphants et buffles. De juillet à octobre, assistez à la Grande Migration : 2 millions de gnous et zèbres traversent la rivière Mara, sous le regard des crocodiles. Spectacle saisissant et unique au monde.

Amboseli : éléphants et Kilimandjaro
Le parc national d\'Amboseli offre les meilleures vues sur le Kilimandjaro depuis le Kenya. Observez les troupeaux d\'éléphants se déplacer devant la montagne enneigée, particulièrement magique au lever du soleil. Les marais attirent hippopotames et pélicans. Plus petit que Masai Mara, il se visite en 2-3 jours.

Meilleure période pour votre safari
Saison sèche (juin-octobre) : animaux concentrés autour des points d\'eau, visibilité optimale, Grande Migration. Haute saison touristique et prix élevés. Saison des pluies courtes (novembre-décembre) : paysages verdoyants, moins de touristes, naissances des animaux. Saison des pluies longues (mars-mai) : prix bas mais pistes difficiles.

Types de lodges et camps
Camps de luxe : tentes spacieuses avec salle de bain privée, cuisine gastronomique, game drives privés (300-800$/nuit). Lodges mid-range : confort correct, game drives partagés (150-300$/nuit). Camps budget : tentes basiques, sanitaires partagés, ambiance conviviale (50-100$/nuit). Réservez 6-9 mois à l\'avance pour juillet-octobre.

Organisation des game drives
Deux safaris par jour : lever du soleil (6h-9h) et fin d\'après-midi (16h-19h), moments de plus forte activité animale. Safaris en véhicule 4x4 avec toit ouvrant pour la photo. Rangers expérimentés communiquent par radio pour repérer les animaux. Prévoir jumelles et téléobjectif (minimum 200mm).

Conseils photo pour immortaliser votre safari
Équipement : téléobjectif 200-400mm, trépied ou bean bag pour stabiliser. Réglez vitesse élevée (1/500s minimum) pour figer le mouvement. Shootez en rafale. Lumière dorée du matin et du soir idéale. Photographiez à hauteur d\'animal. Mode priorité vitesse recommandé. Prévoyez batteries et cartes mémoire en quantité.

Préparation du voyage
Vaccin fièvre jaune obligatoire. Traitement antipaludéen recommandé. Vêtements neutres (beige, kaki, vert olive). Chapeau, lunettes de soleil, crème solaire. Lampe frontale. Vol international vers Nairobi, puis vol intérieur ou transfert terrestre vers les parcs (4-6h de route). Budget total : 2500-5000€ par personne pour 7-10 jours tout compris.',

                'blog_cat_id' => 4, // Conseils Voyage
                'user_id' => 1
            ],
            [
                'titre' => 'Les temples d\'Angkor : merveille du Cambodge',
                'article' => 'Angkor Wat et les temples d\'Angkor constituent l\'un des sites archéologiques les plus extraordinaires au monde. Plongez dans l\'histoire de l\'Empire khmer et découvrez nos conseils pour visiter ce joyau du Cambodge.

Angkor Wat : le temple emblématique
Chef-d\'œuvre de l\'architecture khmère construit au XIIe siècle, Angkor Wat est le plus grand édifice religieux au monde. Arrivez avant l\'aube pour le lever de soleil mythique, reflété dans les bassins. Explorez les galeries ornées de bas-reliefs représentant des scènes du Ramayana et du Mahabharata. Montez au troisième niveau pour une vue panoramique (tenue correcte exigée : épaules et genoux couverts).

Angkor Thom et le Bayon
La cité fortifiée d\'Angkor Thom abrite le temple du Bayon, célèbre pour ses 54 tours ornées de 216 visages souriants. L\'atmosphère y est mystérieuse et envoûtante. Visitez également la Terrasse des Éléphants et la Terrasse du Roi Lépreux. Prévoyez 2-3h pour explorer l\'ensemble.

Ta Prohm : le temple dans la jungle
Rendu célèbre par Tomb Raider, Ta Prohm est envahi par les racines géantes de fromagers et ficus. Volontairement laissé à l\'état de ruine, il offre une atmosphère unique. Visitez tôt le matin ou tard l\'après-midi pour éviter la foule et profiter de la lumière magique filtrant à travers les arbres.

Temples secrets et hors sentiers battus
Banteay Srei : bijou d\'architecture en grès rose, finement sculpté, à 25km au nord. Beng Mealea : temple englouti par la jungle, authentique et peu fréquenté. Koh Ker : ancienne capitale avec sa pyramide de 7 étages. Preah Khan : vaste complexe monastique paisible. Ces sites nécessitent un tuk-tuk ou une voiture privée.

Itinéraires optimisés pour visiter Angkor
Circuit court (1 jour) : Angkor Wat, Angkor Thom/Bayon, Ta Prohm. Circuit long (1 jour) : Preah Khan, Neak Pean, Ta Som, Pre Rup. Circuit complet (3 jours) : ajoutez Banteay Srei, Banteay Samre, temples éloignés. Louez un tuk-tuk (15-20$/jour) ou vélo électrique (10-15$/jour).

Meilleurs moments pour photographier
Lever de soleil à Angkor Wat (5h30-6h30) : reflets dans les bassins, lumière dorée. Lumière douce du matin à Ta Prohm (7h-9h) : rayons traversant la canopée. Fin d\'après-midi à Pre Rup (16h30-18h) : coucher de soleil depuis le sommet. Évitez 11h-15h : lumière dure et foule maximale.

Informations pratiques essentielles
Pass 1 jour (37$), 3 jours (62$), 7 jours (72$). Basé à Siem Reap, à 6km des temples. Meilleure saison : novembre-mars (sec et frais), évitez avril-mai (canicule 40°C). Prévoyez eau, chapeau, crème solaire. Respectez les sites sacrés : tenue décente, ne montez pas sur les structures fragiles. Budget hébergement : 10-150$/nuit selon standing.',

                'blog_cat_id' => 2, // Destinations Asie
                'user_id' => 1
            ],
            [
                'titre' => 'Lune de miel en Grèce : les îles les plus romantiques',
                'article' => 'La Grèce et ses îles offrent un cadre idyllique pour une lune de miel. De Santorin aux couchers de soleil légendaires à Mykonos la festive, en passant par Naxos la secrète, découvrez notre sélection des destinations les plus romantiques.

Santorin : l\'île des amoureux par excellence
Perchée sur sa caldeira, Santorin offre des couchers de soleil parmi les plus beaux au monde depuis Oia. Séjournez dans une suite troglodyte avec jacuzzi privé et vue sur la mer Égée. Dînez dans des restaurants perchés comme Ambrosia ou Lycabettus. Visitez le village de Pyrgos, moins touristique. Croisière en catamaran au coucher du soleil. Plage de sable rouge et noir pour des photos uniques.

Mykonos : glamour et romantisme
Mykonos allie luxe, plages paradisiaques et vie nocturne animée. Promenez-vous main dans la main dans les ruelles blanches de Chora. Dînez face aux moulins au restaurant Niko\'s Taverna. Journée détente à Psarou Beach ou Ornos Beach. Coucher de soleil à Little Venice. Pour plus d\'intimité, optez pour les hôtels boutique à Ano Mera.

Naxos : l\'île secrète et authentique
Plus grande et moins touristique que ses voisines, Naxos offre authenticité et tranquillité. Villages montagnards traditionnels d\'Apiranthos et Filoti. Plages de sable fin quasi-désertes (Plaka Beach, Agia Anna). Temple d\'Apollon face au coucher de soleil. Cuisine locale dans les tavernes familiales. Prix plus doux qu\'à Santorin ou Mykonos.

Crète : diversité et romantisme
L\'île aux mille visages combine plages de rêve, sites archéologiques et montagnes. Côte ouest (Chania, Balos Beach) : lagons turquoise. Centre (Héraklion, Knossos) : histoire minoenne. Est (Agios Nikolaos, Elounda) : resorts de luxe. Le village d\'Arolithos propose des dîners crétois traditionnels sous les étoiles.

Paros et Antiparos : charme cycladique
Villages blancs et bleus pittoresques (Naoussa, Parikia). Atmosphère décontractée et romantique. Plages préservées (Kolymbithres avec ses rochers sculptés). Antiparos : île voisine encore plus paisible, accessible en 10 min de ferry. Idéal pour combiner avec d\'autres îles.

Hôtels de charme recommandés
Santorin : Katikies Santorini (infinity pools à flanc de falaise), Grace Hotel (design épuré). Mykonos : Cavo Tagoo (luxe moderne), Belvedere Hotel (vue panoramique). Naxos : Nissaki Beach Hotel (pieds dans l\'eau). Prix : 300-1500€/nuit selon standing et saison.

Restaurants romantiques avec vue
Santorin : Lauda (cuisine fusion), Ambrosia (gastronomique). Mykonos : Interni (cour romantique), Spilia (dans une grotte). Naxos : Maro\'s Tavern (poisson frais), Axiotissa (traditionnel en montagne). Réservez au coucher du soleil.

Conseils pour votre lune de miel
Meilleure période : mai-juin ou septembre-octobre (évitez juillet-août, trop chaud et bondé). Combinez 2-3 îles pour varier les plaisirs (ferries fréquents). Réservez hôtels et restaurants 2-3 mois à l\'avance. Prévoyez une journée détente entre les visites. Budget réaliste : 3000-6000€ pour 10 jours tout compris (hors vol international).',

                'blog_cat_id' => 1, // Destinations Europe
                'user_id' => 1
            ],
            [
                'titre' => 'Aventure en Patagonie : trek du W à Torres del Paine',
                'article' => 'Le parc Torres del Paine en Patagonie chilienne offre l\'un des treks les plus spectaculaires au monde. Le circuit du W vous mènera à travers des paysages grandioses : glaciers, lacs turquoise et pics rocheux vertigineux.

Le circuit du W : itinéraire jour par jour
Jour 1 : Départ de Paine Grande, randonnée vers le glacier Grey (11km, 3h30). Campez face au glacier avec vue sur les icebergs bleutés. Jour 2 : Montée au mirador Frances (5h de marche). Vue sur la vallée suspendue et les pics des Torres. Nuit au camping Italiano ou Los Cuernos. Jour 3 : Vers le camping Central, point de départ pour les Torres (8h aller-retour). Réveil à 4h pour le lever du soleil mythique. Jour 4 : Descente et retour.

Variante du circuit complet O
Pour les plus aventureux, le circuit O (110km, 8-10 jours) fait le tour complet du massif. Section arrière moins fréquentée, traversée de la pampa patagonne, vues panoramiques à 360°. Nécessite portage complet et excellente condition physique.

Quand partir en Patagonie
Haute saison (décembre-février) : températures clémentes (10-18°C), jours longs (18h de lumière), mais refuges bondés. Réservation obligatoire 6-9 mois à l\'avance. Intersaison (octobre-novembre, mars) : moins de monde, prix plus doux, météo variable. Hiver (avril-septembre) : refuges fermés, températures négatives, réservé aux experts.

Système de refuges et camping
Refuges privés (Vertice, Fantastico Sur) : dortoirs, repas inclus, douches chaudes (130-180$/nuit). Refuges CONAF : plus basiques et économiques (35-50$/nuit). Campings : emplacements avec sanitaires (30$/nuit). Camping sauvage interdit pour protéger l\'environnement fragile. Réservez sur les sites officiels 4-6 mois avant.

Équipement indispensable pour le trek
Sac à dos 50-65L, sac de couchage -5°C minimum, matelas isolant. Vêtements en couches : sous-vêtements techniques, polaire, doudoune, veste imperméable coupe-vent (Gore-Tex indispensable). Chaussures de randonnée imperméables rodées. Bâtons de marche, lunettes de soleil, crème SPF50+. Gourde 2L minimum. Frontale. Réchaud et popote si camping autonome.

Conseils de sécurité essentiels
Météo changeante : 4 saisons en une journée. Vents violents (jusqu\'à 120 km/h) : ancrez bien la tente. Rivières à traverser : niveau variable selon météo. Respectez les sentiers balisés : risque d\'érosion. Emportez tous vos déchets. Crème solaire même par temps couvert (trou d\'ozone). Assurance trek indispensable.

Accès et logistique
Vol international vers Santiago du Chili, puis vol intérieur vers Punta Arenas (3h). Bus vers Puerto Natales (3h), porte d\'entrée du parc. De là, bus vers les entrées du parc (2h). Location d\'équipement possible à Puerto Natales si vous voyagez léger. Budget trek complet : 1500-3000$ selon confort (hors vols internationaux).

Autres activités dans le parc
Kayak sur le lac Grey face au glacier. Navigation vers le glacier avec Ice Trek. Observation de guanacos, condors, renards. Randonnées d\'une journée depuis les lodges pour les non-trekkeurs. Visite de la cueva del Milodón (grotte préhistorique) en route.',

                'blog_cat_id' => 3, // Destinations Amérique
                'user_id' => 1
            ],
            [
                'titre' => 'Les plus beaux hôtels avec vue sur mer en Méditerranée',
                'article' => 'La Méditerranée abrite certains des plus beaux hôtels au monde. De la Côte d\'Azur aux îles grecques, découvrez notre sélection d\'établissements d\'exception offrant des vues imprenables sur la Grande Bleue.

Côte d\'Azur : luxe à la française
Hôtel du Cap-Eden-Roc (Antibes) : palace mythique au cap d\'Antibes, piscine d\'eau de mer creusée dans la roche, plage privée, restaurant Michelin. Depuis 1870, lieu de villégiature des célébrités. Tarifs : 1000-5000€/nuit. Grand-Hôtel du Cap-Ferrat : palace Belle Époque, spa Sisley, jardins surplombant la Méditerranée. Funicular privé jusqu\'à la plage. Villa Ephrussi de Rothschild à proximité.

Amalfi : beauté italienne
Le Sirenuse (Positano) : terrasses fleuries dominant la mer, piscine à débordement, chambres avec majoliques artisanales. Restaurant La Sponda aux chandelles (étoilé Michelin). Monastero Santa Rosa (Conca dei Marini) : ancien monastère du XVIIe, spa dans les grottes, infinity pool vertigineuse, jardin d\'herbes aromatiques. Belmond Hotel Caruso (Ravello) : jardins suspendus à 350m d\'altitude, piscine avec vue panoramique.

Îles grecques : paradis cycladiques
Mystique Santorini : suites troglodytes avec piscines privées à débordement, vue sur la caldeira, spa holistique. Architecture minimale blanche et bleue. Cuisine méditerranéenne fusion. Cavo Tagoo Mykonos : design avant-gardiste, piscines à différents niveaux, vue sur la vieille ville. Ambiance festive et glamour. Elounda Beach Hotel & Villas (Crète) : bungalows avec piscines privées, plage de sable fin, 6 restaurants dont un gastronomique.

Baléares : charme espagnol
Belmond La Residencia (Majorque) : mas traditionnel dans les montagnes de Tramuntana, vue mer et montagne, deux piscines, spa, galerie d\'art. Paradis des artistes et écrivains. Cap Rocat (Majorque) : forteresse militaire du XIXe transformée, chambres dans d\'anciennes casernes, piscine creusée dans la roche, intimité absolue.

Croatie : perle de l\'Adriatique
Hotel Excelsior Dubrovnik : palace historique face à la vieille ville fortifiée, plages privées de galets, spa avec vue mer. Aman Sveti Stefan (Monténégro, proche) : île-village fortifiée privatisée, villas en pierre, plages roses, service ultra-exclusif. Tarifs : 1500-3000€/nuit.

Services et prestations d\'exception
Suites avec terrasse privée et jacuzzi face à la mer. Spas avec soins signature utilisant produits de la Méditerranée. Restaurants gastronomiques étoilés avec chefs renommés. Plages privées avec transats et service au parasol. Yachts et bateaux à disposition. Concierge arrangeant toute activité (hélicoptère, yacht privatisé). Piscines à débordement donnant l\'impression de nager dans la mer.

Expériences culinaires méditerranéennes
Dîners pieds dans le sable ou sur terrasse panoramique. Cuisine locale revisitée : poissons ultra-frais, légumes du potager, huile d\'olive locale. Dégustations de vins régionaux (rosés de Provence, blancs grecs, rouges toscans). Cours de cuisine méditerranéenne avec le chef. Petit-déjeuner avec fruits frais et pâtisseries maison.

Quand réserver pour les meilleures expériences
Haute saison (juillet-août) : météo garantie mais prix maximum et affluence. Réservation 6-12 mois à l\'avance obligatoire. Mai-juin et septembre : températures agréables (23-28°C), mer encore chaude en septembre, prix 20-30% moins élevés. Avril et octobre : hors saison, prix divisés par deux mais météo moins sûre.

Budget et conseils pratiques
Comptez 500-2000€/nuit pour une chambre supérieure, 1500-5000€ pour une suite. Demi-pension souvent avantageuse (petit-déjeuner + dîner inclus). Transferts privés depuis aéroport souvent organisés (parfois inclus). Spa et activités en supplément. Location de yacht ou excursions sur demande. Lune de miel : demandez upgrades et attentions spéciales.',

                'blog_cat_id' => 5, // Hébergement & Restaurants
                'user_id' => 1
            ],
            [
                'titre' => 'Street food asiatique : tour du monde des saveurs de rue',
                'article' => 'L\'Asie offre une incroyable diversité de street food. Des pad thaï de Bangkok aux xiaolongbao de Shanghai, en passant par les takoyaki d\'Osaka, embarquez pour un voyage culinaire à travers les marchés et stands de rue.

Bangkok : capitale mondiale du street food
Yaowarat (Chinatown) : rues entières dédiées à la street food. Testez le pad thaï chez Thip Samai (ouvert depuis 1966), les fruits de mer grillés, le mango sticky rice. Marché de nuit de Ratchada : touristes et locaux, large choix, ambiance électrique. Khao San Road : backpackers, stands de crêpes et smoothies. Soi Rambuttri : plus authentique, moins touristique. Budget : 1-3€ le plat.

Taipei : paradis nocturne gourmand
Night markets incontournables : Shilin (le plus grand), Raohe (spécialités locales), Ningxia (ancien et authentique). Spécialités à goûter : oyster omelette, stinky tofu (fromage fermenté, goût fort), bubble tea originel, gua bao (pain bao fourré), beef noodle soup. Sécurité alimentaire excellente, hygiène irréprochable.

Singapour : melting-pot culinaire
Hawker centers (centres de vendeurs) : Maxwell Food Centre, Lau Pa Sat, Newton. Cuisine multi-ethnique : chinoise, malaise, indienne. Plats emblématiques : chicken rice (poulet-riz, plat national), laksa (soupe épicée nouilles-coco), satay (brochettes), chili crab. Prix : 3-8 SGD (2-6€). Propreté garantie (système de notation).

Hanoï : authenticité vietnamienne
Old Quarter : dédale de rues thématiques (rue des herbes, rue du poulet). Phở au petit-déjeuner, bun cha au déjeuner (vermicelles-porc grillé, favori d\'Obama), banh mi (sandwich vietnamien). Café à l\'œuf unique au monde. Asseyez-vous sur les petites chaises en plastique typiques. Budget dérisoire : 1-2€ le repas.

Tokyo : street food raffinée
Quartiers street food : Tsukiji Outer Market (sushi frais), Ameyoko (Ueno), Nakamise (Asakusa). Yakitori (brochettes), takoyaki (boulettes de poulpe), okonomiyaki (crêpe salée), taiyaki (gâteau poisson). Ramen dans les yokocho (ruelles). Distributeurs automatiques partout : boissons chaudes/froides. Qualité exceptionnelle même en street.

Xi\'an : route de la soie
Muslim Quarter : quartier historique, influence ouïgoure. Spécialités : roujiamo (burger chinois), yangrou paomo (soupe agneau-pain), liangpi (nouilles froides épicées), brochettes d\'agneau. Démonstrations de cuisine spectaculaires. Ambiance authentique et festive. Incontournable si vous visitez les guerriers de terre cuite.

Marrakech : saveurs marocaines
Jemaa el-Fna : place animée, stands de tajines, couscous, merguez, jus d\'orange frais pressés. Harira (soupe), méchoui (agneau rôti), msemen (crêpe). Négociez les prix avant. Évitez l\'eau du robinet. Thé à la menthe omniprésent. Ambiance magique à la tombée de la nuit avec charmeurs de serpents et musiciens.

Istanbul : pont entre deux continents
Eminönü : bateaux-restaurants vendant du balik ekmek (sandwich poisson grillé). Kumru (sandwich turc), simit (couronne de sésame), döner kebab authentique. Balık pazarı (marché aux poissons) : fruits de mer frais. Rue İstiklal : glaces turques spectaculaires. Baklava et loukoums. Çay (thé turc) à tous les coins de rue.

Conseils pour manger en toute sécurité
Choisissez les stands avec beaucoup de locaux (turnover rapide = frais). Observez la propreté du stand. Préférez les aliments bien cuits. Évitez glaçons et salades crues les premiers jours. Eau en bouteille capsulée uniquement. Commencez doucement pour habituer votre système digestif. Emportez Imodium au cas où. Lavez-vous les mains ou gel hydroalcoolique avant de manger.

Budget street food en Asie
Repas complet : 1-3€ en Asie du Sud-Est, 3-8€ à Singapour/Japon, 1-2€ en Inde/Vietnam. Beaucoup moins cher qu\'un restaurant. Portions souvent généreuses. Possibilité de goûter plusieurs plats différents.',

                'blog_cat_id' => 2, // Destinations Asie
                'user_id' => 1
            ],
            [
                'titre' => 'Road trip sur la côte ouest américaine : de LA à San Francisco',
                'article' => 'La Highway 1 offre l\'un des plus beaux road trips au monde. De Los Angeles à San Francisco, longez le Pacifique sur plus de 600 km à travers des paysages époustouflants.

Los Angeles : point de départ glamour
Commencez par 2-3 jours à LA : Hollywood Boulevard, Venice Beach, Santa Monica Pier, Griffith Observatory pour la vue. Conduisez jusqu\'à Malibu, longez les plages de stars, déjeunez face à l\'océan. Première nuit à Santa Barbara, la "Riviera américaine".

Santa Barbara à San Luis Obispo
Santa Barbara : mission historique, plages, architecture espagnole. Prenez la 101 à l\'intérieur pour rejoindre Solvang, village danois pittoresque (moulins, boulangeries). Puis rejoignez la côte à Pismo Beach. San Luis Obispo : ville universitaire charmante, Bubblegum Alley insolite. Nuit dans un motel vintage.

Morro Bay et Hearst Castle
Morro Rock : rocher volcanique emblématique de 176m. Otaries sur les quais. Puis route vers San Simeon et visite d\'Hearst Castle, château extravagant du magnat de la presse William Randolph Hearst (réservation recommandée). Point de vue sur les éléphants de mer à Piedras Blancas.

Big Sur : le joyau de la Highway 1
Tronçon le plus spectaculaire (140km). Arrêts incontournables : Bixby Bridge (pont iconique, photographiez depuis Vista Point), McWay Falls (cascade tombant directement dans l\'océan), Pfeiffer Beach (sable violet, arche rocheuse), Point Lobos (randonnées côtières, phoques). Conduisez lentement, de nombreux virages. Nuit à Big Sur Lodge ou Treebones Resort (glamping).

Carmel-by-the-Sea et Monterey
Carmel : village de pêcheurs huppé, galeries d\'art, plage de sable blanc, Pebble Beach Golf (17-Mile Drive payante mais magnifique). Monterey : Cannery Row (immortalisé par Steinbeck), aquarium réputé, louez des vélos le long de la côte. Whale watching de décembre à avril.

Santa Cruz à Half Moon Bay
Santa Cruz : ambiance surf et boardwalk vintage, parc d\'attractions sur jetée. Puis route côtière sinueuse vers Half Moon Bay, village de pêcheurs. Arrêt à Pigeon Point Lighthouse. Dégustation d\'artichauts frits à Castroville, capitale de l\'artichaut.

Arrivée à San Francisco
Entrez par la Highway 1, longez la côte par Pacifica. Vue sur l\'océan depuis Cliff House. Explorez SF pendant 3-4 jours : Golden Gate Bridge, Alcatraz (réservez 2 mois avant), cable cars, Fisherman\'s Wharf, quartiers ethniques (Chinatown, Mission), Lombard Street (rue la plus sinueuse).

Meilleure période pour le road trip
Printemps-été (avril-septembre) : temps sec et ensoleillé, mer calme, toutes attractions ouvertes. Juillet-août : haute saison, réservez hôtels 2-3 mois à l\'avance. Septembre-octobre : Indian summer, moins de monde, températures agréables. Hiver : pluies possibles, brouillard sur la côte, mais peu de touristes.

Conseils pratiques pour conduire
Louez une décapotable ou SUV confortable (7-10 jours). Roulez sur la droite, permettez dépassements dans les zones prévues. Essence plus chère sur la côte : faites le plein à l\'intérieur. GPS + carte papier (réseau téléphonique aléatoire). Prévoyez 5-7 jours minimum pour profiter. Camping : réservez sur recreation.gov. Motels : le long de la route, charme vintage.

Où manger et dormir
Nepenthe (Big Sur) : vue panoramique, burgers réputés. Post Ranch Inn (Big Sur) : luxe écoresponsable, 1000$/nuit. Deetjen\'s Big Sur Inn : cabanes rustiques, atmosphère bohème. Madonna Inn (San Luis Obispo) : kitsch total, chaque chambre unique. Budget moyen : 150-300$ la nuit pour hôtel mid-range, 50-100$ pour camping/motel basique.',
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