/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "app/api/(feedback)/get-feedback/route";
exports.ids = ["app/api/(feedback)/get-feedback/route"];
exports.modules = {

/***/ "(rsc)/./node_modules/.pnpm/next@15.3.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/build/webpack/loaders/next-app-loader/index.js?name=app%2Fapi%2F(feedback)%2Fget-feedback%2Froute&page=%2Fapi%2F(feedback)%2Fget-feedback%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2F(feedback)%2Fget-feedback%2Froute.ts&appDir=C%3A%5CUsers%5Ckasau%5COneDrive%5CDesktop%5CBook-Summary%5Csrc%5Capp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=C%3A%5CUsers%5Ckasau%5COneDrive%5CDesktop%5CBook-Summary&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!":
/*!**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/.pnpm/next@15.3.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/build/webpack/loaders/next-app-loader/index.js?name=app%2Fapi%2F(feedback)%2Fget-feedback%2Froute&page=%2Fapi%2F(feedback)%2Fget-feedback%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2F(feedback)%2Fget-feedback%2Froute.ts&appDir=C%3A%5CUsers%5Ckasau%5COneDrive%5CDesktop%5CBook-Summary%5Csrc%5Capp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=C%3A%5CUsers%5Ckasau%5COneDrive%5CDesktop%5CBook-Summary&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D! ***!
  \**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   patchFetch: () => (/* binding */ patchFetch),\n/* harmony export */   routeModule: () => (/* binding */ routeModule),\n/* harmony export */   serverHooks: () => (/* binding */ serverHooks),\n/* harmony export */   workAsyncStorage: () => (/* binding */ workAsyncStorage),\n/* harmony export */   workUnitAsyncStorage: () => (/* binding */ workUnitAsyncStorage)\n/* harmony export */ });\n/* harmony import */ var next_dist_server_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/dist/server/route-modules/app-route/module.compiled */ \"(rsc)/./node_modules/.pnpm/next@15.3.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/server/route-modules/app-route/module.compiled.js\");\n/* harmony import */ var next_dist_server_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_dist_server_route_kind__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/dist/server/route-kind */ \"(rsc)/./node_modules/.pnpm/next@15.3.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/server/route-kind.js\");\n/* harmony import */ var next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/dist/server/lib/patch-fetch */ \"(rsc)/./node_modules/.pnpm/next@15.3.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/server/lib/patch-fetch.js\");\n/* harmony import */ var next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var C_Users_kasau_OneDrive_Desktop_Book_Summary_src_app_api_feedback_get_feedback_route_ts__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./src/app/api/(feedback)/get-feedback/route.ts */ \"(rsc)/./src/app/api/(feedback)/get-feedback/route.ts\");\n\n\n\n\n// We inject the nextConfigOutput here so that we can use them in the route\n// module.\nconst nextConfigOutput = \"\"\nconst routeModule = new next_dist_server_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__.AppRouteRouteModule({\n    definition: {\n        kind: next_dist_server_route_kind__WEBPACK_IMPORTED_MODULE_1__.RouteKind.APP_ROUTE,\n        page: \"/api/(feedback)/get-feedback/route\",\n        pathname: \"/api/get-feedback\",\n        filename: \"route\",\n        bundlePath: \"app/api/(feedback)/get-feedback/route\"\n    },\n    resolvedPagePath: \"C:\\\\Users\\\\kasau\\\\OneDrive\\\\Desktop\\\\Book-Summary\\\\src\\\\app\\\\api\\\\(feedback)\\\\get-feedback\\\\route.ts\",\n    nextConfigOutput,\n    userland: C_Users_kasau_OneDrive_Desktop_Book_Summary_src_app_api_feedback_get_feedback_route_ts__WEBPACK_IMPORTED_MODULE_3__\n});\n// Pull out the exports that we need to expose from the module. This should\n// be eliminated when we've moved the other routes to the new format. These\n// are used to hook into the route.\nconst { workAsyncStorage, workUnitAsyncStorage, serverHooks } = routeModule;\nfunction patchFetch() {\n    return (0,next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__.patchFetch)({\n        workAsyncStorage,\n        workUnitAsyncStorage\n    });\n}\n\n\n//# sourceMappingURL=app-route.js.map//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9ub2RlX21vZHVsZXMvLnBucG0vbmV4dEAxNS4zLjRfcmVhY3QtZG9tQDE4LjMuMV9yZWFjdEAxOC4zLjFfX3JlYWN0QDE4LjMuMS9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2J1aWxkL3dlYnBhY2svbG9hZGVycy9uZXh0LWFwcC1sb2FkZXIvaW5kZXguanM/bmFtZT1hcHAlMkZhcGklMkYoZmVlZGJhY2spJTJGZ2V0LWZlZWRiYWNrJTJGcm91dGUmcGFnZT0lMkZhcGklMkYoZmVlZGJhY2spJTJGZ2V0LWZlZWRiYWNrJTJGcm91dGUmYXBwUGF0aHM9JnBhZ2VQYXRoPXByaXZhdGUtbmV4dC1hcHAtZGlyJTJGYXBpJTJGKGZlZWRiYWNrKSUyRmdldC1mZWVkYmFjayUyRnJvdXRlLnRzJmFwcERpcj1DJTNBJTVDVXNlcnMlNUNrYXNhdSU1Q09uZURyaXZlJTVDRGVza3RvcCU1Q0Jvb2stU3VtbWFyeSU1Q3NyYyU1Q2FwcCZwYWdlRXh0ZW5zaW9ucz10c3gmcGFnZUV4dGVuc2lvbnM9dHMmcGFnZUV4dGVuc2lvbnM9anN4JnBhZ2VFeHRlbnNpb25zPWpzJnJvb3REaXI9QyUzQSU1Q1VzZXJzJTVDa2FzYXUlNUNPbmVEcml2ZSU1Q0Rlc2t0b3AlNUNCb29rLVN1bW1hcnkmaXNEZXY9dHJ1ZSZ0c2NvbmZpZ1BhdGg9dHNjb25maWcuanNvbiZiYXNlUGF0aD0mYXNzZXRQcmVmaXg9Jm5leHRDb25maWdPdXRwdXQ9JnByZWZlcnJlZFJlZ2lvbj0mbWlkZGxld2FyZUNvbmZpZz1lMzAlM0QhIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7O0FBQStGO0FBQ3ZDO0FBQ3FCO0FBQ29EO0FBQ2pJO0FBQ0E7QUFDQTtBQUNBLHdCQUF3Qix5R0FBbUI7QUFDM0M7QUFDQSxjQUFjLGtFQUFTO0FBQ3ZCO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQSxZQUFZO0FBQ1osQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBLFFBQVEsc0RBQXNEO0FBQzlEO0FBQ0EsV0FBVyw0RUFBVztBQUN0QjtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQzBGOztBQUUxRiIsInNvdXJjZXMiOlsiIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEFwcFJvdXRlUm91dGVNb2R1bGUgfSBmcm9tIFwibmV4dC9kaXN0L3NlcnZlci9yb3V0ZS1tb2R1bGVzL2FwcC1yb3V0ZS9tb2R1bGUuY29tcGlsZWRcIjtcbmltcG9ydCB7IFJvdXRlS2luZCB9IGZyb20gXCJuZXh0L2Rpc3Qvc2VydmVyL3JvdXRlLWtpbmRcIjtcbmltcG9ydCB7IHBhdGNoRmV0Y2ggYXMgX3BhdGNoRmV0Y2ggfSBmcm9tIFwibmV4dC9kaXN0L3NlcnZlci9saWIvcGF0Y2gtZmV0Y2hcIjtcbmltcG9ydCAqIGFzIHVzZXJsYW5kIGZyb20gXCJDOlxcXFxVc2Vyc1xcXFxrYXNhdVxcXFxPbmVEcml2ZVxcXFxEZXNrdG9wXFxcXEJvb2stU3VtbWFyeVxcXFxzcmNcXFxcYXBwXFxcXGFwaVxcXFwoZmVlZGJhY2spXFxcXGdldC1mZWVkYmFja1xcXFxyb3V0ZS50c1wiO1xuLy8gV2UgaW5qZWN0IHRoZSBuZXh0Q29uZmlnT3V0cHV0IGhlcmUgc28gdGhhdCB3ZSBjYW4gdXNlIHRoZW0gaW4gdGhlIHJvdXRlXG4vLyBtb2R1bGUuXG5jb25zdCBuZXh0Q29uZmlnT3V0cHV0ID0gXCJcIlxuY29uc3Qgcm91dGVNb2R1bGUgPSBuZXcgQXBwUm91dGVSb3V0ZU1vZHVsZSh7XG4gICAgZGVmaW5pdGlvbjoge1xuICAgICAgICBraW5kOiBSb3V0ZUtpbmQuQVBQX1JPVVRFLFxuICAgICAgICBwYWdlOiBcIi9hcGkvKGZlZWRiYWNrKS9nZXQtZmVlZGJhY2svcm91dGVcIixcbiAgICAgICAgcGF0aG5hbWU6IFwiL2FwaS9nZXQtZmVlZGJhY2tcIixcbiAgICAgICAgZmlsZW5hbWU6IFwicm91dGVcIixcbiAgICAgICAgYnVuZGxlUGF0aDogXCJhcHAvYXBpLyhmZWVkYmFjaykvZ2V0LWZlZWRiYWNrL3JvdXRlXCJcbiAgICB9LFxuICAgIHJlc29sdmVkUGFnZVBhdGg6IFwiQzpcXFxcVXNlcnNcXFxca2FzYXVcXFxcT25lRHJpdmVcXFxcRGVza3RvcFxcXFxCb29rLVN1bW1hcnlcXFxcc3JjXFxcXGFwcFxcXFxhcGlcXFxcKGZlZWRiYWNrKVxcXFxnZXQtZmVlZGJhY2tcXFxccm91dGUudHNcIixcbiAgICBuZXh0Q29uZmlnT3V0cHV0LFxuICAgIHVzZXJsYW5kXG59KTtcbi8vIFB1bGwgb3V0IHRoZSBleHBvcnRzIHRoYXQgd2UgbmVlZCB0byBleHBvc2UgZnJvbSB0aGUgbW9kdWxlLiBUaGlzIHNob3VsZFxuLy8gYmUgZWxpbWluYXRlZCB3aGVuIHdlJ3ZlIG1vdmVkIHRoZSBvdGhlciByb3V0ZXMgdG8gdGhlIG5ldyBmb3JtYXQuIFRoZXNlXG4vLyBhcmUgdXNlZCB0byBob29rIGludG8gdGhlIHJvdXRlLlxuY29uc3QgeyB3b3JrQXN5bmNTdG9yYWdlLCB3b3JrVW5pdEFzeW5jU3RvcmFnZSwgc2VydmVySG9va3MgfSA9IHJvdXRlTW9kdWxlO1xuZnVuY3Rpb24gcGF0Y2hGZXRjaCgpIHtcbiAgICByZXR1cm4gX3BhdGNoRmV0Y2goe1xuICAgICAgICB3b3JrQXN5bmNTdG9yYWdlLFxuICAgICAgICB3b3JrVW5pdEFzeW5jU3RvcmFnZVxuICAgIH0pO1xufVxuZXhwb3J0IHsgcm91dGVNb2R1bGUsIHdvcmtBc3luY1N0b3JhZ2UsIHdvcmtVbml0QXN5bmNTdG9yYWdlLCBzZXJ2ZXJIb29rcywgcGF0Y2hGZXRjaCwgIH07XG5cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWFwcC1yb3V0ZS5qcy5tYXAiXSwibmFtZXMiOltdLCJpZ25vcmVMaXN0IjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(rsc)/./node_modules/.pnpm/next@15.3.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/build/webpack/loaders/next-app-loader/index.js?name=app%2Fapi%2F(feedback)%2Fget-feedback%2Froute&page=%2Fapi%2F(feedback)%2Fget-feedback%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2F(feedback)%2Fget-feedback%2Froute.ts&appDir=C%3A%5CUsers%5Ckasau%5COneDrive%5CDesktop%5CBook-Summary%5Csrc%5Capp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=C%3A%5CUsers%5Ckasau%5COneDrive%5CDesktop%5CBook-Summary&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!\n");

