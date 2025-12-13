<?php

namespace App\Models;

// use Illuminate\Contracts\Auth\MustVerifyEmail;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Foundation\Auth\User as Authenticatable;
use Illuminate\Notifications\Notifiable;

class User extends Authenticatable
{
    /** @use HasFactory<\Database\Factories\UserFactory> */
    use HasFactory, Notifiable;

    /**
     * The attributes that are mass assignable.
     *
     * @var list<string>
     */
    protected $fillable = [
        'first_name',
        'last_name',
        'phone',
        'address',
        'email',
        'password',
        'role_id'
    ];

    /**
     * The attributes that should be hidden for serialization.
     *
     * @var list<string>
     */
    protected $hidden = [
        'password',
        'remember_token',
    ];

     public function userPins()
    {
        return $this->hasMany(UserPin::class);
    }

    /**
     * Relation many-to-many avec les produits épinglés
     */
    public function pinnedProducts()
    {
        return $this->belongsToMany(Product::class, 'user_pins');
    }

    /**
     * Vérifier si un produit est épinglé par l'utilisateur
     */
    public function hasPinned($productId)
    {
        return $this->userPins()->where('product_id', $productId)->exists();
    }
    /**
     * Get the attributes that should be cast.
     *
     * @return array<string, string>
     */
    protected function casts(): array
    {
        return [
            'email_verified_at' => 'datetime',
            'password' => 'hashed',
        ];
    }
    public function role(){
        return $this->belongsTo(Role::class);
    }
    public function blog(){
        return $this->hasMany(Blog::class);
    }
    
    public function cartItems()
    {
        return $this->hasMany(UserCart::class);
    }

    /**
     * Obtenir tous les produits dans le panier de l'utilisateur
     */
    public function cartProducts()
    {
        return $this->belongsToMany(Product::class, 'user_carts')
                    ->withPivot('quantity')
                    ->withTimestamps();
    }

    /**
     * Calculer le total du panier
     */
    public function getCartTotalAttribute()
    {
        return $this->cartItems()->with('product.promo')->get()->sum('final_price');
    }

    /**
     * Obtenir le nombre total d'items dans le panier
     */
    public function getCartCountAttribute()
    {
        return $this->cartItems()->sum('quantity');
    }
    
    public function appliedCartCoupon()
    {
        return $this->hasOne(UserCartCoupon::class);
    }

    public function getAppliedCouponAttribute()
    {
        return $this->appliedCartCoupon;
    }

    public function blogComments()
    {
        return $this->hasMany(BlogUserComment::class)
                    ->with('blog')
                    ->orderBy('created_at', 'desc');
    }

    public function commentedBlogs()
    {
        return $this->belongsToMany(Blog::class, 'blog_user_comments')
                    ->withTimestamps()
                    ->distinct();
    }
    public function orders()
    {
        return $this->hasMany(Order::class);
    }

}
