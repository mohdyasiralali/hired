<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateCompaniesTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('companies', function (Blueprint $table) {
            $table->id();
            $table->text('name');
            $table->text('industry');
            $table->text('headquarter');
            $table->text('website')->nullable();
            $table->text('overview');
            $table->timestamps();
            $table->integer('user_id')->unsigned();

            $table->foreign('user_id')
                ->references('id')
                ->on('users')
                ->OnDelete('cascade');
        });

        Schema::create('company_skill', function (Blueprint $table) {
            $table->id();
            $table->unsignedBigInteger('company_id');
            $table->unsignedBigInteger('skill_id');
            $table->timestamps();

            $table->unique(['company_id', 'skill_id']);

            $table->foreign('company_id')
            ->references('id')
            ->on('companies')
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
        Schema::dropIfExists('companies');
    }
}
