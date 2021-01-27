export interface QueryParams {
      pornstarsList? : string[],
      otherParams : object
}

export const QueryBuilder = {

      build(queryParams:QueryParams):string{

            let query:string = '';
            let otherParams:object = queryParams['otherParams'];
      
            Object.keys(otherParams).forEach(function(key){
               query += `${key}=${otherParams[key]}&`;
            });
      
            let pornstarsList:string[] = queryParams['pornstarsList'];
      
            pornstarsList.forEach(function(pornstarNickname:string){
                  query += `pornstarsList[]=${pornstarNickname}&`;
            });
      
            return query.slice(0,-1);

      }
      
}