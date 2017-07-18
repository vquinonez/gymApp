webpackJsonp([1,5],{

/***/ 141:
/***/ (function(module, exports) {

function webpackEmptyContext(req) {
	throw new Error("Cannot find module '" + req + "'.");
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = 141;


/***/ }),

/***/ 142:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__(151);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__(153);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__(162);




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["a" /* enableProdMode */])();
}
__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 152:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(5);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = (function () {
    function AppComponent() {
        this.title = 'app works!';
    }
    return AppComponent;
}());
AppComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* Component */])({
        selector: 'app-root',
        template: __webpack_require__(229),
        styles: [__webpack_require__(217)]
    })
], AppComponent);

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 153:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(150);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__(90);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_router__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_component__ = __webpack_require__(152);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__login_login_component__ = __webpack_require__(158);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__general_gyms_general_gyms_component__ = __webpack_require__(154);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__sidebar_sidebar_component__ = __webpack_require__(161);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__list_items_list_items_component__ = __webpack_require__(157);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__gym_info_gym_info_component__ = __webpack_require__(156);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__general_members_general_members_component__ = __webpack_require__(155);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__member_info_member_info_component__ = __webpack_require__(159);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__pipes_fields_filter_pipe__ = __webpack_require__(160);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};














var appRoutes = [
    { path: 'login', component: __WEBPACK_IMPORTED_MODULE_6__login_login_component__["a" /* LoginComponent */] },
    { path: 'gyms', component: __WEBPACK_IMPORTED_MODULE_7__general_gyms_general_gyms_component__["a" /* GeneralGymsComponent */] },
    { path: 'gyms/:name', component: __WEBPACK_IMPORTED_MODULE_10__gym_info_gym_info_component__["a" /* GymInfoComponent */] },
    { path: 'members', component: __WEBPACK_IMPORTED_MODULE_11__general_members_general_members_component__["a" /* GeneralMembersComponent */] },
    { path: 'members/:id', component: __WEBPACK_IMPORTED_MODULE_12__member_info_member_info_component__["a" /* MemberInfoComponent */] },
    { path: '',
        redirectTo: 'login',
        pathMatch: 'full'
    }
];
var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["b" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* AppComponent */],
            __WEBPACK_IMPORTED_MODULE_6__login_login_component__["a" /* LoginComponent */],
            __WEBPACK_IMPORTED_MODULE_7__general_gyms_general_gyms_component__["a" /* GeneralGymsComponent */],
            __WEBPACK_IMPORTED_MODULE_8__sidebar_sidebar_component__["a" /* SidebarComponent */],
            __WEBPACK_IMPORTED_MODULE_9__list_items_list_items_component__["a" /* ListItemsComponent */],
            __WEBPACK_IMPORTED_MODULE_10__gym_info_gym_info_component__["a" /* GymInfoComponent */],
            __WEBPACK_IMPORTED_MODULE_11__general_members_general_members_component__["a" /* GeneralMembersComponent */],
            __WEBPACK_IMPORTED_MODULE_12__member_info_member_info_component__["a" /* MemberInfoComponent */],
            __WEBPACK_IMPORTED_MODULE_13__pipes_fields_filter_pipe__["a" /* FieldsFilterPipe */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */],
            __WEBPACK_IMPORTED_MODULE_3__angular_http__["a" /* HttpModule */],
            __WEBPACK_IMPORTED_MODULE_4__angular_router__["a" /* RouterModule */].forRoot(appRoutes)
        ],
        providers: [],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* AppComponent */]]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 154:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_data_manager_service__ = __webpack_require__(31);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GeneralGymsComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var GeneralGymsComponent = (function () {
    //Initialize router
    function GeneralGymsComponent(dataManager, router) {
        this.dataManager = dataManager;
        this.router = router;
    }
    //Redirect to login if it's not login
    GeneralGymsComponent.prototype.ngOnInit = function () {
        var _this = this;
        if (!this.isLogin())
            this.router.navigate(['/login']);
        this.dataManager.getData('/assets/data/gyms.json').subscribe(function (res) {
            _this.gymsList = res;
            _this.formatTableList();
        });
    };
    GeneralGymsComponent.prototype.isLogin = function () {
        if (localStorage.getItem("user") !== null) {
            return true;
        }
        else if (sessionStorage.getItem("user") !== null) {
            return true;
        }
        else {
            return false;
        }
    };
    GeneralGymsComponent.prototype.formatTableList = function () {
        var dataSet = {
            header: ['Name', 'Phone', 'Address'],
            rows: []
        };
        for (var val in this.gymsList) {
            dataSet.rows.push(this.formatTableRow(this.gymsList[val].id, this.gymsList[val].gym_name, this.gymsList[val].phone, this.gymsList[val].address));
        }
        return dataSet;
    };
    GeneralGymsComponent.prototype.formatTableRow = function (id, name, phone, address) {
        var row = {
            items: []
        }, item;
        row.items.push({
            header: 'Name',
            value: name,
            href: 'gyms/' + name
        });
        row.items.push({
            header: 'Phone',
            value: phone
        });
        row.items.push({
            header: 'Address',
            value: address
        });
        row.href = 'gyms/' + id;
        return row;
    };
    return GeneralGymsComponent;
}());
GeneralGymsComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* Component */])({
        selector: 'app-general-gyms',
        template: __webpack_require__(230),
        styles: [__webpack_require__(218)],
        providers: [
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* RouterModule */],
            __WEBPACK_IMPORTED_MODULE_2__services_data_manager_service__["a" /* DataManagerService */]
        ]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__services_data_manager_service__["a" /* DataManagerService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_data_manager_service__["a" /* DataManagerService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === "function" && _b || Object])
], GeneralGymsComponent);

var _a, _b;
//# sourceMappingURL=general-gyms.component.js.map

/***/ }),

