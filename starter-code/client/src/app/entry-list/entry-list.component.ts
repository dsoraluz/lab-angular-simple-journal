import { Component, OnInit } from '@angular/core';
// import { Router} from '@angular/router';
import { JournalService } from '../journal.service';

@Component({
  selector: 'app-entry-list',
  templateUrl: './entry-list.component.html',
  styleUrls: ['./entry-list.component.css']
})
export class EntryListComponent implements OnInit {

  entries: Array<Object> = [];
  errorMessage: String = '';

  constructor(private myJournalService: JournalService) { }

  ngOnInit() {
    this.myJournalService.getEntries()
    .then((entriesList)=>{
      // console.log(entriesList);
      this.entries = entriesList;
    })
    .catch((err)=>{
      this.errorMessage='There was an error. Try Again later.'
    });
  }

}
