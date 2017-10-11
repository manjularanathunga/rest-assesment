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
require("rxjs/Rx");
require("rxjs/add/operator/catch");
require("rxjs/add/operator/subscribeOn");
var platform_browser_1 = require("@angular/platform-browser");
var PostService = (function () {
    function PostService(http, document) {
        this.http = http;
        console.log('PostService Initialized ......');
        this.strUrl = document.location.hostname;
        this.port = '7913';
        this.requestent = {
            id: 0,
            rdate1: new Date
        };
    }
    PostService.prototype.authenticate = function (uName, pWord) {
        var body = "userName=" + uName + "&passWord=" + pWord + "&loggedStatus='y'";
        var headers = new http_1.Headers();
        headers.append('Content-Type', 'application/x-www-form-urlencoded');
        var url = "http://" + this.strUrl + ":" + this.port + "/authenticate";
        return this.http.post("http://" + this.strUrl + ":" + this.port + "/authenticate", body, { headers: headers })
            .map(function (res) { return res.json(); });
    };
    PostService.prototype.getPosts = function () {
        return this.http.get('https://jsonplaceholder.typicode.com/posts')
            .map(function (res) { return res.json(); });
    };
    PostService.prototype.getEmpListById = function (empId) {
        console.log('getEmpList .....');
        return this.http.get("http://" + this.strUrl + ":" + this.port + "/list-employeebyid?empid=" + empId)
            .map(function (res) { return res.json(); });
    };
    PostService.prototype.getEmpList = function () {
        return this.http.get("http://" + this.strUrl + ":" + this.port + "/list-employee")
            .map(function (res) { return res.json(); });
    };
    PostService.prototype.getDesignationList = function () {
        return this.http.get("http://" + this.strUrl + ":" + this.port + "/list-designation")
            .map(function (res) { return res.json(); });
    };
    PostService.prototype.isSucessLogin = function (uName, pWord) {
        var body = "userName=" + uName + "&passWord=" + pWord + "&loggedStatus='y'";
        var headers = new http_1.Headers();
        headers.append('Content-Type', 'application/x-www-form-urlencoded');
        return this.http.post("http://" + this.strUrl + ":" + this.port + "/LoginValidate", body, { headers: headers })
            .map(function (res) { return res.json(); });
    };
    PostService.prototype.getLeaveTypeList = function () {
        return this.http.get("http://" + this.strUrl + ":" + this.port + "/list-leavetype")
            .map(function (res) { return res.json(); });
    };
    PostService.prototype.getDailyLeaveList = function (empid) {
        return this.http.get("http://" + this.strUrl + ":" + this.port + "/list-dailyLeave?employeeid=" + empid)
            .map(function (res) { return res.json(); });
    };
    PostService.prototype.saveSysUser = function (sysuser, isedited) {
        console.log('calling service.save usertype .....');
        var body = "entity=" + JSON.stringify(sysuser);
        var headers = new http_1.Headers();
        var requesMethod;
        if (isedited) {
            requesMethod = 'update-sysuser';
        }
        else {
            requesMethod = 'save-sysuser';
        }
        headers.append('Content-Type', 'application/x-www-form-urlencoded');
        return this.http.post("http://" + this.strUrl + ":" + this.port + "/" + requesMethod, body, { headers: headers })
            .map(function (res) { return res.json(); });
    };
    PostService.prototype.saveUserType = function (usertype, isedited) {
        console.log('calling service.save usertype .....');
        var body = "usertype=" + JSON.stringify(usertype);
        var headers = new http_1.Headers();
        var requesMethod;
        if (isedited) {
            requesMethod = 'update-usertype';
        }
        else {
            requesMethod = 'save-usertype';
        }
        headers.append('Content-Type', 'application/x-www-form-urlencoded');
        return this.http.post("http://" + this.strUrl + ":" + this.port + "/" + requesMethod, body, { headers: headers })
            .map(function (res) { return res.json(); });
    };
    PostService.prototype.deleteUserType = function (id) {
        console.log('calling service.deleteStation .....');
        return this.http.get("http://" + this.strUrl + ":" + this.port + "/delete-usertype?usertypeid=" + id)
            .map(function (res) { return res.json(); });
    };
    PostService.prototype.saveScreen = function (entity, isedited) {
        console.log('calling service.save UserScreen .....');
        var body = "entity=" + JSON.stringify(entity);
        var headers = new http_1.Headers();
        var requesMethod;
        if (isedited) {
            requesMethod = 'update-screen';
        }
        else {
            requesMethod = 'save-screen';
        }
        headers.append('Content-Type', 'application/x-www-form-urlencoded');
        return this.http.post("http://" + this.strUrl + ":" + this.port + "/" + requesMethod, body, { headers: headers })
            .map(function (res) { return res.json(); });
    };
    PostService.prototype.saveLocation = function (entity, isedited) {
        console.log('calling service.save UserScreen .....');
        var body = "entity=" + JSON.stringify(entity);
        var headers = new http_1.Headers();
        var requesMethod;
        if (isedited) {
            requesMethod = 'update-location';
        }
        else {
            requesMethod = 'save-location';
        }
        headers.append('Content-Type', 'application/x-www-form-urlencoded');
        return this.http.post("http://" + this.strUrl + ":" + this.port + "/" + requesMethod, body, { headers: headers })
            .map(function (res) { return res.json(); });
    };
    PostService.prototype.saveUnitPrice = function (entity, isedited) {
        console.log('calling service.saveUnitPrice .....');
        var body = "entity=" + JSON.stringify(entity);
        var headers = new http_1.Headers();
        var requesMethod;
        if (isedited) {
            requesMethod = 'update-unitprice';
        }
        else {
            requesMethod = 'save-unitprice';
        }
        headers.append('Content-Type', 'application/x-www-form-urlencoded');
        return this.http.post("http://" + this.strUrl + ":" + this.port + "/" + requesMethod, body, { headers: headers })
            .map(function (res) { return res.json(); });
    };
    PostService.prototype.saveCategory = function (entity, isedited) {
        console.log('calling service.saveCategory .....');
        var body = "entity=" + JSON.stringify(entity);
        var headers = new http_1.Headers();
        var requesMethod;
        if (isedited) {
            requesMethod = 'update-category';
        }
        else {
            requesMethod = 'save-category';
        }
        headers.append('Content-Type', 'application/x-www-form-urlencoded');
        return this.http.post("http://" + this.strUrl + ":" + this.port + "/" + requesMethod, body, { headers: headers })
            .map(function (res) { return res.json(); });
    };
    PostService.prototype.saveItemUnit = function (entity, isedited) {
        console.log('calling service.saveItemUnit .....');
        var body = "entity=" + JSON.stringify(entity);
        var headers = new http_1.Headers();
        var requesMethod;
        if (isedited) {
            requesMethod = 'update-itemunit';
        }
        else {
            requesMethod = 'save-itemunit';
        }
        headers.append('Content-Type', 'application/x-www-form-urlencoded');
        return this.http.post("http://" + this.strUrl + ":" + this.port + "/" + requesMethod, body, { headers: headers })
            .map(function (res) { return res.json(); });
    };
    PostService.prototype.saveStation = function (entity, isedited) {
        console.log('calling service.saveStation .....');
        var body = "entity=" + JSON.stringify(entity);
        var headers = new http_1.Headers();
        var requesMethod;
        if (isedited) {
            requesMethod = 'update-station';
        }
        else {
            requesMethod = 'save-station';
        }
        headers.append('Content-Type', 'application/x-www-form-urlencoded');
        return this.http.post("http://" + this.strUrl + ":" + this.port + "/" + requesMethod, body, { headers: headers })
            .map(function (res) { return res.json(); });
    };
    PostService.prototype.deleteStation = function (id) {
        console.log('calling service.deleteStation .....');
        return this.http.get("http://" + this.strUrl + ":" + this.port + "/delete-station?stationid=" + id)
            .map(function (res) { return res.json(); });
    };
    PostService.prototype.saveOfficerRank = function (entity, isedited) {
        console.log('calling service.saveOfficerRank .....');
        var body = "entity=" + JSON.stringify(entity);
        var headers = new http_1.Headers();
        var requesMethod;
        if (isedited) {
            requesMethod = 'update-officerrank';
        }
        else {
            requesMethod = 'save-officerrank';
        }
        headers.append('Content-Type', 'application/x-www-form-urlencoded');
        return this.http.post("http://" + this.strUrl + ":" + this.port + "/" + requesMethod, body, { headers: headers })
            .map(function (res) { return res.json(); });
    };
    /*    saveDivision(entity: Division, isedited: boolean) {
            console.log('calling service.saveDivision .....');
            let body = `entity=${JSON.stringify(entity)}`;
            let headers = new Headers();
            let requesMethod;

            if (isedited) {
                requesMethod = 'update-division';
            } else {
                requesMethod = 'save-division';
            }

            headers.append('Content-Type', 'application/x-www-form-urlencoded');
            return this.http.post(`http://${this.strUrl}:${this.port}/${requesMethod}`, body, { headers: headers })
                .map(res => res.json());
        }*/
    PostService.prototype.deleteRank = function (id) {
        console.log('calling service.deleteRank .....');
        return this.http.get("http://" + this.strUrl + ":" + this.port + "/delete-rank?rankid=" + id)
            .map(function (res) { return res.json(); });
    };
    PostService.prototype.saveOfficer = function (entity, isedited) {
        console.log('calling service.saveOfficer  .....');
        var body = "entity=" + JSON.stringify(entity);
        var headers = new http_1.Headers();
        var requesMethod;
        if (isedited) {
            requesMethod = 'update-officer';
        }
        else {
            requesMethod = 'save-officer';
        }
        headers.append('Content-Type', 'application/x-www-form-urlencoded');
        return this.http.post("http://" + this.strUrl + ":" + this.port + "/" + requesMethod, body, { headers: headers })
            .map(function (res) { return res.json(); });
    };
    PostService.prototype.getBillings = function (billingDate, officerid) {
        console.log('------Calling getBillings---------');
        this.requestent.rdate1 = billingDate;
        this.requestent.id = officerid;
        var body = "RequestModel1=" + JSON.stringify(this.requestent);
        console.log('body = ' + body);
        var headers = new http_1.Headers();
        headers.append('Content-Type', 'application/x-www-form-urlencoded');
        return this.http.post("http://" + this.strUrl + ":" + this.port + "/list-billing", body, { headers: headers })
            .map(function (res) { return res.json(); });
    };
    PostService.prototype.salesByMonth = function (requestent) {
        var body = "ReqModelByDates=" + JSON.stringify(requestent);
        var headers = new http_1.Headers();
        headers.append('Content-Type', 'application/x-www-form-urlencoded');
        return this.http.post("http://" + this.strUrl + ":" + this.port + "/list-mess-sales", body, { headers: headers })
            .map(function (res) { return res.json(); });
    };
    PostService.prototype.getReportSummery = function (requestent) {
        var body = "ReqReportSummery=" + JSON.stringify(requestent);
        var headers = new http_1.Headers();
        headers.append('Content-Type', 'application/x-www-form-urlencoded');
        return this.http.post("http://" + this.strUrl + ":" + this.port + "/monthly-summary-report", body, { headers: headers })
            .map(function (res) { return res.json(); });
    };
    PostService.prototype.saveBillinDetails = function (entity, isedited) {
        console.log('calling service.save billing .....');
        var body = "entity=" + JSON.stringify(entity);
        var headers = new http_1.Headers();
        var requesMethod;
        if (isedited) {
            requesMethod = 'update-billing';
        }
        else {
            requesMethod = 'save-billing';
        }
        headers.append('Content-Type', 'application/x-www-form-urlencoded');
        return this.http.post("http://" + this.strUrl + ":" + this.port + "/" + requesMethod, body, { headers: headers })
            .map(function (res) { return res.json(); });
    };
    PostService.prototype.saveScreenGroup = function (entity, isedited) {
        console.log('calling service.save saveScreenGroup .....' + isedited);
        var body = "entity=" + JSON.stringify(entity);
        var headers = new http_1.Headers();
        var requesMethod;
        if (isedited) {
            requesMethod = 'update-screengroup';
        }
        else {
            requesMethod = 'save-screengroup';
        }
        headers.append('Content-Type', 'application/x-www-form-urlencoded');
        return this.http.post("http://" + this.strUrl + ":" + this.port + "/" + requesMethod, body, { headers: headers })
            .map(function (res) { return res.json(); });
    };
    PostService.prototype.saveStock = function (entity, isedited) {
        console.log('calling service.save saveStock .....');
        var body = "entity=" + JSON.stringify(entity);
        var headers = new http_1.Headers();
        var requesMethod;
        if (isedited) {
            requesMethod = 'update-stock';
        }
        else {
            requesMethod = 'save-stock';
        }
        headers.append('Content-Type', 'application/x-www-form-urlencoded');
        return this.http.post("http://" + this.strUrl + ":" + this.port + "/" + requesMethod, body, { headers: headers })
            .map(function (res) { return res.json(); });
    };
    PostService.prototype.handleErrorObservable = function (error) {
        console.error(error.message || error);
        //noinspection TypeScriptUnresolvedVariable
        return error.message;
        //return Observable.throw(error.message || error);
    };
    PostService.prototype.handleErrorPromise = function (error) {
        console.error(error.message || error);
        return Promise.reject(error.message || error);
    };
    PostService.prototype.extractData = function (res) {
        var body = res.json();
        return body.data || {};
    };
    return PostService;
}());
PostService = __decorate([
    core_1.Injectable(),
    __param(1, core_1.Inject(platform_browser_1.DOCUMENT)),
    __metadata("design:paramtypes", [http_1.Http, Object])
], PostService);
exports.PostService = PostService;
//# sourceMappingURL=post.services.js.map