/***/ 155:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_data_manager_service__ = __webpack_require__(31);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GeneralMembersComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var GeneralMembersComponent = (function () {
    function GeneralMembersComponent(memberManager, gymManager, router) {
        this.memberManager = memberManager;
        this.gymManager = gymManager;
        this.router = router;
    }
    GeneralMembersComponent.prototype.ngOnInit = function () {
        var _this = this;
        if (!this.isLogin())
            this.router.navigate(['/login']);
        this.memberManager.getData('/assets/data/members.json').subscribe(function (res) {
            _this.membersList = res;
            _this.formatTableList();
        });
        this.gymManager.getData('/assets/data/gyms.json').subscribe(function (res) {
            _this.gymsList = res;
            _this.formatTableList();
        });
    };
    GeneralMembersComponent.prototype.isLogin = function () {
        if (localStorage.getItem("user") !== null) {
            return true;
        }
        else if (sessionStorage.getItem("user") !== null) {
            return true;
        }
        else {
            return false;
        }
    };
    GeneralMembersComponent.prototype.getGymName = function (id) {
        var gymName = '';
        for (var val in this.gymsList) {
            if (this.gymsList[val].id == id) {
                gymName = this.gymsList[val].gym_name;
                break;
            }
        }
        return gymName;
    };
    GeneralMembersComponent.prototype.formatTableList = function () {
        var dataSet = {
            header: ['Name', 'Gym', 'Register date', 'Difficulty'],
            rows: []
        };
        if ((this.membersList != undefined) && (this.gymsList != undefined)) {
            for (var val in this.membersList) {
                dataSet.rows.push(this.formatTableRow(this.membersList[val].id, this.membersList[val].name.first + ' ' + this.membersList[val].name.last, this.membersList[val].registered, this.getGymName(this.membersList[val].affilated_gym), this.membersList[val].difficulty_level));
            }
        }
        return dataSet;
    };
    GeneralMembersComponent.prototype.formatTableRow = function (id, name, register, gym, difficulty) {
        var row = {
            items: []
        }, item;
        row.items.push({
            header: 'Name',
            value: name,
            href: 'members/' + id
        });
        row.items.push({
            header: 'Gym',
            value: gym,
            href: 'gyms/' + gym
        });
        row.items.push({
            header: 'Register date',
            value: register
        });
        row.items.push({
            header: 'Difficulty',
            value: difficulty
        });
        row.href = 'gyms/' + id;
        return row;
    };
    return GeneralMembersComponent;
}());
GeneralMembersComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* Component */])({
        selector: 'app-general-members',
        template: __webpack_require__(231),
        styles: [__webpack_require__(219)],
        providers: [
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* RouterModule */],
            __WEBPACK_IMPORTED_MODULE_2__services_data_manager_service__["a" /* DataManagerService */]
        ]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__services_data_manager_service__["a" /* DataManagerService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_data_manager_service__["a" /* DataManagerService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__services_data_manager_service__["a" /* DataManagerService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_data_manager_service__["a" /* DataManagerService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === "function" && _c || Object])
], GeneralMembersComponent);

var _a, _b, _c;
//# sourceMappingURL=general-members.component.js.map

/***/ }),

