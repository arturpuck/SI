const apiPrefix = '/api';
const prostitutionRoutes = {
    addAnnouncement : '/prostytucja/dodaj-ogłoszenie',
    announcementsList : '/prostytucja/ogłoszenia',
    noticeFormOptions : '/prostytucja/notice-form-options',
}

export default {
    news : '/aktualności',
    ...prostitutionRoutes,
    contact : '/kontakt',
    cities : `/cities`
}
