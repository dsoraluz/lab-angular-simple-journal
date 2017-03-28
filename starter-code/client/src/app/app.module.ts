import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EntryListComponent } from './entry-list/entry-list.component';
import { JournalService } from './journal.service';
import { EntryDetailsComponent } from './entry-details/entry-details.component';
import { EntryNewComponent } from './entry-new/entry-new.component';

@NgModule({
  declarations: [
    AppComponent,
    EntryListComponent,
    EntryDetailsComponent,
    EntryNewComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule
  ],
  providers: [JournalService],
  bootstrap: [AppComponent]
})
export class AppModule { }