/***/ 156:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_data_manager_service__ = __webpack_require__(31);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GymInfoComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var GymInfoComponent = (function () {
    function GymInfoComponent(gymManager, memberManager, router, activatedRoute) {
        this.gymManager = gymManager;
        this.memberManager = memberManager;
        this.router = router;
        this.activatedRoute = activatedRoute;
        this.gymName = '';
        this.gymInfo = {
            id: '',
            gym_name: '',
            address: '',
            phone: '',
            email: '',
            description: ''
        };
    }
    GymInfoComponent.prototype.ngOnInit = function () {
        var _this = this;
        if (!this.isLogin())
            this.router.navigate(['/login']);
        this.activatedRoute.params.subscribe(function (params) {
            _this.gymName = params.name;
            _this.gymManager.getData('/assets/data/gyms.json')
                .subscribe(function (res) {
                for (var _i = 0, res_1 = res; _i < res_1.length; _i++) {
                    var val = res_1[_i];
                    if (val.gym_name == _this.gymName) {
                        _this.gymInfo = val;
                        return 0;
                    }
                }
            });
            _this.memberManager.getData('/assets/data/members.json')
                .subscribe(function (res) {
                _this.membersLists = res;
                _this.formatTableList();
            });
        });
    };
    GymInfoComponent.prototype.isLogin = function () {
        if (localStorage.getItem("user") !== null) {
            return true;
        }
        else if (sessionStorage.getItem("user") !== null) {
            return true;
        }
        else {
            return false;
        }
    };
    GymInfoComponent.prototype.membersInGym = function (id) {
        var count = 0;
        if (this.membersLists != undefined) {
            for (var _i = 0, _a = this.membersLists; _i < _a.length; _i++) {
                var elem = _a[_i];
                if (elem.affilated_gym == id)
                    count++;
            }
        }
        return count;
    };
    GymInfoComponent.prototype.formatTableList = function () {
        var dataSet = {
            header: ['Name', 'Phone', 'Register date', 'Difficulty'],
            rows: []
        };
        for (var val in this.membersLists) {
            if (this.membersLists[val].affilated_gym === this.gymInfo.id)
                dataSet.rows.push(this.formatTableRow(this.membersLists[val].id, this.membersLists[val].name.first + ' ' + this.membersLists[val].name.last, this.membersLists[val].phone, this.membersLists[val].difficulty_level, this.membersLists[val].registered));
        }
        return dataSet;
    };
    GymInfoComponent.prototype.formatTableRow = function (id, name, phone, difficulty, register) {
        var row = {
            items: []
        }, item;
        row.items.push({
            header: 'Name',
            value: name,
            href: 'members/' + id
        });
        row.items.push({
            header: 'Phone',
            value: phone
        });
        row.items.push({
            header: 'Register date',
            value: register
        });
        row.items.push({
            header: 'Difficulty',
            value: difficulty
        });
        row.href = 'members/' + id;
        return row;
    };
    return GymInfoComponent;
}());
GymInfoComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* Component */])({
        selector: 'app-gym-info',
        template: __webpack_require__(232),
        styles: [__webpack_require__(220)],
        providers: [
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* RouterModule */],
            __WEBPACK_IMPORTED_MODULE_2__services_data_manager_service__["a" /* DataManagerService */]
        ]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__services_data_manager_service__["a" /* DataManagerService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_data_manager_service__["a" /* DataManagerService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__services_data_manager_service__["a" /* DataManagerService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_data_manager_service__["a" /* DataManagerService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* ActivatedRoute */]) === "function" && _d || Object])
], GymInfoComponent);

