(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _views_calllist_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./views/calllist.component */ "./src/app/views/calllist.component.ts");
/* harmony import */ var _views_call_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./views/call.component */ "./src/app/views/call.component.ts");





var routes = [
    { path: "", redirectTo: "/call-list", pathMatch: 'full' },
    { path: "call-list", component: _views_calllist_component__WEBPACK_IMPORTED_MODULE_3__["CallListView"] },
    { path: "call/:id", component: _views_call_component__WEBPACK_IMPORTED_MODULE_4__["CallView"] }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes, { useHash: true })],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div>\r\n  <div id=\"theWarning\" class=\"alert alert-warning\" [hidden]=\"!error\">{{ error }}</div>\r\n  <div id=\"theWarning\" class=\"alert alert-primary\"  [hidden]=\"!isBusy\">Loading...</div>\r\n  <router-outlet></router-outlet>\r\n</div>"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./services */ "./src/app/services/index.ts");



var AppComponent = /** @class */ (function () {
    function AppComponent(callService) {
        this.callService = callService;
    }
    Object.defineProperty(AppComponent.prototype, "error", {
        get: function () {
            return this.callService.error;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AppComponent.prototype, "isBusy", {
        get: function () {
            return this.callService.isBusy;
        },
        enumerable: true,
        configurable: true
    });
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html")
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services__WEBPACK_IMPORTED_MODULE_2__["CallService"]])
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _views_calllist_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./views/calllist.component */ "./src/app/views/calllist.component.ts");
/* harmony import */ var _views_call_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./views/call.component */ "./src/app/views/call.component.ts");








var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"],
                _views_calllist_component__WEBPACK_IMPORTED_MODULE_6__["CallListView"],
                _views_call_component__WEBPACK_IMPORTED_MODULE_7__["CallView"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_4__["AppRoutingModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"]
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/services/callHub.ts":
/*!*************************************!*\
  !*** ./src/app/services/callHub.ts ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _aspnet_signalr__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @aspnet/signalr */ "./node_modules/@aspnet/signalr/dist/esm/index.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");




var CallHub = /** @class */ (function () {
    function CallHub() {
        var _this = this;
        this.newCallMessage = new rxjs__WEBPACK_IMPORTED_MODULE_3__["Subject"]();
        this.answeredCallMessage = new rxjs__WEBPACK_IMPORTED_MODULE_3__["Subject"]();
        this.client = new _aspnet_signalr__WEBPACK_IMPORTED_MODULE_1__["HubConnectionBuilder"]()
            .withUrl("/api/call-hub")
            .build();
        this.client.on("NewCall", function (call) {
            _this.newCallMessage.next(call);
        });
        this.client.on("CallAnswered", function (call) {
            _this.answeredCallMessage.next(call);
        });
    }
    CallHub.prototype.NewCallMessage = function () {
        return this.newCallMessage.asObservable();
    };
    CallHub.prototype.AnsweredCallMessage = function () {
        return this.answeredCallMessage.asObservable();
    };
    CallHub.prototype.resolveCall = function (call) {
        this.client.invoke("CallAnswered", call);
    };
    CallHub.prototype.start = function () {
        this.client.start();
    };
    CallHub = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], CallHub);
    return CallHub;
}());
/* harmony default export */ __webpack_exports__["default"] = (CallHub);


/***/ }),

/***/ "./src/app/services/callService.ts":
/*!*****************************************!*\
  !*** ./src/app/services/callService.ts ***!
  \*****************************************/
/*! exports provided: CallService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CallService", function() { return CallService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _callHub__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./callHub */ "./src/app/services/callHub.ts");






var CallService = /** @class */ (function () {
    function CallService(http, callHub) {
        var _this = this;
        this.http = http;
        this.callHub = callHub;
        this.isLoaded = false;
        this.calls = [];
        this.error = "";
        this.isBusy = false;
        this.callHub.NewCallMessage()
            .subscribe(function (call) { return _this.addCall(call); });
        this.callHub.AnsweredCallMessage()
            .subscribe(function (call) { return _this.removeCall(call); });
    }
    CallService.prototype.load = function () {
        var _this = this;
        this.isBusy = true;
        if (this.isLoaded) {
            return rxjs__WEBPACK_IMPORTED_MODULE_2__["Observable"].create(function (o) {
                _this.isBusy = false;
                o.next(true);
                o.complete();
            });
        }
        else {
            return this.http.get("/api/calls")
                .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (data) {
                _this.isBusy = false;
                _this.calls = data;
                _this.callHub.start();
                _this.isLoaded = true;
                return true;
            }));
        }
    };
    CallService.prototype.findCall = function (id) { return this.calls.find(function (c) { return c.id == id; }); };
    CallService.prototype.getCall = function (id) {
        var _this = this;
        this.isBusy = true;
        if (this.isLoaded) {
            return rxjs__WEBPACK_IMPORTED_MODULE_2__["Observable"].create(function (ob) {
                _this.isBusy = false;
                ob.next(_this.findCall(id));
                ob.complete();
            });
        }
        else {
            return rxjs__WEBPACK_IMPORTED_MODULE_2__["Observable"].create(function (ob) {
                _this.load().subscribe(function (success) {
                    _this.isBusy = false;
                    ob.next(_this.findCall(id));
                    ob.complete();
                });
            });
        }
    };
    CallService.prototype.addCall = function (call) {
        var _this = this;
        if (this.isLoaded) {
            this.calls.push(call);
        }
        else {
            this.load().subscribe(function (success) {
                _this.calls.push(call);
            });
        }
    };
    CallService.prototype.removeCall = function (call) {
        var index = this.calls.findIndex(function (c) { return c.id === call.id; });
        if (index > -1) {
            this.calls.splice(index, 1);
        }
    };
    CallService.prototype.markAsAnswered = function (call) {
        var _this = this;
        this.isBusy = true;
        return this.http.patch("/api/calls/" + call.id + "/answer", null)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (data) {
            _this.removeCall(call);
            _this.isBusy = false;
            _this.callHub.resolveCall(call);
            return true;
        }));
    };
    CallService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root',
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"], _callHub__WEBPACK_IMPORTED_MODULE_5__["default"]])
    ], CallService);
    return CallService;
}());



