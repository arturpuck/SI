export default function(queryParams:object):string{
      let query:string = '';

      Object.keys(queryParams).forEach(function(key){
         query += `${key}=${queryParams[key]}&`;
      });
       
      return query.slice(0,-1);
}