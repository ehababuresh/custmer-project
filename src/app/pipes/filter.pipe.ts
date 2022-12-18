import { Pipe, PipeTransform } from '@angular/core';
import { filter, pipe } from 'rxjs';
import { contact } from '../interfaces/contact';
import { custmer } from '../interfaces/custmer';
import { CustmersService } from '../services/custmers.service';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(custmer: custmer[], propName : keyof custmer, value:string , ): custmer [] {
    let fileredcustmers : custmer[] =[]
    for(let custmers of custmer){
      if(
        (custmers[propName]?.toString()as string)
        .toLowerCase()
        .includes(value.toLowerCase())
        ){
       fileredcustmers.push(custmers);

      }
  
    }

    return fileredcustmers ;
   
  }


    
  };
  



  
