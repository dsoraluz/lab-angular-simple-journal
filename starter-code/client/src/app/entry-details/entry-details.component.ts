import { Component, OnInit } from '@angular/core';

import { Router, ActivatedRoute } from '@angular/router';
import { JournalService } from '../journal.service';

@Component({
  selector: 'app-entry-details',
  templateUrl: './entry-details.component.html',
  styleUrls: ['./entry-details.component.css']
})
export class EntryDetailsComponent implements OnInit {
  entry: Object;
  errorMessage: String = '';

  constructor(
    private myRoute: ActivatedRoute,
    private myJournalService: JournalService,
    private myNavigator: Router
  ) { }

  ngOnInit() {

    this.myRoute.params.subscribe((params)=>{
      this.getEntryDetails(params['id']);
    });
  }

  getEntryDetails(id){
    this.myJournalService.getEntry(id)
    .then((theEntryDetails)=>{
      console.log("The entry details");
      console.log(theEntryDetails);
      this.entry = theEntryDetails;
    })
    .catch((err)=>{
      this.errorMessage = 'Could not retrieve phone details. Try again later.'
    });
  }

}