var _a, _b, _c, _d;
//# sourceMappingURL=gym-info.component.js.map

/***/ }),

/***/ 157:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_BehaviorSubject__ = __webpack_require__(50);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_BehaviorSubject___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs_BehaviorSubject__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ListItemsComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ListItemsComponent = (function () {
    function ListItemsComponent() {
        this._dataSet = new __WEBPACK_IMPORTED_MODULE_1_rxjs_BehaviorSubject__["BehaviorSubject"]({ header: [], rows: [] });
        this.sortField = '';
    }
    Object.defineProperty(ListItemsComponent.prototype, "dataSet", {
        get: function () {
            return this._dataSet.getValue();
        },
        set: function (value) {
            this._dataSet.next(value);
        },
        enumerable: true,
        configurable: true
    });
    ListItemsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this._dataSet
            .subscribe(function (x) {
            _this.tableSet = x;
        });
    };
    ListItemsComponent.prototype.generateURL = function (val) {
        if (val === void 0) { val = ''; }
        return val;
    };
    ListItemsComponent.prototype.headerExist = function (val) {
        var res = false;
        for (var _i = 0, _a = this.tableSet.header; _i < _a.length; _i++) {
            var head = _a[_i];
            if (head == val) {
                res = true;
            }
            break;
        }
        return res;
    };
    ListItemsComponent.prototype.getFieldVal = function (header, item) {
        var res = '';
        for (var _i = 0, item_1 = item; _i < item_1.length; _i++) {
            var field = item_1[_i];
            if (field.header == header)
                res = field.value;
        }
        return res;
    };
    ListItemsComponent.prototype.sortFields = function (field) {
        this.sortField = field;
    };
    return ListItemsComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Input */])(),
    __metadata("design:type", Object),
    __metadata("design:paramtypes", [Object])
], ListItemsComponent.prototype, "dataSet", null);
ListItemsComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* Component */])({
        selector: 'app-list-items',
        template: __webpack_require__(233),
        styles: [__webpack_require__(221)]
    }),
    __metadata("design:paramtypes", [])
], ListItemsComponent);

//# sourceMappingURL=list-items.component.js.map

/***/ }),

/***/ 158:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ts_md5_dist_md5__ = __webpack_require__(499);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ts_md5_dist_md5___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_ts_md5_dist_md5__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_data_manager_service__ = __webpack_require__(31);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var LoginComponent = (function () {
    //Initialize datManager and router objects
    function LoginComponent(dataManager, router) {
        this.dataManager = dataManager;
        this.router = router;
    }
    LoginComponent.prototype.ngOnInit = function () {
        var _this = this;
        if (this.isLogin()) {
            this.router.navigate(['/gyms']);
        }
        //Get Data from JSON and assign it to IUser Array
        this.dataManager.getData('/assets/data/users.json').subscribe(function (res) {
            _this.usersList = res;
        });
    };
    //Compare Data with users 
    LoginComponent.prototype.onClickLogin = function (e) {
        var _this = this;
        var user = document.getElementById('user-name').value, pass = document.getElementById('user-pass').value;
        this.usersList.forEach(function (value) {
            if ((value.user_name == user) && (value.pass == __WEBPACK_IMPORTED_MODULE_2_ts_md5_dist_md5__["Md5"].hashStr(pass))) {
                _this.createCookie(value);
                return false;
            }
        });
    };
    //Creates session and redirect to Gyms component
    LoginComponent.prototype.createCookie = function (user) {
        var remember = document.getElementById('remember').checked;
        if (remember) {
            localStorage.setItem('user', JSON.stringify(user));
        }
        else {
            sessionStorage.setItem('user', JSON.stringify(user));
        }
        this.router.navigate(['/gyms']);
        return JSON.stringify(user);
    };
    LoginComponent.prototype.isLogin = function () {
        if (localStorage.getItem("user") !== null) {
            return true;
        }
        else if (sessionStorage.getItem("user") !== null) {
            return true;
        }
        else {
            return false;
        }
    };
    return LoginComponent;
}());
LoginComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* Component */])({
        selector: 'app-login',
        template: __webpack_require__(234),
        styles: [__webpack_require__(222)],
        providers: [
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* RouterModule */],
            __WEBPACK_IMPORTED_MODULE_3__services_data_manager_service__["a" /* DataManagerService */]
        ]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_3__services_data_manager_service__["a" /* DataManagerService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__services_data_manager_service__["a" /* DataManagerService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === "function" && _b || Object])
], LoginComponent);

var _a, _b;
//# sourceMappingURL=login.component.js.map

/***/ }),

