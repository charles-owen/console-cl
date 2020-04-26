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
/******/ 	var hotCurrentHash = "a09822484135bb6a7c7c";
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
 *
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

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, "table td[data-v-746ac1d7] {\n  padding: 0.25em;\n}\ntable button[data-v-746ac1d7] {\n  display: inline-block;\n  font-size: 0.85em;\n  font-style: italic;\n}\nli span[data-v-746ac1d7] {\n  display: inline-block;\n  width: 6em;\n  font-size: inherit;\n  font-style: normal;\n}\n", ""]);
// Exports
module.exports = exports;


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
function _createForOfIteratorHelper(o) { if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (o = _unsupportedIterableToArray(o))) { var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var it, normalCompletion = true, didErr = false, err; return { s: function s() { it = o[Symbol.iterator](); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(n); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }






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

    var _iterator = _createForOfIteratorHelper(this.components.getRoutes()),
        _step;

    try {
      for (_iterator.s(); !(_step = _iterator.n()).done;) {
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
      _iterator.e(err);
    } finally {
      _iterator.f();
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
function _createForOfIteratorHelper(o) { if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (o = _unsupportedIterableToArray(o))) { var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var it, normalCompletion = true, didErr = false, err; return { s: function s() { it = o[Symbol.iterator](); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(n); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }


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
      var _iterator = _createForOfIteratorHelper(component),
          _step;

      try {
        for (_iterator.s(); !(_step = _iterator.n()).done;) {
          var c = _step.value;
          this.removeNav2(vue, c);
        }
      } catch (err) {
        _iterator.e(err);
      } finally {
        _iterator.f();
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
    var _iterator2 = _createForOfIteratorHelper(addroutes),
        _step2;

    try {
      for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
        var route = _step2.value;
        routes.push(route);
      }
    } catch (err) {
      _iterator2.e(err);
    } finally {
      _iterator2.f();
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
/* harmony import */ var _ConsoleComponentBase_vue__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ConsoleComponentBase.vue */ "./vendor/cl/console/js/ConsoleComponentBase.vue");



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
  site.ConsoleComponentBase = _ConsoleComponentBase_vue__WEBPACK_IMPORTED_MODULE_2__["default"];
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9bbmFtZV0vd2VicGFjay91bml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uIiwid2VicGFjazovL1tuYW1lXS93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9bbmFtZV0vdmVuZG9yL2NsL2NvbnNvbGUvanMvQ29uc29sZUNvbXBvbmVudEJhc2UudnVlIiwid2VicGFjazovL1tuYW1lXS92ZW5kb3IvY2wvY29uc29sZS9qcy9OYXZDb21wb25lbnQudnVlIiwid2VicGFjazovL1tuYW1lXS92ZW5kb3IvY2wvc2l0ZS9qcy9WdWUvTm90Rm91bmRDb21wb25lbnQudnVlIiwid2VicGFjazovL1tuYW1lXS92ZW5kb3IvY2wvY29uc29sZS9qcy9UYWJsZXNDb21wb25lbnQudnVlIiwid2VicGFjazovL1tuYW1lXS8uL3ZlbmRvci9jbC9jb25zb2xlL2pzL1RhYmxlc0NvbXBvbmVudC52dWU/YzJlMCIsIndlYnBhY2s6Ly9bbmFtZV0vLi92ZW5kb3IvY2wvY29uc29sZS9qcy9OYXZDb21wb25lbnQudnVlPzY2MzkiLCJ3ZWJwYWNrOi8vW25hbWVdLy4vdmVuZG9yL2NsL2NvbnNvbGUvanMvTm90Rm91bmRDb21wb25lbnQudnVlP2ZhZDYiLCJ3ZWJwYWNrOi8vW25hbWVdLy4vdmVuZG9yL2NsL2NvbnNvbGUvanMvVGFibGVzQ29tcG9uZW50LnZ1ZT81ZWIxIiwid2VicGFjazovL1tuYW1lXS8uL3ZlbmRvci9jbC9jb25zb2xlL2pzL1RhYmxlc0NvbXBvbmVudC52dWU/ZGUwZCIsIndlYnBhY2s6Ly9bbmFtZV0vLi92ZW5kb3IvY2wvY29uc29sZS9pbmRleC5qcyIsIndlYnBhY2s6Ly9bbmFtZV0vLi92ZW5kb3IvY2wvY29uc29sZS9qcy9Db25zb2xlLmpzIiwid2VicGFjazovL1tuYW1lXS8uL3ZlbmRvci9jbC9jb25zb2xlL2pzL0NvbnNvbGVDb21wb25lbnQuanMiLCJ3ZWJwYWNrOi8vW25hbWVdLy4vdmVuZG9yL2NsL2NvbnNvbGUvanMvQ29uc29sZUNvbXBvbmVudEJhc2UudnVlIiwid2VicGFjazovL1tuYW1lXS8uL3ZlbmRvci9jbC9jb25zb2xlL2pzL0NvbnNvbGVDb21wb25lbnRCYXNlLnZ1ZT84OGQxIiwid2VicGFjazovL1tuYW1lXS8uL3ZlbmRvci9jbC9jb25zb2xlL2pzL0NvbnNvbGVDb21wb25lbnRzLmpzIiwid2VicGFjazovL1tuYW1lXS8uL3ZlbmRvci9jbC9jb25zb2xlL2pzL0NvbnNvbGVGYWN0b3J5LmpzIiwid2VicGFjazovL1tuYW1lXS8uL3ZlbmRvci9jbC9jb25zb2xlL2pzL0NvbnNvbGVQYWdlLmpzIiwid2VicGFjazovL1tuYW1lXS8uL3ZlbmRvci9jbC9jb25zb2xlL2pzL0NvbnNvbGVTZWN0aW9uLmpzIiwid2VicGFjazovL1tuYW1lXS8uL3ZlbmRvci9jbC9jb25zb2xlL2pzL0NvbnNvbGVTZWN0aW9uT3B0aW9uLmpzIiwid2VicGFjazovL1tuYW1lXS8uL3ZlbmRvci9jbC9jb25zb2xlL2pzL0NvbnNvbGVUYWJsZXMuanMiLCJ3ZWJwYWNrOi8vW25hbWVdLy4vdmVuZG9yL2NsL2NvbnNvbGUvanMvTmF2Q29tcG9uZW50LnZ1ZSIsIndlYnBhY2s6Ly9bbmFtZV0vLi92ZW5kb3IvY2wvY29uc29sZS9qcy9OYXZDb21wb25lbnQudnVlP2U3NmEiLCJ3ZWJwYWNrOi8vW25hbWVdLy4vdmVuZG9yL2NsL2NvbnNvbGUvanMvTmF2Q29tcG9uZW50LnZ1ZT82ZDM0Iiwid2VicGFjazovL1tuYW1lXS8uL3ZlbmRvci9jbC9jb25zb2xlL2pzL05vdEZvdW5kQ29tcG9uZW50LnZ1ZSIsIndlYnBhY2s6Ly9bbmFtZV0vLi92ZW5kb3IvY2wvY29uc29sZS9qcy9Ob3RGb3VuZENvbXBvbmVudC52dWU/YjkxZCIsIndlYnBhY2s6Ly9bbmFtZV0vLi92ZW5kb3IvY2wvY29uc29sZS9qcy9Ob3RGb3VuZENvbXBvbmVudC52dWU/YjcxOCIsIndlYnBhY2s6Ly9bbmFtZV0vLi92ZW5kb3IvY2wvY29uc29sZS9qcy9UYWJsZXNDb21wb25lbnQudnVlIiwid2VicGFjazovL1tuYW1lXS8uL3ZlbmRvci9jbC9jb25zb2xlL2pzL1RhYmxlc0NvbXBvbmVudC52dWU/NmQ3ZCIsIndlYnBhY2s6Ly9bbmFtZV0vLi92ZW5kb3IvY2wvY29uc29sZS9qcy9UYWJsZXNDb21wb25lbnQudnVlPzk2MTMiLCJ3ZWJwYWNrOi8vW25hbWVdLy4vdmVuZG9yL2NsL2NvbnNvbGUvanMvVGFibGVzQ29tcG9uZW50LnZ1ZT84ZTdhIl0sIm5hbWVzIjpbIlNpdGUiLCJDb25zb2xlQ29tcG9uZW50QmFzZSIsIkNvbnNvbGUiLCJDb25zb2xlRmFjdG9yeSIsImNyZWF0ZSIsInNpdGUiLCJ0aXRsZSIsImNvbXBvbmVudHMiLCJDb25zb2xlQ29tcG9uZW50cyIsInRhYmxlcyIsIkNvbnNvbGVUYWJsZXMiLCJzdGFydCIsImVsZW1lbnQiLCJzb3J0IiwidXNlciIsInN0b3JlIiwic3RhdGUiLCJ0ZW1wbGF0ZSIsIm1haW4iLCJmb3JFYWNoIiwiY29tcG9uZW50IiwidGFnIiwicm91dGVzIiwiZ2V0Um91dGVzIiwicm91dGUiLCJyb2JqIiwicGF0aCIsInJvb3QiLCJwcm9wcyIsInVuZGVmaW5lZCIsIm5hbWUiLCJwdXNoIiwicGFnZXMiLCJwYWdlIiwiYXRMZWFzdCIsIm1pbmltdW1Sb2xlIiwiQ29uc29sZUNvbXBvbmVudCIsInNlY3Rpb25zIiwic2VjdGlvbiIsIm9wdGlvbnMiLCJvcHRpb24iLCJhdmFpbGFibGUiLCJOb3RGb3VuZENvbXBvbmVudCIsIkhlYWRlciIsImluZm8iLCJoZWFkZXIiLCJGb290ZXIiLCJmb290ZXIiLCJyb3V0ZXIiLCJWdWVSb3V0ZXIiLCJtb2RlIiwiTmF2Q29tcG9uZW50Iiwic2l0ZVRpdGxlIiwibWFzdGVyVnVlIiwiVnVlIiwiZWwiLCJkYXRhIiwiY29uc29sZSIsIm1ldGhvZHMiLCJpc0FkbWluIiwiYWRtaW4iLCJzZXRUaXRsZSIsImRvY3VtZW50Iiwic2l0ZU5hbWUiLCJjcmVhdGVkIiwibW91bnRlZCIsIlN0aWNreU5hdiIsImNudCIsIm1lbnUiLCJPYmplY3QiLCJwZXJtaXNzaW9ucyIsImxlbmd0aCIsIiRwYXJlbnQiLCJhZGRTdGFydCIsInNjcmlwdCIsInN0YXJ0dXAiLCJhZGRNYWluQ29tcG9uZW50Iiwib3JkZXIiLCJuYXYyIiwiYWRkTmF2MiIsImEiLCJiIiwicmVtb3ZlTmF2MiIsInZ1ZSIsIkFycmF5IiwiaXNBcnJheSIsImMiLCJpIiwic3BsaWNlIiwiJHNldCIsImFkZE5hdjJMaW5rIiwiY2xpY2siLCJuYXYycmlnaHQiLCJuYXYybGVmdCIsImFkZE9wdGlvbiIsImZpbmRQYWdlIiwiYWRkIiwiQ29uc29sZVBhZ2UiLCJnZXRQYWdlcyIsImFkZFJvdXRlIiwiYWRkUm91dGVzIiwiYWRkcm91dGVzIiwic2l0ZUNvbnNvbGUiLCJVc2VycyIsIlVzZXIiLCJTVEFGRiIsIkFETUlOIiwiVGFibGVzQ29tcG9uZW50IiwicXVlcnlTZWxlY3RvciIsImZpbmRTZWN0aW9uIiwiQ29uc29sZVNlY3Rpb24iLCJyb2xlTGVhc3QiLCJwcmlvcml0eUxlYXN0IiwiZ2V0Um9sZVByaW9yaXR5Iiwic2VjdGlvbkxlYXN0IiwicHJpb3JpdHkiLCJDb25zb2xlU2VjdGlvbk9wdGlvbiIsInJvbGUiLCJtZW1iZXIiLCJhcGkiLCJ0YWJsZSJdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNELE87UUNWQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLFFBQVEsb0JBQW9CO1FBQzVCO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EsaUJBQWlCLDRCQUE0QjtRQUM3QztRQUNBO1FBQ0Esa0JBQWtCLDJCQUEyQjtRQUM3QztRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EsR0FBRzs7UUFFSDtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EsS0FBSztRQUNMO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLE1BQU07UUFDTjtRQUNBO1FBQ0EsTUFBTTtRQUNOO1FBQ0E7UUFDQSxNQUFNO1FBQ047UUFDQTtRQUNBO1FBQ0EsT0FBTztRQUNQO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLElBQUk7UUFDSjs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLE1BQU07UUFDTjtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSxLQUFLO1FBQ0w7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSxNQUFNO1FBQ047UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLEtBQUs7O1FBRUw7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EsNkJBQTZCO1FBQzdCLDZCQUE2QjtRQUM3QjtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSxxQkFBcUIs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QU8sQ0FBQyx3R0FBcUY7QUFDekcsY0FBYyxtQkFBTyxDQUFDLCtDQUFLO0FBQzNCO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQSxzQkFBc0IsK0pBQWtFLEVBQUU7QUFBQTtBQUMxRjtBQUNBLGdCQUFnQixzR0FBTTtBQUN0Qix5QkFBeUIsK0dBQWU7QUFDeEMsT0FBTztBQUNQLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDZSxnRjs7Ozs7Ozs7Ozs7O0FDdkNmO0FBQUE7QUFBQSx3Q0FBbU0sQ0FBZ0IseVBBQUcsRUFBQyxDOzs7Ozs7Ozs7Ozs7QUNBdk47QUFBQTtBQUFBO0FBQUE7QUFBK2IsQ0FBZ0Isc2NBQUcsRUFBQyxDOzs7Ozs7Ozs7Ozs7QUNBbmQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBIiwiZmlsZSI6ImNvbnNvbGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24gd2VicGFja1VuaXZlcnNhbE1vZHVsZURlZmluaXRpb24ocm9vdCwgZmFjdG9yeSkge1xuXHRpZih0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcgJiYgdHlwZW9mIG1vZHVsZSA9PT0gJ29iamVjdCcpXG5cdFx0bW9kdWxlLmV4cG9ydHMgPSBmYWN0b3J5KCk7XG5cdGVsc2UgaWYodHlwZW9mIGRlZmluZSA9PT0gJ2Z1bmN0aW9uJyAmJiBkZWZpbmUuYW1kKVxuXHRcdGRlZmluZShbXSwgZmFjdG9yeSk7XG5cdGVsc2UgaWYodHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnKVxuXHRcdGV4cG9ydHNbXCJDb25zb2xlXCJdID0gZmFjdG9yeSgpO1xuXHRlbHNlXG5cdFx0cm9vdFtcIkNvbnNvbGVcIl0gPSBmYWN0b3J5KCk7XG59KSh3aW5kb3csIGZ1bmN0aW9uKCkge1xucmV0dXJuICIsIiBcdC8vIGluc3RhbGwgYSBKU09OUCBjYWxsYmFjayBmb3IgY2h1bmsgbG9hZGluZ1xuIFx0ZnVuY3Rpb24gd2VicGFja0pzb25wQ2FsbGJhY2soZGF0YSkge1xuIFx0XHR2YXIgY2h1bmtJZHMgPSBkYXRhWzBdO1xuIFx0XHR2YXIgbW9yZU1vZHVsZXMgPSBkYXRhWzFdO1xuIFx0XHR2YXIgZXhlY3V0ZU1vZHVsZXMgPSBkYXRhWzJdO1xuXG4gXHRcdC8vIGFkZCBcIm1vcmVNb2R1bGVzXCIgdG8gdGhlIG1vZHVsZXMgb2JqZWN0LFxuIFx0XHQvLyB0aGVuIGZsYWcgYWxsIFwiY2h1bmtJZHNcIiBhcyBsb2FkZWQgYW5kIGZpcmUgY2FsbGJhY2tcbiBcdFx0dmFyIG1vZHVsZUlkLCBjaHVua0lkLCBpID0gMCwgcmVzb2x2ZXMgPSBbXTtcbiBcdFx0Zm9yKDtpIDwgY2h1bmtJZHMubGVuZ3RoOyBpKyspIHtcbiBcdFx0XHRjaHVua0lkID0gY2h1bmtJZHNbaV07XG4gXHRcdFx0aWYoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKGluc3RhbGxlZENodW5rcywgY2h1bmtJZCkgJiYgaW5zdGFsbGVkQ2h1bmtzW2NodW5rSWRdKSB7XG4gXHRcdFx0XHRyZXNvbHZlcy5wdXNoKGluc3RhbGxlZENodW5rc1tjaHVua0lkXVswXSk7XG4gXHRcdFx0fVxuIFx0XHRcdGluc3RhbGxlZENodW5rc1tjaHVua0lkXSA9IDA7XG4gXHRcdH1cbiBcdFx0Zm9yKG1vZHVsZUlkIGluIG1vcmVNb2R1bGVzKSB7XG4gXHRcdFx0aWYoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG1vcmVNb2R1bGVzLCBtb2R1bGVJZCkpIHtcbiBcdFx0XHRcdG1vZHVsZXNbbW9kdWxlSWRdID0gbW9yZU1vZHVsZXNbbW9kdWxlSWRdO1xuIFx0XHRcdH1cbiBcdFx0fVxuIFx0XHRpZihwYXJlbnRKc29ucEZ1bmN0aW9uKSBwYXJlbnRKc29ucEZ1bmN0aW9uKGRhdGEpO1xuXG4gXHRcdHdoaWxlKHJlc29sdmVzLmxlbmd0aCkge1xuIFx0XHRcdHJlc29sdmVzLnNoaWZ0KCkoKTtcbiBcdFx0fVxuXG4gXHRcdC8vIGFkZCBlbnRyeSBtb2R1bGVzIGZyb20gbG9hZGVkIGNodW5rIHRvIGRlZmVycmVkIGxpc3RcbiBcdFx0ZGVmZXJyZWRNb2R1bGVzLnB1c2guYXBwbHkoZGVmZXJyZWRNb2R1bGVzLCBleGVjdXRlTW9kdWxlcyB8fCBbXSk7XG5cbiBcdFx0Ly8gcnVuIGRlZmVycmVkIG1vZHVsZXMgd2hlbiBhbGwgY2h1bmtzIHJlYWR5XG4gXHRcdHJldHVybiBjaGVja0RlZmVycmVkTW9kdWxlcygpO1xuIFx0fTtcbiBcdGZ1bmN0aW9uIGNoZWNrRGVmZXJyZWRNb2R1bGVzKCkge1xuIFx0XHR2YXIgcmVzdWx0O1xuIFx0XHRmb3IodmFyIGkgPSAwOyBpIDwgZGVmZXJyZWRNb2R1bGVzLmxlbmd0aDsgaSsrKSB7XG4gXHRcdFx0dmFyIGRlZmVycmVkTW9kdWxlID0gZGVmZXJyZWRNb2R1bGVzW2ldO1xuIFx0XHRcdHZhciBmdWxmaWxsZWQgPSB0cnVlO1xuIFx0XHRcdGZvcih2YXIgaiA9IDE7IGogPCBkZWZlcnJlZE1vZHVsZS5sZW5ndGg7IGorKykge1xuIFx0XHRcdFx0dmFyIGRlcElkID0gZGVmZXJyZWRNb2R1bGVbal07XG4gXHRcdFx0XHRpZihpbnN0YWxsZWRDaHVua3NbZGVwSWRdICE9PSAwKSBmdWxmaWxsZWQgPSBmYWxzZTtcbiBcdFx0XHR9XG4gXHRcdFx0aWYoZnVsZmlsbGVkKSB7XG4gXHRcdFx0XHRkZWZlcnJlZE1vZHVsZXMuc3BsaWNlKGktLSwgMSk7XG4gXHRcdFx0XHRyZXN1bHQgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IGRlZmVycmVkTW9kdWxlWzBdKTtcbiBcdFx0XHR9XG4gXHRcdH1cblxuIFx0XHRyZXR1cm4gcmVzdWx0O1xuIFx0fVxuIFx0ZnVuY3Rpb24gaG90RGlzcG9zZUNodW5rKGNodW5rSWQpIHtcbiBcdFx0ZGVsZXRlIGluc3RhbGxlZENodW5rc1tjaHVua0lkXTtcbiBcdH1cbiBcdHZhciBwYXJlbnRIb3RVcGRhdGVDYWxsYmFjayA9IHdpbmRvd1tcIndlYnBhY2tIb3RVcGRhdGVfbmFtZV9cIl07XG4gXHR3aW5kb3dbXCJ3ZWJwYWNrSG90VXBkYXRlX25hbWVfXCJdID0gLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXVudXNlZC12YXJzXG4gXHRmdW5jdGlvbiB3ZWJwYWNrSG90VXBkYXRlQ2FsbGJhY2soY2h1bmtJZCwgbW9yZU1vZHVsZXMpIHtcbiBcdFx0aG90QWRkVXBkYXRlQ2h1bmsoY2h1bmtJZCwgbW9yZU1vZHVsZXMpO1xuIFx0XHRpZiAocGFyZW50SG90VXBkYXRlQ2FsbGJhY2spIHBhcmVudEhvdFVwZGF0ZUNhbGxiYWNrKGNodW5rSWQsIG1vcmVNb2R1bGVzKTtcbiBcdH0gO1xuXG4gXHQvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tdW51c2VkLXZhcnNcbiBcdGZ1bmN0aW9uIGhvdERvd25sb2FkVXBkYXRlQ2h1bmsoY2h1bmtJZCkge1xuIFx0XHR2YXIgc2NyaXB0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNjcmlwdFwiKTtcbiBcdFx0c2NyaXB0LmNoYXJzZXQgPSBcInV0Zi04XCI7XG4gXHRcdHNjcmlwdC5zcmMgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLnAgKyBcIlwiICsgY2h1bmtJZCArIFwiLlwiICsgaG90Q3VycmVudEhhc2ggKyBcIi5ob3QtdXBkYXRlLmpzXCI7XG4gXHRcdGlmIChudWxsKSBzY3JpcHQuY3Jvc3NPcmlnaW4gPSBudWxsO1xuIFx0XHRkb2N1bWVudC5oZWFkLmFwcGVuZENoaWxkKHNjcmlwdCk7XG4gXHR9XG5cbiBcdC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby11bnVzZWQtdmFyc1xuIFx0ZnVuY3Rpb24gaG90RG93bmxvYWRNYW5pZmVzdChyZXF1ZXN0VGltZW91dCkge1xuIFx0XHRyZXF1ZXN0VGltZW91dCA9IHJlcXVlc3RUaW1lb3V0IHx8IDEwMDAwO1xuIFx0XHRyZXR1cm4gbmV3IFByb21pc2UoZnVuY3Rpb24ocmVzb2x2ZSwgcmVqZWN0KSB7XG4gXHRcdFx0aWYgKHR5cGVvZiBYTUxIdHRwUmVxdWVzdCA9PT0gXCJ1bmRlZmluZWRcIikge1xuIFx0XHRcdFx0cmV0dXJuIHJlamVjdChuZXcgRXJyb3IoXCJObyBicm93c2VyIHN1cHBvcnRcIikpO1xuIFx0XHRcdH1cbiBcdFx0XHR0cnkge1xuIFx0XHRcdFx0dmFyIHJlcXVlc3QgPSBuZXcgWE1MSHR0cFJlcXVlc3QoKTtcbiBcdFx0XHRcdHZhciByZXF1ZXN0UGF0aCA9IF9fd2VicGFja19yZXF1aXJlX18ucCArIFwiXCIgKyBob3RDdXJyZW50SGFzaCArIFwiLmhvdC11cGRhdGUuanNvblwiO1xuIFx0XHRcdFx0cmVxdWVzdC5vcGVuKFwiR0VUXCIsIHJlcXVlc3RQYXRoLCB0cnVlKTtcbiBcdFx0XHRcdHJlcXVlc3QudGltZW91dCA9IHJlcXVlc3RUaW1lb3V0O1xuIFx0XHRcdFx0cmVxdWVzdC5zZW5kKG51bGwpO1xuIFx0XHRcdH0gY2F0Y2ggKGVycikge1xuIFx0XHRcdFx0cmV0dXJuIHJlamVjdChlcnIpO1xuIFx0XHRcdH1cbiBcdFx0XHRyZXF1ZXN0Lm9ucmVhZHlzdGF0ZWNoYW5nZSA9IGZ1bmN0aW9uKCkge1xuIFx0XHRcdFx0aWYgKHJlcXVlc3QucmVhZHlTdGF0ZSAhPT0gNCkgcmV0dXJuO1xuIFx0XHRcdFx0aWYgKHJlcXVlc3Quc3RhdHVzID09PSAwKSB7XG4gXHRcdFx0XHRcdC8vIHRpbWVvdXRcbiBcdFx0XHRcdFx0cmVqZWN0KFxuIFx0XHRcdFx0XHRcdG5ldyBFcnJvcihcIk1hbmlmZXN0IHJlcXVlc3QgdG8gXCIgKyByZXF1ZXN0UGF0aCArIFwiIHRpbWVkIG91dC5cIilcbiBcdFx0XHRcdFx0KTtcbiBcdFx0XHRcdH0gZWxzZSBpZiAocmVxdWVzdC5zdGF0dXMgPT09IDQwNCkge1xuIFx0XHRcdFx0XHQvLyBubyB1cGRhdGUgYXZhaWxhYmxlXG4gXHRcdFx0XHRcdHJlc29sdmUoKTtcbiBcdFx0XHRcdH0gZWxzZSBpZiAocmVxdWVzdC5zdGF0dXMgIT09IDIwMCAmJiByZXF1ZXN0LnN0YXR1cyAhPT0gMzA0KSB7XG4gXHRcdFx0XHRcdC8vIG90aGVyIGZhaWx1cmVcbiBcdFx0XHRcdFx0cmVqZWN0KG5ldyBFcnJvcihcIk1hbmlmZXN0IHJlcXVlc3QgdG8gXCIgKyByZXF1ZXN0UGF0aCArIFwiIGZhaWxlZC5cIikpO1xuIFx0XHRcdFx0fSBlbHNlIHtcbiBcdFx0XHRcdFx0Ly8gc3VjY2Vzc1xuIFx0XHRcdFx0XHR0cnkge1xuIFx0XHRcdFx0XHRcdHZhciB1cGRhdGUgPSBKU09OLnBhcnNlKHJlcXVlc3QucmVzcG9uc2VUZXh0KTtcbiBcdFx0XHRcdFx0fSBjYXRjaCAoZSkge1xuIFx0XHRcdFx0XHRcdHJlamVjdChlKTtcbiBcdFx0XHRcdFx0XHRyZXR1cm47XG4gXHRcdFx0XHRcdH1cbiBcdFx0XHRcdFx0cmVzb2x2ZSh1cGRhdGUpO1xuIFx0XHRcdFx0fVxuIFx0XHRcdH07XG4gXHRcdH0pO1xuIFx0fVxuXG4gXHR2YXIgaG90QXBwbHlPblVwZGF0ZSA9IHRydWU7XG4gXHQvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tdW51c2VkLXZhcnNcbiBcdHZhciBob3RDdXJyZW50SGFzaCA9IFwiYTA5ODIyNDg0MTM1YmI2YTdjN2NcIjtcbiBcdHZhciBob3RSZXF1ZXN0VGltZW91dCA9IDEwMDAwO1xuIFx0dmFyIGhvdEN1cnJlbnRNb2R1bGVEYXRhID0ge307XG4gXHR2YXIgaG90Q3VycmVudENoaWxkTW9kdWxlO1xuIFx0Ly8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXVudXNlZC12YXJzXG4gXHR2YXIgaG90Q3VycmVudFBhcmVudHMgPSBbXTtcbiBcdC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby11bnVzZWQtdmFyc1xuIFx0dmFyIGhvdEN1cnJlbnRQYXJlbnRzVGVtcCA9IFtdO1xuXG4gXHQvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tdW51c2VkLXZhcnNcbiBcdGZ1bmN0aW9uIGhvdENyZWF0ZVJlcXVpcmUobW9kdWxlSWQpIHtcbiBcdFx0dmFyIG1lID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF07XG4gXHRcdGlmICghbWUpIHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fO1xuIFx0XHR2YXIgZm4gPSBmdW5jdGlvbihyZXF1ZXN0KSB7XG4gXHRcdFx0aWYgKG1lLmhvdC5hY3RpdmUpIHtcbiBcdFx0XHRcdGlmIChpbnN0YWxsZWRNb2R1bGVzW3JlcXVlc3RdKSB7XG4gXHRcdFx0XHRcdGlmIChpbnN0YWxsZWRNb2R1bGVzW3JlcXVlc3RdLnBhcmVudHMuaW5kZXhPZihtb2R1bGVJZCkgPT09IC0xKSB7XG4gXHRcdFx0XHRcdFx0aW5zdGFsbGVkTW9kdWxlc1tyZXF1ZXN0XS5wYXJlbnRzLnB1c2gobW9kdWxlSWQpO1xuIFx0XHRcdFx0XHR9XG4gXHRcdFx0XHR9IGVsc2Uge1xuIFx0XHRcdFx0XHRob3RDdXJyZW50UGFyZW50cyA9IFttb2R1bGVJZF07XG4gXHRcdFx0XHRcdGhvdEN1cnJlbnRDaGlsZE1vZHVsZSA9IHJlcXVlc3Q7XG4gXHRcdFx0XHR9XG4gXHRcdFx0XHRpZiAobWUuY2hpbGRyZW4uaW5kZXhPZihyZXF1ZXN0KSA9PT0gLTEpIHtcbiBcdFx0XHRcdFx0bWUuY2hpbGRyZW4ucHVzaChyZXF1ZXN0KTtcbiBcdFx0XHRcdH1cbiBcdFx0XHR9IGVsc2Uge1xuIFx0XHRcdFx0Y29uc29sZS53YXJuKFxuIFx0XHRcdFx0XHRcIltITVJdIHVuZXhwZWN0ZWQgcmVxdWlyZShcIiArXG4gXHRcdFx0XHRcdFx0cmVxdWVzdCArXG4gXHRcdFx0XHRcdFx0XCIpIGZyb20gZGlzcG9zZWQgbW9kdWxlIFwiICtcbiBcdFx0XHRcdFx0XHRtb2R1bGVJZFxuIFx0XHRcdFx0KTtcbiBcdFx0XHRcdGhvdEN1cnJlbnRQYXJlbnRzID0gW107XG4gXHRcdFx0fVxuIFx0XHRcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKHJlcXVlc3QpO1xuIFx0XHR9O1xuIFx0XHR2YXIgT2JqZWN0RmFjdG9yeSA9IGZ1bmN0aW9uIE9iamVjdEZhY3RvcnkobmFtZSkge1xuIFx0XHRcdHJldHVybiB7XG4gXHRcdFx0XHRjb25maWd1cmFibGU6IHRydWUsXG4gXHRcdFx0XHRlbnVtZXJhYmxlOiB0cnVlLFxuIFx0XHRcdFx0Z2V0OiBmdW5jdGlvbigpIHtcbiBcdFx0XHRcdFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX19bbmFtZV07XG4gXHRcdFx0XHR9LFxuIFx0XHRcdFx0c2V0OiBmdW5jdGlvbih2YWx1ZSkge1xuIFx0XHRcdFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fW25hbWVdID0gdmFsdWU7XG4gXHRcdFx0XHR9XG4gXHRcdFx0fTtcbiBcdFx0fTtcbiBcdFx0Zm9yICh2YXIgbmFtZSBpbiBfX3dlYnBhY2tfcmVxdWlyZV9fKSB7XG4gXHRcdFx0aWYgKFxuIFx0XHRcdFx0T2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKF9fd2VicGFja19yZXF1aXJlX18sIG5hbWUpICYmXG4gXHRcdFx0XHRuYW1lICE9PSBcImVcIiAmJlxuIFx0XHRcdFx0bmFtZSAhPT0gXCJ0XCJcbiBcdFx0XHQpIHtcbiBcdFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShmbiwgbmFtZSwgT2JqZWN0RmFjdG9yeShuYW1lKSk7XG4gXHRcdFx0fVxuIFx0XHR9XG4gXHRcdGZuLmUgPSBmdW5jdGlvbihjaHVua0lkKSB7XG4gXHRcdFx0aWYgKGhvdFN0YXR1cyA9PT0gXCJyZWFkeVwiKSBob3RTZXRTdGF0dXMoXCJwcmVwYXJlXCIpO1xuIFx0XHRcdGhvdENodW5rc0xvYWRpbmcrKztcbiBcdFx0XHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXy5lKGNodW5rSWQpLnRoZW4oZmluaXNoQ2h1bmtMb2FkaW5nLCBmdW5jdGlvbihlcnIpIHtcbiBcdFx0XHRcdGZpbmlzaENodW5rTG9hZGluZygpO1xuIFx0XHRcdFx0dGhyb3cgZXJyO1xuIFx0XHRcdH0pO1xuXG4gXHRcdFx0ZnVuY3Rpb24gZmluaXNoQ2h1bmtMb2FkaW5nKCkge1xuIFx0XHRcdFx0aG90Q2h1bmtzTG9hZGluZy0tO1xuIFx0XHRcdFx0aWYgKGhvdFN0YXR1cyA9PT0gXCJwcmVwYXJlXCIpIHtcbiBcdFx0XHRcdFx0aWYgKCFob3RXYWl0aW5nRmlsZXNNYXBbY2h1bmtJZF0pIHtcbiBcdFx0XHRcdFx0XHRob3RFbnN1cmVVcGRhdGVDaHVuayhjaHVua0lkKTtcbiBcdFx0XHRcdFx0fVxuIFx0XHRcdFx0XHRpZiAoaG90Q2h1bmtzTG9hZGluZyA9PT0gMCAmJiBob3RXYWl0aW5nRmlsZXMgPT09IDApIHtcbiBcdFx0XHRcdFx0XHRob3RVcGRhdGVEb3dubG9hZGVkKCk7XG4gXHRcdFx0XHRcdH1cbiBcdFx0XHRcdH1cbiBcdFx0XHR9XG4gXHRcdH07XG4gXHRcdGZuLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRcdGlmIChtb2RlICYgMSkgdmFsdWUgPSBmbih2YWx1ZSk7XG4gXHRcdFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18udCh2YWx1ZSwgbW9kZSAmIH4xKTtcbiBcdFx0fTtcbiBcdFx0cmV0dXJuIGZuO1xuIFx0fVxuXG4gXHQvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tdW51c2VkLXZhcnNcbiBcdGZ1bmN0aW9uIGhvdENyZWF0ZU1vZHVsZShtb2R1bGVJZCkge1xuIFx0XHR2YXIgaG90ID0ge1xuIFx0XHRcdC8vIHByaXZhdGUgc3R1ZmZcbiBcdFx0XHRfYWNjZXB0ZWREZXBlbmRlbmNpZXM6IHt9LFxuIFx0XHRcdF9kZWNsaW5lZERlcGVuZGVuY2llczoge30sXG4gXHRcdFx0X3NlbGZBY2NlcHRlZDogZmFsc2UsXG4gXHRcdFx0X3NlbGZEZWNsaW5lZDogZmFsc2UsXG4gXHRcdFx0X2Rpc3Bvc2VIYW5kbGVyczogW10sXG4gXHRcdFx0X21haW46IGhvdEN1cnJlbnRDaGlsZE1vZHVsZSAhPT0gbW9kdWxlSWQsXG5cbiBcdFx0XHQvLyBNb2R1bGUgQVBJXG4gXHRcdFx0YWN0aXZlOiB0cnVlLFxuIFx0XHRcdGFjY2VwdDogZnVuY3Rpb24oZGVwLCBjYWxsYmFjaykge1xuIFx0XHRcdFx0aWYgKGRlcCA9PT0gdW5kZWZpbmVkKSBob3QuX3NlbGZBY2NlcHRlZCA9IHRydWU7XG4gXHRcdFx0XHRlbHNlIGlmICh0eXBlb2YgZGVwID09PSBcImZ1bmN0aW9uXCIpIGhvdC5fc2VsZkFjY2VwdGVkID0gZGVwO1xuIFx0XHRcdFx0ZWxzZSBpZiAodHlwZW9mIGRlcCA9PT0gXCJvYmplY3RcIilcbiBcdFx0XHRcdFx0Zm9yICh2YXIgaSA9IDA7IGkgPCBkZXAubGVuZ3RoOyBpKyspXG4gXHRcdFx0XHRcdFx0aG90Ll9hY2NlcHRlZERlcGVuZGVuY2llc1tkZXBbaV1dID0gY2FsbGJhY2sgfHwgZnVuY3Rpb24oKSB7fTtcbiBcdFx0XHRcdGVsc2UgaG90Ll9hY2NlcHRlZERlcGVuZGVuY2llc1tkZXBdID0gY2FsbGJhY2sgfHwgZnVuY3Rpb24oKSB7fTtcbiBcdFx0XHR9LFxuIFx0XHRcdGRlY2xpbmU6IGZ1bmN0aW9uKGRlcCkge1xuIFx0XHRcdFx0aWYgKGRlcCA9PT0gdW5kZWZpbmVkKSBob3QuX3NlbGZEZWNsaW5lZCA9IHRydWU7XG4gXHRcdFx0XHRlbHNlIGlmICh0eXBlb2YgZGVwID09PSBcIm9iamVjdFwiKVxuIFx0XHRcdFx0XHRmb3IgKHZhciBpID0gMDsgaSA8IGRlcC5sZW5ndGg7IGkrKylcbiBcdFx0XHRcdFx0XHRob3QuX2RlY2xpbmVkRGVwZW5kZW5jaWVzW2RlcFtpXV0gPSB0cnVlO1xuIFx0XHRcdFx0ZWxzZSBob3QuX2RlY2xpbmVkRGVwZW5kZW5jaWVzW2RlcF0gPSB0cnVlO1xuIFx0XHRcdH0sXG4gXHRcdFx0ZGlzcG9zZTogZnVuY3Rpb24oY2FsbGJhY2spIHtcbiBcdFx0XHRcdGhvdC5fZGlzcG9zZUhhbmRsZXJzLnB1c2goY2FsbGJhY2spO1xuIFx0XHRcdH0sXG4gXHRcdFx0YWRkRGlzcG9zZUhhbmRsZXI6IGZ1bmN0aW9uKGNhbGxiYWNrKSB7XG4gXHRcdFx0XHRob3QuX2Rpc3Bvc2VIYW5kbGVycy5wdXNoKGNhbGxiYWNrKTtcbiBcdFx0XHR9LFxuIFx0XHRcdHJlbW92ZURpc3Bvc2VIYW5kbGVyOiBmdW5jdGlvbihjYWxsYmFjaykge1xuIFx0XHRcdFx0dmFyIGlkeCA9IGhvdC5fZGlzcG9zZUhhbmRsZXJzLmluZGV4T2YoY2FsbGJhY2spO1xuIFx0XHRcdFx0aWYgKGlkeCA+PSAwKSBob3QuX2Rpc3Bvc2VIYW5kbGVycy5zcGxpY2UoaWR4LCAxKTtcbiBcdFx0XHR9LFxuXG4gXHRcdFx0Ly8gTWFuYWdlbWVudCBBUElcbiBcdFx0XHRjaGVjazogaG90Q2hlY2ssXG4gXHRcdFx0YXBwbHk6IGhvdEFwcGx5LFxuIFx0XHRcdHN0YXR1czogZnVuY3Rpb24obCkge1xuIFx0XHRcdFx0aWYgKCFsKSByZXR1cm4gaG90U3RhdHVzO1xuIFx0XHRcdFx0aG90U3RhdHVzSGFuZGxlcnMucHVzaChsKTtcbiBcdFx0XHR9LFxuIFx0XHRcdGFkZFN0YXR1c0hhbmRsZXI6IGZ1bmN0aW9uKGwpIHtcbiBcdFx0XHRcdGhvdFN0YXR1c0hhbmRsZXJzLnB1c2gobCk7XG4gXHRcdFx0fSxcbiBcdFx0XHRyZW1vdmVTdGF0dXNIYW5kbGVyOiBmdW5jdGlvbihsKSB7XG4gXHRcdFx0XHR2YXIgaWR4ID0gaG90U3RhdHVzSGFuZGxlcnMuaW5kZXhPZihsKTtcbiBcdFx0XHRcdGlmIChpZHggPj0gMCkgaG90U3RhdHVzSGFuZGxlcnMuc3BsaWNlKGlkeCwgMSk7XG4gXHRcdFx0fSxcblxuIFx0XHRcdC8vaW5oZXJpdCBmcm9tIHByZXZpb3VzIGRpc3Bvc2UgY2FsbFxuIFx0XHRcdGRhdGE6IGhvdEN1cnJlbnRNb2R1bGVEYXRhW21vZHVsZUlkXVxuIFx0XHR9O1xuIFx0XHRob3RDdXJyZW50Q2hpbGRNb2R1bGUgPSB1bmRlZmluZWQ7XG4gXHRcdHJldHVybiBob3Q7XG4gXHR9XG5cbiBcdHZhciBob3RTdGF0dXNIYW5kbGVycyA9IFtdO1xuIFx0dmFyIGhvdFN0YXR1cyA9IFwiaWRsZVwiO1xuXG4gXHRmdW5jdGlvbiBob3RTZXRTdGF0dXMobmV3U3RhdHVzKSB7XG4gXHRcdGhvdFN0YXR1cyA9IG5ld1N0YXR1cztcbiBcdFx0Zm9yICh2YXIgaSA9IDA7IGkgPCBob3RTdGF0dXNIYW5kbGVycy5sZW5ndGg7IGkrKylcbiBcdFx0XHRob3RTdGF0dXNIYW5kbGVyc1tpXS5jYWxsKG51bGwsIG5ld1N0YXR1cyk7XG4gXHR9XG5cbiBcdC8vIHdoaWxlIGRvd25sb2FkaW5nXG4gXHR2YXIgaG90V2FpdGluZ0ZpbGVzID0gMDtcbiBcdHZhciBob3RDaHVua3NMb2FkaW5nID0gMDtcbiBcdHZhciBob3RXYWl0aW5nRmlsZXNNYXAgPSB7fTtcbiBcdHZhciBob3RSZXF1ZXN0ZWRGaWxlc01hcCA9IHt9O1xuIFx0dmFyIGhvdEF2YWlsYWJsZUZpbGVzTWFwID0ge307XG4gXHR2YXIgaG90RGVmZXJyZWQ7XG5cbiBcdC8vIFRoZSB1cGRhdGUgaW5mb1xuIFx0dmFyIGhvdFVwZGF0ZSwgaG90VXBkYXRlTmV3SGFzaDtcblxuIFx0ZnVuY3Rpb24gdG9Nb2R1bGVJZChpZCkge1xuIFx0XHR2YXIgaXNOdW1iZXIgPSAraWQgKyBcIlwiID09PSBpZDtcbiBcdFx0cmV0dXJuIGlzTnVtYmVyID8gK2lkIDogaWQ7XG4gXHR9XG5cbiBcdGZ1bmN0aW9uIGhvdENoZWNrKGFwcGx5KSB7XG4gXHRcdGlmIChob3RTdGF0dXMgIT09IFwiaWRsZVwiKSB7XG4gXHRcdFx0dGhyb3cgbmV3IEVycm9yKFwiY2hlY2soKSBpcyBvbmx5IGFsbG93ZWQgaW4gaWRsZSBzdGF0dXNcIik7XG4gXHRcdH1cbiBcdFx0aG90QXBwbHlPblVwZGF0ZSA9IGFwcGx5O1xuIFx0XHRob3RTZXRTdGF0dXMoXCJjaGVja1wiKTtcbiBcdFx0cmV0dXJuIGhvdERvd25sb2FkTWFuaWZlc3QoaG90UmVxdWVzdFRpbWVvdXQpLnRoZW4oZnVuY3Rpb24odXBkYXRlKSB7XG4gXHRcdFx0aWYgKCF1cGRhdGUpIHtcbiBcdFx0XHRcdGhvdFNldFN0YXR1cyhcImlkbGVcIik7XG4gXHRcdFx0XHRyZXR1cm4gbnVsbDtcbiBcdFx0XHR9XG4gXHRcdFx0aG90UmVxdWVzdGVkRmlsZXNNYXAgPSB7fTtcbiBcdFx0XHRob3RXYWl0aW5nRmlsZXNNYXAgPSB7fTtcbiBcdFx0XHRob3RBdmFpbGFibGVGaWxlc01hcCA9IHVwZGF0ZS5jO1xuIFx0XHRcdGhvdFVwZGF0ZU5ld0hhc2ggPSB1cGRhdGUuaDtcblxuIFx0XHRcdGhvdFNldFN0YXR1cyhcInByZXBhcmVcIik7XG4gXHRcdFx0dmFyIHByb21pc2UgPSBuZXcgUHJvbWlzZShmdW5jdGlvbihyZXNvbHZlLCByZWplY3QpIHtcbiBcdFx0XHRcdGhvdERlZmVycmVkID0ge1xuIFx0XHRcdFx0XHRyZXNvbHZlOiByZXNvbHZlLFxuIFx0XHRcdFx0XHRyZWplY3Q6IHJlamVjdFxuIFx0XHRcdFx0fTtcbiBcdFx0XHR9KTtcbiBcdFx0XHRob3RVcGRhdGUgPSB7fTtcbiBcdFx0XHRmb3IodmFyIGNodW5rSWQgaW4gaW5zdGFsbGVkQ2h1bmtzKVxuIFx0XHRcdC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1sb25lLWJsb2Nrc1xuIFx0XHRcdHtcbiBcdFx0XHRcdGhvdEVuc3VyZVVwZGF0ZUNodW5rKGNodW5rSWQpO1xuIFx0XHRcdH1cbiBcdFx0XHRpZiAoXG4gXHRcdFx0XHRob3RTdGF0dXMgPT09IFwicHJlcGFyZVwiICYmXG4gXHRcdFx0XHRob3RDaHVua3NMb2FkaW5nID09PSAwICYmXG4gXHRcdFx0XHRob3RXYWl0aW5nRmlsZXMgPT09IDBcbiBcdFx0XHQpIHtcbiBcdFx0XHRcdGhvdFVwZGF0ZURvd25sb2FkZWQoKTtcbiBcdFx0XHR9XG4gXHRcdFx0cmV0dXJuIHByb21pc2U7XG4gXHRcdH0pO1xuIFx0fVxuXG4gXHQvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tdW51c2VkLXZhcnNcbiBcdGZ1bmN0aW9uIGhvdEFkZFVwZGF0ZUNodW5rKGNodW5rSWQsIG1vcmVNb2R1bGVzKSB7XG4gXHRcdGlmICghaG90QXZhaWxhYmxlRmlsZXNNYXBbY2h1bmtJZF0gfHwgIWhvdFJlcXVlc3RlZEZpbGVzTWFwW2NodW5rSWRdKVxuIFx0XHRcdHJldHVybjtcbiBcdFx0aG90UmVxdWVzdGVkRmlsZXNNYXBbY2h1bmtJZF0gPSBmYWxzZTtcbiBcdFx0Zm9yICh2YXIgbW9kdWxlSWQgaW4gbW9yZU1vZHVsZXMpIHtcbiBcdFx0XHRpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG1vcmVNb2R1bGVzLCBtb2R1bGVJZCkpIHtcbiBcdFx0XHRcdGhvdFVwZGF0ZVttb2R1bGVJZF0gPSBtb3JlTW9kdWxlc1ttb2R1bGVJZF07XG4gXHRcdFx0fVxuIFx0XHR9XG4gXHRcdGlmICgtLWhvdFdhaXRpbmdGaWxlcyA9PT0gMCAmJiBob3RDaHVua3NMb2FkaW5nID09PSAwKSB7XG4gXHRcdFx0aG90VXBkYXRlRG93bmxvYWRlZCgpO1xuIFx0XHR9XG4gXHR9XG5cbiBcdGZ1bmN0aW9uIGhvdEVuc3VyZVVwZGF0ZUNodW5rKGNodW5rSWQpIHtcbiBcdFx0aWYgKCFob3RBdmFpbGFibGVGaWxlc01hcFtjaHVua0lkXSkge1xuIFx0XHRcdGhvdFdhaXRpbmdGaWxlc01hcFtjaHVua0lkXSA9IHRydWU7XG4gXHRcdH0gZWxzZSB7XG4gXHRcdFx0aG90UmVxdWVzdGVkRmlsZXNNYXBbY2h1bmtJZF0gPSB0cnVlO1xuIFx0XHRcdGhvdFdhaXRpbmdGaWxlcysrO1xuIFx0XHRcdGhvdERvd25sb2FkVXBkYXRlQ2h1bmsoY2h1bmtJZCk7XG4gXHRcdH1cbiBcdH1cblxuIFx0ZnVuY3Rpb24gaG90VXBkYXRlRG93bmxvYWRlZCgpIHtcbiBcdFx0aG90U2V0U3RhdHVzKFwicmVhZHlcIik7XG4gXHRcdHZhciBkZWZlcnJlZCA9IGhvdERlZmVycmVkO1xuIFx0XHRob3REZWZlcnJlZCA9IG51bGw7XG4gXHRcdGlmICghZGVmZXJyZWQpIHJldHVybjtcbiBcdFx0aWYgKGhvdEFwcGx5T25VcGRhdGUpIHtcbiBcdFx0XHQvLyBXcmFwIGRlZmVycmVkIG9iamVjdCBpbiBQcm9taXNlIHRvIG1hcmsgaXQgYXMgYSB3ZWxsLWhhbmRsZWQgUHJvbWlzZSB0b1xuIFx0XHRcdC8vIGF2b2lkIHRyaWdnZXJpbmcgdW5jYXVnaHQgZXhjZXB0aW9uIHdhcm5pbmcgaW4gQ2hyb21lLlxuIFx0XHRcdC8vIFNlZSBodHRwczovL2J1Z3MuY2hyb21pdW0ub3JnL3AvY2hyb21pdW0vaXNzdWVzL2RldGFpbD9pZD00NjU2NjZcbiBcdFx0XHRQcm9taXNlLnJlc29sdmUoKVxuIFx0XHRcdFx0LnRoZW4oZnVuY3Rpb24oKSB7XG4gXHRcdFx0XHRcdHJldHVybiBob3RBcHBseShob3RBcHBseU9uVXBkYXRlKTtcbiBcdFx0XHRcdH0pXG4gXHRcdFx0XHQudGhlbihcbiBcdFx0XHRcdFx0ZnVuY3Rpb24ocmVzdWx0KSB7XG4gXHRcdFx0XHRcdFx0ZGVmZXJyZWQucmVzb2x2ZShyZXN1bHQpO1xuIFx0XHRcdFx0XHR9LFxuIFx0XHRcdFx0XHRmdW5jdGlvbihlcnIpIHtcbiBcdFx0XHRcdFx0XHRkZWZlcnJlZC5yZWplY3QoZXJyKTtcbiBcdFx0XHRcdFx0fVxuIFx0XHRcdFx0KTtcbiBcdFx0fSBlbHNlIHtcbiBcdFx0XHR2YXIgb3V0ZGF0ZWRNb2R1bGVzID0gW107XG4gXHRcdFx0Zm9yICh2YXIgaWQgaW4gaG90VXBkYXRlKSB7XG4gXHRcdFx0XHRpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKGhvdFVwZGF0ZSwgaWQpKSB7XG4gXHRcdFx0XHRcdG91dGRhdGVkTW9kdWxlcy5wdXNoKHRvTW9kdWxlSWQoaWQpKTtcbiBcdFx0XHRcdH1cbiBcdFx0XHR9XG4gXHRcdFx0ZGVmZXJyZWQucmVzb2x2ZShvdXRkYXRlZE1vZHVsZXMpO1xuIFx0XHR9XG4gXHR9XG5cbiBcdGZ1bmN0aW9uIGhvdEFwcGx5KG9wdGlvbnMpIHtcbiBcdFx0aWYgKGhvdFN0YXR1cyAhPT0gXCJyZWFkeVwiKVxuIFx0XHRcdHRocm93IG5ldyBFcnJvcihcImFwcGx5KCkgaXMgb25seSBhbGxvd2VkIGluIHJlYWR5IHN0YXR1c1wiKTtcbiBcdFx0b3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG5cbiBcdFx0dmFyIGNiO1xuIFx0XHR2YXIgaTtcbiBcdFx0dmFyIGo7XG4gXHRcdHZhciBtb2R1bGU7XG4gXHRcdHZhciBtb2R1bGVJZDtcblxuIFx0XHRmdW5jdGlvbiBnZXRBZmZlY3RlZFN0dWZmKHVwZGF0ZU1vZHVsZUlkKSB7XG4gXHRcdFx0dmFyIG91dGRhdGVkTW9kdWxlcyA9IFt1cGRhdGVNb2R1bGVJZF07XG4gXHRcdFx0dmFyIG91dGRhdGVkRGVwZW5kZW5jaWVzID0ge307XG5cbiBcdFx0XHR2YXIgcXVldWUgPSBvdXRkYXRlZE1vZHVsZXMubWFwKGZ1bmN0aW9uKGlkKSB7XG4gXHRcdFx0XHRyZXR1cm4ge1xuIFx0XHRcdFx0XHRjaGFpbjogW2lkXSxcbiBcdFx0XHRcdFx0aWQ6IGlkXG4gXHRcdFx0XHR9O1xuIFx0XHRcdH0pO1xuIFx0XHRcdHdoaWxlIChxdWV1ZS5sZW5ndGggPiAwKSB7XG4gXHRcdFx0XHR2YXIgcXVldWVJdGVtID0gcXVldWUucG9wKCk7XG4gXHRcdFx0XHR2YXIgbW9kdWxlSWQgPSBxdWV1ZUl0ZW0uaWQ7XG4gXHRcdFx0XHR2YXIgY2hhaW4gPSBxdWV1ZUl0ZW0uY2hhaW47XG4gXHRcdFx0XHRtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXTtcbiBcdFx0XHRcdGlmICghbW9kdWxlIHx8IG1vZHVsZS5ob3QuX3NlbGZBY2NlcHRlZCkgY29udGludWU7XG4gXHRcdFx0XHRpZiAobW9kdWxlLmhvdC5fc2VsZkRlY2xpbmVkKSB7XG4gXHRcdFx0XHRcdHJldHVybiB7XG4gXHRcdFx0XHRcdFx0dHlwZTogXCJzZWxmLWRlY2xpbmVkXCIsXG4gXHRcdFx0XHRcdFx0Y2hhaW46IGNoYWluLFxuIFx0XHRcdFx0XHRcdG1vZHVsZUlkOiBtb2R1bGVJZFxuIFx0XHRcdFx0XHR9O1xuIFx0XHRcdFx0fVxuIFx0XHRcdFx0aWYgKG1vZHVsZS5ob3QuX21haW4pIHtcbiBcdFx0XHRcdFx0cmV0dXJuIHtcbiBcdFx0XHRcdFx0XHR0eXBlOiBcInVuYWNjZXB0ZWRcIixcbiBcdFx0XHRcdFx0XHRjaGFpbjogY2hhaW4sXG4gXHRcdFx0XHRcdFx0bW9kdWxlSWQ6IG1vZHVsZUlkXG4gXHRcdFx0XHRcdH07XG4gXHRcdFx0XHR9XG4gXHRcdFx0XHRmb3IgKHZhciBpID0gMDsgaSA8IG1vZHVsZS5wYXJlbnRzLmxlbmd0aDsgaSsrKSB7XG4gXHRcdFx0XHRcdHZhciBwYXJlbnRJZCA9IG1vZHVsZS5wYXJlbnRzW2ldO1xuIFx0XHRcdFx0XHR2YXIgcGFyZW50ID0gaW5zdGFsbGVkTW9kdWxlc1twYXJlbnRJZF07XG4gXHRcdFx0XHRcdGlmICghcGFyZW50KSBjb250aW51ZTtcbiBcdFx0XHRcdFx0aWYgKHBhcmVudC5ob3QuX2RlY2xpbmVkRGVwZW5kZW5jaWVzW21vZHVsZUlkXSkge1xuIFx0XHRcdFx0XHRcdHJldHVybiB7XG4gXHRcdFx0XHRcdFx0XHR0eXBlOiBcImRlY2xpbmVkXCIsXG4gXHRcdFx0XHRcdFx0XHRjaGFpbjogY2hhaW4uY29uY2F0KFtwYXJlbnRJZF0pLFxuIFx0XHRcdFx0XHRcdFx0bW9kdWxlSWQ6IG1vZHVsZUlkLFxuIFx0XHRcdFx0XHRcdFx0cGFyZW50SWQ6IHBhcmVudElkXG4gXHRcdFx0XHRcdFx0fTtcbiBcdFx0XHRcdFx0fVxuIFx0XHRcdFx0XHRpZiAob3V0ZGF0ZWRNb2R1bGVzLmluZGV4T2YocGFyZW50SWQpICE9PSAtMSkgY29udGludWU7XG4gXHRcdFx0XHRcdGlmIChwYXJlbnQuaG90Ll9hY2NlcHRlZERlcGVuZGVuY2llc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRcdFx0XHRpZiAoIW91dGRhdGVkRGVwZW5kZW5jaWVzW3BhcmVudElkXSlcbiBcdFx0XHRcdFx0XHRcdG91dGRhdGVkRGVwZW5kZW5jaWVzW3BhcmVudElkXSA9IFtdO1xuIFx0XHRcdFx0XHRcdGFkZEFsbFRvU2V0KG91dGRhdGVkRGVwZW5kZW5jaWVzW3BhcmVudElkXSwgW21vZHVsZUlkXSk7XG4gXHRcdFx0XHRcdFx0Y29udGludWU7XG4gXHRcdFx0XHRcdH1cbiBcdFx0XHRcdFx0ZGVsZXRlIG91dGRhdGVkRGVwZW5kZW5jaWVzW3BhcmVudElkXTtcbiBcdFx0XHRcdFx0b3V0ZGF0ZWRNb2R1bGVzLnB1c2gocGFyZW50SWQpO1xuIFx0XHRcdFx0XHRxdWV1ZS5wdXNoKHtcbiBcdFx0XHRcdFx0XHRjaGFpbjogY2hhaW4uY29uY2F0KFtwYXJlbnRJZF0pLFxuIFx0XHRcdFx0XHRcdGlkOiBwYXJlbnRJZFxuIFx0XHRcdFx0XHR9KTtcbiBcdFx0XHRcdH1cbiBcdFx0XHR9XG5cbiBcdFx0XHRyZXR1cm4ge1xuIFx0XHRcdFx0dHlwZTogXCJhY2NlcHRlZFwiLFxuIFx0XHRcdFx0bW9kdWxlSWQ6IHVwZGF0ZU1vZHVsZUlkLFxuIFx0XHRcdFx0b3V0ZGF0ZWRNb2R1bGVzOiBvdXRkYXRlZE1vZHVsZXMsXG4gXHRcdFx0XHRvdXRkYXRlZERlcGVuZGVuY2llczogb3V0ZGF0ZWREZXBlbmRlbmNpZXNcbiBcdFx0XHR9O1xuIFx0XHR9XG5cbiBcdFx0ZnVuY3Rpb24gYWRkQWxsVG9TZXQoYSwgYikge1xuIFx0XHRcdGZvciAodmFyIGkgPSAwOyBpIDwgYi5sZW5ndGg7IGkrKykge1xuIFx0XHRcdFx0dmFyIGl0ZW0gPSBiW2ldO1xuIFx0XHRcdFx0aWYgKGEuaW5kZXhPZihpdGVtKSA9PT0gLTEpIGEucHVzaChpdGVtKTtcbiBcdFx0XHR9XG4gXHRcdH1cblxuIFx0XHQvLyBhdCBiZWdpbiBhbGwgdXBkYXRlcyBtb2R1bGVzIGFyZSBvdXRkYXRlZFxuIFx0XHQvLyB0aGUgXCJvdXRkYXRlZFwiIHN0YXR1cyBjYW4gcHJvcGFnYXRlIHRvIHBhcmVudHMgaWYgdGhleSBkb24ndCBhY2NlcHQgdGhlIGNoaWxkcmVuXG4gXHRcdHZhciBvdXRkYXRlZERlcGVuZGVuY2llcyA9IHt9O1xuIFx0XHR2YXIgb3V0ZGF0ZWRNb2R1bGVzID0gW107XG4gXHRcdHZhciBhcHBsaWVkVXBkYXRlID0ge307XG5cbiBcdFx0dmFyIHdhcm5VbmV4cGVjdGVkUmVxdWlyZSA9IGZ1bmN0aW9uIHdhcm5VbmV4cGVjdGVkUmVxdWlyZSgpIHtcbiBcdFx0XHRjb25zb2xlLndhcm4oXG4gXHRcdFx0XHRcIltITVJdIHVuZXhwZWN0ZWQgcmVxdWlyZShcIiArIHJlc3VsdC5tb2R1bGVJZCArIFwiKSB0byBkaXNwb3NlZCBtb2R1bGVcIlxuIFx0XHRcdCk7XG4gXHRcdH07XG5cbiBcdFx0Zm9yICh2YXIgaWQgaW4gaG90VXBkYXRlKSB7XG4gXHRcdFx0aWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChob3RVcGRhdGUsIGlkKSkge1xuIFx0XHRcdFx0bW9kdWxlSWQgPSB0b01vZHVsZUlkKGlkKTtcbiBcdFx0XHRcdC8qKiBAdHlwZSB7VE9ET30gKi9cbiBcdFx0XHRcdHZhciByZXN1bHQ7XG4gXHRcdFx0XHRpZiAoaG90VXBkYXRlW2lkXSkge1xuIFx0XHRcdFx0XHRyZXN1bHQgPSBnZXRBZmZlY3RlZFN0dWZmKG1vZHVsZUlkKTtcbiBcdFx0XHRcdH0gZWxzZSB7XG4gXHRcdFx0XHRcdHJlc3VsdCA9IHtcbiBcdFx0XHRcdFx0XHR0eXBlOiBcImRpc3Bvc2VkXCIsXG4gXHRcdFx0XHRcdFx0bW9kdWxlSWQ6IGlkXG4gXHRcdFx0XHRcdH07XG4gXHRcdFx0XHR9XG4gXHRcdFx0XHQvKiogQHR5cGUge0Vycm9yfGZhbHNlfSAqL1xuIFx0XHRcdFx0dmFyIGFib3J0RXJyb3IgPSBmYWxzZTtcbiBcdFx0XHRcdHZhciBkb0FwcGx5ID0gZmFsc2U7XG4gXHRcdFx0XHR2YXIgZG9EaXNwb3NlID0gZmFsc2U7XG4gXHRcdFx0XHR2YXIgY2hhaW5JbmZvID0gXCJcIjtcbiBcdFx0XHRcdGlmIChyZXN1bHQuY2hhaW4pIHtcbiBcdFx0XHRcdFx0Y2hhaW5JbmZvID0gXCJcXG5VcGRhdGUgcHJvcGFnYXRpb246IFwiICsgcmVzdWx0LmNoYWluLmpvaW4oXCIgLT4gXCIpO1xuIFx0XHRcdFx0fVxuIFx0XHRcdFx0c3dpdGNoIChyZXN1bHQudHlwZSkge1xuIFx0XHRcdFx0XHRjYXNlIFwic2VsZi1kZWNsaW5lZFwiOlxuIFx0XHRcdFx0XHRcdGlmIChvcHRpb25zLm9uRGVjbGluZWQpIG9wdGlvbnMub25EZWNsaW5lZChyZXN1bHQpO1xuIFx0XHRcdFx0XHRcdGlmICghb3B0aW9ucy5pZ25vcmVEZWNsaW5lZClcbiBcdFx0XHRcdFx0XHRcdGFib3J0RXJyb3IgPSBuZXcgRXJyb3IoXG4gXHRcdFx0XHRcdFx0XHRcdFwiQWJvcnRlZCBiZWNhdXNlIG9mIHNlbGYgZGVjbGluZTogXCIgK1xuIFx0XHRcdFx0XHRcdFx0XHRcdHJlc3VsdC5tb2R1bGVJZCArXG4gXHRcdFx0XHRcdFx0XHRcdFx0Y2hhaW5JbmZvXG4gXHRcdFx0XHRcdFx0XHQpO1xuIFx0XHRcdFx0XHRcdGJyZWFrO1xuIFx0XHRcdFx0XHRjYXNlIFwiZGVjbGluZWRcIjpcbiBcdFx0XHRcdFx0XHRpZiAob3B0aW9ucy5vbkRlY2xpbmVkKSBvcHRpb25zLm9uRGVjbGluZWQocmVzdWx0KTtcbiBcdFx0XHRcdFx0XHRpZiAoIW9wdGlvbnMuaWdub3JlRGVjbGluZWQpXG4gXHRcdFx0XHRcdFx0XHRhYm9ydEVycm9yID0gbmV3IEVycm9yKFxuIFx0XHRcdFx0XHRcdFx0XHRcIkFib3J0ZWQgYmVjYXVzZSBvZiBkZWNsaW5lZCBkZXBlbmRlbmN5OiBcIiArXG4gXHRcdFx0XHRcdFx0XHRcdFx0cmVzdWx0Lm1vZHVsZUlkICtcbiBcdFx0XHRcdFx0XHRcdFx0XHRcIiBpbiBcIiArXG4gXHRcdFx0XHRcdFx0XHRcdFx0cmVzdWx0LnBhcmVudElkICtcbiBcdFx0XHRcdFx0XHRcdFx0XHRjaGFpbkluZm9cbiBcdFx0XHRcdFx0XHRcdCk7XG4gXHRcdFx0XHRcdFx0YnJlYWs7XG4gXHRcdFx0XHRcdGNhc2UgXCJ1bmFjY2VwdGVkXCI6XG4gXHRcdFx0XHRcdFx0aWYgKG9wdGlvbnMub25VbmFjY2VwdGVkKSBvcHRpb25zLm9uVW5hY2NlcHRlZChyZXN1bHQpO1xuIFx0XHRcdFx0XHRcdGlmICghb3B0aW9ucy5pZ25vcmVVbmFjY2VwdGVkKVxuIFx0XHRcdFx0XHRcdFx0YWJvcnRFcnJvciA9IG5ldyBFcnJvcihcbiBcdFx0XHRcdFx0XHRcdFx0XCJBYm9ydGVkIGJlY2F1c2UgXCIgKyBtb2R1bGVJZCArIFwiIGlzIG5vdCBhY2NlcHRlZFwiICsgY2hhaW5JbmZvXG4gXHRcdFx0XHRcdFx0XHQpO1xuIFx0XHRcdFx0XHRcdGJyZWFrO1xuIFx0XHRcdFx0XHRjYXNlIFwiYWNjZXB0ZWRcIjpcbiBcdFx0XHRcdFx0XHRpZiAob3B0aW9ucy5vbkFjY2VwdGVkKSBvcHRpb25zLm9uQWNjZXB0ZWQocmVzdWx0KTtcbiBcdFx0XHRcdFx0XHRkb0FwcGx5ID0gdHJ1ZTtcbiBcdFx0XHRcdFx0XHRicmVhaztcbiBcdFx0XHRcdFx0Y2FzZSBcImRpc3Bvc2VkXCI6XG4gXHRcdFx0XHRcdFx0aWYgKG9wdGlvbnMub25EaXNwb3NlZCkgb3B0aW9ucy5vbkRpc3Bvc2VkKHJlc3VsdCk7XG4gXHRcdFx0XHRcdFx0ZG9EaXNwb3NlID0gdHJ1ZTtcbiBcdFx0XHRcdFx0XHRicmVhaztcbiBcdFx0XHRcdFx0ZGVmYXVsdDpcbiBcdFx0XHRcdFx0XHR0aHJvdyBuZXcgRXJyb3IoXCJVbmV4Y2VwdGlvbiB0eXBlIFwiICsgcmVzdWx0LnR5cGUpO1xuIFx0XHRcdFx0fVxuIFx0XHRcdFx0aWYgKGFib3J0RXJyb3IpIHtcbiBcdFx0XHRcdFx0aG90U2V0U3RhdHVzKFwiYWJvcnRcIik7XG4gXHRcdFx0XHRcdHJldHVybiBQcm9taXNlLnJlamVjdChhYm9ydEVycm9yKTtcbiBcdFx0XHRcdH1cbiBcdFx0XHRcdGlmIChkb0FwcGx5KSB7XG4gXHRcdFx0XHRcdGFwcGxpZWRVcGRhdGVbbW9kdWxlSWRdID0gaG90VXBkYXRlW21vZHVsZUlkXTtcbiBcdFx0XHRcdFx0YWRkQWxsVG9TZXQob3V0ZGF0ZWRNb2R1bGVzLCByZXN1bHQub3V0ZGF0ZWRNb2R1bGVzKTtcbiBcdFx0XHRcdFx0Zm9yIChtb2R1bGVJZCBpbiByZXN1bHQub3V0ZGF0ZWREZXBlbmRlbmNpZXMpIHtcbiBcdFx0XHRcdFx0XHRpZiAoXG4gXHRcdFx0XHRcdFx0XHRPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoXG4gXHRcdFx0XHRcdFx0XHRcdHJlc3VsdC5vdXRkYXRlZERlcGVuZGVuY2llcyxcbiBcdFx0XHRcdFx0XHRcdFx0bW9kdWxlSWRcbiBcdFx0XHRcdFx0XHRcdClcbiBcdFx0XHRcdFx0XHQpIHtcbiBcdFx0XHRcdFx0XHRcdGlmICghb3V0ZGF0ZWREZXBlbmRlbmNpZXNbbW9kdWxlSWRdKVxuIFx0XHRcdFx0XHRcdFx0XHRvdXRkYXRlZERlcGVuZGVuY2llc1ttb2R1bGVJZF0gPSBbXTtcbiBcdFx0XHRcdFx0XHRcdGFkZEFsbFRvU2V0KFxuIFx0XHRcdFx0XHRcdFx0XHRvdXRkYXRlZERlcGVuZGVuY2llc1ttb2R1bGVJZF0sXG4gXHRcdFx0XHRcdFx0XHRcdHJlc3VsdC5vdXRkYXRlZERlcGVuZGVuY2llc1ttb2R1bGVJZF1cbiBcdFx0XHRcdFx0XHRcdCk7XG4gXHRcdFx0XHRcdFx0fVxuIFx0XHRcdFx0XHR9XG4gXHRcdFx0XHR9XG4gXHRcdFx0XHRpZiAoZG9EaXNwb3NlKSB7XG4gXHRcdFx0XHRcdGFkZEFsbFRvU2V0KG91dGRhdGVkTW9kdWxlcywgW3Jlc3VsdC5tb2R1bGVJZF0pO1xuIFx0XHRcdFx0XHRhcHBsaWVkVXBkYXRlW21vZHVsZUlkXSA9IHdhcm5VbmV4cGVjdGVkUmVxdWlyZTtcbiBcdFx0XHRcdH1cbiBcdFx0XHR9XG4gXHRcdH1cblxuIFx0XHQvLyBTdG9yZSBzZWxmIGFjY2VwdGVkIG91dGRhdGVkIG1vZHVsZXMgdG8gcmVxdWlyZSB0aGVtIGxhdGVyIGJ5IHRoZSBtb2R1bGUgc3lzdGVtXG4gXHRcdHZhciBvdXRkYXRlZFNlbGZBY2NlcHRlZE1vZHVsZXMgPSBbXTtcbiBcdFx0Zm9yIChpID0gMDsgaSA8IG91dGRhdGVkTW9kdWxlcy5sZW5ndGg7IGkrKykge1xuIFx0XHRcdG1vZHVsZUlkID0gb3V0ZGF0ZWRNb2R1bGVzW2ldO1xuIFx0XHRcdGlmIChcbiBcdFx0XHRcdGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdICYmXG4gXHRcdFx0XHRpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5ob3QuX3NlbGZBY2NlcHRlZCAmJlxuIFx0XHRcdFx0Ly8gcmVtb3ZlZCBzZWxmLWFjY2VwdGVkIG1vZHVsZXMgc2hvdWxkIG5vdCBiZSByZXF1aXJlZFxuIFx0XHRcdFx0YXBwbGllZFVwZGF0ZVttb2R1bGVJZF0gIT09IHdhcm5VbmV4cGVjdGVkUmVxdWlyZVxuIFx0XHRcdCkge1xuIFx0XHRcdFx0b3V0ZGF0ZWRTZWxmQWNjZXB0ZWRNb2R1bGVzLnB1c2goe1xuIFx0XHRcdFx0XHRtb2R1bGU6IG1vZHVsZUlkLFxuIFx0XHRcdFx0XHRlcnJvckhhbmRsZXI6IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmhvdC5fc2VsZkFjY2VwdGVkXG4gXHRcdFx0XHR9KTtcbiBcdFx0XHR9XG4gXHRcdH1cblxuIFx0XHQvLyBOb3cgaW4gXCJkaXNwb3NlXCIgcGhhc2VcbiBcdFx0aG90U2V0U3RhdHVzKFwiZGlzcG9zZVwiKTtcbiBcdFx0T2JqZWN0LmtleXMoaG90QXZhaWxhYmxlRmlsZXNNYXApLmZvckVhY2goZnVuY3Rpb24oY2h1bmtJZCkge1xuIFx0XHRcdGlmIChob3RBdmFpbGFibGVGaWxlc01hcFtjaHVua0lkXSA9PT0gZmFsc2UpIHtcbiBcdFx0XHRcdGhvdERpc3Bvc2VDaHVuayhjaHVua0lkKTtcbiBcdFx0XHR9XG4gXHRcdH0pO1xuXG4gXHRcdHZhciBpZHg7XG4gXHRcdHZhciBxdWV1ZSA9IG91dGRhdGVkTW9kdWxlcy5zbGljZSgpO1xuIFx0XHR3aGlsZSAocXVldWUubGVuZ3RoID4gMCkge1xuIFx0XHRcdG1vZHVsZUlkID0gcXVldWUucG9wKCk7XG4gXHRcdFx0bW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF07XG4gXHRcdFx0aWYgKCFtb2R1bGUpIGNvbnRpbnVlO1xuXG4gXHRcdFx0dmFyIGRhdGEgPSB7fTtcblxuIFx0XHRcdC8vIENhbGwgZGlzcG9zZSBoYW5kbGVyc1xuIFx0XHRcdHZhciBkaXNwb3NlSGFuZGxlcnMgPSBtb2R1bGUuaG90Ll9kaXNwb3NlSGFuZGxlcnM7XG4gXHRcdFx0Zm9yIChqID0gMDsgaiA8IGRpc3Bvc2VIYW5kbGVycy5sZW5ndGg7IGorKykge1xuIFx0XHRcdFx0Y2IgPSBkaXNwb3NlSGFuZGxlcnNbal07XG4gXHRcdFx0XHRjYihkYXRhKTtcbiBcdFx0XHR9XG4gXHRcdFx0aG90Q3VycmVudE1vZHVsZURhdGFbbW9kdWxlSWRdID0gZGF0YTtcblxuIFx0XHRcdC8vIGRpc2FibGUgbW9kdWxlICh0aGlzIGRpc2FibGVzIHJlcXVpcmVzIGZyb20gdGhpcyBtb2R1bGUpXG4gXHRcdFx0bW9kdWxlLmhvdC5hY3RpdmUgPSBmYWxzZTtcblxuIFx0XHRcdC8vIHJlbW92ZSBtb2R1bGUgZnJvbSBjYWNoZVxuIFx0XHRcdGRlbGV0ZSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXTtcblxuIFx0XHRcdC8vIHdoZW4gZGlzcG9zaW5nIHRoZXJlIGlzIG5vIG5lZWQgdG8gY2FsbCBkaXNwb3NlIGhhbmRsZXJcbiBcdFx0XHRkZWxldGUgb3V0ZGF0ZWREZXBlbmRlbmNpZXNbbW9kdWxlSWRdO1xuXG4gXHRcdFx0Ly8gcmVtb3ZlIFwicGFyZW50c1wiIHJlZmVyZW5jZXMgZnJvbSBhbGwgY2hpbGRyZW5cbiBcdFx0XHRmb3IgKGogPSAwOyBqIDwgbW9kdWxlLmNoaWxkcmVuLmxlbmd0aDsgaisrKSB7XG4gXHRcdFx0XHR2YXIgY2hpbGQgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZS5jaGlsZHJlbltqXV07XG4gXHRcdFx0XHRpZiAoIWNoaWxkKSBjb250aW51ZTtcbiBcdFx0XHRcdGlkeCA9IGNoaWxkLnBhcmVudHMuaW5kZXhPZihtb2R1bGVJZCk7XG4gXHRcdFx0XHRpZiAoaWR4ID49IDApIHtcbiBcdFx0XHRcdFx0Y2hpbGQucGFyZW50cy5zcGxpY2UoaWR4LCAxKTtcbiBcdFx0XHRcdH1cbiBcdFx0XHR9XG4gXHRcdH1cblxuIFx0XHQvLyByZW1vdmUgb3V0ZGF0ZWQgZGVwZW5kZW5jeSBmcm9tIG1vZHVsZSBjaGlsZHJlblxuIFx0XHR2YXIgZGVwZW5kZW5jeTtcbiBcdFx0dmFyIG1vZHVsZU91dGRhdGVkRGVwZW5kZW5jaWVzO1xuIFx0XHRmb3IgKG1vZHVsZUlkIGluIG91dGRhdGVkRGVwZW5kZW5jaWVzKSB7XG4gXHRcdFx0aWYgKFxuIFx0XHRcdFx0T2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG91dGRhdGVkRGVwZW5kZW5jaWVzLCBtb2R1bGVJZClcbiBcdFx0XHQpIHtcbiBcdFx0XHRcdG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdO1xuIFx0XHRcdFx0aWYgKG1vZHVsZSkge1xuIFx0XHRcdFx0XHRtb2R1bGVPdXRkYXRlZERlcGVuZGVuY2llcyA9IG91dGRhdGVkRGVwZW5kZW5jaWVzW21vZHVsZUlkXTtcbiBcdFx0XHRcdFx0Zm9yIChqID0gMDsgaiA8IG1vZHVsZU91dGRhdGVkRGVwZW5kZW5jaWVzLmxlbmd0aDsgaisrKSB7XG4gXHRcdFx0XHRcdFx0ZGVwZW5kZW5jeSA9IG1vZHVsZU91dGRhdGVkRGVwZW5kZW5jaWVzW2pdO1xuIFx0XHRcdFx0XHRcdGlkeCA9IG1vZHVsZS5jaGlsZHJlbi5pbmRleE9mKGRlcGVuZGVuY3kpO1xuIFx0XHRcdFx0XHRcdGlmIChpZHggPj0gMCkgbW9kdWxlLmNoaWxkcmVuLnNwbGljZShpZHgsIDEpO1xuIFx0XHRcdFx0XHR9XG4gXHRcdFx0XHR9XG4gXHRcdFx0fVxuIFx0XHR9XG5cbiBcdFx0Ly8gTm93IGluIFwiYXBwbHlcIiBwaGFzZVxuIFx0XHRob3RTZXRTdGF0dXMoXCJhcHBseVwiKTtcblxuIFx0XHRob3RDdXJyZW50SGFzaCA9IGhvdFVwZGF0ZU5ld0hhc2g7XG5cbiBcdFx0Ly8gaW5zZXJ0IG5ldyBjb2RlXG4gXHRcdGZvciAobW9kdWxlSWQgaW4gYXBwbGllZFVwZGF0ZSkge1xuIFx0XHRcdGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoYXBwbGllZFVwZGF0ZSwgbW9kdWxlSWQpKSB7XG4gXHRcdFx0XHRtb2R1bGVzW21vZHVsZUlkXSA9IGFwcGxpZWRVcGRhdGVbbW9kdWxlSWRdO1xuIFx0XHRcdH1cbiBcdFx0fVxuXG4gXHRcdC8vIGNhbGwgYWNjZXB0IGhhbmRsZXJzXG4gXHRcdHZhciBlcnJvciA9IG51bGw7XG4gXHRcdGZvciAobW9kdWxlSWQgaW4gb3V0ZGF0ZWREZXBlbmRlbmNpZXMpIHtcbiBcdFx0XHRpZiAoXG4gXHRcdFx0XHRPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob3V0ZGF0ZWREZXBlbmRlbmNpZXMsIG1vZHVsZUlkKVxuIFx0XHRcdCkge1xuIFx0XHRcdFx0bW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF07XG4gXHRcdFx0XHRpZiAobW9kdWxlKSB7XG4gXHRcdFx0XHRcdG1vZHVsZU91dGRhdGVkRGVwZW5kZW5jaWVzID0gb3V0ZGF0ZWREZXBlbmRlbmNpZXNbbW9kdWxlSWRdO1xuIFx0XHRcdFx0XHR2YXIgY2FsbGJhY2tzID0gW107XG4gXHRcdFx0XHRcdGZvciAoaSA9IDA7IGkgPCBtb2R1bGVPdXRkYXRlZERlcGVuZGVuY2llcy5sZW5ndGg7IGkrKykge1xuIFx0XHRcdFx0XHRcdGRlcGVuZGVuY3kgPSBtb2R1bGVPdXRkYXRlZERlcGVuZGVuY2llc1tpXTtcbiBcdFx0XHRcdFx0XHRjYiA9IG1vZHVsZS5ob3QuX2FjY2VwdGVkRGVwZW5kZW5jaWVzW2RlcGVuZGVuY3ldO1xuIFx0XHRcdFx0XHRcdGlmIChjYikge1xuIFx0XHRcdFx0XHRcdFx0aWYgKGNhbGxiYWNrcy5pbmRleE9mKGNiKSAhPT0gLTEpIGNvbnRpbnVlO1xuIFx0XHRcdFx0XHRcdFx0Y2FsbGJhY2tzLnB1c2goY2IpO1xuIFx0XHRcdFx0XHRcdH1cbiBcdFx0XHRcdFx0fVxuIFx0XHRcdFx0XHRmb3IgKGkgPSAwOyBpIDwgY2FsbGJhY2tzLmxlbmd0aDsgaSsrKSB7XG4gXHRcdFx0XHRcdFx0Y2IgPSBjYWxsYmFja3NbaV07XG4gXHRcdFx0XHRcdFx0dHJ5IHtcbiBcdFx0XHRcdFx0XHRcdGNiKG1vZHVsZU91dGRhdGVkRGVwZW5kZW5jaWVzKTtcbiBcdFx0XHRcdFx0XHR9IGNhdGNoIChlcnIpIHtcbiBcdFx0XHRcdFx0XHRcdGlmIChvcHRpb25zLm9uRXJyb3JlZCkge1xuIFx0XHRcdFx0XHRcdFx0XHRvcHRpb25zLm9uRXJyb3JlZCh7XG4gXHRcdFx0XHRcdFx0XHRcdFx0dHlwZTogXCJhY2NlcHQtZXJyb3JlZFwiLFxuIFx0XHRcdFx0XHRcdFx0XHRcdG1vZHVsZUlkOiBtb2R1bGVJZCxcbiBcdFx0XHRcdFx0XHRcdFx0XHRkZXBlbmRlbmN5SWQ6IG1vZHVsZU91dGRhdGVkRGVwZW5kZW5jaWVzW2ldLFxuIFx0XHRcdFx0XHRcdFx0XHRcdGVycm9yOiBlcnJcbiBcdFx0XHRcdFx0XHRcdFx0fSk7XG4gXHRcdFx0XHRcdFx0XHR9XG4gXHRcdFx0XHRcdFx0XHRpZiAoIW9wdGlvbnMuaWdub3JlRXJyb3JlZCkge1xuIFx0XHRcdFx0XHRcdFx0XHRpZiAoIWVycm9yKSBlcnJvciA9IGVycjtcbiBcdFx0XHRcdFx0XHRcdH1cbiBcdFx0XHRcdFx0XHR9XG4gXHRcdFx0XHRcdH1cbiBcdFx0XHRcdH1cbiBcdFx0XHR9XG4gXHRcdH1cblxuIFx0XHQvLyBMb2FkIHNlbGYgYWNjZXB0ZWQgbW9kdWxlc1xuIFx0XHRmb3IgKGkgPSAwOyBpIDwgb3V0ZGF0ZWRTZWxmQWNjZXB0ZWRNb2R1bGVzLmxlbmd0aDsgaSsrKSB7XG4gXHRcdFx0dmFyIGl0ZW0gPSBvdXRkYXRlZFNlbGZBY2NlcHRlZE1vZHVsZXNbaV07XG4gXHRcdFx0bW9kdWxlSWQgPSBpdGVtLm1vZHVsZTtcbiBcdFx0XHRob3RDdXJyZW50UGFyZW50cyA9IFttb2R1bGVJZF07XG4gXHRcdFx0dHJ5IHtcbiBcdFx0XHRcdF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpO1xuIFx0XHRcdH0gY2F0Y2ggKGVycikge1xuIFx0XHRcdFx0aWYgKHR5cGVvZiBpdGVtLmVycm9ySGFuZGxlciA9PT0gXCJmdW5jdGlvblwiKSB7XG4gXHRcdFx0XHRcdHRyeSB7XG4gXHRcdFx0XHRcdFx0aXRlbS5lcnJvckhhbmRsZXIoZXJyKTtcbiBcdFx0XHRcdFx0fSBjYXRjaCAoZXJyMikge1xuIFx0XHRcdFx0XHRcdGlmIChvcHRpb25zLm9uRXJyb3JlZCkge1xuIFx0XHRcdFx0XHRcdFx0b3B0aW9ucy5vbkVycm9yZWQoe1xuIFx0XHRcdFx0XHRcdFx0XHR0eXBlOiBcInNlbGYtYWNjZXB0LWVycm9yLWhhbmRsZXItZXJyb3JlZFwiLFxuIFx0XHRcdFx0XHRcdFx0XHRtb2R1bGVJZDogbW9kdWxlSWQsXG4gXHRcdFx0XHRcdFx0XHRcdGVycm9yOiBlcnIyLFxuIFx0XHRcdFx0XHRcdFx0XHRvcmlnaW5hbEVycm9yOiBlcnJcbiBcdFx0XHRcdFx0XHRcdH0pO1xuIFx0XHRcdFx0XHRcdH1cbiBcdFx0XHRcdFx0XHRpZiAoIW9wdGlvbnMuaWdub3JlRXJyb3JlZCkge1xuIFx0XHRcdFx0XHRcdFx0aWYgKCFlcnJvcikgZXJyb3IgPSBlcnIyO1xuIFx0XHRcdFx0XHRcdH1cbiBcdFx0XHRcdFx0XHRpZiAoIWVycm9yKSBlcnJvciA9IGVycjtcbiBcdFx0XHRcdFx0fVxuIFx0XHRcdFx0fSBlbHNlIHtcbiBcdFx0XHRcdFx0aWYgKG9wdGlvbnMub25FcnJvcmVkKSB7XG4gXHRcdFx0XHRcdFx0b3B0aW9ucy5vbkVycm9yZWQoe1xuIFx0XHRcdFx0XHRcdFx0dHlwZTogXCJzZWxmLWFjY2VwdC1lcnJvcmVkXCIsXG4gXHRcdFx0XHRcdFx0XHRtb2R1bGVJZDogbW9kdWxlSWQsXG4gXHRcdFx0XHRcdFx0XHRlcnJvcjogZXJyXG4gXHRcdFx0XHRcdFx0fSk7XG4gXHRcdFx0XHRcdH1cbiBcdFx0XHRcdFx0aWYgKCFvcHRpb25zLmlnbm9yZUVycm9yZWQpIHtcbiBcdFx0XHRcdFx0XHRpZiAoIWVycm9yKSBlcnJvciA9IGVycjtcbiBcdFx0XHRcdFx0fVxuIFx0XHRcdFx0fVxuIFx0XHRcdH1cbiBcdFx0fVxuXG4gXHRcdC8vIGhhbmRsZSBlcnJvcnMgaW4gYWNjZXB0IGhhbmRsZXJzIGFuZCBzZWxmIGFjY2VwdGVkIG1vZHVsZSBsb2FkXG4gXHRcdGlmIChlcnJvcikge1xuIFx0XHRcdGhvdFNldFN0YXR1cyhcImZhaWxcIik7XG4gXHRcdFx0cmV0dXJuIFByb21pc2UucmVqZWN0KGVycm9yKTtcbiBcdFx0fVxuXG4gXHRcdGhvdFNldFN0YXR1cyhcImlkbGVcIik7XG4gXHRcdHJldHVybiBuZXcgUHJvbWlzZShmdW5jdGlvbihyZXNvbHZlKSB7XG4gXHRcdFx0cmVzb2x2ZShvdXRkYXRlZE1vZHVsZXMpO1xuIFx0XHR9KTtcbiBcdH1cblxuIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gb2JqZWN0IHRvIHN0b3JlIGxvYWRlZCBhbmQgbG9hZGluZyBjaHVua3NcbiBcdC8vIHVuZGVmaW5lZCA9IGNodW5rIG5vdCBsb2FkZWQsIG51bGwgPSBjaHVuayBwcmVsb2FkZWQvcHJlZmV0Y2hlZFxuIFx0Ly8gUHJvbWlzZSA9IGNodW5rIGxvYWRpbmcsIDAgPSBjaHVuayBsb2FkZWRcbiBcdHZhciBpbnN0YWxsZWRDaHVua3MgPSB7XG4gXHRcdFwiQ29uc29sZVwiOiAwXG4gXHR9O1xuXG4gXHR2YXIgZGVmZXJyZWRNb2R1bGVzID0gW107XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9LFxuIFx0XHRcdGhvdDogaG90Q3JlYXRlTW9kdWxlKG1vZHVsZUlkKSxcbiBcdFx0XHRwYXJlbnRzOiAoaG90Q3VycmVudFBhcmVudHNUZW1wID0gaG90Q3VycmVudFBhcmVudHMsIGhvdEN1cnJlbnRQYXJlbnRzID0gW10sIGhvdEN1cnJlbnRQYXJlbnRzVGVtcCksXG4gXHRcdFx0Y2hpbGRyZW46IFtdXG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIGhvdENyZWF0ZVJlcXVpcmUobW9kdWxlSWQpKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIi9jbC9kaXN0L1wiO1xuXG4gXHQvLyBfX3dlYnBhY2tfaGFzaF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmggPSBmdW5jdGlvbigpIHsgcmV0dXJuIGhvdEN1cnJlbnRIYXNoOyB9O1xuXG4gXHR2YXIganNvbnBBcnJheSA9IHdpbmRvd1tcIndlYnBhY2tKc29ucF9uYW1lX1wiXSA9IHdpbmRvd1tcIndlYnBhY2tKc29ucF9uYW1lX1wiXSB8fCBbXTtcbiBcdHZhciBvbGRKc29ucEZ1bmN0aW9uID0ganNvbnBBcnJheS5wdXNoLmJpbmQoanNvbnBBcnJheSk7XG4gXHRqc29ucEFycmF5LnB1c2ggPSB3ZWJwYWNrSnNvbnBDYWxsYmFjaztcbiBcdGpzb25wQXJyYXkgPSBqc29ucEFycmF5LnNsaWNlKCk7XG4gXHRmb3IodmFyIGkgPSAwOyBpIDwganNvbnBBcnJheS5sZW5ndGg7IGkrKykgd2VicGFja0pzb25wQ2FsbGJhY2soanNvbnBBcnJheVtpXSk7XG4gXHR2YXIgcGFyZW50SnNvbnBGdW5jdGlvbiA9IG9sZEpzb25wRnVuY3Rpb247XG5cblxuIFx0Ly8gYWRkIGVudHJ5IG1vZHVsZSB0byBkZWZlcnJlZCBsaXN0XG4gXHRkZWZlcnJlZE1vZHVsZXMucHVzaChbXCIuL3ZlbmRvci9jbC9jb25zb2xlL2luZGV4LmpzXCIsXCJjb21tb25cIixcInZlbmRvclwiXSk7XG4gXHQvLyBydW4gZGVmZXJyZWQgbW9kdWxlcyB3aGVuIHJlYWR5XG4gXHRyZXR1cm4gY2hlY2tEZWZlcnJlZE1vZHVsZXMoKTtcbiIsIjxzY3JpcHQ+XHJcbiAgY29uc3QgVXNlclZ1ZUJhc2UgPSBTaXRlLlVzZXJWdWVCYXNlO1xyXG5cclxuICAgIC8qKlxyXG4gICAgICogQmFzZSBjb21wb25lbnQgZm9yIGNvbnNvbGUgcGFnZXMuXHJcbiAgICAgKlxyXG4gICAgICogUHJvdmlkZXM6XHJcbiAgICAgKiBuYXYyIG1lbnUgc3VwcG9ydCB3aXRoIGF1dG9tYXRpYyByZW1vdmFsLlxyXG4gICAgICpcclxuICAgICAqIEBhbGlhcyBDb25zb2xlQ29tcG9uZW50QmFzZVxyXG4gICAgICogQGNvbnN0cnVjdG9yXHJcbiAgICAgKi9cclxuICAgIGV4cG9ydCBkZWZhdWx0IHtcclxuICAgICAgJ2V4dGVuZHMnOiBVc2VyVnVlQmFzZSxcclxuICAgICAgbWV0aG9kczoge1xyXG4gICAgICAgICAgLyoqXHJcbiAgICAgICAgICAgKiBBZGQgYW4gb3B0aW9uIHRvIHRoZSBuYXYyIG1lbnUuXHJcbiAgICAgICAgICAgKiBAcGFyYW0gdGl0bGUgVGl0bGUgb2YgdGhlIG9wdGlvbiB0byBhZGQuXHJcbiAgICAgICAgICAgKiBAcGFyYW0gb3JkZXIgT3JkZXIgaW4gdGhlIG1lbnUuXHJcbiAgICAgICAgICAgKiBAcGFyYW0gY2xvc3VyZSBGdW5jdGlvbiB0byBjYWxsIHdoZW4gc2VsZWN0ZWQuXHJcbiAgICAgICAgICAgKiBAbWVtYmVyb2YgQ29uc29sZUNvbXBvbmVudEJhc2VcclxuICAgICAgICAgICAqL1xyXG4gICAgICAgICAgYWRkTmF2Mih0aXRsZSwgb3JkZXIsIGNsb3N1cmUpIHtcclxuICAgICAgICAgICAgICBjb25zdCBpdGVtID0gdGhpcy4kc2l0ZS5jb25zb2xlLmNvbXBvbmVudHMuYWRkTmF2MkxpbmsodGhpcywgdGl0bGUsIG9yZGVyLCBjbG9zdXJlKTtcclxuICAgICAgICAgICAgICB0aGlzLmNvbXBvbmVudHMxLnB1c2goaXRlbSk7XHJcbiAgICAgICAgICAgICAgcmV0dXJuIGl0ZW07XHJcbiAgICAgICAgICB9LFxyXG5cclxuICAgICAgICAgIC8qKlxyXG4gICAgICAgICAgICogQWRkIGFuIG9wdGlvbiB0byB0aGUgbmF2MiBtZW51IHRoYXQgaXMgYSByb3V0ZXIgbGlua1xyXG4gICAgICAgICAgICogQHBhcmFtIHRpdGxlIFRpdGxlIG9mIHRoZSBvcHRpb24gdG8gYWRkLlxyXG4gICAgICAgICAgICogQHBhcmFtIG9yZGVyIE9yZGVyIGluIHRoZSBtZW51LlxyXG4gICAgICAgICAgICogQHBhcmFtIGxpbmsgTGluayB3aXRob3V0IFNpdGUucm9vdFxyXG4gICAgICAgICAgICogQG1lbWJlcm9mIENvbnNvbGVDb21wb25lbnRCYXNlXHJcbiAgICAgICAgICAgKi9cclxuICAgICAgICAgIGFkZE5hdjJMaW5rKHRpdGxlLCBvcmRlciwgbGluaykge1xyXG4gICAgICAgICAgICAgIHRoaXMuYWRkTmF2Mih0aXRsZSwgb3JkZXIsICgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgdGhpcy4kcm91dGVyLnB1c2goU2l0ZS5yb290ICsgbGluayk7XHJcbiAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICB9LFxyXG5cclxuXHQgICAgICAvKipcclxuICAgICAgICAgKiBSZW1vdmUgYSBuYXYyIGl0ZW0uXHJcbiAgICAgICAgICogQHBhcmFtIGl0ZW0gSXRlbSBvYmplY3QgYXMgcmV0dXJuZWQgYnkgYWRkTmF2MlxyXG4gICAgICAgICAqIEBtZW1iZXJvZiBDb25zb2xlQ29tcG9uZW50QmFzZVxyXG4gICAgICAgICAqL1xyXG4gICAgICAgICAgcmVtb3ZlTmF2MihpdGVtKSB7XHJcbiAgICAgICAgICAgICAgbGV0IGkgPSB0aGlzLmNvbXBvbmVudHMxLmluZGV4T2YoaXRlbSk7XHJcbiAgICAgICAgICAgICAgaWYoaSA+PSAwKSB7XHJcbiAgICAgICAgICAgICAgICAgIHRoaXMuY29tcG9uZW50czEuc3BsaWNlKGksIDEpO1xyXG4gICAgICAgICAgICAgIH1cclxuXHJcblx0ICAgICAgICAgIHRoaXMuJHNpdGUuY29uc29sZS5jb21wb25lbnRzLnJlbW92ZU5hdjIodGhpcywgaXRlbSk7XHJcbiAgICAgICAgICB9LFxyXG4gICAgICAgICAgdGltZVJlbGF0aXZlVU5JWCh0aW1lLCBjdXJyZW50VGltZSwgZm9ybWF0KSB7XHJcbiAgICAgICAgICAgICAgcmV0dXJuIHRoaXMuJHNpdGUuVGltZUZvcm1hdHRlci5yZWxhdGl2ZVVOSVgodGltZSwgY3VycmVudFRpbWUsIGZvcm1hdCk7XHJcbiAgICAgICAgICB9XHJcbiAgICAgIH0sXHJcbiAgICAgIGNyZWF0ZWQoKSB7XHJcbiAgICAgIFx0dGhpcy5jb21wb25lbnRzMSA9IFtdO1xyXG4gICAgICB9LFxyXG4gICAgICBiZWZvcmVEZXN0cm95KCkge1xyXG4gICAgICBcdHRoaXMuJHNpdGUuY29uc29sZS5jb21wb25lbnRzLnJlbW92ZU5hdjIodGhpcywgdGhpcy5jb21wb25lbnRzMSk7XHJcbiAgICAgIH1cclxuICB9XHJcbjwvc2NyaXB0PlxyXG4iLCI8dGVtcGxhdGU+XHJcbiAgPG5hdiBjbGFzcz1cImNsLW5hdlwiPlxyXG4gICAgPGRpdj5cclxuICAgICAgPHVsIGNsYXNzPVwiZGl2aWRlcnNcIj5cclxuICAgICAgICA8bGk+PGEgOmhyZWY9XCJob21lTGlua1wiPjxzcGFuIGNsYXNzPVwiaG9tZVwiPkhvbWU8L3NwYW4+PC9hPjwvbGk+XHJcbiAgICAgICAgPGxpIHYtZm9yPVwicGFnZSBpbiBjb25zb2xlLmNvbXBvbmVudHMucGFnZXNcIiB2LWlmPVwicGFnZS5hdmFpbGFibGUodXNlcilcIj5cclxuICAgICAgICAgIDxyb3V0ZXItbGluayA6dG89XCJwYWdlTGluayhwYWdlKVwiPnt7cGFnZS50aXRsZX19PC9yb3V0ZXItbGluaz5cclxuICAgICAgICA8L2xpPlxyXG4gICAgICA8L3VsPlxyXG4gICAgPC9kaXY+XHJcbiAgICA8ZGl2IHYtaWY9XCJjb25zb2xlLmNvbXBvbmVudHMubmF2Mi5sZW5ndGggPiAwXCI+XHJcbiAgICAgIDxkaXYgY2xhc3M9XCJuYXYyXCI+XHJcbiAgICAgICAgPGRpdiBjbGFzcz1cImxlZnRcIj5cclxuICAgICAgICAgIDxjb21wb25lbnQgdi1pZj1cImNvbnNvbGUuY29tcG9uZW50cy5uYXYybGVmdFwiIDppcz1cImNvbnNvbGUuY29tcG9uZW50cy5uYXYybGVmdFwiPjwvY29tcG9uZW50PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxkaXYgY2xhc3M9XCJjZW50ZXJcIj5cclxuICAgICAgICAgIDxkaXYgdi1mb3I9XCJjIGluIGNvbnNvbGUuY29tcG9uZW50cy5uYXYyXCI+PGNvbXBvbmVudCA6aXM9XCJjLmNvbXBvbmVudFwiIDpzaG9ydD1cImNvbnNvbGUuY29tcG9uZW50cy5uYXYyLmxlbmd0aCA+IDJcIj48L2NvbXBvbmVudD48L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8ZGl2IGNsYXNzPVwicmlnaHRcIj5cclxuICAgICAgICAgIDxjb21wb25lbnQgdi1pZj1cImNvbnNvbGUuY29tcG9uZW50cy5uYXYycmlnaHRcIiA6aXM9XCJjb25zb2xlLmNvbXBvbmVudHMubmF2MnJpZ2h0XCI+PC9jb21wb25lbnQ+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC9kaXY+XHJcblxyXG4gIDwvbmF2PlxyXG48L3RlbXBsYXRlPlxyXG5cclxuPHNjcmlwdD5cclxuICBleHBvcnQgZGVmYXVsdCB7XHJcbiAgICAgIHByb3BzOiBbJ2NvbnNvbGUnLCAndXNlciddLFxyXG4gICAgICBkYXRhOiBmdW5jdGlvbigpIHtcclxuICAgICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgICAgaG9tZUxpbms6ICcnXHJcbiAgICAgICAgICB9XHJcbiAgICAgIH0sXHJcbiAgICAgIG1vdW50ZWQoKSB7XHJcbiAgICAgIFx0ICB0aGlzLmhvbWVMaW5rID0gdGhpcy4kc2l0ZS5yb290ICsgJy8nO1xyXG4gICAgICB9LFxyXG4gICAgICBtZXRob2RzOiB7XHJcbiAgICAgICAgICBwYWdlTGluayhwYWdlKSB7XHJcbiAgICAgICAgICAgICAgcmV0dXJuIGAke3RoaXMuJHNpdGUucm9vdH0vY2wvY29uc29sZSR7cGFnZS5yb3V0ZX1gO1xyXG4gICAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgfVxyXG48L3NjcmlwdD4iLCI8dGVtcGxhdGU+XHJcbjxkaXYgY2xhc3M9XCJjb250ZW50XCI+XHJcbiAgPHA+UGFnZSBkb2VzIG5vdCBleGlzdC4uLjwvcD5cclxuPC9kaXY+XHJcbjwvdGVtcGxhdGU+XHJcblxyXG48c2NyaXB0PlxyXG4gICAgbW9kdWxlLmV4cG9ydHMgPSB7XHJcbiAgICAgICAgbW91bnRlZCgpIHtcclxuICAgICAgICAgICAgdGhpcy4kcGFyZW50LnNldFRpdGxlKCdQYWdlIGRvZXMgbm90IGV4aXN0Li4uJyk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG48L3NjcmlwdD5cclxuIiwiPHRlbXBsYXRlPlxyXG4gIDxkaXYgY2xhc3M9XCJjb250ZW50XCI+XHJcbiAgPGgyPkRhdGFiYXNlIFRhYmxlcyBNYW5hZ2VtZW50PC9oMj5cclxuICAgIDxwIGNsYXNzPVwiY2VudGVyIHJlZFwiPjxlbT5Vc2Ugd2l0aCBjYXV0aW9uITwvZW0+PC9wPlxyXG4gIDxwPlRoZSBwYWdlIHByb3ZpZGVzIGFuIEFkbWluaXN0cmF0b3IgdGhlIGFiaWxpdHkgdG8gY3JlYXRlIGFuZCBkZXN0cm95IGRhdGFiYXNlIHRhYmxlcy5cclxuICAgIE9ubHkgdXNlIGR1cmluZyBjb3Vyc2Ugc3RhcnR1cCEgVGhlIGNyZWF0ZSBvcHRpb24gd2lsbCBub3QgZHJvcCBhbiBleGlzdGluZyB0YWJsZVxyXG4gICAgdW5sZXNzIHRoZSBkcm9wIGFuZCBjcmVhdGUgb3B0aW9uIGlzIHNlbGVjdGVkLiBUaGUgY2xlYW4gb3B0aW9uIGFsbG93cyBmb3IgY2xlYW5pbmdcclxuICAgIG9mIG9ycGhhbmVkIHJlY29yZHMgZnJvbSB0YWJsZXMuPC9wPlxyXG4gICAgPGRpdj5cclxuXHJcbiAgICAgIDx0YWJsZT5cclxuICAgICAgICA8dHI+XHJcbiAgICAgICAgICA8dGg+VGFibGVzPC90aD5cclxuICAgICAgICAgIDx0aCBjb2xzcGFuPVwiM1wiPk9wZXJhdGlvbnM8L3RoPlxyXG4gICAgICAgIDwvdHI+XHJcbiAgICAgICAgPHRyIHYtZm9yPVwidGFibGUgaW4gdGFibGVzXCI+XHJcbiAgICAgICAgICA8dGQ+e3t0YWJsZS50aXRsZX19PC90ZD5cclxuICAgICAgICAgIDx0ZD48YnV0dG9uIEBjbGljay5wcmV2ZW50PVwiY3JlYXRlKHRhYmxlLCBmYWxzZSlcIj5jcmVhdGU8L2J1dHRvbj48L3RkPlxyXG4gICAgICAgICAgPHRkPjxidXR0b24gQGNsaWNrLnByZXZlbnQ9XCJkcm9wQ3JlYXRlKHRhYmxlKVwiPmRyb3AtYW5kLWNyZWF0ZTwvYnV0dG9uPjwvdGQ+XHJcbiAgICAgICAgICA8dGQ+PGJ1dHRvbiBAY2xpY2sucHJldmVudD1cImNsZWFuKHRhYmxlKVwiPmNsZWFuPC9idXR0b24+PC90ZD5cclxuICAgICAgICA8L3RyPlxyXG4gICAgICA8L3RhYmxlPlxyXG5cclxuICAgIDwvZGl2PlxyXG4gICAgPHByZSB2LWlmPVwicmVzdWx0cy5sZW5ndGggPiAwXCIgY2xhc3M9XCJjb2RlXCI+e3tyZXN1bHRzfX08L3ByZT5cclxuICA8L2Rpdj5cclxuPC90ZW1wbGF0ZT5cclxuXHJcbjxzY3JpcHQ+XHJcbmltcG9ydCBEaWFsb2cgZnJvbSAnZGlhbG9nLWNsJztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IHtcclxuICAgIGRhdGE6IGZ1bmN0aW9uKCkge1xyXG4gICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgIHRhYmxlczogdGhpcy4kc2l0ZS5jb25zb2xlLnRhYmxlcy50YWJsZXMsXHJcbiAgICAgICAgICAgIHJlc3VsdHM6ICcnXHJcbiAgICAgICAgfVxyXG4gICAgfSxcclxuICAgIG1vdW50ZWQoKSB7XHJcbiAgICAgICAgdGhpcy4kcGFyZW50LnNldFRpdGxlKCc6IERhdGFiYXNlIFRhYmxlcycpO1xyXG5cdCAgICAgIHRoaXMuJHNpdGUuY29uc29sZS50YWJsZXMudGFibGVzLnNvcnQoZnVuY3Rpb24oYSwgYikge1xyXG4gICAgICAgICAgICByZXR1cm4gYS5vcmRlciAtIGIub3JkZXI7XHJcbiAgICAgICAgfSlcclxuICAgIH0sXHJcbiAgICBtZXRob2RzOiB7XHJcblx0ICAgIGNyZWF0ZTogZnVuY3Rpb24odGFibGUsIGRyb3ApIHtcclxuXHRcdCAgICB0aGlzLiRzaXRlLmFwaS5wb3N0KHRhYmxlLmFwaSwge2Ryb3A6IGRyb3AgPyAneWVzJyA6ICdubyd9KVxyXG5cdFx0XHQgICAgLnRoZW4oKHJlc3BvbnNlKSA9PiB7XHJcblx0XHRcdFx0ICAgIGlmKCFyZXNwb25zZS5oYXNFcnJvcigpKSB7XHJcblx0XHRcdFx0XHQgICAgaWYoZHJvcCkge1xyXG5cdFx0XHRcdFx0XHQgICAgdGhpcy4kc2l0ZS50b2FzdCh0aGlzLCB0YWJsZS50aXRsZSArICcgdGFibGVzIGRyb3BwZWQgYW5kIHJlY3JlYXRlZCcpO1xyXG5cdFx0XHRcdFx0ICAgIH0gZWxzZSB7XHJcblx0XHRcdFx0XHRcdCAgICB0aGlzLiRzaXRlLnRvYXN0KHRoaXMsIHRhYmxlLnRpdGxlICsgJyB0YWJsZXMgY3JlYXRlZCcpO1xyXG5cdFx0XHRcdFx0ICAgIH1cclxuXHRcdFx0XHQgICAgfSBlbHNlIHtcclxuXHRcdFx0XHRcdCAgICB0aGlzLiRzaXRlLnRvYXN0KHRoaXMsIHJlc3BvbnNlKTtcclxuXHRcdFx0XHQgICAgfVxyXG5cclxuXHRcdFx0ICAgIH0pXHJcblx0XHRcdCAgICAuY2F0Y2goKGVycm9yKSA9PiB7XHJcblx0XHRcdFx0ICAgIHRoaXMuJHNpdGUudG9hc3QodGhpcywgZXJyb3IpO1xyXG5cdFx0XHQgICAgfSk7XHJcblx0ICAgIH0sXHJcblx0ICAgIGRyb3BDcmVhdGU6IGZ1bmN0aW9uKHRhYmxlKSB7XHJcblx0XHQgICAgbmV3IERpYWxvZy5NZXNzYWdlQm94KFwiQXJlIHlvdSBzdXJlP1wiLFxyXG5cdFx0XHQgICAgJ0FyZSB5b3Ugc3VyZSB5b3Ugd2FudCB0byBkcm9wIGFuZCByZWNyZWF0ZSB0aGUgJyArIHRhYmxlLnRpdGxlICtcclxuXHRcdFx0ICAgICcgdGFibGVzPycsIERpYWxvZy5NZXNzYWdlQm94Lk9LQ0FOQ0VMLCAoKSA9PiB7XHJcblx0XHRcdFx0ICAgIHRoaXMuY3JlYXRlKHRhYmxlLCB0cnVlKTtcclxuXHRcdFx0ICAgIH0pO1xyXG5cdCAgICB9LFxyXG5cdCAgICBjbGVhbjogZnVuY3Rpb24odGFibGUpIHtcclxuXHRcdCAgICB0aGlzLiRzaXRlLmFwaS5wb3N0KHRhYmxlLmFwaSwge2NsZWFuOiAneWVzJ30pXHJcblx0XHRcdCAgICAudGhlbigocmVzcG9uc2UpID0+IHtcclxuXHRcdFx0XHQgICAgaWYoIXJlc3BvbnNlLmhhc0Vycm9yKCkpIHtcclxuXHRcdFx0XHQgICAgXHRsZXQgcmVzdWx0ID0gcmVzcG9uc2UuZ2V0RGF0YSgndGFibGUtY2xlYW4nKS5hdHRyaWJ1dGVzO1xyXG5cclxuXHRcdFx0XHQgICAgXHR0aGlzLnJlc3VsdHMgKz0gdGFibGUudGl0bGUgKyBcIiBUYWJsZXNcXG5cXG5cIiArIHJlc3VsdCArIFwiXFxuXCI7XHJcblx0XHRcdFx0ICAgIFx0Y29uc29sZS5sb2cocmVzdWx0KTtcclxuXHRcdFx0XHQgICAgfSBlbHNlIHtcclxuXHRcdFx0XHRcdCAgICB0aGlzLiRzaXRlLnRvYXN0KHRoaXMsIHJlc3BvbnNlKTtcclxuXHRcdFx0XHQgICAgfVxyXG5cclxuXHRcdFx0ICAgIH0pXHJcblx0XHRcdCAgICAuY2F0Y2goKGVycm9yKSA9PiB7XHJcblx0XHRcdFx0ICAgIHRoaXMuJHNpdGUudG9hc3QodGhpcywgZXJyb3IpO1xyXG5cdFx0XHQgICAgfSk7XHJcblx0ICAgIH1cclxuICAgIH1cclxufVxyXG48L3NjcmlwdD5cclxuXHJcbjxzdHlsZSBsYW5nPVwic2Nzc1wiIHNjb3BlZD5cclxuICB0YWJsZSB0ZCB7XHJcbiAgICBwYWRkaW5nOiAwLjI1ZW07XHJcbiAgfVxyXG5cclxuICB0YWJsZSBidXR0b24ge1xyXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgZm9udC1zaXplOiAwLjg1ZW07XHJcbiAgICBmb250LXN0eWxlOiBpdGFsaWM7XHJcbiAgfVxyXG5cclxuICBsaSBzcGFuIHtcclxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgIHdpZHRoOiA2ZW07XHJcbiAgICBmb250LXNpemU6IGluaGVyaXQ7XHJcbiAgICBmb250LXN0eWxlOiBub3JtYWw7XHJcbiAgfVxyXG5cclxuXHJcbjwvc3R5bGU+XHJcbiIsIi8vIEltcG9ydHNcbnZhciBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gPSByZXF1aXJlKFwiLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiKTtcbmV4cG9ydHMgPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oZmFsc2UpO1xuLy8gTW9kdWxlXG5leHBvcnRzLnB1c2goW21vZHVsZS5pZCwgXCJ0YWJsZSB0ZFtkYXRhLXYtNzQ2YWMxZDddIHtcXG4gIHBhZGRpbmc6IDAuMjVlbTtcXG59XFxudGFibGUgYnV0dG9uW2RhdGEtdi03NDZhYzFkN10ge1xcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcbiAgZm9udC1zaXplOiAwLjg1ZW07XFxuICBmb250LXN0eWxlOiBpdGFsaWM7XFxufVxcbmxpIHNwYW5bZGF0YS12LTc0NmFjMWQ3XSB7XFxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxuICB3aWR0aDogNmVtO1xcbiAgZm9udC1zaXplOiBpbmhlcml0O1xcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xcbn1cXG5cIiwgXCJcIl0pO1xuLy8gRXhwb3J0c1xubW9kdWxlLmV4cG9ydHMgPSBleHBvcnRzO1xuIiwidmFyIHJlbmRlciA9IGZ1bmN0aW9uKCkge1xuICB2YXIgX3ZtID0gdGhpc1xuICB2YXIgX2ggPSBfdm0uJGNyZWF0ZUVsZW1lbnRcbiAgdmFyIF9jID0gX3ZtLl9zZWxmLl9jIHx8IF9oXG4gIHJldHVybiBfYyhcIm5hdlwiLCB7IHN0YXRpY0NsYXNzOiBcImNsLW5hdlwiIH0sIFtcbiAgICBfYyhcImRpdlwiLCBbXG4gICAgICBfYyhcbiAgICAgICAgXCJ1bFwiLFxuICAgICAgICB7IHN0YXRpY0NsYXNzOiBcImRpdmlkZXJzXCIgfSxcbiAgICAgICAgW1xuICAgICAgICAgIF9jKFwibGlcIiwgW1xuICAgICAgICAgICAgX2MoXCJhXCIsIHsgYXR0cnM6IHsgaHJlZjogX3ZtLmhvbWVMaW5rIH0gfSwgW1xuICAgICAgICAgICAgICBfYyhcInNwYW5cIiwgeyBzdGF0aWNDbGFzczogXCJob21lXCIgfSwgW192bS5fdihcIkhvbWVcIildKVxuICAgICAgICAgICAgXSlcbiAgICAgICAgICBdKSxcbiAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgIF92bS5fbChfdm0uY29uc29sZS5jb21wb25lbnRzLnBhZ2VzLCBmdW5jdGlvbihwYWdlKSB7XG4gICAgICAgICAgICByZXR1cm4gcGFnZS5hdmFpbGFibGUoX3ZtLnVzZXIpXG4gICAgICAgICAgICAgID8gX2MoXG4gICAgICAgICAgICAgICAgICBcImxpXCIsXG4gICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgIF9jKFwicm91dGVyLWxpbmtcIiwgeyBhdHRyczogeyB0bzogX3ZtLnBhZ2VMaW5rKHBhZ2UpIH0gfSwgW1xuICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihfdm0uX3MocGFnZS50aXRsZSkpXG4gICAgICAgICAgICAgICAgICAgIF0pXG4gICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgOiBfdm0uX2UoKVxuICAgICAgICAgIH0pXG4gICAgICAgIF0sXG4gICAgICAgIDJcbiAgICAgIClcbiAgICBdKSxcbiAgICBfdm0uX3YoXCIgXCIpLFxuICAgIF92bS5jb25zb2xlLmNvbXBvbmVudHMubmF2Mi5sZW5ndGggPiAwXG4gICAgICA/IF9jKFwiZGl2XCIsIFtcbiAgICAgICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcIm5hdjJcIiB9LCBbXG4gICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgXCJkaXZcIixcbiAgICAgICAgICAgICAgeyBzdGF0aWNDbGFzczogXCJsZWZ0XCIgfSxcbiAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgIF92bS5jb25zb2xlLmNvbXBvbmVudHMubmF2MmxlZnRcbiAgICAgICAgICAgICAgICAgID8gX2MoX3ZtLmNvbnNvbGUuY29tcG9uZW50cy5uYXYybGVmdCwgeyB0YWc6IFwiY29tcG9uZW50XCIgfSlcbiAgICAgICAgICAgICAgICAgIDogX3ZtLl9lKClcbiAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgKSxcbiAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgXCJkaXZcIixcbiAgICAgICAgICAgICAgeyBzdGF0aWNDbGFzczogXCJjZW50ZXJcIiB9LFxuICAgICAgICAgICAgICBfdm0uX2woX3ZtLmNvbnNvbGUuY29tcG9uZW50cy5uYXYyLCBmdW5jdGlvbihjKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIF9jKFxuICAgICAgICAgICAgICAgICAgXCJkaXZcIixcbiAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgX2MoYy5jb21wb25lbnQsIHtcbiAgICAgICAgICAgICAgICAgICAgICB0YWc6IFwiY29tcG9uZW50XCIsXG4gICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHsgc2hvcnQ6IF92bS5jb25zb2xlLmNvbXBvbmVudHMubmF2Mi5sZW5ndGggPiAyIH1cbiAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAxXG4gICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgICAgMFxuICAgICAgICAgICAgKSxcbiAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgXCJkaXZcIixcbiAgICAgICAgICAgICAgeyBzdGF0aWNDbGFzczogXCJyaWdodFwiIH0sXG4gICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICBfdm0uY29uc29sZS5jb21wb25lbnRzLm5hdjJyaWdodFxuICAgICAgICAgICAgICAgICAgPyBfYyhfdm0uY29uc29sZS5jb21wb25lbnRzLm5hdjJyaWdodCwgeyB0YWc6IFwiY29tcG9uZW50XCIgfSlcbiAgICAgICAgICAgICAgICAgIDogX3ZtLl9lKClcbiAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgKVxuICAgICAgICAgIF0pXG4gICAgICAgIF0pXG4gICAgICA6IF92bS5fZSgpXG4gIF0pXG59XG52YXIgc3RhdGljUmVuZGVyRm5zID0gW11cbnJlbmRlci5fd2l0aFN0cmlwcGVkID0gdHJ1ZVxuXG5leHBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucyB9IiwidmFyIHJlbmRlciA9IGZ1bmN0aW9uKCkge1xuICB2YXIgX3ZtID0gdGhpc1xuICB2YXIgX2ggPSBfdm0uJGNyZWF0ZUVsZW1lbnRcbiAgdmFyIF9jID0gX3ZtLl9zZWxmLl9jIHx8IF9oXG4gIHJldHVybiBfdm0uX20oMClcbn1cbnZhciBzdGF0aWNSZW5kZXJGbnMgPSBbXG4gIGZ1bmN0aW9uKCkge1xuICAgIHZhciBfdm0gPSB0aGlzXG4gICAgdmFyIF9oID0gX3ZtLiRjcmVhdGVFbGVtZW50XG4gICAgdmFyIF9jID0gX3ZtLl9zZWxmLl9jIHx8IF9oXG4gICAgcmV0dXJuIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwiY29udGVudFwiIH0sIFtcbiAgICAgIF9jKFwicFwiLCBbX3ZtLl92KFwiUGFnZSBkb2VzIG5vdCBleGlzdC4uLlwiKV0pXG4gICAgXSlcbiAgfVxuXVxucmVuZGVyLl93aXRoU3RyaXBwZWQgPSB0cnVlXG5cbmV4cG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zIH0iLCJ2YXIgcmVuZGVyID0gZnVuY3Rpb24oKSB7XG4gIHZhciBfdm0gPSB0aGlzXG4gIHZhciBfaCA9IF92bS4kY3JlYXRlRWxlbWVudFxuICB2YXIgX2MgPSBfdm0uX3NlbGYuX2MgfHwgX2hcbiAgcmV0dXJuIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwiY29udGVudFwiIH0sIFtcbiAgICBfYyhcImgyXCIsIFtfdm0uX3YoXCJEYXRhYmFzZSBUYWJsZXMgTWFuYWdlbWVudFwiKV0pLFxuICAgIF92bS5fdihcIiBcIiksXG4gICAgX3ZtLl9tKDApLFxuICAgIF92bS5fdihcIiBcIiksXG4gICAgX2MoXCJwXCIsIFtcbiAgICAgIF92bS5fdihcbiAgICAgICAgXCJUaGUgcGFnZSBwcm92aWRlcyBhbiBBZG1pbmlzdHJhdG9yIHRoZSBhYmlsaXR5IHRvIGNyZWF0ZSBhbmQgZGVzdHJveSBkYXRhYmFzZSB0YWJsZXMuXFxuICBPbmx5IHVzZSBkdXJpbmcgY291cnNlIHN0YXJ0dXAhIFRoZSBjcmVhdGUgb3B0aW9uIHdpbGwgbm90IGRyb3AgYW4gZXhpc3RpbmcgdGFibGVcXG4gIHVubGVzcyB0aGUgZHJvcCBhbmQgY3JlYXRlIG9wdGlvbiBpcyBzZWxlY3RlZC4gVGhlIGNsZWFuIG9wdGlvbiBhbGxvd3MgZm9yIGNsZWFuaW5nXFxuICBvZiBvcnBoYW5lZCByZWNvcmRzIGZyb20gdGFibGVzLlwiXG4gICAgICApXG4gICAgXSksXG4gICAgX3ZtLl92KFwiIFwiKSxcbiAgICBfYyhcImRpdlwiLCBbXG4gICAgICBfYyhcbiAgICAgICAgXCJ0YWJsZVwiLFxuICAgICAgICBbXG4gICAgICAgICAgX3ZtLl9tKDEpLFxuICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgX3ZtLl9sKF92bS50YWJsZXMsIGZ1bmN0aW9uKHRhYmxlKSB7XG4gICAgICAgICAgICByZXR1cm4gX2MoXCJ0clwiLCBbXG4gICAgICAgICAgICAgIF9jKFwidGRcIiwgW192bS5fdihfdm0uX3ModGFibGUudGl0bGUpKV0pLFxuICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICBfYyhcInRkXCIsIFtcbiAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgIFwiYnV0dG9uXCIsXG4gICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIG9uOiB7XG4gICAgICAgICAgICAgICAgICAgICAgY2xpY2s6IGZ1bmN0aW9uKCRldmVudCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgJGV2ZW50LnByZXZlbnREZWZhdWx0KClcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBfdm0uY3JlYXRlKHRhYmxlLCBmYWxzZSlcbiAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICBbX3ZtLl92KFwiY3JlYXRlXCIpXVxuICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgXSksXG4gICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgIF9jKFwidGRcIiwgW1xuICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgXCJidXR0b25cIixcbiAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgb246IHtcbiAgICAgICAgICAgICAgICAgICAgICBjbGljazogZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAkZXZlbnQucHJldmVudERlZmF1bHQoKVxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIF92bS5kcm9wQ3JlYXRlKHRhYmxlKVxuICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgIFtfdm0uX3YoXCJkcm9wLWFuZC1jcmVhdGVcIildXG4gICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICBdKSxcbiAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgX2MoXCJ0ZFwiLCBbXG4gICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICBcImJ1dHRvblwiLFxuICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBvbjoge1xuICAgICAgICAgICAgICAgICAgICAgIGNsaWNrOiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICRldmVudC5wcmV2ZW50RGVmYXVsdCgpXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gX3ZtLmNsZWFuKHRhYmxlKVxuICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgIFtfdm0uX3YoXCJjbGVhblwiKV1cbiAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgIF0pXG4gICAgICAgICAgICBdKVxuICAgICAgICAgIH0pXG4gICAgICAgIF0sXG4gICAgICAgIDJcbiAgICAgIClcbiAgICBdKSxcbiAgICBfdm0uX3YoXCIgXCIpLFxuICAgIF92bS5yZXN1bHRzLmxlbmd0aCA+IDBcbiAgICAgID8gX2MoXCJwcmVcIiwgeyBzdGF0aWNDbGFzczogXCJjb2RlXCIgfSwgW192bS5fdihfdm0uX3MoX3ZtLnJlc3VsdHMpKV0pXG4gICAgICA6IF92bS5fZSgpXG4gIF0pXG59XG52YXIgc3RhdGljUmVuZGVyRm5zID0gW1xuICBmdW5jdGlvbigpIHtcbiAgICB2YXIgX3ZtID0gdGhpc1xuICAgIHZhciBfaCA9IF92bS4kY3JlYXRlRWxlbWVudFxuICAgIHZhciBfYyA9IF92bS5fc2VsZi5fYyB8fCBfaFxuICAgIHJldHVybiBfYyhcInBcIiwgeyBzdGF0aWNDbGFzczogXCJjZW50ZXIgcmVkXCIgfSwgW1xuICAgICAgX2MoXCJlbVwiLCBbX3ZtLl92KFwiVXNlIHdpdGggY2F1dGlvbiFcIildKVxuICAgIF0pXG4gIH0sXG4gIGZ1bmN0aW9uKCkge1xuICAgIHZhciBfdm0gPSB0aGlzXG4gICAgdmFyIF9oID0gX3ZtLiRjcmVhdGVFbGVtZW50XG4gICAgdmFyIF9jID0gX3ZtLl9zZWxmLl9jIHx8IF9oXG4gICAgcmV0dXJuIF9jKFwidHJcIiwgW1xuICAgICAgX2MoXCJ0aFwiLCBbX3ZtLl92KFwiVGFibGVzXCIpXSksXG4gICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgX2MoXCJ0aFwiLCB7IGF0dHJzOiB7IGNvbHNwYW46IFwiM1wiIH0gfSwgW192bS5fdihcIk9wZXJhdGlvbnNcIildKVxuICAgIF0pXG4gIH1cbl1cbnJlbmRlci5fd2l0aFN0cmlwcGVkID0gdHJ1ZVxuXG5leHBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucyB9IiwiLy8gc3R5bGUtbG9hZGVyOiBBZGRzIHNvbWUgY3NzIHRvIHRoZSBET00gYnkgYWRkaW5nIGEgPHN0eWxlPiB0YWdcblxuLy8gbG9hZCB0aGUgc3R5bGVzXG52YXIgY29udGVudCA9IHJlcXVpcmUoXCIhIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9sb2FkZXJzL3N0eWxlUG9zdExvYWRlci5qcyEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvcmVzb2x2ZS11cmwtbG9hZGVyL2luZGV4LmpzIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9kaXN0L2Nqcy5qcz9zb3VyY2VNYXAhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9UYWJsZXNDb21wb25lbnQudnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmaWQ9NzQ2YWMxZDcmbGFuZz1zY3NzJnNjb3BlZD10cnVlJlwiKTtcbmlmKHR5cGVvZiBjb250ZW50ID09PSAnc3RyaW5nJykgY29udGVudCA9IFtbbW9kdWxlLmlkLCBjb250ZW50LCAnJ11dO1xuaWYoY29udGVudC5sb2NhbHMpIG1vZHVsZS5leHBvcnRzID0gY29udGVudC5sb2NhbHM7XG4vLyBhZGQgdGhlIHN0eWxlcyB0byB0aGUgRE9NXG52YXIgYWRkID0gcmVxdWlyZShcIiEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLXN0eWxlLWxvYWRlci9saWIvYWRkU3R5bGVzQ2xpZW50LmpzXCIpLmRlZmF1bHRcbnZhciB1cGRhdGUgPSBhZGQoXCIzYTA2OGYxY1wiLCBjb250ZW50LCBmYWxzZSwge30pO1xuLy8gSG90IE1vZHVsZSBSZXBsYWNlbWVudFxuaWYobW9kdWxlLmhvdCkge1xuIC8vIFdoZW4gdGhlIHN0eWxlcyBjaGFuZ2UsIHVwZGF0ZSB0aGUgPHN0eWxlPiB0YWdzXG4gaWYoIWNvbnRlbnQubG9jYWxzKSB7XG4gICBtb2R1bGUuaG90LmFjY2VwdChcIiEhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2xvYWRlcnMvc3R5bGVQb3N0TG9hZGVyLmpzIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9yZXNvbHZlLXVybC1sb2FkZXIvaW5kZXguanMhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2Rpc3QvY2pzLmpzP3NvdXJjZU1hcCEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL1RhYmxlc0NvbXBvbmVudC52dWU/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZpZD03NDZhYzFkNyZsYW5nPXNjc3Mmc2NvcGVkPXRydWUmXCIsIGZ1bmN0aW9uKCkge1xuICAgICB2YXIgbmV3Q29udGVudCA9IHJlcXVpcmUoXCIhIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9sb2FkZXJzL3N0eWxlUG9zdExvYWRlci5qcyEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvcmVzb2x2ZS11cmwtbG9hZGVyL2luZGV4LmpzIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9kaXN0L2Nqcy5qcz9zb3VyY2VNYXAhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9UYWJsZXNDb21wb25lbnQudnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmaWQ9NzQ2YWMxZDcmbGFuZz1zY3NzJnNjb3BlZD10cnVlJlwiKTtcbiAgICAgaWYodHlwZW9mIG5ld0NvbnRlbnQgPT09ICdzdHJpbmcnKSBuZXdDb250ZW50ID0gW1ttb2R1bGUuaWQsIG5ld0NvbnRlbnQsICcnXV07XG4gICAgIHVwZGF0ZShuZXdDb250ZW50KTtcbiAgIH0pO1xuIH1cbiAvLyBXaGVuIHRoZSBtb2R1bGUgaXMgZGlzcG9zZWQsIHJlbW92ZSB0aGUgPHN0eWxlPiB0YWdzXG4gbW9kdWxlLmhvdC5kaXNwb3NlKGZ1bmN0aW9uKCkgeyB1cGRhdGUoKTsgfSk7XG59IiwiaW1wb3J0IHtDb25zb2xlRmFjdG9yeX0gZnJvbSAnLi9qcy9Db25zb2xlRmFjdG9yeSc7XHJcblxyXG5pbXBvcnQgQ29uc29sZUNvbXBvbmVudEJhc2UgZnJvbSAnLi9qcy9Db25zb2xlQ29tcG9uZW50QmFzZS52dWUnO1xyXG5TaXRlLkNvbnNvbGVDb21wb25lbnRCYXNlID0gQ29uc29sZUNvbXBvbmVudEJhc2U7XHJcblxyXG5jb25zdCBDb25zb2xlID0gQ29uc29sZUZhY3RvcnkuY3JlYXRlKFNpdGUuc2l0ZSk7XHJcbmV4cG9ydCB7Q29uc29sZX07XHJcblxyXG4iLCJpbXBvcnQge0NvbnNvbGVDb21wb25lbnRzfSBmcm9tICcuL0NvbnNvbGVDb21wb25lbnRzJztcclxuaW1wb3J0IHtDb25zb2xlVGFibGVzfSBmcm9tICcuL0NvbnNvbGVUYWJsZXMnXHJcbmltcG9ydCB7Q29uc29sZUNvbXBvbmVudH0gZnJvbSAnLi9Db25zb2xlQ29tcG9uZW50JztcclxuaW1wb3J0IE5hdkNvbXBvbmVudCBmcm9tICcuL05hdkNvbXBvbmVudC52dWUnO1xyXG5pbXBvcnQgTm90Rm91bmRDb21wb25lbnQgZnJvbSAnLi9Ob3RGb3VuZENvbXBvbmVudC52dWUnO1xyXG5cclxuLyoqXHJcbiAqIE9iamVjdCB0aGF0IHJlcHJlc2VudHMgdGhlIHNpdGUgY29uc29sZS5cclxuICogQHBhcmFtIHtTaXRlfSBzaXRlIFRoZSBzaXRlIG9iamVjdFxyXG4gKiBAY29uc3RydWN0b3JcclxuICovXHJcbmV4cG9ydCBjb25zdCBDb25zb2xlID0gZnVuY3Rpb24oc2l0ZSkge1xyXG5cdC8qKiBUaGlzIHByb3BlcnR5IG1ha2VzIGl0IHBvc3NpYmxlIHRvIGNoYW5nZSB0aGUgY29uc29sZSB0aXRsZVxyXG4gICAgICogQG1lbWJlck9mIENvbnNvbGUgKi9cclxuXHR0aGlzLnRpdGxlID0gJ1NpdGUgQ29uc29sZSc7XHJcblxyXG5cclxuICAgIC8qKiBUaGUgY29uc29sZSBjb21wb25lbnRzIGFyZSBpbnN0YWxsZWQgY29tcG9uZW50c1xyXG4gICAgICogbGlrZSB0aGUgdXNlcnMgZWRpdG9yIG9yIHRhYmxlIGNyZWF0aW9uLiAqL1xyXG4gICAgdGhpcy5jb21wb25lbnRzID0gbmV3IENvbnNvbGVDb21wb25lbnRzKHNpdGUpO1xyXG5cclxuICAgIC8qKiBUaGUgY29uc29sZSB0YWJsZXMgY29tcG9uZW50IGtlZXBzIHRyYWNrIG9mIHRoZVxyXG4gICAgICogZGF0YWJhc2UgdGFibGVzIHdlIG1heSBuZWVkIHRvIGNyZWF0ZSAqL1xyXG4gICAgdGhpcy50YWJsZXMgPSBuZXcgQ29uc29sZVRhYmxlcygpO1xyXG5cclxuXHQvKipcclxuICAgICAqIFN0YXJ0IHRoZSBjb25zb2xlIHN5c3RlbS5cclxuXHQgKiBAcGFyYW0gZWxlbWVudCBFbGVtZW50IHdlIHB1dCB0aGUgY29uc29sZSBWVUUgaW50b1xyXG5cdCAqL1xyXG5cdHRoaXMuc3RhcnQgPSBmdW5jdGlvbihlbGVtZW50KSB7XHJcbiAgICAgICAgdGhpcy5jb21wb25lbnRzLnNvcnQoKTtcclxuICAgICAgICB0aGlzLmNvbXBvbmVudHMuc3RhcnQodGhpcyk7XHJcblxyXG4gICAgICAgIC8vIEdldCB0aGUgaW5zdGFsbGVkIHVzZXJcclxuICAgICAgICBsZXQgdXNlciA9IHNpdGUuc3RvcmUuc3RhdGUudXNlci51c2VyO1xyXG5cclxuICAgICAgICAvL1xyXG4gICAgICAgIC8vIENvbmZpZ3VyZSB0aGUgdGVtcGxhdGUsIHNldHRpbmcgdXAgdGhlIHRvcC1sZXZlbCBtZW51c1xyXG4gICAgICAgIC8vXHJcblxyXG4gICAgICAgIGxldCB0ZW1wbGF0ZSA9IGA8ZGl2IGNsYXNzPVwiY2wtY29uc29sZVwiPjxzaXRlLWhlYWRlciA6dGl0bGU9XCJ0aXRsZVwiPlxyXG48Y29uc29sZS1uYXYgOmNvbnNvbGU9XCJjb25zb2xlXCIgOnVzZXI9XCJ1c2VyXCI+PC9jb25zb2xlLW5hdj5cclxuPC9zaXRlLWhlYWRlcj5gO1xyXG5cclxuICAgICAgICB0aGlzLmNvbXBvbmVudHMubWFpbi5mb3JFYWNoKChjb21wb25lbnQpID0+IHtcclxuICAgICAgICAgICAgdGVtcGxhdGUgKz0gYDwke2NvbXBvbmVudC50YWd9IC8+YDtcclxuICAgICAgICB9KVxyXG5cclxuICAgICAgICB0ZW1wbGF0ZSArPSBgXHJcbjxyb3V0ZXItdmlldz48L3JvdXRlci12aWV3PlxyXG48c2l0ZS1mb290ZXI+PC9zaXRlLWZvb3Rlcj48L2Rpdj5gO1xyXG5cclxuICAgICAgICAvL1xyXG4gICAgICAgIC8vIFNldCB1cCB0aGUgcm91dGVzXHJcbiAgICAgICAgLy9cclxuICAgICAgICBjb25zdCByb3V0ZXMgPSBbXTtcclxuICAgICAgICBmb3IoY29uc3Qgcm91dGUgb2YgdGhpcy5jb21wb25lbnRzLmdldFJvdXRlcygpKSB7XHJcbiAgICAgICAgICAgIGxldCByb2JqID0ge1xyXG4gICAgICAgICAgICAgICAgcGF0aDogc2l0ZS5yb290ICsgJy9jbC9jb25zb2xlJyArIHJvdXRlLnJvdXRlLFxyXG4gICAgICAgICAgICAgICAgY29tcG9uZW50OiByb3V0ZS5jb21wb25lbnRcclxuICAgICAgICAgICAgfTtcclxuXHJcbiAgICAgICAgICAgIGlmKHJvdXRlLnByb3BzICE9PSB1bmRlZmluZWQpIHtcclxuICAgICAgICAgICAgICAgIHJvYmoucHJvcHMgPSByb3V0ZS5wcm9wcztcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgaWYocm91dGUubmFtZSAhPT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgICAgICAgICByb2JqLm5hbWUgPSByb3V0ZS5uYW1lO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHJvdXRlcy5wdXNoKHJvYmopO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgdGhpcy5jb21wb25lbnRzLnBhZ2VzLmZvckVhY2goKHBhZ2UpID0+IHtcclxuICAgICAgICAgICAgaWYodXNlci5hdExlYXN0KHBhZ2UubWluaW11bVJvbGUodXNlcikpKSB7XHJcbiAgICAgICAgICAgICAgICBsZXQgY29tcG9uZW50ID0gcGFnZS5jb21wb25lbnQgIT09IHVuZGVmaW5lZCA/IHBhZ2UuY29tcG9uZW50IDpcclxuICAgICAgICAgICAgICAgICAgICBuZXcgQ29uc29sZUNvbXBvbmVudCh0aGlzLCBzaXRlLCB1c2VyLCBwYWdlKTtcclxuICAgICAgICAgICAgICAgIHJvdXRlcy5wdXNoKHtcclxuICAgICAgICAgICAgICAgICAgICBwYXRoOiBzaXRlLnJvb3QgKyAnL2NsL2NvbnNvbGUnICsgcGFnZS5yb3V0ZSwgY29tcG9uZW50OiBjb21wb25lbnRcclxuICAgICAgICAgICAgICAgIH0pXHJcblxyXG5cclxuICAgICAgICAgICAgICAgIHBhZ2Uuc2VjdGlvbnMuZm9yRWFjaCgoc2VjdGlvbikgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIHNlY3Rpb24ub3B0aW9ucy5mb3JFYWNoKChvcHRpb24pID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYob3B0aW9uLmF2YWlsYWJsZSh1c2VyKSkge1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmKG9wdGlvbi5yb3V0ZXMgIT09IHVuZGVmaW5lZCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9wdGlvbi5yb3V0ZXMuZm9yRWFjaCgocm91dGUpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGV0IHJvYmogPSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwYXRoOiBzaXRlLnJvb3QgKyAnL2NsL2NvbnNvbGUnICsgcm91dGUucm91dGUsIGNvbXBvbmVudDogcm91dGUuY29tcG9uZW50XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH07XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmKHJvdXRlLnByb3BzICE9PSB1bmRlZmluZWQpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJvYmoucHJvcHMgPSByb3V0ZS5wcm9wcztcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZihyb3V0ZS5uYW1lICE9PSB1bmRlZmluZWQpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJvYmoubmFtZSA9IHJvdXRlLm5hbWU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcm91dGVzLnB1c2gocm9iailcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgcm91dGVzLnB1c2goeyBwYXRoOiAnKicsIGNvbXBvbmVudDogTm90Rm91bmRDb21wb25lbnQgfSk7XHJcblxyXG4gICAgICAgIGNvbnN0IEhlYWRlciA9IHNpdGUuaW5mby5oZWFkZXIuY29tcG9uZW50KCk7XHJcbiAgICAgICAgY29uc3QgRm9vdGVyID0gc2l0ZS5pbmZvLmZvb3Rlci5jb21wb25lbnQoKTtcclxuXHJcbiAgICAgICAgY29uc3Qgcm91dGVyID0gbmV3IHNpdGUuVnVlUm91dGVyKHtcclxuICAgICAgICAgICAgcm91dGVzOiByb3V0ZXMsXHJcbiAgICAgICAgICAgIG1vZGU6ICdoaXN0b3J5J1xyXG4gICAgICAgIH0pXHJcblxyXG4gICAgICAgIGNvbnN0IGNvbXBvbmVudHMgPSB7XHJcbiAgICAgICAgICAgICdzaXRlLWhlYWRlcic6IEhlYWRlcixcclxuICAgICAgICAgICAgJ3NpdGUtZm9vdGVyJzogRm9vdGVyLFxyXG4gICAgICAgICAgICAnY29uc29sZS1uYXYnOiBOYXZDb21wb25lbnRcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGxldCBzdG9yZSA9IHNpdGUuc3RvcmU7XHJcbiAgICAgICAgbGV0IHNpdGVUaXRsZSA9IHRoaXMudGl0bGU7XHJcbiAgICAgICAgbGV0IENvbnNvbGUgPSB0aGlzO1xyXG5cclxuICAgICAgICB0aGlzLm1hc3RlclZ1ZSA9IG5ldyBzaXRlLlZ1ZSh7XHJcbiAgICAgICAgICAgIGVsOiBlbGVtZW50LFxyXG4gICAgICAgICAgICBzdG9yZSwgICAgICAvLyBJbmplY3QgdGhlIHN0b3JlXHJcbiAgICAgICAgICAgIHNpdGUsICAgICAgIC8vIEluamVjdCBzaXRlLCBzbyAkc2l0ZSBpcyBhdmFpbGFibGUgZm9yIGFsbCBjaGlsZHJlblxyXG4gICAgICAgICAgICB0ZW1wbGF0ZTogdGVtcGxhdGUsXHJcbiAgICAgICAgICAgIHJvdXRlcixcclxuICAgICAgICAgICAgZGF0YTogZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICAgICAgICAgIHRpdGxlOiBzaXRlVGl0bGUsXHJcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZTogQ29uc29sZSxcclxuICAgICAgICAgICAgICAgICAgICB1c2VyOiB1c2VyXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHByb3BzOiB7XHJcblxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBjb21wb25lbnRzOiBjb21wb25lbnRzLFxyXG4gICAgICAgICAgICBtZXRob2RzOiB7XHJcbiAgICAgICAgICAgICAgICBpc0FkbWluOiBmdW5jdGlvbigpIHtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gYWRtaW47XHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgLypcclxuICAgICAgICAgICAgICAgICAqIFNldCB0aGUgc2l0ZSB0aXRsZS4gVGhpcyBjYW4gYmUgdXNlZCBmcm9tXHJcbiAgICAgICAgICAgICAgICAgKiB0aGUgY2hpbGQgVnVlJ3MgdXNpbmcgdGhpcy4kcGFyZW50LnNldFRpdGxlKCcnKVxyXG4gICAgICAgICAgICAgICAgICogQHBhcmFtIHRpdGxlIFRpdGxlIHRvIHNldFxyXG4gICAgICAgICAgICAgICAgICovXHJcbiAgICAgICAgICAgICAgICBzZXRUaXRsZSh0aXRsZSkge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMudGl0bGUgPSBzaXRlVGl0bGUgKyB0aXRsZTtcclxuICAgICAgICAgICAgICAgICAgICBkb2N1bWVudC50aXRsZSA9IFNpdGUuaW5mby5zaXRlTmFtZSArICcgJyArIHNpdGVUaXRsZSArIHRpdGxlO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBjcmVhdGVkKCkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5zZXRUaXRsZSgnJyk7XHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIG1vdW50ZWQoKSB7XHJcblx0ICAgICAgICAgICAgbmV3IHNpdGUuU3RpY2t5TmF2KCdkaXYuY2wtY29uc29sZSBuYXYnKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pXHJcbiAgICB9XHJcbn1cclxuXHJcbiIsIi8qKlxyXG4gKiBDb21wb25lbnRzIHRoYXQgcmVwcmVzZW50IGEgY29uc29sZSBwYWdlLlxyXG4gKiBAY29uc3RydWN0b3JcclxuICovXHJcbmV4cG9ydCBjb25zdCBDb25zb2xlQ29tcG9uZW50ID0gZnVuY3Rpb24oY29uc29sZSwgc2l0ZSwgdXNlciwgcGFnZSkge1xyXG4gICAgdGhpcy50ZW1wbGF0ZSA9IGA8ZGl2IGlkPVwiY2wtY29uc29sZS1tYWluXCI+PGRpdiBjbGFzcz1cImNvbnRlbnRcIj5gO1xyXG5cclxuICAgIGxldCBjb21wb25lbnRzID0ge307XHJcbiAgICBsZXQgY250ID0gMTtcclxuXHJcbiAgICBwYWdlLnNlY3Rpb25zLmZvckVhY2goKHNlY3Rpb24pID0+IHtcclxuICAgICAgICBpZighc2VjdGlvbi5hdmFpbGFibGUodXNlcikpIHtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgdGhpcy50ZW1wbGF0ZSArPSBgPGgyPiR7c2VjdGlvbi50aXRsZX08L2gyPmA7XHJcblxyXG4gICAgICAgbGV0IG1lbnUgPSAnJztcclxuXHJcbiAgICAgICAvLyBBZGQgdGhlIG1lbnUgb3B0aW9uc1xyXG4gICAgICAgc2VjdGlvbi5vcHRpb25zLmZvckVhY2goKG9wdGlvbikgPT4ge1xyXG4gICAgICAgICAgIGlmKG9wdGlvbi50aXRsZSAhPT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgICAgICAgIGxldCBhdExlYXN0ID0gb3B0aW9uLmF0TGVhc3Q7XHJcbiAgICAgICAgICAgICAgIGlmKGF0TGVhc3QgPT09IE9iamVjdChhdExlYXN0KSkge1xyXG4gICAgICAgICAgICAgICAgICAgYXRMZWFzdCA9IHNpdGUucGVybWlzc2lvbnMuYXRMZWFzdChhdExlYXN0LnRhZywgYXRMZWFzdC5kZWZhdWx0KTtcclxuICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgaWYoYXRMZWFzdCA9PT0gdW5kZWZpbmVkIHx8IHVzZXIuYXRMZWFzdChhdExlYXN0KSkge1xyXG5cdCAgICAgICAgICAgICAgIG1lbnUgKz0gYDxsaT48cm91dGVyLWxpbmsgdG89XCIke3NpdGUucm9vdH0vY2wvY29uc29sZSR7b3B0aW9uLnJvdXRlfVwiPiR7b3B0aW9uLnRpdGxlfTwvcm91dGVyLWxpbms+PC9saT5gO1xyXG4gICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgfVxyXG4gICAgICAgfSk7XHJcblxyXG4gICAgICAgaWYobWVudS5sZW5ndGggPiAwKSB7XHJcbiAgICAgICAgICAgdGhpcy50ZW1wbGF0ZSArPSAnPHVsPicgKyBtZW51ICsgJzwvdWw+JztcclxuICAgICAgIH1cclxuXHJcbiAgICAgICAgLy8gQWRkIGFueSBjdXN0b20gY29tcG9uZW50c1xyXG4gICAgICAgc2VjdGlvbi5vcHRpb25zLmZvckVhY2goKG9wdGlvbikgPT4ge1xyXG4gICAgICAgICAgICBpZihvcHRpb24uY29tcG9uZW50ICE9PSB1bmRlZmluZWQpIHtcclxuXHJcbiAgICAgICAgICAgICAgICB0aGlzLnRlbXBsYXRlICs9IGA8Y29uc29sZS1jb21wb25lbnQtJHtjbnR9PjwvY29uc29sZS1jb21wb25lbnQtJHtjbnR9PmA7XHJcbiAgICAgICAgICAgICAgICBjb21wb25lbnRzWydjb25zb2xlLWNvbXBvbmVudC0nICsgY250XSA9IG9wdGlvbi5jb21wb25lbnQ7XHJcbiAgICAgICAgICAgICAgICBjbnQrKztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgfSk7XHJcblxyXG4gICAgfSk7XHJcblxyXG4gICAgdGhpcy50ZW1wbGF0ZSArPSBgPC9kaXY+PC9kaXY+YDtcclxuICAgIHRoaXMuY29tcG9uZW50cyA9IGNvbXBvbmVudHM7XHJcblxyXG4gICAgdGhpcy5tb3VudGVkID0gZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgaWYocGFnZS50aXRsZSA9PT0gJ01haW4nKSB7XHJcbiAgICAgICAgICAgIHRoaXMuJHBhcmVudC5zZXRUaXRsZSgnJyk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgdGhpcy4kcGFyZW50LnNldFRpdGxlKCc6ICcgKyBwYWdlLnRpdGxlKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgfVxyXG59IiwidmFyIHJlbmRlciwgc3RhdGljUmVuZGVyRm5zXG5pbXBvcnQgc2NyaXB0IGZyb20gXCIuL0NvbnNvbGVDb21wb25lbnRCYXNlLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIlxuZXhwb3J0ICogZnJvbSBcIi4vQ29uc29sZUNvbXBvbmVudEJhc2UudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiXG5cblxuLyogbm9ybWFsaXplIGNvbXBvbmVudCAqL1xuaW1wb3J0IG5vcm1hbGl6ZXIgZnJvbSBcIiEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvcnVudGltZS9jb21wb25lbnROb3JtYWxpemVyLmpzXCJcbnZhciBjb21wb25lbnQgPSBub3JtYWxpemVyKFxuICBzY3JpcHQsXG4gIHJlbmRlcixcbiAgc3RhdGljUmVuZGVyRm5zLFxuICBmYWxzZSxcbiAgbnVsbCxcbiAgbnVsbCxcbiAgbnVsbFxuICBcbilcblxuLyogaG90IHJlbG9hZCAqL1xuaWYgKG1vZHVsZS5ob3QpIHtcbiAgdmFyIGFwaSA9IHJlcXVpcmUoXCJEOlxcXFxEcm9wYm94XFxcXENvdXJzZXNcXFxcQ1NFMzM1XFxcXHdlYlxcXFxub2RlX21vZHVsZXNcXFxcdnVlLWhvdC1yZWxvYWQtYXBpXFxcXGRpc3RcXFxcaW5kZXguanNcIilcbiAgYXBpLmluc3RhbGwocmVxdWlyZSgndnVlJykpXG4gIGlmIChhcGkuY29tcGF0aWJsZSkge1xuICAgIG1vZHVsZS5ob3QuYWNjZXB0KClcbiAgICBpZiAoIWFwaS5pc1JlY29yZGVkKCc2OWUzNTVhOCcpKSB7XG4gICAgICBhcGkuY3JlYXRlUmVjb3JkKCc2OWUzNTVhOCcsIGNvbXBvbmVudC5vcHRpb25zKVxuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVsb2FkKCc2OWUzNTVhOCcsIGNvbXBvbmVudC5vcHRpb25zKVxuICAgIH1cbiAgICBcbiAgfVxufVxuY29tcG9uZW50Lm9wdGlvbnMuX19maWxlID0gXCJ2ZW5kb3IvY2wvY29uc29sZS9qcy9Db25zb2xlQ29tcG9uZW50QmFzZS52dWVcIlxuZXhwb3J0IGRlZmF1bHQgY29tcG9uZW50LmV4cG9ydHMiLCJpbXBvcnQgbW9kIGZyb20gXCItIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzPz9yZWYtLTIhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9Db25zb2xlQ29tcG9uZW50QmFzZS52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCI7IGV4cG9ydCBkZWZhdWx0IG1vZDsgZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanM/P3JlZi0tMiEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL0NvbnNvbGVDb21wb25lbnRCYXNlLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIiIsImltcG9ydCB7Q29uc29sZVBhZ2V9IGZyb20gJy4vQ29uc29sZVBhZ2UnO1xyXG5cclxuLyoqXHJcbiAqIE1hbmFnZW1lbnQgb2YgYWxsIGNvbnNvbGUgY29tcG9uZW50c1xyXG4gKlxyXG4gKiBDb21wb25lbnRzIGFyZTpcclxuICogc3RhcnQgc2NyaXB0cyBydW4gd2hlbiB0aGUgY29uc29sZSBpcyBzdGFydGVkIChhZGRTdGFydClcclxuICogbWFpbiBDb21wb25lbnRzIGFkZGVkIHRvIGV2ZXJ5IHBhZ2UgKGFkZE1haW5Db21wb25lbnQpXHJcbiAqIG9wdGlvbnMgQWRkcyB0b3AtbGV2ZWwgbWVudSBvcHRpb25zIGFuZCBvcHRpb25zIG9uIHBhZ2VzIChhZGRPcHRpb24pXHJcbiAqIHJvdXRlcyBBZGRzIHJvdXRlcyB0byB0aGUgY29uc29sZSBkaXJlY3RvcnkgKGFkZFJvdXRlLCBhZGRSb3V0ZXMpICpcclxuICogQHBhcmFtIHNpdGVcclxuICogQGNvbnN0cnVjdG9yXHJcbiAqL1xyXG5leHBvcnQgbGV0IENvbnNvbGVDb21wb25lbnRzID0gZnVuY3Rpb24oc2l0ZSkge1xyXG5cclxuICAgIC8vXHJcbiAgICAvLyBTdGFydCBzY3JpcHRzIGFyZSBydW4gd2hlbiB0aGUgY29uc29sZSBpcyBzdGFydGVkXHJcbiAgICAvL1xyXG4gICAgbGV0IHN0YXJ0ID0gW107XHJcblxyXG5cclxuICAgIHRoaXMuYWRkU3RhcnQgPSBmdW5jdGlvbihzY3JpcHQpIHtcclxuICAgICAgICBzdGFydC5wdXNoKHNjcmlwdCk7XHJcbiAgICB9XHJcblxyXG4gICAgdGhpcy5zdGFydCA9IGZ1bmN0aW9uKGNvbnNvbGUpIHtcclxuICAgICAgICBzdGFydC5mb3JFYWNoKChzdGFydHVwKSA9PiB7XHJcbiAgICAgICAgICAgIHN0YXJ0dXAoY29uc29sZSk7XHJcbiAgICAgICAgfSlcclxuICAgIH1cclxuXHJcbiAgICAvL1xyXG4gICAgLy8gQW55IGNvbXBvbmVudHMgdG8gYWRkIHRvIHRoZSBtYWluIHBhZ2UgKGV2ZXJ5IHBhZ2UpXHJcbiAgICAvL1xyXG4gICAgLy8gVGhlIGNvdXJzZSBzdWJzeXN0ZW0gdXNlcyB0aGlzIHRvIGFkZCBhIGJhciB0aGUgc2VsZWN0c1xyXG4gICAgLy8gdGhlIGNvdXJzZSBzZWN0aW9uIHJpZ2h0IGJlbG93IHRoZSBtZW51IGJhci5cclxuICAgIC8vXHJcbiAgICB0aGlzLm1haW4gPSBbXTtcclxuXHJcbiAgICB0aGlzLmFkZE1haW5Db21wb25lbnQgPSBmdW5jdGlvbih0YWcsIGNvbXBvbmVudCwgb3JkZXIpIHtcclxuICAgICAgICAvLyB0aGlzLm1haW4ucHVzaCh7XHJcbiAgICAgICAgLy8gICAgIHRhZzogdGFnLFxyXG4gICAgICAgIC8vICAgICBjb21wb25lbnQ6IGNvbXBvbmVudCxcclxuICAgICAgICAvLyAgICAgb3JkZXI6IG9yZGVyXHJcbiAgICAgICAgLy8gfSk7XHJcbiAgICB9XHJcblxyXG4gICAgdGhpcy5uYXYyID0gW107XHJcblxyXG4gICAgdGhpcy5hZGROYXYyID0gZnVuY3Rpb24oY29tcG9uZW50LCBvcmRlcikge1xyXG4gICAgICAgIHRoaXMubmF2Mi5wdXNoKHtcclxuICAgICAgICAgICAgY29tcG9uZW50OiBjb21wb25lbnQsXHJcbiAgICAgICAgICAgIG9yZGVyOiBvcmRlclxyXG4gICAgICAgIH0pXHJcblxyXG4gICAgICAgIHRoaXMubmF2Mi5zb3J0KChhLCBiKSA9PiB7XHJcbiAgICAgICAgICAgIHJldHVybiBhLm9yZGVyIC0gYi5vcmRlcjtcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgcmV0dXJuIGNvbXBvbmVudDtcclxuICAgIH1cclxuXHJcbiAgICB0aGlzLnJlbW92ZU5hdjIgPSBmdW5jdGlvbih2dWUsIGNvbXBvbmVudCkge1xyXG4gICAgICAgIGlmKEFycmF5LmlzQXJyYXkoY29tcG9uZW50KSkge1xyXG4gICAgICAgICAgICBmb3IobGV0IGMgb2YgY29tcG9uZW50KSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnJlbW92ZU5hdjIodnVlLCBjKTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgZm9yKGxldCBpPTA7IGk8dGhpcy5uYXYyLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgIGlmKHRoaXMubmF2MltpXS5jb21wb25lbnQgPT09IGNvbXBvbmVudCkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5uYXYyLnNwbGljZShpLCAxKTtcclxuICAgICAgICAgICAgICAgIHZ1ZS4kc2V0KHRoaXMsICduYXYyJywgdGhpcy5uYXYyKTtcclxuICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICB0aGlzLmFkZE5hdjJMaW5rID0gZnVuY3Rpb24odnVlLCBuYW1lLCBvcmRlciwgY2xpY2spIHtcclxuICAgICAgICBsZXQgY29tcG9uZW50ID0ge1xyXG4gICAgICAgICAgICB0ZW1wbGF0ZTogYDxhIEBjbGljay5wcmV2ZW50PVwiY2xpY2tcIj4ke25hbWV9PC9hPmAsXHJcbiAgICAgICAgICAgIG1ldGhvZHM6IHtcclxuICAgICAgICAgICAgICAgIGNsaWNrKCkge1xyXG4gICAgICAgICAgICAgICAgICAgIGNsaWNrKCk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9O1xyXG4gICAgICAgIHRoaXMuYWRkTmF2Mihjb21wb25lbnQsIG9yZGVyKTtcclxuXHJcbiAgICAgICAgdGhpcy5uYXYyLnNvcnQoKGEsIGIpID0+IHtcclxuICAgICAgICAgICAgcmV0dXJuIGEub3JkZXIgLSBiLm9yZGVyO1xyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICB2dWUuJHNldCh0aGlzLCAnbmF2MicsIHRoaXMubmF2Mik7XHJcbiAgICAgICAgcmV0dXJuIGNvbXBvbmVudDtcclxuICAgIH1cclxuXHJcbiAgICB0aGlzLm5hdjJyaWdodCA9IG51bGw7XHJcbiAgICB0aGlzLm5hdjJsZWZ0ID0gbnVsbDtcclxuXHJcbiAgICAvL1xyXG4gICAgLy8gQ29uc29sZSBvcHRpb25zIGFyZSBtZW51IG9wdGlvbnMgaW4gdGhlIHNpdGUgY29uc29sZS5cclxuICAgIC8vIFRoaXMgaXMgaG93IHRoZSB0b3AtbGV2ZWwgbWVudXMsIHNlY3Rpb25zLCBhbmQgbGlua3NcclxuICAgIC8vIGFyZSBkZWZpbmVkLlxyXG4gICAgLy9cclxuXHJcbiAgICBsZXQgb3B0aW9ucyA9IFtdO1xyXG5cclxuICAgIHRoaXMuYWRkT3B0aW9uID0gZnVuY3Rpb24ob3B0aW9uKSB7XHJcbiAgICAgICAgb3B0aW9ucy5wdXNoKG9wdGlvbik7XHJcbiAgICB9XHJcblxyXG4gICAgdGhpcy5wYWdlcyA9IFtdO1xyXG5cclxuICAgIC8qKlxyXG4gICAgICogU29ydCB0aGUgY29tcG9uZW50cyBpbnRvIGEgc3RydWN0dXJlXHJcbiAgICAgKiBmb3IgY3JlYXRpbmcgdGhlIG1hbmFnZW1lbnQgcGFnZXMuXHJcbiAgICAgKi9cclxuICAgIHRoaXMuc29ydCA9IGZ1bmN0aW9uKCkge1xyXG4gICAgICAgIG9wdGlvbnMuZm9yRWFjaCgob3B0aW9uKSA9PiB7XHJcbiAgICAgICAgICAgIGxldCBwYWdlID0gZmluZFBhZ2Uob3B0aW9uLnBhZ2UudGl0bGUpO1xyXG4gICAgICAgICAgICBpZihwYWdlICE9PSBudWxsKSB7XHJcbiAgICAgICAgICAgICAgICBwYWdlLmFkZChvcHRpb24pO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgbGV0IHBhZ2UgPSBuZXcgQ29uc29sZVBhZ2Uoc2l0ZSwgb3B0aW9uLnBhZ2UpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5wYWdlcy5wdXNoKHBhZ2UpO1xyXG4gICAgICAgICAgICAgICAgcGFnZS5hZGQob3B0aW9uKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICAvLyBTb3J0IHRoZSBwYWdlcywgc2VjdGlvbnMsIGFuZCBvcHRpb25zIGluIG9yZGVyXHJcbiAgICAgICAgdGhpcy5wYWdlcy5zb3J0KGZ1bmN0aW9uKGEsIGIpIHtcclxuICAgICAgICAgICAgcmV0dXJuIGEub3JkZXIgLSBiLm9yZGVyO1xyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICB0aGlzLnBhZ2VzLmZvckVhY2goKHBhZ2UpID0+IHtcclxuICAgICAgICAgICAgcGFnZS5zb3J0KCk7XHJcbiAgICAgICAgfSlcclxuXHJcbiAgICAgICAgLy8gU29ydCBhbnkgbWFpbiBjb21wb25lbnRzXHJcbiAgICAgICAgdGhpcy5tYWluLnNvcnQoZnVuY3Rpb24oYSwgYikge1xyXG4gICAgICAgICAgICByZXR1cm4gYS5vcmRlciAtIGIub3JkZXI7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgdGhpcy5nZXRQYWdlcyA9IGZ1bmN0aW9uKCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLnBhZ2VzO1xyXG4gICAgfVxyXG5cclxuICAgIGxldCByb3V0ZXMgPSBbXTtcclxuXHJcbiAgICB0aGlzLmFkZFJvdXRlID0gZnVuY3Rpb24ocm91dGUpIHtcclxuICAgICAgICByb3V0ZXMucHVzaChyb3V0ZSk7XHJcbiAgICB9XHJcblxyXG4gICAgdGhpcy5hZGRSb3V0ZXMgPSBmdW5jdGlvbihhZGRyb3V0ZXMpIHtcclxuICAgICAgICBmb3IobGV0IHJvdXRlIG9mIGFkZHJvdXRlcykge1xyXG4gICAgICAgICAgICByb3V0ZXMucHVzaChyb3V0ZSlcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgdGhpcy5nZXRSb3V0ZXMgPSBmdW5jdGlvbigpIHtcclxuICAgICAgICByZXR1cm4gcm91dGVzO1xyXG4gICAgfVxyXG5cclxuICAgIC8qXHJcbiAgICAgKiBHaXZlbiBhIGxpc3Qgb2YgaXRlbXMgb2YgdGhlIGZvcm0ge3RpdGxlOiAndGl0bGUnLCBvcmRlcjogJ29yZGVyJ30sXHJcbiAgICAgKiBmaW5kIGFuIGl0ZW0gd2l0aCBhIGdpdmVuIHRpdGxlLlxyXG4gICAgICogQHBhcmFtIGxpc3RcclxuICAgICAqIEBwYXJhbSB0aXRsZVxyXG4gICAgICovXHJcbiAgICBsZXQgZmluZFBhZ2UgPSAodGl0bGUpID0+IHtcclxuICAgICAgICBmb3IobGV0IGkgaW4gdGhpcy5wYWdlcykge1xyXG4gICAgICAgICAgICBpZih0aGlzLnBhZ2VzW2ldLnRpdGxlID09PSB0aXRsZSkge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMucGFnZXNbaV07XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHJldHVybiBudWxsO1xyXG4gICAgfVxyXG5cclxufVxyXG5cclxuXHJcbiIsImltcG9ydCB7Q29uc29sZX0gZnJvbSAnLi9Db25zb2xlJztcclxuaW1wb3J0IFRhYmxlc0NvbXBvbmVudCBmcm9tICcuL1RhYmxlc0NvbXBvbmVudC52dWUnO1xyXG5pbXBvcnQgQ29uc29sZUNvbXBvbmVudEJhc2UgZnJvbSAnLi9Db25zb2xlQ29tcG9uZW50QmFzZS52dWUnO1xyXG5cclxuLyoqXHJcbiAqIEZhY3RvcnkgdG8gY3JlYXRlIHRoZSBDb25zb2xlIG9iamVjdFxyXG4gKiBAY29uc3RydWN0b3JcclxuICovXHJcbmV4cG9ydCBjb25zdCBDb25zb2xlRmFjdG9yeSA9IGZ1bmN0aW9uKCkge1xyXG59XHJcblxyXG5Db25zb2xlRmFjdG9yeS5jcmVhdGUgPSBmdW5jdGlvbihzaXRlKSB7XHJcbiAgICBsZXQgc2l0ZUNvbnNvbGUgPSBuZXcgQ29uc29sZShzaXRlKTtcclxuXHJcbiAgICAvLyBTYXZlIGFzIGEgc2l0ZSBwcm9wZXJ0eVxyXG4gICAgc2l0ZS5jb25zb2xlID0gc2l0ZUNvbnNvbGU7XHJcblxyXG4gICAgLy8gQWRkIHN0YW5kYXJkIG9wdGlvbnNcclxuICAgIHNpdGVDb25zb2xlLmNvbXBvbmVudHMuYWRkT3B0aW9uKHtcclxuICAgICAgICBhdExlYXN0OiBVc2Vycy5Vc2VyLlNUQUZGLFxyXG4gICAgICAgIHBhZ2U6IHt0aXRsZTogJ01haW4nLCByb3V0ZTogJycsIG9yZGVyOiAxfSxcclxuICAgIH0pO1xyXG5cclxuICAgIHNpdGVDb25zb2xlLmNvbXBvbmVudHMuYWRkT3B0aW9uKHtcclxuICAgICAgICBhdExlYXN0OiBVc2Vycy5Vc2VyLkFETUlOLFxyXG4gICAgICAgIHBhZ2U6IHt0aXRsZTogJ01hbmFnZW1lbnQnLCByb3V0ZTogJy9tYW5hZ2VtZW50Jywgb3JkZXI6IDEwfSxcclxuICAgICAgICBzZWN0aW9uOiB7dGl0bGU6ICdTaXRlIE1hbmFnZW1lbnQnLCBvcmRlcjogMX0sXHJcbiAgICAgICAgdGl0bGU6ICdUYWJsZXMnLFxyXG4gICAgICAgIG9yZGVyOiAxMCxcclxuICAgICAgICByb3V0ZTogJy9tYW5hZ2VtZW50L3RhYmxlcycsXHJcbiAgICAgICAgcm91dGVzOiBbXHJcbiAgICAgICAgICAgIHtyb3V0ZTogJy9tYW5hZ2VtZW50L3RhYmxlcycsIG5hbWU6ICd0YWJsZXMnLCBjb21wb25lbnQ6IFRhYmxlc0NvbXBvbmVudH1cclxuICAgICAgICBdXHJcbiAgICB9KTtcclxuXHJcbiAgICBzaXRlLnN0YXJ0KCAoKSA9PiB7XHJcbiAgICAgICAgbGV0IGVsZW1lbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdkaXYuY2wtY29uc29sZScpO1xyXG4gICAgICAgIGlmKGVsZW1lbnQgIT09IG51bGwpIHtcclxuICAgICAgICAgICAgc2l0ZUNvbnNvbGUuc3RhcnQoZWxlbWVudCk7XHJcbiAgICAgICAgfVxyXG4gICAgfSk7XHJcblxyXG4gICAgc2l0ZS5Db25zb2xlQ29tcG9uZW50QmFzZSA9IENvbnNvbGVDb21wb25lbnRCYXNlO1xyXG5cclxuICAgIHJldHVybiBzaXRlQ29uc29sZTtcclxufSIsImltcG9ydCB7Q29uc29sZVNlY3Rpb259IGZyb20gJy4vQ29uc29sZVNlY3Rpb24nO1xyXG5cclxuLyoqXHJcbiAqIFJlcHJlc2VudHMgYSBjb25zb2xlIHBhZ2UgaW4gdGhlIENvbnNvbGVDb21wb25lbnRzIGNvbGxlY3Rpb25cclxuICogQHBhcmFtIHtTaXRlfSBzaXRlIFRoZSBzaXRlIG9iamVjdFxyXG4gKiBAcGFyYW0gcGFnZSBPYmplY3QgcmVwcmVzZW50YXRpb24gb2YgcGFnZSBhcyBwYXNzZWQgZnJvbSB0aGUgc2VydmVyXHJcbiAqIEBjb25zdHJ1Y3RvclxyXG4gKi9cclxuZXhwb3J0IGxldCBDb25zb2xlUGFnZSA9IGZ1bmN0aW9uKHNpdGUsIHBhZ2UpIHtcclxuICAgIC8qKiBQYWdlIHRpdGxlICovXHJcbiAgICB0aGlzLnRpdGxlID0gcGFnZS50aXRsZTtcclxuXHJcbiAgICAvKiogUm91dGVyIHRvIGdldCB0byB0aGlzIHBhZ2UgKi9cclxuICAgIHRoaXMucm91dGUgPSBwYWdlLnJvdXRlO1xyXG5cclxuICAgIC8qKiBPcmRlciBvZiBwYWdlIHByZXNlbnRhdGlvbiBpbiBhIGNvbXBvbmVudCBtZW51ICovXHJcbiAgICB0aGlzLm9yZGVyID0gcGFnZS5vcmRlcjtcclxuXHJcbiAgICAvKiogVGhlIHBhZ2UgY29tcG9uZW50ICovXHJcbiAgICB0aGlzLmNvbXBvbmVudCA9IHBhZ2UuY29tcG9uZW50O1xyXG5cclxuICAgIC8qKiBPcHRpb25hbCBtaW5pbXVtIHVzZXIgcm9sZSB0byBhY2Nlc3MgdGhlIHBhZ2UgKi9cclxuICAgIHRoaXMuYXRMZWFzdCA9IHBhZ2UuYXRMZWFzdCAhPT0gdW5kZWZpbmVkID8gcGFnZS5hdExlYXN0IDogbnVsbDtcclxuXHJcbiAgICAvKiogUGFnZSBzZWN0aW9ucyAqL1xyXG4gICAgdGhpcy5zZWN0aW9ucyA9IFtdO1xyXG5cclxuXHQvKipcclxuICAgICAqIEFkZCBhIHNlY3Rpb24gdG8gdGhlIHBhZ2UuXHJcblx0ICogQHBhcmFtIG9wdGlvblxyXG5cdCAqL1xyXG5cdHRoaXMuYWRkID0gZnVuY3Rpb24ob3B0aW9uKSB7XHJcbiAgICAgICAgLy8gRG9lcyB0aGUgaXRlbSBoYXZlIGEgc2VjdGlvbj9cclxuICAgICAgICBpZihvcHRpb24uc2VjdGlvbiA9PT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGxldCBzZWN0aW9uID0gZmluZFNlY3Rpb24ob3B0aW9uLnNlY3Rpb24udGl0bGUpO1xyXG4gICAgICAgIGlmKHNlY3Rpb24gIT09IG51bGwpIHtcclxuICAgICAgICAgICAgc2VjdGlvbi5hZGQob3B0aW9uKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBsZXQgc2VjdGlvbiA9IG5ldyBDb25zb2xlU2VjdGlvbihzaXRlLCBvcHRpb24uc2VjdGlvbik7XHJcbiAgICAgICAgICAgIHRoaXMuc2VjdGlvbnMucHVzaChzZWN0aW9uKTtcclxuICAgICAgICAgICAgc2VjdGlvbi5hZGQob3B0aW9uKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG5cdC8qKlxyXG4gICAgICogU29ydCBwYWdlIHNlY3Rpb25zIGludG8gb3JkZXJcclxuXHQgKi9cclxuXHR0aGlzLnNvcnQgPSBmdW5jdGlvbigpIHtcclxuICAgICAgICB0aGlzLnNlY3Rpb25zLnNvcnQoZnVuY3Rpb24oYSwgYikge1xyXG4gICAgICAgICAgICByZXR1cm4gYS5vcmRlciAtIGIub3JkZXI7XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIHRoaXMuc2VjdGlvbnMuZm9yRWFjaCgoc2VjdGlvbikgPT4ge1xyXG4gICAgICAgICAgICBzZWN0aW9uLnNvcnQoKTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICBsZXQgZmluZFNlY3Rpb24gPSAodGl0bGUpID0+IHtcclxuICAgICAgICBmb3IobGV0IGkgaW4gdGhpcy5zZWN0aW9ucykge1xyXG4gICAgICAgICAgICBpZih0aGlzLnNlY3Rpb25zW2ldLnRpdGxlID09PSB0aXRsZSkge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMuc2VjdGlvbnNbaV07XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHJldHVybiBudWxsO1xyXG4gICAgfVxyXG5cclxuXHQvKipcclxuICAgICAqIElzIHRoaXMgcGFnZSBhdmFpbGFibGUgdG8gdGhpcyB1c2VyP1xyXG5cdCAqIEBwYXJhbSB1c2VyIFVzZXIgdG8gdGVzdFxyXG5cdCAqL1xyXG5cdHRoaXMuYXZhaWxhYmxlID0gZnVuY3Rpb24odXNlcikge1xyXG4gICAgICAgIHJldHVybiB1c2VyLmF0TGVhc3QodGhpcy5taW5pbXVtUm9sZSh1c2VyKSk7XHJcbiAgICB9XHJcblxyXG5cdC8qKlxyXG4gICAgICogQ29tcHV0ZSBtaW5pbXVtIHJvbGUgdG8gYmUgYWJsZSB0byBhY2Nlc3MgdGhpcyBwYWdlLlxyXG4gICAgICpcclxuICAgICAqIFRoZSBtaW5pbXVtIHJvbGUgaXMgZGV0ZXJtaW5lZCBieSB3aGF0IGlzIHNwZWNpZmllZCBmb3JcclxuICAgICAqIHRoaXMgcGFnZSBwbHVzIGFueSBwYWdlcyBsaW5rZWQgdG8gYnkgdGhpcyBwYWdlLlxyXG5cdCAqIEBwYXJhbSB1c2VyXHJcblx0ICogQHJldHVybnMgeyp9XHJcblx0ICovXHJcblx0dGhpcy5taW5pbXVtUm9sZSA9IGZ1bmN0aW9uKHVzZXIpIHtcclxuICAgICAgICBsZXQgcm9sZUxlYXN0ID0gdGhpcy5hdExlYXN0O1xyXG4gICAgICAgIGlmKHJvbGVMZWFzdCA9PT0gT2JqZWN0KHJvbGVMZWFzdCkpIHtcclxuICAgICAgICAgICAgcm9sZUxlYXN0ID0gc2l0ZS5wZXJtaXNzaW9ucy5hdExlYXN0KHJvbGVMZWFzdC50YWcsIHJvbGVMZWFzdC5kZWZhdWx0KTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGxldCBwcmlvcml0eUxlYXN0ID0gdGhpcy5hdExlYXN0ICE9PSBudWxsID8gdXNlci5nZXRSb2xlUHJpb3JpdHkocm9sZUxlYXN0KSA6IDEwMDAwMDtcclxuXHJcbiAgICAgICAgdGhpcy5zZWN0aW9ucy5mb3JFYWNoKChzZWN0aW9uKSA9PiB7XHJcbiAgICAgICAgICAgIGxldCBzZWN0aW9uTGVhc3QgPSBzZWN0aW9uLm1pbmltdW1Sb2xlKHVzZXIpO1xyXG4gICAgICAgICAgICBsZXQgcHJpb3JpdHkgPSB1c2VyLmdldFJvbGVQcmlvcml0eShzZWN0aW9uTGVhc3QpO1xyXG4gICAgICAgICAgICBpZihwcmlvcml0eSAhPT0gMCAmJiBwcmlvcml0eSA8IHByaW9yaXR5TGVhc3QpIHtcclxuICAgICAgICAgICAgICAgIHJvbGVMZWFzdCA9IHNlY3Rpb25MZWFzdDtcclxuICAgICAgICAgICAgICAgIHByaW9yaXR5TGVhc3QgPSBwcmlvcml0eTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICBpZihyb2xlTGVhc3QgPT09IG51bGwpIHtcclxuICAgICAgICAgICAgcmV0dXJuICdBJzsgLy8vPCBBbHdheXMgQURNSU5cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHJldHVybiByb2xlTGVhc3Q7XHJcblxyXG4gICAgfVxyXG59IiwiXHJcbmltcG9ydCB7Q29uc29sZVNlY3Rpb25PcHRpb259IGZyb20gJy4vQ29uc29sZVNlY3Rpb25PcHRpb24nO1xyXG5cclxuLyoqXHJcbiAqIENvbnNvbGUgc2VjdGlvbjogVGhlc2UgYXJlIHRoZSA8aDI+IHBhZ2Ugc2VjdGlvbnNcclxuICogQGNvbnN0cnVjdG9yXHJcbiAqL1xyXG5leHBvcnQgbGV0IENvbnNvbGVTZWN0aW9uID0gZnVuY3Rpb24oc2l0ZSwgc2VjdGlvbikge1xyXG4gICAgdGhpcy50aXRsZSA9IHNlY3Rpb24udGl0bGU7XHJcbiAgICB0aGlzLm9yZGVyID0gc2VjdGlvbi5vcmRlcjtcclxuXHJcbiAgICB0aGlzLm9wdGlvbnMgPSBbXTtcclxuXHJcbiAgICB0aGlzLmFkZCA9IGZ1bmN0aW9uKG9wdGlvbikge1xyXG4gICAgICAgIHRoaXMub3B0aW9ucy5wdXNoKG5ldyBDb25zb2xlU2VjdGlvbk9wdGlvbihzaXRlLCBvcHRpb24pKTtcclxuICAgIH1cclxuXHJcbiAgICB0aGlzLnNvcnQgPSBmdW5jdGlvbigpIHtcclxuICAgICAgICB0aGlzLm9wdGlvbnMuc29ydChmdW5jdGlvbihhLCBiKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBhLm9yZGVyIC0gYi5vcmRlcjtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICB0aGlzLmF2YWlsYWJsZSA9IGZ1bmN0aW9uKHVzZXIpIHtcclxuICAgICAgICByZXR1cm4gdXNlci5hdExlYXN0KHRoaXMubWluaW11bVJvbGUodXNlcikpO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogRGV0ZXJtaW5lIHRoZSBtaW5pbXVtIHJvbGUgZm9yIGFsbCBvcHRpb25zXHJcbiAgICAgKiBpbiB0aGlzIHNlY3Rpb24gc28gd2Uga25vdyBpZiB3ZSBjYW4gc2hvdyB0aGUgc2VjdGlvbi5cclxuICAgICAqIEBwYXJhbSB1c2VyIEEgdXNlciwgc28gd2UgY2FuIGtub3cgd2hhdCB0aGUgcG9zc2libGUgcm9sZXMgYXJlXHJcbiAgICAgKiBAcmV0dXJucyB7c3RyaW5nfSBSb2xlXHJcbiAgICAgKi9cclxuICAgIHRoaXMubWluaW11bVJvbGUgPSBmdW5jdGlvbih1c2VyKSB7XHJcbiAgICAgICAgaWYodGhpcy5vcHRpb25zLmxlbmd0aCA9PT0gMCkge1xyXG4gICAgICAgICAgICByZXR1cm4gJ0EnO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgbGV0IHJvbGVMZWFzdCA9IG51bGw7XHJcbiAgICAgICAgbGV0IHByaW9yaXR5TGVhc3QgPSAxMDAwMDAwO1xyXG5cclxuICAgICAgICB0aGlzLm9wdGlvbnMuZm9yRWFjaCgob3B0aW9uKSA9PiB7XHJcblx0ICAgICAgICBsZXQgcm9sZSA9IG9wdGlvbi5hdExlYXN0O1xyXG5cdCAgICAgICAgaWYocm9sZSA9PT0gT2JqZWN0KHJvbGUpKSB7XHJcblx0XHQgICAgICAgIHJvbGUgPSBzaXRlLnBlcm1pc3Npb25zLmF0TGVhc3Qocm9sZS50YWcsIHJvbGUuZGVmYXVsdCk7XHJcblx0ICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBsZXQgcHJpb3JpdHkgPSB1c2VyLmdldFJvbGVQcmlvcml0eShyb2xlKTtcclxuICAgICAgICAgICAgaWYocHJpb3JpdHkgIT09IDAgJiYgcHJpb3JpdHkgPCBwcmlvcml0eUxlYXN0KSB7XHJcbiAgICAgICAgICAgICAgICByb2xlTGVhc3QgPSByb2xlO1xyXG4gICAgICAgICAgICAgICAgcHJpb3JpdHlMZWFzdCA9IHByaW9yaXR5O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIGlmKHJvbGVMZWFzdCA9PT0gbnVsbCkge1xyXG4gICAgICAgICAgICByZXR1cm4gJ0EnOyAvLy88IEFsd2F5cyBBRE1JTlxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcmV0dXJuIHJvbGVMZWFzdDtcclxuICAgIH1cclxufSIsIi8qKlxyXG4gKiBPcHRpb25zIGluIGEgY29uc29sZSBwYWdlIHNlY3Rpb25cclxuICogQGNvbnN0cnVjdG9yXHJcbiAqL1xyXG5leHBvcnQgY29uc3QgQ29uc29sZVNlY3Rpb25PcHRpb24gPSBmdW5jdGlvbihzaXRlLCBvcHRpb24pIHtcclxuXHRmb3IobGV0IG1lbWJlciBpbiBvcHRpb24pIHtcclxuXHRcdHRoaXNbbWVtYmVyXSA9IG9wdGlvblttZW1iZXJdO1xyXG5cdH1cclxuXHJcblx0dGhpcy5hdmFpbGFibGUgPSBmdW5jdGlvbih1c2VyKSB7XHJcblx0XHRsZXQgYXRMZWFzdCA9IHRoaXMuYXRMZWFzdDtcclxuXHRcdGlmKGF0TGVhc3QgPT09IE9iamVjdChhdExlYXN0KSkge1xyXG5cdFx0XHRhdExlYXN0ID0gc2l0ZS5wZXJtaXNzaW9ucy5hdExlYXN0KGF0TGVhc3QudGFnLCBhdExlYXN0LmRlZmF1bHQpO1xyXG5cdFx0fVxyXG5cclxuXHRcdHJldHVybiAoYXRMZWFzdCA9PT0gdW5kZWZpbmVkIHx8IHVzZXIuYXRMZWFzdChhdExlYXN0KSk7XHJcblx0fVxyXG59XHJcbiIsIi8qKlxyXG4gKiBLZWVwcyB0cmFjayBvZiB3aGF0IHRhYmxlIGNyZWF0ZS9kcm9wIG9wdGlvbnMgYXJlIGF2YWlsYWJsZSBvbiB0aGUgc2l0ZS5cclxuICogQGNvbnN0cnVjdG9yXHJcbiAqL1xyXG5leHBvcnQgbGV0IENvbnNvbGVUYWJsZXMgPSBmdW5jdGlvbigpIHtcclxuXHJcbiAgICB0aGlzLnRhYmxlcyA9IFt7XHJcbiAgICAgICAgdGl0bGU6ICdTaXRlJyxcclxuICAgICAgICBvcmRlcjogMCxcclxuICAgICAgICBhcGk6ICcvYXBpL3NpdGUvdGFibGVzJ1xyXG4gICAgfV07XHJcblxyXG4gICAgdGhpcy5hZGQgPSBmdW5jdGlvbih0YWJsZSkge1xyXG4gICAgICAgIHRoaXMudGFibGVzLnB1c2godGFibGUpO1xyXG4gICAgfVxyXG59XHJcbiIsImltcG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zIH0gZnJvbSBcIi4vTmF2Q29tcG9uZW50LnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD0yNzVhNmVlYiZcIlxuaW1wb3J0IHNjcmlwdCBmcm9tIFwiLi9OYXZDb21wb25lbnQudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiXG5leHBvcnQgKiBmcm9tIFwiLi9OYXZDb21wb25lbnQudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiXG5cblxuLyogbm9ybWFsaXplIGNvbXBvbmVudCAqL1xuaW1wb3J0IG5vcm1hbGl6ZXIgZnJvbSBcIiEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvcnVudGltZS9jb21wb25lbnROb3JtYWxpemVyLmpzXCJcbnZhciBjb21wb25lbnQgPSBub3JtYWxpemVyKFxuICBzY3JpcHQsXG4gIHJlbmRlcixcbiAgc3RhdGljUmVuZGVyRm5zLFxuICBmYWxzZSxcbiAgbnVsbCxcbiAgbnVsbCxcbiAgbnVsbFxuICBcbilcblxuLyogaG90IHJlbG9hZCAqL1xuaWYgKG1vZHVsZS5ob3QpIHtcbiAgdmFyIGFwaSA9IHJlcXVpcmUoXCJEOlxcXFxEcm9wYm94XFxcXENvdXJzZXNcXFxcQ1NFMzM1XFxcXHdlYlxcXFxub2RlX21vZHVsZXNcXFxcdnVlLWhvdC1yZWxvYWQtYXBpXFxcXGRpc3RcXFxcaW5kZXguanNcIilcbiAgYXBpLmluc3RhbGwocmVxdWlyZSgndnVlJykpXG4gIGlmIChhcGkuY29tcGF0aWJsZSkge1xuICAgIG1vZHVsZS5ob3QuYWNjZXB0KClcbiAgICBpZiAoIWFwaS5pc1JlY29yZGVkKCcyNzVhNmVlYicpKSB7XG4gICAgICBhcGkuY3JlYXRlUmVjb3JkKCcyNzVhNmVlYicsIGNvbXBvbmVudC5vcHRpb25zKVxuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVsb2FkKCcyNzVhNmVlYicsIGNvbXBvbmVudC5vcHRpb25zKVxuICAgIH1cbiAgICBtb2R1bGUuaG90LmFjY2VwdChcIi4vTmF2Q29tcG9uZW50LnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD0yNzVhNmVlYiZcIiwgZnVuY3Rpb24gKCkge1xuICAgICAgYXBpLnJlcmVuZGVyKCcyNzVhNmVlYicsIHtcbiAgICAgICAgcmVuZGVyOiByZW5kZXIsXG4gICAgICAgIHN0YXRpY1JlbmRlckZuczogc3RhdGljUmVuZGVyRm5zXG4gICAgICB9KVxuICAgIH0pXG4gIH1cbn1cbmNvbXBvbmVudC5vcHRpb25zLl9fZmlsZSA9IFwidmVuZG9yL2NsL2NvbnNvbGUvanMvTmF2Q29tcG9uZW50LnZ1ZVwiXG5leHBvcnQgZGVmYXVsdCBjb21wb25lbnQuZXhwb3J0cyIsImltcG9ydCBtb2QgZnJvbSBcIi0hLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanM/P3JlZi0tMiEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL05hdkNvbXBvbmVudC52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCI7IGV4cG9ydCBkZWZhdWx0IG1vZDsgZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanM/P3JlZi0tMiEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL05hdkNvbXBvbmVudC52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCIiLCJleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvbG9hZGVycy90ZW1wbGF0ZUxvYWRlci5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vTmF2Q29tcG9uZW50LnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD0yNzVhNmVlYiZcIiIsImltcG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zIH0gZnJvbSBcIi4vTm90Rm91bmRDb21wb25lbnQudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPWE1OTdhYjY2JlwiXG5pbXBvcnQgc2NyaXB0IGZyb20gXCIuL05vdEZvdW5kQ29tcG9uZW50LnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIlxuZXhwb3J0ICogZnJvbSBcIi4vTm90Rm91bmRDb21wb25lbnQudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiXG5cblxuLyogbm9ybWFsaXplIGNvbXBvbmVudCAqL1xuaW1wb3J0IG5vcm1hbGl6ZXIgZnJvbSBcIiEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvcnVudGltZS9jb21wb25lbnROb3JtYWxpemVyLmpzXCJcbnZhciBjb21wb25lbnQgPSBub3JtYWxpemVyKFxuICBzY3JpcHQsXG4gIHJlbmRlcixcbiAgc3RhdGljUmVuZGVyRm5zLFxuICBmYWxzZSxcbiAgbnVsbCxcbiAgbnVsbCxcbiAgbnVsbFxuICBcbilcblxuLyogaG90IHJlbG9hZCAqL1xuaWYgKG1vZHVsZS5ob3QpIHtcbiAgdmFyIGFwaSA9IHJlcXVpcmUoXCJEOlxcXFxEcm9wYm94XFxcXENvdXJzZXNcXFxcQ1NFMzM1XFxcXHdlYlxcXFxub2RlX21vZHVsZXNcXFxcdnVlLWhvdC1yZWxvYWQtYXBpXFxcXGRpc3RcXFxcaW5kZXguanNcIilcbiAgYXBpLmluc3RhbGwocmVxdWlyZSgndnVlJykpXG4gIGlmIChhcGkuY29tcGF0aWJsZSkge1xuICAgIG1vZHVsZS5ob3QuYWNjZXB0KClcbiAgICBpZiAoIWFwaS5pc1JlY29yZGVkKCdhNTk3YWI2NicpKSB7XG4gICAgICBhcGkuY3JlYXRlUmVjb3JkKCdhNTk3YWI2NicsIGNvbXBvbmVudC5vcHRpb25zKVxuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVsb2FkKCdhNTk3YWI2NicsIGNvbXBvbmVudC5vcHRpb25zKVxuICAgIH1cbiAgICBtb2R1bGUuaG90LmFjY2VwdChcIi4vTm90Rm91bmRDb21wb25lbnQudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPWE1OTdhYjY2JlwiLCBmdW5jdGlvbiAoKSB7XG4gICAgICBhcGkucmVyZW5kZXIoJ2E1OTdhYjY2Jywge1xuICAgICAgICByZW5kZXI6IHJlbmRlcixcbiAgICAgICAgc3RhdGljUmVuZGVyRm5zOiBzdGF0aWNSZW5kZXJGbnNcbiAgICAgIH0pXG4gICAgfSlcbiAgfVxufVxuY29tcG9uZW50Lm9wdGlvbnMuX19maWxlID0gXCJ2ZW5kb3IvY2wvY29uc29sZS9qcy9Ob3RGb3VuZENvbXBvbmVudC52dWVcIlxuZXhwb3J0IGRlZmF1bHQgY29tcG9uZW50LmV4cG9ydHMiLCJpbXBvcnQgbW9kIGZyb20gXCItIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzPz9yZWYtLTIhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9Ob3RGb3VuZENvbXBvbmVudC52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCI7IGV4cG9ydCBkZWZhdWx0IG1vZDsgZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanM/P3JlZi0tMiEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL05vdEZvdW5kQ29tcG9uZW50LnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIiIsImV4cG9ydCAqIGZyb20gXCItIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9sb2FkZXJzL3RlbXBsYXRlTG9hZGVyLmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9Ob3RGb3VuZENvbXBvbmVudC52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9YTU5N2FiNjYmXCIiLCJpbXBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucyB9IGZyb20gXCIuL1RhYmxlc0NvbXBvbmVudC52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9NzQ2YWMxZDcmc2NvcGVkPXRydWUmXCJcbmltcG9ydCBzY3JpcHQgZnJvbSBcIi4vVGFibGVzQ29tcG9uZW50LnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIlxuZXhwb3J0ICogZnJvbSBcIi4vVGFibGVzQ29tcG9uZW50LnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIlxuaW1wb3J0IHN0eWxlMCBmcm9tIFwiLi9UYWJsZXNDb21wb25lbnQudnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmaWQ9NzQ2YWMxZDcmbGFuZz1zY3NzJnNjb3BlZD10cnVlJlwiXG5cblxuLyogbm9ybWFsaXplIGNvbXBvbmVudCAqL1xuaW1wb3J0IG5vcm1hbGl6ZXIgZnJvbSBcIiEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvcnVudGltZS9jb21wb25lbnROb3JtYWxpemVyLmpzXCJcbnZhciBjb21wb25lbnQgPSBub3JtYWxpemVyKFxuICBzY3JpcHQsXG4gIHJlbmRlcixcbiAgc3RhdGljUmVuZGVyRm5zLFxuICBmYWxzZSxcbiAgbnVsbCxcbiAgXCI3NDZhYzFkN1wiLFxuICBudWxsXG4gIFxuKVxuXG4vKiBob3QgcmVsb2FkICovXG5pZiAobW9kdWxlLmhvdCkge1xuICB2YXIgYXBpID0gcmVxdWlyZShcIkQ6XFxcXERyb3Bib3hcXFxcQ291cnNlc1xcXFxDU0UzMzVcXFxcd2ViXFxcXG5vZGVfbW9kdWxlc1xcXFx2dWUtaG90LXJlbG9hZC1hcGlcXFxcZGlzdFxcXFxpbmRleC5qc1wiKVxuICBhcGkuaW5zdGFsbChyZXF1aXJlKCd2dWUnKSlcbiAgaWYgKGFwaS5jb21wYXRpYmxlKSB7XG4gICAgbW9kdWxlLmhvdC5hY2NlcHQoKVxuICAgIGlmICghYXBpLmlzUmVjb3JkZWQoJzc0NmFjMWQ3JykpIHtcbiAgICAgIGFwaS5jcmVhdGVSZWNvcmQoJzc0NmFjMWQ3JywgY29tcG9uZW50Lm9wdGlvbnMpXG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZWxvYWQoJzc0NmFjMWQ3JywgY29tcG9uZW50Lm9wdGlvbnMpXG4gICAgfVxuICAgIG1vZHVsZS5ob3QuYWNjZXB0KFwiLi9UYWJsZXNDb21wb25lbnQudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTc0NmFjMWQ3JnNjb3BlZD10cnVlJlwiLCBmdW5jdGlvbiAoKSB7XG4gICAgICBhcGkucmVyZW5kZXIoJzc0NmFjMWQ3Jywge1xuICAgICAgICByZW5kZXI6IHJlbmRlcixcbiAgICAgICAgc3RhdGljUmVuZGVyRm5zOiBzdGF0aWNSZW5kZXJGbnNcbiAgICAgIH0pXG4gICAgfSlcbiAgfVxufVxuY29tcG9uZW50Lm9wdGlvbnMuX19maWxlID0gXCJ2ZW5kb3IvY2wvY29uc29sZS9qcy9UYWJsZXNDb21wb25lbnQudnVlXCJcbmV4cG9ydCBkZWZhdWx0IGNvbXBvbmVudC5leHBvcnRzIiwiaW1wb3J0IG1vZCBmcm9tIFwiLSEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcz8/cmVmLS0yIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vVGFibGVzQ29tcG9uZW50LnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIjsgZXhwb3J0IGRlZmF1bHQgbW9kOyBleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcz8/cmVmLS0yIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vVGFibGVzQ29tcG9uZW50LnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIiIsImltcG9ydCBtb2QgZnJvbSBcIi0hLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1zdHlsZS1sb2FkZXIvaW5kZXguanMhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2xvYWRlcnMvc3R5bGVQb3N0TG9hZGVyLmpzIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9yZXNvbHZlLXVybC1sb2FkZXIvaW5kZXguanMhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2Rpc3QvY2pzLmpzP3NvdXJjZU1hcCEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL1RhYmxlc0NvbXBvbmVudC52dWU/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZpZD03NDZhYzFkNyZsYW5nPXNjc3Mmc2NvcGVkPXRydWUmXCI7IGV4cG9ydCBkZWZhdWx0IG1vZDsgZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1zdHlsZS1sb2FkZXIvaW5kZXguanMhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2xvYWRlcnMvc3R5bGVQb3N0TG9hZGVyLmpzIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9yZXNvbHZlLXVybC1sb2FkZXIvaW5kZXguanMhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2Rpc3QvY2pzLmpzP3NvdXJjZU1hcCEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL1RhYmxlc0NvbXBvbmVudC52dWU/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZpZD03NDZhYzFkNyZsYW5nPXNjc3Mmc2NvcGVkPXRydWUmXCIiLCJleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvbG9hZGVycy90ZW1wbGF0ZUxvYWRlci5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vVGFibGVzQ29tcG9uZW50LnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD03NDZhYzFkNyZzY29wZWQ9dHJ1ZSZcIiJdLCJzb3VyY2VSb290IjoiIn0=