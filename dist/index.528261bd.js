// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles

(function (modules, entry, mainEntry, parcelRequireName, globalName) {
  /* eslint-disable no-undef */
  var globalObject =
    typeof globalThis !== 'undefined'
      ? globalThis
      : typeof self !== 'undefined'
      ? self
      : typeof window !== 'undefined'
      ? window
      : typeof global !== 'undefined'
      ? global
      : {};
  /* eslint-enable no-undef */

  // Save the require from previous bundle to this closure if any
  var previousRequire =
    typeof globalObject[parcelRequireName] === 'function' &&
    globalObject[parcelRequireName];

  var cache = previousRequire.cache || {};
  // Do not use `require` to prevent Webpack from trying to bundle this call
  var nodeRequire =
    typeof module !== 'undefined' &&
    typeof module.require === 'function' &&
    module.require.bind(module);

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire =
          typeof globalObject[parcelRequireName] === 'function' &&
          globalObject[parcelRequireName];
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error("Cannot find module '" + name + "'");
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = (cache[name] = new newRequire.Module(name));

      modules[name][0].call(
        module.exports,
        localRequire,
        module,
        module.exports,
        this
      );
    }

    return cache[name].exports;

    function localRequire(x) {
      var res = localRequire.resolve(x);
      return res === false ? {} : newRequire(res);
    }

    function resolve(x) {
      var id = modules[name][1][x];
      return id != null ? id : x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [
      function (require, module) {
        module.exports = exports;
      },
      {},
    ];
  };

  Object.defineProperty(newRequire, 'root', {
    get: function () {
      return globalObject[parcelRequireName];
    },
  });

  globalObject[parcelRequireName] = newRequire;

  for (var i = 0; i < entry.length; i++) {
    newRequire(entry[i]);
  }

  if (mainEntry) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(mainEntry);

    // CommonJS
    if (typeof exports === 'object' && typeof module !== 'undefined') {
      module.exports = mainExports;

      // RequireJS
    } else if (typeof define === 'function' && define.amd) {
      define(function () {
        return mainExports;
      });

      // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }
})({"d5c8c":[function(require,module,exports) {
var global = arguments[3];
var HMR_HOST = null;
var HMR_PORT = null;
var HMR_SECURE = false;
var HMR_ENV_HASH = "d6ea1d42532a7575";
module.bundle.HMR_BUNDLE_ID = "07733c98528261bd";
"use strict";
/* global HMR_HOST, HMR_PORT, HMR_ENV_HASH, HMR_SECURE, chrome, browser, __parcel__import__, __parcel__importScripts__, ServiceWorkerGlobalScope */ /*::
import type {
  HMRAsset,
  HMRMessage,
} from '@parcel/reporter-dev-server/src/HMRServer.js';
interface ParcelRequire {
  (string): mixed;
  cache: {|[string]: ParcelModule|};
  hotData: {|[string]: mixed|};
  Module: any;
  parent: ?ParcelRequire;
  isParcelRequire: true;
  modules: {|[string]: [Function, {|[string]: string|}]|};
  HMR_BUNDLE_ID: string;
  root: ParcelRequire;
}
interface ParcelModule {
  hot: {|
    data: mixed,
    accept(cb: (Function) => void): void,
    dispose(cb: (mixed) => void): void,
    // accept(deps: Array<string> | string, cb: (Function) => void): void,
    // decline(): void,
    _acceptCallbacks: Array<(Function) => void>,
    _disposeCallbacks: Array<(mixed) => void>,
  |};
}
interface ExtensionContext {
  runtime: {|
    reload(): void,
    getURL(url: string): string;
    getManifest(): {manifest_version: number, ...};
  |};
}
declare var module: {bundle: ParcelRequire, ...};
declare var HMR_HOST: string;
declare var HMR_PORT: string;
declare var HMR_ENV_HASH: string;
declare var HMR_SECURE: boolean;
declare var chrome: ExtensionContext;
declare var browser: ExtensionContext;
declare var __parcel__import__: (string) => Promise<void>;
declare var __parcel__importScripts__: (string) => Promise<void>;
declare var globalThis: typeof self;
declare var ServiceWorkerGlobalScope: Object;
*/ var OVERLAY_ID = "__parcel__error__overlay__";
var OldModule = module.bundle.Module;
function Module(moduleName) {
    OldModule.call(this, moduleName);
    this.hot = {
        data: module.bundle.hotData[moduleName],
        _acceptCallbacks: [],
        _disposeCallbacks: [],
        accept: function(fn) {
            this._acceptCallbacks.push(fn || function() {});
        },
        dispose: function(fn) {
            this._disposeCallbacks.push(fn);
        }
    };
    module.bundle.hotData[moduleName] = undefined;
}
module.bundle.Module = Module;
module.bundle.hotData = {};
var checkedAssets /*: {|[string]: boolean|} */ , assetsToDispose /*: Array<[ParcelRequire, string]> */ , assetsToAccept /*: Array<[ParcelRequire, string]> */ ;
function getHostname() {
    return HMR_HOST || (location.protocol.indexOf("http") === 0 ? location.hostname : "localhost");
}
function getPort() {
    return HMR_PORT || location.port;
}
// eslint-disable-next-line no-redeclare
var parent = module.bundle.parent;
if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== "undefined") {
    var hostname = getHostname();
    var port = getPort();
    var protocol = HMR_SECURE || location.protocol == "https:" && ![
        "localhost",
        "127.0.0.1",
        "0.0.0.0"
    ].includes(hostname) ? "wss" : "ws";
    var ws;
    try {
        ws = new WebSocket(protocol + "://" + hostname + (port ? ":" + port : "") + "/");
    } catch (err) {
        if (err.message) console.error(err.message);
        ws = {};
    }
    // Web extension context
    var extCtx = typeof browser === "undefined" ? typeof chrome === "undefined" ? null : chrome : browser;
    // Safari doesn't support sourceURL in error stacks.
    // eval may also be disabled via CSP, so do a quick check.
    var supportsSourceURL = false;
    try {
        (0, eval)('throw new Error("test"); //# sourceURL=test.js');
    } catch (err) {
        supportsSourceURL = err.stack.includes("test.js");
    }
    // $FlowFixMe
    ws.onmessage = async function(event /*: {data: string, ...} */ ) {
        checkedAssets = {} /*: {|[string]: boolean|} */ ;
        assetsToAccept = [];
        assetsToDispose = [];
        var data /*: HMRMessage */  = JSON.parse(event.data);
        if (data.type === "update") {
            // Remove error overlay if there is one
            if (typeof document !== "undefined") removeErrorOverlay();
            let assets = data.assets.filter((asset)=>asset.envHash === HMR_ENV_HASH);
            // Handle HMR Update
            let handled = assets.every((asset)=>{
                return asset.type === "css" || asset.type === "js" && hmrAcceptCheck(module.bundle.root, asset.id, asset.depsByBundle);
            });
            if (handled) {
                console.clear();
                // Dispatch custom event so other runtimes (e.g React Refresh) are aware.
                if (typeof window !== "undefined" && typeof CustomEvent !== "undefined") window.dispatchEvent(new CustomEvent("parcelhmraccept"));
                await hmrApplyUpdates(assets);
                // Dispose all old assets.
                let processedAssets = {} /*: {|[string]: boolean|} */ ;
                for(let i = 0; i < assetsToDispose.length; i++){
                    let id = assetsToDispose[i][1];
                    if (!processedAssets[id]) {
                        hmrDispose(assetsToDispose[i][0], id);
                        processedAssets[id] = true;
                    }
                }
                // Run accept callbacks. This will also re-execute other disposed assets in topological order.
                processedAssets = {};
                for(let i = 0; i < assetsToAccept.length; i++){
                    let id = assetsToAccept[i][1];
                    if (!processedAssets[id]) {
                        hmrAccept(assetsToAccept[i][0], id);
                        processedAssets[id] = true;
                    }
                }
            } else fullReload();
        }
        if (data.type === "error") {
            // Log parcel errors to console
            for (let ansiDiagnostic of data.diagnostics.ansi){
                let stack = ansiDiagnostic.codeframe ? ansiDiagnostic.codeframe : ansiDiagnostic.stack;
                console.error("\uD83D\uDEA8 [parcel]: " + ansiDiagnostic.message + "\n" + stack + "\n\n" + ansiDiagnostic.hints.join("\n"));
            }
            if (typeof document !== "undefined") {
                // Render the fancy html overlay
                removeErrorOverlay();
                var overlay = createErrorOverlay(data.diagnostics.html);
                // $FlowFixMe
                document.body.appendChild(overlay);
            }
        }
    };
    ws.onerror = function(e) {
        if (e.message) console.error(e.message);
    };
    ws.onclose = function() {
        console.warn("[parcel] \uD83D\uDEA8 Connection to the HMR server was lost");
    };
}
function removeErrorOverlay() {
    var overlay = document.getElementById(OVERLAY_ID);
    if (overlay) {
        overlay.remove();
        console.log("[parcel] \u2728 Error resolved");
    }
}
function createErrorOverlay(diagnostics) {
    var overlay = document.createElement("div");
    overlay.id = OVERLAY_ID;
    let errorHTML = '<div style="background: black; opacity: 0.85; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; font-family: Menlo, Consolas, monospace; z-index: 9999;">';
    for (let diagnostic of diagnostics){
        let stack = diagnostic.frames.length ? diagnostic.frames.reduce((p, frame)=>{
            return `${p}
<a href="/__parcel_launch_editor?file=${encodeURIComponent(frame.location)}" style="text-decoration: underline; color: #888" onclick="fetch(this.href); return false">${frame.location}</a>
${frame.code}`;
        }, "") : diagnostic.stack;
        errorHTML += `
      <div>
        <div style="font-size: 18px; font-weight: bold; margin-top: 20px;">
          \u{1F6A8} ${diagnostic.message}
        </div>
        <pre>${stack}</pre>
        <div>
          ${diagnostic.hints.map((hint)=>"<div>\uD83D\uDCA1 " + hint + "</div>").join("")}
        </div>
        ${diagnostic.documentation ? `<div>\u{1F4DD} <a style="color: violet" href="${diagnostic.documentation}" target="_blank">Learn more</a></div>` : ""}
      </div>
    `;
    }
    errorHTML += "</div>";
    overlay.innerHTML = errorHTML;
    return overlay;
}
function fullReload() {
    if ("reload" in location) location.reload();
    else if (extCtx && extCtx.runtime && extCtx.runtime.reload) extCtx.runtime.reload();
}
function getParents(bundle, id) /*: Array<[ParcelRequire, string]> */ {
    var modules = bundle.modules;
    if (!modules) return [];
    var parents = [];
    var k, d, dep;
    for(k in modules)for(d in modules[k][1]){
        dep = modules[k][1][d];
        if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) parents.push([
            bundle,
            k
        ]);
    }
    if (bundle.parent) parents = parents.concat(getParents(bundle.parent, id));
    return parents;
}
function updateLink(link) {
    var href = link.getAttribute("href");
    if (!href) return;
    var newLink = link.cloneNode();
    newLink.onload = function() {
        if (link.parentNode !== null) // $FlowFixMe
        link.parentNode.removeChild(link);
    };
    newLink.setAttribute("href", // $FlowFixMe
    href.split("?")[0] + "?" + Date.now());
    // $FlowFixMe
    link.parentNode.insertBefore(newLink, link.nextSibling);
}
var cssTimeout = null;
function reloadCSS() {
    if (cssTimeout) return;
    cssTimeout = setTimeout(function() {
        var links = document.querySelectorAll('link[rel="stylesheet"]');
        for(var i = 0; i < links.length; i++){
            // $FlowFixMe[incompatible-type]
            var href /*: string */  = links[i].getAttribute("href");
            var hostname = getHostname();
            var servedFromHMRServer = hostname === "localhost" ? new RegExp("^(https?:\\/\\/(0.0.0.0|127.0.0.1)|localhost):" + getPort()).test(href) : href.indexOf(hostname + ":" + getPort());
            var absolute = /^https?:\/\//i.test(href) && href.indexOf(location.origin) !== 0 && !servedFromHMRServer;
            if (!absolute) updateLink(links[i]);
        }
        cssTimeout = null;
    }, 50);
}
function hmrDownload(asset) {
    if (asset.type === "js") {
        if (typeof document !== "undefined") {
            let script = document.createElement("script");
            script.src = asset.url + "?t=" + Date.now();
            if (asset.outputFormat === "esmodule") script.type = "module";
            return new Promise((resolve, reject)=>{
                var _document$head;
                script.onload = ()=>resolve(script);
                script.onerror = reject;
                (_document$head = document.head) === null || _document$head === void 0 || _document$head.appendChild(script);
            });
        } else if (typeof importScripts === "function") {
            // Worker scripts
            if (asset.outputFormat === "esmodule") return import(asset.url + "?t=" + Date.now());
            else return new Promise((resolve, reject)=>{
                try {
                    importScripts(asset.url + "?t=" + Date.now());
                    resolve();
                } catch (err) {
                    reject(err);
                }
            });
        }
    }
}
async function hmrApplyUpdates(assets) {
    global.parcelHotUpdate = Object.create(null);
    let scriptsToRemove;
    try {
        // If sourceURL comments aren't supported in eval, we need to load
        // the update from the dev server over HTTP so that stack traces
        // are correct in errors/logs. This is much slower than eval, so
        // we only do it if needed (currently just Safari).
        // https://bugs.webkit.org/show_bug.cgi?id=137297
        // This path is also taken if a CSP disallows eval.
        if (!supportsSourceURL) {
            let promises = assets.map((asset)=>{
                var _hmrDownload;
                return (_hmrDownload = hmrDownload(asset)) === null || _hmrDownload === void 0 ? void 0 : _hmrDownload.catch((err)=>{
                    // Web extension fix
                    if (extCtx && extCtx.runtime && extCtx.runtime.getManifest().manifest_version == 3 && typeof ServiceWorkerGlobalScope != "undefined" && global instanceof ServiceWorkerGlobalScope) {
                        extCtx.runtime.reload();
                        return;
                    }
                    throw err;
                });
            });
            scriptsToRemove = await Promise.all(promises);
        }
        assets.forEach(function(asset) {
            hmrApply(module.bundle.root, asset);
        });
    } finally{
        delete global.parcelHotUpdate;
        if (scriptsToRemove) scriptsToRemove.forEach((script)=>{
            if (script) {
                var _document$head2;
                (_document$head2 = document.head) === null || _document$head2 === void 0 || _document$head2.removeChild(script);
            }
        });
    }
}
function hmrApply(bundle /*: ParcelRequire */ , asset /*:  HMRAsset */ ) {
    var modules = bundle.modules;
    if (!modules) return;
    if (asset.type === "css") reloadCSS();
    else if (asset.type === "js") {
        let deps = asset.depsByBundle[bundle.HMR_BUNDLE_ID];
        if (deps) {
            if (modules[asset.id]) {
                // Remove dependencies that are removed and will become orphaned.
                // This is necessary so that if the asset is added back again, the cache is gone, and we prevent a full page reload.
                let oldDeps = modules[asset.id][1];
                for(let dep in oldDeps)if (!deps[dep] || deps[dep] !== oldDeps[dep]) {
                    let id = oldDeps[dep];
                    let parents = getParents(module.bundle.root, id);
                    if (parents.length === 1) hmrDelete(module.bundle.root, id);
                }
            }
            if (supportsSourceURL) // Global eval. We would use `new Function` here but browser
            // support for source maps is better with eval.
            (0, eval)(asset.output);
            // $FlowFixMe
            let fn = global.parcelHotUpdate[asset.id];
            modules[asset.id] = [
                fn,
                deps
            ];
        } else if (bundle.parent) hmrApply(bundle.parent, asset);
    }
}
function hmrDelete(bundle, id) {
    let modules = bundle.modules;
    if (!modules) return;
    if (modules[id]) {
        // Collect dependencies that will become orphaned when this module is deleted.
        let deps = modules[id][1];
        let orphans = [];
        for(let dep in deps){
            let parents = getParents(module.bundle.root, deps[dep]);
            if (parents.length === 1) orphans.push(deps[dep]);
        }
        // Delete the module. This must be done before deleting dependencies in case of circular dependencies.
        delete modules[id];
        delete bundle.cache[id];
        // Now delete the orphans.
        orphans.forEach((id)=>{
            hmrDelete(module.bundle.root, id);
        });
    } else if (bundle.parent) hmrDelete(bundle.parent, id);
}
function hmrAcceptCheck(bundle /*: ParcelRequire */ , id /*: string */ , depsByBundle /*: ?{ [string]: { [string]: string } }*/ ) {
    if (hmrAcceptCheckOne(bundle, id, depsByBundle)) return true;
    // Traverse parents breadth first. All possible ancestries must accept the HMR update, or we'll reload.
    let parents = getParents(module.bundle.root, id);
    let accepted = false;
    while(parents.length > 0){
        let v = parents.shift();
        let a = hmrAcceptCheckOne(v[0], v[1], null);
        if (a) // If this parent accepts, stop traversing upward, but still consider siblings.
        accepted = true;
        else {
            // Otherwise, queue the parents in the next level upward.
            let p = getParents(module.bundle.root, v[1]);
            if (p.length === 0) {
                // If there are no parents, then we've reached an entry without accepting. Reload.
                accepted = false;
                break;
            }
            parents.push(...p);
        }
    }
    return accepted;
}
function hmrAcceptCheckOne(bundle /*: ParcelRequire */ , id /*: string */ , depsByBundle /*: ?{ [string]: { [string]: string } }*/ ) {
    var modules = bundle.modules;
    if (!modules) return;
    if (depsByBundle && !depsByBundle[bundle.HMR_BUNDLE_ID]) {
        // If we reached the root bundle without finding where the asset should go,
        // there's nothing to do. Mark as "accepted" so we don't reload the page.
        if (!bundle.parent) return true;
        return hmrAcceptCheck(bundle.parent, id, depsByBundle);
    }
    if (checkedAssets[id]) return true;
    checkedAssets[id] = true;
    var cached = bundle.cache[id];
    assetsToDispose.push([
        bundle,
        id
    ]);
    if (!cached || cached.hot && cached.hot._acceptCallbacks.length) {
        assetsToAccept.push([
            bundle,
            id
        ]);
        return true;
    }
}
function hmrDispose(bundle /*: ParcelRequire */ , id /*: string */ ) {
    var cached = bundle.cache[id];
    bundle.hotData[id] = {};
    if (cached && cached.hot) cached.hot.data = bundle.hotData[id];
    if (cached && cached.hot && cached.hot._disposeCallbacks.length) cached.hot._disposeCallbacks.forEach(function(cb) {
        cb(bundle.hotData[id]);
    });
    delete bundle.cache[id];
}
function hmrAccept(bundle /*: ParcelRequire */ , id /*: string */ ) {
    // Execute the module.
    bundle(id);
    // Run the accept callbacks in the new version of the module.
    var cached = bundle.cache[id];
    if (cached && cached.hot && cached.hot._acceptCallbacks.length) cached.hot._acceptCallbacks.forEach(function(cb) {
        var assetsToAlsoAccept = cb(function() {
            return getParents(module.bundle.root, id);
        });
        if (assetsToAlsoAccept && assetsToAccept.length) {
            assetsToAlsoAccept.forEach(function(a) {
                hmrDispose(a[0], a[1]);
            });
            // $FlowFixMe[method-unbinding]
            assetsToAccept.push.apply(assetsToAccept, assetsToAlsoAccept);
        }
    });
}

},{}],"kNHcd":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "revealCategories", ()=>revealCategories);
parcelHelpers.export(exports, "hideCategories", ()=>hideCategories);
var _esnextMapGroupByJs = require("core-js/modules/esnext.map.group-by.js"); // pageWindow.addEventListener('click', goToImage)
var _esnextSymbolDisposeJs = require("core-js/modules/esnext.symbol.dispose.js");
var _webImmediateJs = require("core-js/modules/web.immediate.js");
var _runtime = require("regenerator-runtime/runtime");
var _categoriesJs = require("./categories.js");
var _homePageJs = require("./homePage.js");
// Modal windows:
//////////////////////////////////////////////////
// const modal = document.querySelector('.modal');
// const overlay = document.querySelector('.overlay');
// const btnCloseModal = document.querySelector('.close-modal');
// const btnCloseThanks = document.querySelector('.close-thanks');
// const subscribeImage = document.querySelector('#subscribe-image');
// const submitSubscribe = document.querySelector('#submit-subscribe');
// const subscribeEmail = document.querySelector('#subscribe-email');
// const subscribeLabel = document.querySelector('.subscribe-label');
// const thanksHide = document.querySelector('.hide');
// const closeModal = function () {
//   modal.style.display = 'none';
//   overlay.style.display = 'none';
// };
// const closeSubscribe = function () {
//   modal.style.display = 'none';
//   thanksHide.classList.remove('hide');
// };
// const closeThanks = function () {
//   thanksHide.classList.add('hide');
//   overlay.style.display = 'none';
// };
// btnCloseModal.addEventListener('click', closeModal);
// btnCloseThanks.addEventListener('click', closeThanks);
// overlay.addEventListener('click', closeModal);
// submitSubscribe.addEventListener('click', closeSubscribe);
// Modal windows end
//////////////////////////////////////////////////
//----------------------------------------------------
_homePageJs.checkId();
const menuBars = document.querySelector(".menubars-svg");
const menuBarsSVG = document.querySelector(".menubars-toggle");
const changeSVG = function() {
    const parent = document.querySelector(".menubars-toggle");
    parent.classList.toggle("close");
    const check = parent.classList.contains("close");
    let icon = "-svg";
    icon = (!check ? "close" : "menubars") + icon;
    document.querySelector("use").setAttribute("href", `#${icon}`);
};
menuBars.addEventListener("click", changeSVG);
// const getRect = parent.getClientRects()
// getRect.addEventListener('scroll', changeSVG);
// const generateMarkup = function () {
//   const parent = document.querySelector('.menubars-toggle');
//   const markup =
//   `<use xlink:href="#shoppingcart-svg"></use>`;
//   parent.remove(markup);
// };
//////////////////////////////////////////////////
// Categories reveal
const categoriesList = document.querySelector(".categories-list");
const categoriesTab = document.querySelector(".categories-tab");
const revealCategories = function() {
    categoriesList.classList.add("categories-list--active");
};
const hideCategories = function() {
    categoriesList.classList.remove("categories-list--active");
};
categoriesTab.addEventListener("mouseover", revealCategories);
categoriesTab.addEventListener("mouseleave", hideCategories);
// End categories reveal
//////////////////////////////////////////////////
// Go to top:
//////////////////////////////////////////////////
const goToTop = document.querySelector(".go-to-top");
const header = document.querySelector("header");
goToTop.addEventListener("click", function() {
    header.scrollIntoView({
        behavior: "smooth"
    });
});
// Go to top end
//////////////////////////////////////////////////
// Sticky navigation
//////////////////////////////////////////////////
// const menuHeight = menu.getBoundingClientRect().height;
const menu = document.querySelector(".menu");
const stickyMenu = function(entries) {
    const [entry] = entries;
    if (!entry.isIntersecting) menu.classList.add("sticky"), menu.classList.remove("hidden");
    else menu.classList.remove("sticky");
};
const headerObserver = new IntersectionObserver(stickyMenu, {
    root: null,
    threshold: 0
});
headerObserver.observe(header);
//Sticky navigation end
//////////////////////////////////////////////////
// Reveal sticky menu
//////////////////////////////////////////////////
const hideMenu = function(entries) {
    const [entry] = entries;
    if (!entry.isIntersecting) menu.classList.add("hidden");
};
const headerObserverTwo = new IntersectionObserver(hideMenu, {
    root: null,
    threshold: 0.2
});
headerObserverTwo.observe(header);
// Reveal end
//////////////////////////////////////////////////
// const imgs = document.querySelectorAll('.large-img-item');
// const imgReveal = function(entries, images) {
//   const [entry] = entries;
//   const [img] = images;
//   if (entry.isIntersecting) {
//     console.log(entries, entros);
//     img.classList.add('reveal')
//   }
// }
// imgReveal(imgs)
// const imgObserver = new IntersectionObserver(imgReveal, {
//   root: null,
//   threshold: 0,
// })
// imgObserver.observe(imgs[0],imgs[1]);
const images = document.querySelectorAll(".workshop-image");
let curImg = 0;
const maxImages = images.length;
const timeOut = function() {
    setTimeout(()=>{
        goToImage();
    }, 1000);
};
timeOut();
const goToImage = function(slide) {
    images.forEach((img)=>img.style.transform = `translateX(${-100 * slide}%)`);
    // images.forEach(img => (img.style.transform = `translateX(-100%)`));
    setTimeout(()=>{
        nextImage();
    }, 3000);
};
const nextImage = function() {
    if (curImg === maxImages - 1) curImg = 0;
    else curImg++;
    console.log(curImg);
    goToImage(curImg);
};

},{"core-js/modules/esnext.map.group-by.js":"4Df0M","core-js/modules/esnext.symbol.dispose.js":"cek62","core-js/modules/web.immediate.js":"gdCeX","regenerator-runtime/runtime":"cEkMy","./categories.js":"7YoyH","./homePage.js":"kKcwM","@parcel/transformer-js/src/esmodule-helpers.js":"1EoNj"}],"4Df0M":[function(require,module,exports) {
"use strict";
// TODO: Remove from `core-js@4`
require("a17114b75a3a7b98");

},{"a17114b75a3a7b98":"jKs2I"}],"jKs2I":[function(require,module,exports) {
"use strict";
var $ = require("3f5f4bb25cd57cd3");
var uncurryThis = require("c7ec7be16a5d6d7c");
var aCallable = require("7619a612c0f3d45e");
var requireObjectCoercible = require("dd9c13bc8bad2157");
var iterate = require("20e0f9859a8c7ae8");
var MapHelpers = require("be43eff0aef481b8");
var IS_PURE = require("fb03892f0b50744");
var Map = MapHelpers.Map;
var has = MapHelpers.has;
var get = MapHelpers.get;
var set = MapHelpers.set;
var push = uncurryThis([].push);
// `Map.groupBy` method
// https://github.com/tc39/proposal-array-grouping
$({
    target: "Map",
    stat: true,
    forced: IS_PURE
}, {
    groupBy: function groupBy(items, callbackfn) {
        requireObjectCoercible(items);
        aCallable(callbackfn);
        var map = new Map();
        var k = 0;
        iterate(items, function(value) {
            var key = callbackfn(value, k++);
            if (!has(map, key)) set(map, key, [
                value
            ]);
            else push(get(map, key), value);
        });
        return map;
    }
});

},{"3f5f4bb25cd57cd3":"8ZseB","c7ec7be16a5d6d7c":"5dlwx","7619a612c0f3d45e":"4759f","dd9c13bc8bad2157":"lphTy","20e0f9859a8c7ae8":"dKHVN","be43eff0aef481b8":"eQnHX","fb03892f0b50744":"9s932"}],"8ZseB":[function(require,module,exports) {
"use strict";
var global = require("28c3db3d6c48b0dc");
var getOwnPropertyDescriptor = require("7c3a0caafb6b305").f;
var createNonEnumerableProperty = require("d6eb0bc0fce08b6b");
var defineBuiltIn = require("cf9b03f60e131860");
var defineGlobalProperty = require("d4d8dda8ace91990");
var copyConstructorProperties = require("c03a31adcd593147");
var isForced = require("e395eafbbe71bc18");
/*
  options.target         - name of the target object
  options.global         - target is the global object
  options.stat           - export as static methods of target
  options.proto          - export as prototype methods of target
  options.real           - real prototype method for the `pure` version
  options.forced         - export even if the native feature is available
  options.bind           - bind methods to the target, required for the `pure` version
  options.wrap           - wrap constructors to preventing global pollution, required for the `pure` version
  options.unsafe         - use the simple assignment of property instead of delete + defineProperty
  options.sham           - add a flag to not completely full polyfills
  options.enumerable     - export as enumerable property
  options.dontCallGetSet - prevent calling a getter on target
  options.name           - the .name of the function if it does not match the key
*/ module.exports = function(options, source) {
    var TARGET = options.target;
    var GLOBAL = options.global;
    var STATIC = options.stat;
    var FORCED, target, key, targetProperty, sourceProperty, descriptor;
    if (GLOBAL) target = global;
    else if (STATIC) target = global[TARGET] || defineGlobalProperty(TARGET, {});
    else target = global[TARGET] && global[TARGET].prototype;
    if (target) for(key in source){
        sourceProperty = source[key];
        if (options.dontCallGetSet) {
            descriptor = getOwnPropertyDescriptor(target, key);
            targetProperty = descriptor && descriptor.value;
        } else targetProperty = target[key];
        FORCED = isForced(GLOBAL ? key : TARGET + (STATIC ? "." : "#") + key, options.forced);
        // contained in target
        if (!FORCED && targetProperty !== undefined) {
            if (typeof sourceProperty == typeof targetProperty) continue;
            copyConstructorProperties(sourceProperty, targetProperty);
        }
        // add a flag to not completely full polyfills
        if (options.sham || targetProperty && targetProperty.sham) createNonEnumerableProperty(sourceProperty, "sham", true);
        defineBuiltIn(target, key, sourceProperty, options);
    }
};

},{"28c3db3d6c48b0dc":"eFMTw","7c3a0caafb6b305":"fgdCf","d6eb0bc0fce08b6b":"asYSC","cf9b03f60e131860":"4psr8","d4d8dda8ace91990":"dcbW7","c03a31adcd593147":"e1GGh","e395eafbbe71bc18":"8ZjRn"}],"eFMTw":[function(require,module,exports) {
var global = arguments[3];
"use strict";
var check = function(it) {
    return it && it.Math === Math && it;
};
// https://github.com/zloirock/core-js/issues/86#issuecomment-115759028
module.exports = // eslint-disable-next-line es/no-global-this -- safe
check(typeof globalThis == "object" && globalThis) || check(typeof window == "object" && window) || // eslint-disable-next-line no-restricted-globals -- safe
check(typeof self == "object" && self) || check(typeof global == "object" && global) || check(typeof this == "object" && this) || // eslint-disable-next-line no-new-func -- fallback
function() {
    return this;
}() || Function("return this")();

},{}],"fgdCf":[function(require,module,exports) {
"use strict";
var DESCRIPTORS = require("770959f6c869d7b1");
var call = require("88616d22597bf0b8");
var propertyIsEnumerableModule = require("70d4bf5094c00ef0");
var createPropertyDescriptor = require("4212dbbf844549d5");
var toIndexedObject = require("fda2babe2b69fd4");
var toPropertyKey = require("69239414d6546163");
var hasOwn = require("2dcac74cffd2c7b6");
var IE8_DOM_DEFINE = require("82a3f39e9313203e");
// eslint-disable-next-line es/no-object-getownpropertydescriptor -- safe
var $getOwnPropertyDescriptor = Object.getOwnPropertyDescriptor;
// `Object.getOwnPropertyDescriptor` method
// https://tc39.es/ecma262/#sec-object.getownpropertydescriptor
exports.f = DESCRIPTORS ? $getOwnPropertyDescriptor : function getOwnPropertyDescriptor(O, P) {
    O = toIndexedObject(O);
    P = toPropertyKey(P);
    if (IE8_DOM_DEFINE) try {
        return $getOwnPropertyDescriptor(O, P);
    } catch (error) {}
    if (hasOwn(O, P)) return createPropertyDescriptor(!call(propertyIsEnumerableModule.f, O, P), O[P]);
};

},{"770959f6c869d7b1":"g0d7b","88616d22597bf0b8":"ig1Ze","70d4bf5094c00ef0":"dx0OE","4212dbbf844549d5":"lrBot","fda2babe2b69fd4":"4lJua","69239414d6546163":"b8KYy","2dcac74cffd2c7b6":"jzCfR","82a3f39e9313203e":"iKF59"}],"g0d7b":[function(require,module,exports) {
"use strict";
var fails = require("befe2477d779396");
// Detect IE8's incomplete defineProperty implementation
module.exports = !fails(function() {
    // eslint-disable-next-line es/no-object-defineproperty -- required for testing
    return Object.defineProperty({}, 1, {
        get: function() {
            return 7;
        }
    })[1] !== 7;
});

},{"befe2477d779396":"aPl1d"}],"aPl1d":[function(require,module,exports) {
"use strict";
module.exports = function(exec) {
    try {
        return !!exec();
    } catch (error) {
        return true;
    }
};

},{}],"ig1Ze":[function(require,module,exports) {
"use strict";
var NATIVE_BIND = require("5a687521f9146fb1");
var call = Function.prototype.call;
module.exports = NATIVE_BIND ? call.bind(call) : function() {
    return call.apply(call, arguments);
};

},{"5a687521f9146fb1":"5Du0W"}],"5Du0W":[function(require,module,exports) {
"use strict";
var fails = require("822269ea237265aa");
module.exports = !fails(function() {
    // eslint-disable-next-line es/no-function-prototype-bind -- safe
    var test = (function() {}).bind();
    // eslint-disable-next-line no-prototype-builtins -- safe
    return typeof test != "function" || test.hasOwnProperty("prototype");
});

},{"822269ea237265aa":"aPl1d"}],"dx0OE":[function(require,module,exports) {
"use strict";
var $propertyIsEnumerable = {}.propertyIsEnumerable;
// eslint-disable-next-line es/no-object-getownpropertydescriptor -- safe
var getOwnPropertyDescriptor = Object.getOwnPropertyDescriptor;
// Nashorn ~ JDK8 bug
var NASHORN_BUG = getOwnPropertyDescriptor && !$propertyIsEnumerable.call({
    1: 2
}, 1);
// `Object.prototype.propertyIsEnumerable` method implementation
// https://tc39.es/ecma262/#sec-object.prototype.propertyisenumerable
exports.f = NASHORN_BUG ? function propertyIsEnumerable(V) {
    var descriptor = getOwnPropertyDescriptor(this, V);
    return !!descriptor && descriptor.enumerable;
} : $propertyIsEnumerable;

},{}],"lrBot":[function(require,module,exports) {
"use strict";
module.exports = function(bitmap, value) {
    return {
        enumerable: !(bitmap & 1),
        configurable: !(bitmap & 2),
        writable: !(bitmap & 4),
        value: value
    };
};

},{}],"4lJua":[function(require,module,exports) {
"use strict";
// toObject with fallback for non-array-like ES3 strings
var IndexedObject = require("23b43cb9d39b921b");
var requireObjectCoercible = require("2bbae9478fd5d29b");
module.exports = function(it) {
    return IndexedObject(requireObjectCoercible(it));
};

},{"23b43cb9d39b921b":"gFGyv","2bbae9478fd5d29b":"lphTy"}],"gFGyv":[function(require,module,exports) {
"use strict";
var uncurryThis = require("bcd7494cdb5f7927");
var fails = require("b634eedac805454a");
var classof = require("ac04fc4b759f55cf");
var $Object = Object;
var split = uncurryThis("".split);
// fallback for non-array-like ES3 and non-enumerable old V8 strings
module.exports = fails(function() {
    // throws an error in rhino, see https://github.com/mozilla/rhino/issues/346
    // eslint-disable-next-line no-prototype-builtins -- safe
    return !$Object("z").propertyIsEnumerable(0);
}) ? function(it) {
    return classof(it) === "String" ? split(it, "") : $Object(it);
} : $Object;

},{"bcd7494cdb5f7927":"5dlwx","b634eedac805454a":"aPl1d","ac04fc4b759f55cf":"1lG5q"}],"5dlwx":[function(require,module,exports) {
"use strict";
var NATIVE_BIND = require("2b7ef4912e2ae897");
var FunctionPrototype = Function.prototype;
var call = FunctionPrototype.call;
var uncurryThisWithBind = NATIVE_BIND && FunctionPrototype.bind.bind(call, call);
module.exports = NATIVE_BIND ? uncurryThisWithBind : function(fn) {
    return function() {
        return call.apply(fn, arguments);
    };
};

},{"2b7ef4912e2ae897":"5Du0W"}],"1lG5q":[function(require,module,exports) {
"use strict";
var uncurryThis = require("36312244f6aaac73");
var toString = uncurryThis({}.toString);
var stringSlice = uncurryThis("".slice);
module.exports = function(it) {
    return stringSlice(toString(it), 8, -1);
};

},{"36312244f6aaac73":"5dlwx"}],"lphTy":[function(require,module,exports) {
"use strict";
var isNullOrUndefined = require("ae065876409d353");
var $TypeError = TypeError;
// `RequireObjectCoercible` abstract operation
// https://tc39.es/ecma262/#sec-requireobjectcoercible
module.exports = function(it) {
    if (isNullOrUndefined(it)) throw new $TypeError("Can't call method on " + it);
    return it;
};

},{"ae065876409d353":"6t8fS"}],"6t8fS":[function(require,module,exports) {
"use strict";
// we can't use just `it == null` since of `document.all` special case
// https://tc39.es/ecma262/#sec-IsHTMLDDA-internal-slot-aec
module.exports = function(it) {
    return it === null || it === undefined;
};

},{}],"b8KYy":[function(require,module,exports) {
"use strict";
var toPrimitive = require("4470d53ed4cbf54");
var isSymbol = require("4174921dbf27cfc9");
// `ToPropertyKey` abstract operation
// https://tc39.es/ecma262/#sec-topropertykey
module.exports = function(argument) {
    var key = toPrimitive(argument, "string");
    return isSymbol(key) ? key : key + "";
};

},{"4470d53ed4cbf54":"1Xk2E","4174921dbf27cfc9":"4jXbb"}],"1Xk2E":[function(require,module,exports) {
"use strict";
var call = require("224ac22e2cde85ad");
var isObject = require("8470cad642ea3f3a");
var isSymbol = require("70ca6db5fb9db69c");
var getMethod = require("cdf011c5d7f1dd10");
var ordinaryToPrimitive = require("5f44e53293c894f2");
var wellKnownSymbol = require("7ebad9c6350a7b09");
var $TypeError = TypeError;
var TO_PRIMITIVE = wellKnownSymbol("toPrimitive");
// `ToPrimitive` abstract operation
// https://tc39.es/ecma262/#sec-toprimitive
module.exports = function(input, pref) {
    if (!isObject(input) || isSymbol(input)) return input;
    var exoticToPrim = getMethod(input, TO_PRIMITIVE);
    var result;
    if (exoticToPrim) {
        if (pref === undefined) pref = "default";
        result = call(exoticToPrim, input, pref);
        if (!isObject(result) || isSymbol(result)) return result;
        throw new $TypeError("Can't convert object to primitive value");
    }
    if (pref === undefined) pref = "number";
    return ordinaryToPrimitive(input, pref);
};

},{"224ac22e2cde85ad":"ig1Ze","8470cad642ea3f3a":"dO5RT","70ca6db5fb9db69c":"4jXbb","cdf011c5d7f1dd10":"hQFbe","5f44e53293c894f2":"4u3RV","7ebad9c6350a7b09":"9Ke4i"}],"dO5RT":[function(require,module,exports) {
"use strict";
var isCallable = require("167de0f5b3085817");
module.exports = function(it) {
    return typeof it == "object" ? it !== null : isCallable(it);
};

},{"167de0f5b3085817":"5rehw"}],"5rehw":[function(require,module,exports) {
"use strict";
// https://tc39.es/ecma262/#sec-IsHTMLDDA-internal-slot
var documentAll = typeof document == "object" && document.all;
// `IsCallable` abstract operation
// https://tc39.es/ecma262/#sec-iscallable
// eslint-disable-next-line unicorn/no-typeof-undefined -- required for testing
module.exports = typeof documentAll == "undefined" && documentAll !== undefined ? function(argument) {
    return typeof argument == "function" || argument === documentAll;
} : function(argument) {
    return typeof argument == "function";
};

},{}],"4jXbb":[function(require,module,exports) {
"use strict";
var getBuiltIn = require("f541228e8eb7be2c");
var isCallable = require("b1baf4a31a990a8e");
var isPrototypeOf = require("e253aefebd23cbe7");
var USE_SYMBOL_AS_UID = require("2301810dcf39cd1a");
var $Object = Object;
module.exports = USE_SYMBOL_AS_UID ? function(it) {
    return typeof it == "symbol";
} : function(it) {
    var $Symbol = getBuiltIn("Symbol");
    return isCallable($Symbol) && isPrototypeOf($Symbol.prototype, $Object(it));
};

},{"f541228e8eb7be2c":"ft0h7","b1baf4a31a990a8e":"5rehw","e253aefebd23cbe7":"1Pde5","2301810dcf39cd1a":"eLQwf"}],"ft0h7":[function(require,module,exports) {
"use strict";
var global = require("876e4be3328cdc96");
var isCallable = require("ca51b0caf683e363");
var aFunction = function(argument) {
    return isCallable(argument) ? argument : undefined;
};
module.exports = function(namespace, method) {
    return arguments.length < 2 ? aFunction(global[namespace]) : global[namespace] && global[namespace][method];
};

},{"876e4be3328cdc96":"eFMTw","ca51b0caf683e363":"5rehw"}],"1Pde5":[function(require,module,exports) {
"use strict";
var uncurryThis = require("c5f8484160ca34d4");
module.exports = uncurryThis({}.isPrototypeOf);

},{"c5f8484160ca34d4":"5dlwx"}],"eLQwf":[function(require,module,exports) {
"use strict";
/* eslint-disable es/no-symbol -- required for testing */ var NATIVE_SYMBOL = require("4355a88b94cc1fc");
module.exports = NATIVE_SYMBOL && !Symbol.sham && typeof Symbol.iterator == "symbol";

},{"4355a88b94cc1fc":"xSVDX"}],"xSVDX":[function(require,module,exports) {
"use strict";
/* eslint-disable es/no-symbol -- required for testing */ var V8_VERSION = require("777cf5eced235ad3");
var fails = require("e451964e16a5b5a3");
var global = require("3ac09a9c8ddba57a");
var $String = global.String;
// eslint-disable-next-line es/no-object-getownpropertysymbols -- required for testing
module.exports = !!Object.getOwnPropertySymbols && !fails(function() {
    var symbol = Symbol("symbol detection");
    // Chrome 38 Symbol has incorrect toString conversion
    // `get-own-property-symbols` polyfill symbols converted to object are not Symbol instances
    // nb: Do not call `String` directly to avoid this being optimized out to `symbol+''` which will,
    // of course, fail.
    return !$String(symbol) || !(Object(symbol) instanceof Symbol) || // Chrome 38-40 symbols are not inherited from DOM collections prototypes to instances
    !Symbol.sham && V8_VERSION && V8_VERSION < 41;
});

},{"777cf5eced235ad3":"6kbh8","e451964e16a5b5a3":"aPl1d","3ac09a9c8ddba57a":"eFMTw"}],"6kbh8":[function(require,module,exports) {
"use strict";
var global = require("ed1ed62dfd2ddb7e");
var userAgent = require("235fe58f5d6d5ed1");
var process = global.process;
var Deno = global.Deno;
var versions = process && process.versions || Deno && Deno.version;
var v8 = versions && versions.v8;
var match, version;
if (v8) {
    match = v8.split(".");
    // in old Chrome, versions of V8 isn't V8 = Chrome / 10
    // but their correct versions are not interesting for us
    version = match[0] > 0 && match[0] < 4 ? 1 : +(match[0] + match[1]);
}
// BrowserFS NodeJS `process` polyfill incorrectly set `.v8` to `0.0`
// so check `userAgent` even if `.v8` exists, but 0
if (!version && userAgent) {
    match = userAgent.match(/Edge\/(\d+)/);
    if (!match || match[1] >= 74) {
        match = userAgent.match(/Chrome\/(\d+)/);
        if (match) version = +match[1];
    }
}
module.exports = version;

},{"ed1ed62dfd2ddb7e":"eFMTw","235fe58f5d6d5ed1":"a2XdK"}],"a2XdK":[function(require,module,exports) {
"use strict";
module.exports = typeof navigator != "undefined" && String(navigator.userAgent) || "";

},{}],"hQFbe":[function(require,module,exports) {
"use strict";
var aCallable = require("dc790d942fea6cbb");
var isNullOrUndefined = require("ec048a8903798dfb");
// `GetMethod` abstract operation
// https://tc39.es/ecma262/#sec-getmethod
module.exports = function(V, P) {
    var func = V[P];
    return isNullOrUndefined(func) ? undefined : aCallable(func);
};

},{"dc790d942fea6cbb":"4759f","ec048a8903798dfb":"6t8fS"}],"4759f":[function(require,module,exports) {
"use strict";
var isCallable = require("a69e817164f5e4d5");
var tryToString = require("f2e24861a08fe511");
var $TypeError = TypeError;
// `Assert: IsCallable(argument) is true`
module.exports = function(argument) {
    if (isCallable(argument)) return argument;
    throw new $TypeError(tryToString(argument) + " is not a function");
};

},{"a69e817164f5e4d5":"5rehw","f2e24861a08fe511":"91PMe"}],"91PMe":[function(require,module,exports) {
"use strict";
var $String = String;
module.exports = function(argument) {
    try {
        return $String(argument);
    } catch (error) {
        return "Object";
    }
};

},{}],"4u3RV":[function(require,module,exports) {
"use strict";
var call = require("5644a3cd90fa5aa9");
var isCallable = require("59183028f4d67d0d");
var isObject = require("c7fd07678bea6caf");
var $TypeError = TypeError;
// `OrdinaryToPrimitive` abstract operation
// https://tc39.es/ecma262/#sec-ordinarytoprimitive
module.exports = function(input, pref) {
    var fn, val;
    if (pref === "string" && isCallable(fn = input.toString) && !isObject(val = call(fn, input))) return val;
    if (isCallable(fn = input.valueOf) && !isObject(val = call(fn, input))) return val;
    if (pref !== "string" && isCallable(fn = input.toString) && !isObject(val = call(fn, input))) return val;
    throw new $TypeError("Can't convert object to primitive value");
};

},{"5644a3cd90fa5aa9":"ig1Ze","59183028f4d67d0d":"5rehw","c7fd07678bea6caf":"dO5RT"}],"9Ke4i":[function(require,module,exports) {
"use strict";
var global = require("2548af678c6eb766");
var shared = require("8445c50361b0cad0");
var hasOwn = require("99e72cf17bc6d213");
var uid = require("61d2ffd6c193e994");
var NATIVE_SYMBOL = require("67eb52ff96a78b8f");
var USE_SYMBOL_AS_UID = require("7963dca0fd6b1b73");
var Symbol = global.Symbol;
var WellKnownSymbolsStore = shared("wks");
var createWellKnownSymbol = USE_SYMBOL_AS_UID ? Symbol["for"] || Symbol : Symbol && Symbol.withoutSetter || uid;
module.exports = function(name) {
    if (!hasOwn(WellKnownSymbolsStore, name)) WellKnownSymbolsStore[name] = NATIVE_SYMBOL && hasOwn(Symbol, name) ? Symbol[name] : createWellKnownSymbol("Symbol." + name);
    return WellKnownSymbolsStore[name];
};

},{"2548af678c6eb766":"eFMTw","8445c50361b0cad0":"eeGCw","99e72cf17bc6d213":"jzCfR","61d2ffd6c193e994":"b7HsY","67eb52ff96a78b8f":"xSVDX","7963dca0fd6b1b73":"eLQwf"}],"eeGCw":[function(require,module,exports) {
"use strict";
var store = require("f10b92e089a5787c");
module.exports = function(key, value) {
    return store[key] || (store[key] = value || {});
};

},{"f10b92e089a5787c":"gF6tB"}],"gF6tB":[function(require,module,exports) {
"use strict";
var IS_PURE = require("5da4d92a8ffbc011");
var globalThis = require("1668d3ff6a479dcf");
var defineGlobalProperty = require("53520317878a3327");
var SHARED = "__core-js_shared__";
var store = module.exports = globalThis[SHARED] || defineGlobalProperty(SHARED, {});
(store.versions || (store.versions = [])).push({
    version: "3.36.0",
    mode: IS_PURE ? "pure" : "global",
    copyright: "\xa9 2014-2024 Denis Pushkarev (zloirock.ru)",
    license: "https://github.com/zloirock/core-js/blob/v3.36.0/LICENSE",
    source: "https://github.com/zloirock/core-js"
});

},{"5da4d92a8ffbc011":"9s932","1668d3ff6a479dcf":"eFMTw","53520317878a3327":"dcbW7"}],"9s932":[function(require,module,exports) {
"use strict";
module.exports = false;

},{}],"dcbW7":[function(require,module,exports) {
"use strict";
var global = require("3c8cb61ef40c358f");
// eslint-disable-next-line es/no-object-defineproperty -- safe
var defineProperty = Object.defineProperty;
module.exports = function(key, value) {
    try {
        defineProperty(global, key, {
            value: value,
            configurable: true,
            writable: true
        });
    } catch (error) {
        global[key] = value;
    }
    return value;
};

},{"3c8cb61ef40c358f":"eFMTw"}],"jzCfR":[function(require,module,exports) {
"use strict";
var uncurryThis = require("e35d12874e20a19a");
var toObject = require("7a82650474e5dec9");
var hasOwnProperty = uncurryThis({}.hasOwnProperty);
// `HasOwnProperty` abstract operation
// https://tc39.es/ecma262/#sec-hasownproperty
// eslint-disable-next-line es/no-object-hasown -- safe
module.exports = Object.hasOwn || function hasOwn(it, key) {
    return hasOwnProperty(toObject(it), key);
};

},{"e35d12874e20a19a":"5dlwx","7a82650474e5dec9":"364wh"}],"364wh":[function(require,module,exports) {
"use strict";
var requireObjectCoercible = require("f33281130abefc45");
var $Object = Object;
// `ToObject` abstract operation
// https://tc39.es/ecma262/#sec-toobject
module.exports = function(argument) {
    return $Object(requireObjectCoercible(argument));
};

},{"f33281130abefc45":"lphTy"}],"b7HsY":[function(require,module,exports) {
"use strict";
var uncurryThis = require("ebd76737bd60f363");
var id = 0;
var postfix = Math.random();
var toString = uncurryThis(1.0.toString);
module.exports = function(key) {
    return "Symbol(" + (key === undefined ? "" : key) + ")_" + toString(++id + postfix, 36);
};

},{"ebd76737bd60f363":"5dlwx"}],"iKF59":[function(require,module,exports) {
"use strict";
var DESCRIPTORS = require("cc4b43257df324b5");
var fails = require("15e8076fb32f7d");
var createElement = require("adf29b8ede811571");
// Thanks to IE8 for its funny defineProperty
module.exports = !DESCRIPTORS && !fails(function() {
    // eslint-disable-next-line es/no-object-defineproperty -- required for testing
    return Object.defineProperty(createElement("div"), "a", {
        get: function() {
            return 7;
        }
    }).a !== 7;
});

},{"cc4b43257df324b5":"g0d7b","15e8076fb32f7d":"aPl1d","adf29b8ede811571":"k4bBe"}],"k4bBe":[function(require,module,exports) {
"use strict";
var global = require("fb68ee4cf55b2476");
var isObject = require("2b79852bcd9bc128");
var document = global.document;
// typeof document.createElement is 'object' in old IE
var EXISTS = isObject(document) && isObject(document.createElement);
module.exports = function(it) {
    return EXISTS ? document.createElement(it) : {};
};

},{"fb68ee4cf55b2476":"eFMTw","2b79852bcd9bc128":"dO5RT"}],"asYSC":[function(require,module,exports) {
"use strict";
var DESCRIPTORS = require("80aeca642c1c4479");
var definePropertyModule = require("543ee13e6822d48c");
var createPropertyDescriptor = require("252747b057de1150");
module.exports = DESCRIPTORS ? function(object, key, value) {
    return definePropertyModule.f(object, key, createPropertyDescriptor(1, value));
} : function(object, key, value) {
    object[key] = value;
    return object;
};

},{"80aeca642c1c4479":"g0d7b","543ee13e6822d48c":"01b9Y","252747b057de1150":"lrBot"}],"01b9Y":[function(require,module,exports) {
"use strict";
var DESCRIPTORS = require("eb7b023c966b6680");
var IE8_DOM_DEFINE = require("460343ab16c94efc");
var V8_PROTOTYPE_DEFINE_BUG = require("97377ab28881e05c");
var anObject = require("8f814a60903d0c66");
var toPropertyKey = require("f6128c7c484e8972");
var $TypeError = TypeError;
// eslint-disable-next-line es/no-object-defineproperty -- safe
var $defineProperty = Object.defineProperty;
// eslint-disable-next-line es/no-object-getownpropertydescriptor -- safe
var $getOwnPropertyDescriptor = Object.getOwnPropertyDescriptor;
var ENUMERABLE = "enumerable";
var CONFIGURABLE = "configurable";
var WRITABLE = "writable";
// `Object.defineProperty` method
// https://tc39.es/ecma262/#sec-object.defineproperty
exports.f = DESCRIPTORS ? V8_PROTOTYPE_DEFINE_BUG ? function defineProperty(O, P, Attributes) {
    anObject(O);
    P = toPropertyKey(P);
    anObject(Attributes);
    if (typeof O === "function" && P === "prototype" && "value" in Attributes && WRITABLE in Attributes && !Attributes[WRITABLE]) {
        var current = $getOwnPropertyDescriptor(O, P);
        if (current && current[WRITABLE]) {
            O[P] = Attributes.value;
            Attributes = {
                configurable: CONFIGURABLE in Attributes ? Attributes[CONFIGURABLE] : current[CONFIGURABLE],
                enumerable: ENUMERABLE in Attributes ? Attributes[ENUMERABLE] : current[ENUMERABLE],
                writable: false
            };
        }
    }
    return $defineProperty(O, P, Attributes);
} : $defineProperty : function defineProperty(O, P, Attributes) {
    anObject(O);
    P = toPropertyKey(P);
    anObject(Attributes);
    if (IE8_DOM_DEFINE) try {
        return $defineProperty(O, P, Attributes);
    } catch (error) {}
    if ("get" in Attributes || "set" in Attributes) throw new $TypeError("Accessors not supported");
    if ("value" in Attributes) O[P] = Attributes.value;
    return O;
};

},{"eb7b023c966b6680":"g0d7b","460343ab16c94efc":"iKF59","97377ab28881e05c":"k71tM","8f814a60903d0c66":"gbHJT","f6128c7c484e8972":"b8KYy"}],"k71tM":[function(require,module,exports) {
"use strict";
var DESCRIPTORS = require("8c2321b3e816623f");
var fails = require("d431eabce5af5a5e");
// V8 ~ Chrome 36-
// https://bugs.chromium.org/p/v8/issues/detail?id=3334
module.exports = DESCRIPTORS && fails(function() {
    // eslint-disable-next-line es/no-object-defineproperty -- required for testing
    return Object.defineProperty(function() {}, "prototype", {
        value: 42,
        writable: false
    }).prototype !== 42;
});

},{"8c2321b3e816623f":"g0d7b","d431eabce5af5a5e":"aPl1d"}],"gbHJT":[function(require,module,exports) {
"use strict";
var isObject = require("bed5495401e80046");
var $String = String;
var $TypeError = TypeError;
// `Assert: Type(argument) is Object`
module.exports = function(argument) {
    if (isObject(argument)) return argument;
    throw new $TypeError($String(argument) + " is not an object");
};

},{"bed5495401e80046":"dO5RT"}],"4psr8":[function(require,module,exports) {
"use strict";
var isCallable = require("1942a97871045e87");
var definePropertyModule = require("af3958753eb7e2e3");
var makeBuiltIn = require("d66397fe6c97515b");
var defineGlobalProperty = require("d50ceb856e812eda");
module.exports = function(O, key, value, options) {
    if (!options) options = {};
    var simple = options.enumerable;
    var name = options.name !== undefined ? options.name : key;
    if (isCallable(value)) makeBuiltIn(value, name, options);
    if (options.global) {
        if (simple) O[key] = value;
        else defineGlobalProperty(key, value);
    } else {
        try {
            if (!options.unsafe) delete O[key];
            else if (O[key]) simple = true;
        } catch (error) {}
        if (simple) O[key] = value;
        else definePropertyModule.f(O, key, {
            value: value,
            enumerable: false,
            configurable: !options.nonConfigurable,
            writable: !options.nonWritable
        });
    }
    return O;
};

},{"1942a97871045e87":"5rehw","af3958753eb7e2e3":"01b9Y","d66397fe6c97515b":"7nH70","d50ceb856e812eda":"dcbW7"}],"7nH70":[function(require,module,exports) {
"use strict";
var uncurryThis = require("bc01ea288dfea2e9");
var fails = require("71559bca09636af5");
var isCallable = require("a140ce6c4817562c");
var hasOwn = require("8f14b4805311e910");
var DESCRIPTORS = require("5564f9f72647ab14");
var CONFIGURABLE_FUNCTION_NAME = require("5d75599f717ab886").CONFIGURABLE;
var inspectSource = require("fccb70d0fb749f9c");
var InternalStateModule = require("514d8e049266f5e5");
var enforceInternalState = InternalStateModule.enforce;
var getInternalState = InternalStateModule.get;
var $String = String;
// eslint-disable-next-line es/no-object-defineproperty -- safe
var defineProperty = Object.defineProperty;
var stringSlice = uncurryThis("".slice);
var replace = uncurryThis("".replace);
var join = uncurryThis([].join);
var CONFIGURABLE_LENGTH = DESCRIPTORS && !fails(function() {
    return defineProperty(function() {}, "length", {
        value: 8
    }).length !== 8;
});
var TEMPLATE = String(String).split("String");
var makeBuiltIn = module.exports = function(value, name, options) {
    if (stringSlice($String(name), 0, 7) === "Symbol(") name = "[" + replace($String(name), /^Symbol\(([^)]*)\).*$/, "$1") + "]";
    if (options && options.getter) name = "get " + name;
    if (options && options.setter) name = "set " + name;
    if (!hasOwn(value, "name") || CONFIGURABLE_FUNCTION_NAME && value.name !== name) {
        if (DESCRIPTORS) defineProperty(value, "name", {
            value: name,
            configurable: true
        });
        else value.name = name;
    }
    if (CONFIGURABLE_LENGTH && options && hasOwn(options, "arity") && value.length !== options.arity) defineProperty(value, "length", {
        value: options.arity
    });
    try {
        if (options && hasOwn(options, "constructor") && options.constructor) {
            if (DESCRIPTORS) defineProperty(value, "prototype", {
                writable: false
            });
        } else if (value.prototype) value.prototype = undefined;
    } catch (error) {}
    var state = enforceInternalState(value);
    if (!hasOwn(state, "source")) state.source = join(TEMPLATE, typeof name == "string" ? name : "");
    return value;
};
// add fake Function#toString for correct work wrapped methods / constructors with methods like LoDash isNative
// eslint-disable-next-line no-extend-native -- required
Function.prototype.toString = makeBuiltIn(function toString() {
    return isCallable(this) && getInternalState(this).source || inspectSource(this);
}, "toString");

},{"bc01ea288dfea2e9":"5dlwx","71559bca09636af5":"aPl1d","a140ce6c4817562c":"5rehw","8f14b4805311e910":"jzCfR","5564f9f72647ab14":"g0d7b","5d75599f717ab886":"i4h6f","fccb70d0fb749f9c":"hx5Px","514d8e049266f5e5":"66b05"}],"i4h6f":[function(require,module,exports) {
"use strict";
var DESCRIPTORS = require("a4382c59b00b3553");
var hasOwn = require("698dac4356d12bf9");
var FunctionPrototype = Function.prototype;
// eslint-disable-next-line es/no-object-getownpropertydescriptor -- safe
var getDescriptor = DESCRIPTORS && Object.getOwnPropertyDescriptor;
var EXISTS = hasOwn(FunctionPrototype, "name");
// additional protection from minified / mangled / dropped function names
var PROPER = EXISTS && (function something() {}).name === "something";
var CONFIGURABLE = EXISTS && (!DESCRIPTORS || DESCRIPTORS && getDescriptor(FunctionPrototype, "name").configurable);
module.exports = {
    EXISTS: EXISTS,
    PROPER: PROPER,
    CONFIGURABLE: CONFIGURABLE
};

},{"a4382c59b00b3553":"g0d7b","698dac4356d12bf9":"jzCfR"}],"hx5Px":[function(require,module,exports) {
"use strict";
var uncurryThis = require("322acc98836eeadb");
var isCallable = require("e26e275c297ec");
var store = require("3717325e80cb852a");
var functionToString = uncurryThis(Function.toString);
// this helper broken in `core-js@3.4.1-3.4.4`, so we can't use `shared` helper
if (!isCallable(store.inspectSource)) store.inspectSource = function(it) {
    return functionToString(it);
};
module.exports = store.inspectSource;

},{"322acc98836eeadb":"5dlwx","e26e275c297ec":"5rehw","3717325e80cb852a":"gF6tB"}],"66b05":[function(require,module,exports) {
"use strict";
var NATIVE_WEAK_MAP = require("96e11d7d612a409d");
var global = require("72dbebc85b8cacb5");
var isObject = require("4efac7d742c08267");
var createNonEnumerableProperty = require("b8e482cd83509a71");
var hasOwn = require("c60929a5e2e9a856");
var shared = require("a78f22f737986dce");
var sharedKey = require("ba6c5795c6f30728");
var hiddenKeys = require("cde5466f73985040");
var OBJECT_ALREADY_INITIALIZED = "Object already initialized";
var TypeError = global.TypeError;
var WeakMap = global.WeakMap;
var set, get, has;
var enforce = function(it) {
    return has(it) ? get(it) : set(it, {});
};
var getterFor = function(TYPE) {
    return function(it) {
        var state;
        if (!isObject(it) || (state = get(it)).type !== TYPE) throw new TypeError("Incompatible receiver, " + TYPE + " required");
        return state;
    };
};
if (NATIVE_WEAK_MAP || shared.state) {
    var store = shared.state || (shared.state = new WeakMap());
    /* eslint-disable no-self-assign -- prototype methods protection */ store.get = store.get;
    store.has = store.has;
    store.set = store.set;
    /* eslint-enable no-self-assign -- prototype methods protection */ set = function(it, metadata) {
        if (store.has(it)) throw new TypeError(OBJECT_ALREADY_INITIALIZED);
        metadata.facade = it;
        store.set(it, metadata);
        return metadata;
    };
    get = function(it) {
        return store.get(it) || {};
    };
    has = function(it) {
        return store.has(it);
    };
} else {
    var STATE = sharedKey("state");
    hiddenKeys[STATE] = true;
    set = function(it, metadata) {
        if (hasOwn(it, STATE)) throw new TypeError(OBJECT_ALREADY_INITIALIZED);
        metadata.facade = it;
        createNonEnumerableProperty(it, STATE, metadata);
        return metadata;
    };
    get = function(it) {
        return hasOwn(it, STATE) ? it[STATE] : {};
    };
    has = function(it) {
        return hasOwn(it, STATE);
    };
}
module.exports = {
    set: set,
    get: get,
    has: has,
    enforce: enforce,
    getterFor: getterFor
};

},{"96e11d7d612a409d":"58ZTO","72dbebc85b8cacb5":"eFMTw","4efac7d742c08267":"dO5RT","b8e482cd83509a71":"asYSC","c60929a5e2e9a856":"jzCfR","a78f22f737986dce":"gF6tB","ba6c5795c6f30728":"8AnpY","cde5466f73985040":"2V42r"}],"58ZTO":[function(require,module,exports) {
"use strict";
var global = require("20e6f5989fd07167");
var isCallable = require("e2417de715f84a21");
var WeakMap = global.WeakMap;
module.exports = isCallable(WeakMap) && /native code/.test(String(WeakMap));

},{"20e6f5989fd07167":"eFMTw","e2417de715f84a21":"5rehw"}],"8AnpY":[function(require,module,exports) {
"use strict";
var shared = require("8c1be6c9e4141d6b");
var uid = require("b80798e0674cb953");
var keys = shared("keys");
module.exports = function(key) {
    return keys[key] || (keys[key] = uid(key));
};

},{"8c1be6c9e4141d6b":"eeGCw","b80798e0674cb953":"b7HsY"}],"2V42r":[function(require,module,exports) {
"use strict";
module.exports = {};

},{}],"e1GGh":[function(require,module,exports) {
"use strict";
var hasOwn = require("26681658ee1ffb8c");
var ownKeys = require("bf8a9cf9f82d314");
var getOwnPropertyDescriptorModule = require("659d088560ae10c7");
var definePropertyModule = require("4bb4558676edeb1b");
module.exports = function(target, source, exceptions) {
    var keys = ownKeys(source);
    var defineProperty = definePropertyModule.f;
    var getOwnPropertyDescriptor = getOwnPropertyDescriptorModule.f;
    for(var i = 0; i < keys.length; i++){
        var key = keys[i];
        if (!hasOwn(target, key) && !(exceptions && hasOwn(exceptions, key))) defineProperty(target, key, getOwnPropertyDescriptor(source, key));
    }
};

},{"26681658ee1ffb8c":"jzCfR","bf8a9cf9f82d314":"hBQeL","659d088560ae10c7":"fgdCf","4bb4558676edeb1b":"01b9Y"}],"hBQeL":[function(require,module,exports) {
"use strict";
var getBuiltIn = require("a6585ff39b4190ce");
var uncurryThis = require("93b95012ad94d766");
var getOwnPropertyNamesModule = require("5ff326e7603dbef3");
var getOwnPropertySymbolsModule = require("7f8598688d1e5e53");
var anObject = require("39e55fb5b7ab5f6e");
var concat = uncurryThis([].concat);
// all object keys, includes non-enumerable and symbols
module.exports = getBuiltIn("Reflect", "ownKeys") || function ownKeys(it) {
    var keys = getOwnPropertyNamesModule.f(anObject(it));
    var getOwnPropertySymbols = getOwnPropertySymbolsModule.f;
    return getOwnPropertySymbols ? concat(keys, getOwnPropertySymbols(it)) : keys;
};

},{"a6585ff39b4190ce":"ft0h7","93b95012ad94d766":"5dlwx","5ff326e7603dbef3":"d26uH","7f8598688d1e5e53":"d2s7r","39e55fb5b7ab5f6e":"gbHJT"}],"d26uH":[function(require,module,exports) {
"use strict";
var internalObjectKeys = require("c8f46779428a1a96");
var enumBugKeys = require("45822d044c957715");
var hiddenKeys = enumBugKeys.concat("length", "prototype");
// `Object.getOwnPropertyNames` method
// https://tc39.es/ecma262/#sec-object.getownpropertynames
// eslint-disable-next-line es/no-object-getownpropertynames -- safe
exports.f = Object.getOwnPropertyNames || function getOwnPropertyNames(O) {
    return internalObjectKeys(O, hiddenKeys);
};

},{"c8f46779428a1a96":"cumbq","45822d044c957715":"cvVbn"}],"cumbq":[function(require,module,exports) {
"use strict";
var uncurryThis = require("24441252447f5");
var hasOwn = require("83a620676e6fa152");
var toIndexedObject = require("8ec61ee206fc139f");
var indexOf = require("cfca3bd60face2c").indexOf;
var hiddenKeys = require("86b851d4b6282751");
var push = uncurryThis([].push);
module.exports = function(object, names) {
    var O = toIndexedObject(object);
    var i = 0;
    var result = [];
    var key;
    for(key in O)!hasOwn(hiddenKeys, key) && hasOwn(O, key) && push(result, key);
    // Don't enum bug & hidden keys
    while(names.length > i)if (hasOwn(O, key = names[i++])) ~indexOf(result, key) || push(result, key);
    return result;
};

},{"24441252447f5":"5dlwx","83a620676e6fa152":"jzCfR","8ec61ee206fc139f":"4lJua","cfca3bd60face2c":"k0xbL","86b851d4b6282751":"2V42r"}],"k0xbL":[function(require,module,exports) {
"use strict";
var toIndexedObject = require("1a77ea40b7f5b939");
var toAbsoluteIndex = require("8c555dc2347201f1");
var lengthOfArrayLike = require("cf55014c53420943");
// `Array.prototype.{ indexOf, includes }` methods implementation
var createMethod = function(IS_INCLUDES) {
    return function($this, el, fromIndex) {
        var O = toIndexedObject($this);
        var length = lengthOfArrayLike(O);
        if (length === 0) return !IS_INCLUDES && -1;
        var index = toAbsoluteIndex(fromIndex, length);
        var value;
        // Array#includes uses SameValueZero equality algorithm
        // eslint-disable-next-line no-self-compare -- NaN check
        if (IS_INCLUDES && el !== el) while(length > index){
            value = O[index++];
            // eslint-disable-next-line no-self-compare -- NaN check
            if (value !== value) return true;
        // Array#indexOf ignores holes, Array#includes - not
        }
        else for(; length > index; index++){
            if ((IS_INCLUDES || index in O) && O[index] === el) return IS_INCLUDES || index || 0;
        }
        return !IS_INCLUDES && -1;
    };
};
module.exports = {
    // `Array.prototype.includes` method
    // https://tc39.es/ecma262/#sec-array.prototype.includes
    includes: createMethod(true),
    // `Array.prototype.indexOf` method
    // https://tc39.es/ecma262/#sec-array.prototype.indexof
    indexOf: createMethod(false)
};

},{"1a77ea40b7f5b939":"4lJua","8c555dc2347201f1":"ceIQq","cf55014c53420943":"26VTo"}],"ceIQq":[function(require,module,exports) {
"use strict";
var toIntegerOrInfinity = require("1655edc4be352785");
var max = Math.max;
var min = Math.min;
// Helper for a popular repeating case of the spec:
// Let integer be ? ToInteger(index).
// If integer < 0, let result be max((length + integer), 0); else let result be min(integer, length).
module.exports = function(index, length) {
    var integer = toIntegerOrInfinity(index);
    return integer < 0 ? max(integer + length, 0) : min(integer, length);
};

},{"1655edc4be352785":"apndu"}],"apndu":[function(require,module,exports) {
"use strict";
var trunc = require("11aa242e2d8a3ea3");
// `ToIntegerOrInfinity` abstract operation
// https://tc39.es/ecma262/#sec-tointegerorinfinity
module.exports = function(argument) {
    var number = +argument;
    // eslint-disable-next-line no-self-compare -- NaN check
    return number !== number || number === 0 ? 0 : trunc(number);
};

},{"11aa242e2d8a3ea3":"i2UcM"}],"i2UcM":[function(require,module,exports) {
"use strict";
var ceil = Math.ceil;
var floor = Math.floor;
// `Math.trunc` method
// https://tc39.es/ecma262/#sec-math.trunc
// eslint-disable-next-line es/no-math-trunc -- safe
module.exports = Math.trunc || function trunc(x) {
    var n = +x;
    return (n > 0 ? floor : ceil)(n);
};

},{}],"26VTo":[function(require,module,exports) {
"use strict";
var toLength = require("49f1923fd7998a8d");
// `LengthOfArrayLike` abstract operation
// https://tc39.es/ecma262/#sec-lengthofarraylike
module.exports = function(obj) {
    return toLength(obj.length);
};

},{"49f1923fd7998a8d":"jilUR"}],"jilUR":[function(require,module,exports) {
"use strict";
var toIntegerOrInfinity = require("7fc847d415a226ec");
var min = Math.min;
// `ToLength` abstract operation
// https://tc39.es/ecma262/#sec-tolength
module.exports = function(argument) {
    var len = toIntegerOrInfinity(argument);
    return len > 0 ? min(len, 0x1FFFFFFFFFFFFF) : 0; // 2 ** 53 - 1 == 9007199254740991
};

},{"7fc847d415a226ec":"apndu"}],"cvVbn":[function(require,module,exports) {
"use strict";
// IE8- don't enum bug keys
module.exports = [
    "constructor",
    "hasOwnProperty",
    "isPrototypeOf",
    "propertyIsEnumerable",
    "toLocaleString",
    "toString",
    "valueOf"
];

},{}],"d2s7r":[function(require,module,exports) {
"use strict";
// eslint-disable-next-line es/no-object-getownpropertysymbols -- safe
exports.f = Object.getOwnPropertySymbols;

},{}],"8ZjRn":[function(require,module,exports) {
"use strict";
var fails = require("b490f84ff0f62b4f");
var isCallable = require("4353429983fc0b6d");
var replacement = /#|\.prototype\./;
var isForced = function(feature, detection) {
    var value = data[normalize(feature)];
    return value === POLYFILL ? true : value === NATIVE ? false : isCallable(detection) ? fails(detection) : !!detection;
};
var normalize = isForced.normalize = function(string) {
    return String(string).replace(replacement, ".").toLowerCase();
};
var data = isForced.data = {};
var NATIVE = isForced.NATIVE = "N";
var POLYFILL = isForced.POLYFILL = "P";
module.exports = isForced;

},{"b490f84ff0f62b4f":"aPl1d","4353429983fc0b6d":"5rehw"}],"dKHVN":[function(require,module,exports) {
"use strict";
var bind = require("710d1dda8c55873f");
var call = require("1d5f3a333ba1dcda");
var anObject = require("6f24170f4c37618e");
var tryToString = require("3b97ed1816761c43");
var isArrayIteratorMethod = require("56d0ca2236481444");
var lengthOfArrayLike = require("8b5936233ea9e372");
var isPrototypeOf = require("8210fe4c44de89b9");
var getIterator = require("65f63554be1fb60e");
var getIteratorMethod = require("59859626129314da");
var iteratorClose = require("8dd82b7d6ef03c41");
var $TypeError = TypeError;
var Result = function(stopped, result) {
    this.stopped = stopped;
    this.result = result;
};
var ResultPrototype = Result.prototype;
module.exports = function(iterable, unboundFunction, options) {
    var that = options && options.that;
    var AS_ENTRIES = !!(options && options.AS_ENTRIES);
    var IS_RECORD = !!(options && options.IS_RECORD);
    var IS_ITERATOR = !!(options && options.IS_ITERATOR);
    var INTERRUPTED = !!(options && options.INTERRUPTED);
    var fn = bind(unboundFunction, that);
    var iterator, iterFn, index, length, result, next, step;
    var stop = function(condition) {
        if (iterator) iteratorClose(iterator, "normal", condition);
        return new Result(true, condition);
    };
    var callFn = function(value) {
        if (AS_ENTRIES) {
            anObject(value);
            return INTERRUPTED ? fn(value[0], value[1], stop) : fn(value[0], value[1]);
        }
        return INTERRUPTED ? fn(value, stop) : fn(value);
    };
    if (IS_RECORD) iterator = iterable.iterator;
    else if (IS_ITERATOR) iterator = iterable;
    else {
        iterFn = getIteratorMethod(iterable);
        if (!iterFn) throw new $TypeError(tryToString(iterable) + " is not iterable");
        // optimisation for array iterators
        if (isArrayIteratorMethod(iterFn)) {
            for(index = 0, length = lengthOfArrayLike(iterable); length > index; index++){
                result = callFn(iterable[index]);
                if (result && isPrototypeOf(ResultPrototype, result)) return result;
            }
            return new Result(false);
        }
        iterator = getIterator(iterable, iterFn);
    }
    next = IS_RECORD ? iterable.next : iterator.next;
    while(!(step = call(next, iterator)).done){
        try {
            result = callFn(step.value);
        } catch (error) {
            iteratorClose(iterator, "throw", error);
        }
        if (typeof result == "object" && result && isPrototypeOf(ResultPrototype, result)) return result;
    }
    return new Result(false);
};

},{"710d1dda8c55873f":"kWNwT","1d5f3a333ba1dcda":"ig1Ze","6f24170f4c37618e":"gbHJT","3b97ed1816761c43":"91PMe","56d0ca2236481444":"1LOij","8b5936233ea9e372":"26VTo","8210fe4c44de89b9":"1Pde5","65f63554be1fb60e":"f876n","59859626129314da":"4fg5U","8dd82b7d6ef03c41":"7cbCj"}],"kWNwT":[function(require,module,exports) {
"use strict";
var uncurryThis = require("7220781b1e79946d");
var aCallable = require("9a59984ca3feb284");
var NATIVE_BIND = require("18f5b792dc55730b");
var bind = uncurryThis(uncurryThis.bind);
// optional / simple context binding
module.exports = function(fn, that) {
    aCallable(fn);
    return that === undefined ? fn : NATIVE_BIND ? bind(fn, that) : function() {
        return fn.apply(that, arguments);
    };
};

},{"7220781b1e79946d":"jxTWo","9a59984ca3feb284":"4759f","18f5b792dc55730b":"5Du0W"}],"jxTWo":[function(require,module,exports) {
"use strict";
var classofRaw = require("cbb45c32e073e44");
var uncurryThis = require("23328bb61e477757");
module.exports = function(fn) {
    // Nashorn bug:
    //   https://github.com/zloirock/core-js/issues/1128
    //   https://github.com/zloirock/core-js/issues/1130
    if (classofRaw(fn) === "Function") return uncurryThis(fn);
};

},{"cbb45c32e073e44":"1lG5q","23328bb61e477757":"5dlwx"}],"1LOij":[function(require,module,exports) {
"use strict";
var wellKnownSymbol = require("3bd892be852ae97e");
var Iterators = require("9439b6a7f3c1af32");
var ITERATOR = wellKnownSymbol("iterator");
var ArrayPrototype = Array.prototype;
// check on default Array iterator
module.exports = function(it) {
    return it !== undefined && (Iterators.Array === it || ArrayPrototype[ITERATOR] === it);
};

},{"3bd892be852ae97e":"9Ke4i","9439b6a7f3c1af32":"iWeb0"}],"iWeb0":[function(require,module,exports) {
"use strict";
module.exports = {};

},{}],"f876n":[function(require,module,exports) {
"use strict";
var call = require("dc706c31f37ab5d4");
var aCallable = require("1b2e3f53cadf0d4d");
var anObject = require("1da9f675bdf9d121");
var tryToString = require("ca12925a8693fc8b");
var getIteratorMethod = require("f8b2947226e2fa11");
var $TypeError = TypeError;
module.exports = function(argument, usingIterator) {
    var iteratorMethod = arguments.length < 2 ? getIteratorMethod(argument) : usingIterator;
    if (aCallable(iteratorMethod)) return anObject(call(iteratorMethod, argument));
    throw new $TypeError(tryToString(argument) + " is not iterable");
};

},{"dc706c31f37ab5d4":"ig1Ze","1b2e3f53cadf0d4d":"4759f","1da9f675bdf9d121":"gbHJT","ca12925a8693fc8b":"91PMe","f8b2947226e2fa11":"4fg5U"}],"4fg5U":[function(require,module,exports) {
"use strict";
var classof = require("774b0bf744f976ed");
var getMethod = require("957ca503bd7a9faf");
var isNullOrUndefined = require("d135788e2aedafe9");
var Iterators = require("88d96d8a87b84abc");
var wellKnownSymbol = require("dd135d97247f28c6");
var ITERATOR = wellKnownSymbol("iterator");
module.exports = function(it) {
    if (!isNullOrUndefined(it)) return getMethod(it, ITERATOR) || getMethod(it, "@@iterator") || Iterators[classof(it)];
};

},{"774b0bf744f976ed":"bWcnk","957ca503bd7a9faf":"hQFbe","d135788e2aedafe9":"6t8fS","88d96d8a87b84abc":"iWeb0","dd135d97247f28c6":"9Ke4i"}],"bWcnk":[function(require,module,exports) {
"use strict";
var TO_STRING_TAG_SUPPORT = require("a202e3fb9129c0ad");
var isCallable = require("5116f777444682f2");
var classofRaw = require("56140bc6b26b81c9");
var wellKnownSymbol = require("74f34ed37e09c532");
var TO_STRING_TAG = wellKnownSymbol("toStringTag");
var $Object = Object;
// ES3 wrong here
var CORRECT_ARGUMENTS = classofRaw(function() {
    return arguments;
}()) === "Arguments";
// fallback for IE11 Script Access Denied error
var tryGet = function(it, key) {
    try {
        return it[key];
    } catch (error) {}
};
// getting tag from ES6+ `Object.prototype.toString`
module.exports = TO_STRING_TAG_SUPPORT ? classofRaw : function(it) {
    var O, tag, result;
    return it === undefined ? "Undefined" : it === null ? "Null" : typeof (tag = tryGet(O = $Object(it), TO_STRING_TAG)) == "string" ? tag : CORRECT_ARGUMENTS ? classofRaw(O) : (result = classofRaw(O)) === "Object" && isCallable(O.callee) ? "Arguments" : result;
};

},{"a202e3fb9129c0ad":"7CMRQ","5116f777444682f2":"5rehw","56140bc6b26b81c9":"1lG5q","74f34ed37e09c532":"9Ke4i"}],"7CMRQ":[function(require,module,exports) {
"use strict";
var wellKnownSymbol = require("a7ead81f1116d0a4");
var TO_STRING_TAG = wellKnownSymbol("toStringTag");
var test = {};
test[TO_STRING_TAG] = "z";
module.exports = String(test) === "[object z]";

},{"a7ead81f1116d0a4":"9Ke4i"}],"7cbCj":[function(require,module,exports) {
"use strict";
var call = require("c36f4fa7b9f762a2");
var anObject = require("a8226882380424c");
var getMethod = require("55535dfcd6253993");
module.exports = function(iterator, kind, value) {
    var innerResult, innerError;
    anObject(iterator);
    try {
        innerResult = getMethod(iterator, "return");
        if (!innerResult) {
            if (kind === "throw") throw value;
            return value;
        }
        innerResult = call(innerResult, iterator);
    } catch (error) {
        innerError = true;
        innerResult = error;
    }
    if (kind === "throw") throw value;
    if (innerError) throw innerResult;
    anObject(innerResult);
    return value;
};

},{"c36f4fa7b9f762a2":"ig1Ze","a8226882380424c":"gbHJT","55535dfcd6253993":"hQFbe"}],"eQnHX":[function(require,module,exports) {
"use strict";
var uncurryThis = require("c0cf83a59fa7a4db");
// eslint-disable-next-line es/no-map -- safe
var MapPrototype = Map.prototype;
module.exports = {
    // eslint-disable-next-line es/no-map -- safe
    Map: Map,
    set: uncurryThis(MapPrototype.set),
    get: uncurryThis(MapPrototype.get),
    has: uncurryThis(MapPrototype.has),
    remove: uncurryThis(MapPrototype["delete"]),
    proto: MapPrototype
};

},{"c0cf83a59fa7a4db":"5dlwx"}],"cek62":[function(require,module,exports) {
"use strict";
var global = require("180e8273dac9bd1");
var defineWellKnownSymbol = require("fad0985fed0be1f3");
var defineProperty = require("56a6300eb43e38c1").f;
var getOwnPropertyDescriptor = require("40413a3fbd0d7aa").f;
var Symbol = global.Symbol;
// `Symbol.dispose` well-known symbol
// https://github.com/tc39/proposal-explicit-resource-management
defineWellKnownSymbol("dispose");
if (Symbol) {
    var descriptor = getOwnPropertyDescriptor(Symbol, "dispose");
    // workaround of NodeJS 20.4 bug
    // https://github.com/nodejs/node/issues/48699
    // and incorrect descriptor from some transpilers and userland helpers
    if (descriptor.enumerable && descriptor.configurable && descriptor.writable) defineProperty(Symbol, "dispose", {
        value: descriptor.value,
        enumerable: false,
        configurable: false,
        writable: false
    });
}

},{"180e8273dac9bd1":"eFMTw","fad0985fed0be1f3":"cxd4X","56a6300eb43e38c1":"01b9Y","40413a3fbd0d7aa":"fgdCf"}],"cxd4X":[function(require,module,exports) {
"use strict";
var path = require("33f4c281514cd7b7");
var hasOwn = require("15fa4d64a2f05551");
var wrappedWellKnownSymbolModule = require("69719e9356bdc9da");
var defineProperty = require("46434c06e30a8a55").f;
module.exports = function(NAME) {
    var Symbol = path.Symbol || (path.Symbol = {});
    if (!hasOwn(Symbol, NAME)) defineProperty(Symbol, NAME, {
        value: wrappedWellKnownSymbolModule.f(NAME)
    });
};

},{"33f4c281514cd7b7":"agf4h","15fa4d64a2f05551":"jzCfR","69719e9356bdc9da":"5n1lg","46434c06e30a8a55":"01b9Y"}],"agf4h":[function(require,module,exports) {
"use strict";
var global = require("322524b3504d5463");
module.exports = global;

},{"322524b3504d5463":"eFMTw"}],"5n1lg":[function(require,module,exports) {
"use strict";
var wellKnownSymbol = require("b5073ba57be94fbc");
exports.f = wellKnownSymbol;

},{"b5073ba57be94fbc":"9Ke4i"}],"gdCeX":[function(require,module,exports) {
"use strict";
// TODO: Remove this module from `core-js@4` since it's split to modules listed below
require("25ffd0dcd245196f");
require("611a73aeeba706ff");

},{"25ffd0dcd245196f":"1uP52","611a73aeeba706ff":"eTvHx"}],"1uP52":[function(require,module,exports) {
"use strict";
var $ = require("ba281eba3b8e7cfc");
var global = require("55d1957a21ed2e67");
var clearImmediate = require("5966a7f96f94103").clear;
// `clearImmediate` method
// http://w3c.github.io/setImmediate/#si-clearImmediate
$({
    global: true,
    bind: true,
    enumerable: true,
    forced: global.clearImmediate !== clearImmediate
}, {
    clearImmediate: clearImmediate
});

},{"ba281eba3b8e7cfc":"8ZseB","55d1957a21ed2e67":"eFMTw","5966a7f96f94103":"l6mnM"}],"l6mnM":[function(require,module,exports) {
"use strict";
var global = require("127fbc1c0b7e2ff0");
var apply = require("98e114a72d1c6458");
var bind = require("8aebae694e557348");
var isCallable = require("3125215159feb52e");
var hasOwn = require("ad0900a0225eaf49");
var fails = require("4402cc6fe18092b8");
var html = require("5425c59c2ef898a2");
var arraySlice = require("25747f9ee4e14dc8");
var createElement = require("6ababc870bce516");
var validateArgumentsLength = require("d744ac09d85a5203");
var IS_IOS = require("9d99cbf58f7bbea");
var IS_NODE = require("88d4ffaf7c2dddf1");
var set = global.setImmediate;
var clear = global.clearImmediate;
var process = global.process;
var Dispatch = global.Dispatch;
var Function = global.Function;
var MessageChannel = global.MessageChannel;
var String = global.String;
var counter = 0;
var queue = {};
var ONREADYSTATECHANGE = "onreadystatechange";
var $location, defer, channel, port;
fails(function() {
    // Deno throws a ReferenceError on `location` access without `--location` flag
    $location = global.location;
});
var run = function(id) {
    if (hasOwn(queue, id)) {
        var fn = queue[id];
        delete queue[id];
        fn();
    }
};
var runner = function(id) {
    return function() {
        run(id);
    };
};
var eventListener = function(event) {
    run(event.data);
};
var globalPostMessageDefer = function(id) {
    // old engines have not location.origin
    global.postMessage(String(id), $location.protocol + "//" + $location.host);
};
// Node.js 0.9+ & IE10+ has setImmediate, otherwise:
if (!set || !clear) {
    set = function setImmediate(handler) {
        validateArgumentsLength(arguments.length, 1);
        var fn = isCallable(handler) ? handler : Function(handler);
        var args = arraySlice(arguments, 1);
        queue[++counter] = function() {
            apply(fn, undefined, args);
        };
        defer(counter);
        return counter;
    };
    clear = function clearImmediate(id) {
        delete queue[id];
    };
    // Node.js 0.8-
    if (IS_NODE) defer = function(id) {
        process.nextTick(runner(id));
    };
    else if (Dispatch && Dispatch.now) defer = function(id) {
        Dispatch.now(runner(id));
    };
    else if (MessageChannel && !IS_IOS) {
        channel = new MessageChannel();
        port = channel.port2;
        channel.port1.onmessage = eventListener;
        defer = bind(port.postMessage, port);
    // Browsers with postMessage, skip WebWorkers
    // IE8 has postMessage, but it's sync & typeof its postMessage is 'object'
    } else if (global.addEventListener && isCallable(global.postMessage) && !global.importScripts && $location && $location.protocol !== "file:" && !fails(globalPostMessageDefer)) {
        defer = globalPostMessageDefer;
        global.addEventListener("message", eventListener, false);
    // IE8-
    } else if (ONREADYSTATECHANGE in createElement("script")) defer = function(id) {
        html.appendChild(createElement("script"))[ONREADYSTATECHANGE] = function() {
            html.removeChild(this);
            run(id);
        };
    };
    else defer = function(id) {
        setTimeout(runner(id), 0);
    };
}
module.exports = {
    set: set,
    clear: clear
};

},{"127fbc1c0b7e2ff0":"eFMTw","98e114a72d1c6458":"20mlM","8aebae694e557348":"kWNwT","3125215159feb52e":"5rehw","ad0900a0225eaf49":"jzCfR","4402cc6fe18092b8":"aPl1d","5425c59c2ef898a2":"ekaAY","25747f9ee4e14dc8":"179dN","6ababc870bce516":"k4bBe","d744ac09d85a5203":"8en6e","9d99cbf58f7bbea":"fznts","88d4ffaf7c2dddf1":"4ZUA0"}],"20mlM":[function(require,module,exports) {
"use strict";
var NATIVE_BIND = require("ca6c799fbcaafb03");
var FunctionPrototype = Function.prototype;
var apply = FunctionPrototype.apply;
var call = FunctionPrototype.call;
// eslint-disable-next-line es/no-reflect -- safe
module.exports = typeof Reflect == "object" && Reflect.apply || (NATIVE_BIND ? call.bind(apply) : function() {
    return call.apply(apply, arguments);
});

},{"ca6c799fbcaafb03":"5Du0W"}],"ekaAY":[function(require,module,exports) {
"use strict";
var getBuiltIn = require("35e92ca31cb0ed5d");
module.exports = getBuiltIn("document", "documentElement");

},{"35e92ca31cb0ed5d":"ft0h7"}],"179dN":[function(require,module,exports) {
"use strict";
var uncurryThis = require("eb02c5049a421ec6");
module.exports = uncurryThis([].slice);

},{"eb02c5049a421ec6":"5dlwx"}],"8en6e":[function(require,module,exports) {
"use strict";
var $TypeError = TypeError;
module.exports = function(passed, required) {
    if (passed < required) throw new $TypeError("Not enough arguments");
    return passed;
};

},{}],"fznts":[function(require,module,exports) {
"use strict";
var userAgent = require("728c661622ff7a5b");
// eslint-disable-next-line redos/no-vulnerable -- safe
module.exports = /(?:ipad|iphone|ipod).*applewebkit/i.test(userAgent);

},{"728c661622ff7a5b":"a2XdK"}],"4ZUA0":[function(require,module,exports) {
"use strict";
var global = require("5eb6ec6bffc0cb2f");
var classof = require("66b5af9c092a60cf");
module.exports = classof(global.process) === "process";

},{"5eb6ec6bffc0cb2f":"eFMTw","66b5af9c092a60cf":"1lG5q"}],"eTvHx":[function(require,module,exports) {
"use strict";
var $ = require("b0c9917e885c8617");
var global = require("e75d734b0199caaf");
var setTask = require("bd39550b5b5c6424").set;
var schedulersFix = require("8ab07f128bfd5cfb");
// https://github.com/oven-sh/bun/issues/1633
var setImmediate = global.setImmediate ? schedulersFix(setTask, false) : setTask;
// `setImmediate` method
// http://w3c.github.io/setImmediate/#si-setImmediate
$({
    global: true,
    bind: true,
    enumerable: true,
    forced: global.setImmediate !== setImmediate
}, {
    setImmediate: setImmediate
});

},{"b0c9917e885c8617":"8ZseB","e75d734b0199caaf":"eFMTw","bd39550b5b5c6424":"l6mnM","8ab07f128bfd5cfb":"bKpS1"}],"bKpS1":[function(require,module,exports) {
"use strict";
var global = require("3358df46707b3a29");
var apply = require("6da1411b1cf949de");
var isCallable = require("e9d1eb0a026cb415");
var ENGINE_IS_BUN = require("59e427fd13ddddd4");
var USER_AGENT = require("6ed91f14034ffe8e");
var arraySlice = require("b179a7604d16cf8e");
var validateArgumentsLength = require("b582f1d37d7b17de");
var Function = global.Function;
// dirty IE9- and Bun 0.3.0- checks
var WRAP = /MSIE .\./.test(USER_AGENT) || ENGINE_IS_BUN && function() {
    var version = global.Bun.version.split(".");
    return version.length < 3 || version[0] === "0" && (version[1] < 3 || version[1] === "3" && version[2] === "0");
}();
// IE9- / Bun 0.3.0- setTimeout / setInterval / setImmediate additional parameters fix
// https://html.spec.whatwg.org/multipage/timers-and-user-prompts.html#timers
// https://github.com/oven-sh/bun/issues/1633
module.exports = function(scheduler, hasTimeArg) {
    var firstParamIndex = hasTimeArg ? 2 : 1;
    return WRAP ? function(handler, timeout /* , ...arguments */ ) {
        var boundArgs = validateArgumentsLength(arguments.length, 1) > firstParamIndex;
        var fn = isCallable(handler) ? handler : Function(handler);
        var params = boundArgs ? arraySlice(arguments, firstParamIndex) : [];
        var callback = boundArgs ? function() {
            apply(fn, this, params);
        } : fn;
        return hasTimeArg ? scheduler(callback, timeout) : scheduler(callback);
    } : scheduler;
};

},{"3358df46707b3a29":"eFMTw","6da1411b1cf949de":"20mlM","e9d1eb0a026cb415":"5rehw","59e427fd13ddddd4":"hwwCW","6ed91f14034ffe8e":"a2XdK","b179a7604d16cf8e":"179dN","b582f1d37d7b17de":"8en6e"}],"hwwCW":[function(require,module,exports) {
"use strict";
/* global Bun -- Bun case */ module.exports = typeof Bun == "function" && Bun && typeof Bun.version == "string";

},{}],"cEkMy":[function(require,module,exports) {
/**
 * Copyright (c) 2014-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var runtime = function(exports) {
    "use strict";
    var Op = Object.prototype;
    var hasOwn = Op.hasOwnProperty;
    var defineProperty = Object.defineProperty || function(obj, key, desc) {
        obj[key] = desc.value;
    };
    var undefined; // More compressible than void 0.
    var $Symbol = typeof Symbol === "function" ? Symbol : {};
    var iteratorSymbol = $Symbol.iterator || "@@iterator";
    var asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator";
    var toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag";
    function define(obj, key, value) {
        Object.defineProperty(obj, key, {
            value: value,
            enumerable: true,
            configurable: true,
            writable: true
        });
        return obj[key];
    }
    try {
        // IE 8 has a broken Object.defineProperty that only works on DOM objects.
        define({}, "");
    } catch (err) {
        define = function(obj, key, value) {
            return obj[key] = value;
        };
    }
    function wrap(innerFn, outerFn, self, tryLocsList) {
        // If outerFn provided and outerFn.prototype is a Generator, then outerFn.prototype instanceof Generator.
        var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator;
        var generator = Object.create(protoGenerator.prototype);
        var context = new Context(tryLocsList || []);
        // The ._invoke method unifies the implementations of the .next,
        // .throw, and .return methods.
        defineProperty(generator, "_invoke", {
            value: makeInvokeMethod(innerFn, self, context)
        });
        return generator;
    }
    exports.wrap = wrap;
    // Try/catch helper to minimize deoptimizations. Returns a completion
    // record like context.tryEntries[i].completion. This interface could
    // have been (and was previously) designed to take a closure to be
    // invoked without arguments, but in all the cases we care about we
    // already have an existing method we want to call, so there's no need
    // to create a new function object. We can even get away with assuming
    // the method takes exactly one argument, since that happens to be true
    // in every case, so we don't have to touch the arguments object. The
    // only additional allocation required is the completion record, which
    // has a stable shape and so hopefully should be cheap to allocate.
    function tryCatch(fn, obj, arg) {
        try {
            return {
                type: "normal",
                arg: fn.call(obj, arg)
            };
        } catch (err) {
            return {
                type: "throw",
                arg: err
            };
        }
    }
    var GenStateSuspendedStart = "suspendedStart";
    var GenStateSuspendedYield = "suspendedYield";
    var GenStateExecuting = "executing";
    var GenStateCompleted = "completed";
    // Returning this object from the innerFn has the same effect as
    // breaking out of the dispatch switch statement.
    var ContinueSentinel = {};
    // Dummy constructor functions that we use as the .constructor and
    // .constructor.prototype properties for functions that return Generator
    // objects. For full spec compliance, you may wish to configure your
    // minifier not to mangle the names of these two functions.
    function Generator() {}
    function GeneratorFunction() {}
    function GeneratorFunctionPrototype() {}
    // This is a polyfill for %IteratorPrototype% for environments that
    // don't natively support it.
    var IteratorPrototype = {};
    define(IteratorPrototype, iteratorSymbol, function() {
        return this;
    });
    var getProto = Object.getPrototypeOf;
    var NativeIteratorPrototype = getProto && getProto(getProto(values([])));
    if (NativeIteratorPrototype && NativeIteratorPrototype !== Op && hasOwn.call(NativeIteratorPrototype, iteratorSymbol)) // This environment has a native %IteratorPrototype%; use it instead
    // of the polyfill.
    IteratorPrototype = NativeIteratorPrototype;
    var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(IteratorPrototype);
    GeneratorFunction.prototype = GeneratorFunctionPrototype;
    defineProperty(Gp, "constructor", {
        value: GeneratorFunctionPrototype,
        configurable: true
    });
    defineProperty(GeneratorFunctionPrototype, "constructor", {
        value: GeneratorFunction,
        configurable: true
    });
    GeneratorFunction.displayName = define(GeneratorFunctionPrototype, toStringTagSymbol, "GeneratorFunction");
    // Helper for defining the .next, .throw, and .return methods of the
    // Iterator interface in terms of a single ._invoke method.
    function defineIteratorMethods(prototype) {
        [
            "next",
            "throw",
            "return"
        ].forEach(function(method) {
            define(prototype, method, function(arg) {
                return this._invoke(method, arg);
            });
        });
    }
    exports.isGeneratorFunction = function(genFun) {
        var ctor = typeof genFun === "function" && genFun.constructor;
        return ctor ? ctor === GeneratorFunction || // For the native GeneratorFunction constructor, the best we can
        // do is to check its .name property.
        (ctor.displayName || ctor.name) === "GeneratorFunction" : false;
    };
    exports.mark = function(genFun) {
        if (Object.setPrototypeOf) Object.setPrototypeOf(genFun, GeneratorFunctionPrototype);
        else {
            genFun.__proto__ = GeneratorFunctionPrototype;
            define(genFun, toStringTagSymbol, "GeneratorFunction");
        }
        genFun.prototype = Object.create(Gp);
        return genFun;
    };
    // Within the body of any async function, `await x` is transformed to
    // `yield regeneratorRuntime.awrap(x)`, so that the runtime can test
    // `hasOwn.call(value, "__await")` to determine if the yielded value is
    // meant to be awaited.
    exports.awrap = function(arg) {
        return {
            __await: arg
        };
    };
    function AsyncIterator(generator, PromiseImpl) {
        function invoke(method, arg, resolve, reject) {
            var record = tryCatch(generator[method], generator, arg);
            if (record.type === "throw") reject(record.arg);
            else {
                var result = record.arg;
                var value = result.value;
                if (value && typeof value === "object" && hasOwn.call(value, "__await")) return PromiseImpl.resolve(value.__await).then(function(value) {
                    invoke("next", value, resolve, reject);
                }, function(err) {
                    invoke("throw", err, resolve, reject);
                });
                return PromiseImpl.resolve(value).then(function(unwrapped) {
                    // When a yielded Promise is resolved, its final value becomes
                    // the .value of the Promise<{value,done}> result for the
                    // current iteration.
                    result.value = unwrapped;
                    resolve(result);
                }, function(error) {
                    // If a rejected Promise was yielded, throw the rejection back
                    // into the async generator function so it can be handled there.
                    return invoke("throw", error, resolve, reject);
                });
            }
        }
        var previousPromise;
        function enqueue(method, arg) {
            function callInvokeWithMethodAndArg() {
                return new PromiseImpl(function(resolve, reject) {
                    invoke(method, arg, resolve, reject);
                });
            }
            return previousPromise = // If enqueue has been called before, then we want to wait until
            // all previous Promises have been resolved before calling invoke,
            // so that results are always delivered in the correct order. If
            // enqueue has not been called before, then it is important to
            // call invoke immediately, without waiting on a callback to fire,
            // so that the async generator function has the opportunity to do
            // any necessary setup in a predictable way. This predictability
            // is why the Promise constructor synchronously invokes its
            // executor callback, and why async functions synchronously
            // execute code before the first await. Since we implement simple
            // async functions in terms of async generators, it is especially
            // important to get this right, even though it requires care.
            previousPromise ? previousPromise.then(callInvokeWithMethodAndArg, // Avoid propagating failures to Promises returned by later
            // invocations of the iterator.
            callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg();
        }
        // Define the unified helper method that is used to implement .next,
        // .throw, and .return (see defineIteratorMethods).
        defineProperty(this, "_invoke", {
            value: enqueue
        });
    }
    defineIteratorMethods(AsyncIterator.prototype);
    define(AsyncIterator.prototype, asyncIteratorSymbol, function() {
        return this;
    });
    exports.AsyncIterator = AsyncIterator;
    // Note that simple async functions are implemented on top of
    // AsyncIterator objects; they just return a Promise for the value of
    // the final result produced by the iterator.
    exports.async = function(innerFn, outerFn, self, tryLocsList, PromiseImpl) {
        if (PromiseImpl === void 0) PromiseImpl = Promise;
        var iter = new AsyncIterator(wrap(innerFn, outerFn, self, tryLocsList), PromiseImpl);
        return exports.isGeneratorFunction(outerFn) ? iter // If outerFn is a generator, return the full iterator.
         : iter.next().then(function(result) {
            return result.done ? result.value : iter.next();
        });
    };
    function makeInvokeMethod(innerFn, self, context) {
        var state = GenStateSuspendedStart;
        return function invoke(method, arg) {
            if (state === GenStateExecuting) throw new Error("Generator is already running");
            if (state === GenStateCompleted) {
                if (method === "throw") throw arg;
                // Be forgiving, per GeneratorResume behavior specified since ES2015:
                // ES2015 spec, step 3: https://262.ecma-international.org/6.0/#sec-generatorresume
                // Latest spec, step 2: https://tc39.es/ecma262/#sec-generatorresume
                return doneResult();
            }
            context.method = method;
            context.arg = arg;
            while(true){
                var delegate = context.delegate;
                if (delegate) {
                    var delegateResult = maybeInvokeDelegate(delegate, context);
                    if (delegateResult) {
                        if (delegateResult === ContinueSentinel) continue;
                        return delegateResult;
                    }
                }
                if (context.method === "next") // Setting context._sent for legacy support of Babel's
                // function.sent implementation.
                context.sent = context._sent = context.arg;
                else if (context.method === "throw") {
                    if (state === GenStateSuspendedStart) {
                        state = GenStateCompleted;
                        throw context.arg;
                    }
                    context.dispatchException(context.arg);
                } else if (context.method === "return") context.abrupt("return", context.arg);
                state = GenStateExecuting;
                var record = tryCatch(innerFn, self, context);
                if (record.type === "normal") {
                    // If an exception is thrown from innerFn, we leave state ===
                    // GenStateExecuting and loop back for another invocation.
                    state = context.done ? GenStateCompleted : GenStateSuspendedYield;
                    if (record.arg === ContinueSentinel) continue;
                    return {
                        value: record.arg,
                        done: context.done
                    };
                } else if (record.type === "throw") {
                    state = GenStateCompleted;
                    // Dispatch the exception by looping back around to the
                    // context.dispatchException(context.arg) call above.
                    context.method = "throw";
                    context.arg = record.arg;
                }
            }
        };
    }
    // Call delegate.iterator[context.method](context.arg) and handle the
    // result, either by returning a { value, done } result from the
    // delegate iterator, or by modifying context.method and context.arg,
    // setting context.delegate to null, and returning the ContinueSentinel.
    function maybeInvokeDelegate(delegate, context) {
        var methodName = context.method;
        var method = delegate.iterator[methodName];
        if (method === undefined) {
            // A .throw or .return when the delegate iterator has no .throw
            // method, or a missing .next method, always terminate the
            // yield* loop.
            context.delegate = null;
            // Note: ["return"] must be used for ES3 parsing compatibility.
            if (methodName === "throw" && delegate.iterator["return"]) {
                // If the delegate iterator has a return method, give it a
                // chance to clean up.
                context.method = "return";
                context.arg = undefined;
                maybeInvokeDelegate(delegate, context);
                if (context.method === "throw") // If maybeInvokeDelegate(context) changed context.method from
                // "return" to "throw", let that override the TypeError below.
                return ContinueSentinel;
            }
            if (methodName !== "return") {
                context.method = "throw";
                context.arg = new TypeError("The iterator does not provide a '" + methodName + "' method");
            }
            return ContinueSentinel;
        }
        var record = tryCatch(method, delegate.iterator, context.arg);
        if (record.type === "throw") {
            context.method = "throw";
            context.arg = record.arg;
            context.delegate = null;
            return ContinueSentinel;
        }
        var info = record.arg;
        if (!info) {
            context.method = "throw";
            context.arg = new TypeError("iterator result is not an object");
            context.delegate = null;
            return ContinueSentinel;
        }
        if (info.done) {
            // Assign the result of the finished delegate to the temporary
            // variable specified by delegate.resultName (see delegateYield).
            context[delegate.resultName] = info.value;
            // Resume execution at the desired location (see delegateYield).
            context.next = delegate.nextLoc;
            // If context.method was "throw" but the delegate handled the
            // exception, let the outer generator proceed normally. If
            // context.method was "next", forget context.arg since it has been
            // "consumed" by the delegate iterator. If context.method was
            // "return", allow the original .return call to continue in the
            // outer generator.
            if (context.method !== "return") {
                context.method = "next";
                context.arg = undefined;
            }
        } else // Re-yield the result returned by the delegate method.
        return info;
        // The delegate iterator is finished, so forget it and continue with
        // the outer generator.
        context.delegate = null;
        return ContinueSentinel;
    }
    // Define Generator.prototype.{next,throw,return} in terms of the
    // unified ._invoke helper method.
    defineIteratorMethods(Gp);
    define(Gp, toStringTagSymbol, "Generator");
    // A Generator should always return itself as the iterator object when the
    // @@iterator function is called on it. Some browsers' implementations of the
    // iterator prototype chain incorrectly implement this, causing the Generator
    // object to not be returned from this call. This ensures that doesn't happen.
    // See https://github.com/facebook/regenerator/issues/274 for more details.
    define(Gp, iteratorSymbol, function() {
        return this;
    });
    define(Gp, "toString", function() {
        return "[object Generator]";
    });
    function pushTryEntry(locs) {
        var entry = {
            tryLoc: locs[0]
        };
        if (1 in locs) entry.catchLoc = locs[1];
        if (2 in locs) {
            entry.finallyLoc = locs[2];
            entry.afterLoc = locs[3];
        }
        this.tryEntries.push(entry);
    }
    function resetTryEntry(entry) {
        var record = entry.completion || {};
        record.type = "normal";
        delete record.arg;
        entry.completion = record;
    }
    function Context(tryLocsList) {
        // The root entry object (effectively a try statement without a catch
        // or a finally block) gives us a place to store values thrown from
        // locations where there is no enclosing try statement.
        this.tryEntries = [
            {
                tryLoc: "root"
            }
        ];
        tryLocsList.forEach(pushTryEntry, this);
        this.reset(true);
    }
    exports.keys = function(val) {
        var object = Object(val);
        var keys = [];
        for(var key in object)keys.push(key);
        keys.reverse();
        // Rather than returning an object with a next method, we keep
        // things simple and return the next function itself.
        return function next() {
            while(keys.length){
                var key = keys.pop();
                if (key in object) {
                    next.value = key;
                    next.done = false;
                    return next;
                }
            }
            // To avoid creating an additional object, we just hang the .value
            // and .done properties off the next function object itself. This
            // also ensures that the minifier will not anonymize the function.
            next.done = true;
            return next;
        };
    };
    function values(iterable) {
        if (iterable != null) {
            var iteratorMethod = iterable[iteratorSymbol];
            if (iteratorMethod) return iteratorMethod.call(iterable);
            if (typeof iterable.next === "function") return iterable;
            if (!isNaN(iterable.length)) {
                var i = -1, next = function next() {
                    while(++i < iterable.length)if (hasOwn.call(iterable, i)) {
                        next.value = iterable[i];
                        next.done = false;
                        return next;
                    }
                    next.value = undefined;
                    next.done = true;
                    return next;
                };
                return next.next = next;
            }
        }
        throw new TypeError(typeof iterable + " is not iterable");
    }
    exports.values = values;
    function doneResult() {
        return {
            value: undefined,
            done: true
        };
    }
    Context.prototype = {
        constructor: Context,
        reset: function(skipTempReset) {
            this.prev = 0;
            this.next = 0;
            // Resetting context._sent for legacy support of Babel's
            // function.sent implementation.
            this.sent = this._sent = undefined;
            this.done = false;
            this.delegate = null;
            this.method = "next";
            this.arg = undefined;
            this.tryEntries.forEach(resetTryEntry);
            if (!skipTempReset) {
                for(var name in this)// Not sure about the optimal order of these conditions:
                if (name.charAt(0) === "t" && hasOwn.call(this, name) && !isNaN(+name.slice(1))) this[name] = undefined;
            }
        },
        stop: function() {
            this.done = true;
            var rootEntry = this.tryEntries[0];
            var rootRecord = rootEntry.completion;
            if (rootRecord.type === "throw") throw rootRecord.arg;
            return this.rval;
        },
        dispatchException: function(exception) {
            if (this.done) throw exception;
            var context = this;
            function handle(loc, caught) {
                record.type = "throw";
                record.arg = exception;
                context.next = loc;
                if (caught) {
                    // If the dispatched exception was caught by a catch block,
                    // then let that catch block handle the exception normally.
                    context.method = "next";
                    context.arg = undefined;
                }
                return !!caught;
            }
            for(var i = this.tryEntries.length - 1; i >= 0; --i){
                var entry = this.tryEntries[i];
                var record = entry.completion;
                if (entry.tryLoc === "root") // Exception thrown outside of any try block that could handle
                // it, so set the completion value of the entire function to
                // throw the exception.
                return handle("end");
                if (entry.tryLoc <= this.prev) {
                    var hasCatch = hasOwn.call(entry, "catchLoc");
                    var hasFinally = hasOwn.call(entry, "finallyLoc");
                    if (hasCatch && hasFinally) {
                        if (this.prev < entry.catchLoc) return handle(entry.catchLoc, true);
                        else if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc);
                    } else if (hasCatch) {
                        if (this.prev < entry.catchLoc) return handle(entry.catchLoc, true);
                    } else if (hasFinally) {
                        if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc);
                    } else throw new Error("try statement without catch or finally");
                }
            }
        },
        abrupt: function(type, arg) {
            for(var i = this.tryEntries.length - 1; i >= 0; --i){
                var entry = this.tryEntries[i];
                if (entry.tryLoc <= this.prev && hasOwn.call(entry, "finallyLoc") && this.prev < entry.finallyLoc) {
                    var finallyEntry = entry;
                    break;
                }
            }
            if (finallyEntry && (type === "break" || type === "continue") && finallyEntry.tryLoc <= arg && arg <= finallyEntry.finallyLoc) // Ignore the finally entry if control is not jumping to a
            // location outside the try/catch block.
            finallyEntry = null;
            var record = finallyEntry ? finallyEntry.completion : {};
            record.type = type;
            record.arg = arg;
            if (finallyEntry) {
                this.method = "next";
                this.next = finallyEntry.finallyLoc;
                return ContinueSentinel;
            }
            return this.complete(record);
        },
        complete: function(record, afterLoc) {
            if (record.type === "throw") throw record.arg;
            if (record.type === "break" || record.type === "continue") this.next = record.arg;
            else if (record.type === "return") {
                this.rval = this.arg = record.arg;
                this.method = "return";
                this.next = "end";
            } else if (record.type === "normal" && afterLoc) this.next = afterLoc;
            return ContinueSentinel;
        },
        finish: function(finallyLoc) {
            for(var i = this.tryEntries.length - 1; i >= 0; --i){
                var entry = this.tryEntries[i];
                if (entry.finallyLoc === finallyLoc) {
                    this.complete(entry.completion, entry.afterLoc);
                    resetTryEntry(entry);
                    return ContinueSentinel;
                }
            }
        },
        "catch": function(tryLoc) {
            for(var i = this.tryEntries.length - 1; i >= 0; --i){
                var entry = this.tryEntries[i];
                if (entry.tryLoc === tryLoc) {
                    var record = entry.completion;
                    if (record.type === "throw") {
                        var thrown = record.arg;
                        resetTryEntry(entry);
                    }
                    return thrown;
                }
            }
            // The context.catch method must only be called with a location
            // argument that corresponds to a known catch block.
            throw new Error("illegal catch attempt");
        },
        delegateYield: function(iterable, resultName, nextLoc) {
            this.delegate = {
                iterator: values(iterable),
                resultName: resultName,
                nextLoc: nextLoc
            };
            if (this.method === "next") // Deliberately forget the last sent value so that we don't
            // accidentally pass it on to the delegate.
            this.arg = undefined;
            return ContinueSentinel;
        }
    };
    // Regardless of whether this script is executing as a CommonJS module
    // or not, return the runtime object so that we can declare the variable
    // regeneratorRuntime in the outer scope, which allows this module to be
    // injected easily by `bin/regenerator --include-runtime script.js`.
    return exports;
}(// If this script is executing as a CommonJS module, use module.exports
// as the regeneratorRuntime namespace. Otherwise create a new empty
// object. Either way, the resulting object will be used to initialize
// the regeneratorRuntime variable at the top of this file.
(0, module.exports));
try {
    regeneratorRuntime = runtime;
} catch (accidentalStrictMode) {
    // This module should not be running in strict mode, so the above
    // assignment should always work unless something is misconfigured. Just
    // in case runtime.js accidentally runs in strict mode, in modern engines
    // we can explicitly access globalThis. In older engines we can escape
    // strict mode using a global Function call. This could conceivably fail
    // if a Content Security Policy forbids using Function, but in that case
    // the proper solution is to fix the accidental strict mode problem. If
    // you've misconfigured your bundler to force strict mode and applied a
    // CSP to forbid Function, and you're not willing to fix either of those
    // problems, please detail your unique predicament in a GitHub issue.
    if (typeof globalThis === "object") globalThis.regeneratorRuntime = runtime;
    else Function("r", "regeneratorRuntime = r")(runtime);
}

},{}],"7YoyH":[function(require,module,exports) {
//////////////////////////////////////////////////////////
// This javascript file is for all of the categories pages
/////////////////////////////////////////////////////////
////////////////////////////////////////////////
// Image flipper
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "fronFlipper", ()=>fronFlipper);
parcelHelpers.export(exports, "backFlipper", ()=>backFlipper);
const frontImages = document.querySelectorAll(".front-image");
const rearImages = document.querySelectorAll(".rear-image");
const fronFlipper = frontImages.forEach((img)=>img.addEventListener("mouseover", function() {
        img.style.opacity = 0;
        rearImages.forEach((img)=>img.style.opacity = 1);
    }));
const backFlipper = frontImages.forEach((img)=>img.addEventListener("mouseleave", function() {
        img.style.opacity = 1;
        rearImages.forEach((img)=>img.style.opacity = 0);
    }));
//////////////////////////////////////////////////
//////////////////////////////////////////////////
const cart = [];
const addToCartBtns = document.querySelectorAll(".add-to-cart-btn");
const cartNumber = document.querySelector(".cart-number");
const addToCartFn = function() {
    let cartNewValue = 0;
    cartNewValue = Number(cartNumber.textContent) + 1;
    cartNumber.textContent = cartNewValue;
    console.log(cartNewValue);
};
addToCartBtns.forEach((btn)=>btn.addEventListener("click", addToCartFn)); //////////////////////////////////////////////////

},{"@parcel/transformer-js/src/esmodule-helpers.js":"1EoNj"}],"1EoNj":[function(require,module,exports) {
exports.interopDefault = function(a) {
    return a && a.__esModule ? a : {
        default: a
    };
};
exports.defineInteropFlag = function(a) {
    Object.defineProperty(a, "__esModule", {
        value: true
    });
};
exports.exportAll = function(source, dest) {
    Object.keys(source).forEach(function(key) {
        if (key === "default" || key === "__esModule" || Object.prototype.hasOwnProperty.call(dest, key)) return;
        Object.defineProperty(dest, key, {
            enumerable: true,
            get: function() {
                return source[key];
            }
        });
    });
    return dest;
};
exports.export = function(dest, destName, get) {
    Object.defineProperty(dest, destName, {
        enumerable: true,
        get: get
    });
};

},{}],"kKcwM":[function(require,module,exports) {
// Sellectors
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "checkId", ()=>checkId);
const images = document.querySelectorAll(".slider-image-item");
const sliderBtnRight = document.querySelector(".slider-btn--right");
const sliderBtnLeft = document.querySelector(".slider-btn--left");
let curSlide = 0;
const maxSlide = images.length;
const goToImage = function(slide) {
    images.forEach((img)=>img.style.transform = `translateX(${-100 * slide}%)`);
};
const nextImage = function() {
    if (curSlide === maxSlide - 4) curSlide = 0;
    else curSlide++;
    goToImage(curSlide);
};
const prevImage = function() {
    if (curSlide === 0) curSlide = maxSlide - 4;
    else curSlide--;
    goToImage(curSlide);
};
const bodyCheck = document.body.id.includes("home");
const checkId = function() {
    if (!bodyCheck) return;
    sliderBtnRight.addEventListener("click", nextImage);
    sliderBtnLeft.addEventListener("click", prevImage);
}; // sliderBtnRight.addEventListener('click', nextImage)
 //     sliderBtnLeft.addEventListener('click', prevImage)
 // Event listeners

},{"@parcel/transformer-js/src/esmodule-helpers.js":"1EoNj"}]},["d5c8c","kNHcd"], "kNHcd", "parcelRequirec8de")

//# sourceMappingURL=index.528261bd.js.map