/***/ }),

/***/ "(rsc)/./node_modules/.pnpm/next@15.3.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/build/webpack/loaders/next-flight-client-entry-loader.js?server=true!":
/*!*********************************************************************************************************************************************************************************!*\
  !*** ./node_modules/.pnpm/next@15.3.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/build/webpack/loaders/next-flight-client-entry-loader.js?server=true! ***!
  \*********************************************************************************************************************************************************************************/
/***/ (() => {



/***/ }),

/***/ "(rsc)/./src/app/api/(feedback)/get-feedback/route.ts":
/*!******************************************************!*\
  !*** ./src/app/api/(feedback)/get-feedback/route.ts ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   GET: () => (/* binding */ GET)\n/* harmony export */ });\n/* harmony import */ var _lib_util__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/lib/util */ \"(rsc)/./src/lib/util.js\");\n/* harmony import */ var next_server__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/server */ \"(rsc)/./node_modules/.pnpm/next@15.3.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/api/server.js\");\n/* harmony import */ var _model_Feedback__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/model/Feedback */ \"(rsc)/./src/model/Feedback.js\");\n\n\n\nasync function GET(request) {\n    await (0,_lib_util__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\n    try {\n        const feedbacks = await _model_Feedback__WEBPACK_IMPORTED_MODULE_2__[\"default\"].find();\n        console.log(feedbacks);\n        return next_server__WEBPACK_IMPORTED_MODULE_1__.NextResponse.json({\n            message: \" Get Feedback Successfully \",\n            success: true,\n            feedbacks\n        });\n    } catch (error) {\n        //catch me bhi respon ok\n        return next_server__WEBPACK_IMPORTED_MODULE_1__.NextResponse.json({\n            message: \"Something went wrong\",\n            success: false\n        });\n    }\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9zcmMvYXBwL2FwaS8oZmVlZGJhY2spL2dldC1mZWVkYmFjay9yb3V0ZS50cyIsIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQW1DO0FBQ29CO0FBQ2Y7QUFFakMsZUFBZUcsSUFBSUMsT0FBbUI7SUFDMUMsTUFBTUoscURBQVNBO0lBQ2YsSUFBRztRQUNGLE1BQU1LLFlBQVUsTUFBTUgsdURBQVFBLENBQUNJLElBQUk7UUFDbkNDLFFBQVFDLEdBQUcsQ0FBQ0g7UUFDWixPQUFPSixxREFBWUEsQ0FBQ1EsSUFBSSxDQUFDO1lBQ3BCQyxTQUFTO1lBQ1RDLFNBQVE7WUFDUk47UUFDTDtJQUNELEVBQ0EsT0FBTU8sT0FBTTtRQUNYLHdCQUF3QjtRQUN4QixPQUFPWCxxREFBWUEsQ0FBQ1EsSUFBSSxDQUFDO1lBQ3RCQyxTQUFRO1lBQ1JDLFNBQVE7UUFDWDtJQUVEO0FBRUgiLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xca2FzYXVcXE9uZURyaXZlXFxEZXNrdG9wXFxCb29rLVN1bW1hcnlcXHNyY1xcYXBwXFxhcGlcXChmZWVkYmFjaylcXGdldC1mZWVkYmFja1xccm91dGUudHMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGNvbm5lY3REQiBmcm9tIFwiQC9saWIvdXRpbFwiO1xuaW1wb3J0IHsgTmV4dFJlcXVlc3QsTmV4dFJlc3BvbnNlIH0gZnJvbSBcIm5leHQvc2VydmVyXCI7XG5pbXBvcnQgRmVlZGJhY2sgZnJvbSBcIkAvbW9kZWwvRmVlZGJhY2tcIjtcblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIEdFVChyZXF1ZXN0Ok5leHRSZXF1ZXN0KXtcbiAgIGF3YWl0IGNvbm5lY3REQigpO1xuICAgdHJ5e1xuICAgIGNvbnN0IGZlZWRiYWNrcz1hd2FpdCBGZWVkYmFjay5maW5kKClcbiAgICBjb25zb2xlLmxvZyhmZWVkYmFja3MpXG4gICAgcmV0dXJuIE5leHRSZXNwb25zZS5qc29uKHtcbiAgICAgICAgIG1lc3NhZ2U6IFwiIEdldCBGZWVkYmFjayBTdWNjZXNzZnVsbHkgXCIsXG4gICAgICAgICBzdWNjZXNzOnRydWUsXG4gICAgICAgICBmZWVkYmFja3MgLy95YWhpIHRvIGhhaSBtYWluIGdvYWwgaG5uXG4gICAgfSlcbiAgIH1cbiAgIGNhdGNoKGVycm9yKXtcbiAgICAvL2NhdGNoIG1lIGJoaSByZXNwb24gb2tcbiAgICByZXR1cm4gTmV4dFJlc3BvbnNlLmpzb24oe1xuICAgICAgIG1lc3NhZ2U6XCJTb21ldGhpbmcgd2VudCB3cm9uZ1wiLFxuICAgICAgIHN1Y2Nlc3M6ZmFsc2VcbiAgICB9KVxuICAgXG4gICB9XG5cbn1cbiJdLCJuYW1lcyI6WyJjb25uZWN0REIiLCJOZXh0UmVzcG9uc2UiLCJGZWVkYmFjayIsIkdFVCIsInJlcXVlc3QiLCJmZWVkYmFja3MiLCJmaW5kIiwiY29uc29sZSIsImxvZyIsImpzb24iLCJtZXNzYWdlIiwic3VjY2VzcyIsImVycm9yIl0sImlnbm9yZUxpc3QiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(rsc)/./src/app/api/(feedback)/get-feedback/route.ts\n");

