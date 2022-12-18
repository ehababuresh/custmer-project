import { Component, Input, OnInit } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { custmer } from 'src/app/interfaces/custmer';
import { CustmersService } from 'src/app/services/custmers.service';

@Component({
  selector: 'app-edit-add-view-custmer',
  templateUrl: './edit-add-view-custmer.component.html',
  styleUrls: ['./edit-add-view-custmer.component.css']
})
export class EditAddViewCustmerComponent implements OnInit {
  @Input() id!: string ; 
  @Input() viewMode!: boolean;
  
    custmer: custmer = {
    firstname: "", lastname: "", Phone: 0, Email: "", note: ""
  };
 
   constructor(private cs: CustmersService, private activeModal: NgbActiveModal ) {}
 
   ngOnInit(): void {
     if (this.id) {
       this.cs.getcustmerById(this.id).subscribe(res => {
         if (res) {
           this.custmer = res;
         }
       });
     }
   }
   
     handlesave() {
      if (this.id) {
        this.updatethecustmer();    
      } else {
        this.createNewCustomer();
       }
 }
 
     updatethecustmer(){
      this.cs
     .updatecustmer(this.custmer)
     .then(() => this.activeModal.close())
     .catch((err) => console.log(err));
 
    }
 
 
    createNewCustomer() {
     this.cs
       .addcustmer(this.custmer)
        .then(() => this.activeModal.close())
         .catch(err => console.error(err));
       }
   
   }
 