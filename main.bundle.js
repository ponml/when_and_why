/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports) {

	eval("\"use strict\";\n\nconsole.log(\"hello\");\nvar clientId = \"edd82c8c5505481eb00dc677bf33dd9e\";\nvar redirect = window.location;\nif (window.location.hash) {\n    alert(\"HERE'S YA HASH\", window.location.hash);\n} else {\n    window.location = \"https://api.instagram.com/oauth/authorize/?client_id=\" + clientId + \"&redirect_uri=\" + encodeURI(redirect) + \"&response_type=token\";\n}//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9hcHAuanM/ZDhlZSJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLE9BQU8sQ0FBQyxHQUFHLENBQUMsT0FBTyxDQUFDLENBQUM7QUFDckIsSUFBSSxRQUFRLEdBQUcsa0NBQWtDLENBQUM7QUFDbEQsSUFBSSxRQUFRLEdBQUcsTUFBTSxDQUFDLFFBQVEsQ0FBQztBQUMvQixJQUFHLE1BQU0sQ0FBQyxRQUFRLENBQUMsSUFBSSxFQUFFO0FBQ3JCLFNBQUssQ0FBQyxnQkFBZ0IsRUFBRSxNQUFNLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxDQUFDO0NBQ2pELE1BQU07QUFDSCxVQUFNLENBQUMsUUFBUSxHQUFHLHVEQUF1RCxHQUFHLFFBQVEsR0FBRyxnQkFBZ0IsR0FBRyxTQUFTLENBQUMsUUFBUSxDQUFDLEdBQUcsc0JBQXNCIiwiZmlsZSI6IjAuanMiLCJzb3VyY2VzQ29udGVudCI6WyJjb25zb2xlLmxvZyhcImhlbGxvXCIpO1xyXG52YXIgY2xpZW50SWQgPSBcImVkZDgyYzhjNTUwNTQ4MWViMDBkYzY3N2JmMzNkZDllXCI7XHJcbnZhciByZWRpcmVjdCA9IHdpbmRvdy5sb2NhdGlvbjtcclxuaWYod2luZG93LmxvY2F0aW9uLmhhc2gpIHtcclxuICAgIGFsZXJ0KFwiSEVSRSdTIFlBIEhBU0hcIiwgd2luZG93LmxvY2F0aW9uLmhhc2gpO1xyXG59IGVsc2Uge1xyXG4gICAgd2luZG93LmxvY2F0aW9uID0gXCJodHRwczovL2FwaS5pbnN0YWdyYW0uY29tL29hdXRoL2F1dGhvcml6ZS8/Y2xpZW50X2lkPVwiICsgY2xpZW50SWQgKyBcIiZyZWRpcmVjdF91cmk9XCIgKyBlbmNvZGVVUkkocmVkaXJlY3QpICsgXCImcmVzcG9uc2VfdHlwZT10b2tlblwiXHJcbn1cclxuXHJcblxyXG5cclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vYXBwLmpzIl0sInNvdXJjZVJvb3QiOiIifQ==");

/***/ }
/******/ ]);