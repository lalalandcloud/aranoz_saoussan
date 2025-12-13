<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('products', function (Blueprint $table) {
            $table->id();
            $table->string('name');
            $table->longText('description');
            $table->decimal('price', 6, 2);
            $table->unsignedInteger('stock');
            $table->boolean('pin');
            $table->string('colour', 7);
            $table->foreignId('products_cat_id')->constrained('products_cats')->onDelete('cascade');
            $table->foreignId('promo_id')->nullable()->constrained('promos')->nullOnDelete();
            $table->string('img_main');
            $table->string('img_2')->nullable();
            $table->string('img_3')->nullable();
            $table->string('img_4')->nullable();
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('products');
    }
};
