<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;
use App\PornDictionaryTerm;
use App\PornDictionaryTermTranslation;

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
            $table->unsignedBigInteger('term_id');
            $table->foreign('term_id')->references('id')->on('porn_dictionary_terms');
            $table->string('language_shortcut',3);
            $table->string('translated_name', 40)->nullable();
            $table->text('translated_description');
        });

        $this->insertTranslations();

        
    }
    
    protected function getTranslatedTerm(string $term, string $appendedString = '') : ?string
    {
        $termKey = "porn_dictionary_terms.{$term}{$appendedString}";
        $translated = __(key:$termKey, locale:'pl');
        return $translated == $termKey ? null : $translated;
    }
    
    protected function insertTranslations() : void {

        $pornDictionaryTerms = PornDictionaryTerm::all();
        $translations = [];
    
        foreach($pornDictionaryTerms as $pornDictionaryTerm){
            $translations[] = [
                'term_id' => $pornDictionaryTerm->id,
                'language_shortcut' => 'pl', 
                'translated_name' => $this->getTranslatedTerm($pornDictionaryTerm->name),
                'translated_description' => $this->getTranslatedTerm($pornDictionaryTerm->name, '_description')
            ];
             if($this->getTranslatedTerm($pornDictionaryTerm->name, '_description') === null){
                 dd($pornDictionaryTerm->name);
             }
        }

        PornDictionaryTermTranslation::insert($translations);
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
