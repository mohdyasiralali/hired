<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateAnswersTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('answers', function (Blueprint $table) {
            $table->id();
            $table->text('code');
            $table->timestamps();
        });

        Schema::table('answers', function (Blueprint $table) {
            $table->bigInteger('challenge_id')->unsigned();
            $table->bigInteger('question_id')->unsigned();
            $table->unsignedInteger('user_id')->nullable();

            $table->foreign('challenge_id')
                ->references('id')
                ->on('challenges')
                ->OnDelete('cascade');
            $table->foreign('question_id')
                ->references('id')
                ->on('cquestions')
                ->OnDelete('cascade');
            $table->foreign('user_id')
                ->references('id')
                ->on('users')
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
        Schema::dropIfExists('answers');
    }
}
