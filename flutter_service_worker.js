'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {".git/COMMIT_EDITMSG": "f2103becb90fbb1dc7d6c791877e05b4",
".git/config": "728f2cbe2f6fb399f6ef64c3ac077e89",
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
".git/index": "d4837ff682a2540b050c8b53363aefec",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "123804e11c0d6eb81adcaa9427cf7fad",
".git/logs/refs/heads/main": "c02d40c03747c263873b1baf44b16a81",
".git/logs/refs/remotes/origin/main": "223a56527efedbf407e877cc00550a6c",
".git/objects/02/1d4f3579879a4ac147edbbd8ac2d91e2bc7323": "9e9721befbee4797263ad5370cd904ff",
".git/objects/02/302418bb690df3e9e71e0d32f94f9bc1949949": "bcc6d275a412b00a781c1faf4c3b5d51",
".git/objects/03/fb5cc9c6d201e78503672cecd86cb576b8e10a": "58f7c7269dcb01c0f67df2f14ea5f4c9",
".git/objects/06/7c7785870956dfeda8a80acbd68ee91b49ab73": "26359e96ff2bdc623ed1dc4e6b276d5e",
".git/objects/08/c7e8344db5fa7bec14e4a214a13dc1a33ef2a3": "d77b4b8ec37477da0c4fb25696373609",
".git/objects/09/1dc12c20fe94c0403b9d44880ebd24697aa666": "f17030ac7463c4acc83eff3a04e5f1ab",
".git/objects/0f/9c43bfea51ec85ebc8173a4f2b489f4abb2a1f": "149b4be0afbc2014b44a0c320e74e045",
".git/objects/1d/1756324da731eb123ab746dd1d8233b5427311": "9c29a2d2872e0aa657bf821849af4ec8",
".git/objects/20/3a3ff5cc524ede7e585dff54454bd63a1b0f36": "4b23a88a964550066839c18c1b5c461e",
".git/objects/21/01c8b6080f688a7308bed08c4d25414f022e14": "b197c4a4c4b491b75dddc0e705ac9243",
".git/objects/23/f1f388eb5a5bd67328ab5c6e6f35026a44209a": "418dd37071dd6139f83ca43f5664f280",
".git/objects/29/f22f56f0c9903bf90b2a78ef505b36d89a9725": "e85914d97d264694217ae7558d414e81",
".git/objects/2c/4f64256b4447c2530cfdbbe463512029ba5eef": "114ac0f37e62f7693565f519d4e76558",
".git/objects/2c/63099bdb8d9883a0d4c112926f956632aeda95": "fbfabbc4402ef7d3ab95875687c5430f",
".git/objects/2d/1e5a590ad6ce514789c6083eb09d8e6bcdb864": "58489ad37a5d1b5d180327d5f9ec4309",
".git/objects/2f/cadb0f3f52abd472d4a44cdb42ee1938efb097": "b785ae9a334e4754fa20d4f72822895c",
".git/objects/33/ca183cd6ece0bfbcb93eeb30a75021645956f6": "219574c451991bf3f7dcaaecc33a581a",
".git/objects/35/0662f82c7b8a51437f22cb026efb823c604a3f": "16d0a2f085c8250161d4f82ab8e2562b",
".git/objects/35/ad766595904e065262be4b1a8431704af0140c": "273d7537f8c2478cc6937d2367470c81",
".git/objects/3d/56f5e0f4f01440f4959d8d59c608b0d31dbb9f": "7bb312caf33bfb5d8d2ec2aece9b3a11",
".git/objects/3d/c1dd1eea9419d253c53758f0cff9f4e1160e19": "65f080749d724a6192019ea177ac1b72",
".git/objects/40/b7919cd4fe53dc7d26eff3728f42ec85b23e64": "1b999ccf871c0da9934fc26bbebff270",
".git/objects/46/c659afb9b637e9aa45ec5e0138909503eb7256": "36955fb0a5e1dc30cfbbc0152a277675",
".git/objects/47/1a1800b934b9d0efc267623e3de1af550ed997": "b90050cb5a719710015098533319ae9f",
".git/objects/49/a25f5a1a6a49c3f640e2d6faae0ee541b55b2a": "287d305ec33cbe8b327e7bf5856d0ac3",
".git/objects/4d/bf9da7bcce5387354fe394985b98ebae39df43": "534c022f4a0845274cbd61ff6c9c9c33",
".git/objects/4f/40dabe4430b4d7288c6ae92d8fc3e17cf8e410": "7c1843130f2c3787540ded5445c7793a",
".git/objects/4f/6393d58b464172660fc38cbb71a0ac519365f8": "435e556fc2c83789e2f7465791a9eb15",
".git/objects/4f/fbe6ec4693664cb4ff395edf3d949bd4607391": "2beb9ca6c799e0ff64e0ad79f9e55e69",
".git/objects/50/d72cb01a207f8f36393e79d03989933d6a76c5": "e60905e45a27593d431d862753c962dc",
".git/objects/54/407b11fd7f28f32ce245807af48c4500a6ab8f": "8f9a5e997e46c72303c072563cfe1336",
".git/objects/55/d9dfb07fe7e04e993243f13458c055a051f3df": "db574a3cb817947aa34257877fecfb0b",
".git/objects/55/f76523ea607143cb3b7ec22a83ae8ed95f190e": "4839b95e8fe9f4ef13c90c2dca733911",
".git/objects/56/664f5bbaab0679ffe5c970033a50389b40d1f1": "49b36a83c40c13ff90d7e11c86d8a781",
".git/objects/57/8abed542d229efc9d272d44bd267c832b98cbf": "71ec7a13b65c185029c42909dbb0f28c",
".git/objects/59/62efb2dffef4c259bda261b128fcab4b659c34": "11e1a7683fedc73b6a0da57ee3c6a112",
".git/objects/59/940d3b90719cd58761b6a831ff21d57d0e2aaf": "8ac195ba36f02189fd95c3c807b97812",
".git/objects/5b/9920b4b3fa02a99ba40aab65f30f7686cef954": "b610a5616a46049575f47da13659cce3",
".git/objects/5d/8073339a82a12ff3d8c92c5a660c60f1a2d94a": "9f3fc5b2f8d5e7b917c4f4c6eb4d88dd",
".git/objects/5d/d2e1c2be17e8460324e8e07143a1acec4d5e9a": "9a530844b0512f33a189359fb345de74",
".git/objects/60/9eaca9aed984d7b0a8240da1f09ccb319fcef2": "3efaa6628f0f3081f0cd3399a122ff8e",
".git/objects/60/9fe72dbe1e5b629099582858c62d8bf640d50e": "158f024ae494fc10af1f066f5f329615",
".git/objects/64/858fffd709f0423c2d4defa162e5894198f4c2": "507bd8d8caa5cdd9a5e41928cb7fa0de",
".git/objects/6b/9862a1351012dc0f337c9ee5067ed3dbfbb439": "85896cd5fba127825eb58df13dfac82b",
".git/objects/6c/4fbd38c90a2aceebdf9205fd01e6fd7acaa6df": "6069a7c50d86587c629a16f3e0afd54b",
".git/objects/6d/e68bec667a8a90c8c007ef83e50691e7baf798": "bf8623afdfd86545db65bf834bbd22d3",
".git/objects/6f/96d184bf12d40e666f254c9492b7b22304d8f4": "2307b1a444b8b5b76b92a4dd1eb19086",
".git/objects/70/0f826317c10cf3705b544752d0bf5b74a01e0e": "abf1d252252e5a479fcc36ba0e4bd391",
".git/objects/71/59ff34092f4cf54d657fd6fc63fc688c67aaf4": "3a4afdff4f866f775c993e1aca0edb5c",
".git/objects/71/f13d2d8055f9014e73f910029d5b017b64ac8a": "6b21e7c4a76b8f23223ff34ed2a0ccec",
".git/objects/74/3b8f24bc6287d7064ca8aa685812021a0653fc": "ba4278ae1a4028f1950e016cb10ae5cd",
".git/objects/75/5c2bd2d4fe86bf98e1a4817caee5a693f869f2": "1bba3721fe7a8b75c53cabaa9df8d6a2",
".git/objects/75/67284e14fd6dc75b47cc82b66365132bdd5df6": "a04eab82f63c985e0a418fc3cde6dad2",
".git/objects/76/6f043adb864327df864c1b6a04e01258c33c6a": "4c60d65b3c630c387411162433533ffd",
".git/objects/79/73b5bd16977b1ec304469688aef4e2f5935fc5": "34f3d610269e689c2dc7a7c56cd1543c",
".git/objects/79/ed2514a162117e32ed8d3a51c323c9aedfd5d8": "bb1c9d5fc2604f3722f13829e3d65462",
".git/objects/7a/6c1911dddaea52e2dbffc15e45e428ec9a9915": "f1dee6885dc6f71f357a8e825bda0286",
".git/objects/7b/f861f0c4927bde5066a8d651b1af962c8790a1": "23588339f5696400c0ec7fc9dc727ead",
".git/objects/7e/c6de0698a6dd3824165e9cd404da4ece11aabc": "baef58c5bf1f34ddf35f00a61061f272",
".git/objects/82/039646eae58381941a128edf3dd254c98a2961": "ba71a4099c57c699fe2ac9b609735b8e",
".git/objects/85/4f3692e9b1ee4da38a4b5a5e8f5c9d6cfcf5c7": "f5d37169640475606a0a2008af535533",
".git/objects/86/0f6da2b5ccc839b6c19a15973c385767f82115": "9963f93e0b4ac9d91738b6c16add7fbc",
".git/objects/87/01d8e154dba3542335e8fe16ce4779d22cddb2": "4b73bbc0648b258c7ca101ffcb70a50f",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/89/464f8d14bc7642986287de39389995b495c9d8": "442d70496d56d7a7b6d14024b7cc8cd5",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/8d/73152ec39a893b64214da10d45b09743a64443": "e22a3bbf06996e01fc6b7bd6ef675ec9",
".git/objects/8d/f27e768e6fcd07974a1034b9a61e2f1894c947": "1e2ca4edb45000b42e65043bee02d7e0",
".git/objects/90/9651a825dcd30248a3b7b130fb4a9ee02c148c": "89bb879285a1f6d1cf3f52f09c867b70",
".git/objects/92/d58d9984d86d974d387a7692ced4208c0d599d": "409c230ba47177cfc3da83aff90bb20f",
".git/objects/98/0d49437042d93ffa850a60d02cef584a35a85c": "8e18e4c1b6c83800103ff097cc222444",
".git/objects/98/d6cd3c019c4e7cee7bc5fcbdfbd6385b709207": "0b73f9ee9e55b2750a9779bd5e2eeba4",
".git/objects/99/a9ca91e7bb6580948448b22a2106ef6e5e7d70": "3f2263648450aad0b1760c1de7952eec",
".git/objects/9b/0cfd638f22229f346ab5a2a082fa7f3d992093": "aeb6e8c5d64f1bc8b4480d4a926730e6",
".git/objects/9b/3ef5f169177a64f91eafe11e52b58c60db3df2": "91d370e4f73d42e0a622f3e44af9e7b1",
".git/objects/9c/bd7a8c540cd5454268543518d77652f140b4f0": "d5b7f32c3638429fcc171b06f45812e4",
".git/objects/9e/3b4630b3b8461ff43c272714e00bb47942263e": "accf36d08c0545fa02199021e5902d52",
".git/objects/9e/56797d0b5a3099a32bce91c7191715a88df885": "c503c1cdd301a850acb330ed67ff340a",
".git/objects/9e/ff01ca865c3b0ba84e9a1bf95dbec10f14f69a": "1ef7b57e38c5eadfad47e767e9410ae0",
".git/objects/a2/a58e4d46d1076e30fea6c9d5a8199bd3aff815": "66cc828ebf4bb4ba1690684c465eeb3e",
".git/objects/aa/af1bb3d388daf68216f29f4ad6d55d522641a3": "79e5b1805644c4ff8b3545b95f602325",
".git/objects/ab/60f9146bbcb9397a452a94b91c4fa2dd9b2336": "a989ba5bc14b9161cbc8da1efc0e9c25",
".git/objects/ab/6843a05eaf5d763b31305ceafd67d463f57395": "167057589b6902a4ed4c4f7fafd6241a",
".git/objects/ac/aeb5030cab4995fe091ee6f0d049b67ebc068e": "576393670d57c9da432c3329fbabae76",
".git/objects/ad/06bf02ba82a4d09b2a20632ead872ed5aea686": "ae7fb1b3b19b2a3b4950e7ca8a3088b8",
".git/objects/af/f9ce972b0818be1852a3d68e57da642e9ba14a": "ffc3ce7478850f33779280a46dc06dbc",
".git/objects/b1/06a48f919cfcfead132e1e2a2e3894c6831123": "2e16858c66ea70bffee01c4e03b65f61",
".git/objects/b1/458852911b4c8c4911883916a1769dca4bf2ed": "1b0eec587e5c72e5f1dca04fbfb1e91e",
".git/objects/b2/a80e9d5197d79420bfcc74e69707655dfd390e": "6977820624024a0e3ae43061b22bb4df",
".git/objects/b5/39c63a1b5475dcec1296a504f1d60aff77066f": "9ec071a74e978f592f9b963a9f7e99af",
".git/objects/b6/b8806f5f9d33389d53c2868e6ea1aca7445229": "b14016efdbcda10804235f3a45562bbf",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b8/696365e84cec520865345668c7cb63e85fc5dc": "18e4e7b3b5874366c67ba602c3c965a2",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/bb/bd636c5b3d40a987b8e592eaa8a8bf67ac4fd3": "884c9cd51ee776ad513e6cc7fd6aa9d6",
".git/objects/be/21eda605fa96c9dec9559b2b17086867e9e562": "a7ecf1902657550ff773a723c2fb5cb2",
".git/objects/be/f3ab3f083c780a0d920e801e890fb922e79b3a": "277002f314a347831e760c3e008e3f0d",
".git/objects/c0/7c3898ce8f378a41f19039dfdf2681a7bfe921": "d9df9e7135ab850e79600b981e4b9700",
".git/objects/c0/b2af9192416afba6028eb13dd775a5bab6692c": "b144f06a00fe306e5cd38c652c633a46",
".git/objects/c1/48a93188b9f8ecc8dc0a2d7f95166d4a4de0ca": "7442f67282ab476556ff7b5572b048fa",
".git/objects/c4/016f7d68c0d70816a0c784867168ffa8f419e1": "fdf8b8a8484741e7a3a558ed9d22f21d",
".git/objects/c4/7946c810bdaafc6d1b711f2187407b0807cb40": "428c1c86318195488eaed211c39e657a",
".git/objects/c4/9029fcbd35c7956f4165b1457987145bf0f9f6": "e4e3aa67036879d49edec2a1967ae351",
".git/objects/c5/19cf158e46c5d50171f3a0c816c2781d83f863": "53872cf24c6766e48ae33547413772ab",
".git/objects/ca/3bba02c77c467ef18cffe2d4c857e003ad6d5d": "316e3d817e75cf7b1fd9b0226c088a43",
".git/objects/ca/5e3f168730b5a6f25f33524c7b7c251246942c": "ada470a947cb734abf73c7fbd54d6268",
".git/objects/ca/9d9b59df8b2809901a3efb1e06c1633988ce07": "38aa35f341ccb7cca5be26771877b4dd",
".git/objects/cb/6bceffa26ff184db23d1a8124941fafc11b6fc": "9462e1b348e8e02e954af8dcb6cf584b",
".git/objects/ce/e03cd8d0d99e15ea0cf3303c98de7db9e8607b": "fc1d0f8b79acc2e1669732fa30b60f21",
".git/objects/cf/b0b4e7847262b25734e3006f55148eecdb7053": "01ab6bb2923f9ec263c45775779903a5",
".git/objects/d0/db0b06fbad8e0871ff67940a9102205cfeb29d": "c1d85d2fb733647a4d984b37eec908bf",
".git/objects/d0/e08fa3fd9a81a5c334052813109fb1131561b1": "f784501b030c4b7653cf8f309cb112d0",
".git/objects/d4/3532a2348cc9c26053ddb5802f0e5d4b8abc05": "3dad9b209346b1723bb2cc68e7e42a44",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/d8/d73734050a613fd44ba7794970cfc0385772da": "17ef4dc2782cfc9f0385bd4e0b55820a",
".git/objects/d9/c216a809fd29600f4bfb37e5661df925d75103": "dca2bf67deb38d755913564392090055",
".git/objects/da/5f3e9e80b5d76e96607c82f757957012a302a3": "068804653d5770d84fb83b97dd9ab8db",
".git/objects/db/0d3c0155b664352cfe198f24d25b5650c68339": "13221c95cf2bdcfe35d7147ba3e86a24",
".git/objects/db/c081381ad7a4c03a4eaf72d7f769c219aac87f": "542d4aad63e9001005568ac22356eb70",
".git/objects/dd/88f36a574fb80a3639341ead4dad66df0d8868": "43c19fb69be9643ba43932e969004e7d",
".git/objects/dd/a32a33af65a53030555b2f2d1e3052701279c4": "1c27daea482812435896b90fdae7e2dc",
".git/objects/df/2c7d808094ac8d411fafd93b35ea338d64a6c0": "7bb7253a1e3bd86e9cd8970d000afd52",
".git/objects/e2/fefff75c03bcb107b0baa8ec030882dcabec94": "26b264023f400b13302da9b85d6ef8ad",
".git/objects/e3/e9ee754c75ae07cc3d19f9b8c1e656cc4946a1": "14066365125dcce5aec8eb1454f0d127",
".git/objects/e9/94225c71c957162e2dcc06abe8295e482f93a2": "2eed33506ed70a5848a0b06f5b754f2c",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/ed/b55d4deb8363b6afa65df71d1f9fd8c7787f22": "886ebb77561ff26a755e09883903891d",
".git/objects/ed/d2585d7a994c1a80678a17ce3aa6fb2082a8c3": "c39efef9fccdc7aa10555e4a9264b353",
".git/objects/ee/4aed0e6833e9b67612b525e1d15b99147dc429": "98874d5a8badb6a7d6bf725616446631",
".git/objects/ef/2fff6f772622384292cb25c8dc5c65f091bb89": "714620d6cda1323b54ec8f53c495e82e",
".git/objects/f0/f507195e0025b6489d568f4460b9f2852006d2": "e971fe8188e93a878f75bbd3dbcdd739",
".git/objects/f1/0ca6be4e0d76e699d67eff32ac7b5cb420cbe8": "8a9e973d00a813e0a6f971a0983d2fc1",
".git/objects/f1/12c3bca7b65712c2c494c00a00f842b9b7171a": "15d36a394434fdbc738d62008b5f836b",
".git/objects/f2/04823a42f2d890f945f70d88b8e2d921c6ae26": "6b47f314ffc35cf6a1ced3208ecc857d",
".git/objects/f5/1fac3b73eeac7f383a3af0363137a108259cd4": "118e2408cb2ab0a26c9cc1aef00c91f7",
".git/objects/f5/72b90ef57ee79b82dd846c6871359a7cb10404": "e68f5265f0bb82d792ff536dcb99d803",
".git/objects/f6/50cff2d50acd70079a4cbeba7a0df4d622c579": "4bedfdf21a58b69e54a645d9b1ff4c7d",
".git/objects/f8/1044d6aeb6565773b59c8992e53250471d8567": "90796b4647433ec9369e8177f50a771e",
".git/objects/fa/ac1da95b88b846ee349911bf1a887828363840": "32b334baed8fa1052f9ab992d7ff4979",
".git/objects/fe/3914bcf3baf9d87a873a444cac8aaf9dcd54c1": "372add7dd6cdabc32b9333e8d66bff72",
".git/objects/fe/3b987e61ed346808d9aa023ce3073530ad7426": "dc7db10bf25046b27091222383ede515",
".git/refs/heads/main": "72acb85fa3351bf5fcb19d25633a7035",
".git/refs/remotes/origin/main": "72acb85fa3351bf5fcb19d25633a7035",
"assets/AssetManifest.bin": "ec92ecb94c3962b47b3f3a6ded3e8b6e",
"assets/AssetManifest.bin.json": "9bf49f1a7e9209ba6053dc7ecbc37347",
"assets/AssetManifest.json": "572b2749764ad0dfd8f14158c2f4885e",
"assets/assets/fonts/dear-sans-condensed-bold.otf": "c17fcf8a61804192d81e606348805fdd",
"assets/assets/images/app_store.png": "8de007138379f7592b90b2a2b4cb22e5",
"assets/assets/images/chat.png": "6e4789927328f26f1cea5c1e41216354",
"assets/assets/images/earth.jpeg": "4a60735558069e979771fce36cd94f65",
"assets/assets/images/goodbye.png": "11ddb640c7f0c5272ce6f94ecd30b8b1",
"assets/assets/images/menuhat_1.png": "da769678304d3c732769c95a810619ee",
"assets/assets/images/menuhat_2.png": "3cffddf992fb75d45aa24647c7bb55b6",
"assets/assets/images/menuhat_3.png": "99e8a2b0eeffe07abff367b70c6f9432",
"assets/assets/images/menuhat_4.png": "77e644ac5dddf9034447ab5f5fd4c7c3",
"assets/assets/images/money_1.png": "a9f5abab609b27dacc3331b0db7cd751",
"assets/assets/images/money_2.png": "fec7e781543a8e9c34c15ce0143ba2f3",
"assets/assets/images/money_3.png": "bdf1f45ceca49648fad409674ed30f24",
"assets/assets/images/money_4.png": "ce92316aaea9384aafb906a3c50988f2",
"assets/assets/images/money_5.png": "be6a8b1f7c01dd86112b1f296f523361",
"assets/assets/images/my_photo.jpeg": "d249527fa816572728b22ab6bbf4e289",
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
"assets/fonts/MaterialIcons-Regular.otf": "7546dd562230045481166cc3a2fc6aa2",
"assets/NOTICES": "2385ae76ac8b89935f3d5d35c06d8607",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "33b7d9392238c04c131b6ce224e13711",
"assets/packages/font_awesome_flutter/lib/fonts/Font-Awesome-7-Brands-Regular-400.otf": "ce4c96afe58c7a55e4bc2ab847bdb09d",
"assets/packages/font_awesome_flutter/lib/fonts/Font-Awesome-7-Free-Regular-400.otf": "740d06d1503b3558c6c19e0a698b095c",
"assets/packages/font_awesome_flutter/lib/fonts/Font-Awesome-7-Free-Solid-900.otf": "1c8294f936bea276564c0490eb4d6f76",
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
"flutter_bootstrap.js": "946ca3d67cf2774c066d8c87b185244b",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "548ab89746ae6129c774b22b19f983df",
"/": "548ab89746ae6129c774b22b19f983df",
"main.dart.js": "5eaba89e0cec161ddfc159d80506affb",
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
