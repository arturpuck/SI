<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;
use App\PornDictionaryTerm;

class CreatePornDictionaryTermsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('porn_dictionary_terms', function (Blueprint $table) {
            $table->id();
            $table->string('name', 40);
            $table->timestamps();
        });

        $this->insertTerms();

    }

    protected function insertTerms() : void {

        PornDictionaryTerm::insert([
            ['name' => '69'],
            ['name' => 'Amateur'],
            ['name' => 'Anal'],
            ['name' => 'BBC'],
            ['name' => 'BBW'],
            ['name' => 'BDSM'],
            ['name' => 'Bukkake'],
            ['name' => 'BlowBang'],
            ['name' => 'BlowJob'],
            ['name' => 'Cum Swapping'],
            ['name' => 'Creampie'],
            ['name' => 'Cumshot'],
            ['name' => 'Cuckold'],
            ['name' => 'Deep throat'],
            ['name' => 'DP'],
            ['name' => 'Dildo'],
            ['name' => 'Facial'],
            ['name' => 'Fluffer'],
            ['name' => 'FootJob'],
            ['name' => 'Femdom'],
            ['name' => 'GangBang'],
            ['name' => 'GILF'],
            ['name' => 'Glory hole'],
            ['name' => 'Golden Shower'],
            ['name' => 'Mature'],
            ['name' => 'MILF'],
            ['name' => 'Mistress'],
            ['name' => 'Money shot'],
            ['name' => 'Oral'],
            ['name' => 'Rimming'],
            ['name' => 'Softcore'],
            ['name' => 'Shemale'],
            ['name' => 'Threesome'],
        ]);
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('porn_dictionary_terms');
    }
}
