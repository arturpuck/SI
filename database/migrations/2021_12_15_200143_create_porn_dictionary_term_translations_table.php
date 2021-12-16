<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;
use App\PornDictionaryTerm;

class CreatePornDictionaryTermTranslationsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */


    public function up()
    {
        Schema::create('porn_dictionary_term_translations', function (Blueprint $table) {
            $table->id();
            $table->foreignIdFor(PornDictionaryTerm::class);
            $table->string('language_shortcut',3);
            $table->string('translated_name',40)->nullable();
            $table->string('translated_description');
            $table->timestamps();
        });

        $pornDictionaryTerms = PornDictionaryTerm::all();
        $translations = [];

        foreach($pornDictionaryTerms as $pornDictionaryTerm){
            $translations[] = [
                'porn_dictionary_term_id' => $pornDictionaryTerm->id,
                'language_shortcut' => 'pl', 
                'translated_name' => $this->getTranslatedTerm($pornDictionaryTerm),
                'translated_description' => $this->getTranslatedTerm($pornDictionaryTerm, '_description')
            ];
        }

    }

    protected function getTranslatedTerm(string $term, string $appendedString = '') : ?string
    {
        $termKey = "porn_dictionary_terms.{$term}{$appendedString}";
        $translated = __(key:"porn_dictionary_terms.{$term}", locale:'pl');
        return $translated == $termKey ? null : $translated;
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('porn_dictionary_term_translations');
    }
}
