var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { JournalService } from '../journal.service';
var EntryDetailsComponent = (function () {
    function EntryDetailsComponent(myRoute, myJournalService, myNavigator) {
        this.myRoute = myRoute;
        this.myJournalService = myJournalService;
        this.myNavigator = myNavigator;
        this.errorMessage = '';
    }
    EntryDetailsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.myRoute.params.subscribe(function (params) {
            _this.getEntryDetails(params['id']);
        });
    };
    EntryDetailsComponent.prototype.getEntryDetails = function (id) {
        var _this = this;
        this.myJournalService.getEntry(id)
            .then(function (theEntryDetails) {
            console.log("The entry details");
            console.log(theEntryDetails);
            _this.entry = theEntryDetails;
        })
            .catch(function (err) {
            _this.errorMessage = 'Could not retrieve phone details. Try again later.';
        });
    };
    return EntryDetailsComponent;
}());
EntryDetailsComponent = __decorate([
    Component({
        selector: 'app-entry-details',
        templateUrl: './entry-details.component.html',
        styleUrls: ['./entry-details.component.css']
    }),
    __metadata("design:paramtypes", [ActivatedRoute,
        JournalService,
        Router])
], EntryDetailsComponent);
export { EntryDetailsComponent };
//# sourceMappingURL=../../../../src/app/entry-details/entry-details.component.js.map