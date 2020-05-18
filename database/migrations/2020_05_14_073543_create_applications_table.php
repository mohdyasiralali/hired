<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateApplicationsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('applications', function (Blueprint $table) {
            $table->id();
            $table->text('subject');
            $table->text('letter');
            $table->timestamps();
        });

        Schema::table('applications', function (Blueprint $table) {
            $table->bigInteger('company_id')->unsigned();
            // $table->bigInteger('user_id')->unsigned();
            $table->unsignedInteger('user_id')->nullable();


            $table->foreign('user_id')
                ->references('id')
                ->on('users')
                ->OnDelete('cascade');

            $table->foreign('company_id')
                ->references('id')
                ->on('companies')
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
        Schema::dropIfExists('applications');
    }
}