/***/ }),

/***/ "(rsc)/./src/lib/util.js":
/*!*************************!*\
  !*** ./src/lib/util.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mongoose */ \"mongoose\");\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mongoose__WEBPACK_IMPORTED_MODULE_0__);\n\nconst MONGO_URI = process.env.MONGO_URI || ''; // Ensure this is set in your .env file\nif (!MONGO_URI) {\n    throw new Error(\"Please define the MONGO_URI environment variable inside .env\");\n}\n/**\n * Global is used here to maintain a cached connection across hot reloads\n * in development. This prevents connections growing exponentially\n * during API Route usage.\n */ let cached = global.mongoose;\nif (!cached) {\n    cached = global.mongoose = {\n        conn: null,\n        promise: null\n    };\n}\nasync function connectDB() {\n    if (cached.conn) {\n        // If a connection is already established, return the cached connection\n        return cached.conn;\n    }\n    if (!cached.promise) {\n        // If no connection promise exists, create a new one\n        const opts = {\n            bufferCommands: false\n        };\n        cached.promise = mongoose__WEBPACK_IMPORTED_MODULE_0___default().connect(MONGO_URI, opts).then((mongoose)=>{\n            console.log(\"Connected to MongoDB\");\n            return mongoose;\n        });\n    }\n    try {\n        // Await the connection promise and cache the connection\n        cached.conn = await cached.promise;\n    } catch (error) {\n        // If the connection fails, log the error and throw it\n        console.error(\"Error connecting to MongoDB:\", error);\n        throw new Error(\"Failed to connect to MongoDB\");\n    }\n    return cached.conn;\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (connectDB);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9zcmMvbGliL3V0aWwuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQWdDO0FBRWhDLE1BQU1DLFlBQVlDLFFBQVFDLEdBQUcsQ0FBQ0YsU0FBUyxJQUFJLElBQUksdUNBQXVDO0FBRXRGLElBQUksQ0FBQ0EsV0FBVztJQUNkLE1BQU0sSUFBSUcsTUFBTTtBQUNsQjtBQUVBOzs7O0NBSUMsR0FDRCxJQUFJQyxTQUFTQyxPQUFPTixRQUFRO0FBRTVCLElBQUksQ0FBQ0ssUUFBUTtJQUNYQSxTQUFTQyxPQUFPTixRQUFRLEdBQUc7UUFBRU8sTUFBTTtRQUFNQyxTQUFTO0lBQUs7QUFDekQ7QUFFQSxlQUFlQztJQUNiLElBQUlKLE9BQU9FLElBQUksRUFBRTtRQUNmLHVFQUF1RTtRQUN2RSxPQUFPRixPQUFPRSxJQUFJO0lBQ3BCO0lBRUEsSUFBSSxDQUFDRixPQUFPRyxPQUFPLEVBQUU7UUFDbkIsb0RBQW9EO1FBQ3BELE1BQU1FLE9BQU87WUFDWEMsZ0JBQWdCO1FBQ2xCO1FBRUFOLE9BQU9HLE9BQU8sR0FBR1IsdURBQWdCLENBQUNDLFdBQVdTLE1BQU1HLElBQUksQ0FBQyxDQUFDYjtZQUN2RGMsUUFBUUMsR0FBRyxDQUFDO1lBQ1osT0FBT2Y7UUFDVDtJQUNGO0lBRUEsSUFBSTtRQUNGLHdEQUF3RDtRQUN4REssT0FBT0UsSUFBSSxHQUFHLE1BQU1GLE9BQU9HLE9BQU87SUFDcEMsRUFBRSxPQUFPUSxPQUFPO1FBQ2Qsc0RBQXNEO1FBQ3RERixRQUFRRSxLQUFLLENBQUMsZ0NBQWdDQTtRQUM5QyxNQUFNLElBQUlaLE1BQU07SUFDbEI7SUFFQSxPQUFPQyxPQUFPRSxJQUFJO0FBQ3BCO0FBRUEsaUVBQWVFLFNBQVNBLEVBQUMiLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xca2FzYXVcXE9uZURyaXZlXFxEZXNrdG9wXFxCb29rLVN1bW1hcnlcXHNyY1xcbGliXFx1dGlsLmpzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBtb25nb29zZSBmcm9tIFwibW9uZ29vc2VcIjtcblxuY29uc3QgTU9OR09fVVJJID0gcHJvY2Vzcy5lbnYuTU9OR09fVVJJIHx8ICcnOyAvLyBFbnN1cmUgdGhpcyBpcyBzZXQgaW4geW91ciAuZW52IGZpbGVcblxuaWYgKCFNT05HT19VUkkpIHtcbiAgdGhyb3cgbmV3IEVycm9yKFwiUGxlYXNlIGRlZmluZSB0aGUgTU9OR09fVVJJIGVudmlyb25tZW50IHZhcmlhYmxlIGluc2lkZSAuZW52XCIpO1xufVxuXG4vKipcbiAqIEdsb2JhbCBpcyB1c2VkIGhlcmUgdG8gbWFpbnRhaW4gYSBjYWNoZWQgY29ubmVjdGlvbiBhY3Jvc3MgaG90IHJlbG9hZHNcbiAqIGluIGRldmVsb3BtZW50LiBUaGlzIHByZXZlbnRzIGNvbm5lY3Rpb25zIGdyb3dpbmcgZXhwb25lbnRpYWxseVxuICogZHVyaW5nIEFQSSBSb3V0ZSB1c2FnZS5cbiAqL1xubGV0IGNhY2hlZCA9IGdsb2JhbC5tb25nb29zZTtcblxuaWYgKCFjYWNoZWQpIHtcbiAgY2FjaGVkID0gZ2xvYmFsLm1vbmdvb3NlID0geyBjb25uOiBudWxsLCBwcm9taXNlOiBudWxsIH07XG59XG5cbmFzeW5jIGZ1bmN0aW9uIGNvbm5lY3REQigpIHtcbiAgaWYgKGNhY2hlZC5jb25uKSB7XG4gICAgLy8gSWYgYSBjb25uZWN0aW9uIGlzIGFscmVhZHkgZXN0YWJsaXNoZWQsIHJldHVybiB0aGUgY2FjaGVkIGNvbm5lY3Rpb25cbiAgICByZXR1cm4gY2FjaGVkLmNvbm47XG4gIH1cblxuICBpZiAoIWNhY2hlZC5wcm9taXNlKSB7XG4gICAgLy8gSWYgbm8gY29ubmVjdGlvbiBwcm9taXNlIGV4aXN0cywgY3JlYXRlIGEgbmV3IG9uZVxuICAgIGNvbnN0IG9wdHMgPSB7XG4gICAgICBidWZmZXJDb21tYW5kczogZmFsc2UsIC8vIERpc2FibGUgTW9uZ29vc2UgYnVmZmVyaW5nXG4gICAgfTtcblxuICAgIGNhY2hlZC5wcm9taXNlID0gbW9uZ29vc2UuY29ubmVjdChNT05HT19VUkksIG9wdHMpLnRoZW4oKG1vbmdvb3NlKSA9PiB7XG4gICAgICBjb25zb2xlLmxvZyhcIkNvbm5lY3RlZCB0byBNb25nb0RCXCIpO1xuICAgICAgcmV0dXJuIG1vbmdvb3NlO1xuICAgIH0pO1xuICB9XG5cbiAgdHJ5IHtcbiAgICAvLyBBd2FpdCB0aGUgY29ubmVjdGlvbiBwcm9taXNlIGFuZCBjYWNoZSB0aGUgY29ubmVjdGlvblxuICAgIGNhY2hlZC5jb25uID0gYXdhaXQgY2FjaGVkLnByb21pc2U7XG4gIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgLy8gSWYgdGhlIGNvbm5lY3Rpb24gZmFpbHMsIGxvZyB0aGUgZXJyb3IgYW5kIHRocm93IGl0XG4gICAgY29uc29sZS5lcnJvcihcIkVycm9yIGNvbm5lY3RpbmcgdG8gTW9uZ29EQjpcIiwgZXJyb3IpO1xuICAgIHRocm93IG5ldyBFcnJvcihcIkZhaWxlZCB0byBjb25uZWN0IHRvIE1vbmdvREJcIik7XG4gIH1cblxuICByZXR1cm4gY2FjaGVkLmNvbm47XG59XG5cbmV4cG9ydCBkZWZhdWx0IGNvbm5lY3REQjsiXSwibmFtZXMiOlsibW9uZ29vc2UiLCJNT05HT19VUkkiLCJwcm9jZXNzIiwiZW52IiwiRXJyb3IiLCJjYWNoZWQiLCJnbG9iYWwiLCJjb25uIiwicHJvbWlzZSIsImNvbm5lY3REQiIsIm9wdHMiLCJidWZmZXJDb21tYW5kcyIsImNvbm5lY3QiLCJ0aGVuIiwiY29uc29sZSIsImxvZyIsImVycm9yIl0sImlnbm9yZUxpc3QiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(rsc)/./src/lib/util.js\n");

