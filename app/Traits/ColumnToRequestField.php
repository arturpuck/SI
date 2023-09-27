<?php

namespace App\Traits;

Trait ColumnToRequestField {

    public function translateColumnNameToRequestFieldName(string $fieldName) : string
    {
        $parts = explode('_', $fieldName);
        if(count($parts) === 1) {
            return $fieldName;
        }
        $result = array_shift($parts);
        foreach($parts as $part) {
            $result .= ucfirst($part);
        }
        return $result;
    }
}