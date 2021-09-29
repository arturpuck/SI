import Translator from '@jsmodules/translator.js';

const translations : {
    currentNumberOfVotes : string,
    movieAverageRating : string,
    averageRateNotAvailableYet : string,
    thisPornstarHasNoVotes : string
} = {
    currentNumberOfVotes : Translator.translate('current_number_of_votes'),
    movieAverageRating : Translator.translate('movie_average_rating'),
    averageRateNotAvailableYet : Translator.translate('average_rate_not_available_yet'),
    thisPornstarHasNoVotes : Translator.translate('this_pornstar_has_no_votes')
}

export default translations;