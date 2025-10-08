<?php

use App\Http\Controllers\BlogCatController;
use App\Http\Controllers\BlogCommentController;
use App\Http\Controllers\BlogController;
use App\Http\Controllers\BlogTagController;
use App\Http\Controllers\ProductsController;
use App\Http\Controllers\ProfileController;
use App\Http\Controllers\RoleController;
use App\Http\Controllers\UserPinsController;
use App\Http\Controllers\PromoController;
use App\Http\Controllers\UserCartController;
use App\Http\Controllers\CouponController;
use App\Http\Controllers\ProductsCatController;
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

    Route::post('/coupons/check', [CouponController::class, 'checkCoupon'])->name('coupons.check');
    Route::delete('/coupons/remove', [CouponController::class, 'removeCoupon'])->name('coupons.remove');
    // Route::post('/coupons/use', [CouponController::class, 'use'])->name('coupons.use');

    Route::post('/blogs/{blog}/comments', [BlogCommentController::class, 'store'])->name('blogs.comments.store');
    Route::put('/comments/{comment}', [BlogCommentController::class, 'update'])->name('comments.update');
    Route::delete('/comments/{comment}', [BlogCommentController::class, 'destroy'])->name('comments.destroy');
});

Route::middleware(['auth', 'role:admin'])->prefix('admin')->name('admin.')->group(function () {
    Route::get('/dashboard', [RoleController::class, 'dashboard'])->name('dashboard');    

    Route::get('/products/create', [ProductsController::class, 'create'])->name('products.create');
    Route::post('/products', [ProductsController::class, 'store'])->name('products.store');
    Route::get('/products/{product}/edit', [ProductsController::class, 'edit'])->name('products.edit');
    Route::put('/products/{product}', [ProductsController::class, 'update'])->name('products.update');
    Route::delete('/products/{product}', [ProductsController::class, 'destroy'])->name('products.destroy');

    Route::get('/categories', [ProductsCatController::class, 'index'])->name('categories.index');
    Route::get('/categories/create', [ProductsCatController::class, 'create'])->name('categories.create');
    Route::post('/categories', [ProductsCatController::class, 'store'])->name('categories.store');
    Route::delete('/categories/{category}', [ProductsCatController::class, 'destroy'])->name('categories.destroy');

    Route::get('/products/promos', [PromoController::class, 'index'])->name('promos.index');
    Route::post('/promos/apply-random', [PromoController::class, 'applyRandomPromos'])->name('promos.apply-random');
    Route::post('/promos/remove-all', [PromoController::class, 'removeAllPromos'])->name('promos.remove-all');

    Route::get('/products/coupons', [CouponController::class, 'index'])->name('coupons.index');
    Route::post('/coupons', [CouponController::class, 'store'])->name('coupons.store');
    Route::delete('/coupons/{coupon}', [CouponController::class, 'destroy'])->name('coupons.destroy');

    Route::post('/products/{product}/toggle-pin', [ProductsController::class, 'togglePin'])->name('products.toggle-pin');

    Route::get('/blogs/article/new', [BlogController::class, 'create'])->name('blogs.article.create');
    Route::post('/blogs/article', [BlogController::class, 'store'])->name('blogs.article.store');

    Route::get('/blog/tag/new', [BlogTagController::class, 'create'])->name('blogs.tag.create');
    Route::post('/blog/tag', [BlogTagController::class, 'store'])->name('blogs.tag.store');

    Route::get('/blog/category/new', [BlogCatController::class, 'create'])->name('blogs.category.create');
    Route::post('/blog/category', [BlogCatController::class, 'store'])->name('blogs.category.store');

});
Route::get('/products/filter', [ProductsController::class, 'filter'])->name('products.filter');
Route::get('/products', [ProductsController::class, 'index'])->name('public.products.index');
Route::get('/products/{product}', [ProductsController::class, 'show'])->name('public.show');
Route::get('/home', [ProductsController::class, 'index'])->name('public.home');
Route::get('/blogs', [BlogController::class, 'index'])->name('public.blogs.index');
Route::get('/blogs/{id}', [BlogController::class, 'show'])->name('public.blogs.show');

require __DIR__.'/auth.php';

