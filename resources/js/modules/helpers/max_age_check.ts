function checkIfUserExceedsMaximumPossibleAge(dateString : string) : boolean {
    const dateNow = new Date();
    const date120yearsAgo = dateNow.setFullYear(dateNow.getFullYear() - 120);
    const dateShards  = dateString.split('-');
    const userSelectedDate = {
       year : Number(dateShards[0]),
       month : Number(dateShards[1]),
       day : Number(dateShards[2])
    };
    const chosenDate = new Date(userSelectedDate.year, userSelectedDate.month - 1, userSelectedDate.day).getTime();
    return chosenDate <= date120yearsAgo;
 }

 export default checkIfUserExceedsMaximumPossibleAge;