/***/ 159:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_data_manager_service__ = __webpack_require__(31);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MemberInfoComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var MemberInfoComponent = (function () {
    function MemberInfoComponent(gymManager, memberManager, router, activatedRoute) {
        this.gymManager = gymManager;
        this.memberManager = memberManager;
        this.router = router;
        this.activatedRoute = activatedRoute;
        this.memberID = '';
        this.memberInfo = {
            id: '',
            name: {
                last: '',
                first: ''
            },
            email: '',
            phone: '',
            address: '',
            registered: '',
            difficulty_level: 0,
            affilated_gym: '',
            profile_img: ''
        };
    }
    MemberInfoComponent.prototype.ngOnInit = function () {
        var _this = this;
        if (!this.isLogin())
            this.router.navigate(['/login']);
        this.activatedRoute.params.subscribe(function (params) {
            _this.memberID = params.id;
            _this.memberManager.getData('/assets/data/members.json')
                .subscribe(function (res) {
                for (var _i = 0, res_1 = res; _i < res_1.length; _i++) {
                    var val = res_1[_i];
                    if (val.id == _this.memberID) {
                        _this.memberInfo = val;
                        return 0;
                    }
                }
            });
            _this.gymManager.getData('/assets/data/gyms.json')
                .subscribe(function (res) {
                _this.gymsList = res;
            });
        });
    };
    MemberInfoComponent.prototype.isLogin = function () {
        if (localStorage.getItem("user") !== null) {
            return true;
        }
        else if (sessionStorage.getItem("user") !== null) {
            return true;
        }
        else {
            return false;
        }
    };
    MemberInfoComponent.prototype.getGymName = function (id) {
        var gymName = '';
        for (var val in this.gymsList) {
            if (this.gymsList[val].id == id) {
                gymName = this.gymsList[val].gym_name;
                break;
            }
        }
        return gymName;
    };
    return MemberInfoComponent;
}());
MemberInfoComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* Component */])({
        selector: 'app-member-info',
        template: __webpack_require__(235),
        styles: [__webpack_require__(223)],
        providers: [
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* RouterModule */],
            __WEBPACK_IMPORTED_MODULE_2__services_data_manager_service__["a" /* DataManagerService */]
        ]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__services_data_manager_service__["a" /* DataManagerService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_data_manager_service__["a" /* DataManagerService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__services_data_manager_service__["a" /* DataManagerService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_data_manager_service__["a" /* DataManagerService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* ActivatedRoute */]) === "function" && _d || Object])
], MemberInfoComponent);

var _a, _b, _c, _d;
//# sourceMappingURL=member-info.component.js.map

/***/ }),

