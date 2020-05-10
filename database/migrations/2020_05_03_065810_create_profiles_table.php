<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateProfilesTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('profiles', function (Blueprint $table) {
            $table->id();
            $table->text('bio')->nullable();
            $table->date('birth_day')->nullable();
            $table->text('linked_profile');
            $table->text('facebook_profile');
            $table->boolean('first_attempt')->default(1);
            $table->text('profession')->nullable();
            $table->timestamps();
            $table->integer('user_id')->unsigned();

            $table->foreign('user_id')
                ->references('id')
                ->on('users')
                ->OnDelete('cascade');
        });

        Schema::create('profile_skill', function (Blueprint $table) {
            $table->id();
            $table->unsignedBigInteger('profile_id');
            $table->unsignedBigInteger('skill_id');
            $table->timestamps();

            $table->unique(['profile_id', 'skill_id']);

            $table->foreign('profile_id')
            ->references('id')
            ->on('profiles')
            ->OnDelete('cascade');

            $table->foreign('skill_id')
            ->references('id')
            ->on('skills')
            ->OnDelete('cascade');
        });
    }



    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('profiles');
    }
}