/***/ }),

/***/ "./src/app/services/index.ts":
/*!***********************************!*\
  !*** ./src/app/services/index.ts ***!
  \***********************************/
/*! exports provided: CallService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _callService__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./callService */ "./src/app/services/callService.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "CallService", function() { return _callService__WEBPACK_IMPORTED_MODULE_0__["CallService"]; });




/***/ }),

/***/ "./src/app/views/call.component.html":
/*!*******************************************!*\
  !*** ./src/app/views/call.component.html ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div>\r\n  <div><a routerLink=\"/call-list\" class=\"btn btn-sm btn-secondary\">Back</a></div>\r\n  <table class=\"table\" *ngIf=\"call\">\r\n    <tr>\r\n      <td>Name</td>\r\n      <td>{{ call.name }}</td>\r\n    </tr>\r\n    <tr>\r\n      <td>Email</td>\r\n      <td>{{ call.email }}</td>\r\n    </tr>\r\n    <tr>\r\n      <td>Name</td>\r\n      <td>{{ call.callTime | date }}</td>\r\n    </tr>\r\n    <tr>\r\n      <td>Problem</td>\r\n      <td>{{ call.problem }}</td>\r\n    </tr>\r\n    <tr>\r\n      <td colspan=\"2\"><button class=\"btn btn-success\" (click)=\"answer()\">Marked Answered</button></td>\r\n    </tr>\r\n  </table>\r\n</div>"

/***/ }),

/***/ "./src/app/views/call.component.ts":
/*!*****************************************!*\
  !*** ./src/app/views/call.component.ts ***!
  \*****************************************/
/*! exports provided: CallView */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CallView", function() { return CallView; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services */ "./src/app/services/index.ts");




var CallView = /** @class */ (function () {
    function CallView(route, callService, router) {
        this.route = route;
        this.callService = callService;
        this.router = router;
        this.call = {};
    }
    CallView.prototype.ngOnInit = function () {
        var _this = this;
        this.callService.getCall(this.route.snapshot.params.id)
            .subscribe(function (call) {
            if (!call) {
                _this.router.navigate(['/call-list']);
            }
            _this.call = call;
        }, function () {
            _this.router.navigate(['/call-list']);
        });
    };
    CallView.prototype.answer = function () {
        var _this = this;
        this.callService.markAsAnswered(this.call)
            .subscribe(function (success) {
            _this.router.navigate(['/call-list']);
        });
    };
    CallView = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            template: __webpack_require__(/*! ./call.component.html */ "./src/app/views/call.component.html")
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"], _services__WEBPACK_IMPORTED_MODULE_3__["CallService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], CallView);
    return CallView;
}());



/***/ }),

/***/ "./src/app/views/calllist.component.html":
/*!***********************************************!*\
  !*** ./src/app/views/calllist.component.html ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\r\n  <div class=\"col-10 offset-1\">\r\n    <h3>Call Log</h3>\r\n    <table class=\"table table-striped table-bordered\">\r\n      <thead>\r\n        <tr>\r\n          <th>From</th>\r\n          <th>Email</th>\r\n          <th>Call Time</th>\r\n          <th></th>\r\n        </tr>\r\n      </thead>\r\n      <tbody>\r\n        <tr *ngFor=\"let c of calls\">\r\n          <td>{{ c.name }}</td>\r\n          <td>{{ c.email }}</td>\r\n          <td>{{ c.callTime | date }}</td>\r\n          <td>\r\n            <a routerLink=\"/call/{{c.id}}\" class=\"btn btn-sm btn-warning\">Open</a>\r\n          <!--<router-link :to=\"{ name: 'call', params: { call: c }}\" class=\"btn btn-sm btn-warning\">Open</router-link>--></td>\r\n        </tr>\r\n      </tbody>\r\n    </table>\r\n  </div>\r\n</div>"

/***/ }),

/***/ "./src/app/views/calllist.component.ts":
/*!*********************************************!*\
  !*** ./src/app/views/calllist.component.ts ***!
  \*********************************************/
/*! exports provided: CallListView */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CallListView", function() { return CallListView; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services */ "./src/app/services/index.ts");



var CallListView = /** @class */ (function () {
    function CallListView(callService) {
        this.callService = callService;
        this.calls = [];
    }
    CallListView.prototype.ngAfterContentInit = function () {
        var _this = this;
        this.callService.load()
            .subscribe(function (success) {
            _this.calls = _this.callService.calls;
        });
    };
    CallListView = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            template: __webpack_require__(/*! ./calllist.component.html */ "./src/app/views/calllist.component.html")
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services__WEBPACK_IMPORTED_MODULE_2__["CallService"]])
    ], CallListView);
    return CallListView;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! D:\courses\SignalR-Angular\Example\After\TheCallCenter\client\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map