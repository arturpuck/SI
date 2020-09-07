<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;
use App\News;

class CreateNewsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('news', function (Blueprint $table) {
            $table->id();
            $table->string('news_header',25)->nullable();
            $table->longText('news_content')->nullable();
            $table->string('template_name',50)->default('default_news');
            $table->date('added_at');
            $table->engine = 'InnoDB';
        });

        News::create([
           'news_header' => 'Początek działalności',
           'news_content' => 'Sex - Imperium rozpoczyna swoją działalność w sieci. W dniu rozpoczęcia udostępniamy użytkownikom filmy pornograficzne wraz ze standardowymi udogodnieniami takimi jak kategorie i profile gwiazd branży. 
           Oprócz tego wprowadziliśmy pewne innowacje - precyzyjną wyszukiwarkę oraz filmy z polskim tłumaczeniem. 
           Plany na najbliższą przyszłość to : zdjęcia porno, wyszukiwanie słowne, więcej filmów, i gwiazd oraz więcej opcji dla wyszukiwania zaawansowanego. 
           Plany na dalszą przyszłość : dział ogłoszeń dla osób zajmujących się prostytucją oraz sex-randki. Liczymy na to, że zostaniecie z nami. 
           Bardzo chętnie poznamy wasze uwagi na temat funkcjonowania portalu - wasza opinia ma dla nas duże znaczenie! Wystarczy skorzystać z formularza kontaktowego - link znajduje się na dole strony, w stopce. Życzymy miłego pobytu.',
           'added_at' => date('Y-m-d')
        ]);
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('news');
    }
}