/***/ }),

/***/ "(rsc)/./src/model/Feedback.js":
/*!*******************************!*\
  !*** ./src/model/Feedback.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mongoose */ \"mongoose\");\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mongoose__WEBPACK_IMPORTED_MODULE_0__);\n// ab hum banayenge ek model \n//  matlb database \n// database banane me meri madad karega mongoose \n// schema means - dhacha \n\nconst feedback = new (mongoose__WEBPACK_IMPORTED_MODULE_0___default().Schema)({\n    name: {\n        type: String,\n        required: true\n    },\n    email: {\n        type: String,\n        required: true\n    },\n    testimonial: {\n        type: String,\n        required: true\n    }\n});\nconst Feedback = (mongoose__WEBPACK_IMPORTED_MODULE_0___default().models).Feedback || mongoose__WEBPACK_IMPORTED_MODULE_0___default().model(\"Feedback\", feedback);\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Feedback);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9zcmMvbW9kZWwvRmVlZGJhY2suanMiLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQUEsNkJBQTZCO0FBQzdCLG1CQUFtQjtBQUNuQixpREFBaUQ7QUFDakQseUJBQXlCO0FBQ087QUFFaEMsTUFBTUMsV0FBVyxJQUFJRCx3REFBZSxDQUFDO0lBRWpDRyxNQUFNO1FBRUZDLE1BQU1DO1FBRU5DLFVBQVU7SUFFZDtJQUVBQyxPQUFPO1FBRUhILE1BQU1DO1FBRU5DLFVBQVU7SUFFZDtJQUNBRSxhQUFhO1FBRVRKLE1BQU1DO1FBRU5DLFVBQVU7SUFFZDtBQUlKO0FBRUEsTUFBTUcsV0FBV1Qsd0RBQWUsQ0FBQ1MsUUFBUSxJQUFJVCxxREFBYyxDQUFDLFlBQVlDO0FBRXhFLGlFQUFlUSxRQUFRQSxFQUFDIiwic291cmNlcyI6WyJDOlxcVXNlcnNcXGthc2F1XFxPbmVEcml2ZVxcRGVza3RvcFxcQm9vay1TdW1tYXJ5XFxzcmNcXG1vZGVsXFxGZWVkYmFjay5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBhYiBodW0gYmFuYXllbmdlIGVrIG1vZGVsIFxuLy8gIG1hdGxiIGRhdGFiYXNlIFxuLy8gZGF0YWJhc2UgYmFuYW5lIG1lIG1lcmkgbWFkYWQga2FyZWdhIG1vbmdvb3NlIFxuLy8gc2NoZW1hIG1lYW5zIC0gZGhhY2hhIFxuaW1wb3J0IG1vbmdvb3NlIGZyb20gXCJtb25nb29zZVwiO1xuXG5jb25zdCBmZWVkYmFjayA9IG5ldyBtb25nb29zZS5TY2hlbWEoe1xuXG4gICAgbmFtZToge1xuXG4gICAgICAgIHR5cGU6IFN0cmluZyxcblxuICAgICAgICByZXF1aXJlZDogdHJ1ZSxcblxuICAgIH0sXG5cbiAgICBlbWFpbDoge1xuXG4gICAgICAgIHR5cGU6IFN0cmluZyxcblxuICAgICAgICByZXF1aXJlZDogdHJ1ZSxcblxuICAgIH0sXG4gICAgdGVzdGltb25pYWw6IHtcblxuICAgICAgICB0eXBlOiBTdHJpbmcsXG5cbiAgICAgICAgcmVxdWlyZWQ6IHRydWUsXG5cbiAgICB9LFxuXG4gICAgXG5cbn0pO1xuXG5jb25zdCBGZWVkYmFjayA9IG1vbmdvb3NlLm1vZGVscy5GZWVkYmFjayB8fCBtb25nb29zZS5tb2RlbChcIkZlZWRiYWNrXCIsIGZlZWRiYWNrKTtcblxuZXhwb3J0IGRlZmF1bHQgRmVlZGJhY2s7ICJdLCJuYW1lcyI6WyJtb25nb29zZSIsImZlZWRiYWNrIiwiU2NoZW1hIiwibmFtZSIsInR5cGUiLCJTdHJpbmciLCJyZXF1aXJlZCIsImVtYWlsIiwidGVzdGltb25pYWwiLCJGZWVkYmFjayIsIm1vZGVscyIsIm1vZGVsIl0sImlnbm9yZUxpc3QiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(rsc)/./src/model/Feedback.js\n");

