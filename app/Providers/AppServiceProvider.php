<?php

namespace App\Providers;

use App\Models\User;
use Illuminate\Support\Facades\Gate;
use Illuminate\Support\Facades\Vite;
use Illuminate\Support\ServiceProvider;

class AppServiceProvider extends ServiceProvider
{
    /**
     * Register any application services.
     */
    public function register(): void
    {
        //
    }

    /**
     * Bootstrap any application services.
     */
    public function boot(): void
    {
        // Gate::define('modify-car', function (User $user, Car $car) {
        //     return $user->id === $car->user_id || 
        //         ($user->role && $user->role->name === 'admin');
        // });

        Gate::define('admin-access', function (User $user) {
            return $user->role && $user->role->name === 'admin';
        });
    }
}
