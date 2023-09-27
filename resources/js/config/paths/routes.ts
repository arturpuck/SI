const apiPrefix = '/api';
const prostitutionRoutes = {
    addAnnouncement : '/prostytucja/dodaj-ogłoszenie',
    announcementsList : '/prostytucja/ogłoszenia',
    noticeFormOptions : '/prostytucja/notice-form-options',
    myNoticesList : '/prostytucja/lista-moich-ogłoszeń',
    noticesManagement : '/prostytucja/announcement',
    photoToken : '/prostytucja/photo-token',
    noticesSet: '/prostytucja/announcements'
}

export default {
    news : '/aktualności',
    ...prostitutionRoutes,
    contact : '/kontakt',
    cities : `/cities`,
    voivodeships : `/voivodeships`,
    userTypes : `/user-types`
}
