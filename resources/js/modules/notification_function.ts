import EventEmmiter from "mitt";
const EventBus = EventEmmiter();

export default function(text:string, type:string = "no-error"){
    const header:string = type === "no-error" ? "information" : "error";
    EventBus.emit('showNotification', {notificationText : text, notificationType : type, headerText : header});
 }