/***/ }),

/***/ "(ssr)/./node_modules/.pnpm/next@15.3.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/build/webpack/loaders/next-flight-client-entry-loader.js?server=true!":
/*!*********************************************************************************************************************************************************************************!*\
  !*** ./node_modules/.pnpm/next@15.3.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/build/webpack/loaders/next-flight-client-entry-loader.js?server=true! ***!
  \*********************************************************************************************************************************************************************************/
/***/ (() => {



/***/ }),

/***/ "../app-render/after-task-async-storage.external":
/*!***********************************************************************************!*\
  !*** external "next/dist/server/app-render/after-task-async-storage.external.js" ***!
  \***********************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/server/app-render/after-task-async-storage.external.js");

/***/ }),

/***/ "../app-render/work-async-storage.external":
/*!*****************************************************************************!*\
  !*** external "next/dist/server/app-render/work-async-storage.external.js" ***!
  \*****************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/server/app-render/work-async-storage.external.js");

/***/ }),

/***/ "./work-unit-async-storage.external":
/*!**********************************************************************************!*\
  !*** external "next/dist/server/app-render/work-unit-async-storage.external.js" ***!
  \**********************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/server/app-render/work-unit-async-storage.external.js");

/***/ }),

/***/ "mongoose":
/*!***************************!*\
  !*** external "mongoose" ***!
  \***************************/
