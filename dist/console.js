(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["Console"] = factory();
	else
		root["Console"] = factory();
})(window, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// install a JSONP callback for chunk loading
/******/ 	function webpackJsonpCallback(data) {
/******/ 		var chunkIds = data[0];
/******/ 		var moreModules = data[1];
/******/ 		var executeModules = data[2];
/******/
/******/ 		// add "moreModules" to the modules object,
/******/ 		// then flag all "chunkIds" as loaded and fire callback
/******/ 		var moduleId, chunkId, i = 0, resolves = [];
/******/ 		for(;i < chunkIds.length; i++) {
/******/ 			chunkId = chunkIds[i];
/******/ 			if(Object.prototype.hasOwnProperty.call(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 				resolves.push(installedChunks[chunkId][0]);
/******/ 			}
/******/ 			installedChunks[chunkId] = 0;
/******/ 		}
/******/ 		for(moduleId in moreModules) {
/******/ 			if(Object.prototype.hasOwnProperty.call(moreModules, moduleId)) {
/******/ 				modules[moduleId] = moreModules[moduleId];
/******/ 			}
/******/ 		}
/******/ 		if(parentJsonpFunction) parentJsonpFunction(data);
/******/
/******/ 		while(resolves.length) {
/******/ 			resolves.shift()();
/******/ 		}
/******/
/******/ 		// add entry modules from loaded chunk to deferred list
/******/ 		deferredModules.push.apply(deferredModules, executeModules || []);
/******/
/******/ 		// run deferred modules when all chunks ready
/******/ 		return checkDeferredModules();
/******/ 	};
/******/ 	function checkDeferredModules() {
/******/ 		var result;
/******/ 		for(var i = 0; i < deferredModules.length; i++) {
/******/ 			var deferredModule = deferredModules[i];
/******/ 			var fulfilled = true;
/******/ 			for(var j = 1; j < deferredModule.length; j++) {
/******/ 				var depId = deferredModule[j];
/******/ 				if(installedChunks[depId] !== 0) fulfilled = false;
/******/ 			}
/******/ 			if(fulfilled) {
/******/ 				deferredModules.splice(i--, 1);
/******/ 				result = __webpack_require__(__webpack_require__.s = deferredModule[0]);
/******/ 			}
/******/ 		}
/******/
/******/ 		return result;
/******/ 	}
/******/ 	function hotDisposeChunk(chunkId) {
/******/ 		delete installedChunks[chunkId];
/******/ 	}
/******/ 	var parentHotUpdateCallback = window["webpackHotUpdate_name_"];
/******/ 	window["webpackHotUpdate_name_"] = // eslint-disable-next-line no-unused-vars
/******/ 	function webpackHotUpdateCallback(chunkId, moreModules) {
/******/ 		hotAddUpdateChunk(chunkId, moreModules);
/******/ 		if (parentHotUpdateCallback) parentHotUpdateCallback(chunkId, moreModules);
/******/ 	} ;
/******/
/******/ 	// eslint-disable-next-line no-unused-vars
/******/ 	function hotDownloadUpdateChunk(chunkId) {
/******/ 		var script = document.createElement("script");
/******/ 		script.charset = "utf-8";
/******/ 		script.src = __webpack_require__.p + "" + chunkId + "." + hotCurrentHash + ".hot-update.js";
/******/ 		if (null) script.crossOrigin = null;
/******/ 		document.head.appendChild(script);
/******/ 	}
/******/
/******/ 	// eslint-disable-next-line no-unused-vars
/******/ 	function hotDownloadManifest(requestTimeout) {
/******/ 		requestTimeout = requestTimeout || 10000;
/******/ 		return new Promise(function(resolve, reject) {
/******/ 			if (typeof XMLHttpRequest === "undefined") {
/******/ 				return reject(new Error("No browser support"));
/******/ 			}
/******/ 			try {
/******/ 				var request = new XMLHttpRequest();
/******/ 				var requestPath = __webpack_require__.p + "" + hotCurrentHash + ".hot-update.json";
/******/ 				request.open("GET", requestPath, true);
/******/ 				request.timeout = requestTimeout;
/******/ 				request.send(null);
/******/ 			} catch (err) {
/******/ 				return reject(err);
/******/ 			}
/******/ 			request.onreadystatechange = function() {
/******/ 				if (request.readyState !== 4) return;
/******/ 				if (request.status === 0) {
/******/ 					// timeout
/******/ 					reject(
/******/ 						new Error("Manifest request to " + requestPath + " timed out.")
/******/ 					);
/******/ 				} else if (request.status === 404) {
/******/ 					// no update available
/******/ 					resolve();
/******/ 				} else if (request.status !== 200 && request.status !== 304) {
/******/ 					// other failure
/******/ 					reject(new Error("Manifest request to " + requestPath + " failed."));
/******/ 				} else {
/******/ 					// success
/******/ 					try {
/******/ 						var update = JSON.parse(request.responseText);
/******/ 					} catch (e) {
/******/ 						reject(e);
/******/ 						return;
/******/ 					}
/******/ 					resolve(update);
/******/ 				}
/******/ 			};
/******/ 		});
/******/ 	}
/******/
/******/ 	var hotApplyOnUpdate = true;
/******/ 	// eslint-disable-next-line no-unused-vars
/******/ 	var hotCurrentHash = "39b3e624d28302a897d4";
/******/ 	var hotRequestTimeout = 10000;
/******/ 	var hotCurrentModuleData = {};
/******/ 	var hotCurrentChildModule;
/******/ 	// eslint-disable-next-line no-unused-vars
/******/ 	var hotCurrentParents = [];
/******/ 	// eslint-disable-next-line no-unused-vars
/******/ 	var hotCurrentParentsTemp = [];
/******/
/******/ 	// eslint-disable-next-line no-unused-vars
/******/ 	function hotCreateRequire(moduleId) {
/******/ 		var me = installedModules[moduleId];
/******/ 		if (!me) return __webpack_require__;
/******/ 		var fn = function(request) {
/******/ 			if (me.hot.active) {
/******/ 				if (installedModules[request]) {
/******/ 					if (installedModules[request].parents.indexOf(moduleId) === -1) {
/******/ 						installedModules[request].parents.push(moduleId);
/******/ 					}
/******/ 				} else {
/******/ 					hotCurrentParents = [moduleId];
/******/ 					hotCurrentChildModule = request;
/******/ 				}
/******/ 				if (me.children.indexOf(request) === -1) {
/******/ 					me.children.push(request);
/******/ 				}
/******/ 			} else {
/******/ 				console.warn(
/******/ 					"[HMR] unexpected require(" +
/******/ 						request +
/******/ 						") from disposed module " +
/******/ 						moduleId
/******/ 				);
/******/ 				hotCurrentParents = [];
/******/ 			}
/******/ 			return __webpack_require__(request);
/******/ 		};
/******/ 		var ObjectFactory = function ObjectFactory(name) {
/******/ 			return {
/******/ 				configurable: true,
/******/ 				enumerable: true,
/******/ 				get: function() {
/******/ 					return __webpack_require__[name];
/******/ 				},
/******/ 				set: function(value) {
/******/ 					__webpack_require__[name] = value;
/******/ 				}
/******/ 			};
/******/ 		};
/******/ 		for (var name in __webpack_require__) {
/******/ 			if (
/******/ 				Object.prototype.hasOwnProperty.call(__webpack_require__, name) &&
/******/ 				name !== "e" &&
/******/ 				name !== "t"
/******/ 			) {
/******/ 				Object.defineProperty(fn, name, ObjectFactory(name));
/******/ 			}
/******/ 		}
/******/ 		fn.e = function(chunkId) {
/******/ 			if (hotStatus === "ready") hotSetStatus("prepare");
/******/ 			hotChunksLoading++;
/******/ 			return __webpack_require__.e(chunkId).then(finishChunkLoading, function(err) {
/******/ 				finishChunkLoading();
/******/ 				throw err;
/******/ 			});
/******/
/******/ 			function finishChunkLoading() {
/******/ 				hotChunksLoading--;
/******/ 				if (hotStatus === "prepare") {
/******/ 					if (!hotWaitingFilesMap[chunkId]) {
/******/ 						hotEnsureUpdateChunk(chunkId);
/******/ 					}
/******/ 					if (hotChunksLoading === 0 && hotWaitingFiles === 0) {
/******/ 						hotUpdateDownloaded();
/******/ 					}
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 		fn.t = function(value, mode) {
/******/ 			if (mode & 1) value = fn(value);
/******/ 			return __webpack_require__.t(value, mode & ~1);
/******/ 		};
/******/ 		return fn;
/******/ 	}
/******/
/******/ 	// eslint-disable-next-line no-unused-vars
/******/ 	function hotCreateModule(moduleId) {
/******/ 		var hot = {
/******/ 			// private stuff
/******/ 			_acceptedDependencies: {},
/******/ 			_declinedDependencies: {},
/******/ 			_selfAccepted: false,
/******/ 			_selfDeclined: false,
/******/ 			_disposeHandlers: [],
/******/ 			_main: hotCurrentChildModule !== moduleId,
/******/
/******/ 			// Module API
/******/ 			active: true,
/******/ 			accept: function(dep, callback) {
/******/ 				if (dep === undefined) hot._selfAccepted = true;
/******/ 				else if (typeof dep === "function") hot._selfAccepted = dep;
/******/ 				else if (typeof dep === "object")
/******/ 					for (var i = 0; i < dep.length; i++)
/******/ 						hot._acceptedDependencies[dep[i]] = callback || function() {};
/******/ 				else hot._acceptedDependencies[dep] = callback || function() {};
/******/ 			},
/******/ 			decline: function(dep) {
/******/ 				if (dep === undefined) hot._selfDeclined = true;
/******/ 				else if (typeof dep === "object")
/******/ 					for (var i = 0; i < dep.length; i++)
/******/ 						hot._declinedDependencies[dep[i]] = true;
/******/ 				else hot._declinedDependencies[dep] = true;
/******/ 			},
/******/ 			dispose: function(callback) {
/******/ 				hot._disposeHandlers.push(callback);
/******/ 			},
/******/ 			addDisposeHandler: function(callback) {
/******/ 				hot._disposeHandlers.push(callback);
/******/ 			},
/******/ 			removeDisposeHandler: function(callback) {
/******/ 				var idx = hot._disposeHandlers.indexOf(callback);
/******/ 				if (idx >= 0) hot._disposeHandlers.splice(idx, 1);
/******/ 			},
/******/
/******/ 			// Management API
/******/ 			check: hotCheck,
/******/ 			apply: hotApply,
/******/ 			status: function(l) {
/******/ 				if (!l) return hotStatus;
/******/ 				hotStatusHandlers.push(l);
/******/ 			},
/******/ 			addStatusHandler: function(l) {
/******/ 				hotStatusHandlers.push(l);
/******/ 			},
/******/ 			removeStatusHandler: function(l) {
/******/ 				var idx = hotStatusHandlers.indexOf(l);
/******/ 				if (idx >= 0) hotStatusHandlers.splice(idx, 1);
/******/ 			},
/******/
/******/ 			//inherit from previous dispose call
/******/ 			data: hotCurrentModuleData[moduleId]
/******/ 		};
/******/ 		hotCurrentChildModule = undefined;
/******/ 		return hot;
/******/ 	}
/******/
/******/ 	var hotStatusHandlers = [];
/******/ 	var hotStatus = "idle";
/******/
/******/ 	function hotSetStatus(newStatus) {
/******/ 		hotStatus = newStatus;
/******/ 		for (var i = 0; i < hotStatusHandlers.length; i++)
/******/ 			hotStatusHandlers[i].call(null, newStatus);
/******/ 	}
/******/
/******/ 	// while downloading
/******/ 	var hotWaitingFiles = 0;
/******/ 	var hotChunksLoading = 0;
/******/ 	var hotWaitingFilesMap = {};
/******/ 	var hotRequestedFilesMap = {};
/******/ 	var hotAvailableFilesMap = {};
/******/ 	var hotDeferred;
/******/
/******/ 	// The update info
/******/ 	var hotUpdate, hotUpdateNewHash;
/******/
/******/ 	function toModuleId(id) {
/******/ 		var isNumber = +id + "" === id;
/******/ 		return isNumber ? +id : id;
/******/ 	}
/******/
/******/ 	function hotCheck(apply) {
/******/ 		if (hotStatus !== "idle") {
/******/ 			throw new Error("check() is only allowed in idle status");
/******/ 		}
/******/ 		hotApplyOnUpdate = apply;
/******/ 		hotSetStatus("check");
/******/ 		return hotDownloadManifest(hotRequestTimeout).then(function(update) {
/******/ 			if (!update) {
/******/ 				hotSetStatus("idle");
/******/ 				return null;
/******/ 			}
/******/ 			hotRequestedFilesMap = {};
/******/ 			hotWaitingFilesMap = {};
/******/ 			hotAvailableFilesMap = update.c;
/******/ 			hotUpdateNewHash = update.h;
/******/
/******/ 			hotSetStatus("prepare");
/******/ 			var promise = new Promise(function(resolve, reject) {
/******/ 				hotDeferred = {
/******/ 					resolve: resolve,
/******/ 					reject: reject
/******/ 				};
/******/ 			});
/******/ 			hotUpdate = {};
/******/ 			for(var chunkId in installedChunks)
/******/ 			// eslint-disable-next-line no-lone-blocks
/******/ 			{
/******/ 				/*globals chunkId */
/******/ 				hotEnsureUpdateChunk(chunkId);
/******/ 			}
/******/ 			if (
/******/ 				hotStatus === "prepare" &&
/******/ 				hotChunksLoading === 0 &&
/******/ 				hotWaitingFiles === 0
/******/ 			) {
/******/ 				hotUpdateDownloaded();
/******/ 			}
/******/ 			return promise;
/******/ 		});
/******/ 	}
/******/
/******/ 	// eslint-disable-next-line no-unused-vars
/******/ 	function hotAddUpdateChunk(chunkId, moreModules) {
/******/ 		if (!hotAvailableFilesMap[chunkId] || !hotRequestedFilesMap[chunkId])
/******/ 			return;
/******/ 		hotRequestedFilesMap[chunkId] = false;
/******/ 		for (var moduleId in moreModules) {
/******/ 			if (Object.prototype.hasOwnProperty.call(moreModules, moduleId)) {
/******/ 				hotUpdate[moduleId] = moreModules[moduleId];
/******/ 			}
/******/ 		}
/******/ 		if (--hotWaitingFiles === 0 && hotChunksLoading === 0) {
/******/ 			hotUpdateDownloaded();
/******/ 		}
/******/ 	}
/******/
/******/ 	function hotEnsureUpdateChunk(chunkId) {
/******/ 		if (!hotAvailableFilesMap[chunkId]) {
/******/ 			hotWaitingFilesMap[chunkId] = true;
/******/ 		} else {
/******/ 			hotRequestedFilesMap[chunkId] = true;
/******/ 			hotWaitingFiles++;
/******/ 			hotDownloadUpdateChunk(chunkId);
/******/ 		}
/******/ 	}
/******/
/******/ 	function hotUpdateDownloaded() {
/******/ 		hotSetStatus("ready");
/******/ 		var deferred = hotDeferred;
/******/ 		hotDeferred = null;
/******/ 		if (!deferred) return;
/******/ 		if (hotApplyOnUpdate) {
/******/ 			// Wrap deferred object in Promise to mark it as a well-handled Promise to
/******/ 			// avoid triggering uncaught exception warning in Chrome.
/******/ 			// See https://bugs.chromium.org/p/chromium/issues/detail?id=465666
/******/ 			Promise.resolve()
/******/ 				.then(function() {
/******/ 					return hotApply(hotApplyOnUpdate);
/******/ 				})
/******/ 				.then(
/******/ 					function(result) {
/******/ 						deferred.resolve(result);
/******/ 					},
/******/ 					function(err) {
/******/ 						deferred.reject(err);
/******/ 					}
/******/ 				);
/******/ 		} else {
/******/ 			var outdatedModules = [];
/******/ 			for (var id in hotUpdate) {
/******/ 				if (Object.prototype.hasOwnProperty.call(hotUpdate, id)) {
/******/ 					outdatedModules.push(toModuleId(id));
/******/ 				}
/******/ 			}
/******/ 			deferred.resolve(outdatedModules);
/******/ 		}
/******/ 	}
/******/
/******/ 	function hotApply(options) {
/******/ 		if (hotStatus !== "ready")
/******/ 			throw new Error("apply() is only allowed in ready status");
/******/ 		options = options || {};
/******/
/******/ 		var cb;
/******/ 		var i;
/******/ 		var j;
/******/ 		var module;
/******/ 		var moduleId;
/******/
/******/ 		function getAffectedStuff(updateModuleId) {
/******/ 			var outdatedModules = [updateModuleId];
/******/ 			var outdatedDependencies = {};
/******/
/******/ 			var queue = outdatedModules.map(function(id) {
/******/ 				return {
/******/ 					chain: [id],
/******/ 					id: id
/******/ 				};
/******/ 			});
/******/ 			while (queue.length > 0) {
/******/ 				var queueItem = queue.pop();
/******/ 				var moduleId = queueItem.id;
/******/ 				var chain = queueItem.chain;
/******/ 				module = installedModules[moduleId];
/******/ 				if (!module || module.hot._selfAccepted) continue;
/******/ 				if (module.hot._selfDeclined) {
/******/ 					return {
/******/ 						type: "self-declined",
/******/ 						chain: chain,
/******/ 						moduleId: moduleId
/******/ 					};
/******/ 				}
/******/ 				if (module.hot._main) {
/******/ 					return {
/******/ 						type: "unaccepted",
/******/ 						chain: chain,
/******/ 						moduleId: moduleId
/******/ 					};
/******/ 				}
/******/ 				for (var i = 0; i < module.parents.length; i++) {
/******/ 					var parentId = module.parents[i];
/******/ 					var parent = installedModules[parentId];
/******/ 					if (!parent) continue;
/******/ 					if (parent.hot._declinedDependencies[moduleId]) {
/******/ 						return {
/******/ 							type: "declined",
/******/ 							chain: chain.concat([parentId]),
/******/ 							moduleId: moduleId,
/******/ 							parentId: parentId
/******/ 						};
/******/ 					}
/******/ 					if (outdatedModules.indexOf(parentId) !== -1) continue;
/******/ 					if (parent.hot._acceptedDependencies[moduleId]) {
/******/ 						if (!outdatedDependencies[parentId])
/******/ 							outdatedDependencies[parentId] = [];
/******/ 						addAllToSet(outdatedDependencies[parentId], [moduleId]);
/******/ 						continue;
/******/ 					}
/******/ 					delete outdatedDependencies[parentId];
/******/ 					outdatedModules.push(parentId);
/******/ 					queue.push({
/******/ 						chain: chain.concat([parentId]),
/******/ 						id: parentId
/******/ 					});
/******/ 				}
/******/ 			}
/******/
/******/ 			return {
/******/ 				type: "accepted",
/******/ 				moduleId: updateModuleId,
/******/ 				outdatedModules: outdatedModules,
/******/ 				outdatedDependencies: outdatedDependencies
/******/ 			};
/******/ 		}
/******/
/******/ 		function addAllToSet(a, b) {
/******/ 			for (var i = 0; i < b.length; i++) {
/******/ 				var item = b[i];
/******/ 				if (a.indexOf(item) === -1) a.push(item);
/******/ 			}
/******/ 		}
/******/
/******/ 		// at begin all updates modules are outdated
/******/ 		// the "outdated" status can propagate to parents if they don't accept the children
/******/ 		var outdatedDependencies = {};
/******/ 		var outdatedModules = [];
/******/ 		var appliedUpdate = {};
/******/
/******/ 		var warnUnexpectedRequire = function warnUnexpectedRequire() {
/******/ 			console.warn(
/******/ 				"[HMR] unexpected require(" + result.moduleId + ") to disposed module"
/******/ 			);
/******/ 		};
/******/
/******/ 		for (var id in hotUpdate) {
/******/ 			if (Object.prototype.hasOwnProperty.call(hotUpdate, id)) {
/******/ 				moduleId = toModuleId(id);
/******/ 				/** @type {TODO} */
/******/ 				var result;
/******/ 				if (hotUpdate[id]) {
/******/ 					result = getAffectedStuff(moduleId);
/******/ 				} else {
/******/ 					result = {
/******/ 						type: "disposed",
/******/ 						moduleId: id
/******/ 					};
/******/ 				}
/******/ 				/** @type {Error|false} */
/******/ 				var abortError = false;
/******/ 				var doApply = false;
/******/ 				var doDispose = false;
/******/ 				var chainInfo = "";
/******/ 				if (result.chain) {
/******/ 					chainInfo = "\nUpdate propagation: " + result.chain.join(" -> ");
/******/ 				}
/******/ 				switch (result.type) {
/******/ 					case "self-declined":
/******/ 						if (options.onDeclined) options.onDeclined(result);
/******/ 						if (!options.ignoreDeclined)
/******/ 							abortError = new Error(
/******/ 								"Aborted because of self decline: " +
/******/ 									result.moduleId +
/******/ 									chainInfo
/******/ 							);
/******/ 						break;
/******/ 					case "declined":
/******/ 						if (options.onDeclined) options.onDeclined(result);
/******/ 						if (!options.ignoreDeclined)
/******/ 							abortError = new Error(
/******/ 								"Aborted because of declined dependency: " +
/******/ 									result.moduleId +
/******/ 									" in " +
/******/ 									result.parentId +
/******/ 									chainInfo
/******/ 							);
/******/ 						break;
/******/ 					case "unaccepted":
/******/ 						if (options.onUnaccepted) options.onUnaccepted(result);
/******/ 						if (!options.ignoreUnaccepted)
/******/ 							abortError = new Error(
/******/ 								"Aborted because " + moduleId + " is not accepted" + chainInfo
/******/ 							);
/******/ 						break;
/******/ 					case "accepted":
/******/ 						if (options.onAccepted) options.onAccepted(result);
/******/ 						doApply = true;
/******/ 						break;
/******/ 					case "disposed":
/******/ 						if (options.onDisposed) options.onDisposed(result);
/******/ 						doDispose = true;
/******/ 						break;
/******/ 					default:
/******/ 						throw new Error("Unexception type " + result.type);
/******/ 				}
/******/ 				if (abortError) {
/******/ 					hotSetStatus("abort");
/******/ 					return Promise.reject(abortError);
/******/ 				}
/******/ 				if (doApply) {
/******/ 					appliedUpdate[moduleId] = hotUpdate[moduleId];
/******/ 					addAllToSet(outdatedModules, result.outdatedModules);
/******/ 					for (moduleId in result.outdatedDependencies) {
/******/ 						if (
/******/ 							Object.prototype.hasOwnProperty.call(
/******/ 								result.outdatedDependencies,
/******/ 								moduleId
/******/ 							)
/******/ 						) {
/******/ 							if (!outdatedDependencies[moduleId])
/******/ 								outdatedDependencies[moduleId] = [];
/******/ 							addAllToSet(
/******/ 								outdatedDependencies[moduleId],
/******/ 								result.outdatedDependencies[moduleId]
/******/ 							);
/******/ 						}
/******/ 					}
/******/ 				}
/******/ 				if (doDispose) {
/******/ 					addAllToSet(outdatedModules, [result.moduleId]);
/******/ 					appliedUpdate[moduleId] = warnUnexpectedRequire;
/******/ 				}
/******/ 			}
/******/ 		}
/******/
/******/ 		// Store self accepted outdated modules to require them later by the module system
/******/ 		var outdatedSelfAcceptedModules = [];
/******/ 		for (i = 0; i < outdatedModules.length; i++) {
/******/ 			moduleId = outdatedModules[i];
/******/ 			if (
/******/ 				installedModules[moduleId] &&
/******/ 				installedModules[moduleId].hot._selfAccepted &&
/******/ 				// removed self-accepted modules should not be required
/******/ 				appliedUpdate[moduleId] !== warnUnexpectedRequire
/******/ 			) {
/******/ 				outdatedSelfAcceptedModules.push({
/******/ 					module: moduleId,
/******/ 					errorHandler: installedModules[moduleId].hot._selfAccepted
/******/ 				});
/******/ 			}
/******/ 		}
/******/
/******/ 		// Now in "dispose" phase
/******/ 		hotSetStatus("dispose");
/******/ 		Object.keys(hotAvailableFilesMap).forEach(function(chunkId) {
/******/ 			if (hotAvailableFilesMap[chunkId] === false) {
/******/ 				hotDisposeChunk(chunkId);
/******/ 			}
/******/ 		});
/******/
/******/ 		var idx;
/******/ 		var queue = outdatedModules.slice();
/******/ 		while (queue.length > 0) {
/******/ 			moduleId = queue.pop();
/******/ 			module = installedModules[moduleId];
/******/ 			if (!module) continue;
/******/
/******/ 			var data = {};
/******/
/******/ 			// Call dispose handlers
/******/ 			var disposeHandlers = module.hot._disposeHandlers;
/******/ 			for (j = 0; j < disposeHandlers.length; j++) {
/******/ 				cb = disposeHandlers[j];
/******/ 				cb(data);
/******/ 			}
/******/ 			hotCurrentModuleData[moduleId] = data;
/******/
/******/ 			// disable module (this disables requires from this module)
/******/ 			module.hot.active = false;
/******/
/******/ 			// remove module from cache
/******/ 			delete installedModules[moduleId];
/******/
/******/ 			// when disposing there is no need to call dispose handler
/******/ 			delete outdatedDependencies[moduleId];
/******/
/******/ 			// remove "parents" references from all children
/******/ 			for (j = 0; j < module.children.length; j++) {
/******/ 				var child = installedModules[module.children[j]];
/******/ 				if (!child) continue;
/******/ 				idx = child.parents.indexOf(moduleId);
/******/ 				if (idx >= 0) {
/******/ 					child.parents.splice(idx, 1);
/******/ 				}
/******/ 			}
/******/ 		}
/******/
/******/ 		// remove outdated dependency from module children
/******/ 		var dependency;
/******/ 		var moduleOutdatedDependencies;
/******/ 		for (moduleId in outdatedDependencies) {
/******/ 			if (
/******/ 				Object.prototype.hasOwnProperty.call(outdatedDependencies, moduleId)
/******/ 			) {
/******/ 				module = installedModules[moduleId];
/******/ 				if (module) {
/******/ 					moduleOutdatedDependencies = outdatedDependencies[moduleId];
/******/ 					for (j = 0; j < moduleOutdatedDependencies.length; j++) {
/******/ 						dependency = moduleOutdatedDependencies[j];
/******/ 						idx = module.children.indexOf(dependency);
/******/ 						if (idx >= 0) module.children.splice(idx, 1);
/******/ 					}
/******/ 				}
/******/ 			}
/******/ 		}
/******/
/******/ 		// Now in "apply" phase
/******/ 		hotSetStatus("apply");
/******/
/******/ 		hotCurrentHash = hotUpdateNewHash;
/******/
/******/ 		// insert new code
/******/ 		for (moduleId in appliedUpdate) {
/******/ 			if (Object.prototype.hasOwnProperty.call(appliedUpdate, moduleId)) {
/******/ 				modules[moduleId] = appliedUpdate[moduleId];
/******/ 			}
/******/ 		}
/******/
/******/ 		// call accept handlers
/******/ 		var error = null;
/******/ 		for (moduleId in outdatedDependencies) {
/******/ 			if (
/******/ 				Object.prototype.hasOwnProperty.call(outdatedDependencies, moduleId)
/******/ 			) {
/******/ 				module = installedModules[moduleId];
/******/ 				if (module) {
/******/ 					moduleOutdatedDependencies = outdatedDependencies[moduleId];
/******/ 					var callbacks = [];
/******/ 					for (i = 0; i < moduleOutdatedDependencies.length; i++) {
/******/ 						dependency = moduleOutdatedDependencies[i];
/******/ 						cb = module.hot._acceptedDependencies[dependency];
/******/ 						if (cb) {
/******/ 							if (callbacks.indexOf(cb) !== -1) continue;
/******/ 							callbacks.push(cb);
/******/ 						}
/******/ 					}
/******/ 					for (i = 0; i < callbacks.length; i++) {
/******/ 						cb = callbacks[i];
/******/ 						try {
/******/ 							cb(moduleOutdatedDependencies);
/******/ 						} catch (err) {
/******/ 							if (options.onErrored) {
/******/ 								options.onErrored({
/******/ 									type: "accept-errored",
/******/ 									moduleId: moduleId,
/******/ 									dependencyId: moduleOutdatedDependencies[i],
/******/ 									error: err
/******/ 								});
/******/ 							}
/******/ 							if (!options.ignoreErrored) {
/******/ 								if (!error) error = err;
/******/ 							}
/******/ 						}
/******/ 					}
/******/ 				}
/******/ 			}
/******/ 		}
/******/
/******/ 		// Load self accepted modules
/******/ 		for (i = 0; i < outdatedSelfAcceptedModules.length; i++) {
/******/ 			var item = outdatedSelfAcceptedModules[i];
/******/ 			moduleId = item.module;
/******/ 			hotCurrentParents = [moduleId];
/******/ 			try {
/******/ 				__webpack_require__(moduleId);
/******/ 			} catch (err) {
/******/ 				if (typeof item.errorHandler === "function") {
/******/ 					try {
/******/ 						item.errorHandler(err);
/******/ 					} catch (err2) {
/******/ 						if (options.onErrored) {
/******/ 							options.onErrored({
/******/ 								type: "self-accept-error-handler-errored",
/******/ 								moduleId: moduleId,
/******/ 								error: err2,
/******/ 								originalError: err
/******/ 							});
/******/ 						}
/******/ 						if (!options.ignoreErrored) {
/******/ 							if (!error) error = err2;
/******/ 						}
/******/ 						if (!error) error = err;
/******/ 					}
/******/ 				} else {
/******/ 					if (options.onErrored) {
/******/ 						options.onErrored({
/******/ 							type: "self-accept-errored",
/******/ 							moduleId: moduleId,
/******/ 							error: err
/******/ 						});
/******/ 					}
/******/ 					if (!options.ignoreErrored) {
/******/ 						if (!error) error = err;
/******/ 					}
/******/ 				}
/******/ 			}
/******/ 		}
/******/
/******/ 		// handle errors in accept handlers and self accepted module load
/******/ 		if (error) {
/******/ 			hotSetStatus("fail");
/******/ 			return Promise.reject(error);
/******/ 		}
/******/
/******/ 		hotSetStatus("idle");
/******/ 		return new Promise(function(resolve) {
/******/ 			resolve(outdatedModules);
/******/ 		});
/******/ 	}
/******/
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// object to store loaded and loading chunks
/******/ 	// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 	// Promise = chunk loading, 0 = chunk loaded
/******/ 	var installedChunks = {
/******/ 		"Console": 0
/******/ 	};
/******/
/******/ 	var deferredModules = [];
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {},
/******/ 			hot: hotCreateModule(moduleId),
/******/ 			parents: (hotCurrentParentsTemp = hotCurrentParents, hotCurrentParents = [], hotCurrentParentsTemp),
/******/ 			children: []
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, hotCreateRequire(moduleId));
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/cl/dist/";
/******/
/******/ 	// __webpack_hash__
/******/ 	__webpack_require__.h = function() { return hotCurrentHash; };
/******/
/******/ 	var jsonpArray = window["webpackJsonp_name_"] = window["webpackJsonp_name_"] || [];
/******/ 	var oldJsonpFunction = jsonpArray.push.bind(jsonpArray);
/******/ 	jsonpArray.push = webpackJsonpCallback;
/******/ 	jsonpArray = jsonpArray.slice();
/******/ 	for(var i = 0; i < jsonpArray.length; i++) webpackJsonpCallback(jsonpArray[i]);
/******/ 	var parentJsonpFunction = oldJsonpFunction;
/******/
/******/
/******/ 	// add entry module to deferred list
/******/ 	deferredModules.push(["./vendor/cl/console/index.js","common","vendor"]);
/******/ 	// run deferred modules when ready
/******/ 	return checkDeferredModules();
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./vendor/cl/console/js/ConsoleComponentBase.vue?vue&type=script&lang=js&":
/*!**************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--2!./node_modules/vue-loader/lib??vue-loader-options!./vendor/cl/console/js/ConsoleComponentBase.vue?vue&type=script&lang=js& ***!
  \**************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
var UserVueBase = Site.UserVueBase;
/**
 * Base component for console pages.
 *
 * Provides:
 * nav2 menu support with automatic removal.
 * @alias ConsoleComponentBase
 * @constructor
 */

/* harmony default export */ __webpack_exports__["default"] = ({
  'extends': UserVueBase,
  methods: {
    /**
     * Add an option to the nav2 menu.
     * @param title Title of the option to add.
     * @param order Order in the menu.
     * @param closure Function to call when selected.
     * @memberof ConsoleComponentBase
     */
    addNav2: function addNav2(title, order, closure) {
      var item = this.$site.console.components.addNav2Link(this, title, order, closure);
      this.components1.push(item);
      return item;
    },

    /**
     * Add an option to the nav2 menu that is a router link
     * @param title Title of the option to add.
     * @param order Order in the menu.
     * @param link Link without Site.root
     * @memberof ConsoleComponentBase
     */
    addNav2Link: function addNav2Link(title, order, link) {
      var _this = this;

      this.addNav2(title, order, function () {
        _this.$router.push(Site.root + link);
      });
    },

    /**
      * Remove a nav2 item.
      * @param item Item object as returned by addNav2
      * @memberof ConsoleComponentBase
      */
    removeNav2: function removeNav2(item) {
      var i = this.components1.indexOf(item);

      if (i >= 0) {
        this.components1.splice(i, 1);
      }

      this.$site.console.components.removeNav2(this, item);
    },
    timeRelativeUNIX: function timeRelativeUNIX(time, currentTime, format) {
      return this.$site.TimeFormatter.relativeUNIX(time, currentTime, format);
    }
  },
  created: function created() {
    this.components1 = [];
  },
  beforeDestroy: function beforeDestroy() {
    this.$site.console.components.removeNav2(this, this.components1);
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./vendor/cl/console/js/NavComponent.vue?vue&type=script&lang=js&":
/*!******************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--2!./node_modules/vue-loader/lib??vue-loader-options!./vendor/cl/console/js/NavComponent.vue?vue&type=script&lang=js& ***!
  \******************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ __webpack_exports__["default"] = ({
  props: ['console', 'user'],
  data: function data() {
    return {
      homeLink: ''
    };
  },
  mounted: function mounted() {
    this.homeLink = this.$site.root + '/';
  },
  methods: {
    pageLink: function pageLink(page) {
      return "".concat(this.$site.root, "/cl/console").concat(page.route);
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./vendor/cl/console/js/NotFoundComponent.vue?vue&type=script&lang=js&":
/*!***********************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--2!./node_modules/vue-loader/lib??vue-loader-options!./vendor/cl/console/js/NotFoundComponent.vue?vue&type=script&lang=js& ***!
  \***********************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

//
//
//
//
//
//
module.exports = {
  mounted: function mounted() {
    this.$parent.setTitle('Page does not exist...');
  }
};

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./vendor/cl/console/js/TablesComponent.vue?vue&type=script&lang=js&":
/*!*********************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--2!./node_modules/vue-loader/lib??vue-loader-options!./vendor/cl/console/js/TablesComponent.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var dialog_cl__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! dialog-cl */ "./packages/dialog-cl/src/app.modules.js");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ __webpack_exports__["default"] = ({
  data: function data() {
    return {
      tables: this.$site.console.tables.tables,
      results: ''
    };
  },
  mounted: function mounted() {
    this.$parent.setTitle(': Database Tables');
    this.$site.console.tables.tables.sort(function (a, b) {
      return a.order - b.order;
    });
  },
  methods: {
    create: function create(table, drop) {
      var _this = this;

      this.$site.api.post(table.api, {
        drop: drop ? 'yes' : 'no'
      }).then(function (response) {
        if (!response.hasError()) {
          if (drop) {
            _this.$site.toast(_this, table.title + ' tables dropped and recreated');
          } else {
            _this.$site.toast(_this, table.title + ' tables created');
          }
        } else {
          _this.$site.toast(_this, response);
        }
      })["catch"](function (error) {
        _this.$site.toast(_this, error);
      });
    },
    dropCreate: function dropCreate(table) {
      var _this2 = this;

      new dialog_cl__WEBPACK_IMPORTED_MODULE_0__["default"].MessageBox("Are you sure?", 'Are you sure you want to drop and recreate the ' + table.title + ' tables?', dialog_cl__WEBPACK_IMPORTED_MODULE_0__["default"].MessageBox.OKCANCEL, function () {
        _this2.create(table, true);
      });
    },
    clean: function clean(table) {
      var _this3 = this;

      this.$site.api.post(table.api, {
        clean: 'yes'
      }).then(function (response) {
        if (!response.hasError()) {
          var result = response.getData('table-clean').attributes;
          _this3.results += table.title + " Tables\n\n" + result + "\n";
          console.log(result);
        } else {
          _this3.$site.toast(_this3, response);
        }
      })["catch"](function (error) {
        _this3.$site.toast(_this3, error);
      });
    }
  }
});

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/resolve-url-loader/index.js!./node_modules/sass-loader/dist/cjs.js?sourceMap!./node_modules/vue-loader/lib/index.js?!./vendor/cl/console/js/TablesComponent.vue?vue&type=style&index=0&id=746ac1d7&lang=scss&scoped=true&":
/*!************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/resolve-url-loader!./node_modules/sass-loader/dist/cjs.js?sourceMap!./node_modules/vue-loader/lib??vue-loader-options!./vendor/cl/console/js/TablesComponent.vue?vue&type=style&index=0&id=746ac1d7&lang=scss&scoped=true& ***!
  \************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js")(false);
// Module
exports.push([module.i, "table td[data-v-746ac1d7] {\n  padding: 0.25em;\n}\ntable button[data-v-746ac1d7] {\n  display: inline-block;\n  font-size: 0.85em;\n  font-style: italic;\n}\nli span[data-v-746ac1d7] {\n  display: inline-block;\n  width: 6em;\n  font-size: inherit;\n  font-style: normal;\n}\n", ""]);


/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./vendor/cl/console/js/NavComponent.vue?vue&type=template&id=275a6eeb&":
/*!************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./vendor/cl/console/js/NavComponent.vue?vue&type=template&id=275a6eeb& ***!
  \************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("nav", { staticClass: "cl-nav" }, [
    _c("div", [
      _c(
        "ul",
        { staticClass: "dividers" },
        [
          _c("li", [
            _c("a", { attrs: { href: _vm.homeLink } }, [
              _c("span", { staticClass: "home" }, [_vm._v("Home")])
            ])
          ]),
          _vm._v(" "),
          _vm._l(_vm.console.components.pages, function(page) {
            return page.available(_vm.user)
              ? _c(
                  "li",
                  [
                    _c("router-link", { attrs: { to: _vm.pageLink(page) } }, [
                      _vm._v(_vm._s(page.title))
                    ])
                  ],
                  1
                )
              : _vm._e()
          })
        ],
        2
      )
    ]),
    _vm._v(" "),
    _vm.console.components.nav2.length > 0
      ? _c("div", [
          _c("div", { staticClass: "nav2" }, [
            _c(
              "div",
              { staticClass: "left" },
              [
                _vm.console.components.nav2left
                  ? _c(_vm.console.components.nav2left, { tag: "component" })
                  : _vm._e()
              ],
              1
            ),
            _vm._v(" "),
            _c(
              "div",
              { staticClass: "center" },
              _vm._l(_vm.console.components.nav2, function(c) {
                return _c(
                  "div",
                  [
                    _c(c.component, {
                      tag: "component",
                      attrs: { short: _vm.console.components.nav2.length > 2 }
                    })
                  ],
                  1
                )
              }),
              0
            ),
            _vm._v(" "),
            _c(
              "div",
              { staticClass: "right" },
              [
                _vm.console.components.nav2right
                  ? _c(_vm.console.components.nav2right, { tag: "component" })
                  : _vm._e()
              ],
              1
            )
          ])
        ])
      : _vm._e()
  ])
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./vendor/cl/console/js/NotFoundComponent.vue?vue&type=template&id=a597ab66&":
/*!*****************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./vendor/cl/console/js/NotFoundComponent.vue?vue&type=template&id=a597ab66& ***!
  \*****************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _vm._m(0)
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "content" }, [
      _c("p", [_vm._v("Page does not exist...")])
    ])
  }
]
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./vendor/cl/console/js/TablesComponent.vue?vue&type=template&id=746ac1d7&scoped=true&":
/*!***************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./vendor/cl/console/js/TablesComponent.vue?vue&type=template&id=746ac1d7&scoped=true& ***!
  \***************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", { staticClass: "content" }, [
    _c("h2", [_vm._v("Database Tables Management")]),
    _vm._v(" "),
    _vm._m(0),
    _vm._v(" "),
    _c("p", [
      _vm._v(
        "The page provides an Administrator the ability to create and destroy database tables.\n  Only use during course startup! The create option will not drop an existing table\n  unless the drop and create option is selected. The clean option allows for cleaning\n  of orphaned records from tables."
      )
    ]),
    _vm._v(" "),
    _c("div", [
      _c(
        "table",
        [
          _vm._m(1),
          _vm._v(" "),
          _vm._l(_vm.tables, function(table) {
            return _c("tr", [
              _c("td", [_vm._v(_vm._s(table.title))]),
              _vm._v(" "),
              _c("td", [
                _c(
                  "button",
                  {
                    on: {
                      click: function($event) {
                        $event.preventDefault()
                        return _vm.create(table, false)
                      }
                    }
                  },
                  [_vm._v("create")]
                )
              ]),
              _vm._v(" "),
              _c("td", [
                _c(
                  "button",
                  {
                    on: {
                      click: function($event) {
                        $event.preventDefault()
                        return _vm.dropCreate(table)
                      }
                    }
                  },
                  [_vm._v("drop-and-create")]
                )
              ]),
              _vm._v(" "),
              _c("td", [
                _c(
                  "button",
                  {
                    on: {
                      click: function($event) {
                        $event.preventDefault()
                        return _vm.clean(table)
                      }
                    }
                  },
                  [_vm._v("clean")]
                )
              ])
            ])
          })
        ],
        2
      )
    ]),
    _vm._v(" "),
    _vm.results.length > 0
      ? _c("pre", { staticClass: "code" }, [_vm._v(_vm._s(_vm.results))])
      : _vm._e()
  ])
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("p", { staticClass: "center red" }, [
      _c("em", [_vm._v("Use with caution!")])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("tr", [
      _c("th", [_vm._v("Tables")]),
      _vm._v(" "),
      _c("th", { attrs: { colspan: "3" } }, [_vm._v("Operations")])
    ])
  }
]
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-style-loader/index.js!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/resolve-url-loader/index.js!./node_modules/sass-loader/dist/cjs.js?sourceMap!./node_modules/vue-loader/lib/index.js?!./vendor/cl/console/js/TablesComponent.vue?vue&type=style&index=0&id=746ac1d7&lang=scss&scoped=true&":
/*!********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-style-loader!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/resolve-url-loader!./node_modules/sass-loader/dist/cjs.js?sourceMap!./node_modules/vue-loader/lib??vue-loader-options!./vendor/cl/console/js/TablesComponent.vue?vue&type=style&index=0&id=746ac1d7&lang=scss&scoped=true& ***!
  \********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(/*! !../../../../node_modules/css-loader/dist/cjs.js!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/resolve-url-loader!../../../../node_modules/sass-loader/dist/cjs.js?sourceMap!../../../../node_modules/vue-loader/lib??vue-loader-options!./TablesComponent.vue?vue&type=style&index=0&id=746ac1d7&lang=scss&scoped=true& */ "./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/resolve-url-loader/index.js!./node_modules/sass-loader/dist/cjs.js?sourceMap!./node_modules/vue-loader/lib/index.js?!./vendor/cl/console/js/TablesComponent.vue?vue&type=style&index=0&id=746ac1d7&lang=scss&scoped=true&");
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var add = __webpack_require__(/*! ../../../../node_modules/vue-style-loader/lib/addStylesClient.js */ "./node_modules/vue-style-loader/lib/addStylesClient.js").default
var update = add("3a068f1c", content, false, {});
// Hot Module Replacement
if(true) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept(/*! !../../../../node_modules/css-loader/dist/cjs.js!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/resolve-url-loader!../../../../node_modules/sass-loader/dist/cjs.js?sourceMap!../../../../node_modules/vue-loader/lib??vue-loader-options!./TablesComponent.vue?vue&type=style&index=0&id=746ac1d7&lang=scss&scoped=true& */ "./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/resolve-url-loader/index.js!./node_modules/sass-loader/dist/cjs.js?sourceMap!./node_modules/vue-loader/lib/index.js?!./vendor/cl/console/js/TablesComponent.vue?vue&type=style&index=0&id=746ac1d7&lang=scss&scoped=true&", function() {
     var newContent = __webpack_require__(/*! !../../../../node_modules/css-loader/dist/cjs.js!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/resolve-url-loader!../../../../node_modules/sass-loader/dist/cjs.js?sourceMap!../../../../node_modules/vue-loader/lib??vue-loader-options!./TablesComponent.vue?vue&type=style&index=0&id=746ac1d7&lang=scss&scoped=true& */ "./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/resolve-url-loader/index.js!./node_modules/sass-loader/dist/cjs.js?sourceMap!./node_modules/vue-loader/lib/index.js?!./vendor/cl/console/js/TablesComponent.vue?vue&type=style&index=0&id=746ac1d7&lang=scss&scoped=true&");
     if(typeof newContent === 'string') newContent = [[module.i, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ "./vendor/cl/console/index.js":
/*!************************************!*\
  !*** ./vendor/cl/console/index.js ***!
  \************************************/
/*! exports provided: Console */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Console", function() { return Console; });
/* harmony import */ var _js_ConsoleFactory__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./js/ConsoleFactory */ "./vendor/cl/console/js/ConsoleFactory.js");
/* harmony import */ var _js_ConsoleComponentBase_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./js/ConsoleComponentBase.vue */ "./vendor/cl/console/js/ConsoleComponentBase.vue");


Site.ConsoleComponentBase = _js_ConsoleComponentBase_vue__WEBPACK_IMPORTED_MODULE_1__["default"];
var Console = _js_ConsoleFactory__WEBPACK_IMPORTED_MODULE_0__["ConsoleFactory"].create(Site.site);


/***/ }),

/***/ "./vendor/cl/console/js/Console.js":
/*!*****************************************!*\
  !*** ./vendor/cl/console/js/Console.js ***!
  \*****************************************/
/*! exports provided: Console */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Console", function() { return Console; });
/* harmony import */ var _ConsoleComponents__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ConsoleComponents */ "./vendor/cl/console/js/ConsoleComponents.js");
/* harmony import */ var _ConsoleTables__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ConsoleTables */ "./vendor/cl/console/js/ConsoleTables.js");
/* harmony import */ var _ConsoleComponent__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ConsoleComponent */ "./vendor/cl/console/js/ConsoleComponent.js");
/* harmony import */ var _NavComponent_vue__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./NavComponent.vue */ "./vendor/cl/console/js/NavComponent.vue");
/* harmony import */ var _NotFoundComponent_vue__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./NotFoundComponent.vue */ "./vendor/cl/console/js/NotFoundComponent.vue");





