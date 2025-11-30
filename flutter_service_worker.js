'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {".git/COMMIT_EDITMSG": "a8297d555dd34879e8e48e1cf12acefa",
".git/config": "6ef16cc7deff4232aaa4dfb35a3a223b",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "5029bfab85b1c39281aa9697379ea444",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/hooks/sendemail-validate.sample": "4d67df3a8d5c98cb8565c07e42be0b04",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/index": "e5c9de4431013b1d2d5486c38b7705da",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "b8453650d3439ce676c21424a37f005d",
".git/logs/refs/heads/main": "272e50f120873f156561b22d7bd4f677",
".git/logs/refs/remotes/origin/main": "0388d4cf2adc5bb7ea2781cdf588a710",
".git/objects/01/318aaf8b90df5548fe787dbda7101e40260390": "dea478708f09ddb21678df39fc4a99f9",
".git/objects/02/1d4f3579879a4ac147edbbd8ac2d91e2bc7323": "9e9721befbee4797263ad5370cd904ff",
".git/objects/03/fb5cc9c6d201e78503672cecd86cb576b8e10a": "58f7c7269dcb01c0f67df2f14ea5f4c9",
".git/objects/06/7c7785870956dfeda8a80acbd68ee91b49ab73": "26359e96ff2bdc623ed1dc4e6b276d5e",
".git/objects/0a/2305548baa5a069ade7a4fea57ae3d1d5ca51d": "304579acca57ea5e4016e154fe400a4b",
".git/objects/0f/9c43bfea51ec85ebc8173a4f2b489f4abb2a1f": "149b4be0afbc2014b44a0c320e74e045",
".git/objects/10/2d2e7978e6c45b2219762b34e4c9ed6f8127db": "c2db7eb4ea2fe6f8ad0f313e92f25d54",
".git/objects/11/108c47a829fc8631d885f6071f32fa430b4ad3": "4531238a58cbd7b2c65a3b621beade0a",
".git/objects/17/48f72e5c9e46026c71054ad2fd923ad1ea75e4": "73aa881ff8a1f28f129e78cea4bd8e46",
".git/objects/19/f998764558558c2c267bcd8274407112c9a54f": "a8d810668f4205a5b0ecdbc82508f33a",
".git/objects/1a/a830743debb90821a2fb91465caf6deb5b46b4": "4064f3cf6a37bf1931d19b9133397266",
".git/objects/1d/1756324da731eb123ab746dd1d8233b5427311": "9c29a2d2872e0aa657bf821849af4ec8",
".git/objects/20/3a3ff5cc524ede7e585dff54454bd63a1b0f36": "4b23a88a964550066839c18c1b5c461e",
".git/objects/21/01c8b6080f688a7308bed08c4d25414f022e14": "b197c4a4c4b491b75dddc0e705ac9243",
".git/objects/29/79a2263e32171db65764b057d96dd9c26e8c16": "b77331b72ba5dbe1a268a07b5e2ac075",
".git/objects/29/f22f56f0c9903bf90b2a78ef505b36d89a9725": "e85914d97d264694217ae7558d414e81",
".git/objects/49/a25f5a1a6a49c3f640e2d6faae0ee541b55b2a": "287d305ec33cbe8b327e7bf5856d0ac3",
".git/objects/4d/bf9da7bcce5387354fe394985b98ebae39df43": "534c022f4a0845274cbd61ff6c9c9c33",
".git/objects/4f/40dabe4430b4d7288c6ae92d8fc3e17cf8e410": "7c1843130f2c3787540ded5445c7793a",
".git/objects/4f/fbe6ec4693664cb4ff395edf3d949bd4607391": "2beb9ca6c799e0ff64e0ad79f9e55e69",
".git/objects/50/d72cb01a207f8f36393e79d03989933d6a76c5": "e60905e45a27593d431d862753c962dc",
".git/objects/55/d9dfb07fe7e04e993243f13458c055a051f3df": "db574a3cb817947aa34257877fecfb0b",
".git/objects/55/f76523ea607143cb3b7ec22a83ae8ed95f190e": "4839b95e8fe9f4ef13c90c2dca733911",
".git/objects/59/62efb2dffef4c259bda261b128fcab4b659c34": "11e1a7683fedc73b6a0da57ee3c6a112",
".git/objects/5d/8073339a82a12ff3d8c92c5a660c60f1a2d94a": "9f3fc5b2f8d5e7b917c4f4c6eb4d88dd",
".git/objects/5d/d2e1c2be17e8460324e8e07143a1acec4d5e9a": "9a530844b0512f33a189359fb345de74",
".git/objects/6b/9862a1351012dc0f337c9ee5067ed3dbfbb439": "85896cd5fba127825eb58df13dfac82b",
".git/objects/6c/4fbd38c90a2aceebdf9205fd01e6fd7acaa6df": "6069a7c50d86587c629a16f3e0afd54b",
".git/objects/6d/e68bec667a8a90c8c007ef83e50691e7baf798": "bf8623afdfd86545db65bf834bbd22d3",
".git/objects/6f/96d184bf12d40e666f254c9492b7b22304d8f4": "2307b1a444b8b5b76b92a4dd1eb19086",
".git/objects/70/0f826317c10cf3705b544752d0bf5b74a01e0e": "abf1d252252e5a479fcc36ba0e4bd391",
".git/objects/71/59ff34092f4cf54d657fd6fc63fc688c67aaf4": "3a4afdff4f866f775c993e1aca0edb5c",
".git/objects/74/3b8f24bc6287d7064ca8aa685812021a0653fc": "ba4278ae1a4028f1950e016cb10ae5cd",
".git/objects/75/5c2bd2d4fe86bf98e1a4817caee5a693f869f2": "1bba3721fe7a8b75c53cabaa9df8d6a2",
".git/objects/79/73b5bd16977b1ec304469688aef4e2f5935fc5": "34f3d610269e689c2dc7a7c56cd1543c",
".git/objects/7a/6c1911dddaea52e2dbffc15e45e428ec9a9915": "f1dee6885dc6f71f357a8e825bda0286",
".git/objects/82/039646eae58381941a128edf3dd254c98a2961": "ba71a4099c57c699fe2ac9b609735b8e",
".git/objects/87/01d8e154dba3542335e8fe16ce4779d22cddb2": "4b73bbc0648b258c7ca101ffcb70a50f",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/89/464f8d14bc7642986287de39389995b495c9d8": "442d70496d56d7a7b6d14024b7cc8cd5",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/8d/f27e768e6fcd07974a1034b9a61e2f1894c947": "1e2ca4edb45000b42e65043bee02d7e0",
".git/objects/98/0d49437042d93ffa850a60d02cef584a35a85c": "8e18e4c1b6c83800103ff097cc222444",
".git/objects/98/75a34ddecf1c1ee29360e274d5a9adeb98e4e7": "76ecff05ff833af4b39e1abdf11a35e1",
".git/objects/9b/3ef5f169177a64f91eafe11e52b58c60db3df2": "91d370e4f73d42e0a622f3e44af9e7b1",
".git/objects/9e/3b4630b3b8461ff43c272714e00bb47942263e": "accf36d08c0545fa02199021e5902d52",
".git/objects/9e/56797d0b5a3099a32bce91c7191715a88df885": "c503c1cdd301a850acb330ed67ff340a",
".git/objects/aa/af1bb3d388daf68216f29f4ad6d55d522641a3": "79e5b1805644c4ff8b3545b95f602325",
".git/objects/ac/aeb5030cab4995fe091ee6f0d049b67ebc068e": "576393670d57c9da432c3329fbabae76",
".git/objects/ad/a9ba35fed8da017cd4ba97e0c4e90297e9e8f9": "eeecfb0adb3b2ab2e7500242a657bbc3",
".git/objects/b1/06a48f919cfcfead132e1e2a2e3894c6831123": "2e16858c66ea70bffee01c4e03b65f61",
".git/objects/b2/a80e9d5197d79420bfcc74e69707655dfd390e": "6977820624024a0e3ae43061b22bb4df",
".git/objects/b6/b8806f5f9d33389d53c2868e6ea1aca7445229": "b14016efdbcda10804235f3a45562bbf",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/bb/bd636c5b3d40a987b8e592eaa8a8bf67ac4fd3": "884c9cd51ee776ad513e6cc7fd6aa9d6",
".git/objects/be/21eda605fa96c9dec9559b2b17086867e9e562": "a7ecf1902657550ff773a723c2fb5cb2",
".git/objects/bf/e04053abde1772054b17d78e509fbafde50c65": "8cc1e7996ca13be3f4aed46454911d23",
".git/objects/c1/48a93188b9f8ecc8dc0a2d7f95166d4a4de0ca": "7442f67282ab476556ff7b5572b048fa",
".git/objects/c4/016f7d68c0d70816a0c784867168ffa8f419e1": "fdf8b8a8484741e7a3a558ed9d22f21d",
".git/objects/ca/3bba02c77c467ef18cffe2d4c857e003ad6d5d": "316e3d817e75cf7b1fd9b0226c088a43",
".git/objects/d4/3532a2348cc9c26053ddb5802f0e5d4b8abc05": "3dad9b209346b1723bb2cc68e7e42a44",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/da/5f3e9e80b5d76e96607c82f757957012a302a3": "068804653d5770d84fb83b97dd9ab8db",
".git/objects/db/c081381ad7a4c03a4eaf72d7f769c219aac87f": "542d4aad63e9001005568ac22356eb70",
".git/objects/e2/fefff75c03bcb107b0baa8ec030882dcabec94": "26b264023f400b13302da9b85d6ef8ad",
".git/objects/e3/e9ee754c75ae07cc3d19f9b8c1e656cc4946a1": "14066365125dcce5aec8eb1454f0d127",
".git/objects/e9/94225c71c957162e2dcc06abe8295e482f93a2": "2eed33506ed70a5848a0b06f5b754f2c",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/ed/b55d4deb8363b6afa65df71d1f9fd8c7787f22": "886ebb77561ff26a755e09883903891d",
".git/objects/ed/d2585d7a994c1a80678a17ce3aa6fb2082a8c3": "c39efef9fccdc7aa10555e4a9264b353",
".git/objects/ee/4aed0e6833e9b67612b525e1d15b99147dc429": "98874d5a8badb6a7d6bf725616446631",
".git/objects/ef/2fff6f772622384292cb25c8dc5c65f091bb89": "714620d6cda1323b54ec8f53c495e82e",
".git/objects/f0/f507195e0025b6489d568f4460b9f2852006d2": "e971fe8188e93a878f75bbd3dbcdd739",
".git/objects/f1/92de9b0f3be9977f9af7737ba3317fcb7af379": "b994aa0575370df54368c7b1b25d4950",
".git/objects/f2/04823a42f2d890f945f70d88b8e2d921c6ae26": "6b47f314ffc35cf6a1ced3208ecc857d",
".git/objects/f5/1fac3b73eeac7f383a3af0363137a108259cd4": "118e2408cb2ab0a26c9cc1aef00c91f7",
".git/objects/f5/72b90ef57ee79b82dd846c6871359a7cb10404": "e68f5265f0bb82d792ff536dcb99d803",
".git/objects/f6/50cff2d50acd70079a4cbeba7a0df4d622c579": "4bedfdf21a58b69e54a645d9b1ff4c7d",
".git/objects/f6/64e66416e625b41e24be69964b643ffebe3c1d": "1d4d325a22163dd3454d7d2dac7f08e3",
".git/objects/fa/ac1da95b88b846ee349911bf1a887828363840": "32b334baed8fa1052f9ab992d7ff4979",
".git/objects/fe/3914bcf3baf9d87a873a444cac8aaf9dcd54c1": "372add7dd6cdabc32b9333e8d66bff72",
".git/objects/fe/3b987e61ed346808d9aa023ce3073530ad7426": "dc7db10bf25046b27091222383ede515",
".git/refs/heads/main": "7b59a3723b670db21145a2cf174fabdc",
".git/refs/remotes/origin/main": "7b59a3723b670db21145a2cf174fabdc",
"assets/AssetManifest.bin": "2afa70c0d45145cc7ee4dac0a92a2d93",
"assets/AssetManifest.bin.json": "741660aea92d1d59c92b57d659e99da6",
"assets/AssetManifest.json": "a234e2ea88f5e1376511f8be9fd99693",
"assets/assets/fonts/dear-sans-condensed-bold.otf": "c17fcf8a61804192d81e606348805fdd",
"assets/assets/images/app_store.png": "8de007138379f7592b90b2a2b4cb22e5",
"assets/assets/images/chat.png": "6e4789927328f26f1cea5c1e41216354",
"assets/assets/images/earth.jpeg": "4a60735558069e979771fce36cd94f65",
"assets/assets/images/earth.png": "87a6443e6ec47be15440787429ec6581",
"assets/assets/images/goodbye.png": "11ddb640c7f0c5272ce6f94ecd30b8b1",
"assets/assets/images/menuhat_1.png": "da769678304d3c732769c95a810619ee",
"assets/assets/images/menuhat_2.png": "3cffddf992fb75d45aa24647c7bb55b6",
"assets/assets/images/menuhat_3.png": "99e8a2b0eeffe07abff367b70c6f9432",
"assets/assets/images/menuhat_4.png": "77e644ac5dddf9034447ab5f5fd4c7c3",
"assets/assets/images/money_1.png": "a8fbf3f3dd6d67985f31f60fa1789f7d",
"assets/assets/images/money_2.png": "0290215fa5e7f5ea70837a68b3a7f7d2",
"assets/assets/images/money_3.png": "27be6b95ea2b10795cb6dc9083eeed59",
"assets/assets/images/money_4.png": "4e65e26e48b37b19aabfd84c4a9c8c67",
"assets/assets/images/my_photo.jpeg": "d249527fa816572728b22ab6bbf4e289",
"assets/assets/images/my_photo.jpg": "bb7da984ba21db203c0fdf6c6b632a64",
"assets/assets/images/play_store.png": "74647d89f1e293e316df049925d9f358",
"assets/assets/images/smart_1.png": "f1aa8c460fbdfa0feacbfdb200c84b53",
"assets/assets/images/smart_2.png": "f42e77ad09659fb01b6c5221320d41f6",
"assets/assets/images/smart_3.png": "d06fa4c6e8f37af6e6b98a549c1ef5d9",
"assets/assets/images/smart_4.png": "877722e5d4fa28805a0fea36ad174250",
"assets/assets/images/soccer_1.png": "19ecd2ed22ff4d5ab81ade441e9c8b78",
"assets/assets/images/soccer_2.png": "9cdf53c3846cdea7512488f119b6443e",
"assets/assets/images/soccer_3.png": "81894ff92dab7a21e5037317db9b0273",
"assets/assets/images/soccer_4.png": "f53722fdd073a3fb0f919160c229e142",
"assets/FontManifest.json": "1902f770c3447b5940a0dd6ca7608706",
"assets/fonts/MaterialIcons-Regular.otf": "01b0bfde0339974b3a87f096752b304b",
"assets/NOTICES": "4e9b4cf23246fa3c8c2f4d3a39f7e19d",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "33b7d9392238c04c131b6ce224e13711",
"assets/packages/font_awesome_flutter/lib/fonts/Font-Awesome-7-Brands-Regular-400.otf": "2935cc499f0654bb846b03470152f673",
"assets/packages/font_awesome_flutter/lib/fonts/Font-Awesome-7-Free-Regular-400.otf": "b2703f18eee8303425a5342dba6958db",
"assets/packages/font_awesome_flutter/lib/fonts/Font-Awesome-7-Free-Solid-900.otf": "5b8d20acec3e57711717f61417c1be44",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"canvaskit/canvaskit.js": "140ccb7d34d0a55065fbd422b843add6",
"canvaskit/canvaskit.js.symbols": "58832fbed59e00d2190aa295c4d70360",
"canvaskit/canvaskit.wasm": "07b9f5853202304d3b0749d9306573cc",
"canvaskit/chromium/canvaskit.js": "5e27aae346eee469027c80af0751d53d",
"canvaskit/chromium/canvaskit.js.symbols": "193deaca1a1424049326d4a91ad1d88d",
"canvaskit/chromium/canvaskit.wasm": "24c77e750a7fa6d474198905249ff506",
"canvaskit/skwasm.js": "1ef3ea3a0fec4569e5d531da25f34095",
"canvaskit/skwasm.js.symbols": "0088242d10d7e7d6d2649d1fe1bda7c1",
"canvaskit/skwasm.wasm": "264db41426307cfc7fa44b95a7772109",
"canvaskit/skwasm_heavy.js": "413f5b2b2d9345f37de148e2544f584f",
"canvaskit/skwasm_heavy.js.symbols": "3c01ec03b5de6d62c34e17014d1decd3",
"canvaskit/skwasm_heavy.wasm": "8034ad26ba2485dab2fd49bdd786837b",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "888483df48293866f9f41d3d9274a779",
"flutter_bootstrap.js": "3291e30286cb97c4e2c6996a42288cdc",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "548ab89746ae6129c774b22b19f983df",
"/": "548ab89746ae6129c774b22b19f983df",
"main.dart.js": "5f652646940359e120fa898390fe55e6",
"manifest.json": "e74af8957b5899dc6da961caee768ec9",
"version.json": "009c9e65172e010890f7f65fde438006"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