/***/ ((module) => {

"use strict";
module.exports = require("mongoose");

/***/ }),

/***/ "next/dist/compiled/next-server/app-page.runtime.dev.js":
/*!*************************************************************************!*\
  !*** external "next/dist/compiled/next-server/app-page.runtime.dev.js" ***!
  \*************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/compiled/next-server/app-page.runtime.dev.js");

/***/ }),

/***/ "next/dist/compiled/next-server/app-route.runtime.dev.js":
/*!**************************************************************************!*\
  !*** external "next/dist/compiled/next-server/app-route.runtime.dev.js" ***!
  \**************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/compiled/next-server/app-route.runtime.dev.js");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, ["vendor-chunks/next@15.3.4_react-dom@18.3.1_react@18.3.1__react@18.3.1"], () => (__webpack_exec__("(rsc)/./node_modules/.pnpm/next@15.3.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/build/webpack/loaders/next-app-loader/index.js?name=app%2Fapi%2F(feedback)%2Fget-feedback%2Froute&page=%2Fapi%2F(feedback)%2Fget-feedback%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2F(feedback)%2Fget-feedback%2Froute.ts&appDir=C%3A%5CUsers%5Ckasau%5COneDrive%5CDesktop%5CBook-Summary%5Csrc%5Capp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=C%3A%5CUsers%5Ckasau%5COneDrive%5CDesktop%5CBook-Summary&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!")));
module.exports = __webpack_exports__;

})();