/**
 * Object that represents the site console.
 * @param {Site} site The site object
 * @constructor
 */

var Console = function Console(site) {
  /** This property makes it possible to change the console title
      * @memberOf Console */
  this.title = 'Site Console';
  /** The console components are installed components
   * like the users editor or table creation. */

  this.components = new _ConsoleComponents__WEBPACK_IMPORTED_MODULE_0__["ConsoleComponents"](site);
  /** The console tables component keeps track of the
   * database tables we may need to create */

  this.tables = new _ConsoleTables__WEBPACK_IMPORTED_MODULE_1__["ConsoleTables"]();
  /**
      * Start the console system.
   * @param element Element we put the console VUE into
   */

  this.start = function (element) {
    var _this = this;

    this.components.sort();
    this.components.start(this); // Get the installed user

    var user = site.store.state.user.user; //
    // Configure the template, setting up the top-level menus
    //

    var template = "<div class=\"cl-console\"><site-header :title=\"title\">\n<console-nav :console=\"console\" :user=\"user\"></console-nav>\n</site-header>";
    this.components.main.forEach(function (component) {
      template += "<".concat(component.tag, " />");
    });
    template += "\n<router-view></router-view>\n<site-footer></site-footer></div>"; //
    // Set up the routes
    //

    var routes = [];
    var _iteratorNormalCompletion = true;
    var _didIteratorError = false;
    var _iteratorError = undefined;

    try {
      for (var _iterator = this.components.getRoutes()[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
        var route = _step.value;
        var robj = {
          path: site.root + '/cl/console' + route.route,
          component: route.component
        };

        if (route.props !== undefined) {
          robj.props = route.props;
        }

        if (route.name !== undefined) {
          robj.name = route.name;
        }

        routes.push(robj);
      }
    } catch (err) {
      _didIteratorError = true;
      _iteratorError = err;
    } finally {
      try {
        if (!_iteratorNormalCompletion && _iterator["return"] != null) {
          _iterator["return"]();
        }
      } finally {
        if (_didIteratorError) {
          throw _iteratorError;
        }
      }
    }

    this.components.pages.forEach(function (page) {
      if (user.atLeast(page.minimumRole(user))) {
        var component = page.component !== undefined ? page.component : new _ConsoleComponent__WEBPACK_IMPORTED_MODULE_2__["ConsoleComponent"](_this, site, user, page);
        routes.push({
          path: site.root + '/cl/console' + page.route,
          component: component
        });
        page.sections.forEach(function (section) {
          section.options.forEach(function (option) {
            if (option.available(user)) {
              if (option.routes !== undefined) {
                option.routes.forEach(function (route) {
                  var robj = {
                    path: site.root + '/cl/console' + route.route,
                    component: route.component
                  };

                  if (route.props !== undefined) {
                    robj.props = route.props;
                  }

                  if (route.name !== undefined) {
                    robj.name = route.name;
                  }

                  routes.push(robj);
                });
              }
            }
          });
        });
      }
    });
    routes.push({
      path: '*',
      component: _NotFoundComponent_vue__WEBPACK_IMPORTED_MODULE_4__["default"]
    });
    var Header = site.info.header.component();
    var Footer = site.info.footer.component();
    var router = new site.VueRouter({
      routes: routes,
      mode: 'history'
    });
    var components = {
      'site-header': Header,
      'site-footer': Footer,
      'console-nav': _NavComponent_vue__WEBPACK_IMPORTED_MODULE_3__["default"]
    };
    var store = site.store;
    var siteTitle = this.title;
    var Console = this;
    this.masterVue = new site.Vue({
      el: element,
      store: store,
      // Inject the store
      site: site,
      // Inject site, so $site is available for all children
      template: template,
      router: router,
      data: function data() {
        return {
          title: siteTitle,
          console: Console,
          user: user
        };
      },
      props: {},
      components: components,
      methods: {
        isAdmin: function isAdmin() {
          return admin;
        },

        /*
         * Set the site title. This can be used from
         * the child Vue's using this.$parent.setTitle('')
         * @param title Title to set
         */
        setTitle: function setTitle(title) {
          this.title = siteTitle + title;
          document.title = Site.info.siteName + ' ' + siteTitle + title;
        }
      },
      created: function created() {
        this.setTitle('');
      },
      mounted: function mounted() {
        new site.StickyNav('div.cl-console nav');
      }
    });
  };
};

/***/ }),

/***/ "./vendor/cl/console/js/ConsoleComponent.js":
/*!**************************************************!*\
  !*** ./vendor/cl/console/js/ConsoleComponent.js ***!
  \**************************************************/
/*! exports provided: ConsoleComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConsoleComponent", function() { return ConsoleComponent; });
/**
 * Components that represent a console page.
 * @constructor
 */
var ConsoleComponent = function ConsoleComponent(console, site, user, page) {
  var _this = this;

  this.template = "<div id=\"cl-console-main\"><div class=\"content\">";
  var components = {};
  var cnt = 1;
  page.sections.forEach(function (section) {
    if (!section.available(user)) {
      return;
    }

    _this.template += "<h2>".concat(section.title, "</h2>");
    var menu = ''; // Add the menu options

    section.options.forEach(function (option) {
      if (option.title !== undefined) {
        var atLeast = option.atLeast;

        if (atLeast === Object(atLeast)) {
          atLeast = site.permissions.atLeast(atLeast.tag, atLeast["default"]);
        }

        if (atLeast === undefined || user.atLeast(atLeast)) {
          menu += "<li><router-link to=\"".concat(site.root, "/cl/console").concat(option.route, "\">").concat(option.title, "</router-link></li>");
        }
      }
    });

    if (menu.length > 0) {
      _this.template += '<ul>' + menu + '</ul>';
    } // Add any custom components


    section.options.forEach(function (option) {
      if (option.component !== undefined) {
        _this.template += "<console-component-".concat(cnt, "></console-component-").concat(cnt, ">");
        components['console-component-' + cnt] = option.component;
        cnt++;
      }
    });
  });
  this.template += "</div></div>";
  this.components = components;

  this.mounted = function () {
    if (page.title === 'Main') {
      this.$parent.setTitle('');
    } else {
      this.$parent.setTitle(': ' + page.title);
    }
  };
};

/***/ }),

/***/ "./vendor/cl/console/js/ConsoleComponentBase.vue":
/*!*******************************************************!*\
  !*** ./vendor/cl/console/js/ConsoleComponentBase.vue ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _ConsoleComponentBase_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ConsoleComponentBase.vue?vue&type=script&lang=js& */ "./vendor/cl/console/js/ConsoleComponentBase.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");
var render, staticRenderFns




/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_1__["default"])(
  _ConsoleComponentBase_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"],
  render,
  staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (true) {
  var api = __webpack_require__(/*! ./node_modules/vue-hot-reload-api/dist/index.js */ "./node_modules/vue-hot-reload-api/dist/index.js")
  api.install(__webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm.js"))
  if (api.compatible) {
    module.hot.accept()
    if (!api.isRecorded('69e355a8')) {
      api.createRecord('69e355a8', component.options)
    } else {
      api.reload('69e355a8', component.options)
    }
    
  }
}
component.options.__file = "vendor/cl/console/js/ConsoleComponentBase.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./vendor/cl/console/js/ConsoleComponentBase.vue?vue&type=script&lang=js&":
/*!********************************************************************************!*\
  !*** ./vendor/cl/console/js/ConsoleComponentBase.vue?vue&type=script&lang=js& ***!
  \********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_2_node_modules_vue_loader_lib_index_js_vue_loader_options_ConsoleComponentBase_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--2!../../../../node_modules/vue-loader/lib??vue-loader-options!./ConsoleComponentBase.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./vendor/cl/console/js/ConsoleComponentBase.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_2_node_modules_vue_loader_lib_index_js_vue_loader_options_ConsoleComponentBase_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./vendor/cl/console/js/ConsoleComponents.js":
/*!***************************************************!*\
  !*** ./vendor/cl/console/js/ConsoleComponents.js ***!
  \***************************************************/
/*! exports provided: ConsoleComponents */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConsoleComponents", function() { return ConsoleComponents; });
/* harmony import */ var _ConsolePage__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ConsolePage */ "./vendor/cl/console/js/ConsolePage.js");

/**
 * Management of all console components
 *
 * Components are:
 * start scripts run when the console is started (addStart)
 * main Components added to every page (addMainComponent)
 * options Adds top-level menu options and options on pages (addOption)
 * routes Adds routes to the console directory (addRoute, addRoutes) *
 * @param site
 * @constructor
 */

var ConsoleComponents = function ConsoleComponents(site) {
  var _this2 = this;

  //
  // Start scripts are run when the console is started
  //
  var start = [];

  this.addStart = function (script) {
    start.push(script);
  };

  this.start = function (console) {
    start.forEach(function (startup) {
      startup(console);
    });
  }; //
  // Any components to add to the main page (every page)
  //
  // The course subsystem uses this to add a bar the selects
  // the course section right below the menu bar.
  //


  this.main = [];

  this.addMainComponent = function (tag, component, order) {// this.main.push({
    //     tag: tag,
    //     component: component,
    //     order: order
    // });
  };

  this.nav2 = [];

  this.addNav2 = function (component, order) {
    this.nav2.push({
      component: component,
      order: order
    });
    this.nav2.sort(function (a, b) {
      return a.order - b.order;
    });
    return component;
  };

  this.removeNav2 = function (vue, component) {
    if (Array.isArray(component)) {
      var _iteratorNormalCompletion = true;
      var _didIteratorError = false;
      var _iteratorError = undefined;

      try {
        for (var _iterator = component[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
          var c = _step.value;
          this.removeNav2(vue, c);
        }
      } catch (err) {
        _didIteratorError = true;
        _iteratorError = err;
      } finally {
        try {
          if (!_iteratorNormalCompletion && _iterator["return"] != null) {
            _iterator["return"]();
          }
        } finally {
          if (_didIteratorError) {
            throw _iteratorError;
          }
        }
      }

      return;
    }

    for (var i = 0; i < this.nav2.length; i++) {
      if (this.nav2[i].component === component) {
        this.nav2.splice(i, 1);
        vue.$set(this, 'nav2', this.nav2);
        return;
      }
    }
  };

  this.addNav2Link = function (vue, name, order, _click) {
    var component = {
      template: "<a @click.prevent=\"click\">".concat(name, "</a>"),
      methods: {
        click: function click() {
          _click();
        }
      }
    };
    this.addNav2(component, order);
    this.nav2.sort(function (a, b) {
      return a.order - b.order;
    });
    vue.$set(this, 'nav2', this.nav2);
    return component;
  };

  this.nav2right = null;
  this.nav2left = null; //
  // Console options are menu options in the site console.
  // This is how the top-level menus, sections, and links
  // are defined.
  //

  var options = [];

  this.addOption = function (option) {
    options.push(option);
  };

  this.pages = [];
  /**
   * Sort the components into a structure
   * for creating the management pages.
   */

  this.sort = function () {
    var _this = this;

    options.forEach(function (option) {
      var page = findPage(option.page.title);

      if (page !== null) {
        page.add(option);
      } else {
        var _page = new _ConsolePage__WEBPACK_IMPORTED_MODULE_0__["ConsolePage"](site, option.page);

        _this.pages.push(_page);

        _page.add(option);
      }
    }); // Sort the pages, sections, and options in order

    this.pages.sort(function (a, b) {
      return a.order - b.order;
    });
    this.pages.forEach(function (page) {
      page.sort();
    }); // Sort any main components

    this.main.sort(function (a, b) {
      return a.order - b.order;
    });
  };

  this.getPages = function () {
    return this.pages;
  };

  var routes = [];

  this.addRoute = function (route) {
    routes.push(route);
  };

  this.addRoutes = function (addroutes) {
    var _iteratorNormalCompletion2 = true;
    var _didIteratorError2 = false;
    var _iteratorError2 = undefined;

    try {
      for (var _iterator2 = addroutes[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
        var route = _step2.value;
        routes.push(route);
      }
    } catch (err) {
      _didIteratorError2 = true;
      _iteratorError2 = err;
    } finally {
      try {
        if (!_iteratorNormalCompletion2 && _iterator2["return"] != null) {
          _iterator2["return"]();
        }
      } finally {
        if (_didIteratorError2) {
          throw _iteratorError2;
        }
      }
    }
  };

  this.getRoutes = function () {
    return routes;
  };
  /*
   * Given a list of items of the form {title: 'title', order: 'order'},
   * find an item with a given title.
   * @param list
   * @param title
   */


  var findPage = function findPage(title) {
    for (var i in _this2.pages) {
      if (_this2.pages[i].title === title) {
        return _this2.pages[i];
      }
    }

    return null;
  };
};

/***/ }),

/***/ "./vendor/cl/console/js/ConsoleFactory.js":
/*!************************************************!*\
  !*** ./vendor/cl/console/js/ConsoleFactory.js ***!
  \************************************************/
/*! exports provided: ConsoleFactory */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConsoleFactory", function() { return ConsoleFactory; });
/* harmony import */ var _Console__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Console */ "./vendor/cl/console/js/Console.js");
/* harmony import */ var _TablesComponent_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./TablesComponent.vue */ "./vendor/cl/console/js/TablesComponent.vue");


/**
 * Factory to create the Console object
 * @constructor
 */

var ConsoleFactory = function ConsoleFactory() {};

ConsoleFactory.create = function (site) {
  var siteConsole = new _Console__WEBPACK_IMPORTED_MODULE_0__["Console"](site); // Save as a site property

  site.console = siteConsole; // Add standard options

  siteConsole.components.addOption({
    atLeast: Users.User.STAFF,
    page: {
      title: 'Main',
      route: '',
      order: 1
    }
  });
  siteConsole.components.addOption({
    atLeast: Users.User.ADMIN,
    page: {
      title: 'Management',
      route: '/management',
      order: 10
    },
    section: {
      title: 'Site Management',
      order: 1
    },
    title: 'Tables',
    order: 10,
    route: '/management/tables',
    routes: [{
      route: '/management/tables',
      name: 'tables',
      component: _TablesComponent_vue__WEBPACK_IMPORTED_MODULE_1__["default"]
    }]
  });
  site.start(function () {
    var element = document.querySelector('div.cl-console');

    if (element !== null) {
      siteConsole.start(element);
    }
  });
  return siteConsole;
};

/***/ }),

/***/ "./vendor/cl/console/js/ConsolePage.js":
/*!*********************************************!*\
  !*** ./vendor/cl/console/js/ConsolePage.js ***!
  \*********************************************/
/*! exports provided: ConsolePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConsolePage", function() { return ConsolePage; });
/* harmony import */ var _ConsoleSection__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ConsoleSection */ "./vendor/cl/console/js/ConsoleSection.js");

/**
 * Represents a console page in the ConsoleComponents collection
 * @param {Site} site The site object
 * @param page Object representation of page as passed from the server
 * @constructor
 */

var ConsolePage = function ConsolePage(site, page) {
  var _this = this;

  /** Page title */
  this.title = page.title;
  /** Router to get to this page */

  this.route = page.route;
  /** Order of page presentation in a component menu */

  this.order = page.order;
  /** The page component */

  this.component = page.component;
  /** Optional minimum user role to access the page */

  this.atLeast = page.atLeast !== undefined ? page.atLeast : null;
  /** Page sections */

  this.sections = [];
  /**
      * Add a section to the page.
   * @param option
   */

  this.add = function (option) {
    // Does the item have a section?
    if (option.section === undefined) {
      return;
    }

    var section = findSection(option.section.title);

    if (section !== null) {
      section.add(option);
    } else {
      var _section = new _ConsoleSection__WEBPACK_IMPORTED_MODULE_0__["ConsoleSection"](site, option.section);

      this.sections.push(_section);

      _section.add(option);
    }
  };
  /**
      * Sort page sections into order
   */


  this.sort = function () {
    this.sections.sort(function (a, b) {
      return a.order - b.order;
    });
    this.sections.forEach(function (section) {
      section.sort();
    });
  };

  var findSection = function findSection(title) {
    for (var i in _this.sections) {
      if (_this.sections[i].title === title) {
        return _this.sections[i];
      }
    }

    return null;
  };
  /**
      * Is this page available to this user?
   * @param user User to test
   */


  this.available = function (user) {
    return user.atLeast(this.minimumRole(user));
  };
  /**
      * Compute minimum role to be able to access this page.
      *
      * The minimum role is determined by what is specified for
      * this page plus any pages linked to by this page.
   * @param user
   * @returns {*}
   */


  this.minimumRole = function (user) {
    var roleLeast = this.atLeast;

    if (roleLeast === Object(roleLeast)) {
      roleLeast = site.permissions.atLeast(roleLeast.tag, roleLeast["default"]);
    }

    var priorityLeast = this.atLeast !== null ? user.getRolePriority(roleLeast) : 100000;
    this.sections.forEach(function (section) {
      var sectionLeast = section.minimumRole(user);
      var priority = user.getRolePriority(sectionLeast);

      if (priority !== 0 && priority < priorityLeast) {
        roleLeast = sectionLeast;
        priorityLeast = priority;
      }
    });

    if (roleLeast === null) {
      return 'A'; ///< Always ADMIN
    }

    return roleLeast;
  };
};

/***/ }),

/***/ "./vendor/cl/console/js/ConsoleSection.js":
/*!************************************************!*\
  !*** ./vendor/cl/console/js/ConsoleSection.js ***!
  \************************************************/
/*! exports provided: ConsoleSection */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConsoleSection", function() { return ConsoleSection; });
/* harmony import */ var _ConsoleSectionOption__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ConsoleSectionOption */ "./vendor/cl/console/js/ConsoleSectionOption.js");

/**
 * Console section: These are the <h2> page sections
 * @constructor
 */

var ConsoleSection = function ConsoleSection(site, section) {
  this.title = section.title;
  this.order = section.order;
  this.options = [];

  this.add = function (option) {
    this.options.push(new _ConsoleSectionOption__WEBPACK_IMPORTED_MODULE_0__["ConsoleSectionOption"](site, option));
  };

  this.sort = function () {
    this.options.sort(function (a, b) {
      return a.order - b.order;
    });
  };

  this.available = function (user) {
    return user.atLeast(this.minimumRole(user));
  };
  /**
   * Determine the minimum role for all options
   * in this section so we know if we can show the section.
   * @param user A user, so we can know what the possible roles are
   * @returns {string} Role
   */


  this.minimumRole = function (user) {
    if (this.options.length === 0) {
      return 'A';
    }

    var roleLeast = null;
    var priorityLeast = 1000000;
    this.options.forEach(function (option) {
      var role = option.atLeast;

      if (role === Object(role)) {
        role = site.permissions.atLeast(role.tag, role["default"]);
      }

      var priority = user.getRolePriority(role);

      if (priority !== 0 && priority < priorityLeast) {
        roleLeast = role;
        priorityLeast = priority;
      }
    });

    if (roleLeast === null) {
      return 'A'; ///< Always ADMIN
    }

    return roleLeast;
  };
};

/***/ }),

/***/ "./vendor/cl/console/js/ConsoleSectionOption.js":
/*!******************************************************!*\
  !*** ./vendor/cl/console/js/ConsoleSectionOption.js ***!
  \******************************************************/
/*! exports provided: ConsoleSectionOption */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConsoleSectionOption", function() { return ConsoleSectionOption; });
/**
 * Options in a console page section
 * @constructor
 */
var ConsoleSectionOption = function ConsoleSectionOption(site, option) {
  for (var member in option) {
    this[member] = option[member];
  }

  this.available = function (user) {
    var atLeast = this.atLeast;

    if (atLeast === Object(atLeast)) {
      atLeast = site.permissions.atLeast(atLeast.tag, atLeast["default"]);
    }

    return atLeast === undefined || user.atLeast(atLeast);
  };
};

/***/ }),

/***/ "./vendor/cl/console/js/ConsoleTables.js":
/*!***********************************************!*\
  !*** ./vendor/cl/console/js/ConsoleTables.js ***!
  \***********************************************/
/*! exports provided: ConsoleTables */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConsoleTables", function() { return ConsoleTables; });
/**
 * Keeps track of what table create/drop options are available on the site.
 * @constructor
 */
var ConsoleTables = function ConsoleTables() {
  this.tables = [{
    title: 'Site',
    order: 0,
    api: '/api/site/tables'
  }];

  this.add = function (table) {
    this.tables.push(table);
  };
};

/***/ }),

/***/ "./vendor/cl/console/js/NavComponent.vue":
/*!***********************************************!*\
  !*** ./vendor/cl/console/js/NavComponent.vue ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _NavComponent_vue_vue_type_template_id_275a6eeb___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./NavComponent.vue?vue&type=template&id=275a6eeb& */ "./vendor/cl/console/js/NavComponent.vue?vue&type=template&id=275a6eeb&");
/* harmony import */ var _NavComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./NavComponent.vue?vue&type=script&lang=js& */ "./vendor/cl/console/js/NavComponent.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _NavComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _NavComponent_vue_vue_type_template_id_275a6eeb___WEBPACK_IMPORTED_MODULE_0__["render"],
  _NavComponent_vue_vue_type_template_id_275a6eeb___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (true) {
  var api = __webpack_require__(/*! ./node_modules/vue-hot-reload-api/dist/index.js */ "./node_modules/vue-hot-reload-api/dist/index.js")
  api.install(__webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm.js"))
  if (api.compatible) {
    module.hot.accept()
    if (!api.isRecorded('275a6eeb')) {
      api.createRecord('275a6eeb', component.options)
    } else {
      api.reload('275a6eeb', component.options)
    }
    module.hot.accept(/*! ./NavComponent.vue?vue&type=template&id=275a6eeb& */ "./vendor/cl/console/js/NavComponent.vue?vue&type=template&id=275a6eeb&", function(__WEBPACK_OUTDATED_DEPENDENCIES__) { /* harmony import */ _NavComponent_vue_vue_type_template_id_275a6eeb___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./NavComponent.vue?vue&type=template&id=275a6eeb& */ "./vendor/cl/console/js/NavComponent.vue?vue&type=template&id=275a6eeb&");
(function () {
      api.rerender('275a6eeb', {
        render: _NavComponent_vue_vue_type_template_id_275a6eeb___WEBPACK_IMPORTED_MODULE_0__["render"],
        staticRenderFns: _NavComponent_vue_vue_type_template_id_275a6eeb___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]
      })
    })(__WEBPACK_OUTDATED_DEPENDENCIES__); }.bind(this))
  }
}
component.options.__file = "vendor/cl/console/js/NavComponent.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./vendor/cl/console/js/NavComponent.vue?vue&type=script&lang=js&":
/*!************************************************************************!*\
  !*** ./vendor/cl/console/js/NavComponent.vue?vue&type=script&lang=js& ***!
  \************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_2_node_modules_vue_loader_lib_index_js_vue_loader_options_NavComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--2!../../../../node_modules/vue-loader/lib??vue-loader-options!./NavComponent.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./vendor/cl/console/js/NavComponent.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_2_node_modules_vue_loader_lib_index_js_vue_loader_options_NavComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./vendor/cl/console/js/NavComponent.vue?vue&type=template&id=275a6eeb&":
/*!******************************************************************************!*\
  !*** ./vendor/cl/console/js/NavComponent.vue?vue&type=template&id=275a6eeb& ***!
  \******************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_NavComponent_vue_vue_type_template_id_275a6eeb___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./NavComponent.vue?vue&type=template&id=275a6eeb& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./vendor/cl/console/js/NavComponent.vue?vue&type=template&id=275a6eeb&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_NavComponent_vue_vue_type_template_id_275a6eeb___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_NavComponent_vue_vue_type_template_id_275a6eeb___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./vendor/cl/console/js/NotFoundComponent.vue":
/*!****************************************************!*\
  !*** ./vendor/cl/console/js/NotFoundComponent.vue ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _NotFoundComponent_vue_vue_type_template_id_a597ab66___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./NotFoundComponent.vue?vue&type=template&id=a597ab66& */ "./vendor/cl/console/js/NotFoundComponent.vue?vue&type=template&id=a597ab66&");