/***/ 160:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(5);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FieldsFilterPipe; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var FieldsFilterPipe = (function () {
    function FieldsFilterPipe() {
    }
    FieldsFilterPipe.prototype.transform = function (value, args) {
        var _this = this;
        value = value.sort(function (a, b) {
            if (_this.getFieldVal(args, a.items) > _this.getFieldVal(args, b.items))
                return 1;
            else if (_this.getFieldVal(args, a.items) < _this.getFieldVal(args, b.items))
                return -1;
            return 0;
        });
        console.log(value);
        return value;
    };
    FieldsFilterPipe.prototype.getFieldVal = function (header, item) {
        var res = '';
        for (var _i = 0, item_1 = item; _i < item_1.length; _i++) {
            var field = item_1[_i];
            if (field.header == header)
                res = field.value;
        }
        return res;
    };
    return FieldsFilterPipe;
}());
FieldsFilterPipe = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["S" /* Pipe */])({
        name: 'fieldsFilter'
    })
], FieldsFilterPipe);

//# sourceMappingURL=fields-filter.pipe.js.map

/***/ }),

/***/ 161:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(5);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SidebarComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var SidebarComponent = (function () {
    function SidebarComponent() {
    }
    SidebarComponent.prototype.ngOnInit = function () {
    };
    SidebarComponent.prototype.logOut = function () {
        localStorage.removeItem('user');
        sessionStorage.removeItem('user');
    };
    SidebarComponent.prototype.isLogin = function () {
        if (localStorage.getItem("user") !== null) {
            return true;
        }
        else if (sessionStorage.getItem("user") !== null) {
            return true;
        }
        else {
            return false;
        }
    };
    return SidebarComponent;
}());
SidebarComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* Component */])({
        selector: 'app-sidebar',
        template: __webpack_require__(236),
        styles: [__webpack_require__(224)]
    }),
    __metadata("design:paramtypes", [])
], SidebarComponent);

//# sourceMappingURL=sidebar.component.js.map

/***/ }),

/***/ 162:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
var environment = {
    production: true
};
//# sourceMappingURL=environment.js.map

/***/ }),

/***/ 217:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(15)(false);
// imports


