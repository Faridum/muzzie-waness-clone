/**
 * Copyright 2018 Google Inc. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *     http://www.apache.org/licenses/LICENSE-2.0
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

// If the loader is already loaded, just stop.
if (!self.define) {
  let registry = {};

  // Used for `eval` and `importScripts` where we can't get script URL by other means.
  // In both cases, it's safe to use a global var because those functions are synchronous.
  let nextDefineUri;

  const singleRequire = (uri, parentUri) => {
    uri = new URL(uri + ".js", parentUri).href;
    return registry[uri] || (
      
        new Promise(resolve => {
          if ("document" in self) {
            const script = document.createElement("script");
            script.src = uri;
            script.onload = resolve;
            document.head.appendChild(script);
          } else {
            nextDefineUri = uri;
            importScripts(uri);
            resolve();
          }
        })
      
      .then(() => {
        let promise = registry[uri];
        if (!promise) {
          throw new Error(`Module ${uri} didn’t register its module`);
        }
        return promise;
      })
    );
  };

  self.define = (depsNames, factory) => {
    const uri = nextDefineUri || ("document" in self ? document.currentScript.src : "") || location.href;
    if (registry[uri]) {
      // Module is already loading or loaded.
      return;
    }
    let exports = {};
    const require = depUri => singleRequire(depUri, uri);
    const specialDeps = {
      module: { uri },
      exports,
      require
    };
    registry[uri] = Promise.all(depsNames.map(
      depName => specialDeps[depName] || require(depName)
    )).then(deps => {
      factory(...deps);
      return exports;
    });
  };
}
define(['./workbox-270e9e46'], (function (workbox) { 'use strict';

  self.addEventListener('message', event => {
    if (event.data && event.data.type === 'SKIP_WAITING') {
      self.skipWaiting();
    }
  });

  /**
   * The precacheAndRoute() method efficiently caches and responds to
   * requests for URLs in the manifest.
   * See https://goo.gl/S9QRab
   */
  workbox.precacheAndRoute([{
    "url": "//css/app.css",
    "revision": "a76ca886d36759a480bd1dd4870fa225"
  }, {
    "url": "//installer/css/app.css",
    "revision": "f66d5bbf552af1ea3260d987e379999f"
  }, {
    "url": "//installer/js/app.js",
    "revision": "b7c3cedffe42297cd30715a3be4f8bf1"
  }, {
    "url": "//js/app.js",
    "revision": "65f86449bfceccab840b1b1c96a142db"
  }, {
    "url": "/images/background.svg?d41d8cd98f00b204e9800998ecf8427e",
    "revision": "d41d8cd98f00b204e9800998ecf8427e"
  }, {
    "url": "/js/chunks/020cb7472ba258865196.js",
    "revision": null
  }, {
    "url": "/js/chunks/0bf82b02aceef9e89d70.js",
    "revision": null
  }, {
    "url": "/js/chunks/1b5b065344e919ff66ab.js",
    "revision": null
  }, {
    "url": "/js/chunks/1b88d147942c96718cf7.js",
    "revision": null
  }, {
    "url": "/js/chunks/1f7fa6a674db9f521f95.js",
    "revision": null
  }, {
    "url": "/js/chunks/20520b14338b5afdaca5.js",
    "revision": null
  }, {
    "url": "/js/chunks/28f6eb8231cf5d1e19a5.js",
    "revision": null
  }, {
    "url": "/js/chunks/29a101569d1983a51592.js",
    "revision": null
  }, {
    "url": "/js/chunks/31a5fa8692bf3f03a659.js",
    "revision": null
  }, {
    "url": "/js/chunks/423aa41f51c771c897b5.js",
    "revision": null
  }, {
    "url": "/js/chunks/49671b944b3a6842bbf5.js",
    "revision": null
  }, {
    "url": "/js/chunks/565a29ac1e0049c7a15e.js",
    "revision": null
  }, {
    "url": "/js/chunks/5cb522ce1a74e2e9f666.js",
    "revision": null
  }, {
    "url": "/js/chunks/5e5e45c8d4d900e9d17c.js",
    "revision": null
  }, {
    "url": "/js/chunks/60bf6b008cf938892490.js",
    "revision": null
  }, {
    "url": "/js/chunks/6a5c5c637dd1ebd82498.js",
    "revision": null
  }, {
    "url": "/js/chunks/7011d926189eeaa173e1.js",
    "revision": null
  }, {
    "url": "/js/chunks/70ef24eafe660bbaf162.js",
    "revision": null
  }, {
    "url": "/js/chunks/736ef25cd71fcfde3733.js",
    "revision": null
  }, {
    "url": "/js/chunks/888b398e126a91186373.js",
    "revision": null
  }, {
    "url": "/js/chunks/9a8fc121120fc62587ac.js",
    "revision": null
  }, {
    "url": "/js/chunks/9bfce239148b335872d5.js",
    "revision": null
  }, {
    "url": "/js/chunks/9f1e5961323a8a2983bc.js",
    "revision": null
  }, {
    "url": "/js/chunks/a60681ca0a536266cf9b.js",
    "revision": null
  }, {
    "url": "/js/chunks/a6fe46daca196c940bc9.js",
    "revision": null
  }, {
    "url": "/js/chunks/aa6aa0af4636bc415559.js",
    "revision": null
  }, {
    "url": "/js/chunks/acc28355d9ca4aee9ba9.js",
    "revision": null
  }, {
    "url": "/js/chunks/af53c3b56426dd916510.js",
    "revision": null
  }, {
    "url": "/js/chunks/b2b583ce8ddcc376c1dd.js",
    "revision": null
  }, {
    "url": "/js/chunks/b4b35bd46870e5ec707e.js",
    "revision": null
  }, {
    "url": "/js/chunks/c3f8eaf34a1f092d2aab.js",
    "revision": null
  }, {
    "url": "/js/chunks/c40b74bfb186b4cb0855.js",
    "revision": null
  }, {
    "url": "/js/chunks/caa9233f9e21078c50c6.js",
    "revision": null
  }, {
    "url": "/js/chunks/e10de7cf031f87db002a.js",
    "revision": null
  }, {
    "url": "/js/chunks/e9f5e9a5b848eb74e3da.js",
    "revision": null
  }, {
    "url": "/js/chunks/fb3a1a8981552e73ad82.js",
    "revision": null
  }], {});

}));