/* harmony import */ var _NotFoundComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./NotFoundComponent.vue?vue&type=script&lang=js& */ "./vendor/cl/console/js/NotFoundComponent.vue?vue&type=script&lang=js&");
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _NotFoundComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _NotFoundComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _NotFoundComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _NotFoundComponent_vue_vue_type_template_id_a597ab66___WEBPACK_IMPORTED_MODULE_0__["render"],
  _NotFoundComponent_vue_vue_type_template_id_a597ab66___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (true) {
  var api = __webpack_require__(/*! ./node_modules/vue-hot-reload-api/dist/index.js */ "./node_modules/vue-hot-reload-api/dist/index.js")
  api.install(__webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm.js"))
  if (api.compatible) {
    module.hot.accept()
    if (!api.isRecorded('a597ab66')) {
      api.createRecord('a597ab66', component.options)
    } else {
      api.reload('a597ab66', component.options)
    }
    module.hot.accept(/*! ./NotFoundComponent.vue?vue&type=template&id=a597ab66& */ "./vendor/cl/console/js/NotFoundComponent.vue?vue&type=template&id=a597ab66&", function(__WEBPACK_OUTDATED_DEPENDENCIES__) { /* harmony import */ _NotFoundComponent_vue_vue_type_template_id_a597ab66___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./NotFoundComponent.vue?vue&type=template&id=a597ab66& */ "./vendor/cl/console/js/NotFoundComponent.vue?vue&type=template&id=a597ab66&");
(function () {
      api.rerender('a597ab66', {
        render: _NotFoundComponent_vue_vue_type_template_id_a597ab66___WEBPACK_IMPORTED_MODULE_0__["render"],
        staticRenderFns: _NotFoundComponent_vue_vue_type_template_id_a597ab66___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]
      })
    })(__WEBPACK_OUTDATED_DEPENDENCIES__); }.bind(this))
  }
}
component.options.__file = "vendor/cl/console/js/NotFoundComponent.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./vendor/cl/console/js/NotFoundComponent.vue?vue&type=script&lang=js&":
/*!*****************************************************************************!*\
  !*** ./vendor/cl/console/js/NotFoundComponent.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_2_node_modules_vue_loader_lib_index_js_vue_loader_options_NotFoundComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--2!../../../../node_modules/vue-loader/lib??vue-loader-options!./NotFoundComponent.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./vendor/cl/console/js/NotFoundComponent.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_2_node_modules_vue_loader_lib_index_js_vue_loader_options_NotFoundComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_babel_loader_lib_index_js_ref_2_node_modules_vue_loader_lib_index_js_vue_loader_options_NotFoundComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_babel_loader_lib_index_js_ref_2_node_modules_vue_loader_lib_index_js_vue_loader_options_NotFoundComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_babel_loader_lib_index_js_ref_2_node_modules_vue_loader_lib_index_js_vue_loader_options_NotFoundComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_2_node_modules_vue_loader_lib_index_js_vue_loader_options_NotFoundComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./vendor/cl/console/js/NotFoundComponent.vue?vue&type=template&id=a597ab66&":
/*!***********************************************************************************!*\
  !*** ./vendor/cl/console/js/NotFoundComponent.vue?vue&type=template&id=a597ab66& ***!
  \***********************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_NotFoundComponent_vue_vue_type_template_id_a597ab66___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./NotFoundComponent.vue?vue&type=template&id=a597ab66& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./vendor/cl/console/js/NotFoundComponent.vue?vue&type=template&id=a597ab66&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_NotFoundComponent_vue_vue_type_template_id_a597ab66___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_NotFoundComponent_vue_vue_type_template_id_a597ab66___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./vendor/cl/console/js/TablesComponent.vue":
/*!**************************************************!*\
  !*** ./vendor/cl/console/js/TablesComponent.vue ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _TablesComponent_vue_vue_type_template_id_746ac1d7_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./TablesComponent.vue?vue&type=template&id=746ac1d7&scoped=true& */ "./vendor/cl/console/js/TablesComponent.vue?vue&type=template&id=746ac1d7&scoped=true&");
/* harmony import */ var _TablesComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./TablesComponent.vue?vue&type=script&lang=js& */ "./vendor/cl/console/js/TablesComponent.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _TablesComponent_vue_vue_type_style_index_0_id_746ac1d7_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./TablesComponent.vue?vue&type=style&index=0&id=746ac1d7&lang=scss&scoped=true& */ "./vendor/cl/console/js/TablesComponent.vue?vue&type=style&index=0&id=746ac1d7&lang=scss&scoped=true&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _TablesComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _TablesComponent_vue_vue_type_template_id_746ac1d7_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _TablesComponent_vue_vue_type_template_id_746ac1d7_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "746ac1d7",
  null
  
)

/* hot reload */
if (true) {
  var api = __webpack_require__(/*! ./node_modules/vue-hot-reload-api/dist/index.js */ "./node_modules/vue-hot-reload-api/dist/index.js")
  api.install(__webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm.js"))
  if (api.compatible) {
    module.hot.accept()
    if (!api.isRecorded('746ac1d7')) {
      api.createRecord('746ac1d7', component.options)
    } else {
      api.reload('746ac1d7', component.options)
    }
    module.hot.accept(/*! ./TablesComponent.vue?vue&type=template&id=746ac1d7&scoped=true& */ "./vendor/cl/console/js/TablesComponent.vue?vue&type=template&id=746ac1d7&scoped=true&", function(__WEBPACK_OUTDATED_DEPENDENCIES__) { /* harmony import */ _TablesComponent_vue_vue_type_template_id_746ac1d7_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./TablesComponent.vue?vue&type=template&id=746ac1d7&scoped=true& */ "./vendor/cl/console/js/TablesComponent.vue?vue&type=template&id=746ac1d7&scoped=true&");
(function () {
      api.rerender('746ac1d7', {
        render: _TablesComponent_vue_vue_type_template_id_746ac1d7_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
        staticRenderFns: _TablesComponent_vue_vue_type_template_id_746ac1d7_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]
      })
    })(__WEBPACK_OUTDATED_DEPENDENCIES__); }.bind(this))
  }
}
component.options.__file = "vendor/cl/console/js/TablesComponent.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./vendor/cl/console/js/TablesComponent.vue?vue&type=script&lang=js&":
/*!***************************************************************************!*\
  !*** ./vendor/cl/console/js/TablesComponent.vue?vue&type=script&lang=js& ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_2_node_modules_vue_loader_lib_index_js_vue_loader_options_TablesComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--2!../../../../node_modules/vue-loader/lib??vue-loader-options!./TablesComponent.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./vendor/cl/console/js/TablesComponent.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_2_node_modules_vue_loader_lib_index_js_vue_loader_options_TablesComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./vendor/cl/console/js/TablesComponent.vue?vue&type=style&index=0&id=746ac1d7&lang=scss&scoped=true&":
/*!************************************************************************************************************!*\
  !*** ./vendor/cl/console/js/TablesComponent.vue?vue&type=style&index=0&id=746ac1d7&lang=scss&scoped=true& ***!
  \************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_resolve_url_loader_index_js_node_modules_sass_loader_dist_cjs_js_sourceMap_node_modules_vue_loader_lib_index_js_vue_loader_options_TablesComponent_vue_vue_type_style_index_0_id_746ac1d7_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-style-loader!../../../../node_modules/css-loader/dist/cjs.js!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/resolve-url-loader!../../../../node_modules/sass-loader/dist/cjs.js?sourceMap!../../../../node_modules/vue-loader/lib??vue-loader-options!./TablesComponent.vue?vue&type=style&index=0&id=746ac1d7&lang=scss&scoped=true& */ "./node_modules/vue-style-loader/index.js!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/resolve-url-loader/index.js!./node_modules/sass-loader/dist/cjs.js?sourceMap!./node_modules/vue-loader/lib/index.js?!./vendor/cl/console/js/TablesComponent.vue?vue&type=style&index=0&id=746ac1d7&lang=scss&scoped=true&");
