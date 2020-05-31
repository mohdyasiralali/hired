<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateChallengesTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('challenges', function (Blueprint $table) {
            $table->id();
            $table->text('title');
            $table->text('techs');
            $table->timestamps();
        });

        Schema::table('challenges', function (Blueprint $table) {
            $table->bigInteger('quiz_id')->unsigned();
            $table->bigInteger('company_id')->unsigned();
            $table->foreign('company_id')
                ->references('id')
                ->on('companies')
                ->OnDelete('cascade');

            $table->foreign('quiz_id')
                ->references('id')
                ->on('quizzes')
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
        Schema::dropIfExists('challenges');
    }
}
