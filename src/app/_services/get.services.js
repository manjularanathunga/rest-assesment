"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var core_1 = require("@angular/core");
var http_1 = require("@angular/http");
require("rxjs/add/operator/map");
var clear_entity_1 = require("../common/clear_entity");
var platform_browser_1 = require("@angular/platform-browser");
var GetService = (function () {
    function GetService(http, clsentity, document) {
        this.http = http;
        this.clsentity = clsentity;
        console.log('PostService Initialized ......');
        this.strUrl = document.location.hostname;
        this.port = '7913';
        this.requestent = clsentity.clearReqModelByDates();
    }
    ;
    GetService.prototype.getSysUser = function () {
        return this.http.get("http://" + this.strUrl + ":" + this.port + "/list-sysuser")
            .map(function (res) { return res.json(); });
    };
    ;
    GetService.prototype.deleteSysUser = function (id) {
        console.log('calling service.ScreenGroup .....');
        return this.http.get("http://" + this.strUrl + ":" + this.port + "/delete-sysuser?sysuserId=" + id)
            .map(function (res) { return res.json(); });
    };
    GetService.prototype.getSysUserById = function (empid) {
        return this.http.get("http://" + this.strUrl + ":" + this.port + "/list-dailyLeave?employeeid=" + empid)
            .map(function (res) { return res.json(); });
    };
    ;
    GetService.prototype.getlistOfStudent = function () {
        return this.http.get("http://" + this.strUrl + ":" + this.port + "/list-student")
            .map(function (res) { return res.json(); });
    };
    ;
    GetService.prototype.getUserType = function () {
        return this.http.get("http://" + this.strUrl + ":" + this.port + "/list-usertype")
            .map(function (res) { return res.json(); });
    };
    GetService.prototype.getScreen = function () {
        return this.http.get("http://" + this.strUrl + ":" + this.port + "/list-screen")
            .map(function (res) { return res.json(); });
    };
    GetService.prototype.deleteScreen = function (id) {
        console.log('calling service.deleteScreen .....');
        return this.http.get("http://" + this.strUrl + ":" + this.port + "/delete-screen?screenid=" + id)
            .map(function (res) { return res.json(); });
    };
    GetService.prototype.getUnitPrice = function () {
        return this.http.get("http://" + this.strUrl + ":" + this.port + "/list-unitprice")
            .map(function (res) { return res.json(); });
    };
    GetService.prototype.deleteUnitPrice = function (id) {
        console.log('calling service.UnitPrice .....');
        return this.http.get("http://" + this.strUrl + ":" + this.port + "/delete-unitprice?lunitpriceid=" + id)
            .map(function (res) { return res.json(); });
    };
    GetService.prototype.getUnitPriceWithParam = function (param) {
        return this.http.get("http://" + this.strUrl + ":" + this.port + "/list-unitprice-by_itemunitid?itemunitid=" + param)
            .map(function (res) { return res.json(); });
    };
    GetService.prototype.getCurrentMonthlySummery = function (officerid) {
        return this.http.get("http://" + this.strUrl + ":" + this.port + "/summery-by-officer-monthly?officerId=" + officerid + "&isCredited=R")
            .map(function (res) { return res.json(); });
    };
    GetService.prototype.getCategory = function () {
        return this.http.get("http://" + this.strUrl + ":" + this.port + "/list-category")
            .map(function (res) { return res.json(); });
    };
    GetService.prototype.deleteCategory = function (id) {
        console.log('calling service.deleteRank .....');
        return this.http.get("http://" + this.strUrl + ":" + this.port + "/delete-category?categoryid=" + id)
            .map(function (res) { return res.json(); });
    };
    GetService.prototype.getItemUnit = function () {
        return this.http.get("http://" + this.strUrl + ":" + this.port + "/list-itemunit")
            .map(function (res) { return res.json(); });
    };
    GetService.prototype.deleteItemUnit = function (id) {
        console.log('calling service.deleteRank .....');
        return this.http.get("http://" + this.strUrl + ":" + this.port + "/delete-itemunit?itemUnitid=" + id)
            .map(function (res) { return res.json(); });
    };
    GetService.prototype.getItemUnitParam = function (searchOfficer) {
        return this.http.get("http://" + this.strUrl + ":" + this.port + "/list-itemunit?param1=" + searchOfficer)
            .map(function (res) { return res.json(); });
    };
    GetService.prototype.getOfficer = function () {
        return this.http.get("http://" + this.strUrl + ":" + this.port + "/list-officers")
            .map(function (res) { return res.json(); });
    };
    GetService.prototype.deleteOfficer = function (id) {
        console.log('calling service.Officer .....');
        return this.http.get("http://" + this.strUrl + ":" + this.port + "/delete-officer?officerid=" + id)
            .map(function (res) { return res.json(); });
    };
    GetService.prototype.getOfficerSplit = function () {
        return this.http.get("http://" + this.strUrl + ":" + this.port + "/list-officer-split")
            .map(function (res) { return res.json(); });
    };
    GetService.prototype.getOfficerLimited = function (limitCount) {
        return this.http.get("http://" + this.strUrl + ":" + this.port + "/list-officer-limited?limit=" + limitCount)
            .map(function (res) { return res.json(); });
    };
    GetService.prototype.getOfficerKeys = function () {
        return this.http.get("http://" + this.strUrl + ":" + this.port + "/list-officers-keys")
            .map(function (res) { return res.json(); });
    };
    GetService.prototype.getOfficerByRankId = function (rankid) {
        return this.http.get("http://" + this.strUrl + ":" + this.port + "/list-officerbyrank?rankid=" + rankid)
            .map(function (res) { return res.json(); });
    };
    GetService.prototype.laodofficerbyId = function (officerbyId) {
        return this.http.get("http://" + this.strUrl + ":" + this.port + "/laodofficerbyId?officerid=" + officerbyId)
            .map(function (res) { return res.json(); });
    };
    GetService.prototype.getOfficersByName = function (officerName) {
        return this.http.get("http://" + this.strUrl + ":" + this.port + "/list-officer-splitbyname?officerName=" + officerName)
            .map(function (res) { return res.json(); });
    };
    GetService.prototype.getOfficerNameByName = function (officerName) {
        return this.http.get("http://" + this.strUrl + ":" + this.port + "/list-officers-name?filter=" + officerName)
            .map(function (res) { return res.json(); });
    };
    GetService.prototype.getStationKeys = function () {
        return this.http.get("http://" + this.strUrl + ":" + this.port + "/list-station-keys")
            .map(function (res) { return res.json(); });
    };
    GetService.prototype.getOfficerByStation = function (stationId) {
        return this.http.get("http://" + this.strUrl + ":" + this.port + "/list-officerbystation?stationId=" + stationId)
            .map(function (res) { return res.json(); });
    };
    GetService.prototype.loadStationById = function (stationId) {
        return this.http.get("http://" + this.strUrl + ":" + this.port + "/loadstationbyid?stationId=" + stationId)
            .map(function (res) { return res.json(); });
    };
    GetService.prototype.getoffbystandmonth = function (stationId, monthId) {
        return this.http.get("http://" + this.strUrl + ":" + this.port + "/list-offbystandmonth?stationId=" + stationId + "&monthId=" + monthId)
            .map(function (res) { return res.json(); });
    };
    GetService.prototype.loadMonthlyMessSales = function (stationId, monthId, paymentType) {
        return this.http.get("http://" + this.strUrl + ":" + this.port + "/list-monthly-mess-sales?stationId=" + stationId + "&monthId=" + monthId + "&paymentType=" + paymentType)
            .map(function (res) { return res.json(); });
    };
    GetService.prototype.loadMonthlyOverdueOfficerReport = function (monthId) {
        return this.http.get("http://" + this.strUrl + ":" + this.port + "/list-monthly-overdue-officer?monthId=" + monthId)
            .map(function (res) { return res.json(); });
    };
    GetService.prototype.loadMonthlyOfficerUsedReport = function (monthId, officerbyId, paymentType) {
        return this.http.get("http://" + this.strUrl + ":" + this.port + "/list-monthly-officer-used?monthId=" + monthId + "&paymentType=" + paymentType + "&officerId=" + officerbyId)
            .map(function (res) { return res.json(); });
    };
    GetService.prototype.loadMonthlyBillingByNIC = function (monthId, officerNIC, paymentType) {
        return this.http.get("http://" + this.strUrl + ":" + this.port + "/list-monthly-billing-bynic?monthId=" + monthId + "&paymentType=" + paymentType + "&officernic=" + officerNIC)
            .map(function (res) { return res.json(); });
    };
    GetService.prototype.getOfficerByStationandMonth = function (stationId, monthId) {
        return this.http.get("http://" + this.strUrl + ":" + this.port + "/list-officersbystandmonth?stationId=" + stationId + "&monthId=" + monthId)
            .map(function (res) { return res.json(); });
    };
    GetService.prototype.getOfficerParam = function (searchOfficer) {
        return this.http.get("http://" + this.strUrl + ":" + this.port + "/list-officer?param1=" + searchOfficer)
            .map(function (res) { return res.json(); });
    };
    //this.entity.billingDate, this.entity.officer.id
    GetService.prototype.getDailyBilling = function (billingDate, officerId, isCredit) {
        console.log("--getDailyBilling--");
        var targerUrl = "/list-by-officeranddate?officerId=" + officerId + "&isCredited=" + isCredit + "&fromDate=" + this.getFormattedDate(billingDate);
        return this.http.get("http://" + this.strUrl + ":" + this.port + targerUrl)
            .map(function (res) { return res.json(); });
    };
    GetService.prototype.getFormattedDate = function (date) {
        console.log("--getFormattedDate--" + date);
        return new Date(date).toISOString().slice(0, 10); //07-14-1996
    };
    GetService.prototype.getStation = function () {
        return this.http.get("http://" + this.strUrl + ":" + this.port + "/list-station")
            .map(function (res) { return res.json(); });
    };
    GetService.prototype.getMessStation = function () {
        return this.http.get("http://" + this.strUrl + ":" + this.port + "/list-mess-station")
            .map(function (res) { return res.json(); });
    };
    GetService.prototype.getOfficerRank = function () {
        return this.http.get("http://" + this.strUrl + ":" + this.port + "/list-officerrank")
            .map(function (res) { return res.json(); });
    };
    GetService.prototype.getDaialySales = function (entity) {
        this.requestent.fromDate = entity.fromDate;
        this.requestent.toDate = entity.toDate;
        var body = "searchDate=" + JSON.stringify(this.requestent);
        var url = "http://" + this.strUrl + ":" + this.port + "/list-daialysales?" + body;
        console.log('url .....' + url);
        return this.http.get(url)
            .map(function (res) { return res.json(); });
    };
    GetService.prototype.getScreenGroup = function () {
        return this.http.get("http://" + this.strUrl + ":" + this.port + "/list-screengroup")
            .map(function (res) { return res.json(); });
    };
    GetService.prototype.deleteScreenGroup = function (id) {
        console.log('calling service.ScreenGroup .....');
        return this.http.get("http://" + this.strUrl + ":" + this.port + "/delete-screengroup?screengroupid=" + id)
            .map(function (res) { return res.json(); });
    };
    GetService.prototype.getStock = function (itemUnitId) {
        return this.http.get("http://" + this.strUrl + ":" + this.port + "/list-daily-stock?searchDate=" + itemUnitId)
            .map(function (res) { return res.json(); });
    };
    GetService.prototype.deleteBilling = function (id) {
        console.log('calling service.BillinDetails .....');
        return this.http.get("http://" + this.strUrl + ":" + this.port + "/delete-billing?id=" + id)
            .map(function (res) { return res.json(); });
    };
    return GetService;
}());
GetService = __decorate([
    core_1.Injectable(),
    __param(2, core_1.Inject(platform_browser_1.DOCUMENT)),
    __metadata("design:paramtypes", [http_1.Http, clear_entity_1.CLSEntity, Object])
], GetService);
exports.GetService = GetService;
//# sourceMappingURL=get.services.js.map