/* harmony import */ var _node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_resolve_url_loader_index_js_node_modules_sass_loader_dist_cjs_js_sourceMap_node_modules_vue_loader_lib_index_js_vue_loader_options_TablesComponent_vue_vue_type_style_index_0_id_746ac1d7_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_resolve_url_loader_index_js_node_modules_sass_loader_dist_cjs_js_sourceMap_node_modules_vue_loader_lib_index_js_vue_loader_options_TablesComponent_vue_vue_type_style_index_0_id_746ac1d7_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_resolve_url_loader_index_js_node_modules_sass_loader_dist_cjs_js_sourceMap_node_modules_vue_loader_lib_index_js_vue_loader_options_TablesComponent_vue_vue_type_style_index_0_id_746ac1d7_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_resolve_url_loader_index_js_node_modules_sass_loader_dist_cjs_js_sourceMap_node_modules_vue_loader_lib_index_js_vue_loader_options_TablesComponent_vue_vue_type_style_index_0_id_746ac1d7_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_resolve_url_loader_index_js_node_modules_sass_loader_dist_cjs_js_sourceMap_node_modules_vue_loader_lib_index_js_vue_loader_options_TablesComponent_vue_vue_type_style_index_0_id_746ac1d7_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./vendor/cl/console/js/TablesComponent.vue?vue&type=template&id=746ac1d7&scoped=true&":
/*!*********************************************************************************************!*\
  !*** ./vendor/cl/console/js/TablesComponent.vue?vue&type=template&id=746ac1d7&scoped=true& ***!
  \*********************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_TablesComponent_vue_vue_type_template_id_746ac1d7_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./TablesComponent.vue?vue&type=template&id=746ac1d7&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./vendor/cl/console/js/TablesComponent.vue?vue&type=template&id=746ac1d7&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_TablesComponent_vue_vue_type_template_id_746ac1d7_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_TablesComponent_vue_vue_type_template_id_746ac1d7_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

/******/ });
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9bbmFtZV0vd2VicGFjay91bml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uIiwid2VicGFjazovL1tuYW1lXS93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9bbmFtZV0vdmVuZG9yL2NsL2NvbnNvbGUvanMvQ29uc29sZUNvbXBvbmVudEJhc2UudnVlIiwid2VicGFjazovL1tuYW1lXS92ZW5kb3IvY2wvY29uc29sZS9qcy9OYXZDb21wb25lbnQudnVlIiwid2VicGFjazovL1tuYW1lXS92ZW5kb3IvY2wvc2l0ZS9qcy9WdWUvTm90Rm91bmRDb21wb25lbnQudnVlIiwid2VicGFjazovL1tuYW1lXS92ZW5kb3IvY2wvY29uc29sZS9qcy9UYWJsZXNDb21wb25lbnQudnVlIiwid2VicGFjazovL1tuYW1lXS8uL3ZlbmRvci9jbC9jb25zb2xlL2pzL1RhYmxlc0NvbXBvbmVudC52dWU/YzJlMCIsIndlYnBhY2s6Ly9bbmFtZV0vLi92ZW5kb3IvY2wvY29uc29sZS9qcy9OYXZDb21wb25lbnQudnVlPzY2MzkiLCJ3ZWJwYWNrOi8vW25hbWVdLy4vdmVuZG9yL2NsL2NvbnNvbGUvanMvTm90Rm91bmRDb21wb25lbnQudnVlP2ZhZDYiLCJ3ZWJwYWNrOi8vW25hbWVdLy4vdmVuZG9yL2NsL2NvbnNvbGUvanMvVGFibGVzQ29tcG9uZW50LnZ1ZT81ZWIxIiwid2VicGFjazovL1tuYW1lXS8uL3ZlbmRvci9jbC9jb25zb2xlL2pzL1RhYmxlc0NvbXBvbmVudC52dWU/ZGUwZCIsIndlYnBhY2s6Ly9bbmFtZV0vLi92ZW5kb3IvY2wvY29uc29sZS9pbmRleC5qcyIsIndlYnBhY2s6Ly9bbmFtZV0vLi92ZW5kb3IvY2wvY29uc29sZS9qcy9Db25zb2xlLmpzIiwid2VicGFjazovL1tuYW1lXS8uL3ZlbmRvci9jbC9jb25zb2xlL2pzL0NvbnNvbGVDb21wb25lbnQuanMiLCJ3ZWJwYWNrOi8vW25hbWVdLy4vdmVuZG9yL2NsL2NvbnNvbGUvanMvQ29uc29sZUNvbXBvbmVudEJhc2UudnVlIiwid2VicGFjazovL1tuYW1lXS8uL3ZlbmRvci9jbC9jb25zb2xlL2pzL0NvbnNvbGVDb21wb25lbnRCYXNlLnZ1ZT84OGQxIiwid2VicGFjazovL1tuYW1lXS8uL3ZlbmRvci9jbC9jb25zb2xlL2pzL0NvbnNvbGVDb21wb25lbnRzLmpzIiwid2VicGFjazovL1tuYW1lXS8uL3ZlbmRvci9jbC9jb25zb2xlL2pzL0NvbnNvbGVGYWN0b3J5LmpzIiwid2VicGFjazovL1tuYW1lXS8uL3ZlbmRvci9jbC9jb25zb2xlL2pzL0NvbnNvbGVQYWdlLmpzIiwid2VicGFjazovL1tuYW1lXS8uL3ZlbmRvci9jbC9jb25zb2xlL2pzL0NvbnNvbGVTZWN0aW9uLmpzIiwid2VicGFjazovL1tuYW1lXS8uL3ZlbmRvci9jbC9jb25zb2xlL2pzL0NvbnNvbGVTZWN0aW9uT3B0aW9uLmpzIiwid2VicGFjazovL1tuYW1lXS8uL3ZlbmRvci9jbC9jb25zb2xlL2pzL0NvbnNvbGVUYWJsZXMuanMiLCJ3ZWJwYWNrOi8vW25hbWVdLy4vdmVuZG9yL2NsL2NvbnNvbGUvanMvTmF2Q29tcG9uZW50LnZ1ZSIsIndlYnBhY2s6Ly9bbmFtZV0vLi92ZW5kb3IvY2wvY29uc29sZS9qcy9OYXZDb21wb25lbnQudnVlP2U3NmEiLCJ3ZWJwYWNrOi8vW25hbWVdLy4vdmVuZG9yL2NsL2NvbnNvbGUvanMvTmF2Q29tcG9uZW50LnZ1ZT82ZDM0Iiwid2VicGFjazovL1tuYW1lXS8uL3ZlbmRvci9jbC9jb25zb2xlL2pzL05vdEZvdW5kQ29tcG9uZW50LnZ1ZSIsIndlYnBhY2s6Ly9bbmFtZV0vLi92ZW5kb3IvY2wvY29uc29sZS9qcy9Ob3RGb3VuZENvbXBvbmVudC52dWU/YjkxZCIsIndlYnBhY2s6Ly9bbmFtZV0vLi92ZW5kb3IvY2wvY29uc29sZS9qcy9Ob3RGb3VuZENvbXBvbmVudC52dWU/YjcxOCIsIndlYnBhY2s6Ly9bbmFtZV0vLi92ZW5kb3IvY2wvY29uc29sZS9qcy9UYWJsZXNDb21wb25lbnQudnVlIiwid2VicGFjazovL1tuYW1lXS8uL3ZlbmRvci9jbC9jb25zb2xlL2pzL1RhYmxlc0NvbXBvbmVudC52dWU/NmQ3ZCIsIndlYnBhY2s6Ly9bbmFtZV0vLi92ZW5kb3IvY2wvY29uc29sZS9qcy9UYWJsZXNDb21wb25lbnQudnVlPzk2MTMiLCJ3ZWJwYWNrOi8vW25hbWVdLy4vdmVuZG9yL2NsL2NvbnNvbGUvanMvVGFibGVzQ29tcG9uZW50LnZ1ZT84ZTdhIl0sIm5hbWVzIjpbIlNpdGUiLCJDb25zb2xlQ29tcG9uZW50QmFzZSIsIkNvbnNvbGUiLCJDb25zb2xlRmFjdG9yeSIsImNyZWF0ZSIsInNpdGUiLCJ0aXRsZSIsImNvbXBvbmVudHMiLCJDb25zb2xlQ29tcG9uZW50cyIsInRhYmxlcyIsIkNvbnNvbGVUYWJsZXMiLCJzdGFydCIsImVsZW1lbnQiLCJzb3J0IiwidXNlciIsInN0b3JlIiwic3RhdGUiLCJ0ZW1wbGF0ZSIsIm1haW4iLCJmb3JFYWNoIiwiY29tcG9uZW50IiwidGFnIiwicm91dGVzIiwiZ2V0Um91dGVzIiwicm91dGUiLCJyb2JqIiwicGF0aCIsInJvb3QiLCJwcm9wcyIsInVuZGVmaW5lZCIsIm5hbWUiLCJwdXNoIiwicGFnZXMiLCJwYWdlIiwiYXRMZWFzdCIsIm1pbmltdW1Sb2xlIiwiQ29uc29sZUNvbXBvbmVudCIsInNlY3Rpb25zIiwic2VjdGlvbiIsIm9wdGlvbnMiLCJvcHRpb24iLCJhdmFpbGFibGUiLCJOb3RGb3VuZENvbXBvbmVudCIsIkhlYWRlciIsImluZm8iLCJoZWFkZXIiLCJGb290ZXIiLCJmb290ZXIiLCJyb3V0ZXIiLCJWdWVSb3V0ZXIiLCJtb2RlIiwiTmF2Q29tcG9uZW50Iiwic2l0ZVRpdGxlIiwibWFzdGVyVnVlIiwiVnVlIiwiZWwiLCJkYXRhIiwiY29uc29sZSIsIm1ldGhvZHMiLCJpc0FkbWluIiwiYWRtaW4iLCJzZXRUaXRsZSIsImRvY3VtZW50Iiwic2l0ZU5hbWUiLCJjcmVhdGVkIiwibW91bnRlZCIsIlN0aWNreU5hdiIsImNudCIsIm1lbnUiLCJPYmplY3QiLCJwZXJtaXNzaW9ucyIsImxlbmd0aCIsIiRwYXJlbnQiLCJhZGRTdGFydCIsInNjcmlwdCIsInN0YXJ0dXAiLCJhZGRNYWluQ29tcG9uZW50Iiwib3JkZXIiLCJuYXYyIiwiYWRkTmF2MiIsImEiLCJiIiwicmVtb3ZlTmF2MiIsInZ1ZSIsIkFycmF5IiwiaXNBcnJheSIsImMiLCJpIiwic3BsaWNlIiwiJHNldCIsImFkZE5hdjJMaW5rIiwiY2xpY2siLCJuYXYycmlnaHQiLCJuYXYybGVmdCIsImFkZE9wdGlvbiIsImZpbmRQYWdlIiwiYWRkIiwiQ29uc29sZVBhZ2UiLCJnZXRQYWdlcyIsImFkZFJvdXRlIiwiYWRkUm91dGVzIiwiYWRkcm91dGVzIiwic2l0ZUNvbnNvbGUiLCJVc2VycyIsIlVzZXIiLCJTVEFGRiIsIkFETUlOIiwiVGFibGVzQ29tcG9uZW50IiwicXVlcnlTZWxlY3RvciIsImZpbmRTZWN0aW9uIiwiQ29uc29sZVNlY3Rpb24iLCJyb2xlTGVhc3QiLCJwcmlvcml0eUxlYXN0IiwiZ2V0Um9sZVByaW9yaXR5Iiwic2VjdGlvbkxlYXN0IiwicHJpb3JpdHkiLCJDb25zb2xlU2VjdGlvbk9wdGlvbiIsInJvbGUiLCJtZW1iZXIiLCJhcGkiLCJ0YWJsZSJdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNELE87UUNWQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLFFBQVEsb0JBQW9CO1FBQzVCO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EsaUJBQWlCLDRCQUE0QjtRQUM3QztRQUNBO1FBQ0Esa0JBQWtCLDJCQUEyQjtRQUM3QztRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EsR0FBRzs7UUFFSDtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EsS0FBSztRQUNMO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLE1BQU07UUFDTjtRQUNBO1FBQ0EsTUFBTTtRQUNOO1FBQ0E7UUFDQSxNQUFNO1FBQ047UUFDQTtRQUNBO1FBQ0EsT0FBTztRQUNQO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLElBQUk7UUFDSjs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLE1BQU07UUFDTjtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSxLQUFLO1FBQ0w7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSxNQUFNO1FBQ047UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLEtBQUs7O1FBRUw7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EsNkJBQTZCO1FBQzdCLDZCQUE2QjtRQUM3QjtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSxxQkFBcUIsZ0JBQWdCO1FBQ3JDO1FBQ0E7UUFDQSxLQUFLO1FBQ0w7UUFDQTtRQUNBO1FBQ0EscUJBQXFCLGdCQUFnQjtRQUNyQztRQUNBO1FBQ0EsS0FBSztRQUNMO1FBQ0E7UUFDQSxLQUFLO1FBQ0w7UUFDQTtRQUNBLEtBQUs7UUFDTDtRQUNBO1FBQ0E7UUFDQSxLQUFLOztRQUVMO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLEtBQUs7UUFDTDtRQUNBO1FBQ0EsS0FBSztRQUNMO1FBQ0E7UUFDQTtRQUNBLEtBQUs7O1FBRUw7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBLGtCQUFrQiw4QkFBOEI7UUFDaEQ7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSxLQUFLO1FBQ0w7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EsSUFBSTtRQUNKOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsSUFBSTtRQUNKO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EsTUFBTTtRQUNOO1FBQ0E7UUFDQTtRQUNBLE9BQU87UUFDUDtRQUNBO1FBQ0E7UUFDQTtRQUNBLElBQUk7UUFDSjtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLEtBQUs7UUFDTDtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0Esb0JBQW9CLDJCQUEyQjtRQUMvQztRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EsT0FBTztRQUNQO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQSxtQkFBbUIsY0FBYztRQUNqQztRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsZ0JBQWdCLEtBQUs7UUFDckI7UUFDQTtRQUNBO1FBQ0EsTUFBTTtRQUNOO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSxnQkFBZ0IsWUFBWTtRQUM1QjtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FB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QUFVO0FBQzFCLEVBQUUscUZBQU07QUFDUixFQUFFLHNHQUFNO0FBQ1IsRUFBRSwrR0FBZTtBQUNqQjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBLElBQUksSUFBVTtBQUNkLFlBQVksbUJBQU8sQ0FBQyx3R0FBcUc7QUFDekgsY0FBYyxtQkFBTyxDQUFDLCtDQUFLO0FBQzNCO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQSxzQkFBc0IsK0pBQWtFLEVBQUU7QUFBQTtBQUMxRjtBQUNBLGdCQUFnQixzR0FBTTtBQUN0Qix5QkFBeUIsK0dBQWU7QUFDeEMsT0FBTztBQUNQLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDZSxnRjs7Ozs7Ozs7Ozs7O0FDdkNmO0FBQUE7QUFBQSx3Q0FBbU0sQ0FBZ0IseVBBQUcsRUFBQyxDOzs7Ozs7Ozs7Ozs7QUNBdk47QUFBQTtBQUFBO0FBQUE7QUFBK2IsQ0FBZ0Isc2NBQUcsRUFBQyxDOzs7Ozs7Ozs7Ozs7QUNBbmQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBIiwiZmlsZSI6ImNvbnNvbGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24gd2VicGFja1VuaXZlcnNhbE1vZHVsZURlZmluaXRpb24ocm9vdCwgZmFjdG9yeSkge1xuXHRpZih0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcgJiYgdHlwZW9mIG1vZHVsZSA9PT0gJ29iamVjdCcpXG5cdFx0bW9kdWxlLmV4cG9ydHMgPSBmYWN0b3J5KCk7XG5cdGVsc2UgaWYodHlwZW9mIGRlZmluZSA9PT0gJ2Z1bmN0aW9uJyAmJiBkZWZpbmUuYW1kKVxuXHRcdGRlZmluZShbXSwgZmFjdG9yeSk7XG5cdGVsc2UgaWYodHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnKVxuXHRcdGV4cG9ydHNbXCJDb25zb2xlXCJdID0gZmFjdG9yeSgpO1xuXHRlbHNlXG5cdFx0cm9vdFtcIkNvbnNvbGVcIl0gPSBmYWN0b3J5KCk7XG59KSh3aW5kb3csIGZ1bmN0aW9uKCkge1xucmV0dXJuICIsIiBcdC8vIGluc3RhbGwgYSBKU09OUCBjYWxsYmFjayBmb3IgY2h1bmsgbG9hZGluZ1xuIFx0ZnVuY3Rpb24gd2VicGFja0pzb25wQ2FsbGJhY2soZGF0YSkge1xuIFx0XHR2YXIgY2h1bmtJZHMgPSBkYXRhWzBdO1xuIFx0XHR2YXIgbW9yZU1vZHVsZXMgPSBkYXRhWzFdO1xuIFx0XHR2YXIgZXhlY3V0ZU1vZHVsZXMgPSBkYXRhWzJdO1xuXG4gXHRcdC8vIGFkZCBcIm1vcmVNb2R1bGVzXCIgdG8gdGhlIG1vZHVsZXMgb2JqZWN0LFxuIFx0XHQvLyB0aGVuIGZsYWcgYWxsIFwiY2h1bmtJZHNcIiBhcyBsb2FkZWQgYW5kIGZpcmUgY2FsbGJhY2tcbiBcdFx0dmFyIG1vZHVsZUlkLCBjaHVua0lkLCBpID0gMCwgcmVzb2x2ZXMgPSBbXTtcbiBcdFx0Zm9yKDtpIDwgY2h1bmtJZHMubGVuZ3RoOyBpKyspIHtcbiBcdFx0XHRjaHVua0lkID0gY2h1bmtJZHNbaV07XG4gXHRcdFx0aWYoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKGluc3RhbGxlZENodW5rcywgY2h1bmtJZCkgJiYgaW5zdGFsbGVkQ2h1bmtzW2NodW5rSWRdKSB7XG4gXHRcdFx0XHRyZXNvbHZlcy5wdXNoKGluc3RhbGxlZENodW5rc1tjaHVua0lkXVswXSk7XG4gXHRcdFx0fVxuIFx0XHRcdGluc3RhbGxlZENodW5rc1tjaHVua0lkXSA9IDA7XG4gXHRcdH1cbiBcdFx0Zm9yKG1vZHVsZUlkIGluIG1vcmVNb2R1bGVzKSB7XG4gXHRcdFx0aWYoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG1vcmVNb2R1bGVzLCBtb2R1bGVJZCkpIHtcbiBcdFx0XHRcdG1vZHVsZXNbbW9kdWxlSWRdID0gbW9yZU1vZHVsZXNbbW9kdWxlSWRdO1xuIFx0XHRcdH1cbiBcdFx0fVxuIFx0XHRpZihwYXJlbnRKc29ucEZ1bmN0aW9uKSBwYXJlbnRKc29ucEZ1bmN0aW9uKGRhdGEpO1xuXG4gXHRcdHdoaWxlKHJlc29sdmVzLmxlbmd0aCkge1xuIFx0XHRcdHJlc29sdmVzLnNoaWZ0KCkoKTtcbiBcdFx0fVxuXG4gXHRcdC8vIGFkZCBlbnRyeSBtb2R1bGVzIGZyb20gbG9hZGVkIGNodW5rIHRvIGRlZmVycmVkIGxpc3RcbiBcdFx0ZGVmZXJyZWRNb2R1bGVzLnB1c2guYXBwbHkoZGVmZXJyZWRNb2R1bGVzLCBleGVjdXRlTW9kdWxlcyB8fCBbXSk7XG5cbiBcdFx0Ly8gcnVuIGRlZmVycmVkIG1vZHVsZXMgd2hlbiBhbGwgY2h1bmtzIHJlYWR5XG4gXHRcdHJldHVybiBjaGVja0RlZmVycmVkTW9kdWxlcygpO1xuIFx0fTtcbiBcdGZ1bmN0aW9uIGNoZWNrRGVmZXJyZWRNb2R1bGVzKCkge1xuIFx0XHR2YXIgcmVzdWx0O1xuIFx0XHRmb3IodmFyIGkgPSAwOyBpIDwgZGVmZXJyZWRNb2R1bGVzLmxlbmd0aDsgaSsrKSB7XG4gXHRcdFx0dmFyIGRlZmVycmVkTW9kdWxlID0gZGVmZXJyZWRNb2R1bGVzW2ldO1xuIFx0XHRcdHZhciBmdWxmaWxsZWQgPSB0cnVlO1xuIFx0XHRcdGZvcih2YXIgaiA9IDE7IGogPCBkZWZlcnJlZE1vZHVsZS5sZW5ndGg7IGorKykge1xuIFx0XHRcdFx0dmFyIGRlcElkID0gZGVmZXJyZWRNb2R1bGVbal07XG4gXHRcdFx0XHRpZihpbnN0YWxsZWRDaHVua3NbZGVwSWRdICE9PSAwKSBmdWxmaWxsZWQgPSBmYWxzZTtcbiBcdFx0XHR9XG4gXHRcdFx0aWYoZnVsZmlsbGVkKSB7XG4gXHRcdFx0XHRkZWZlcnJlZE1vZHVsZXMuc3BsaWNlKGktLSwgMSk7XG4gXHRcdFx0XHRyZXN1bHQgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IGRlZmVycmVkTW9kdWxlWzBdKTtcbiBcdFx0XHR9XG4gXHRcdH1cblxuIFx0XHRyZXR1cm4gcmVzdWx0O1xuIFx0fVxuIFx0ZnVuY3Rpb24gaG90RGlzcG9zZUNodW5rKGNodW5rSWQpIHtcbiBcdFx0ZGVsZXRlIGluc3RhbGxlZENodW5rc1tjaHVua0lkXTtcbiBcdH1cbiBcdHZhciBwYXJlbnRIb3RVcGRhdGVDYWxsYmFjayA9IHdpbmRvd1tcIndlYnBhY2tIb3RVcGRhdGVfbmFtZV9cIl07XG4gXHR3aW5kb3dbXCJ3ZWJwYWNrSG90VXBkYXRlX25hbWVfXCJdID0gLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXVudXNlZC12YXJzXG4gXHRmdW5jdGlvbiB3ZWJwYWNrSG90VXBkYXRlQ2FsbGJhY2soY2h1bmtJZCwgbW9yZU1vZHVsZXMpIHtcbiBcdFx0aG90QWRkVXBkYXRlQ2h1bmsoY2h1bmtJZCwgbW9yZU1vZHVsZXMpO1xuIFx0XHRpZiAocGFyZW50SG90VXBkYXRlQ2FsbGJhY2spIHBhcmVudEhvdFVwZGF0ZUNhbGxiYWNrKGNodW5rSWQsIG1vcmVNb2R1bGVzKTtcbiBcdH0gO1xuXG4gXHQvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tdW51c2VkLXZhcnNcbiBcdGZ1bmN0aW9uIGhvdERvd25sb2FkVXBkYXRlQ2h1bmsoY2h1bmtJZCkge1xuIFx0XHR2YXIgc2NyaXB0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNjcmlwdFwiKTtcbiBcdFx0c2NyaXB0LmNoYXJzZXQgPSBcInV0Zi04XCI7XG4gXHRcdHNjcmlwdC5zcmMgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLnAgKyBcIlwiICsgY2h1bmtJZCArIFwiLlwiICsgaG90Q3VycmVudEhhc2ggKyBcIi5ob3QtdXBkYXRlLmpzXCI7XG4gXHRcdGlmIChudWxsKSBzY3JpcHQuY3Jvc3NPcmlnaW4gPSBudWxsO1xuIFx0XHRkb2N1bWVudC5oZWFkLmFwcGVuZENoaWxkKHNjcmlwdCk7XG4gXHR9XG5cbiBcdC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby11bnVzZWQtdmFyc1xuIFx0ZnVuY3Rpb24gaG90RG93bmxvYWRNYW5pZmVzdChyZXF1ZXN0VGltZW91dCkge1xuIFx0XHRyZXF1ZXN0VGltZW91dCA9IHJlcXVlc3RUaW1lb3V0IHx8IDEwMDAwO1xuIFx0XHRyZXR1cm4gbmV3IFByb21pc2UoZnVuY3Rpb24ocmVzb2x2ZSwgcmVqZWN0KSB7XG4gXHRcdFx0aWYgKHR5cGVvZiBYTUxIdHRwUmVxdWVzdCA9PT0gXCJ1bmRlZmluZWRcIikge1xuIFx0XHRcdFx0cmV0dXJuIHJlamVjdChuZXcgRXJyb3IoXCJObyBicm93c2VyIHN1cHBvcnRcIikpO1xuIFx0XHRcdH1cbiBcdFx0XHR0cnkge1xuIFx0XHRcdFx0dmFyIHJlcXVlc3QgPSBuZXcgWE1MSHR0cFJlcXVlc3QoKTtcbiBcdFx0XHRcdHZhciByZXF1ZXN0UGF0aCA9IF9fd2VicGFja19yZXF1aXJlX18ucCArIFwiXCIgKyBob3RDdXJyZW50SGFzaCArIFwiLmhvdC11cGRhdGUuanNvblwiO1xuIFx0XHRcdFx0cmVxdWVzdC5vcGVuKFwiR0VUXCIsIHJlcXVlc3RQYXRoLCB0cnVlKTtcbiBcdFx0XHRcdHJlcXVlc3QudGltZW91dCA9IHJlcXVlc3RUaW1lb3V0O1xuIFx0XHRcdFx0cmVxdWVzdC5zZW5kKG51bGwpO1xuIFx0XHRcdH0gY2F0Y2ggKGVycikge1xuIFx0XHRcdFx0cmV0dXJuIHJlamVjdChlcnIpO1xuIFx0XHRcdH1cbiBcdFx0XHRyZXF1ZXN0Lm9ucmVhZHlzdGF0ZWNoYW5nZSA9IGZ1bmN0aW9uKCkge1xuIFx0XHRcdFx0aWYgKHJlcXVlc3QucmVhZHlTdGF0ZSAhPT0gNCkgcmV0dXJuO1xuIFx0XHRcdFx0aWYgKHJlcXVlc3Quc3RhdHVzID09PSAwKSB7XG4gXHRcdFx0XHRcdC8vIHRpbWVvdXRcbiBcdFx0XHRcdFx0cmVqZWN0KFxuIFx0XHRcdFx0XHRcdG5ldyBFcnJvcihcIk1hbmlmZXN0IHJlcXVlc3QgdG8gXCIgKyByZXF1ZXN0UGF0aCArIFwiIHRpbWVkIG91dC5cIilcbiBcdFx0XHRcdFx0KTtcbiBcdFx0XHRcdH0gZWxzZSBpZiAocmVxdWVzdC5zdGF0dXMgPT09IDQwNCkge1xuIFx0XHRcdFx0XHQvLyBubyB1cGRhdGUgYXZhaWxhYmxlXG4gXHRcdFx0XHRcdHJlc29sdmUoKTtcbiBcdFx0XHRcdH0gZWxzZSBpZiAocmVxdWVzdC5zdGF0dXMgIT09IDIwMCAmJiByZXF1ZXN0LnN0YXR1cyAhPT0gMzA0KSB7XG4gXHRcdFx0XHRcdC8vIG90aGVyIGZhaWx1cmVcbiBcdFx0XHRcdFx0cmVqZWN0KG5ldyBFcnJvcihcIk1hbmlmZXN0IHJlcXVlc3QgdG8gXCIgKyByZXF1ZXN0UGF0aCArIFwiIGZhaWxlZC5cIikpO1xuIFx0XHRcdFx0fSBlbHNlIHtcbiBcdFx0XHRcdFx0Ly8gc3VjY2Vzc1xuIFx0XHRcdFx0XHR0cnkge1xuIFx0XHRcdFx0XHRcdHZhciB1cGRhdGUgPSBKU09OLnBhcnNlKHJlcXVlc3QucmVzcG9uc2VUZXh0KTtcbiBcdFx0XHRcdFx0fSBjYXRjaCAoZSkge1xuIFx0XHRcdFx0XHRcdHJlamVjdChlKTtcbiBcdFx0XHRcdFx0XHRyZXR1cm47XG4gXHRcdFx0XHRcdH1cbiBcdFx0XHRcdFx0cmVzb2x2ZSh1cGRhdGUpO1xuIFx0XHRcdFx0fVxuIFx0XHRcdH07XG4gXHRcdH0pO1xuIFx0fVxuXG4gXHR2YXIgaG90QXBwbHlPblVwZGF0ZSA9IHRydWU7XG4gXHQvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tdW51c2VkLXZhcnNcbiBcdHZhciBob3RDdXJyZW50SGFzaCA9IFwiMzliM2U2MjRkMjgzMDJhODk3ZDRcIjtcbiBcdHZhciBob3RSZXF1ZXN0VGltZW91dCA9IDEwMDAwO1xuIFx0dmFyIGhvdEN1cnJlbnRNb2R1bGVEYXRhID0ge307XG4gXHR2YXIgaG90Q3VycmVudENoaWxkTW9kdWxlO1xuIFx0Ly8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXVudXNlZC12YXJzXG4gXHR2YXIgaG90Q3VycmVudFBhcmVudHMgPSBbXTtcbiBcdC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby11bnVzZWQtdmFyc1xuIFx0dmFyIGhvdEN1cnJlbnRQYXJlbnRzVGVtcCA9IFtdO1xuXG4gXHQvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tdW51c2VkLXZhcnNcbiBcdGZ1bmN0aW9uIGhvdENyZWF0ZVJlcXVpcmUobW9kdWxlSWQpIHtcbiBcdFx0dmFyIG1lID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF07XG4gXHRcdGlmICghbWUpIHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fO1xuIFx0XHR2YXIgZm4gPSBmdW5jdGlvbihyZXF1ZXN0KSB7XG4gXHRcdFx0aWYgKG1lLmhvdC5hY3RpdmUpIHtcbiBcdFx0XHRcdGlmIChpbnN0YWxsZWRNb2R1bGVzW3JlcXVlc3RdKSB7XG4gXHRcdFx0XHRcdGlmIChpbnN0YWxsZWRNb2R1bGVzW3JlcXVlc3RdLnBhcmVudHMuaW5kZXhPZihtb2R1bGVJZCkgPT09IC0xKSB7XG4gXHRcdFx0XHRcdFx0aW5zdGFsbGVkTW9kdWxlc1tyZXF1ZXN0XS5wYXJlbnRzLnB1c2gobW9kdWxlSWQpO1xuIFx0XHRcdFx0XHR9XG4gXHRcdFx0XHR9IGVsc2Uge1xuIFx0XHRcdFx0XHRob3RDdXJyZW50UGFyZW50cyA9IFttb2R1bGVJZF07XG4gXHRcdFx0XHRcdGhvdEN1cnJlbnRDaGlsZE1vZHVsZSA9IHJlcXVlc3Q7XG4gXHRcdFx0XHR9XG4gXHRcdFx0XHRpZiAobWUuY2hpbGRyZW4uaW5kZXhPZihyZXF1ZXN0KSA9PT0gLTEpIHtcbiBcdFx0XHRcdFx0bWUuY2hpbGRyZW4ucHVzaChyZXF1ZXN0KTtcbiBcdFx0XHRcdH1cbiBcdFx0XHR9IGVsc2Uge1xuIFx0XHRcdFx0Y29uc29sZS53YXJuKFxuIFx0XHRcdFx0XHRcIltITVJdIHVuZXhwZWN0ZWQgcmVxdWlyZShcIiArXG4gXHRcdFx0XHRcdFx0cmVxdWVzdCArXG4gXHRcdFx0XHRcdFx0XCIpIGZyb20gZGlzcG9zZWQgbW9kdWxlIFwiICtcbiBcdFx0XHRcdFx0XHRtb2R1bGVJZFxuIFx0XHRcdFx0KTtcbiBcdFx0XHRcdGhvdEN1cnJlbnRQYXJlbnRzID0gW107XG4gXHRcdFx0fVxuIFx0XHRcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKHJlcXVlc3QpO1xuIFx0XHR9O1xuIFx0XHR2YXIgT2JqZWN0RmFjdG9yeSA9IGZ1bmN0aW9uIE9iamVjdEZhY3RvcnkobmFtZSkge1xuIFx0XHRcdHJldHVybiB7XG4gXHRcdFx0XHRjb25maWd1cmFibGU6IHRydWUsXG4gXHRcdFx0XHRlbnVtZXJhYmxlOiB0cnVlLFxuIFx0XHRcdFx0Z2V0OiBmdW5jdGlvbigpIHtcbiBcdFx0XHRcdFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX19bbmFtZV07XG4gXHRcdFx0XHR9LFxuIFx0XHRcdFx0c2V0OiBmdW5jdGlvbih2YWx1ZSkge1xuIFx0XHRcdFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fW25hbWVdID0gdmFsdWU7XG4gXHRcdFx0XHR9XG4gXHRcdFx0fTtcbiBcdFx0fTtcbiBcdFx0Zm9yICh2YXIgbmFtZSBpbiBfX3dlYnBhY2tfcmVxdWlyZV9fKSB7XG4gXHRcdFx0aWYgKFxuIFx0XHRcdFx0T2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKF9fd2VicGFja19yZXF1aXJlX18sIG5hbWUpICYmXG4gXHRcdFx0XHRuYW1lICE9PSBcImVcIiAmJlxuIFx0XHRcdFx0bmFtZSAhPT0gXCJ0XCJcbiBcdFx0XHQpIHtcbiBcdFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShmbiwgbmFtZSwgT2JqZWN0RmFjdG9yeShuYW1lKSk7XG4gXHRcdFx0fVxuIFx0XHR9XG4gXHRcdGZuLmUgPSBmdW5jdGlvbihjaHVua0lkKSB7XG4gXHRcdFx0aWYgKGhvdFN0YXR1cyA9PT0gXCJyZWFkeVwiKSBob3RTZXRTdGF0dXMoXCJwcmVwYXJlXCIpO1xuIFx0XHRcdGhvdENodW5rc0xvYWRpbmcrKztcbiBcdFx0XHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXy5lKGNodW5rSWQpLnRoZW4oZmluaXNoQ2h1bmtMb2FkaW5nLCBmdW5jdGlvbihlcnIpIHtcbiBcdFx0XHRcdGZpbmlzaENodW5rTG9hZGluZygpO1xuIFx0XHRcdFx0dGhyb3cgZXJyO1xuIFx0XHRcdH0pO1xuXG4gXHRcdFx0ZnVuY3Rpb24gZmluaXNoQ2h1bmtMb2FkaW5nKCkge1xuIFx0XHRcdFx0aG90Q2h1bmtzTG9hZGluZy0tO1xuIFx0XHRcdFx0aWYgKGhvdFN0YXR1cyA9PT0gXCJwcmVwYXJlXCIpIHtcbiBcdFx0XHRcdFx0aWYgKCFob3RXYWl0aW5nRmlsZXNNYXBbY2h1bmtJZF0pIHtcbiBcdFx0XHRcdFx0XHRob3RFbnN1cmVVcGRhdGVDaHVuayhjaHVua0lkKTtcbiBcdFx0XHRcdFx0fVxuIFx0XHRcdFx0XHRpZiAoaG90Q2h1bmtzTG9hZGluZyA9PT0gMCAmJiBob3RXYWl0aW5nRmlsZXMgPT09IDApIHtcbiBcdFx0XHRcdFx0XHRob3RVcGRhdGVEb3dubG9hZGVkKCk7XG4gXHRcdFx0XHRcdH1cbiBcdFx0XHRcdH1cbiBcdFx0XHR9XG4gXHRcdH07XG4gXHRcdGZuLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRcdGlmIChtb2RlICYgMSkgdmFsdWUgPSBmbih2YWx1ZSk7XG4gXHRcdFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18udCh2YWx1ZSwgbW9kZSAmIH4xKTtcbiBcdFx0fTtcbiBcdFx0cmV0dXJuIGZuO1xuIFx0fVxuXG4gXHQvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tdW51c2VkLXZhcnNcbiBcdGZ1bmN0aW9uIGhvdENyZWF0ZU1vZHVsZShtb2R1bGVJZCkge1xuIFx0XHR2YXIgaG90ID0ge1xuIFx0XHRcdC8vIHByaXZhdGUgc3R1ZmZcbiBcdFx0XHRfYWNjZXB0ZWREZXBlbmRlbmNpZXM6IHt9LFxuIFx0XHRcdF9kZWNsaW5lZERlcGVuZGVuY2llczoge30sXG4gXHRcdFx0X3NlbGZBY2NlcHRlZDogZmFsc2UsXG4gXHRcdFx0X3NlbGZEZWNsaW5lZDogZmFsc2UsXG4gXHRcdFx0X2Rpc3Bvc2VIYW5kbGVyczogW10sXG4gXHRcdFx0X21haW46IGhvdEN1cnJlbnRDaGlsZE1vZHVsZSAhPT0gbW9kdWxlSWQsXG5cbiBcdFx0XHQvLyBNb2R1bGUgQVBJXG4gXHRcdFx0YWN0aXZlOiB0cnVlLFxuIFx0XHRcdGFjY2VwdDogZnVuY3Rpb24oZGVwLCBjYWxsYmFjaykge1xuIFx0XHRcdFx0aWYgKGRlcCA9PT0gdW5kZWZpbmVkKSBob3QuX3NlbGZBY2NlcHRlZCA9IHRydWU7XG4gXHRcdFx0XHRlbHNlIGlmICh0eXBlb2YgZGVwID09PSBcImZ1bmN0aW9uXCIpIGhvdC5fc2VsZkFjY2VwdGVkID0gZGVwO1xuIFx0XHRcdFx0ZWxzZSBpZiAodHlwZW9mIGRlcCA9PT0gXCJvYmplY3RcIilcbiBcdFx0XHRcdFx0Zm9yICh2YXIgaSA9IDA7IGkgPCBkZXAubGVuZ3RoOyBpKyspXG4gXHRcdFx0XHRcdFx0aG90Ll9hY2NlcHRlZERlcGVuZGVuY2llc1tkZXBbaV1dID0gY2FsbGJhY2sgfHwgZnVuY3Rpb24oKSB7fTtcbiBcdFx0XHRcdGVsc2UgaG90Ll9hY2NlcHRlZERlcGVuZGVuY2llc1tkZXBdID0gY2FsbGJhY2sgfHwgZnVuY3Rpb24oKSB7fTtcbiBcdFx0XHR9LFxuIFx0XHRcdGRlY2xpbmU6IGZ1bmN0aW9uKGRlcCkge1xuIFx0XHRcdFx0aWYgKGRlcCA9PT0gdW5kZWZpbmVkKSBob3QuX3NlbGZEZWNsaW5lZCA9IHRydWU7XG4gXHRcdFx0XHRlbHNlIGlmICh0eXBlb2YgZGVwID09PSBcIm9iamVjdFwiKVxuIFx0XHRcdFx0XHRmb3IgKHZhciBpID0gMDsgaSA8IGRlcC5sZW5ndGg7IGkrKylcbiBcdFx0XHRcdFx0XHRob3QuX2RlY2xpbmVkRGVwZW5kZW5jaWVzW2RlcFtpXV0gPSB0cnVlO1xuIFx0XHRcdFx0ZWxzZSBob3QuX2RlY2xpbmVkRGVwZW5kZW5jaWVzW2RlcF0gPSB0cnVlO1xuIFx0XHRcdH0sXG4gXHRcdFx0ZGlzcG9zZTogZnVuY3Rpb24oY2FsbGJhY2spIHtcbiBcdFx0XHRcdGhvdC5fZGlzcG9zZUhhbmRsZXJzLnB1c2goY2FsbGJhY2spO1xuIFx0XHRcdH0sXG4gXHRcdFx0YWRkRGlzcG9zZUhhbmRsZXI6IGZ1bmN0aW9uKGNhbGxiYWNrKSB7XG4gXHRcdFx0XHRob3QuX2Rpc3Bvc2VIYW5kbGVycy5wdXNoKGNhbGxiYWNrKTtcbiBcdFx0XHR9LFxuIFx0XHRcdHJlbW92ZURpc3Bvc2VIYW5kbGVyOiBmdW5jdGlvbihjYWxsYmFjaykge1xuIFx0XHRcdFx0dmFyIGlkeCA9IGhvdC5fZGlzcG9zZUhhbmRsZXJzLmluZGV4T2YoY2FsbGJhY2spO1xuIFx0XHRcdFx0aWYgKGlkeCA+PSAwKSBob3QuX2Rpc3Bvc2VIYW5kbGVycy5zcGxpY2UoaWR4LCAxKTtcbiBcdFx0XHR9LFxuXG4gXHRcdFx0Ly8gTWFuYWdlbWVudCBBUElcbiBcdFx0XHRjaGVjazogaG90Q2hlY2ssXG4gXHRcdFx0YXBwbHk6IGhvdEFwcGx5LFxuIFx0XHRcdHN0YXR1czogZnVuY3Rpb24obCkge1xuIFx0XHRcdFx0aWYgKCFsKSByZXR1cm4gaG90U3RhdHVzO1xuIFx0XHRcdFx0aG90U3RhdHVzSGFuZGxlcnMucHVzaChsKTtcbiBcdFx0XHR9LFxuIFx0XHRcdGFkZFN0YXR1c0hhbmRsZXI6IGZ1bmN0aW9uKGwpIHtcbiBcdFx0XHRcdGhvdFN0YXR1c0hhbmRsZXJzLnB1c2gobCk7XG4gXHRcdFx0fSxcbiBcdFx0XHRyZW1vdmVTdGF0dXNIYW5kbGVyOiBmdW5jdGlvbihsKSB7XG4gXHRcdFx0XHR2YXIgaWR4ID0gaG90U3RhdHVzSGFuZGxlcnMuaW5kZXhPZihsKTtcbiBcdFx0XHRcdGlmIChpZHggPj0gMCkgaG90U3RhdHVzSGFuZGxlcnMuc3BsaWNlKGlkeCwgMSk7XG4gXHRcdFx0fSxcblxuIFx0XHRcdC8vaW5oZXJpdCBmcm9tIHByZXZpb3VzIGRpc3Bvc2UgY2FsbFxuIFx0XHRcdGRhdGE6IGhvdEN1cnJlbnRNb2R1bGVEYXRhW21vZHVsZUlkXVxuIFx0XHR9O1xuIFx0XHRob3RDdXJyZW50Q2hpbGRNb2R1bGUgPSB1bmRlZmluZWQ7XG4gXHRcdHJldHVybiBob3Q7XG4gXHR9XG5cbiBcdHZhciBob3RTdGF0dXNIYW5kbGVycyA9IFtdO1xuIFx0dmFyIGhvdFN0YXR1cyA9IFwiaWRsZVwiO1xuXG4gXHRmdW5jdGlvbiBob3RTZXRTdGF0dXMobmV3U3RhdHVzKSB7XG4gXHRcdGhvdFN0YXR1cyA9IG5ld1N0YXR1cztcbiBcdFx0Zm9yICh2YXIgaSA9IDA7IGkgPCBob3RTdGF0dXNIYW5kbGVycy5sZW5ndGg7IGkrKylcbiBcdFx0XHRob3RTdGF0dXNIYW5kbGVyc1tpXS5jYWxsKG51bGwsIG5ld1N0YXR1cyk7XG4gXHR9XG5cbiBcdC8vIHdoaWxlIGRvd25sb2FkaW5nXG4gXHR2YXIgaG90V2FpdGluZ0ZpbGVzID0gMDtcbiBcdHZhciBob3RDaHVua3NMb2FkaW5nID0gMDtcbiBcdHZhciBob3RXYWl0aW5nRmlsZXNNYXAgPSB7fTtcbiBcdHZhciBob3RSZXF1ZXN0ZWRGaWxlc01hcCA9IHt9O1xuIFx0dmFyIGhvdEF2YWlsYWJsZUZpbGVzTWFwID0ge307XG4gXHR2YXIgaG90RGVmZXJyZWQ7XG5cbiBcdC8vIFRoZSB1cGRhdGUgaW5mb1xuIFx0dmFyIGhvdFVwZGF0ZSwgaG90VXBkYXRlTmV3SGFzaDtcblxuIFx0ZnVuY3Rpb24gdG9Nb2R1bGVJZChpZCkge1xuIFx0XHR2YXIgaXNOdW1iZXIgPSAraWQgKyBcIlwiID09PSBpZDtcbiBcdFx0cmV0dXJuIGlzTnVtYmVyID8gK2lkIDogaWQ7XG4gXHR9XG5cbiBcdGZ1bmN0aW9uIGhvdENoZWNrKGFwcGx5KSB7XG4gXHRcdGlmIChob3RTdGF0dXMgIT09IFwiaWRsZVwiKSB7XG4gXHRcdFx0dGhyb3cgbmV3IEVycm9yKFwiY2hlY2soKSBpcyBvbmx5IGFsbG93ZWQgaW4gaWRsZSBzdGF0dXNcIik7XG4gXHRcdH1cbiBcdFx0aG90QXBwbHlPblVwZGF0ZSA9IGFwcGx5O1xuIFx0XHRob3RTZXRTdGF0dXMoXCJjaGVja1wiKTtcbiBcdFx0cmV0dXJuIGhvdERvd25sb2FkTWFuaWZlc3QoaG90UmVxdWVzdFRpbWVvdXQpLnRoZW4oZnVuY3Rpb24odXBkYXRlKSB7XG4gXHRcdFx0aWYgKCF1cGRhdGUpIHtcbiBcdFx0XHRcdGhvdFNldFN0YXR1cyhcImlkbGVcIik7XG4gXHRcdFx0XHRyZXR1cm4gbnVsbDtcbiBcdFx0XHR9XG4gXHRcdFx0aG90UmVxdWVzdGVkRmlsZXNNYXAgPSB7fTtcbiBcdFx0XHRob3RXYWl0aW5nRmlsZXNNYXAgPSB7fTtcbiBcdFx0XHRob3RBdmFpbGFibGVGaWxlc01hcCA9IHVwZGF0ZS5jO1xuIFx0XHRcdGhvdFVwZGF0ZU5ld0hhc2ggPSB1cGRhdGUuaDtcblxuIFx0XHRcdGhvdFNldFN0YXR1cyhcInByZXBhcmVcIik7XG4gXHRcdFx0dmFyIHByb21pc2UgPSBuZXcgUHJvbWlzZShmdW5jdGlvbihyZXNvbHZlLCByZWplY3QpIHtcbiBcdFx0XHRcdGhvdERlZmVycmVkID0ge1xuIFx0XHRcdFx0XHRyZXNvbHZlOiByZXNvbHZlLFxuIFx0XHRcdFx0XHRyZWplY3Q6IHJlamVjdFxuIFx0XHRcdFx0fTtcbiBcdFx0XHR9KTtcbiBcdFx0XHRob3RVcGRhdGUgPSB7fTtcbiBcdFx0XHRmb3IodmFyIGNodW5rSWQgaW4gaW5zdGFsbGVkQ2h1bmtzKVxuIFx0XHRcdC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1sb25lLWJsb2Nrc1xuIFx0XHRcdHtcbiBcdFx0XHRcdC8qZ2xvYmFscyBjaHVua0lkICovXG4gXHRcdFx0XHRob3RFbnN1cmVVcGRhdGVDaHVuayhjaHVua0lkKTtcbiBcdFx0XHR9XG4gXHRcdFx0aWYgKFxuIFx0XHRcdFx0aG90U3RhdHVzID09PSBcInByZXBhcmVcIiAmJlxuIFx0XHRcdFx0aG90Q2h1bmtzTG9hZGluZyA9PT0gMCAmJlxuIFx0XHRcdFx0aG90V2FpdGluZ0ZpbGVzID09PSAwXG4gXHRcdFx0KSB7XG4gXHRcdFx0XHRob3RVcGRhdGVEb3dubG9hZGVkKCk7XG4gXHRcdFx0fVxuIFx0XHRcdHJldHVybiBwcm9taXNlO1xuIFx0XHR9KTtcbiBcdH1cblxuIFx0Ly8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXVudXNlZC12YXJzXG4gXHRmdW5jdGlvbiBob3RBZGRVcGRhdGVDaHVuayhjaHVua0lkLCBtb3JlTW9kdWxlcykge1xuIFx0XHRpZiAoIWhvdEF2YWlsYWJsZUZpbGVzTWFwW2NodW5rSWRdIHx8ICFob3RSZXF1ZXN0ZWRGaWxlc01hcFtjaHVua0lkXSlcbiBcdFx0XHRyZXR1cm47XG4gXHRcdGhvdFJlcXVlc3RlZEZpbGVzTWFwW2NodW5rSWRdID0gZmFsc2U7XG4gXHRcdGZvciAodmFyIG1vZHVsZUlkIGluIG1vcmVNb2R1bGVzKSB7XG4gXHRcdFx0aWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChtb3JlTW9kdWxlcywgbW9kdWxlSWQpKSB7XG4gXHRcdFx0XHRob3RVcGRhdGVbbW9kdWxlSWRdID0gbW9yZU1vZHVsZXNbbW9kdWxlSWRdO1xuIFx0XHRcdH1cbiBcdFx0fVxuIFx0XHRpZiAoLS1ob3RXYWl0aW5nRmlsZXMgPT09IDAgJiYgaG90Q2h1bmtzTG9hZGluZyA9PT0gMCkge1xuIFx0XHRcdGhvdFVwZGF0ZURvd25sb2FkZWQoKTtcbiBcdFx0fVxuIFx0fVxuXG4gXHRmdW5jdGlvbiBob3RFbnN1cmVVcGRhdGVDaHVuayhjaHVua0lkKSB7XG4gXHRcdGlmICghaG90QXZhaWxhYmxlRmlsZXNNYXBbY2h1bmtJZF0pIHtcbiBcdFx0XHRob3RXYWl0aW5nRmlsZXNNYXBbY2h1bmtJZF0gPSB0cnVlO1xuIFx0XHR9IGVsc2Uge1xuIFx0XHRcdGhvdFJlcXVlc3RlZEZpbGVzTWFwW2NodW5rSWRdID0gdHJ1ZTtcbiBcdFx0XHRob3RXYWl0aW5nRmlsZXMrKztcbiBcdFx0XHRob3REb3dubG9hZFVwZGF0ZUNodW5rKGNodW5rSWQpO1xuIFx0XHR9XG4gXHR9XG5cbiBcdGZ1bmN0aW9uIGhvdFVwZGF0ZURvd25sb2FkZWQoKSB7XG4gXHRcdGhvdFNldFN0YXR1cyhcInJlYWR5XCIpO1xuIFx0XHR2YXIgZGVmZXJyZWQgPSBob3REZWZlcnJlZDtcbiBcdFx0aG90RGVmZXJyZWQgPSBudWxsO1xuIFx0XHRpZiAoIWRlZmVycmVkKSByZXR1cm47XG4gXHRcdGlmIChob3RBcHBseU9uVXBkYXRlKSB7XG4gXHRcdFx0Ly8gV3JhcCBkZWZlcnJlZCBvYmplY3QgaW4gUHJvbWlzZSB0byBtYXJrIGl0IGFzIGEgd2VsbC1oYW5kbGVkIFByb21pc2UgdG9cbiBcdFx0XHQvLyBhdm9pZCB0cmlnZ2VyaW5nIHVuY2F1Z2h0IGV4Y2VwdGlvbiB3YXJuaW5nIGluIENocm9tZS5cbiBcdFx0XHQvLyBTZWUgaHR0cHM6Ly9idWdzLmNocm9taXVtLm9yZy9wL2Nocm9taXVtL2lzc3Vlcy9kZXRhaWw/aWQ9NDY1NjY2XG4gXHRcdFx0UHJvbWlzZS5yZXNvbHZlKClcbiBcdFx0XHRcdC50aGVuKGZ1bmN0aW9uKCkge1xuIFx0XHRcdFx0XHRyZXR1cm4gaG90QXBwbHkoaG90QXBwbHlPblVwZGF0ZSk7XG4gXHRcdFx0XHR9KVxuIFx0XHRcdFx0LnRoZW4oXG4gXHRcdFx0XHRcdGZ1bmN0aW9uKHJlc3VsdCkge1xuIFx0XHRcdFx0XHRcdGRlZmVycmVkLnJlc29sdmUocmVzdWx0KTtcbiBcdFx0XHRcdFx0fSxcbiBcdFx0XHRcdFx0ZnVuY3Rpb24oZXJyKSB7XG4gXHRcdFx0XHRcdFx0ZGVmZXJyZWQucmVqZWN0KGVycik7XG4gXHRcdFx0XHRcdH1cbiBcdFx0XHRcdCk7XG4gXHRcdH0gZWxzZSB7XG4gXHRcdFx0dmFyIG91dGRhdGVkTW9kdWxlcyA9IFtdO1xuIFx0XHRcdGZvciAodmFyIGlkIGluIGhvdFVwZGF0ZSkge1xuIFx0XHRcdFx0aWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChob3RVcGRhdGUsIGlkKSkge1xuIFx0XHRcdFx0XHRvdXRkYXRlZE1vZHVsZXMucHVzaCh0b01vZHVsZUlkKGlkKSk7XG4gXHRcdFx0XHR9XG4gXHRcdFx0fVxuIFx0XHRcdGRlZmVycmVkLnJlc29sdmUob3V0ZGF0ZWRNb2R1bGVzKTtcbiBcdFx0fVxuIFx0fVxuXG4gXHRmdW5jdGlvbiBob3RBcHBseShvcHRpb25zKSB7XG4gXHRcdGlmIChob3RTdGF0dXMgIT09IFwicmVhZHlcIilcbiBcdFx0XHR0aHJvdyBuZXcgRXJyb3IoXCJhcHBseSgpIGlzIG9ubHkgYWxsb3dlZCBpbiByZWFkeSBzdGF0dXNcIik7XG4gXHRcdG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuXG4gXHRcdHZhciBjYjtcbiBcdFx0dmFyIGk7XG4gXHRcdHZhciBqO1xuIFx0XHR2YXIgbW9kdWxlO1xuIFx0XHR2YXIgbW9kdWxlSWQ7XG5cbiBcdFx0ZnVuY3Rpb24gZ2V0QWZmZWN0ZWRTdHVmZih1cGRhdGVNb2R1bGVJZCkge1xuIFx0XHRcdHZhciBvdXRkYXRlZE1vZHVsZXMgPSBbdXBkYXRlTW9kdWxlSWRdO1xuIFx0XHRcdHZhciBvdXRkYXRlZERlcGVuZGVuY2llcyA9IHt9O1xuXG4gXHRcdFx0dmFyIHF1ZXVlID0gb3V0ZGF0ZWRNb2R1bGVzLm1hcChmdW5jdGlvbihpZCkge1xuIFx0XHRcdFx0cmV0dXJuIHtcbiBcdFx0XHRcdFx0Y2hhaW46IFtpZF0sXG4gXHRcdFx0XHRcdGlkOiBpZFxuIFx0XHRcdFx0fTtcbiBcdFx0XHR9KTtcbiBcdFx0XHR3aGlsZSAocXVldWUubGVuZ3RoID4gMCkge1xuIFx0XHRcdFx0dmFyIHF1ZXVlSXRlbSA9IHF1ZXVlLnBvcCgpO1xuIFx0XHRcdFx0dmFyIG1vZHVsZUlkID0gcXVldWVJdGVtLmlkO1xuIFx0XHRcdFx0dmFyIGNoYWluID0gcXVldWVJdGVtLmNoYWluO1xuIFx0XHRcdFx0bW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF07XG4gXHRcdFx0XHRpZiAoIW1vZHVsZSB8fCBtb2R1bGUuaG90Ll9zZWxmQWNjZXB0ZWQpIGNvbnRpbnVlO1xuIFx0XHRcdFx0aWYgKG1vZHVsZS5ob3QuX3NlbGZEZWNsaW5lZCkge1xuIFx0XHRcdFx0XHRyZXR1cm4ge1xuIFx0XHRcdFx0XHRcdHR5cGU6IFwic2VsZi1kZWNsaW5lZFwiLFxuIFx0XHRcdFx0XHRcdGNoYWluOiBjaGFpbixcbiBcdFx0XHRcdFx0XHRtb2R1bGVJZDogbW9kdWxlSWRcbiBcdFx0XHRcdFx0fTtcbiBcdFx0XHRcdH1cbiBcdFx0XHRcdGlmIChtb2R1bGUuaG90Ll9tYWluKSB7XG4gXHRcdFx0XHRcdHJldHVybiB7XG4gXHRcdFx0XHRcdFx0dHlwZTogXCJ1bmFjY2VwdGVkXCIsXG4gXHRcdFx0XHRcdFx0Y2hhaW46IGNoYWluLFxuIFx0XHRcdFx0XHRcdG1vZHVsZUlkOiBtb2R1bGVJZFxuIFx0XHRcdFx0XHR9O1xuIFx0XHRcdFx0fVxuIFx0XHRcdFx0Zm9yICh2YXIgaSA9IDA7IGkgPCBtb2R1bGUucGFyZW50cy5sZW5ndGg7IGkrKykge1xuIFx0XHRcdFx0XHR2YXIgcGFyZW50SWQgPSBtb2R1bGUucGFyZW50c1tpXTtcbiBcdFx0XHRcdFx0dmFyIHBhcmVudCA9IGluc3RhbGxlZE1vZHVsZXNbcGFyZW50SWRdO1xuIFx0XHRcdFx0XHRpZiAoIXBhcmVudCkgY29udGludWU7XG4gXHRcdFx0XHRcdGlmIChwYXJlbnQuaG90Ll9kZWNsaW5lZERlcGVuZGVuY2llc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRcdFx0XHRyZXR1cm4ge1xuIFx0XHRcdFx0XHRcdFx0dHlwZTogXCJkZWNsaW5lZFwiLFxuIFx0XHRcdFx0XHRcdFx0Y2hhaW46IGNoYWluLmNvbmNhdChbcGFyZW50SWRdKSxcbiBcdFx0XHRcdFx0XHRcdG1vZHVsZUlkOiBtb2R1bGVJZCxcbiBcdFx0XHRcdFx0XHRcdHBhcmVudElkOiBwYXJlbnRJZFxuIFx0XHRcdFx0XHRcdH07XG4gXHRcdFx0XHRcdH1cbiBcdFx0XHRcdFx0aWYgKG91dGRhdGVkTW9kdWxlcy5pbmRleE9mKHBhcmVudElkKSAhPT0gLTEpIGNvbnRpbnVlO1xuIFx0XHRcdFx0XHRpZiAocGFyZW50LmhvdC5fYWNjZXB0ZWREZXBlbmRlbmNpZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0XHRcdFx0aWYgKCFvdXRkYXRlZERlcGVuZGVuY2llc1twYXJlbnRJZF0pXG4gXHRcdFx0XHRcdFx0XHRvdXRkYXRlZERlcGVuZGVuY2llc1twYXJlbnRJZF0gPSBbXTtcbiBcdFx0XHRcdFx0XHRhZGRBbGxUb1NldChvdXRkYXRlZERlcGVuZGVuY2llc1twYXJlbnRJZF0sIFttb2R1bGVJZF0pO1xuIFx0XHRcdFx0XHRcdGNvbnRpbnVlO1xuIFx0XHRcdFx0XHR9XG4gXHRcdFx0XHRcdGRlbGV0ZSBvdXRkYXRlZERlcGVuZGVuY2llc1twYXJlbnRJZF07XG4gXHRcdFx0XHRcdG91dGRhdGVkTW9kdWxlcy5wdXNoKHBhcmVudElkKTtcbiBcdFx0XHRcdFx0cXVldWUucHVzaCh7XG4gXHRcdFx0XHRcdFx0Y2hhaW46IGNoYWluLmNvbmNhdChbcGFyZW50SWRdKSxcbiBcdFx0XHRcdFx0XHRpZDogcGFyZW50SWRcbiBcdFx0XHRcdFx0fSk7XG4gXHRcdFx0XHR9XG4gXHRcdFx0fVxuXG4gXHRcdFx0cmV0dXJuIHtcbiBcdFx0XHRcdHR5cGU6IFwiYWNjZXB0ZWRcIixcbiBcdFx0XHRcdG1vZHVsZUlkOiB1cGRhdGVNb2R1bGVJZCxcbiBcdFx0XHRcdG91dGRhdGVkTW9kdWxlczogb3V0ZGF0ZWRNb2R1bGVzLFxuIFx0XHRcdFx0b3V0ZGF0ZWREZXBlbmRlbmNpZXM6IG91dGRhdGVkRGVwZW5kZW5jaWVzXG4gXHRcdFx0fTtcbiBcdFx0fVxuXG4gXHRcdGZ1bmN0aW9uIGFkZEFsbFRvU2V0KGEsIGIpIHtcbiBcdFx0XHRmb3IgKHZhciBpID0gMDsgaSA8IGIubGVuZ3RoOyBpKyspIHtcbiBcdFx0XHRcdHZhciBpdGVtID0gYltpXTtcbiBcdFx0XHRcdGlmIChhLmluZGV4T2YoaXRlbSkgPT09IC0xKSBhLnB1c2goaXRlbSk7XG4gXHRcdFx0fVxuIFx0XHR9XG5cbiBcdFx0Ly8gYXQgYmVnaW4gYWxsIHVwZGF0ZXMgbW9kdWxlcyBhcmUgb3V0ZGF0ZWRcbiBcdFx0Ly8gdGhlIFwib3V0ZGF0ZWRcIiBzdGF0dXMgY2FuIHByb3BhZ2F0ZSB0byBwYXJlbnRzIGlmIHRoZXkgZG9uJ3QgYWNjZXB0IHRoZSBjaGlsZHJlblxuIFx0XHR2YXIgb3V0ZGF0ZWREZXBlbmRlbmNpZXMgPSB7fTtcbiBcdFx0dmFyIG91dGRhdGVkTW9kdWxlcyA9IFtdO1xuIFx0XHR2YXIgYXBwbGllZFVwZGF0ZSA9IHt9O1xuXG4gXHRcdHZhciB3YXJuVW5leHBlY3RlZFJlcXVpcmUgPSBmdW5jdGlvbiB3YXJuVW5leHBlY3RlZFJlcXVpcmUoKSB7XG4gXHRcdFx0Y29uc29sZS53YXJuKFxuIFx0XHRcdFx0XCJbSE1SXSB1bmV4cGVjdGVkIHJlcXVpcmUoXCIgKyByZXN1bHQubW9kdWxlSWQgKyBcIikgdG8gZGlzcG9zZWQgbW9kdWxlXCJcbiBcdFx0XHQpO1xuIFx0XHR9O1xuXG4gXHRcdGZvciAodmFyIGlkIGluIGhvdFVwZGF0ZSkge1xuIFx0XHRcdGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoaG90VXBkYXRlLCBpZCkpIHtcbiBcdFx0XHRcdG1vZHVsZUlkID0gdG9Nb2R1bGVJZChpZCk7XG4gXHRcdFx0XHQvKiogQHR5cGUge1RPRE99ICovXG4gXHRcdFx0XHR2YXIgcmVzdWx0O1xuIFx0XHRcdFx0aWYgKGhvdFVwZGF0ZVtpZF0pIHtcbiBcdFx0XHRcdFx0cmVzdWx0ID0gZ2V0QWZmZWN0ZWRTdHVmZihtb2R1bGVJZCk7XG4gXHRcdFx0XHR9IGVsc2Uge1xuIFx0XHRcdFx0XHRyZXN1bHQgPSB7XG4gXHRcdFx0XHRcdFx0dHlwZTogXCJkaXNwb3NlZFwiLFxuIFx0XHRcdFx0XHRcdG1vZHVsZUlkOiBpZFxuIFx0XHRcdFx0XHR9O1xuIFx0XHRcdFx0fVxuIFx0XHRcdFx0LyoqIEB0eXBlIHtFcnJvcnxmYWxzZX0gKi9cbiBcdFx0XHRcdHZhciBhYm9ydEVycm9yID0gZmFsc2U7XG4gXHRcdFx0XHR2YXIgZG9BcHBseSA9IGZhbHNlO1xuIFx0XHRcdFx0dmFyIGRvRGlzcG9zZSA9IGZhbHNlO1xuIFx0XHRcdFx0dmFyIGNoYWluSW5mbyA9IFwiXCI7XG4gXHRcdFx0XHRpZiAocmVzdWx0LmNoYWluKSB7XG4gXHRcdFx0XHRcdGNoYWluSW5mbyA9IFwiXFxuVXBkYXRlIHByb3BhZ2F0aW9uOiBcIiArIHJlc3VsdC5jaGFpbi5qb2luKFwiIC0+IFwiKTtcbiBcdFx0XHRcdH1cbiBcdFx0XHRcdHN3aXRjaCAocmVzdWx0LnR5cGUpIHtcbiBcdFx0XHRcdFx0Y2FzZSBcInNlbGYtZGVjbGluZWRcIjpcbiBcdFx0XHRcdFx0XHRpZiAob3B0aW9ucy5vbkRlY2xpbmVkKSBvcHRpb25zLm9uRGVjbGluZWQocmVzdWx0KTtcbiBcdFx0XHRcdFx0XHRpZiAoIW9wdGlvbnMuaWdub3JlRGVjbGluZWQpXG4gXHRcdFx0XHRcdFx0XHRhYm9ydEVycm9yID0gbmV3IEVycm9yKFxuIFx0XHRcdFx0XHRcdFx0XHRcIkFib3J0ZWQgYmVjYXVzZSBvZiBzZWxmIGRlY2xpbmU6IFwiICtcbiBcdFx0XHRcdFx0XHRcdFx0XHRyZXN1bHQubW9kdWxlSWQgK1xuIFx0XHRcdFx0XHRcdFx0XHRcdGNoYWluSW5mb1xuIFx0XHRcdFx0XHRcdFx0KTtcbiBcdFx0XHRcdFx0XHRicmVhaztcbiBcdFx0XHRcdFx0Y2FzZSBcImRlY2xpbmVkXCI6XG4gXHRcdFx0XHRcdFx0aWYgKG9wdGlvbnMub25EZWNsaW5lZCkgb3B0aW9ucy5vbkRlY2xpbmVkKHJlc3VsdCk7XG4gXHRcdFx0XHRcdFx0aWYgKCFvcHRpb25zLmlnbm9yZURlY2xpbmVkKVxuIFx0XHRcdFx0XHRcdFx0YWJvcnRFcnJvciA9IG5ldyBFcnJvcihcbiBcdFx0XHRcdFx0XHRcdFx0XCJBYm9ydGVkIGJlY2F1c2Ugb2YgZGVjbGluZWQgZGVwZW5kZW5jeTogXCIgK1xuIFx0XHRcdFx0XHRcdFx0XHRcdHJlc3VsdC5tb2R1bGVJZCArXG4gXHRcdFx0XHRcdFx0XHRcdFx0XCIgaW4gXCIgK1xuIFx0XHRcdFx0XHRcdFx0XHRcdHJlc3VsdC5wYXJlbnRJZCArXG4gXHRcdFx0XHRcdFx0XHRcdFx0Y2hhaW5JbmZvXG4gXHRcdFx0XHRcdFx0XHQpO1xuIFx0XHRcdFx0XHRcdGJyZWFrO1xuIFx0XHRcdFx0XHRjYXNlIFwidW5hY2NlcHRlZFwiOlxuIFx0XHRcdFx0XHRcdGlmIChvcHRpb25zLm9uVW5hY2NlcHRlZCkgb3B0aW9ucy5vblVuYWNjZXB0ZWQocmVzdWx0KTtcbiBcdFx0XHRcdFx0XHRpZiAoIW9wdGlvbnMuaWdub3JlVW5hY2NlcHRlZClcbiBcdFx0XHRcdFx0XHRcdGFib3J0RXJyb3IgPSBuZXcgRXJyb3IoXG4gXHRcdFx0XHRcdFx0XHRcdFwiQWJvcnRlZCBiZWNhdXNlIFwiICsgbW9kdWxlSWQgKyBcIiBpcyBub3QgYWNjZXB0ZWRcIiArIGNoYWluSW5mb1xuIFx0XHRcdFx0XHRcdFx0KTtcbiBcdFx0XHRcdFx0XHRicmVhaztcbiBcdFx0XHRcdFx0Y2FzZSBcImFjY2VwdGVkXCI6XG4gXHRcdFx0XHRcdFx0aWYgKG9wdGlvbnMub25BY2NlcHRlZCkgb3B0aW9ucy5vbkFjY2VwdGVkKHJlc3VsdCk7XG4gXHRcdFx0XHRcdFx0ZG9BcHBseSA9IHRydWU7XG4gXHRcdFx0XHRcdFx0YnJlYWs7XG4gXHRcdFx0XHRcdGNhc2UgXCJkaXNwb3NlZFwiOlxuIFx0XHRcdFx0XHRcdGlmIChvcHRpb25zLm9uRGlzcG9zZWQpIG9wdGlvbnMub25EaXNwb3NlZChyZXN1bHQpO1xuIFx0XHRcdFx0XHRcdGRvRGlzcG9zZSA9IHRydWU7XG4gXHRcdFx0XHRcdFx0YnJlYWs7XG4gXHRcdFx0XHRcdGRlZmF1bHQ6XG4gXHRcdFx0XHRcdFx0dGhyb3cgbmV3IEVycm9yKFwiVW5leGNlcHRpb24gdHlwZSBcIiArIHJlc3VsdC50eXBlKTtcbiBcdFx0XHRcdH1cbiBcdFx0XHRcdGlmIChhYm9ydEVycm9yKSB7XG4gXHRcdFx0XHRcdGhvdFNldFN0YXR1cyhcImFib3J0XCIpO1xuIFx0XHRcdFx0XHRyZXR1cm4gUHJvbWlzZS5yZWplY3QoYWJvcnRFcnJvcik7XG4gXHRcdFx0XHR9XG4gXHRcdFx0XHRpZiAoZG9BcHBseSkge1xuIFx0XHRcdFx0XHRhcHBsaWVkVXBkYXRlW21vZHVsZUlkXSA9IGhvdFVwZGF0ZVttb2R1bGVJZF07XG4gXHRcdFx0XHRcdGFkZEFsbFRvU2V0KG91dGRhdGVkTW9kdWxlcywgcmVzdWx0Lm91dGRhdGVkTW9kdWxlcyk7XG4gXHRcdFx0XHRcdGZvciAobW9kdWxlSWQgaW4gcmVzdWx0Lm91dGRhdGVkRGVwZW5kZW5jaWVzKSB7XG4gXHRcdFx0XHRcdFx0aWYgKFxuIFx0XHRcdFx0XHRcdFx0T2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKFxuIFx0XHRcdFx0XHRcdFx0XHRyZXN1bHQub3V0ZGF0ZWREZXBlbmRlbmNpZXMsXG4gXHRcdFx0XHRcdFx0XHRcdG1vZHVsZUlkXG4gXHRcdFx0XHRcdFx0XHQpXG4gXHRcdFx0XHRcdFx0KSB7XG4gXHRcdFx0XHRcdFx0XHRpZiAoIW91dGRhdGVkRGVwZW5kZW5jaWVzW21vZHVsZUlkXSlcbiBcdFx0XHRcdFx0XHRcdFx0b3V0ZGF0ZWREZXBlbmRlbmNpZXNbbW9kdWxlSWRdID0gW107XG4gXHRcdFx0XHRcdFx0XHRhZGRBbGxUb1NldChcbiBcdFx0XHRcdFx0XHRcdFx0b3V0ZGF0ZWREZXBlbmRlbmNpZXNbbW9kdWxlSWRdLFxuIFx0XHRcdFx0XHRcdFx0XHRyZXN1bHQub3V0ZGF0ZWREZXBlbmRlbmNpZXNbbW9kdWxlSWRdXG4gXHRcdFx0XHRcdFx0XHQpO1xuIFx0XHRcdFx0XHRcdH1cbiBcdFx0XHRcdFx0fVxuIFx0XHRcdFx0fVxuIFx0XHRcdFx0aWYgKGRvRGlzcG9zZSkge1xuIFx0XHRcdFx0XHRhZGRBbGxUb1NldChvdXRkYXRlZE1vZHVsZXMsIFtyZXN1bHQubW9kdWxlSWRdKTtcbiBcdFx0XHRcdFx0YXBwbGllZFVwZGF0ZVttb2R1bGVJZF0gPSB3YXJuVW5leHBlY3RlZFJlcXVpcmU7XG4gXHRcdFx0XHR9XG4gXHRcdFx0fVxuIFx0XHR9XG5cbiBcdFx0Ly8gU3RvcmUgc2VsZiBhY2NlcHRlZCBvdXRkYXRlZCBtb2R1bGVzIHRvIHJlcXVpcmUgdGhlbSBsYXRlciBieSB0aGUgbW9kdWxlIHN5c3RlbVxuIFx0XHR2YXIgb3V0ZGF0ZWRTZWxmQWNjZXB0ZWRNb2R1bGVzID0gW107XG4gXHRcdGZvciAoaSA9IDA7IGkgPCBvdXRkYXRlZE1vZHVsZXMubGVuZ3RoOyBpKyspIHtcbiBcdFx0XHRtb2R1bGVJZCA9IG91dGRhdGVkTW9kdWxlc1tpXTtcbiBcdFx0XHRpZiAoXG4gXHRcdFx0XHRpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSAmJlxuIFx0XHRcdFx0aW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uaG90Ll9zZWxmQWNjZXB0ZWQgJiZcbiBcdFx0XHRcdC8vIHJlbW92ZWQgc2VsZi1hY2NlcHRlZCBtb2R1bGVzIHNob3VsZCBub3QgYmUgcmVxdWlyZWRcbiBcdFx0XHRcdGFwcGxpZWRVcGRhdGVbbW9kdWxlSWRdICE9PSB3YXJuVW5leHBlY3RlZFJlcXVpcmVcbiBcdFx0XHQpIHtcbiBcdFx0XHRcdG91dGRhdGVkU2VsZkFjY2VwdGVkTW9kdWxlcy5wdXNoKHtcbiBcdFx0XHRcdFx0bW9kdWxlOiBtb2R1bGVJZCxcbiBcdFx0XHRcdFx0ZXJyb3JIYW5kbGVyOiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5ob3QuX3NlbGZBY2NlcHRlZFxuIFx0XHRcdFx0fSk7XG4gXHRcdFx0fVxuIFx0XHR9XG5cbiBcdFx0Ly8gTm93IGluIFwiZGlzcG9zZVwiIHBoYXNlXG4gXHRcdGhvdFNldFN0YXR1cyhcImRpc3Bvc2VcIik7XG4gXHRcdE9iamVjdC5rZXlzKGhvdEF2YWlsYWJsZUZpbGVzTWFwKS5mb3JFYWNoKGZ1bmN0aW9uKGNodW5rSWQpIHtcbiBcdFx0XHRpZiAoaG90QXZhaWxhYmxlRmlsZXNNYXBbY2h1bmtJZF0gPT09IGZhbHNlKSB7XG4gXHRcdFx0XHRob3REaXNwb3NlQ2h1bmsoY2h1bmtJZCk7XG4gXHRcdFx0fVxuIFx0XHR9KTtcblxuIFx0XHR2YXIgaWR4O1xuIFx0XHR2YXIgcXVldWUgPSBvdXRkYXRlZE1vZHVsZXMuc2xpY2UoKTtcbiBcdFx0d2hpbGUgKHF1ZXVlLmxlbmd0aCA+IDApIHtcbiBcdFx0XHRtb2R1bGVJZCA9IHF1ZXVlLnBvcCgpO1xuIFx0XHRcdG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdO1xuIFx0XHRcdGlmICghbW9kdWxlKSBjb250aW51ZTtcblxuIFx0XHRcdHZhciBkYXRhID0ge307XG5cbiBcdFx0XHQvLyBDYWxsIGRpc3Bvc2UgaGFuZGxlcnNcbiBcdFx0XHR2YXIgZGlzcG9zZUhhbmRsZXJzID0gbW9kdWxlLmhvdC5fZGlzcG9zZUhhbmRsZXJzO1xuIFx0XHRcdGZvciAoaiA9IDA7IGogPCBkaXNwb3NlSGFuZGxlcnMubGVuZ3RoOyBqKyspIHtcbiBcdFx0XHRcdGNiID0gZGlzcG9zZUhhbmRsZXJzW2pdO1xuIFx0XHRcdFx0Y2IoZGF0YSk7XG4gXHRcdFx0fVxuIFx0XHRcdGhvdEN1cnJlbnRNb2R1bGVEYXRhW21vZHVsZUlkXSA9IGRhdGE7XG5cbiBcdFx0XHQvLyBkaXNhYmxlIG1vZHVsZSAodGhpcyBkaXNhYmxlcyByZXF1aXJlcyBmcm9tIHRoaXMgbW9kdWxlKVxuIFx0XHRcdG1vZHVsZS5ob3QuYWN0aXZlID0gZmFsc2U7XG5cbiBcdFx0XHQvLyByZW1vdmUgbW9kdWxlIGZyb20gY2FjaGVcbiBcdFx0XHRkZWxldGUgaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF07XG5cbiBcdFx0XHQvLyB3aGVuIGRpc3Bvc2luZyB0aGVyZSBpcyBubyBuZWVkIHRvIGNhbGwgZGlzcG9zZSBoYW5kbGVyXG4gXHRcdFx0ZGVsZXRlIG91dGRhdGVkRGVwZW5kZW5jaWVzW21vZHVsZUlkXTtcblxuIFx0XHRcdC8vIHJlbW92ZSBcInBhcmVudHNcIiByZWZlcmVuY2VzIGZyb20gYWxsIGNoaWxkcmVuXG4gXHRcdFx0Zm9yIChqID0gMDsgaiA8IG1vZHVsZS5jaGlsZHJlbi5sZW5ndGg7IGorKykge1xuIFx0XHRcdFx0dmFyIGNoaWxkID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGUuY2hpbGRyZW5bal1dO1xuIFx0XHRcdFx0aWYgKCFjaGlsZCkgY29udGludWU7XG4gXHRcdFx0XHRpZHggPSBjaGlsZC5wYXJlbnRzLmluZGV4T2YobW9kdWxlSWQpO1xuIFx0XHRcdFx0aWYgKGlkeCA+PSAwKSB7XG4gXHRcdFx0XHRcdGNoaWxkLnBhcmVudHMuc3BsaWNlKGlkeCwgMSk7XG4gXHRcdFx0XHR9XG4gXHRcdFx0fVxuIFx0XHR9XG5cbiBcdFx0Ly8gcmVtb3ZlIG91dGRhdGVkIGRlcGVuZGVuY3kgZnJvbSBtb2R1bGUgY2hpbGRyZW5cbiBcdFx0dmFyIGRlcGVuZGVuY3k7XG4gXHRcdHZhciBtb2R1bGVPdXRkYXRlZERlcGVuZGVuY2llcztcbiBcdFx0Zm9yIChtb2R1bGVJZCBpbiBvdXRkYXRlZERlcGVuZGVuY2llcykge1xuIFx0XHRcdGlmIChcbiBcdFx0XHRcdE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvdXRkYXRlZERlcGVuZGVuY2llcywgbW9kdWxlSWQpXG4gXHRcdFx0KSB7XG4gXHRcdFx0XHRtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXTtcbiBcdFx0XHRcdGlmIChtb2R1bGUpIHtcbiBcdFx0XHRcdFx0bW9kdWxlT3V0ZGF0ZWREZXBlbmRlbmNpZXMgPSBvdXRkYXRlZERlcGVuZGVuY2llc1ttb2R1bGVJZF07XG4gXHRcdFx0XHRcdGZvciAoaiA9IDA7IGogPCBtb2R1bGVPdXRkYXRlZERlcGVuZGVuY2llcy5sZW5ndGg7IGorKykge1xuIFx0XHRcdFx0XHRcdGRlcGVuZGVuY3kgPSBtb2R1bGVPdXRkYXRlZERlcGVuZGVuY2llc1tqXTtcbiBcdFx0XHRcdFx0XHRpZHggPSBtb2R1bGUuY2hpbGRyZW4uaW5kZXhPZihkZXBlbmRlbmN5KTtcbiBcdFx0XHRcdFx0XHRpZiAoaWR4ID49IDApIG1vZHVsZS5jaGlsZHJlbi5zcGxpY2UoaWR4LCAxKTtcbiBcdFx0XHRcdFx0fVxuIFx0XHRcdFx0fVxuIFx0XHRcdH1cbiBcdFx0fVxuXG4gXHRcdC8vIE5vdyBpbiBcImFwcGx5XCIgcGhhc2VcbiBcdFx0aG90U2V0U3RhdHVzKFwiYXBwbHlcIik7XG5cbiBcdFx0aG90Q3VycmVudEhhc2ggPSBob3RVcGRhdGVOZXdIYXNoO1xuXG4gXHRcdC8vIGluc2VydCBuZXcgY29kZVxuIFx0XHRmb3IgKG1vZHVsZUlkIGluIGFwcGxpZWRVcGRhdGUpIHtcbiBcdFx0XHRpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKGFwcGxpZWRVcGRhdGUsIG1vZHVsZUlkKSkge1xuIFx0XHRcdFx0bW9kdWxlc1ttb2R1bGVJZF0gPSBhcHBsaWVkVXBkYXRlW21vZHVsZUlkXTtcbiBcdFx0XHR9XG4gXHRcdH1cblxuIFx0XHQvLyBjYWxsIGFjY2VwdCBoYW5kbGVyc1xuIFx0XHR2YXIgZXJyb3IgPSBudWxsO1xuIFx0XHRmb3IgKG1vZHVsZUlkIGluIG91dGRhdGVkRGVwZW5kZW5jaWVzKSB7XG4gXHRcdFx0aWYgKFxuIFx0XHRcdFx0T2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG91dGRhdGVkRGVwZW5kZW5jaWVzLCBtb2R1bGVJZClcbiBcdFx0XHQpIHtcbiBcdFx0XHRcdG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdO1xuIFx0XHRcdFx0aWYgKG1vZHVsZSkge1xuIFx0XHRcdFx0XHRtb2R1bGVPdXRkYXRlZERlcGVuZGVuY2llcyA9IG91dGRhdGVkRGVwZW5kZW5jaWVzW21vZHVsZUlkXTtcbiBcdFx0XHRcdFx0dmFyIGNhbGxiYWNrcyA9IFtdO1xuIFx0XHRcdFx0XHRmb3IgKGkgPSAwOyBpIDwgbW9kdWxlT3V0ZGF0ZWREZXBlbmRlbmNpZXMubGVuZ3RoOyBpKyspIHtcbiBcdFx0XHRcdFx0XHRkZXBlbmRlbmN5ID0gbW9kdWxlT3V0ZGF0ZWREZXBlbmRlbmNpZXNbaV07XG4gXHRcdFx0XHRcdFx0Y2IgPSBtb2R1bGUuaG90Ll9hY2NlcHRlZERlcGVuZGVuY2llc1tkZXBlbmRlbmN5XTtcbiBcdFx0XHRcdFx0XHRpZiAoY2IpIHtcbiBcdFx0XHRcdFx0XHRcdGlmIChjYWxsYmFja3MuaW5kZXhPZihjYikgIT09IC0xKSBjb250aW51ZTtcbiBcdFx0XHRcdFx0XHRcdGNhbGxiYWNrcy5wdXNoKGNiKTtcbiBcdFx0XHRcdFx0XHR9XG4gXHRcdFx0XHRcdH1cbiBcdFx0XHRcdFx0Zm9yIChpID0gMDsgaSA8IGNhbGxiYWNrcy5sZW5ndGg7IGkrKykge1xuIFx0XHRcdFx0XHRcdGNiID0gY2FsbGJhY2tzW2ldO1xuIFx0XHRcdFx0XHRcdHRyeSB7XG4gXHRcdFx0XHRcdFx0XHRjYihtb2R1bGVPdXRkYXRlZERlcGVuZGVuY2llcyk7XG4gXHRcdFx0XHRcdFx0fSBjYXRjaCAoZXJyKSB7XG4gXHRcdFx0XHRcdFx0XHRpZiAob3B0aW9ucy5vbkVycm9yZWQpIHtcbiBcdFx0XHRcdFx0XHRcdFx0b3B0aW9ucy5vbkVycm9yZWQoe1xuIFx0XHRcdFx0XHRcdFx0XHRcdHR5cGU6IFwiYWNjZXB0LWVycm9yZWRcIixcbiBcdFx0XHRcdFx0XHRcdFx0XHRtb2R1bGVJZDogbW9kdWxlSWQsXG4gXHRcdFx0XHRcdFx0XHRcdFx0ZGVwZW5kZW5jeUlkOiBtb2R1bGVPdXRkYXRlZERlcGVuZGVuY2llc1tpXSxcbiBcdFx0XHRcdFx0XHRcdFx0XHRlcnJvcjogZXJyXG4gXHRcdFx0XHRcdFx0XHRcdH0pO1xuIFx0XHRcdFx0XHRcdFx0fVxuIFx0XHRcdFx0XHRcdFx0aWYgKCFvcHRpb25zLmlnbm9yZUVycm9yZWQpIHtcbiBcdFx0XHRcdFx0XHRcdFx0aWYgKCFlcnJvcikgZXJyb3IgPSBlcnI7XG4gXHRcdFx0XHRcdFx0XHR9XG4gXHRcdFx0XHRcdFx0fVxuIFx0XHRcdFx0XHR9XG4gXHRcdFx0XHR9XG4gXHRcdFx0fVxuIFx0XHR9XG5cbiBcdFx0Ly8gTG9hZCBzZWxmIGFjY2VwdGVkIG1vZHVsZXNcbiBcdFx0Zm9yIChpID0gMDsgaSA8IG91dGRhdGVkU2VsZkFjY2VwdGVkTW9kdWxlcy5sZW5ndGg7IGkrKykge1xuIFx0XHRcdHZhciBpdGVtID0gb3V0ZGF0ZWRTZWxmQWNjZXB0ZWRNb2R1bGVzW2ldO1xuIFx0XHRcdG1vZHVsZUlkID0gaXRlbS5tb2R1bGU7XG4gXHRcdFx0aG90Q3VycmVudFBhcmVudHMgPSBbbW9kdWxlSWRdO1xuIFx0XHRcdHRyeSB7XG4gXHRcdFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKTtcbiBcdFx0XHR9IGNhdGNoIChlcnIpIHtcbiBcdFx0XHRcdGlmICh0eXBlb2YgaXRlbS5lcnJvckhhbmRsZXIgPT09IFwiZnVuY3Rpb25cIikge1xuIFx0XHRcdFx0XHR0cnkge1xuIFx0XHRcdFx0XHRcdGl0ZW0uZXJyb3JIYW5kbGVyKGVycik7XG4gXHRcdFx0XHRcdH0gY2F0Y2ggKGVycjIpIHtcbiBcdFx0XHRcdFx0XHRpZiAob3B0aW9ucy5vbkVycm9yZWQpIHtcbiBcdFx0XHRcdFx0XHRcdG9wdGlvbnMub25FcnJvcmVkKHtcbiBcdFx0XHRcdFx0XHRcdFx0dHlwZTogXCJzZWxmLWFjY2VwdC1lcnJvci1oYW5kbGVyLWVycm9yZWRcIixcbiBcdFx0XHRcdFx0XHRcdFx0bW9kdWxlSWQ6IG1vZHVsZUlkLFxuIFx0XHRcdFx0XHRcdFx0XHRlcnJvcjogZXJyMixcbiBcdFx0XHRcdFx0XHRcdFx0b3JpZ2luYWxFcnJvcjogZXJyXG4gXHRcdFx0XHRcdFx0XHR9KTtcbiBcdFx0XHRcdFx0XHR9XG4gXHRcdFx0XHRcdFx0aWYgKCFvcHRpb25zLmlnbm9yZUVycm9yZWQpIHtcbiBcdFx0XHRcdFx0XHRcdGlmICghZXJyb3IpIGVycm9yID0gZXJyMjtcbiBcdFx0XHRcdFx0XHR9XG4gXHRcdFx0XHRcdFx0aWYgKCFlcnJvcikgZXJyb3IgPSBlcnI7XG4gXHRcdFx0XHRcdH1cbiBcdFx0XHRcdH0gZWxzZSB7XG4gXHRcdFx0XHRcdGlmIChvcHRpb25zLm9uRXJyb3JlZCkge1xuIFx0XHRcdFx0XHRcdG9wdGlvbnMub25FcnJvcmVkKHtcbiBcdFx0XHRcdFx0XHRcdHR5cGU6IFwic2VsZi1hY2NlcHQtZXJyb3JlZFwiLFxuIFx0XHRcdFx0XHRcdFx0bW9kdWxlSWQ6IG1vZHVsZUlkLFxuIFx0XHRcdFx0XHRcdFx0ZXJyb3I6IGVyclxuIFx0XHRcdFx0XHRcdH0pO1xuIFx0XHRcdFx0XHR9XG4gXHRcdFx0XHRcdGlmICghb3B0aW9ucy5pZ25vcmVFcnJvcmVkKSB7XG4gXHRcdFx0XHRcdFx0aWYgKCFlcnJvcikgZXJyb3IgPSBlcnI7XG4gXHRcdFx0XHRcdH1cbiBcdFx0XHRcdH1cbiBcdFx0XHR9XG4gXHRcdH1cblxuIFx0XHQvLyBoYW5kbGUgZXJyb3JzIGluIGFjY2VwdCBoYW5kbGVycyBhbmQgc2VsZiBhY2NlcHRlZCBtb2R1bGUgbG9hZFxuIFx0XHRpZiAoZXJyb3IpIHtcbiBcdFx0XHRob3RTZXRTdGF0dXMoXCJmYWlsXCIpO1xuIFx0XHRcdHJldHVybiBQcm9taXNlLnJlamVjdChlcnJvcik7XG4gXHRcdH1cblxuIFx0XHRob3RTZXRTdGF0dXMoXCJpZGxlXCIpO1xuIFx0XHRyZXR1cm4gbmV3IFByb21pc2UoZnVuY3Rpb24ocmVzb2x2ZSkge1xuIFx0XHRcdHJlc29sdmUob3V0ZGF0ZWRNb2R1bGVzKTtcbiBcdFx0fSk7XG4gXHR9XG5cbiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIG9iamVjdCB0byBzdG9yZSBsb2FkZWQgYW5kIGxvYWRpbmcgY2h1bmtzXG4gXHQvLyB1bmRlZmluZWQgPSBjaHVuayBub3QgbG9hZGVkLCBudWxsID0gY2h1bmsgcHJlbG9hZGVkL3ByZWZldGNoZWRcbiBcdC8vIFByb21pc2UgPSBjaHVuayBsb2FkaW5nLCAwID0gY2h1bmsgbG9hZGVkXG4gXHR2YXIgaW5zdGFsbGVkQ2h1bmtzID0ge1xuIFx0XHRcIkNvbnNvbGVcIjogMFxuIFx0fTtcblxuIFx0dmFyIGRlZmVycmVkTW9kdWxlcyA9IFtdO1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fSxcbiBcdFx0XHRob3Q6IGhvdENyZWF0ZU1vZHVsZShtb2R1bGVJZCksXG4gXHRcdFx0cGFyZW50czogKGhvdEN1cnJlbnRQYXJlbnRzVGVtcCA9IGhvdEN1cnJlbnRQYXJlbnRzLCBob3RDdXJyZW50UGFyZW50cyA9IFtdLCBob3RDdXJyZW50UGFyZW50c1RlbXApLFxuIFx0XHRcdGNoaWxkcmVuOiBbXVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBob3RDcmVhdGVSZXF1aXJlKG1vZHVsZUlkKSk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCIvY2wvZGlzdC9cIjtcblxuIFx0Ly8gX193ZWJwYWNrX2hhc2hfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5oID0gZnVuY3Rpb24oKSB7IHJldHVybiBob3RDdXJyZW50SGFzaDsgfTtcblxuIFx0dmFyIGpzb25wQXJyYXkgPSB3aW5kb3dbXCJ3ZWJwYWNrSnNvbnBfbmFtZV9cIl0gPSB3aW5kb3dbXCJ3ZWJwYWNrSnNvbnBfbmFtZV9cIl0gfHwgW107XG4gXHR2YXIgb2xkSnNvbnBGdW5jdGlvbiA9IGpzb25wQXJyYXkucHVzaC5iaW5kKGpzb25wQXJyYXkpO1xuIFx0anNvbnBBcnJheS5wdXNoID0gd2VicGFja0pzb25wQ2FsbGJhY2s7XG4gXHRqc29ucEFycmF5ID0ganNvbnBBcnJheS5zbGljZSgpO1xuIFx0Zm9yKHZhciBpID0gMDsgaSA8IGpzb25wQXJyYXkubGVuZ3RoOyBpKyspIHdlYnBhY2tKc29ucENhbGxiYWNrKGpzb25wQXJyYXlbaV0pO1xuIFx0dmFyIHBhcmVudEpzb25wRnVuY3Rpb24gPSBvbGRKc29ucEZ1bmN0aW9uO1xuXG5cbiBcdC8vIGFkZCBlbnRyeSBtb2R1bGUgdG8gZGVmZXJyZWQgbGlzdFxuIFx0ZGVmZXJyZWRNb2R1bGVzLnB1c2goW1wiLi92ZW5kb3IvY2wvY29uc29sZS9pbmRleC5qc1wiLFwiY29tbW9uXCIsXCJ2ZW5kb3JcIl0pO1xuIFx0Ly8gcnVuIGRlZmVycmVkIG1vZHVsZXMgd2hlbiByZWFkeVxuIFx0cmV0dXJuIGNoZWNrRGVmZXJyZWRNb2R1bGVzKCk7XG4iLCI8c2NyaXB0PlxyXG4gIGNvbnN0IFVzZXJWdWVCYXNlID0gU2l0ZS5Vc2VyVnVlQmFzZTtcclxuXHJcbiAgICAvKipcclxuICAgICAqIEJhc2UgY29tcG9uZW50IGZvciBjb25zb2xlIHBhZ2VzLlxyXG4gICAgICpcclxuICAgICAqIFByb3ZpZGVzOlxyXG4gICAgICogbmF2MiBtZW51IHN1cHBvcnQgd2l0aCBhdXRvbWF0aWMgcmVtb3ZhbC5cclxuICAgICAqIEBhbGlhcyBDb25zb2xlQ29tcG9uZW50QmFzZVxyXG4gICAgICogQGNvbnN0cnVjdG9yXHJcbiAgICAgKi9cclxuICAgIGV4cG9ydCBkZWZhdWx0IHtcclxuICAgICAgJ2V4dGVuZHMnOiBVc2VyVnVlQmFzZSxcclxuICAgICAgbWV0aG9kczoge1xyXG4gICAgICAgICAgLyoqXHJcbiAgICAgICAgICAgKiBBZGQgYW4gb3B0aW9uIHRvIHRoZSBuYXYyIG1lbnUuXHJcbiAgICAgICAgICAgKiBAcGFyYW0gdGl0bGUgVGl0bGUgb2YgdGhlIG9wdGlvbiB0byBhZGQuXHJcbiAgICAgICAgICAgKiBAcGFyYW0gb3JkZXIgT3JkZXIgaW4gdGhlIG1lbnUuXHJcbiAgICAgICAgICAgKiBAcGFyYW0gY2xvc3VyZSBGdW5jdGlvbiB0byBjYWxsIHdoZW4gc2VsZWN0ZWQuXHJcbiAgICAgICAgICAgKiBAbWVtYmVyb2YgQ29uc29sZUNvbXBvbmVudEJhc2VcclxuICAgICAgICAgICAqL1xyXG4gICAgICAgICAgYWRkTmF2Mih0aXRsZSwgb3JkZXIsIGNsb3N1cmUpIHtcclxuICAgICAgICAgICAgICBjb25zdCBpdGVtID0gdGhpcy4kc2l0ZS5jb25zb2xlLmNvbXBvbmVudHMuYWRkTmF2MkxpbmsodGhpcywgdGl0bGUsIG9yZGVyLCBjbG9zdXJlKTtcclxuICAgICAgICAgICAgICB0aGlzLmNvbXBvbmVudHMxLnB1c2goaXRlbSk7XHJcbiAgICAgICAgICAgICAgcmV0dXJuIGl0ZW07XHJcbiAgICAgICAgICB9LFxyXG5cclxuICAgICAgICAgIC8qKlxyXG4gICAgICAgICAgICogQWRkIGFuIG9wdGlvbiB0byB0aGUgbmF2MiBtZW51IHRoYXQgaXMgYSByb3V0ZXIgbGlua1xyXG4gICAgICAgICAgICogQHBhcmFtIHRpdGxlIFRpdGxlIG9mIHRoZSBvcHRpb24gdG8gYWRkLlxyXG4gICAgICAgICAgICogQHBhcmFtIG9yZGVyIE9yZGVyIGluIHRoZSBtZW51LlxyXG4gICAgICAgICAgICogQHBhcmFtIGxpbmsgTGluayB3aXRob3V0IFNpdGUucm9vdFxyXG4gICAgICAgICAgICogQG1lbWJlcm9mIENvbnNvbGVDb21wb25lbnRCYXNlXHJcbiAgICAgICAgICAgKi9cclxuICAgICAgICAgIGFkZE5hdjJMaW5rKHRpdGxlLCBvcmRlciwgbGluaykge1xyXG4gICAgICAgICAgICAgIHRoaXMuYWRkTmF2Mih0aXRsZSwgb3JkZXIsICgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgdGhpcy4kcm91dGVyLnB1c2goU2l0ZS5yb290ICsgbGluayk7XHJcbiAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICB9LFxyXG5cclxuXHQgICAgICAvKipcclxuICAgICAgICAgKiBSZW1vdmUgYSBuYXYyIGl0ZW0uXHJcbiAgICAgICAgICogQHBhcmFtIGl0ZW0gSXRlbSBvYmplY3QgYXMgcmV0dXJuZWQgYnkgYWRkTmF2MlxyXG4gICAgICAgICAqIEBtZW1iZXJvZiBDb25zb2xlQ29tcG9uZW50QmFzZVxyXG4gICAgICAgICAqL1xyXG4gICAgICAgICAgcmVtb3ZlTmF2MihpdGVtKSB7XHJcbiAgICAgICAgICAgICAgbGV0IGkgPSB0aGlzLmNvbXBvbmVudHMxLmluZGV4T2YoaXRlbSk7XHJcbiAgICAgICAgICAgICAgaWYoaSA+PSAwKSB7XHJcbiAgICAgICAgICAgICAgICAgIHRoaXMuY29tcG9uZW50czEuc3BsaWNlKGksIDEpO1xyXG4gICAgICAgICAgICAgIH1cclxuXHJcblx0ICAgICAgICAgIHRoaXMuJHNpdGUuY29uc29sZS5jb21wb25lbnRzLnJlbW92ZU5hdjIodGhpcywgaXRlbSk7XHJcbiAgICAgICAgICB9LFxyXG4gICAgICAgICAgdGltZVJlbGF0aXZlVU5JWCh0aW1lLCBjdXJyZW50VGltZSwgZm9ybWF0KSB7XHJcbiAgICAgICAgICAgICAgcmV0dXJuIHRoaXMuJHNpdGUuVGltZUZvcm1hdHRlci5yZWxhdGl2ZVVOSVgodGltZSwgY3VycmVudFRpbWUsIGZvcm1hdCk7XHJcbiAgICAgICAgICB9XHJcbiAgICAgIH0sXHJcbiAgICAgIGNyZWF0ZWQoKSB7XHJcbiAgICAgIFx0dGhpcy5jb21wb25lbnRzMSA9IFtdO1xyXG4gICAgICB9LFxyXG4gICAgICBiZWZvcmVEZXN0cm95KCkge1xyXG4gICAgICBcdHRoaXMuJHNpdGUuY29uc29sZS5jb21wb25lbnRzLnJlbW92ZU5hdjIodGhpcywgdGhpcy5jb21wb25lbnRzMSk7XHJcbiAgICAgIH1cclxuICB9XHJcbjwvc2NyaXB0PlxyXG4iLCI8dGVtcGxhdGU+XHJcbiAgPG5hdiBjbGFzcz1cImNsLW5hdlwiPlxyXG4gICAgPGRpdj5cclxuICAgICAgPHVsIGNsYXNzPVwiZGl2aWRlcnNcIj5cclxuICAgICAgICA8bGk+PGEgOmhyZWY9XCJob21lTGlua1wiPjxzcGFuIGNsYXNzPVwiaG9tZVwiPkhvbWU8L3NwYW4+PC9hPjwvbGk+XHJcbiAgICAgICAgPGxpIHYtZm9yPVwicGFnZSBpbiBjb25zb2xlLmNvbXBvbmVudHMucGFnZXNcIiB2LWlmPVwicGFnZS5hdmFpbGFibGUodXNlcilcIj5cclxuICAgICAgICAgIDxyb3V0ZXItbGluayA6dG89XCJwYWdlTGluayhwYWdlKVwiPnt7cGFnZS50aXRsZX19PC9yb3V0ZXItbGluaz5cclxuICAgICAgICA8L2xpPlxyXG4gICAgICA8L3VsPlxyXG4gICAgPC9kaXY+XHJcbiAgICA8ZGl2IHYtaWY9XCJjb25zb2xlLmNvbXBvbmVudHMubmF2Mi5sZW5ndGggPiAwXCI+XHJcbiAgICAgIDxkaXYgY2xhc3M9XCJuYXYyXCI+XHJcbiAgICAgICAgPGRpdiBjbGFzcz1cImxlZnRcIj5cclxuICAgICAgICAgIDxjb21wb25lbnQgdi1pZj1cImNvbnNvbGUuY29tcG9uZW50cy5uYXYybGVmdFwiIDppcz1cImNvbnNvbGUuY29tcG9uZW50cy5uYXYybGVmdFwiPjwvY29tcG9uZW50PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxkaXYgY2xhc3M9XCJjZW50ZXJcIj5cclxuICAgICAgICAgIDxkaXYgdi1mb3I9XCJjIGluIGNvbnNvbGUuY29tcG9uZW50cy5uYXYyXCI+PGNvbXBvbmVudCA6aXM9XCJjLmNvbXBvbmVudFwiIDpzaG9ydD1cImNvbnNvbGUuY29tcG9uZW50cy5uYXYyLmxlbmd0aCA+IDJcIj48L2NvbXBvbmVudD48L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8ZGl2IGNsYXNzPVwicmlnaHRcIj5cclxuICAgICAgICAgIDxjb21wb25lbnQgdi1pZj1cImNvbnNvbGUuY29tcG9uZW50cy5uYXYycmlnaHRcIiA6aXM9XCJjb25zb2xlLmNvbXBvbmVudHMubmF2MnJpZ2h0XCI+PC9jb21wb25lbnQ+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC9kaXY+XHJcblxyXG4gIDwvbmF2PlxyXG48L3RlbXBsYXRlPlxyXG5cclxuPHNjcmlwdD5cclxuICBleHBvcnQgZGVmYXVsdCB7XHJcbiAgICAgIHByb3BzOiBbJ2NvbnNvbGUnLCAndXNlciddLFxyXG4gICAgICBkYXRhOiBmdW5jdGlvbigpIHtcclxuICAgICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgICAgaG9tZUxpbms6ICcnXHJcbiAgICAgICAgICB9XHJcbiAgICAgIH0sXHJcbiAgICAgIG1vdW50ZWQoKSB7XHJcbiAgICAgIFx0ICB0aGlzLmhvbWVMaW5rID0gdGhpcy4kc2l0ZS5yb290ICsgJy8nO1xyXG4gICAgICB9LFxyXG4gICAgICBtZXRob2RzOiB7XHJcbiAgICAgICAgICBwYWdlTGluayhwYWdlKSB7XHJcbiAgICAgICAgICAgICAgcmV0dXJuIGAke3RoaXMuJHNpdGUucm9vdH0vY2wvY29uc29sZSR7cGFnZS5yb3V0ZX1gO1xyXG4gICAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgfVxyXG48L3NjcmlwdD4iLCI8dGVtcGxhdGU+XHJcbjxkaXYgY2xhc3M9XCJjb250ZW50XCI+XHJcbiAgPHA+UGFnZSBkb2VzIG5vdCBleGlzdC4uLjwvcD5cclxuPC9kaXY+XHJcbjwvdGVtcGxhdGU+XHJcblxyXG48c2NyaXB0PlxyXG4gICAgbW9kdWxlLmV4cG9ydHMgPSB7XHJcbiAgICAgICAgbW91bnRlZCgpIHtcclxuICAgICAgICAgICAgdGhpcy4kcGFyZW50LnNldFRpdGxlKCdQYWdlIGRvZXMgbm90IGV4aXN0Li4uJyk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG48L3NjcmlwdD5cclxuIiwiPHRlbXBsYXRlPlxyXG4gIDxkaXYgY2xhc3M9XCJjb250ZW50XCI+XHJcbiAgPGgyPkRhdGFiYXNlIFRhYmxlcyBNYW5hZ2VtZW50PC9oMj5cclxuICAgIDxwIGNsYXNzPVwiY2VudGVyIHJlZFwiPjxlbT5Vc2Ugd2l0aCBjYXV0aW9uITwvZW0+PC9wPlxyXG4gIDxwPlRoZSBwYWdlIHByb3ZpZGVzIGFuIEFkbWluaXN0cmF0b3IgdGhlIGFiaWxpdHkgdG8gY3JlYXRlIGFuZCBkZXN0cm95IGRhdGFiYXNlIHRhYmxlcy5cclxuICAgIE9ubHkgdXNlIGR1cmluZyBjb3Vyc2Ugc3RhcnR1cCEgVGhlIGNyZWF0ZSBvcHRpb24gd2lsbCBub3QgZHJvcCBhbiBleGlzdGluZyB0YWJsZVxyXG4gICAgdW5sZXNzIHRoZSBkcm9wIGFuZCBjcmVhdGUgb3B0aW9uIGlzIHNlbGVjdGVkLiBUaGUgY2xlYW4gb3B0aW9uIGFsbG93cyBmb3IgY2xlYW5pbmdcclxuICAgIG9mIG9ycGhhbmVkIHJlY29yZHMgZnJvbSB0YWJsZXMuPC9wPlxyXG4gICAgPGRpdj5cclxuXHJcbiAgICAgIDx0YWJsZT5cclxuICAgICAgICA8dHI+XHJcbiAgICAgICAgICA8dGg+VGFibGVzPC90aD5cclxuICAgICAgICAgIDx0aCBjb2xzcGFuPVwiM1wiPk9wZXJhdGlvbnM8L3RoPlxyXG4gICAgICAgIDwvdHI+XHJcbiAgICAgICAgPHRyIHYtZm9yPVwidGFibGUgaW4gdGFibGVzXCI+XHJcbiAgICAgICAgICA8dGQ+e3t0YWJsZS50aXRsZX19PC90ZD5cclxuICAgICAgICAgIDx0ZD48YnV0dG9uIEBjbGljay5wcmV2ZW50PVwiY3JlYXRlKHRhYmxlLCBmYWxzZSlcIj5jcmVhdGU8L2J1dHRvbj48L3RkPlxyXG4gICAgICAgICAgPHRkPjxidXR0b24gQGNsaWNrLnByZXZlbnQ9XCJkcm9wQ3JlYXRlKHRhYmxlKVwiPmRyb3AtYW5kLWNyZWF0ZTwvYnV0dG9uPjwvdGQ+XHJcbiAgICAgICAgICA8dGQ+PGJ1dHRvbiBAY2xpY2sucHJldmVudD1cImNsZWFuKHRhYmxlKVwiPmNsZWFuPC9idXR0b24+PC90ZD5cclxuICAgICAgICA8L3RyPlxyXG4gICAgICA8L3RhYmxlPlxyXG5cclxuICAgIDwvZGl2PlxyXG4gICAgPHByZSB2LWlmPVwicmVzdWx0cy5sZW5ndGggPiAwXCIgY2xhc3M9XCJjb2RlXCI+e3tyZXN1bHRzfX08L3ByZT5cclxuICA8L2Rpdj5cclxuPC90ZW1wbGF0ZT5cclxuXHJcbjxzY3JpcHQ+XHJcbmltcG9ydCBEaWFsb2cgZnJvbSAnZGlhbG9nLWNsJztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IHtcclxuICAgIGRhdGE6IGZ1bmN0aW9uKCkge1xyXG4gICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgIHRhYmxlczogdGhpcy4kc2l0ZS5jb25zb2xlLnRhYmxlcy50YWJsZXMsXHJcbiAgICAgICAgICAgIHJlc3VsdHM6ICcnXHJcbiAgICAgICAgfVxyXG4gICAgfSxcclxuICAgIG1vdW50ZWQoKSB7XHJcbiAgICAgICAgdGhpcy4kcGFyZW50LnNldFRpdGxlKCc6IERhdGFiYXNlIFRhYmxlcycpO1xyXG5cdCAgICAgIHRoaXMuJHNpdGUuY29uc29sZS50YWJsZXMudGFibGVzLnNvcnQoZnVuY3Rpb24oYSwgYikge1xyXG4gICAgICAgICAgICByZXR1cm4gYS5vcmRlciAtIGIub3JkZXI7XHJcbiAgICAgICAgfSlcclxuICAgIH0sXHJcbiAgICBtZXRob2RzOiB7XHJcblx0ICAgIGNyZWF0ZTogZnVuY3Rpb24odGFibGUsIGRyb3ApIHtcclxuXHRcdCAgICB0aGlzLiRzaXRlLmFwaS5wb3N0KHRhYmxlLmFwaSwge2Ryb3A6IGRyb3AgPyAneWVzJyA6ICdubyd9KVxyXG5cdFx0XHQgICAgLnRoZW4oKHJlc3BvbnNlKSA9PiB7XHJcblx0XHRcdFx0ICAgIGlmKCFyZXNwb25zZS5oYXNFcnJvcigpKSB7XHJcblx0XHRcdFx0XHQgICAgaWYoZHJvcCkge1xyXG5cdFx0XHRcdFx0XHQgICAgdGhpcy4kc2l0ZS50b2FzdCh0aGlzLCB0YWJsZS50aXRsZSArICcgdGFibGVzIGRyb3BwZWQgYW5kIHJlY3JlYXRlZCcpO1xyXG5cdFx0XHRcdFx0ICAgIH0gZWxzZSB7XHJcblx0XHRcdFx0XHRcdCAgICB0aGlzLiRzaXRlLnRvYXN0KHRoaXMsIHRhYmxlLnRpdGxlICsgJyB0YWJsZXMgY3JlYXRlZCcpO1xyXG5cdFx0XHRcdFx0ICAgIH1cclxuXHRcdFx0XHQgICAgfSBlbHNlIHtcclxuXHRcdFx0XHRcdCAgICB0aGlzLiRzaXRlLnRvYXN0KHRoaXMsIHJlc3BvbnNlKTtcclxuXHRcdFx0XHQgICAgfVxyXG5cclxuXHRcdFx0ICAgIH0pXHJcblx0XHRcdCAgICAuY2F0Y2goKGVycm9yKSA9PiB7XHJcblx0XHRcdFx0ICAgIHRoaXMuJHNpdGUudG9hc3QodGhpcywgZXJyb3IpO1xyXG5cdFx0XHQgICAgfSk7XHJcblx0ICAgIH0sXHJcblx0ICAgIGRyb3BDcmVhdGU6IGZ1bmN0aW9uKHRhYmxlKSB7XHJcblx0XHQgICAgbmV3IERpYWxvZy5NZXNzYWdlQm94KFwiQXJlIHlvdSBzdXJlP1wiLFxyXG5cdFx0XHQgICAgJ0FyZSB5b3Ugc3VyZSB5b3Ugd2FudCB0byBkcm9wIGFuZCByZWNyZWF0ZSB0aGUgJyArIHRhYmxlLnRpdGxlICtcclxuXHRcdFx0ICAgICcgdGFibGVzPycsIERpYWxvZy5NZXNzYWdlQm94Lk9LQ0FOQ0VMLCAoKSA9PiB7XHJcblx0XHRcdFx0ICAgIHRoaXMuY3JlYXRlKHRhYmxlLCB0cnVlKTtcclxuXHRcdFx0ICAgIH0pO1xyXG5cdCAgICB9LFxyXG5cdCAgICBjbGVhbjogZnVuY3Rpb24odGFibGUpIHtcclxuXHRcdCAgICB0aGlzLiRzaXRlLmFwaS5wb3N0KHRhYmxlLmFwaSwge2NsZWFuOiAneWVzJ30pXHJcblx0XHRcdCAgICAudGhlbigocmVzcG9uc2UpID0+IHtcclxuXHRcdFx0XHQgICAgaWYoIXJlc3BvbnNlLmhhc0Vycm9yKCkpIHtcclxuXHRcdFx0XHQgICAgXHRsZXQgcmVzdWx0ID0gcmVzcG9uc2UuZ2V0RGF0YSgndGFibGUtY2xlYW4nKS5hdHRyaWJ1dGVzO1xyXG5cclxuXHRcdFx0XHQgICAgXHR0aGlzLnJlc3VsdHMgKz0gdGFibGUudGl0bGUgKyBcIiBUYWJsZXNcXG5cXG5cIiArIHJlc3VsdCArIFwiXFxuXCI7XHJcblx0XHRcdFx0ICAgIFx0Y29uc29sZS5sb2cocmVzdWx0KTtcclxuXHRcdFx0XHQgICAgfSBlbHNlIHtcclxuXHRcdFx0XHRcdCAgICB0aGlzLiRzaXRlLnRvYXN0KHRoaXMsIHJlc3BvbnNlKTtcclxuXHRcdFx0XHQgICAgfVxyXG5cclxuXHRcdFx0ICAgIH0pXHJcblx0XHRcdCAgICAuY2F0Y2goKGVycm9yKSA9PiB7XHJcblx0XHRcdFx0ICAgIHRoaXMuJHNpdGUudG9hc3QodGhpcywgZXJyb3IpO1xyXG5cdFx0XHQgICAgfSk7XHJcblx0ICAgIH1cclxuICAgIH1cclxufVxyXG48L3NjcmlwdD5cclxuXHJcbjxzdHlsZSBsYW5nPVwic2Nzc1wiIHNjb3BlZD5cclxuICB0YWJsZSB0ZCB7XHJcbiAgICBwYWRkaW5nOiAwLjI1ZW07XHJcbiAgfVxyXG5cclxuICB0YWJsZSBidXR0b24ge1xyXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgZm9udC1zaXplOiAwLjg1ZW07XHJcbiAgICBmb250LXN0eWxlOiBpdGFsaWM7XHJcbiAgfVxyXG5cclxuICBsaSBzcGFuIHtcclxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgIHdpZHRoOiA2ZW07XHJcbiAgICBmb250LXNpemU6IGluaGVyaXQ7XHJcbiAgICBmb250LXN0eWxlOiBub3JtYWw7XHJcbiAgfVxyXG5cclxuXHJcbjwvc3R5bGU+XHJcbiIsImV4cG9ydHMgPSBtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCIuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCIpKGZhbHNlKTtcbi8vIE1vZHVsZVxuZXhwb3J0cy5wdXNoKFttb2R1bGUuaWQsIFwidGFibGUgdGRbZGF0YS12LTc0NmFjMWQ3XSB7XFxuICBwYWRkaW5nOiAwLjI1ZW07XFxufVxcbnRhYmxlIGJ1dHRvbltkYXRhLXYtNzQ2YWMxZDddIHtcXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXG4gIGZvbnQtc2l6ZTogMC44NWVtO1xcbiAgZm9udC1zdHlsZTogaXRhbGljO1xcbn1cXG5saSBzcGFuW2RhdGEtdi03NDZhYzFkN10ge1xcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcbiAgd2lkdGg6IDZlbTtcXG4gIGZvbnQtc2l6ZTogaW5oZXJpdDtcXG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcXG59XFxuXCIsIFwiXCJdKTtcbiIsInZhciByZW5kZXIgPSBmdW5jdGlvbigpIHtcbiAgdmFyIF92bSA9IHRoaXNcbiAgdmFyIF9oID0gX3ZtLiRjcmVhdGVFbGVtZW50XG4gIHZhciBfYyA9IF92bS5fc2VsZi5fYyB8fCBfaFxuICByZXR1cm4gX2MoXCJuYXZcIiwgeyBzdGF0aWNDbGFzczogXCJjbC1uYXZcIiB9LCBbXG4gICAgX2MoXCJkaXZcIiwgW1xuICAgICAgX2MoXG4gICAgICAgIFwidWxcIixcbiAgICAgICAgeyBzdGF0aWNDbGFzczogXCJkaXZpZGVyc1wiIH0sXG4gICAgICAgIFtcbiAgICAgICAgICBfYyhcImxpXCIsIFtcbiAgICAgICAgICAgIF9jKFwiYVwiLCB7IGF0dHJzOiB7IGhyZWY6IF92bS5ob21lTGluayB9IH0sIFtcbiAgICAgICAgICAgICAgX2MoXCJzcGFuXCIsIHsgc3RhdGljQ2xhc3M6IFwiaG9tZVwiIH0sIFtfdm0uX3YoXCJIb21lXCIpXSlcbiAgICAgICAgICAgIF0pXG4gICAgICAgICAgXSksXG4gICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICBfdm0uX2woX3ZtLmNvbnNvbGUuY29tcG9uZW50cy5wYWdlcywgZnVuY3Rpb24ocGFnZSkge1xuICAgICAgICAgICAgcmV0dXJuIHBhZ2UuYXZhaWxhYmxlKF92bS51c2VyKVxuICAgICAgICAgICAgICA/IF9jKFxuICAgICAgICAgICAgICAgICAgXCJsaVwiLFxuICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICBfYyhcInJvdXRlci1saW5rXCIsIHsgYXR0cnM6IHsgdG86IF92bS5wYWdlTGluayhwYWdlKSB9IH0sIFtcbiAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoX3ZtLl9zKHBhZ2UudGl0bGUpKVxuICAgICAgICAgICAgICAgICAgICBdKVxuICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgIDFcbiAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgIDogX3ZtLl9lKClcbiAgICAgICAgICB9KVxuICAgICAgICBdLFxuICAgICAgICAyXG4gICAgICApXG4gICAgXSksXG4gICAgX3ZtLl92KFwiIFwiKSxcbiAgICBfdm0uY29uc29sZS5jb21wb25lbnRzLm5hdjIubGVuZ3RoID4gMFxuICAgICAgPyBfYyhcImRpdlwiLCBbXG4gICAgICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJuYXYyXCIgfSwgW1xuICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgIFwiZGl2XCIsXG4gICAgICAgICAgICAgIHsgc3RhdGljQ2xhc3M6IFwibGVmdFwiIH0sXG4gICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICBfdm0uY29uc29sZS5jb21wb25lbnRzLm5hdjJsZWZ0XG4gICAgICAgICAgICAgICAgICA/IF9jKF92bS5jb25zb2xlLmNvbXBvbmVudHMubmF2MmxlZnQsIHsgdGFnOiBcImNvbXBvbmVudFwiIH0pXG4gICAgICAgICAgICAgICAgICA6IF92bS5fZSgpXG4gICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgIDFcbiAgICAgICAgICAgICksXG4gICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgIFwiZGl2XCIsXG4gICAgICAgICAgICAgIHsgc3RhdGljQ2xhc3M6IFwiY2VudGVyXCIgfSxcbiAgICAgICAgICAgICAgX3ZtLl9sKF92bS5jb25zb2xlLmNvbXBvbmVudHMubmF2MiwgZnVuY3Rpb24oYykge1xuICAgICAgICAgICAgICAgIHJldHVybiBfYyhcbiAgICAgICAgICAgICAgICAgIFwiZGl2XCIsXG4gICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgIF9jKGMuY29tcG9uZW50LCB7XG4gICAgICAgICAgICAgICAgICAgICAgdGFnOiBcImNvbXBvbmVudFwiLFxuICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7IHNob3J0OiBfdm0uY29uc29sZS5jb21wb25lbnRzLm5hdjIubGVuZ3RoID4gMiB9XG4gICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICAgIDBcbiAgICAgICAgICAgICksXG4gICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgIFwiZGl2XCIsXG4gICAgICAgICAgICAgIHsgc3RhdGljQ2xhc3M6IFwicmlnaHRcIiB9LFxuICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgX3ZtLmNvbnNvbGUuY29tcG9uZW50cy5uYXYycmlnaHRcbiAgICAgICAgICAgICAgICAgID8gX2MoX3ZtLmNvbnNvbGUuY29tcG9uZW50cy5uYXYycmlnaHQsIHsgdGFnOiBcImNvbXBvbmVudFwiIH0pXG4gICAgICAgICAgICAgICAgICA6IF92bS5fZSgpXG4gICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgIDFcbiAgICAgICAgICAgIClcbiAgICAgICAgICBdKVxuICAgICAgICBdKVxuICAgICAgOiBfdm0uX2UoKVxuICBdKVxufVxudmFyIHN0YXRpY1JlbmRlckZucyA9IFtdXG5yZW5kZXIuX3dpdGhTdHJpcHBlZCA9IHRydWVcblxuZXhwb3J0IHsgcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnMgfSIsInZhciByZW5kZXIgPSBmdW5jdGlvbigpIHtcbiAgdmFyIF92bSA9IHRoaXNcbiAgdmFyIF9oID0gX3ZtLiRjcmVhdGVFbGVtZW50XG4gIHZhciBfYyA9IF92bS5fc2VsZi5fYyB8fCBfaFxuICByZXR1cm4gX3ZtLl9tKDApXG59XG52YXIgc3RhdGljUmVuZGVyRm5zID0gW1xuICBmdW5jdGlvbigpIHtcbiAgICB2YXIgX3ZtID0gdGhpc1xuICAgIHZhciBfaCA9IF92bS4kY3JlYXRlRWxlbWVudFxuICAgIHZhciBfYyA9IF92bS5fc2VsZi5fYyB8fCBfaFxuICAgIHJldHVybiBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImNvbnRlbnRcIiB9LCBbXG4gICAgICBfYyhcInBcIiwgW192bS5fdihcIlBhZ2UgZG9lcyBub3QgZXhpc3QuLi5cIildKVxuICAgIF0pXG4gIH1cbl1cbnJlbmRlci5fd2l0aFN0cmlwcGVkID0gdHJ1ZVxuXG5leHBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucyB9IiwidmFyIHJlbmRlciA9IGZ1bmN0aW9uKCkge1xuICB2YXIgX3ZtID0gdGhpc1xuICB2YXIgX2ggPSBfdm0uJGNyZWF0ZUVsZW1lbnRcbiAgdmFyIF9jID0gX3ZtLl9zZWxmLl9jIHx8IF9oXG4gIHJldHVybiBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImNvbnRlbnRcIiB9LCBbXG4gICAgX2MoXCJoMlwiLCBbX3ZtLl92KFwiRGF0YWJhc2UgVGFibGVzIE1hbmFnZW1lbnRcIildKSxcbiAgICBfdm0uX3YoXCIgXCIpLFxuICAgIF92bS5fbSgwKSxcbiAgICBfdm0uX3YoXCIgXCIpLFxuICAgIF9jKFwicFwiLCBbXG4gICAgICBfdm0uX3YoXG4gICAgICAgIFwiVGhlIHBhZ2UgcHJvdmlkZXMgYW4gQWRtaW5pc3RyYXRvciB0aGUgYWJpbGl0eSB0byBjcmVhdGUgYW5kIGRlc3Ryb3kgZGF0YWJhc2UgdGFibGVzLlxcbiAgT25seSB1c2UgZHVyaW5nIGNvdXJzZSBzdGFydHVwISBUaGUgY3JlYXRlIG9wdGlvbiB3aWxsIG5vdCBkcm9wIGFuIGV4aXN0aW5nIHRhYmxlXFxuICB1bmxlc3MgdGhlIGRyb3AgYW5kIGNyZWF0ZSBvcHRpb24gaXMgc2VsZWN0ZWQuIFRoZSBjbGVhbiBvcHRpb24gYWxsb3dzIGZvciBjbGVhbmluZ1xcbiAgb2Ygb3JwaGFuZWQgcmVjb3JkcyBmcm9tIHRhYmxlcy5cIlxuICAgICAgKVxuICAgIF0pLFxuICAgIF92bS5fdihcIiBcIiksXG4gICAgX2MoXCJkaXZcIiwgW1xuICAgICAgX2MoXG4gICAgICAgIFwidGFibGVcIixcbiAgICAgICAgW1xuICAgICAgICAgIF92bS5fbSgxKSxcbiAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgIF92bS5fbChfdm0udGFibGVzLCBmdW5jdGlvbih0YWJsZSkge1xuICAgICAgICAgICAgcmV0dXJuIF9jKFwidHJcIiwgW1xuICAgICAgICAgICAgICBfYyhcInRkXCIsIFtfdm0uX3YoX3ZtLl9zKHRhYmxlLnRpdGxlKSldKSxcbiAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgX2MoXCJ0ZFwiLCBbXG4gICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICBcImJ1dHRvblwiLFxuICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBvbjoge1xuICAgICAgICAgICAgICAgICAgICAgIGNsaWNrOiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICRldmVudC5wcmV2ZW50RGVmYXVsdCgpXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gX3ZtLmNyZWF0ZSh0YWJsZSwgZmFsc2UpXG4gICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgW192bS5fdihcImNyZWF0ZVwiKV1cbiAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICBfYyhcInRkXCIsIFtcbiAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgIFwiYnV0dG9uXCIsXG4gICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIG9uOiB7XG4gICAgICAgICAgICAgICAgICAgICAgY2xpY2s6IGZ1bmN0aW9uKCRldmVudCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgJGV2ZW50LnByZXZlbnREZWZhdWx0KClcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBfdm0uZHJvcENyZWF0ZSh0YWJsZSlcbiAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICBbX3ZtLl92KFwiZHJvcC1hbmQtY3JlYXRlXCIpXVxuICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgXSksXG4gICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgIF9jKFwidGRcIiwgW1xuICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgXCJidXR0b25cIixcbiAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgb246IHtcbiAgICAgICAgICAgICAgICAgICAgICBjbGljazogZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAkZXZlbnQucHJldmVudERlZmF1bHQoKVxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIF92bS5jbGVhbih0YWJsZSlcbiAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICBbX3ZtLl92KFwiY2xlYW5cIildXG4gICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICBdKVxuICAgICAgICAgICAgXSlcbiAgICAgICAgICB9KVxuICAgICAgICBdLFxuICAgICAgICAyXG4gICAgICApXG4gICAgXSksXG4gICAgX3ZtLl92KFwiIFwiKSxcbiAgICBfdm0ucmVzdWx0cy5sZW5ndGggPiAwXG4gICAgICA/IF9jKFwicHJlXCIsIHsgc3RhdGljQ2xhc3M6IFwiY29kZVwiIH0sIFtfdm0uX3YoX3ZtLl9zKF92bS5yZXN1bHRzKSldKVxuICAgICAgOiBfdm0uX2UoKVxuICBdKVxufVxudmFyIHN0YXRpY1JlbmRlckZucyA9IFtcbiAgZnVuY3Rpb24oKSB7XG4gICAgdmFyIF92bSA9IHRoaXNcbiAgICB2YXIgX2ggPSBfdm0uJGNyZWF0ZUVsZW1lbnRcbiAgICB2YXIgX2MgPSBfdm0uX3NlbGYuX2MgfHwgX2hcbiAgICByZXR1cm4gX2MoXCJwXCIsIHsgc3RhdGljQ2xhc3M6IFwiY2VudGVyIHJlZFwiIH0sIFtcbiAgICAgIF9jKFwiZW1cIiwgW192bS5fdihcIlVzZSB3aXRoIGNhdXRpb24hXCIpXSlcbiAgICBdKVxuICB9LFxuICBmdW5jdGlvbigpIHtcbiAgICB2YXIgX3ZtID0gdGhpc1xuICAgIHZhciBfaCA9IF92bS4kY3JlYXRlRWxlbWVudFxuICAgIHZhciBfYyA9IF92bS5fc2VsZi5fYyB8fCBfaFxuICAgIHJldHVybiBfYyhcInRyXCIsIFtcbiAgICAgIF9jKFwidGhcIiwgW192bS5fdihcIlRhYmxlc1wiKV0pLFxuICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgIF9jKFwidGhcIiwgeyBhdHRyczogeyBjb2xzcGFuOiBcIjNcIiB9IH0sIFtfdm0uX3YoXCJPcGVyYXRpb25zXCIpXSlcbiAgICBdKVxuICB9XG5dXG5yZW5kZXIuX3dpdGhTdHJpcHBlZCA9IHRydWVcblxuZXhwb3J0IHsgcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnMgfSIsIi8vIHN0eWxlLWxvYWRlcjogQWRkcyBzb21lIGNzcyB0byB0aGUgRE9NIGJ5IGFkZGluZyBhIDxzdHlsZT4gdGFnXG5cbi8vIGxvYWQgdGhlIHN0eWxlc1xudmFyIGNvbnRlbnQgPSByZXF1aXJlKFwiISEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvbG9hZGVycy9zdHlsZVBvc3RMb2FkZXIuanMhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Jlc29sdmUtdXJsLWxvYWRlci9pbmRleC5qcyEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanM/c291cmNlTWFwIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vVGFibGVzQ29tcG9uZW50LnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmlkPTc0NmFjMWQ3Jmxhbmc9c2NzcyZzY29wZWQ9dHJ1ZSZcIik7XG5pZih0eXBlb2YgY29udGVudCA9PT0gJ3N0cmluZycpIGNvbnRlbnQgPSBbW21vZHVsZS5pZCwgY29udGVudCwgJyddXTtcbmlmKGNvbnRlbnQubG9jYWxzKSBtb2R1bGUuZXhwb3J0cyA9IGNvbnRlbnQubG9jYWxzO1xuLy8gYWRkIHRoZSBzdHlsZXMgdG8gdGhlIERPTVxudmFyIGFkZCA9IHJlcXVpcmUoXCIhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1zdHlsZS1sb2FkZXIvbGliL2FkZFN0eWxlc0NsaWVudC5qc1wiKS5kZWZhdWx0XG52YXIgdXBkYXRlID0gYWRkKFwiM2EwNjhmMWNcIiwgY29udGVudCwgZmFsc2UsIHt9KTtcbi8vIEhvdCBNb2R1bGUgUmVwbGFjZW1lbnRcbmlmKG1vZHVsZS5ob3QpIHtcbiAvLyBXaGVuIHRoZSBzdHlsZXMgY2hhbmdlLCB1cGRhdGUgdGhlIDxzdHlsZT4gdGFnc1xuIGlmKCFjb250ZW50LmxvY2Fscykge1xuICAgbW9kdWxlLmhvdC5hY2NlcHQoXCIhIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9sb2FkZXJzL3N0eWxlUG9zdExvYWRlci5qcyEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvcmVzb2x2ZS11cmwtbG9hZGVyL2luZGV4LmpzIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9kaXN0L2Nqcy5qcz9zb3VyY2VNYXAhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9UYWJsZXNDb21wb25lbnQudnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmaWQ9NzQ2YWMxZDcmbGFuZz1zY3NzJnNjb3BlZD10cnVlJlwiLCBmdW5jdGlvbigpIHtcbiAgICAgdmFyIG5ld0NvbnRlbnQgPSByZXF1aXJlKFwiISEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvbG9hZGVycy9zdHlsZVBvc3RMb2FkZXIuanMhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Jlc29sdmUtdXJsLWxvYWRlci9pbmRleC5qcyEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanM/c291cmNlTWFwIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vVGFibGVzQ29tcG9uZW50LnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmlkPTc0NmFjMWQ3Jmxhbmc9c2NzcyZzY29wZWQ9dHJ1ZSZcIik7XG4gICAgIGlmKHR5cGVvZiBuZXdDb250ZW50ID09PSAnc3RyaW5nJykgbmV3Q29udGVudCA9IFtbbW9kdWxlLmlkLCBuZXdDb250ZW50LCAnJ11dO1xuICAgICB1cGRhdGUobmV3Q29udGVudCk7XG4gICB9KTtcbiB9XG4gLy8gV2hlbiB0aGUgbW9kdWxlIGlzIGRpc3Bvc2VkLCByZW1vdmUgdGhlIDxzdHlsZT4gdGFnc1xuIG1vZHVsZS5ob3QuZGlzcG9zZShmdW5jdGlvbigpIHsgdXBkYXRlKCk7IH0pO1xufSIsImltcG9ydCB7Q29uc29sZUZhY3Rvcnl9IGZyb20gJy4vanMvQ29uc29sZUZhY3RvcnknO1xyXG5cclxuaW1wb3J0IENvbnNvbGVDb21wb25lbnRCYXNlIGZyb20gJy4vanMvQ29uc29sZUNvbXBvbmVudEJhc2UudnVlJztcclxuU2l0ZS5Db25zb2xlQ29tcG9uZW50QmFzZSA9IENvbnNvbGVDb21wb25lbnRCYXNlO1xyXG5cclxuY29uc3QgQ29uc29sZSA9IENvbnNvbGVGYWN0b3J5LmNyZWF0ZShTaXRlLnNpdGUpO1xyXG5leHBvcnQge0NvbnNvbGV9O1xyXG5cclxuIiwiaW1wb3J0IHtDb25zb2xlQ29tcG9uZW50c30gZnJvbSAnLi9Db25zb2xlQ29tcG9uZW50cyc7XHJcbmltcG9ydCB7Q29uc29sZVRhYmxlc30gZnJvbSAnLi9Db25zb2xlVGFibGVzJ1xyXG5pbXBvcnQge0NvbnNvbGVDb21wb25lbnR9IGZyb20gJy4vQ29uc29sZUNvbXBvbmVudCc7XHJcbmltcG9ydCBOYXZDb21wb25lbnQgZnJvbSAnLi9OYXZDb21wb25lbnQudnVlJztcclxuaW1wb3J0IE5vdEZvdW5kQ29tcG9uZW50IGZyb20gJy4vTm90Rm91bmRDb21wb25lbnQudnVlJztcclxuXHJcbi8qKlxyXG4gKiBPYmplY3QgdGhhdCByZXByZXNlbnRzIHRoZSBzaXRlIGNvbnNvbGUuXHJcbiAqIEBwYXJhbSB7U2l0ZX0gc2l0ZSBUaGUgc2l0ZSBvYmplY3RcclxuICogQGNvbnN0cnVjdG9yXHJcbiAqL1xyXG5leHBvcnQgY29uc3QgQ29uc29sZSA9IGZ1bmN0aW9uKHNpdGUpIHtcclxuXHJcblx0LyoqIFRoaXMgcHJvcGVydHkgbWFrZXMgaXQgcG9zc2libGUgdG8gY2hhbmdlIHRoZSBjb25zb2xlIHRpdGxlXHJcbiAgICAgKiBAbWVtYmVyT2YgQ29uc29sZSAqL1xyXG5cdHRoaXMudGl0bGUgPSAnU2l0ZSBDb25zb2xlJztcclxuXHJcbiAgICAvKiogVGhlIGNvbnNvbGUgY29tcG9uZW50cyBhcmUgaW5zdGFsbGVkIGNvbXBvbmVudHNcclxuICAgICAqIGxpa2UgdGhlIHVzZXJzIGVkaXRvciBvciB0YWJsZSBjcmVhdGlvbi4gKi9cclxuICAgIHRoaXMuY29tcG9uZW50cyA9IG5ldyBDb25zb2xlQ29tcG9uZW50cyhzaXRlKTtcclxuXHJcbiAgICAvKiogVGhlIGNvbnNvbGUgdGFibGVzIGNvbXBvbmVudCBrZWVwcyB0cmFjayBvZiB0aGVcclxuICAgICAqIGRhdGFiYXNlIHRhYmxlcyB3ZSBtYXkgbmVlZCB0byBjcmVhdGUgKi9cclxuICAgIHRoaXMudGFibGVzID0gbmV3IENvbnNvbGVUYWJsZXMoKTtcclxuXHJcblx0LyoqXHJcbiAgICAgKiBTdGFydCB0aGUgY29uc29sZSBzeXN0ZW0uXHJcblx0ICogQHBhcmFtIGVsZW1lbnQgRWxlbWVudCB3ZSBwdXQgdGhlIGNvbnNvbGUgVlVFIGludG9cclxuXHQgKi9cclxuXHR0aGlzLnN0YXJ0ID0gZnVuY3Rpb24oZWxlbWVudCkge1xyXG4gICAgICAgIHRoaXMuY29tcG9uZW50cy5zb3J0KCk7XHJcbiAgICAgICAgdGhpcy5jb21wb25lbnRzLnN0YXJ0KHRoaXMpO1xyXG5cclxuICAgICAgICAvLyBHZXQgdGhlIGluc3RhbGxlZCB1c2VyXHJcbiAgICAgICAgbGV0IHVzZXIgPSBzaXRlLnN0b3JlLnN0YXRlLnVzZXIudXNlcjtcclxuXHJcbiAgICAgICAgLy9cclxuICAgICAgICAvLyBDb25maWd1cmUgdGhlIHRlbXBsYXRlLCBzZXR0aW5nIHVwIHRoZSB0b3AtbGV2ZWwgbWVudXNcclxuICAgICAgICAvL1xyXG5cclxuICAgICAgICBsZXQgdGVtcGxhdGUgPSBgPGRpdiBjbGFzcz1cImNsLWNvbnNvbGVcIj48c2l0ZS1oZWFkZXIgOnRpdGxlPVwidGl0bGVcIj5cclxuPGNvbnNvbGUtbmF2IDpjb25zb2xlPVwiY29uc29sZVwiIDp1c2VyPVwidXNlclwiPjwvY29uc29sZS1uYXY+XHJcbjwvc2l0ZS1oZWFkZXI+YDtcclxuXHJcbiAgICAgICAgdGhpcy5jb21wb25lbnRzLm1haW4uZm9yRWFjaCgoY29tcG9uZW50KSA9PiB7XHJcbiAgICAgICAgICAgIHRlbXBsYXRlICs9IGA8JHtjb21wb25lbnQudGFnfSAvPmA7XHJcbiAgICAgICAgfSlcclxuXHJcbiAgICAgICAgdGVtcGxhdGUgKz0gYFxyXG48cm91dGVyLXZpZXc+PC9yb3V0ZXItdmlldz5cclxuPHNpdGUtZm9vdGVyPjwvc2l0ZS1mb290ZXI+PC9kaXY+YDtcclxuXHJcbiAgICAgICAgLy9cclxuICAgICAgICAvLyBTZXQgdXAgdGhlIHJvdXRlc1xyXG4gICAgICAgIC8vXHJcbiAgICAgICAgY29uc3Qgcm91dGVzID0gW107XHJcbiAgICAgICAgZm9yKGNvbnN0IHJvdXRlIG9mIHRoaXMuY29tcG9uZW50cy5nZXRSb3V0ZXMoKSkge1xyXG4gICAgICAgICAgICBsZXQgcm9iaiA9IHtcclxuICAgICAgICAgICAgICAgIHBhdGg6IHNpdGUucm9vdCArICcvY2wvY29uc29sZScgKyByb3V0ZS5yb3V0ZSxcclxuICAgICAgICAgICAgICAgIGNvbXBvbmVudDogcm91dGUuY29tcG9uZW50XHJcbiAgICAgICAgICAgIH07XHJcblxyXG4gICAgICAgICAgICBpZihyb3V0ZS5wcm9wcyAhPT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgICAgICAgICByb2JqLnByb3BzID0gcm91dGUucHJvcHM7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGlmKHJvdXRlLm5hbWUgIT09IHVuZGVmaW5lZCkge1xyXG4gICAgICAgICAgICAgICAgcm9iai5uYW1lID0gcm91dGUubmFtZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICByb3V0ZXMucHVzaChyb2JqKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHRoaXMuY29tcG9uZW50cy5wYWdlcy5mb3JFYWNoKChwYWdlKSA9PiB7XHJcbiAgICAgICAgICAgIGlmKHVzZXIuYXRMZWFzdChwYWdlLm1pbmltdW1Sb2xlKHVzZXIpKSkge1xyXG4gICAgICAgICAgICAgICAgbGV0IGNvbXBvbmVudCA9IHBhZ2UuY29tcG9uZW50ICE9PSB1bmRlZmluZWQgPyBwYWdlLmNvbXBvbmVudCA6XHJcbiAgICAgICAgICAgICAgICAgICAgbmV3IENvbnNvbGVDb21wb25lbnQodGhpcywgc2l0ZSwgdXNlciwgcGFnZSk7XHJcbiAgICAgICAgICAgICAgICByb3V0ZXMucHVzaCh7XHJcbiAgICAgICAgICAgICAgICAgICAgcGF0aDogc2l0ZS5yb290ICsgJy9jbC9jb25zb2xlJyArIHBhZ2Uucm91dGUsIGNvbXBvbmVudDogY29tcG9uZW50XHJcbiAgICAgICAgICAgICAgICB9KVxyXG5cclxuXHJcbiAgICAgICAgICAgICAgICBwYWdlLnNlY3Rpb25zLmZvckVhY2goKHNlY3Rpb24pID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBzZWN0aW9uLm9wdGlvbnMuZm9yRWFjaCgob3B0aW9uKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmKG9wdGlvbi5hdmFpbGFibGUodXNlcikpIHtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZihvcHRpb24ucm91dGVzICE9PSB1bmRlZmluZWQpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvcHRpb24ucm91dGVzLmZvckVhY2goKHJvdXRlKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxldCByb2JqID0ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcGF0aDogc2l0ZS5yb290ICsgJy9jbC9jb25zb2xlJyArIHJvdXRlLnJvdXRlLCBjb21wb25lbnQ6IHJvdXRlLmNvbXBvbmVudFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZihyb3V0ZS5wcm9wcyAhPT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByb2JqLnByb3BzID0gcm91dGUucHJvcHM7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYocm91dGUubmFtZSAhPT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByb2JqLm5hbWUgPSByb3V0ZS5uYW1lO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJvdXRlcy5wdXNoKHJvYmopXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuXHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIHJvdXRlcy5wdXNoKHsgcGF0aDogJyonLCBjb21wb25lbnQ6IE5vdEZvdW5kQ29tcG9uZW50IH0pO1xyXG5cclxuICAgICAgICBjb25zdCBIZWFkZXIgPSBzaXRlLmluZm8uaGVhZGVyLmNvbXBvbmVudCgpO1xyXG4gICAgICAgIGNvbnN0IEZvb3RlciA9IHNpdGUuaW5mby5mb290ZXIuY29tcG9uZW50KCk7XHJcblxyXG4gICAgICAgIGNvbnN0IHJvdXRlciA9IG5ldyBzaXRlLlZ1ZVJvdXRlcih7XHJcbiAgICAgICAgICAgIHJvdXRlczogcm91dGVzLFxyXG4gICAgICAgICAgICBtb2RlOiAnaGlzdG9yeSdcclxuICAgICAgICB9KVxyXG5cclxuICAgICAgICBjb25zdCBjb21wb25lbnRzID0ge1xyXG4gICAgICAgICAgICAnc2l0ZS1oZWFkZXInOiBIZWFkZXIsXHJcbiAgICAgICAgICAgICdzaXRlLWZvb3Rlcic6IEZvb3RlcixcclxuICAgICAgICAgICAgJ2NvbnNvbGUtbmF2JzogTmF2Q29tcG9uZW50XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBsZXQgc3RvcmUgPSBzaXRlLnN0b3JlO1xyXG4gICAgICAgIGxldCBzaXRlVGl0bGUgPSB0aGlzLnRpdGxlO1xyXG4gICAgICAgIGxldCBDb25zb2xlID0gdGhpcztcclxuXHJcbiAgICAgICAgdGhpcy5tYXN0ZXJWdWUgPSBuZXcgc2l0ZS5WdWUoe1xyXG4gICAgICAgICAgICBlbDogZWxlbWVudCxcclxuICAgICAgICAgICAgc3RvcmUsICAgICAgLy8gSW5qZWN0IHRoZSBzdG9yZVxyXG4gICAgICAgICAgICBzaXRlLCAgICAgICAvLyBJbmplY3Qgc2l0ZSwgc28gJHNpdGUgaXMgYXZhaWxhYmxlIGZvciBhbGwgY2hpbGRyZW5cclxuICAgICAgICAgICAgdGVtcGxhdGU6IHRlbXBsYXRlLFxyXG4gICAgICAgICAgICByb3V0ZXIsXHJcbiAgICAgICAgICAgIGRhdGE6IGZ1bmN0aW9uKCkge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgICAgICAgICB0aXRsZTogc2l0ZVRpdGxlLFxyXG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGU6IENvbnNvbGUsXHJcbiAgICAgICAgICAgICAgICAgICAgdXNlcjogdXNlclxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBwcm9wczoge1xyXG5cclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgY29tcG9uZW50czogY29tcG9uZW50cyxcclxuICAgICAgICAgICAgbWV0aG9kczoge1xyXG4gICAgICAgICAgICAgICAgaXNBZG1pbjogZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGFkbWluO1xyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIC8qXHJcbiAgICAgICAgICAgICAgICAgKiBTZXQgdGhlIHNpdGUgdGl0bGUuIFRoaXMgY2FuIGJlIHVzZWQgZnJvbVxyXG4gICAgICAgICAgICAgICAgICogdGhlIGNoaWxkIFZ1ZSdzIHVzaW5nIHRoaXMuJHBhcmVudC5zZXRUaXRsZSgnJylcclxuICAgICAgICAgICAgICAgICAqIEBwYXJhbSB0aXRsZSBUaXRsZSB0byBzZXRcclxuICAgICAgICAgICAgICAgICAqL1xyXG4gICAgICAgICAgICAgICAgc2V0VGl0bGUodGl0bGUpIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnRpdGxlID0gc2l0ZVRpdGxlICsgdGl0bGU7XHJcbiAgICAgICAgICAgICAgICAgICAgZG9jdW1lbnQudGl0bGUgPSBTaXRlLmluZm8uc2l0ZU5hbWUgKyAnICcgKyBzaXRlVGl0bGUgKyB0aXRsZTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgY3JlYXRlZCgpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuc2V0VGl0bGUoJycpO1xyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBtb3VudGVkKCkge1xyXG5cdCAgICAgICAgICAgIG5ldyBzaXRlLlN0aWNreU5hdignZGl2LmNsLWNvbnNvbGUgbmF2Jyk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KVxyXG4gICAgfVxyXG59XHJcblxyXG4iLCIvKipcclxuICogQ29tcG9uZW50cyB0aGF0IHJlcHJlc2VudCBhIGNvbnNvbGUgcGFnZS5cclxuICogQGNvbnN0cnVjdG9yXHJcbiAqL1xyXG5leHBvcnQgY29uc3QgQ29uc29sZUNvbXBvbmVudCA9IGZ1bmN0aW9uKGNvbnNvbGUsIHNpdGUsIHVzZXIsIHBhZ2UpIHtcclxuICAgIHRoaXMudGVtcGxhdGUgPSBgPGRpdiBpZD1cImNsLWNvbnNvbGUtbWFpblwiPjxkaXYgY2xhc3M9XCJjb250ZW50XCI+YDtcclxuXHJcbiAgICBsZXQgY29tcG9uZW50cyA9IHt9O1xyXG4gICAgbGV0IGNudCA9IDE7XHJcblxyXG4gICAgcGFnZS5zZWN0aW9ucy5mb3JFYWNoKChzZWN0aW9uKSA9PiB7XHJcbiAgICAgICAgaWYoIXNlY3Rpb24uYXZhaWxhYmxlKHVzZXIpKSB7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHRoaXMudGVtcGxhdGUgKz0gYDxoMj4ke3NlY3Rpb24udGl0bGV9PC9oMj5gO1xyXG5cclxuICAgICAgIGxldCBtZW51ID0gJyc7XHJcblxyXG4gICAgICAgLy8gQWRkIHRoZSBtZW51IG9wdGlvbnNcclxuICAgICAgIHNlY3Rpb24ub3B0aW9ucy5mb3JFYWNoKChvcHRpb24pID0+IHtcclxuICAgICAgICAgICBpZihvcHRpb24udGl0bGUgIT09IHVuZGVmaW5lZCkge1xyXG4gICAgICAgICAgICAgICBsZXQgYXRMZWFzdCA9IG9wdGlvbi5hdExlYXN0O1xyXG4gICAgICAgICAgICAgICBpZihhdExlYXN0ID09PSBPYmplY3QoYXRMZWFzdCkpIHtcclxuICAgICAgICAgICAgICAgICAgIGF0TGVhc3QgPSBzaXRlLnBlcm1pc3Npb25zLmF0TGVhc3QoYXRMZWFzdC50YWcsIGF0TGVhc3QuZGVmYXVsdCk7XHJcbiAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgIGlmKGF0TGVhc3QgPT09IHVuZGVmaW5lZCB8fCB1c2VyLmF0TGVhc3QoYXRMZWFzdCkpIHtcclxuXHQgICAgICAgICAgICAgICBtZW51ICs9IGA8bGk+PHJvdXRlci1saW5rIHRvPVwiJHtzaXRlLnJvb3R9L2NsL2NvbnNvbGUke29wdGlvbi5yb3V0ZX1cIj4ke29wdGlvbi50aXRsZX08L3JvdXRlci1saW5rPjwvbGk+YDtcclxuICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgIH1cclxuICAgICAgIH0pO1xyXG5cclxuICAgICAgIGlmKG1lbnUubGVuZ3RoID4gMCkge1xyXG4gICAgICAgICAgIHRoaXMudGVtcGxhdGUgKz0gJzx1bD4nICsgbWVudSArICc8L3VsPic7XHJcbiAgICAgICB9XHJcblxyXG4gICAgICAgIC8vIEFkZCBhbnkgY3VzdG9tIGNvbXBvbmVudHNcclxuICAgICAgIHNlY3Rpb24ub3B0aW9ucy5mb3JFYWNoKChvcHRpb24pID0+IHtcclxuICAgICAgICAgICAgaWYob3B0aW9uLmNvbXBvbmVudCAhPT0gdW5kZWZpbmVkKSB7XHJcblxyXG4gICAgICAgICAgICAgICAgdGhpcy50ZW1wbGF0ZSArPSBgPGNvbnNvbGUtY29tcG9uZW50LSR7Y250fT48L2NvbnNvbGUtY29tcG9uZW50LSR7Y250fT5gO1xyXG4gICAgICAgICAgICAgICAgY29tcG9uZW50c1snY29uc29sZS1jb21wb25lbnQtJyArIGNudF0gPSBvcHRpb24uY29tcG9uZW50O1xyXG4gICAgICAgICAgICAgICAgY250Kys7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgIH0pO1xyXG5cclxuICAgIH0pO1xyXG5cclxuICAgIHRoaXMudGVtcGxhdGUgKz0gYDwvZGl2PjwvZGl2PmA7XHJcbiAgICB0aGlzLmNvbXBvbmVudHMgPSBjb21wb25lbnRzO1xyXG5cclxuICAgIHRoaXMubW91bnRlZCA9IGZ1bmN0aW9uKCkge1xyXG4gICAgICAgIGlmKHBhZ2UudGl0bGUgPT09ICdNYWluJykge1xyXG4gICAgICAgICAgICB0aGlzLiRwYXJlbnQuc2V0VGl0bGUoJycpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHRoaXMuJHBhcmVudC5zZXRUaXRsZSgnOiAnICsgcGFnZS50aXRsZSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgIH1cclxufSIsInZhciByZW5kZXIsIHN0YXRpY1JlbmRlckZuc1xuaW1wb3J0IHNjcmlwdCBmcm9tIFwiLi9Db25zb2xlQ29tcG9uZW50QmFzZS52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCJcbmV4cG9ydCAqIGZyb20gXCIuL0NvbnNvbGVDb21wb25lbnRCYXNlLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIlxuXG5cbi8qIG5vcm1hbGl6ZSBjb21wb25lbnQgKi9cbmltcG9ydCBub3JtYWxpemVyIGZyb20gXCIhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3J1bnRpbWUvY29tcG9uZW50Tm9ybWFsaXplci5qc1wiXG52YXIgY29tcG9uZW50ID0gbm9ybWFsaXplcihcbiAgc2NyaXB0LFxuICByZW5kZXIsXG4gIHN0YXRpY1JlbmRlckZucyxcbiAgZmFsc2UsXG4gIG51bGwsXG4gIG51bGwsXG4gIG51bGxcbiAgXG4pXG5cbi8qIGhvdCByZWxvYWQgKi9cbmlmIChtb2R1bGUuaG90KSB7XG4gIHZhciBhcGkgPSByZXF1aXJlKFwiQzpcXFxcVXNlcnNcXFxcY2hhcmxcXFxcRG9jdW1lbnRzXFxcXENsYXNzZXNcXFxcQ1NFMzM1XFxcXHdlYlxcXFxub2RlX21vZHVsZXNcXFxcdnVlLWhvdC1yZWxvYWQtYXBpXFxcXGRpc3RcXFxcaW5kZXguanNcIilcbiAgYXBpLmluc3RhbGwocmVxdWlyZSgndnVlJykpXG4gIGlmIChhcGkuY29tcGF0aWJsZSkge1xuICAgIG1vZHVsZS5ob3QuYWNjZXB0KClcbiAgICBpZiAoIWFwaS5pc1JlY29yZGVkKCc2OWUzNTVhOCcpKSB7XG4gICAgICBhcGkuY3JlYXRlUmVjb3JkKCc2OWUzNTVhOCcsIGNvbXBvbmVudC5vcHRpb25zKVxuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVsb2FkKCc2OWUzNTVhOCcsIGNvbXBvbmVudC5vcHRpb25zKVxuICAgIH1cbiAgICBcbiAgfVxufVxuY29tcG9uZW50Lm9wdGlvbnMuX19maWxlID0gXCJ2ZW5kb3IvY2wvY29uc29sZS9qcy9Db25zb2xlQ29tcG9uZW50QmFzZS52dWVcIlxuZXhwb3J0IGRlZmF1bHQgY29tcG9uZW50LmV4cG9ydHMiLCJpbXBvcnQgbW9kIGZyb20gXCItIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzPz9yZWYtLTIhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9Db25zb2xlQ29tcG9uZW50QmFzZS52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCI7IGV4cG9ydCBkZWZhdWx0IG1vZDsgZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanM/P3JlZi0tMiEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL0NvbnNvbGVDb21wb25lbnRCYXNlLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIiIsImltcG9ydCB7Q29uc29sZVBhZ2V9IGZyb20gJy4vQ29uc29sZVBhZ2UnO1xyXG5cclxuLyoqXHJcbiAqIE1hbmFnZW1lbnQgb2YgYWxsIGNvbnNvbGUgY29tcG9uZW50c1xyXG4gKlxyXG4gKiBDb21wb25lbnRzIGFyZTpcclxuICogc3RhcnQgc2NyaXB0cyBydW4gd2hlbiB0aGUgY29uc29sZSBpcyBzdGFydGVkIChhZGRTdGFydClcclxuICogbWFpbiBDb21wb25lbnRzIGFkZGVkIHRvIGV2ZXJ5IHBhZ2UgKGFkZE1haW5Db21wb25lbnQpXHJcbiAqIG9wdGlvbnMgQWRkcyB0b3AtbGV2ZWwgbWVudSBvcHRpb25zIGFuZCBvcHRpb25zIG9uIHBhZ2VzIChhZGRPcHRpb24pXHJcbiAqIHJvdXRlcyBBZGRzIHJvdXRlcyB0byB0aGUgY29uc29sZSBkaXJlY3RvcnkgKGFkZFJvdXRlLCBhZGRSb3V0ZXMpICpcclxuICogQHBhcmFtIHNpdGVcclxuICogQGNvbnN0cnVjdG9yXHJcbiAqL1xyXG5leHBvcnQgbGV0IENvbnNvbGVDb21wb25lbnRzID0gZnVuY3Rpb24oc2l0ZSkge1xyXG5cclxuICAgIC8vXHJcbiAgICAvLyBTdGFydCBzY3JpcHRzIGFyZSBydW4gd2hlbiB0aGUgY29uc29sZSBpcyBzdGFydGVkXHJcbiAgICAvL1xyXG4gICAgbGV0IHN0YXJ0ID0gW107XHJcblxyXG5cclxuICAgIHRoaXMuYWRkU3RhcnQgPSBmdW5jdGlvbihzY3JpcHQpIHtcclxuICAgICAgICBzdGFydC5wdXNoKHNjcmlwdCk7XHJcbiAgICB9XHJcblxyXG4gICAgdGhpcy5zdGFydCA9IGZ1bmN0aW9uKGNvbnNvbGUpIHtcclxuICAgICAgICBzdGFydC5mb3JFYWNoKChzdGFydHVwKSA9PiB7XHJcbiAgICAgICAgICAgIHN0YXJ0dXAoY29uc29sZSk7XHJcbiAgICAgICAgfSlcclxuICAgIH1cclxuXHJcbiAgICAvL1xyXG4gICAgLy8gQW55IGNvbXBvbmVudHMgdG8gYWRkIHRvIHRoZSBtYWluIHBhZ2UgKGV2ZXJ5IHBhZ2UpXHJcbiAgICAvL1xyXG4gICAgLy8gVGhlIGNvdXJzZSBzdWJzeXN0ZW0gdXNlcyB0aGlzIHRvIGFkZCBhIGJhciB0aGUgc2VsZWN0c1xyXG4gICAgLy8gdGhlIGNvdXJzZSBzZWN0aW9uIHJpZ2h0IGJlbG93IHRoZSBtZW51IGJhci5cclxuICAgIC8vXHJcbiAgICB0aGlzLm1haW4gPSBbXTtcclxuXHJcbiAgICB0aGlzLmFkZE1haW5Db21wb25lbnQgPSBmdW5jdGlvbih0YWcsIGNvbXBvbmVudCwgb3JkZXIpIHtcclxuICAgICAgICAvLyB0aGlzLm1haW4ucHVzaCh7XHJcbiAgICAgICAgLy8gICAgIHRhZzogdGFnLFxyXG4gICAgICAgIC8vICAgICBjb21wb25lbnQ6IGNvbXBvbmVudCxcclxuICAgICAgICAvLyAgICAgb3JkZXI6IG9yZGVyXHJcbiAgICAgICAgLy8gfSk7XHJcbiAgICB9XHJcblxyXG4gICAgdGhpcy5uYXYyID0gW107XHJcblxyXG4gICAgdGhpcy5hZGROYXYyID0gZnVuY3Rpb24oY29tcG9uZW50LCBvcmRlcikge1xyXG4gICAgICAgIHRoaXMubmF2Mi5wdXNoKHtcclxuICAgICAgICAgICAgY29tcG9uZW50OiBjb21wb25lbnQsXHJcbiAgICAgICAgICAgIG9yZGVyOiBvcmRlclxyXG4gICAgICAgIH0pXHJcblxyXG4gICAgICAgIHRoaXMubmF2Mi5zb3J0KChhLCBiKSA9PiB7XHJcbiAgICAgICAgICAgIHJldHVybiBhLm9yZGVyIC0gYi5vcmRlcjtcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgcmV0dXJuIGNvbXBvbmVudDtcclxuICAgIH1cclxuXHJcbiAgICB0aGlzLnJlbW92ZU5hdjIgPSBmdW5jdGlvbih2dWUsIGNvbXBvbmVudCkge1xyXG4gICAgICAgIGlmKEFycmF5LmlzQXJyYXkoY29tcG9uZW50KSkge1xyXG4gICAgICAgICAgICBmb3IobGV0IGMgb2YgY29tcG9uZW50KSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnJlbW92ZU5hdjIodnVlLCBjKTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgZm9yKGxldCBpPTA7IGk8dGhpcy5uYXYyLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgIGlmKHRoaXMubmF2MltpXS5jb21wb25lbnQgPT09IGNvbXBvbmVudCkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5uYXYyLnNwbGljZShpLCAxKTtcclxuICAgICAgICAgICAgICAgIHZ1ZS4kc2V0KHRoaXMsICduYXYyJywgdGhpcy5uYXYyKTtcclxuICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICB0aGlzLmFkZE5hdjJMaW5rID0gZnVuY3Rpb24odnVlLCBuYW1lLCBvcmRlciwgY2xpY2spIHtcclxuICAgICAgICBsZXQgY29tcG9uZW50ID0ge1xyXG4gICAgICAgICAgICB0ZW1wbGF0ZTogYDxhIEBjbGljay5wcmV2ZW50PVwiY2xpY2tcIj4ke25hbWV9PC9hPmAsXHJcbiAgICAgICAgICAgIG1ldGhvZHM6IHtcclxuICAgICAgICAgICAgICAgIGNsaWNrKCkge1xyXG4gICAgICAgICAgICAgICAgICAgIGNsaWNrKCk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9O1xyXG4gICAgICAgIHRoaXMuYWRkTmF2Mihjb21wb25lbnQsIG9yZGVyKTtcclxuXHJcbiAgICAgICAgdGhpcy5uYXYyLnNvcnQoKGEsIGIpID0+IHtcclxuICAgICAgICAgICAgcmV0dXJuIGEub3JkZXIgLSBiLm9yZGVyO1xyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICB2dWUuJHNldCh0aGlzLCAnbmF2MicsIHRoaXMubmF2Mik7XHJcbiAgICAgICAgcmV0dXJuIGNvbXBvbmVudDtcclxuICAgIH1cclxuXHJcbiAgICB0aGlzLm5hdjJyaWdodCA9IG51bGw7XHJcbiAgICB0aGlzLm5hdjJsZWZ0ID0gbnVsbDtcclxuXHJcbiAgICAvL1xyXG4gICAgLy8gQ29uc29sZSBvcHRpb25zIGFyZSBtZW51IG9wdGlvbnMgaW4gdGhlIHNpdGUgY29uc29sZS5cclxuICAgIC8vIFRoaXMgaXMgaG93IHRoZSB0b3AtbGV2ZWwgbWVudXMsIHNlY3Rpb25zLCBhbmQgbGlua3NcclxuICAgIC8vIGFyZSBkZWZpbmVkLlxyXG4gICAgLy9cclxuXHJcbiAgICBsZXQgb3B0aW9ucyA9IFtdO1xyXG5cclxuICAgIHRoaXMuYWRkT3B0aW9uID0gZnVuY3Rpb24ob3B0aW9uKSB7XHJcbiAgICAgICAgb3B0aW9ucy5wdXNoKG9wdGlvbik7XHJcbiAgICB9XHJcblxyXG4gICAgdGhpcy5wYWdlcyA9IFtdO1xyXG5cclxuICAgIC8qKlxyXG4gICAgICogU29ydCB0aGUgY29tcG9uZW50cyBpbnRvIGEgc3RydWN0dXJlXHJcbiAgICAgKiBmb3IgY3JlYXRpbmcgdGhlIG1hbmFnZW1lbnQgcGFnZXMuXHJcbiAgICAgKi9cclxuICAgIHRoaXMuc29ydCA9IGZ1bmN0aW9uKCkge1xyXG4gICAgICAgIG9wdGlvbnMuZm9yRWFjaCgob3B0aW9uKSA9PiB7XHJcbiAgICAgICAgICAgIGxldCBwYWdlID0gZmluZFBhZ2Uob3B0aW9uLnBhZ2UudGl0bGUpO1xyXG4gICAgICAgICAgICBpZihwYWdlICE9PSBudWxsKSB7XHJcbiAgICAgICAgICAgICAgICBwYWdlLmFkZChvcHRpb24pO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgbGV0IHBhZ2UgPSBuZXcgQ29uc29sZVBhZ2Uoc2l0ZSwgb3B0aW9uLnBhZ2UpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5wYWdlcy5wdXNoKHBhZ2UpO1xyXG4gICAgICAgICAgICAgICAgcGFnZS5hZGQob3B0aW9uKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICAvLyBTb3J0IHRoZSBwYWdlcywgc2VjdGlvbnMsIGFuZCBvcHRpb25zIGluIG9yZGVyXHJcbiAgICAgICAgdGhpcy5wYWdlcy5zb3J0KGZ1bmN0aW9uKGEsIGIpIHtcclxuICAgICAgICAgICAgcmV0dXJuIGEub3JkZXIgLSBiLm9yZGVyO1xyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICB0aGlzLnBhZ2VzLmZvckVhY2goKHBhZ2UpID0+IHtcclxuICAgICAgICAgICAgcGFnZS5zb3J0KCk7XHJcbiAgICAgICAgfSlcclxuXHJcbiAgICAgICAgLy8gU29ydCBhbnkgbWFpbiBjb21wb25lbnRzXHJcbiAgICAgICAgdGhpcy5tYWluLnNvcnQoZnVuY3Rpb24oYSwgYikge1xyXG4gICAgICAgICAgICByZXR1cm4gYS5vcmRlciAtIGIub3JkZXI7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgdGhpcy5nZXRQYWdlcyA9IGZ1bmN0aW9uKCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLnBhZ2VzO1xyXG4gICAgfVxyXG5cclxuICAgIGxldCByb3V0ZXMgPSBbXTtcclxuXHJcbiAgICB0aGlzLmFkZFJvdXRlID0gZnVuY3Rpb24ocm91dGUpIHtcclxuICAgICAgICByb3V0ZXMucHVzaChyb3V0ZSk7XHJcbiAgICB9XHJcblxyXG4gICAgdGhpcy5hZGRSb3V0ZXMgPSBmdW5jdGlvbihhZGRyb3V0ZXMpIHtcclxuICAgICAgICBmb3IobGV0IHJvdXRlIG9mIGFkZHJvdXRlcykge1xyXG4gICAgICAgICAgICByb3V0ZXMucHVzaChyb3V0ZSlcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgdGhpcy5nZXRSb3V0ZXMgPSBmdW5jdGlvbigpIHtcclxuICAgICAgICByZXR1cm4gcm91dGVzO1xyXG4gICAgfVxyXG5cclxuICAgIC8qXHJcbiAgICAgKiBHaXZlbiBhIGxpc3Qgb2YgaXRlbXMgb2YgdGhlIGZvcm0ge3RpdGxlOiAndGl0bGUnLCBvcmRlcjogJ29yZGVyJ30sXHJcbiAgICAgKiBmaW5kIGFuIGl0ZW0gd2l0aCBhIGdpdmVuIHRpdGxlLlxyXG4gICAgICogQHBhcmFtIGxpc3RcclxuICAgICAqIEBwYXJhbSB0aXRsZVxyXG4gICAgICovXHJcbiAgICBsZXQgZmluZFBhZ2UgPSAodGl0bGUpID0+IHtcclxuICAgICAgICBmb3IobGV0IGkgaW4gdGhpcy5wYWdlcykge1xyXG4gICAgICAgICAgICBpZih0aGlzLnBhZ2VzW2ldLnRpdGxlID09PSB0aXRsZSkge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMucGFnZXNbaV07XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHJldHVybiBudWxsO1xyXG4gICAgfVxyXG5cclxufVxyXG5cclxuXHJcbiIsImltcG9ydCB7Q29uc29sZX0gZnJvbSAnLi9Db25zb2xlJztcclxuaW1wb3J0IFRhYmxlc0NvbXBvbmVudCBmcm9tICcuL1RhYmxlc0NvbXBvbmVudC52dWUnO1xyXG5cclxuLyoqXHJcbiAqIEZhY3RvcnkgdG8gY3JlYXRlIHRoZSBDb25zb2xlIG9iamVjdFxyXG4gKiBAY29uc3RydWN0b3JcclxuICovXHJcbmV4cG9ydCBjb25zdCBDb25zb2xlRmFjdG9yeSA9IGZ1bmN0aW9uKCkge1xyXG59XHJcblxyXG5Db25zb2xlRmFjdG9yeS5jcmVhdGUgPSBmdW5jdGlvbihzaXRlKSB7XHJcbiAgICBsZXQgc2l0ZUNvbnNvbGUgPSBuZXcgQ29uc29sZShzaXRlKTtcclxuXHJcbiAgICAvLyBTYXZlIGFzIGEgc2l0ZSBwcm9wZXJ0eVxyXG4gICAgc2l0ZS5jb25zb2xlID0gc2l0ZUNvbnNvbGU7XHJcblxyXG4gICAgLy8gQWRkIHN0YW5kYXJkIG9wdGlvbnNcclxuICAgIHNpdGVDb25zb2xlLmNvbXBvbmVudHMuYWRkT3B0aW9uKHtcclxuICAgICAgICBhdExlYXN0OiBVc2Vycy5Vc2VyLlNUQUZGLFxyXG4gICAgICAgIHBhZ2U6IHt0aXRsZTogJ01haW4nLCByb3V0ZTogJycsIG9yZGVyOiAxfSxcclxuICAgIH0pO1xyXG5cclxuICAgIHNpdGVDb25zb2xlLmNvbXBvbmVudHMuYWRkT3B0aW9uKHtcclxuICAgICAgICBhdExlYXN0OiBVc2Vycy5Vc2VyLkFETUlOLFxyXG4gICAgICAgIHBhZ2U6IHt0aXRsZTogJ01hbmFnZW1lbnQnLCByb3V0ZTogJy9tYW5hZ2VtZW50Jywgb3JkZXI6IDEwfSxcclxuICAgICAgICBzZWN0aW9uOiB7dGl0bGU6ICdTaXRlIE1hbmFnZW1lbnQnLCBvcmRlcjogMX0sXHJcbiAgICAgICAgdGl0bGU6ICdUYWJsZXMnLFxyXG4gICAgICAgIG9yZGVyOiAxMCxcclxuICAgICAgICByb3V0ZTogJy9tYW5hZ2VtZW50L3RhYmxlcycsXHJcbiAgICAgICAgcm91dGVzOiBbXHJcbiAgICAgICAgICAgIHtyb3V0ZTogJy9tYW5hZ2VtZW50L3RhYmxlcycsIG5hbWU6ICd0YWJsZXMnLCBjb21wb25lbnQ6IFRhYmxlc0NvbXBvbmVudH1cclxuICAgICAgICBdXHJcbiAgICB9KTtcclxuXHJcbiAgICBzaXRlLnN0YXJ0KCAoKSA9PiB7XHJcbiAgICAgICAgbGV0IGVsZW1lbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdkaXYuY2wtY29uc29sZScpO1xyXG4gICAgICAgIGlmKGVsZW1lbnQgIT09IG51bGwpIHtcclxuICAgICAgICAgICAgc2l0ZUNvbnNvbGUuc3RhcnQoZWxlbWVudCk7XHJcbiAgICAgICAgfVxyXG4gICAgfSk7XHJcblxyXG4gICAgcmV0dXJuIHNpdGVDb25zb2xlO1xyXG59IiwiaW1wb3J0IHtDb25zb2xlU2VjdGlvbn0gZnJvbSAnLi9Db25zb2xlU2VjdGlvbic7XHJcblxyXG4vKipcclxuICogUmVwcmVzZW50cyBhIGNvbnNvbGUgcGFnZSBpbiB0aGUgQ29uc29sZUNvbXBvbmVudHMgY29sbGVjdGlvblxyXG4gKiBAcGFyYW0ge1NpdGV9IHNpdGUgVGhlIHNpdGUgb2JqZWN0XHJcbiAqIEBwYXJhbSBwYWdlIE9iamVjdCByZXByZXNlbnRhdGlvbiBvZiBwYWdlIGFzIHBhc3NlZCBmcm9tIHRoZSBzZXJ2ZXJcclxuICogQGNvbnN0cnVjdG9yXHJcbiAqL1xyXG5leHBvcnQgbGV0IENvbnNvbGVQYWdlID0gZnVuY3Rpb24oc2l0ZSwgcGFnZSkge1xyXG4gICAgLyoqIFBhZ2UgdGl0bGUgKi9cclxuICAgIHRoaXMudGl0bGUgPSBwYWdlLnRpdGxlO1xyXG5cclxuICAgIC8qKiBSb3V0ZXIgdG8gZ2V0IHRvIHRoaXMgcGFnZSAqL1xyXG4gICAgdGhpcy5yb3V0ZSA9IHBhZ2Uucm91dGU7XHJcblxyXG4gICAgLyoqIE9yZGVyIG9mIHBhZ2UgcHJlc2VudGF0aW9uIGluIGEgY29tcG9uZW50IG1lbnUgKi9cclxuICAgIHRoaXMub3JkZXIgPSBwYWdlLm9yZGVyO1xyXG5cclxuICAgIC8qKiBUaGUgcGFnZSBjb21wb25lbnQgKi9cclxuICAgIHRoaXMuY29tcG9uZW50ID0gcGFnZS5jb21wb25lbnQ7XHJcblxyXG4gICAgLyoqIE9wdGlvbmFsIG1pbmltdW0gdXNlciByb2xlIHRvIGFjY2VzcyB0aGUgcGFnZSAqL1xyXG4gICAgdGhpcy5hdExlYXN0ID0gcGFnZS5hdExlYXN0ICE9PSB1bmRlZmluZWQgPyBwYWdlLmF0TGVhc3QgOiBudWxsO1xyXG5cclxuICAgIC8qKiBQYWdlIHNlY3Rpb25zICovXHJcbiAgICB0aGlzLnNlY3Rpb25zID0gW107XHJcblxyXG5cdC8qKlxyXG4gICAgICogQWRkIGEgc2VjdGlvbiB0byB0aGUgcGFnZS5cclxuXHQgKiBAcGFyYW0gb3B0aW9uXHJcblx0ICovXHJcblx0dGhpcy5hZGQgPSBmdW5jdGlvbihvcHRpb24pIHtcclxuICAgICAgICAvLyBEb2VzIHRoZSBpdGVtIGhhdmUgYSBzZWN0aW9uP1xyXG4gICAgICAgIGlmKG9wdGlvbi5zZWN0aW9uID09PSB1bmRlZmluZWQpIHtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgbGV0IHNlY3Rpb24gPSBmaW5kU2VjdGlvbihvcHRpb24uc2VjdGlvbi50aXRsZSk7XHJcbiAgICAgICAgaWYoc2VjdGlvbiAhPT0gbnVsbCkge1xyXG4gICAgICAgICAgICBzZWN0aW9uLmFkZChvcHRpb24pO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIGxldCBzZWN0aW9uID0gbmV3IENvbnNvbGVTZWN0aW9uKHNpdGUsIG9wdGlvbi5zZWN0aW9uKTtcclxuICAgICAgICAgICAgdGhpcy5zZWN0aW9ucy5wdXNoKHNlY3Rpb24pO1xyXG4gICAgICAgICAgICBzZWN0aW9uLmFkZChvcHRpb24pO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcblx0LyoqXHJcbiAgICAgKiBTb3J0IHBhZ2Ugc2VjdGlvbnMgaW50byBvcmRlclxyXG5cdCAqL1xyXG5cdHRoaXMuc29ydCA9IGZ1bmN0aW9uKCkge1xyXG4gICAgICAgIHRoaXMuc2VjdGlvbnMuc29ydChmdW5jdGlvbihhLCBiKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBhLm9yZGVyIC0gYi5vcmRlcjtcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgdGhpcy5zZWN0aW9ucy5mb3JFYWNoKChzZWN0aW9uKSA9PiB7XHJcbiAgICAgICAgICAgIHNlY3Rpb24uc29ydCgpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIGxldCBmaW5kU2VjdGlvbiA9ICh0aXRsZSkgPT4ge1xyXG4gICAgICAgIGZvcihsZXQgaSBpbiB0aGlzLnNlY3Rpb25zKSB7XHJcbiAgICAgICAgICAgIGlmKHRoaXMuc2VjdGlvbnNbaV0udGl0bGUgPT09IHRpdGxlKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5zZWN0aW9uc1tpXTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcmV0dXJuIG51bGw7XHJcbiAgICB9XHJcblxyXG5cdC8qKlxyXG4gICAgICogSXMgdGhpcyBwYWdlIGF2YWlsYWJsZSB0byB0aGlzIHVzZXI/XHJcblx0ICogQHBhcmFtIHVzZXIgVXNlciB0byB0ZXN0XHJcblx0ICovXHJcblx0dGhpcy5hdmFpbGFibGUgPSBmdW5jdGlvbih1c2VyKSB7XHJcbiAgICAgICAgcmV0dXJuIHVzZXIuYXRMZWFzdCh0aGlzLm1pbmltdW1Sb2xlKHVzZXIpKTtcclxuICAgIH1cclxuXHJcblx0LyoqXHJcbiAgICAgKiBDb21wdXRlIG1pbmltdW0gcm9sZSB0byBiZSBhYmxlIHRvIGFjY2VzcyB0aGlzIHBhZ2UuXHJcbiAgICAgKlxyXG4gICAgICogVGhlIG1pbmltdW0gcm9sZSBpcyBkZXRlcm1pbmVkIGJ5IHdoYXQgaXMgc3BlY2lmaWVkIGZvclxyXG4gICAgICogdGhpcyBwYWdlIHBsdXMgYW55IHBhZ2VzIGxpbmtlZCB0byBieSB0aGlzIHBhZ2UuXHJcblx0ICogQHBhcmFtIHVzZXJcclxuXHQgKiBAcmV0dXJucyB7Kn1cclxuXHQgKi9cclxuXHR0aGlzLm1pbmltdW1Sb2xlID0gZnVuY3Rpb24odXNlcikge1xyXG4gICAgICAgIGxldCByb2xlTGVhc3QgPSB0aGlzLmF0TGVhc3Q7XHJcbiAgICAgICAgaWYocm9sZUxlYXN0ID09PSBPYmplY3Qocm9sZUxlYXN0KSkge1xyXG4gICAgICAgICAgICByb2xlTGVhc3QgPSBzaXRlLnBlcm1pc3Npb25zLmF0TGVhc3Qocm9sZUxlYXN0LnRhZywgcm9sZUxlYXN0LmRlZmF1bHQpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgbGV0IHByaW9yaXR5TGVhc3QgPSB0aGlzLmF0TGVhc3QgIT09IG51bGwgPyB1c2VyLmdldFJvbGVQcmlvcml0eShyb2xlTGVhc3QpIDogMTAwMDAwO1xyXG5cclxuICAgICAgICB0aGlzLnNlY3Rpb25zLmZvckVhY2goKHNlY3Rpb24pID0+IHtcclxuICAgICAgICAgICAgbGV0IHNlY3Rpb25MZWFzdCA9IHNlY3Rpb24ubWluaW11bVJvbGUodXNlcik7XHJcbiAgICAgICAgICAgIGxldCBwcmlvcml0eSA9IHVzZXIuZ2V0Um9sZVByaW9yaXR5KHNlY3Rpb25MZWFzdCk7XHJcbiAgICAgICAgICAgIGlmKHByaW9yaXR5ICE9PSAwICYmIHByaW9yaXR5IDwgcHJpb3JpdHlMZWFzdCkge1xyXG4gICAgICAgICAgICAgICAgcm9sZUxlYXN0ID0gc2VjdGlvbkxlYXN0O1xyXG4gICAgICAgICAgICAgICAgcHJpb3JpdHlMZWFzdCA9IHByaW9yaXR5O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIGlmKHJvbGVMZWFzdCA9PT0gbnVsbCkge1xyXG4gICAgICAgICAgICByZXR1cm4gJ0EnOyAvLy88IEFsd2F5cyBBRE1JTlxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcmV0dXJuIHJvbGVMZWFzdDtcclxuXHJcbiAgICB9XHJcbn0iLCJcclxuaW1wb3J0IHtDb25zb2xlU2VjdGlvbk9wdGlvbn0gZnJvbSAnLi9Db25zb2xlU2VjdGlvbk9wdGlvbic7XHJcblxyXG4vKipcclxuICogQ29uc29sZSBzZWN0aW9uOiBUaGVzZSBhcmUgdGhlIDxoMj4gcGFnZSBzZWN0aW9uc1xyXG4gKiBAY29uc3RydWN0b3JcclxuICovXHJcbmV4cG9ydCBsZXQgQ29uc29sZVNlY3Rpb24gPSBmdW5jdGlvbihzaXRlLCBzZWN0aW9uKSB7XHJcbiAgICB0aGlzLnRpdGxlID0gc2VjdGlvbi50aXRsZTtcclxuICAgIHRoaXMub3JkZXIgPSBzZWN0aW9uLm9yZGVyO1xyXG5cclxuICAgIHRoaXMub3B0aW9ucyA9IFtdO1xyXG5cclxuICAgIHRoaXMuYWRkID0gZnVuY3Rpb24ob3B0aW9uKSB7XHJcbiAgICAgICAgdGhpcy5vcHRpb25zLnB1c2gobmV3IENvbnNvbGVTZWN0aW9uT3B0aW9uKHNpdGUsIG9wdGlvbikpO1xyXG4gICAgfVxyXG5cclxuICAgIHRoaXMuc29ydCA9IGZ1bmN0aW9uKCkge1xyXG4gICAgICAgIHRoaXMub3B0aW9ucy5zb3J0KGZ1bmN0aW9uKGEsIGIpIHtcclxuICAgICAgICAgICAgcmV0dXJuIGEub3JkZXIgLSBiLm9yZGVyO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIHRoaXMuYXZhaWxhYmxlID0gZnVuY3Rpb24odXNlcikge1xyXG4gICAgICAgIHJldHVybiB1c2VyLmF0TGVhc3QodGhpcy5taW5pbXVtUm9sZSh1c2VyKSk7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBEZXRlcm1pbmUgdGhlIG1pbmltdW0gcm9sZSBmb3IgYWxsIG9wdGlvbnNcclxuICAgICAqIGluIHRoaXMgc2VjdGlvbiBzbyB3ZSBrbm93IGlmIHdlIGNhbiBzaG93IHRoZSBzZWN0aW9uLlxyXG4gICAgICogQHBhcmFtIHVzZXIgQSB1c2VyLCBzbyB3ZSBjYW4ga25vdyB3aGF0IHRoZSBwb3NzaWJsZSByb2xlcyBhcmVcclxuICAgICAqIEByZXR1cm5zIHtzdHJpbmd9IFJvbGVcclxuICAgICAqL1xyXG4gICAgdGhpcy5taW5pbXVtUm9sZSA9IGZ1bmN0aW9uKHVzZXIpIHtcclxuICAgICAgICBpZih0aGlzLm9wdGlvbnMubGVuZ3RoID09PSAwKSB7XHJcbiAgICAgICAgICAgIHJldHVybiAnQSc7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBsZXQgcm9sZUxlYXN0ID0gbnVsbDtcclxuICAgICAgICBsZXQgcHJpb3JpdHlMZWFzdCA9IDEwMDAwMDA7XHJcblxyXG4gICAgICAgIHRoaXMub3B0aW9ucy5mb3JFYWNoKChvcHRpb24pID0+IHtcclxuXHQgICAgICAgIGxldCByb2xlID0gb3B0aW9uLmF0TGVhc3Q7XHJcblx0ICAgICAgICBpZihyb2xlID09PSBPYmplY3Qocm9sZSkpIHtcclxuXHRcdCAgICAgICAgcm9sZSA9IHNpdGUucGVybWlzc2lvbnMuYXRMZWFzdChyb2xlLnRhZywgcm9sZS5kZWZhdWx0KTtcclxuXHQgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGxldCBwcmlvcml0eSA9IHVzZXIuZ2V0Um9sZVByaW9yaXR5KHJvbGUpO1xyXG4gICAgICAgICAgICBpZihwcmlvcml0eSAhPT0gMCAmJiBwcmlvcml0eSA8IHByaW9yaXR5TGVhc3QpIHtcclxuICAgICAgICAgICAgICAgIHJvbGVMZWFzdCA9IHJvbGU7XHJcbiAgICAgICAgICAgICAgICBwcmlvcml0eUxlYXN0ID0gcHJpb3JpdHk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgaWYocm9sZUxlYXN0ID09PSBudWxsKSB7XHJcbiAgICAgICAgICAgIHJldHVybiAnQSc7IC8vLzwgQWx3YXlzIEFETUlOXHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICByZXR1cm4gcm9sZUxlYXN0O1xyXG4gICAgfVxyXG59IiwiLyoqXHJcbiAqIE9wdGlvbnMgaW4gYSBjb25zb2xlIHBhZ2Ugc2VjdGlvblxyXG4gKiBAY29uc3RydWN0b3JcclxuICovXHJcbmV4cG9ydCBjb25zdCBDb25zb2xlU2VjdGlvbk9wdGlvbiA9IGZ1bmN0aW9uKHNpdGUsIG9wdGlvbikge1xyXG5cdGZvcihsZXQgbWVtYmVyIGluIG9wdGlvbikge1xyXG5cdFx0dGhpc1ttZW1iZXJdID0gb3B0aW9uW21lbWJlcl07XHJcblx0fVxyXG5cclxuXHR0aGlzLmF2YWlsYWJsZSA9IGZ1bmN0aW9uKHVzZXIpIHtcclxuXHRcdGxldCBhdExlYXN0ID0gdGhpcy5hdExlYXN0O1xyXG5cdFx0aWYoYXRMZWFzdCA9PT0gT2JqZWN0KGF0TGVhc3QpKSB7XHJcblx0XHRcdGF0TGVhc3QgPSBzaXRlLnBlcm1pc3Npb25zLmF0TGVhc3QoYXRMZWFzdC50YWcsIGF0TGVhc3QuZGVmYXVsdCk7XHJcblx0XHR9XHJcblxyXG5cdFx0cmV0dXJuIChhdExlYXN0ID09PSB1bmRlZmluZWQgfHwgdXNlci5hdExlYXN0KGF0TGVhc3QpKTtcclxuXHR9XHJcbn1cclxuIiwiLyoqXHJcbiAqIEtlZXBzIHRyYWNrIG9mIHdoYXQgdGFibGUgY3JlYXRlL2Ryb3Agb3B0aW9ucyBhcmUgYXZhaWxhYmxlIG9uIHRoZSBzaXRlLlxyXG4gKiBAY29uc3RydWN0b3JcclxuICovXHJcbmV4cG9ydCBsZXQgQ29uc29sZVRhYmxlcyA9IGZ1bmN0aW9uKCkge1xyXG5cclxuICAgIHRoaXMudGFibGVzID0gW3tcclxuICAgICAgICB0aXRsZTogJ1NpdGUnLFxyXG4gICAgICAgIG9yZGVyOiAwLFxyXG4gICAgICAgIGFwaTogJy9hcGkvc2l0ZS90YWJsZXMnXHJcbiAgICB9XTtcclxuXHJcbiAgICB0aGlzLmFkZCA9IGZ1bmN0aW9uKHRhYmxlKSB7XHJcbiAgICAgICAgdGhpcy50YWJsZXMucHVzaCh0YWJsZSk7XHJcbiAgICB9XHJcbn1cclxuIiwiaW1wb3J0IHsgcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnMgfSBmcm9tIFwiLi9OYXZDb21wb25lbnQudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTI3NWE2ZWViJlwiXG5pbXBvcnQgc2NyaXB0IGZyb20gXCIuL05hdkNvbXBvbmVudC52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCJcbmV4cG9ydCAqIGZyb20gXCIuL05hdkNvbXBvbmVudC52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCJcblxuXG4vKiBub3JtYWxpemUgY29tcG9uZW50ICovXG5pbXBvcnQgbm9ybWFsaXplciBmcm9tIFwiIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9ydW50aW1lL2NvbXBvbmVudE5vcm1hbGl6ZXIuanNcIlxudmFyIGNvbXBvbmVudCA9IG5vcm1hbGl6ZXIoXG4gIHNjcmlwdCxcbiAgcmVuZGVyLFxuICBzdGF0aWNSZW5kZXJGbnMsXG4gIGZhbHNlLFxuICBudWxsLFxuICBudWxsLFxuICBudWxsXG4gIFxuKVxuXG4vKiBob3QgcmVsb2FkICovXG5pZiAobW9kdWxlLmhvdCkge1xuICB2YXIgYXBpID0gcmVxdWlyZShcIkM6XFxcXFVzZXJzXFxcXGNoYXJsXFxcXERvY3VtZW50c1xcXFxDbGFzc2VzXFxcXENTRTMzNVxcXFx3ZWJcXFxcbm9kZV9tb2R1bGVzXFxcXHZ1ZS1ob3QtcmVsb2FkLWFwaVxcXFxkaXN0XFxcXGluZGV4LmpzXCIpXG4gIGFwaS5pbnN0YWxsKHJlcXVpcmUoJ3Z1ZScpKVxuICBpZiAoYXBpLmNvbXBhdGlibGUpIHtcbiAgICBtb2R1bGUuaG90LmFjY2VwdCgpXG4gICAgaWYgKCFhcGkuaXNSZWNvcmRlZCgnMjc1YTZlZWInKSkge1xuICAgICAgYXBpLmNyZWF0ZVJlY29yZCgnMjc1YTZlZWInLCBjb21wb25lbnQub3B0aW9ucylcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbG9hZCgnMjc1YTZlZWInLCBjb21wb25lbnQub3B0aW9ucylcbiAgICB9XG4gICAgbW9kdWxlLmhvdC5hY2NlcHQoXCIuL05hdkNvbXBvbmVudC52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9Mjc1YTZlZWImXCIsIGZ1bmN0aW9uICgpIHtcbiAgICAgIGFwaS5yZXJlbmRlcignMjc1YTZlZWInLCB7XG4gICAgICAgIHJlbmRlcjogcmVuZGVyLFxuICAgICAgICBzdGF0aWNSZW5kZXJGbnM6IHN0YXRpY1JlbmRlckZuc1xuICAgICAgfSlcbiAgICB9KVxuICB9XG59XG5jb21wb25lbnQub3B0aW9ucy5fX2ZpbGUgPSBcInZlbmRvci9jbC9jb25zb2xlL2pzL05hdkNvbXBvbmVudC52dWVcIlxuZXhwb3J0IGRlZmF1bHQgY29tcG9uZW50LmV4cG9ydHMiLCJpbXBvcnQgbW9kIGZyb20gXCItIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzPz9yZWYtLTIhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9OYXZDb21wb25lbnQudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiOyBleHBvcnQgZGVmYXVsdCBtb2Q7IGV4cG9ydCAqIGZyb20gXCItIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzPz9yZWYtLTIhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9OYXZDb21wb25lbnQudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiIiwiZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2xvYWRlcnMvdGVtcGxhdGVMb2FkZXIuanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL05hdkNvbXBvbmVudC52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9Mjc1YTZlZWImXCIiLCJpbXBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucyB9IGZyb20gXCIuL05vdEZvdW5kQ29tcG9uZW50LnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD1hNTk3YWI2NiZcIlxuaW1wb3J0IHNjcmlwdCBmcm9tIFwiLi9Ob3RGb3VuZENvbXBvbmVudC52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCJcbmV4cG9ydCAqIGZyb20gXCIuL05vdEZvdW5kQ29tcG9uZW50LnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIlxuXG5cbi8qIG5vcm1hbGl6ZSBjb21wb25lbnQgKi9cbmltcG9ydCBub3JtYWxpemVyIGZyb20gXCIhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3J1bnRpbWUvY29tcG9uZW50Tm9ybWFsaXplci5qc1wiXG52YXIgY29tcG9uZW50ID0gbm9ybWFsaXplcihcbiAgc2NyaXB0LFxuICByZW5kZXIsXG4gIHN0YXRpY1JlbmRlckZucyxcbiAgZmFsc2UsXG4gIG51bGwsXG4gIG51bGwsXG4gIG51bGxcbiAgXG4pXG5cbi8qIGhvdCByZWxvYWQgKi9cbmlmIChtb2R1bGUuaG90KSB7XG4gIHZhciBhcGkgPSByZXF1aXJlKFwiQzpcXFxcVXNlcnNcXFxcY2hhcmxcXFxcRG9jdW1lbnRzXFxcXENsYXNzZXNcXFxcQ1NFMzM1XFxcXHdlYlxcXFxub2RlX21vZHVsZXNcXFxcdnVlLWhvdC1yZWxvYWQtYXBpXFxcXGRpc3RcXFxcaW5kZXguanNcIilcbiAgYXBpLmluc3RhbGwocmVxdWlyZSgndnVlJykpXG4gIGlmIChhcGkuY29tcGF0aWJsZSkge1xuICAgIG1vZHVsZS5ob3QuYWNjZXB0KClcbiAgICBpZiAoIWFwaS5pc1JlY29yZGVkKCdhNTk3YWI2NicpKSB7XG4gICAgICBhcGkuY3JlYXRlUmVjb3JkKCdhNTk3YWI2NicsIGNvbXBvbmVudC5vcHRpb25zKVxuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVsb2FkKCdhNTk3YWI2NicsIGNvbXBvbmVudC5vcHRpb25zKVxuICAgIH1cbiAgICBtb2R1bGUuaG90LmFjY2VwdChcIi4vTm90Rm91bmRDb21wb25lbnQudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPWE1OTdhYjY2JlwiLCBmdW5jdGlvbiAoKSB7XG4gICAgICBhcGkucmVyZW5kZXIoJ2E1OTdhYjY2Jywge1xuICAgICAgICByZW5kZXI6IHJlbmRlcixcbiAgICAgICAgc3RhdGljUmVuZGVyRm5zOiBzdGF0aWNSZW5kZXJGbnNcbiAgICAgIH0pXG4gICAgfSlcbiAgfVxufVxuY29tcG9uZW50Lm9wdGlvbnMuX19maWxlID0gXCJ2ZW5kb3IvY2wvY29uc29sZS9qcy9Ob3RGb3VuZENvbXBvbmVudC52dWVcIlxuZXhwb3J0IGRlZmF1bHQgY29tcG9uZW50LmV4cG9ydHMiLCJpbXBvcnQgbW9kIGZyb20gXCItIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzPz9yZWYtLTIhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9Ob3RGb3VuZENvbXBvbmVudC52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCI7IGV4cG9ydCBkZWZhdWx0IG1vZDsgZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanM/P3JlZi0tMiEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL05vdEZvdW5kQ29tcG9uZW50LnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIiIsImV4cG9ydCAqIGZyb20gXCItIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9sb2FkZXJzL3RlbXBsYXRlTG9hZGVyLmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9Ob3RGb3VuZENvbXBvbmVudC52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9YTU5N2FiNjYmXCIiLCJpbXBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucyB9IGZyb20gXCIuL1RhYmxlc0NvbXBvbmVudC52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9NzQ2YWMxZDcmc2NvcGVkPXRydWUmXCJcbmltcG9ydCBzY3JpcHQgZnJvbSBcIi4vVGFibGVzQ29tcG9uZW50LnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIlxuZXhwb3J0ICogZnJvbSBcIi4vVGFibGVzQ29tcG9uZW50LnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIlxuaW1wb3J0IHN0eWxlMCBmcm9tIFwiLi9UYWJsZXNDb21wb25lbnQudnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmaWQ9NzQ2YWMxZDcmbGFuZz1zY3NzJnNjb3BlZD10cnVlJlwiXG5cblxuLyogbm9ybWFsaXplIGNvbXBvbmVudCAqL1xuaW1wb3J0IG5vcm1hbGl6ZXIgZnJvbSBcIiEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvcnVudGltZS9jb21wb25lbnROb3JtYWxpemVyLmpzXCJcbnZhciBjb21wb25lbnQgPSBub3JtYWxpemVyKFxuICBzY3JpcHQsXG4gIHJlbmRlcixcbiAgc3RhdGljUmVuZGVyRm5zLFxuICBmYWxzZSxcbiAgbnVsbCxcbiAgXCI3NDZhYzFkN1wiLFxuICBudWxsXG4gIFxuKVxuXG4vKiBob3QgcmVsb2FkICovXG5pZiAobW9kdWxlLmhvdCkge1xuICB2YXIgYXBpID0gcmVxdWlyZShcIkM6XFxcXFVzZXJzXFxcXGNoYXJsXFxcXERvY3VtZW50c1xcXFxDbGFzc2VzXFxcXENTRTMzNVxcXFx3ZWJcXFxcbm9kZV9tb2R1bGVzXFxcXHZ1ZS1ob3QtcmVsb2FkLWFwaVxcXFxkaXN0XFxcXGluZGV4LmpzXCIpXG4gIGFwaS5pbnN0YWxsKHJlcXVpcmUoJ3Z1ZScpKVxuICBpZiAoYXBpLmNvbXBhdGlibGUpIHtcbiAgICBtb2R1bGUuaG90LmFjY2VwdCgpXG4gICAgaWYgKCFhcGkuaXNSZWNvcmRlZCgnNzQ2YWMxZDcnKSkge1xuICAgICAgYXBpLmNyZWF0ZVJlY29yZCgnNzQ2YWMxZDcnLCBjb21wb25lbnQub3B0aW9ucylcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbG9hZCgnNzQ2YWMxZDcnLCBjb21wb25lbnQub3B0aW9ucylcbiAgICB9XG4gICAgbW9kdWxlLmhvdC5hY2NlcHQoXCIuL1RhYmxlc0NvbXBvbmVudC52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9NzQ2YWMxZDcmc2NvcGVkPXRydWUmXCIsIGZ1bmN0aW9uICgpIHtcbiAgICAgIGFwaS5yZXJlbmRlcignNzQ2YWMxZDcnLCB7XG4gICAgICAgIHJlbmRlcjogcmVuZGVyLFxuICAgICAgICBzdGF0aWNSZW5kZXJGbnM6IHN0YXRpY1JlbmRlckZuc1xuICAgICAgfSlcbiAgICB9KVxuICB9XG59XG5jb21wb25lbnQub3B0aW9ucy5fX2ZpbGUgPSBcInZlbmRvci9jbC9jb25zb2xlL2pzL1RhYmxlc0NvbXBvbmVudC52dWVcIlxuZXhwb3J0IGRlZmF1bHQgY29tcG9uZW50LmV4cG9ydHMiLCJpbXBvcnQgbW9kIGZyb20gXCItIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzPz9yZWYtLTIhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9UYWJsZXNDb21wb25lbnQudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiOyBleHBvcnQgZGVmYXVsdCBtb2Q7IGV4cG9ydCAqIGZyb20gXCItIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzPz9yZWYtLTIhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9UYWJsZXNDb21wb25lbnQudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiIiwiaW1wb3J0IG1vZCBmcm9tIFwiLSEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLXN0eWxlLWxvYWRlci9pbmRleC5qcyEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvbG9hZGVycy9zdHlsZVBvc3RMb2FkZXIuanMhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Jlc29sdmUtdXJsLWxvYWRlci9pbmRleC5qcyEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanM/c291cmNlTWFwIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vVGFibGVzQ29tcG9uZW50LnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmlkPTc0NmFjMWQ3Jmxhbmc9c2NzcyZzY29wZWQ9dHJ1ZSZcIjsgZXhwb3J0IGRlZmF1bHQgbW9kOyBleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLXN0eWxlLWxvYWRlci9pbmRleC5qcyEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvbG9hZGVycy9zdHlsZVBvc3RMb2FkZXIuanMhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Jlc29sdmUtdXJsLWxvYWRlci9pbmRleC5qcyEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanM/c291cmNlTWFwIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vVGFibGVzQ29tcG9uZW50LnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmlkPTc0NmFjMWQ3Jmxhbmc9c2NzcyZzY29wZWQ9dHJ1ZSZcIiIsImV4cG9ydCAqIGZyb20gXCItIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9sb2FkZXJzL3RlbXBsYXRlTG9hZGVyLmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9UYWJsZXNDb21wb25lbnQudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTc0NmFjMWQ3JnNjb3BlZD10cnVlJlwiIl0sInNvdXJjZVJvb3QiOiIifQ==