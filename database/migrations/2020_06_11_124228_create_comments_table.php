<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateCommentsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('comments', function (Blueprint $table) {
            $table->id();
            $table->timestamps();
            $table->text('comment');
            $table->text('user_name');
            $table->text('user_email');
            $table->text('user_avatar');
        });


        Schema::table('comments', function (Blueprint $table) {
            $table->bigInteger('article_id')->unsigned();

            $table->foreign('article_id')
                ->references('id')
                ->on('articles')
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
        Schema::dropIfExists('comments');
    }
}