// module
exports.push([module.i, ".sidebar-wrapper{\r\n\tpadding: 0;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 218:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(15)(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 219:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(15)(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 220:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(15)(false);
// imports


// module
exports.push([module.i, ".info-data label{\r\n\tdisplay: block;\r\n}\r\n\r\n.header-info{\r\n\tfont-weight: bold;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 221:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(15)(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 222:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(15)(false);
// imports


// module
exports.push([module.i, ".login{\r\n\tborder-width: 2px;\r\n\tborder-style: solid;\r\n\tpadding: 2%;\r\n\tborder-radius: 10px;\r\n\tborder-color: #ebebeb;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 223:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(15)(false);
// imports


// module
exports.push([module.i, ".info-data label{\r\n\tdisplay: block;\r\n}\r\n\r\n.header-info{\r\n\tfont-weight: bold;\r\n}\r\n\r\nimg{\r\n\twidth: 100%;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 224:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(15)(false);
// imports


// module
exports.push([module.i, "\r\n.sidebar{\r\n\theight: 100vh;\r\n\tbackground-color: #323232;\r\n\tcolor: #d6d6d6;\r\n\tpadding: 0;\r\n\tpadding-top: 1%;\r\n\tborder-right-style: solid;\r\n    border-right-width: 2px;\r\n    border-color: #848484;\r\n\tposition: fixed;  \r\n\twidth: 16%;  \r\n}\r\n\r\n.sidebar h2{\r\n\ttext-align: center;\r\n\tmargin-bottom: 10%;\r\n}\r\n\r\n.sidebar ul{\r\n\tpadding: 0;\r\n\tlist-style: none;\r\n}\r\n\r\n.sidebar ul li a{\r\n\twidth: 100%;\r\n\tdisplay: block;\r\n\tcolor: #d6d6d6;\r\n\tpadding: 10px;\r\n\tfont-size: 18px;\r\n}\r\n\r\n.sidebar ul li a:hover, .sidebar ul li a:focus, .sidebar ul li a.active{\r\n\ttext-decoration: none;\r\n\tbackground-color: #d6d6d6;\r\n\tcolor: #323232;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 229:
/***/ (function(module, exports) {

module.exports = "<!--<h1>\n  {{title}}\n</h1>-->\n\n<div class=\" container-fluid app-layout\">\n\t<div class=\"row\">\n\t\t<div class=\"col-2 sidebar-wrapper\">\n\t\t\t<app-sidebar></app-sidebar>\n\t\t</div>\n\t\t<div class=\"col-md-8\">\n\t\t\t<router-outlet></router-outlet>\n\t\t\t<!--<div class=\"col-12\">\n\t\t\t\t<h2>Gym List</h2>\n\t\t\t\t<div class=\"col-10\" >\n\t\t\t\t\t<app-list-items [listItems] = \"tableList\" ></app-list-items>\n\t\t        </div>\n\t\t\t</div>-->\n\t\t</div>\n\t</div>\n</div>\n\n"

/***/ }),

/***/ 230:
/***/ (function(module, exports) {

module.exports = "<div class=\"col-12\">\n\t<h2>Gym List</h2>\n\t<div class=\"col-10\" >\n\t\t<app-list-items [dataSet] = \"formatTableList()\" ></app-list-items>\n    </div>\n</div>\n\n"

/***/ }),

/***/ 231:
/***/ (function(module, exports) {

module.exports = "<div class=\"col-12\">\n\t<h2>Members List</h2>\n\t<div class=\"col-10\" >\n\t\t<app-list-items [dataSet] = \"formatTableList()\" ></app-list-items>\n    </div>\n</div>\n"

/***/ }),

/***/ 232:
/***/ (function(module, exports) {

module.exports = "<div class=\"col-12\">\n\t<h2>{{ gymInfo.gym_name }}</h2>\n\t<div class=\"gym-info row\">\n\t\t<div class=\"col-6 info-data\">\n\t\t\t<label><span class=\"header-info\">Address: </span>{{ gymInfo.address }}</label>\n\t\t\t<label><span class=\"header-info\">Phone number: </span>{{ gymInfo.phone }}</label>\n\t\t\t<label><span class=\"header-info\">Email: </span>{{ gymInfo.email }}</label>\n\t\t\t<label><span class=\"header-info\">Members: </span>{{membersInGym( gymInfo.id )}}</label>\n\t    </div>\n\t    <div class=\"col-6\" >\n\t    \t<span class=\"header-info\">Descripcion: </span>\n\t\t\t<p>{{ gymInfo.description }}</p>\n\t    </div>\n\t</div>\n\n\t<app-list-items [dataSet] = \"formatTableList()\" ></app-list-items>\n</div>\n"

/***/ }),

/***/ 233:
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\n\t<table class=\"col-12 table table-striped\">\n\t\t<thead class=\"thead-inverse\">\n\t\t\t<tr>\n\t\t\t\t<th *ngFor = \"let head of tableSet.header;\">\n\t\t\t\t\t<a (click)=\"sortFields(head)\">{{ head }}</a>\n\t\t\t\t</th>\n\t\t\t</tr>\n\t\t</thead>\n\t\t<tbody>\n\t\t\t<tr *ngFor = \"let row of tableSet.rows | fieldsFilter: sortField;\">\n\t\t\t\t<td *ngFor = \"let item of row.items;\">\n\t\t\t\t\t<div *ngIf=\"item.href; then thenBlock else elseBlock\"></div>\n\t\t\t\t\t<ng-template #thenBlock>\n\t\t\t\t\t\t<a href=\"{{ generateURL(item.href) }}\" *ngIf=\"item.href\">{{item.value}}</a>\n\t\t\t\t\t</ng-template>\n\t\t\t\t\t<ng-template #elseBlock>\n\t\t\t\t\t\t{{item.value}}\n\t\t\t\t\t</ng-template>\n\t\t\t\t</td>\n\t\t\t</tr>\n\t\t</tbody>\n\t</table>\n</div>"

/***/ }),

/***/ 234:
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n\t<div class=\"row justify-content-md-center\">\n\t\t<div class=\"login col-md-4 \">\n\t\t\t<div class=\"form-group\">\n\t\t\t \t<label for=\"user-name\">Name</label>\n\t\t\t \t<input type=\"text\" id=\"user-name\" class=\"form-control\" />\n\t\t\t</div>\n\t\t\t<div class=\"form-group\">\n\t\t\t \t<label for=\"user-pass\">Password</label>\n\t\t\t \t<input type=\"password\" id=\"user-pass\" class=\"form-control\" />\n\t\t\t</div>\n\t\t\t<div class=\"form-group\">\n\t\t\t \t<input type=\"checkbox\" id=\"remember\" />\n\t\t\t \t<label for=\"remember\">Remember me</label>\n\t\t\t</div>\n\t\t\t      \n\t\t\t<button id=\"log-in\" class=\"btn btn-primary\" (click) = \"onClickLogin($event)\">Log in</button>\n\n\t\t</div>\n\t</div>\n</div>"

/***/ }),

/***/ 235:
/***/ (function(module, exports) {

module.exports = "<div class=\"col-12\">\n\t<h2>{{ memberInfo.name.first + ' ' + memberInfo.name.last }}</h2>\n\t<div class=\"gym-info row\">\n\t    <div class=\"col-3\" >\n\t    \t<img src=\"{{memberInfo.profile_img}}\">\n\t    </div>\n\t\t<div class=\"col-9 info-data\">\n\t\t\t<label><span class=\"header-info\">Level difficulty: </span>{{ memberInfo.difficulty_level }}</label>\n\t\t\t<label><span class=\"header-info\">Address: </span>{{ memberInfo.address }}</label>\n\t\t\t<label><span class=\"header-info\">Phone number: </span>{{ memberInfo.phone }}</label>\n\t\t\t<label><span class=\"header-info\">Email: </span>{{ memberInfo.email }}</label>\n\t\t\t<label><span class=\"header-info\">Register date: </span>{{ memberInfo.registered }}</label>\n\t\t\t<label><span class=\"header-info\">Gym: </span> <a href=\"gyms/{{ getGymName( memberInfo.affilated_gym ) }}\"> {{ getGymName( memberInfo.affilated_gym ) }} </a></label>\n\t    </div>\n\t</div>\n\n</div>\n"

/***/ }),

/***/ 236:
/***/ (function(module, exports) {

module.exports = "\n<div class=\"sidebar\">\n\t<h2> Gym Manager</h2>\n\n\t<ul *ngIf=\"isLogin()\">\n\t\t<li>\n\t\t\t<a routerLink=\"/gyms\" routerLinkActive=\"active\">Gym List</a>\n\t\t</li>\n\t\t<li>\n\t\t\t<a routerLink=\"/members\" routerLinkActive=\"active\">Client List</a>\n\t\t</li>\n\t\t<li class=\"logout\">\n\t\t\t<a href=\"login\" id=\"logout\" (click)=\"logOut()\">LogOut</a>\n\t\t</li>\n\t</ul>\n</div>"

/***/ }),

/***/ 31:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(90);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__ = __webpack_require__(238);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_catch__ = __webpack_require__(104);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_catch___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_catch__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DataManagerService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var DataManagerService = (function () {
    //Initialize HTTP component
    function DataManagerService(http) {
        this.http = http;
    }
    //Get Data from path and return an observable object
    DataManagerService.prototype.getData = function (dataRequest, filterCallBack) {
        if (filterCallBack != undefined) {
            return this.http.get(dataRequest)
                .map(this.extractData)
                .filter(filterCallBack)
                .catch(this.handleError);
        }
        else {
            return this.http.get(dataRequest)
                .map(this.extractData)
                .catch(this.handleError);
        }
    };
    //Format Observable response
    DataManagerService.prototype.extractData = function (res) {
        var body = res.json();
        return body || [];
    };
    //Format Observable Error
    DataManagerService.prototype.handleError = function (error) {
        console.error(error);
        return __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__["Observable"].throw(error);
    };
    return DataManagerService;
}());
DataManagerService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["w" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]) === "function" && _a || Object])
], DataManagerService);

var _a;
//# sourceMappingURL=data-manager.service.js.map

/***/ }),

/***/ 501:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(142);


/***/ })

},[501]);
//# sourceMappingURL=main.bundle.js.map