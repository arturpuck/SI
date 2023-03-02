import CategoryData from '@interfaces/movies/category_data';
import Translator from '@jsmodules/translator.js';

type categoryType = 'theMostPopularCategories' | 'otherCategories'
// if you add any catgory remember to also add it to sitemap generator!!
const categoriesData: {
    theMostPopularCategories: string[]
    getTheMostPopular(): CategoryData[]
    getDataByType(categoryType: categoryType): CategoryData[]
    getSlug(categoryName): string
} = {
    theMostPopularCategories: [
        'big_titts',
        'anal',
        'blowjob',
        'handjob',
        'blondes',
        'tittfuck',
        'pussy_licking',
        'feet',
        'bukkake',
        'femdom',
        'BDSM',
        'brunettes',
        'redheads',
        'milfs',
        'teenagers',
        'amateur',
        'asian',
        'latins',
        'ebony',
        'GangBang',
        'lesbians',
        'group',
        'cumshot_compilations',
        'cum_on_face',
        'cum_swallow',
        'cum_on_feet',
        'creampie',
        'cum_in_ass',
        'cum_on_titts',
        'pantyhose',
        'high_heels',
        'nurses',
        'teachers',
        'japanese',
        'POV',
        'russian',
        'pornstars'
    ],

    getTheMostPopular(): CategoryData[] {
        return this.getDataByType('theMostPopularCategories');
    },

    getSlug(categoryName): string {
        return categoryName.replaceAll(' ', '-');
    },

    getDataByType(categoryType: categoryType): CategoryData[] {
        const group = this[categoryType];
        let data: CategoryData[] = [];
        let translatedCategoryName: string;
        let slug: string;

        group.forEach(categoryName => {
            translatedCategoryName = Translator.translate(categoryName);
            slug = this.getSlug(translatedCategoryName);
            data.push({
                fileName: categoryName,
                slug,
                translatedName: translatedCategoryName
            });
        });

        return data;
    }
}

const theMostPopular = categoriesData.getTheMostPopular();



export default theMostPopular