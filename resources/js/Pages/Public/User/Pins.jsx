import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import PinButton from '@/Components/PinButton';
import React from 'react';
import { Head, Link } from '@inertiajs/react';

export default function Pins({ pinnedProducts }) {
    return (
        <AuthenticatedLayout>
            <Head title="Mes Favoris" />
            
            <div className="container mx-auto px-4 py-8">
                <div className="flex justify-between items-center mb-8">
                    <h1 className="text-3xl font-bold flex items-center gap-2">
                        ❤️ Mes Favoris
                    </h1>
                    <Link 
                        href="/"
                        className="bg-blue-500 hover:bg-blue-700 text-white px-4 py-2 rounded"
                    >
                        Retour au catalogue
                    </Link>
                </div>
                
                {pinnedProducts?.length === 0 ? (
                    <div className="text-center py-12">
                        <div className="text-6xl mb-4">💔</div>
                        <h2 className="text-2xl font-semibold text-gray-700 mb-2">
                            Aucun produit dans vos favoris
                        </h2>
                        <p className="text-gray-500 mb-6">
                            Découvrez notre catalogue et ajoutez vos produits préférés !
                        </p>
                        <Link 
                            href="/"
                            className="bg-red-500 hover:bg-red-700 text-white px-6 py-3 rounded-lg"
                        >
                            Parcourir le catalogue
                        </Link>
                    </div>
                ) : (
                    <>
                        <p className="text-gray-600 mb-6">
                            Vous avez {pinnedProducts.length} produit{pinnedProducts.length > 1 ? 's' : ''} dans vos favoris
                        </p>
                        
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                            {pinnedProducts.map((product) => (
                                <div key={product.id} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
                                    <div className="relative">
                                        <img 
                                            src={`/storage/${product.img_main}`} 
                                            alt={product.name}
                                            className="w-full h-48 object-cover"
                                        />
                                        <div className="absolute top-2 right-2">
                                            <PinButton product={{...product, is_pinned_by_user: true}} />
                                        </div>
                                    </div>                                    
                                    <div className="p-4">
                                        <h3 className="text-xl font-bold mb-2">{product.name}</h3>
                                        
                                        <div className="flex justify-between items-center mb-2">
                                            <span className="text-2xl font-bold text-green-600">
                                                {product.price}€
                                            </span>
                                            <span className={`px-2 py-1 rounded text-sm ${
                                                product.stock > 0 ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'
                                            }`}>
                                                Stock: {product.stock}
                                            </span>
                                        </div>
                                        
                                        {product.category && (
                                            <p className="text-gray-600 mb-2">
                                                <span className="font-medium">Catégorie:</span> {product.category.name}
                                            </p>
                                        )}
                                        
                                        <div 
                                            className="w-6 h-6 rounded-full border-2 border-gray-300 mb-3" 
                                            style={{backgroundColor: product.colour}}
                                            title={`Couleur: ${product.colour}`}
                                        ></div>
                                        
                                        <p className="text-gray-700 text-sm mb-4 line-clamp-2">
                                            {product.description}
                                        </p>
                                        
                                        <Link 
                                            href={`/products/${product.id}`}
                                            className="block w-full text-center bg-blue-500 hover:bg-blue-700 text-white py-2 rounded transition-colors"
                                        >
                                            Voir détails
                                        </Link>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </>
                )}
            </div>
        </AuthenticatedLayout>
    );
}