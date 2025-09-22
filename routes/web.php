<?php

use App\Http\Controllers\ProductsController;
use App\Http\Controllers\ProfileController;
use App\Http\Controllers\RoleController;
use App\Http\Controllers\UserPinsController;
use App\Http\Controllers\PromoController;
use App\Http\Controllers\UserCartController;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;
// Route::get('/', function () {
//     return Inertia::render('Welcome', [
//         'canLogin' => Route::has('login'),
//         'canRegister' => Route::has('register'),
//         'laravelVersion' => Application::VERSION,
//         'phpVersion' => PHP_VERSION,
//     ]);
// });



Route::middleware('auth')->group(function () {
    Route::get('/dashboard', function () {
        return Inertia::render('Dashboard');
    })->name('dashboard');

    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
   
    Route::prefix('public/user')->name('user.')->group(function () {
        Route::get('/pins', [UserPinsController::class, 'index'])->name('pins.index');
        Route::get('/cart', [UserCartController::class, 'index'])->name('cart.index');
    });
    Route::post('/products/{product}/toggle-pin', [UserPinsController::class, 'toggle'])->name('products.toggle-pin');

    Route::post('/cart/add/{product}', [UserCartController::class, 'store'])->name('cart.store');
    Route::put('/cart/{cartItem}', [UserCartController::class, 'update'])->name('cart.update');
    Route::delete('/cart/{cartItem}', [UserCartController::class, 'destroy'])->name('cart.destroy');
    Route::delete('/cart', [UserCartController::class, 'clear'])->name('cart.clear');
    Route::get('/cart/count', [UserCartController::class, 'count'])->name('cart.count');
});

Route::middleware(['auth', 'role:admin'])->prefix('admin')->name('admin.')->group(function () {
    Route::get('/dashboard', [RoleController::class, 'dashboard'])->name('dashboard');    
    Route::get('/products/create', [ProductsController::class, 'create'])->name('products.create');
    Route::post('/products', [ProductsController::class, 'store'])->name('products.store');
    Route::get('/products/promos', [PromoController::class, 'index'])->name('promos.index');
    Route::post('/products/promos/apply-random', [PromoController::class, 'applyRandomPromos'])->name('promos.apply-random');
    Route::post('/products/promos/remove-all', [PromoController::class, 'removeAllPromos'])->name('promos.remove-all');

});

Route::get('/products/{product}', [ProductsController::class, 'show'])->name('public.show');
Route::get('/home', [ProductsController::class, 'index'])->name('public.home');

require __DIR__.'/auth.php';