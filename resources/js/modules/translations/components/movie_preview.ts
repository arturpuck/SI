import Translator from '@jsmodules/translator.js';

const translations : {
    movieFrame : string,
    playMoviePreview : string,
} = {
     movieFrame : Translator.translate('movie_frame'),
     playMoviePreview : Translator.translate('play_movie_preview'),
}

export default translations;