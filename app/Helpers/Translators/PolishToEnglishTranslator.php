<?php

namespace App\Helpers\Translators;

class PolishToEnglishTranslator
{
	private const ENGLISH_WORDS = [
       'mężczyzną' => 'male',
       'kobietą' => 'female',
       'parą' => 'couple',
       'hermafrodytą' => 'hermaphrodite',
       'transseksualistą' => 'transsexual',
       'nie chcę podać' => null,
       'heteroseksualna' => 'heterosexual',
       'homoseksualna' => 'homosexual',
       'biseksualna' => 'bisexual',
       'autoseksualna' => 'autosexual',
       'aseksualna' => 'asexual'
	];

	public static function get($polishWord)
	{
		return self::ENGLISH_WORDS[$polishWord];
	}
}