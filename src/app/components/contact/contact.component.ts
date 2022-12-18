import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { contact } from 'src/app/interfaces/contact';

import { custmer } from 'src/app/interfaces/custmer';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {


  contacts: contact[] = [
    {
      fullname: "Eileen Russell",
      Phone: " +1 (824) 598-2328",
      Email: "elin@gmail.com",
      birthday: "Jan 18, 201424/09/2021",
      img: "https://i.ibb.co/7kvwqq0/Pic1.jpg"
      
    },
    {
      fullname: "Francis Mckay",
      Phone: " +1 (824) 598-2328",
      Email: "francismckay@xumonk.com",
      birthday: "Jan 15, 2014",
      img: "https://i.ibb.co/jJp7bqL/francis.jpg"
    },
    {
      fullname: "Jewell Schultz",
      Phone: " +1 (824) 598-2328",
      Email: " jewellschultz@xumonk.com",
      birthday: " Jul 3, 2020",
      img: "https://i.ibb.co/pbQzCtp/jewe.jpg"
    },
    {
      fullname: "Goodman Hunter",
      Phone: " +1 (824) 598-2328",
      Email: " goodmanhunter@xumonk.com",
      birthday: " Feb 22, 2016",
      img: "https://i.ibb.co/ThMYLTd/444.jpg"
    },
    {
      fullname: "Beck Webb",
      Phone: " +1 (824) 598-2328",
      Email: " beckwebb@xumonk.com",
      birthday: " Jul 3, 2020",
      img: "https://i.ibb.co/HB274jh/411111111.jpg"
    },
    {
      fullname: "Tabitha Combs",
      Phone: " +1 (824) 598-2328",
      Email: "  tabithacombs@xumonk.com",
      birthday: " Jul 10, 2020",
      img: "https://i.ibb.co/JC9sx9W/tabi.jpg"
    },

    {
      fullname: "Schmidt Jennings",
      Phone: " +1 (824) 598-2328",
      Email: "  schmidtjennings@xumonk.com",
      birthday: " Jul 5, 2020",
      img: "https://i.ibb.co/27sGF2R/1111.jpg"
    },
    {
      fullname: "Bullock Martinez",
      Phone: " +1 (824) 598-2328",
      Email: "  bullockmartinez@xumonk.com",
      birthday: " Jul 20, 2020",
      img: "https://i.ibb.co/dLQ7xKG/orange.jpg"
    },

    {
      fullname: "ehab abo rersh",
      Phone: " +1 (824) 598-2328",
      Email: "  ehab@xumonk.com",
      birthday: " Jul 15, 2020",
      img: "https://i.ibb.co/nDfjqQn/japa.jpg"
    },



  ];
  fullname: string = "";
   

  constructor(private modal: NgbModal) { }

  ngOnInit(): void {
  }

}
