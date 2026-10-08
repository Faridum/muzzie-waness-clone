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
  const singleRequire = name => {
    if (name !== 'require') {
      name = name + '.js';
    }
    let promise = Promise.resolve();
    if (!registry[name]) {
      
        promise = new Promise(async resolve => {
          if ("document" in self) {
            const script = document.createElement("script");
            script.src = name;
            document.head.appendChild(script);
            script.onload = resolve;
          } else {
            importScripts(name);
            resolve();
          }
        });
      
    }
    return promise.then(() => {
      if (!registry[name]) {
        throw new Error(`Module ${name} didn’t register its module`);
      }
      return registry[name];
    });
  };

  const require = (names, resolve) => {
    Promise.all(names.map(singleRequire))
      .then(modules => resolve(modules.length === 1 ? modules[0] : modules));
  };
  
  const registry = {
    require: Promise.resolve(require)
  };

  self.define = (moduleName, depsNames, factory) => {
    if (registry[moduleName]) {
      // Module is already loading or loaded.
      return;
    }
    registry[moduleName] = Promise.resolve().then(() => {
      let exports = {};
      const module = {
        uri: location.origin + moduleName.slice(1)
      };
      return Promise.all(
        depsNames.map(depName => {
          switch(depName) {
            case "exports":
              return exports;
            case "module":
              return module;
            default:
              return singleRequire(depName);
          }
        })
      ).then(deps => {
        const facValue = factory(...deps);
        if(!exports.default) {
          exports.default = facValue;
        }
        return exports;
      });
    });
  };
}
define("./service-worker.js",['./workbox-903cc191'], function (workbox) { 'use strict';

  /**
  * Welcome to your Workbox-powered service worker!
  *
  * You'll need to register this file in your web app.
  * See https://goo.gl/nhQhGp
  *
  * The rest of the code is auto-generated. Please don't update this file
  * directly; instead, make changes to your Workbox build configuration
  * and re-run your build process.
  * See https://goo.gl/2aRDsh
  */

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
    "revision": "ceb5e417ddc6590e13e19c3d6b92243b"
  }, {
    "url": "//installer/css/app.css",
    "revision": "fd1a5edb7162c9d582143cebe1bcd7ef"
  }, {
    "url": "//installer/js/app.js",
    "revision": "6c9971110ad9564e067f4fe818d90e88"
  }, {
    "url": "//js/app.js",
    "revision": "a3d6e1a541b1746c595088720aca7ac6"
  }, {
    "url": "/images/background.svg?8e388eefc37c10a2bc4c52cfbc043fa3",
    "revision": "8e388eefc37c10a2bc4c52cfbc043fa3"
  }, {
    "url": "/js/chunks/07a9d6596d2927b46d8f.js",
    "revision": null
  }, {
    "url": "/js/chunks/147db08c7fb8bb3b5d57.js",
    "revision": null
  }, {
    "url": "/js/chunks/1597e52856c937770c62.js",
    "revision": null
  }, {
    "url": "/js/chunks/19b4905df72673583cb1.js",
    "revision": null
  }, {
    "url": "/js/chunks/20520b14338b5afdaca5.js",
    "revision": null
  }, {
    "url": "/js/chunks/2b64d8936c825f5d058b.js",
    "revision": null
  }, {
    "url": "/js/chunks/2be470b8d3299efd50e2.js",
    "revision": null
  }, {
    "url": "/js/chunks/35b5920f2c2ad133899c.js",
    "revision": null
  }, {
    "url": "/js/chunks/3b00706cebd079ed17e1.js",
    "revision": null
  }, {
    "url": "/js/chunks/3bd0a2ac0df5186decfe.js",
    "revision": null
  }, {
    "url": "/js/chunks/50e798fa0b17ea15eda8.js",
    "revision": null
  }, {
    "url": "/js/chunks/531337aa4a2860fe1021.js",
    "revision": null
  }, {
    "url": "/js/chunks/63adf76ff726614f44ed.js",
    "revision": null
  }, {
    "url": "/js/chunks/6d83153e23389d15c8cb.js",
    "revision": null
  }, {
    "url": "/js/chunks/7accb7a6d226c0d30de6.js",
    "revision": null
  }, {
    "url": "/js/chunks/7bd917c6551aa0b87317.js",
    "revision": null
  }, {
    "url": "/js/chunks/854faf8796a6a0e2b3fa.js",
    "revision": null
  }, {
    "url": "/js/chunks/8d33ac00f08c8f23534e.js",
    "revision": null
  }, {
    "url": "/js/chunks/8e19a0feaf98e5ec5a16.js",
    "revision": null
  }, {
    "url": "/js/chunks/93094942ee74d148fc13.js",
    "revision": null
  }, {
    "url": "/js/chunks/93f2bb5ec1c6328c0534.js",
    "revision": null
  }, {
    "url": "/js/chunks/b25b4787038390a78933.js",
    "revision": null
  }, {
    "url": "/js/chunks/b32b080bfef5826d777e.js",
    "revision": null
  }, {
    "url": "/js/chunks/bc4c27af51160a6e1da6.js",
    "revision": null
  }, {
    "url": "/js/chunks/bd30493d6b5242625217.js",
    "revision": null
  }, {
    "url": "/js/chunks/bf069a1710c22bf89f45.js",
    "revision": null
  }, {
    "url": "/js/chunks/cd9fad471010ba92f20d.js",
    "revision": null
  }, {
    "url": "/js/chunks/cdcf52c72815f9571833.js",
    "revision": null
  }, {
    "url": "/js/chunks/d26166a2cf64fc97d709.js",
    "revision": null
  }, {
    "url": "/js/chunks/d61c78d996f943c61f3c.js",
    "revision": null
  }, {
    "url": "/js/chunks/d918bc21437587bad3b7.js",
    "revision": null
  }, {
    "url": "/js/chunks/dfd5bc00c25114e559fc.js",
    "revision": null
  }, {
    "url": "/js/chunks/eaab423876ac9ce28331.js",
    "revision": null
  }, {
    "url": "/js/chunks/f64c3181f0047224d7ad.js",
    "revision": null
  }, {
    "url": "/js/chunks/f700df51da00ec3d6359.js",
    "revision": null
  }, {
    "url": "/js/chunks/fb3a1a8981552e73ad82.js",
    "revision": null
  }], {});

});
