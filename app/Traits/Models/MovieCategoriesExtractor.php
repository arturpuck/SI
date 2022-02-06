<?php

namespace App\Traits\Models;

trait MovieCategoriesExtractor
{

    public function getAllBasicCategoriesList(): array
    {
        return   [
            'BigTits' => __('big_titts'),
            'Anal' => __('anal'),
            'BlowJob' => __('blowjob'),
            'Blondes' => __('blondes'),
            'TittFuck' => __('tittfuck'),
            'PussyLicking' => __('pussy_licking'),
            'FeetPetting' => __('feet_worship'),
            'Bukkake' => __('bukkake'),
            'FemaleDomination' => __('female_domination'),
            'BDSM' => __('BDSM'),
            'Brunettes' => __('brunettes'),
            'Redheads' => __('redheads'),
            'Matures' => __('milfs'),
            'Amateurs' => __('amateur'),
            'Asians' => __('asian'),
            'Latins' => __('latins'),
            'Ebonies' => __('ebony'),
            'GangBang' => __('GangBang'),
            'Lesbians' => __('lesbians'),
            'GroupSex' => __('group'),
            'CumshotCompilation' => __('cumshot_compilation'),
            'Facial' => __('cum_on_face'),
            'CumSwallow' => __('cum_swallow'),
            'CumOnFeet' => __('cum_on_feet'),
            'Creampie' => __('creampie'),
            'AnalCreampie' => __('cum_in_ass'),
            'TittsCumshot' => __('cum_on_titts'),
            'Pantyhose' => __('pantyhose'),
            'HighHeels' => __('high_heels'),
            'Nurses' => __('nurses'),
            'FemaleTeachers' => __('teachers'),
            'JapanesePorn' => __('japanese'),
            'POV' => __('POV'),
            'RussianPorn' => __('russian_women'),
        ];
    }

    public function getAllGadgetsList(): array
    {
        return [
            'Pantyhose' => __('pantyhose'),
            'HighHeels' => __('high_heels'),
            'Stockings' => __('stockings'),
            'Glasses' => __('glasses'),
            'Whips' => __('whips'),
            'HugeCock' => __('huge_cock')
        ];
    }

    public function getBasicCategoriesList(): ?array
    {
        $basicGadgetsList = $this->getAllBasicCategoriesList();
        $result = [];
        foreach ($basicGadgetsList as $gadgetName => $description) {
            $methodName = "represents$gadgetName";
            if ($this->$methodName()) {
                $result[] = $description;
            }
        }
        return count($result) > 0 ? $result : null;
    }

    public function getGadgetsList(): ?array
    {
        $basicCategoresList = $this->getAllGadgetsList();
        $result = [];
        foreach ($basicCategoresList as $methodName => $description) {
            $methodName = "contains$methodName";
            if ($this->$methodName()) {
                $result[] = $description;
            }
        }
        return count($result) > 0 ? $result : null;
    }

    public function containsPantyhose(): bool
    {
        return $this->actress_has_pantyhose === 1;
    }

    public function containsGlasses(): bool
    {
        return $this->actress_has_glasses === 1;
    }
    
    public function containsHighHeels(): bool
    {
        return $this->shows_high_heels === 1;
    }

    public function containsStockings(): bool
    {
        return $this->shows_high_heels === 1;
    }

    public function containsWhips(): bool
    {
        return $this->shows_whips === 1;
    }

    public function containsHugeCock(): bool
    {
        return $this->shows_big_cock === 1;
    }
    
    public function representsBigTits(): bool
    {
        return $this->getActressTitsSize() === 'big';
    }

    public function representsAnal(): bool
    {
        return $this->getAnalPercentage() >= 90;
    }

    public function representsBlowJob(): bool
    {
        return $this->getBlowjobPercentage() >= 90;
    }

    public function representsBlondes(): bool
    {
        return $this->getActressHairColor() === 'blonde';
    }

    public function representsTittFuck(): bool
    {
        return $this->getTittFuckPercentage() >= 90;
    }

    public function representsPussyLicking(): bool
    {
        return $this->getPussyLickingPercentage() >= 90;
    }

    public function representsFeetPetting(): bool
    {
        return $this->getFeetPettingPercentage() >= 90;
    }

    public function representsBukkake(): bool
    {
        return $this->getAbundanceType() === 'bukkake';
    }

    public function representsFemaleDomination(): bool
    {
        return $this->is_female_domination_type === 1;
    }

    public function representsBDSM(): bool
    {
        return $this->is_sadistic_or_masochistic === 1;
    }

    public function representsBrunettes(): bool
    {
        return $this->getActressHairColor() === 'dark';
    }

    public function representsRedheads(): bool
    {
        return $this->getActressHairColor() === 'red';
    }

    public function representsMatures(): bool
    {
        return $this->getActressAgeRange() === 'mature';
    }

    public function representsTeenagers(): bool
    {
        return $this->getActressAgeRange() === 'teenagers';
    }

    public function representsAmateurs(): bool
    {
        return $this->is_professional_production === 0;
    }

    public function representsAsians(): bool
    {
        return $this->getActressRace() === 'asian';
    }

    public function representsLatins(): bool
    {
        return $this->getActressRace() === 'latin';
    }

    public function representsEbonies(): bool
    {
        return $this->getActressRace() === 'ebony';
    }

    public function representsGangBang(): bool
    {
        return $this->getAbundanceType() === 'GangBang';
    }

    public function representsLesbians(): bool
    {
        return str_contains($this->getAbundanceType(), 'lesbian');
    }

    public function representsGroupSex(): bool
    {
        return str_contains(strtolower($this->getAbundanceType()), 'group');
    }

    public function representsCumshotCompilation(): bool
    {
        return $this->is_cumshot_compilation_type === 1;
    }

    public function representsFacial(): bool
    {
        return $this->getCumshotType() === 'on_face';
    }

    public function representsCumSwallow(): bool
    {
        return $this->getCumshotType() === 'cum_swallow';
    }

    public function representsCumOnFeet(): bool
    {
        return $this->getCumshotType() === 'on_feet';
    }

    public function representsCreampie(): bool
    {
        return $this->getCumshotType() === 'creampie';
    }

    public function representsAnalCreampie(): bool
    {
        return $this->getCumshotType() === 'anal_creampie';
    }

    public function representsTittsCumshot(): bool
    {
        return $this->getCumshotType() === 'on_tits';
    }

    public function representsPantyhose(): bool
    {
        return $this->actress_has_pantyhose === 1;
    }

    public function representsHighHeels(): bool
    {
        return $this->shows_high_heels === 1;
    }

    public function representsNurses(): bool
    {
        return $this->getStoryOrCostumeType() === 'nurse';
    }

    public function representsFemaleTeachers(): bool
    {
        return $this->getStoryOrCostumeType() === 'female_teacher';
    }

    public function representsJapanesePorn(): bool
    {
        return $this->getActressNationality() === 'japanese';
    }

    public function representsRussianPorn(): bool
    {
        return $this->getActressNationality() === 'russian';
    }

    public function representsPOV(): bool
    {
        return $this->getCameraStyle() === 'POV';
    }
}
