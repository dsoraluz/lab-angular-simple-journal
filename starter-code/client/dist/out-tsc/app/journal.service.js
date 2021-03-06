var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import 'rxjs/add/operator/toPromise';
var JournalService = (function () {
    function JournalService(myHttp) {
        this.myHttp = myHttp;
        this.BASE_URL = "http://localhost:3000";
    }
    JournalService.prototype.getEntries = function () {
        return this.myHttp.get(this.BASE_URL + "/api/journal-entries")
            .toPromise()
            .then(function (apiResponse) { return apiResponse.json(); });
    };
    JournalService.prototype.getEntry = function (id) {
        return this.myHttp.get(this.BASE_URL + "/api/journal-entries/" + id)
            .toPromise()
            .then(function (apiResult) { return apiResult.json(); });
    };
    JournalService.prototype.createEntry = function (entryInfo) {
        var headers = new Headers({ 'Content-Type': 'application/json' });
        var options = { headers: headers };
        return this.myHttp.post(this.BASE_URL + "/api/journal-entries", entryInfo, options)
            .toPromise()
            .then(function (apiResult) { return apiResult.json(); });
    };
    return JournalService;
}());
JournalService = __decorate([
    Injectable(),
    __metadata("design:paramtypes", [Http])
], JournalService);
export { JournalService };
//# sourceMappingURL=../../../src/app/journal.service.js.map