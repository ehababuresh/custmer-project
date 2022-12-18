import { Pipe, PipeTransform } from '@angular/core';
import { filter, pipe } from 'rxjs';
import { contact } from '../interfaces/contact';
import { CustmersService } from '../services/custmers.service';

@Pipe({
  name: 'contactfilter'
})
export class ContactFilterPipe implements PipeTransform {

  transform(custmer: contact[], propName : keyof contact, value:string , ): contact [] {
    let fileredcustmers : contact[] =[]

    for(let item of custmer){
      if(
        (item[propName]?.toString()as string)
        .toLowerCase()
        .includes(value.toLowerCase())
        ){
       fileredcustmers.push(item);

      }
  
    }

    return fileredcustmers ;
   
  }


    
  };
  



  
