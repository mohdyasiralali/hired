<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateCquestionsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('cquestions', function (Blueprint $table) {
            $table->id();
            $table->text('title');
            $table->text('question');
            $table->timestamps();
        });

        Schema::table('cquestions', function (Blueprint $table) {
            $table->bigInteger('challenge_id')->unsigned();

            $table->foreign('challenge_id')
                ->references('id')
                ->on('challenges')
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
        Schema::dropIfExists('cquestions');
    }
}
