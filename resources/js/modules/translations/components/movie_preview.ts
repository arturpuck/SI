import Translator from '@jsmodules/translator.js';

const translations : {
    movieFrame : string,
    playMoviePreview : string,
    closeMoviePreview : string
} = {
     movieFrame : Translator.translate('movie_frame'),
     playMoviePreview : Translator.translate('play_movie_preview'),
     closeMoviePreview : Translator.translate('close_movie_preview')
}

export default translations;