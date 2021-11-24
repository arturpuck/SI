import Translator from '@jsmodules/translator.js';

const translations : {
    movieFrame : string,
    playMoviePreview : string,
    closeMoviePreview : string,
    circleLabelCaption : string,
    playButtonTittle : string,
} = {
     movieFrame : Translator.translate('movie_frame'),
     playMoviePreview : Translator.translate('play_movie_preview'),
     closeMoviePreview : Translator.translate('close_movie_preview'),
     circleLabelCaption : Translator.translate('launching_in_progress'),
     playButtonTittle : Translator.translate('click_to_play_the_video')
}

export default translations;