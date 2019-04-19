<!DOCTYPE html>
<html>

    <head>
        <meta charset="utf-8">
        <meta name="baidu-site-verification" content="cNhJHKEzsD" />
        <meta name="360-site-verification" content="e37aef53e3922913e2a6a4682e479b84"
        />
        <meta name="sogou_site_verification" content="7zFjYjJaMq" />
        <meta name="msvalidate.01" content="0CA3171633345524D8CBED5E95C75FFF"
        />
        <meta name="google-site-verification" content="rh2irYN2Lu028orAseOD3aXd5u7Eu1mqTfhoVaw2Ihg"
        />
        <meta name="shenma-site-verification" content="12da4afc02bfe908ed0667f287167d11_1555581349"
        />
        <meta property="qc:admins" content="27354635321361636375" />
        <link rel="canonical" href="https://music.163.com/discover/toplist?id=19723756">
        <meta name="applicable-device" content="pc">
        <title>
            云音乐飙升榜 - 排行榜 - 网易云音乐
        </title>
        <meta name="keywords" content="云音乐飙升榜，排行榜，榜单，网易云音乐" />
        <meta name="description" content="云音乐飙升榜为你提供最权威最及时的榜单，最近更新：04月19日（每天更新）"
        />
        <meta property="og:title" content="云音乐飙升榜 - 排行榜 - 网易云音乐" />
        <script type="text/javascript">
            var GDownloadLink = "";
            var GDevice = "phone";
            var GFrom = "";
            var GClient = "";
            var GPlatform = "other";
            var GRef = '';
            var GInApp = false;
            var GMobile = false;
            var GAbroad = false;
            var GUser = {};
            var GAllowRejectComment = false;
            var GEnc = true;
            var GEnvType = "online";
            var GWebpSupport = "1";
            var vipWebCashierRedirect = "1"window.NEJ_CONF = {
                p_csrf: {
                    cookie: '__csrf',
                    param: 'csrf_token'
                }
            };
            GUtil = {
                getBase: function() {
                    return location.protocol + '//' + location.hostname;
                },
                getPathAndHash: function(_url) { //获取URL path 之后的所有内容,并将/#/替换成/m/使之成为path的一部分
                    if (!_url) return '';
                    var _reg0 = /^https?:\/\/.*?\//i,
                    _reg1 = /\/?#\/?/i;
                    return _url.replace(_reg0, '/').replace(_reg1, '/m/');
                },
                composeRefer: function(_url, _ref) { //对所有的页面请求都加上ref参数表示被嵌套的来源
                    if (!_ref) return _url;
                    var _hi = _url.indexOf('#'),
                    _si = _url.indexOf('?');
                    if (_si > 0 && (_si < _hi || _hi < 0)) {
                        return _url.substring(0, _si + 1) + 'ref=' + _ref + '&' + _url.substring(_si + 1);
                    } else if (_hi > 0 && (_si < 0 || _si > _hi)) {
                        return _url.substring(0, _hi) + '?ref=' + _ref + _url.substring(_hi);
                    } else {
                        return _url + '?ref=' + _ref;
                    }
                }
            }; (function() {
                var _ua = window.navigator.userAgent,
                _isMobile = /(mobile|mobi|wap|iphone)/i.test(_ua),
                _isAndroid = /android/i.test(_ua),
                _isIpad = /(ipad)/i.test(_ua),
                _igList = [/^\/xiami$/, /^\/live$/],
                //不需要以单页面打开的列表，比如某些活动页面
                _pn = location.pathname,
                _idx = _pn.lastIndexOf('/'),
                _pReg = /\s*(\w+)\s*=\s*(\d+)\s*/,
                _redirect2mobile = function() {
                    var _type, _murl, _id = 0,
                    _hash = location.hash,
                    _mReg = /^#\/?m?\/(share|song|playlist|djradio|dj|program|album|mv|artist|topic|radio|zysf|drqp|qp|activity|store|user|event|video|discover\/toplist)(\/(\d+))?/,
                    _base = location.protocol + '//' + location.hostname,
                    _sindex = _hash.lastIndexOf('?'),
                    _search = _sindex > -1 ? _hash.substring(_sindex + 1) : '',
                    _match = _mReg.exec(_hash);
                    // 无hash || 不匹配 || 匹配但是商品之外不带参数 || 匹配且是排行榜
                    if (!_hash.length || !_match || (_match[1] != 'store' && !_search) || /share|discover\/toplist/.test(_match[1])) {
                        // 有hash && (没有参数 || 排行榜)
                        if ((!_search || /share|discover\/toplist/.test(_match[1])) && _hash.length) {
                            location.href = _base + '/' + _hash.replace('#', 'm');
                        } else {
                            location.href = _base + '/m/';
                        }
                        return;
                    }
                    _type = _match[1];
                    _id = _match[3];
                    if (_type == 'dj') _type = 'program';
                    if (_type == 'store') {
                        _murl = /^#\/store\/(product|concert)\/detail/.test(_hash) ? _hash.replace('#/store', '/store/m') : '/store/m/product/index';
                    } else {
                        _murl = '/' + _type + '?' + (_id ? 'id=' + _id + '&': '') + _search;
                    }
                    location.href = _base + _murl;
                };
                if (_isMobile || _isAndroid || _isIpad) {
                    _redirect2mobile();
                    return;
                }
                if (!_pn || _pn == '/') return;
                for (var i in _igList) {
                    if (_igList[i].test(_pn)) return;
                }
                if (top == self) {
                    location.href = '/#' + GUtil.getPathAndHash(location.href);
                    return;
                }
                //搜索引擎过来的内容页连接
                if (top == self && /^\/static\/(song|playlist|album|artist)/i.test(_pn)) {
                    location.href = '/#' + _pn.substring(0, _idx).replace('/static/', '/') + '?id=' + _pn.substring(_idx + 1);
                }
            })(); (function() {
                var _addEvent = function(_node, _type, _cb) {
                    if (_node.addEventListener) {
                        _node.addEventListener(_type, _cb);
                    } else if (_node.attachEvent) {
                        _node.attachEvent('on' + _type, _cb);
                    }
                },
                _pathPrefixArray = ['/store/', // 商城
                '/m/at/', // 活动
                '/prime/m/', // 会员移动端页面
                '/oauth2/', // 授权
                '/m/oauth2/', // 授权
                '/octave/', // 新数字专辑
                '/v/', // 新数字专辑
                '/st/', // 静态页面
                '/nmusician/', // 音乐人
                '/nact/', // 新活动
                '/m/topic/', // 专栏移动端
                '/show/m/', //演出移动端
                ],
                _isNotMainsitePagePath = function(_pagePath) {
                    // 对于非主站内的页面的跳转 需要排除
                    var _path = (_pagePath || '').replace(/^https?:\/\/.*?\//i, '/').split(/[?#]/)[0];
                    for (var i = 0; i < _pathPrefixArray.length; i++) {
                        if (_path.indexOf(_pathPrefixArray[i]) === 0) return true;
                    }
                    return false;
                },
                _onAnchorClick = function(_event) { //截获所有<a>标签的点击事件，自定义页面的跳转
                    _event = _event || window.event;
                    var _el = _event.target || _event.srcElement,
                    _base = location.protocol + '//' + location.host;
                    while (_el && _el != document) {
                        if (_el.tagName && _el.tagName.toLowerCase() == 'a') {
                            //fix ie6下有时javascript:;不能阻止默认事件的bug.
                            if (_el.href.indexOf('javascript:') >= 0) { !! _event.preventDefault ? _event.preventDefault() : _event.returnValue = !1;
                                return;
                            }
                            if (_event.button == 2) return; //ff 右键会触发click事件
                            //商城有独立地顶栏了，排除掉。但会员、数字专辑、单曲的商品、订单页仍保持主站frame，
                            //这些url往往是通过/vip2, /payfee这样的地址跳转的，也没有问题，如果真的有，URL用#配置就好了
                            if (_isNotMainsitePagePath(_el.href)) return;
                            //新窗口打开的链接、云音乐单页面形式的链接、站外的链接不做拦截处理。
                            if (_el.target == '_blank' || _el.target == 'blank' || _isNotSameHost(_el.href) || _el.href == _base || _el.href.indexOf(_base + '/#') >= 0) return; !! _event.preventDefault ? _event.preventDefault() : _event.returnValue = !1;
                            location.dispatch2(_el.href);
                            break;
                        } else {
                            _el = _el.parentNode;
                        }
                    }
                },
                _isNotSameHost = function(_href) {
                    var _same = true;
                    if (_href.charAt(0) != '/') {
                        var _index = _href.indexOf('//' + location.hostname);
                        if (_index > 0) {
                            var _index2 = _href.indexOf('?');
                            if (_index2 > 0 && _index2 < _index) {
                                _same = false;
                            }
                        } else {
                            _same = false;
                        }
                    }
                    return ! _same;
                };
                _addEvent(document, 'click', _onAnchorClick);
                //扩展一个js中直接使用的页面跳转的方法，以拦截js中的页面跳转行为
                location.dispatch2 = function(_url, _replace) {
                    var delegate = false;
                    try {
                        delegate = !!top.GDispatcher;
                    } catch(e) {
                        delegate = false;
                    }
                    // 处理对于非主站内的页面的跳转
                    if (_isNotMainsitePagePath(_url)) {
                        if (delegate && top.location && top.location.href) {
                            top.location.href = _url;
                        } else {
                            location.href = _url;
                        }
                        return;
                    }
                    if (delegate) {
                        top.GDispatcher.dispatch(_url, _replace);
                    } else {
                        _url = GUtil.composeRefer(_url, GRef);
                        //邮箱音乐盒中，每次链接的跳转都要将proxy.html的地址合并到hash中
                        if (GRef && GRef == 'mail') {
                            var _hindex, _sindex, _reg = /(https?:\/\/.+\/proxy.html)/,
                            _hreg = /#(.*?)$/,
                            _href = decodeURIComponent(location.href);
                            if (!_reg.test(decodeURIComponent(_url)) && _reg.test(_href)) {
                                _hindex = _url.indexOf('#');
                                _sindex = _url.lastIndexOf('?');
                                if (_hindex > 0) {
                                    _url = _url + (_sindex > _hindex ? '&': '?') + 'proxy=' + encodeURIComponent(RegExp.$1);
                                } else {
                                    _url = _url + '#proxy=' + encodeURIComponent(RegExp.$1);
                                }
                            }
                        }
                        if (_replace) {
                            location.replace(_url);
                        } else {
                            location.href = _url;
                        }
                    }
                };
            })(); (function() {
                if (window.addEventListener) {
                    window.addEventListener('scroll', onScroll)
                } else {
                    window.attachEvent('onscroll', onScroll)
                }
                try {
                    top.scrollTopbar(0);
                } catch(e) {}
                function onScroll() {
                    try {
                        top.scrollTopbar(Math.max(document.body.scrollTop, document.documentElement.scrollTop));
                    } catch(e) {
                        //ignore
                    }
                };
            })();
        </script>
        <base href="//music.163.com/" target="_top">
        <link rel="shortcut icon" href="//s1.music.126.net/style/favicon.ico?v20180823"
        />
        <link href="//s2.music.126.net/web/s/core_ecf905c2264a250ea4e274cc53080eac.css?ecf905c2264a250ea4e274cc53080eac"
        type="text/css" rel="stylesheet" />
        <link href="//s2.music.126.net/web/s/pt_frame_4c683000e2340dfda85c07f79ff9d1d4.css?4c683000e2340dfda85c07f79ff9d1d4"
        type="text/css" rel="stylesheet" />
    </head>

    <body>      
        <div id="toplist" class="g-bd3 g-bd3-1 f-cb">
            <div class="g-mn3">
                <div class="g-mn3c">
                    <div class="g-wrap12">
                        <div id="song-list-pre-cache" data-key="song_toplist-19723756" data-simple="0"
                        data-pvnamed="0">
                            <div class="u-load s-fc4">
                                <i class="icn">
                                </i>
                                加载中...
                            </div>
                            <ul class="f-hide">
                                <li>
                                    <a href="/song?id=1357999894">
                                        归去来兮
                                    </a>
                                </li>
                                <li>
                                    <a href="/song?id=1359376992">
                                        雪暴
                                    </a>
                                </li>
                                <li>
                                    <a href="/song?id=1359357616">
                                        她在睡梦中remix
                                    </a>
                                </li>
                                <li>
                                    <a href="/song?id=1359289775">
                                        春天的歌
                                    </a>
                                </li>
                                <li>
                                    <a href="/song?id=1359385243">
                                        芒疯了
                                    </a>
                                </li>
                                <li>
                                    <a href="/song?id=1359058820">
                                        我的一切都和你有关系
                                    </a>
                                </li>
                                <li>
                                    <a href="/song?id=1359289819">
                                        留我半醉
                                    </a>
                                </li>
                                <li>
                                    <a href="/song?id=1341964346">
                                        你的酒馆对我打了烊
                                    </a>
                                </li>
                                <li>
                                    <a href="/song?id=1359346700">
                                        入梦也
                                    </a>
                                </li>
                                <li>
                                    <a href="/song?id=1359432651">
                                        Medellín
                                    </a>
                                </li>
                                <li>
                                    <a href="/song?id=1359114559">
                                        Wobble Up
                                    </a>
                                </li>
                                <li>
                                    <a href="/song?id=1353387651">
                                        黎明前的黑暗
                                    </a>
                                </li>
                                <li>
                                    <a href="/song?id=1349292048">
                                        心如止水
                                    </a>
                                </li>
                                <li>
                                    <a href="/song?id=1358255235">
                                        宅男配狗，天长地久
                                    </a>
                                </li>
                                <li>
                                    <a href="/song?id=1357587133">
                                        北极耳语
                                    </a>
                                </li>
                                <li>
                                    <a href="/song?id=1359366992">
                                        Crazy In Love (Homecoming Live)
                                    </a>
                                </li>
                                <li>
                                    <a href="/song?id=1359559460">
                                        我想她爱我
                                    </a>
                                </li>
                                <li>
                                    <a href="/song?id=1359356904">
                                        偶尔梦见你
                                    </a>
                                </li>
                                <li>
                                    <a href="/song?id=1357663406">
                                        往南
                                    </a>
                                </li>
                                <li>
                                    <a href="/song?id=1337761764">
                                        Coco9
                                    </a>
                                </li>
                                <li>
                                    <a href="/song?id=1336866698">
                                        浮白
                                    </a>
                                </li>
                                <li>
                                    <a href="/song?id=1359539723">
                                        웃으며 인사해
                                    </a>
                                </li>
                                <li>
                                    <a href="/song?id=1359398866">
                                        有个地方 (北京的地下城)
                                    </a>
                                </li>
                                <li>
                                    <a href="/song?id=1355637652">
                                        岁月
                                    </a>
                                </li>
                                <li>
                                    <a href="/song?id=1358276655">
                                        只是太爱你
                                    </a>
                                </li>
                                <li>
                                    <a href="/song?id=1297750680">
                                        这是你想要的生活吗
                                    </a>
                                </li>
                                <li>
                                    <a href="/song?id=1359554406">
                                        等
                                    </a>
                                </li>
                                <li>
                                    <a href="/song?id=1358911768">
                                        你 知不知道
                                    </a>
                                </li>
                                <li>
                                    <a href="/song?id=1358848433">
                                        追
                                    </a>
                                </li>
                                <li>
                                    <a href="/song?id=534540116">
                                        黎明前的黑暗
                                    </a>
                                </li>
                                <li>
                                    <a href="/song?id=1353443885">
                                        胆小鬼
                                    </a>
                                </li>
                                <li>
                                    <a href="/song?id=1357985449">
                                        SENBEI
                                    </a>
                                </li>
                                <li>
                                    <a href="/song?id=1359398951">
                                        呐喊无眠
                                    </a>
                                </li>
                                <li>
                                    <a href="/song?id=1358455155">
                                        Carole & Tuesday
                                    </a>
                                </li>
                                <li>
                                    <a href="/song?id=1359026536">
                                        就留在江苏海洋大学
                                    </a>
                                </li>
                                <li>
                                    <a href="/song?id=1359275278">
                                        ボン♡キュッ♡ボンは彼のモノ♡
                                    </a>
                                </li>
                                <li>
                                    <a href="/song?id=1357652443">
                                        Dionysus
                                    </a>
                                </li>
                                <li>
                                    <a href="/song?id=1359398960">
                                        睡不着
                                    </a>
                                </li>
                                <li>
                                    <a href="/song?id=1359595932">
                                        My Town 莒县
                                    </a>
                                </li>
                                <li>
                                    <a href="/song?id=1343458283">
                                        We Are Never Ever Getting Back Together
                                    </a>
                                </li>
                                <li>
                                    <a href="/song?id=1344814341">
                                        有可能的夜晚
                                    </a>
                                </li>
                                <li>
                                    <a href="/song?id=1355248395">
                                        没有你
                                    </a>
                                </li>
                                <li>
                                    <a href="/song?id=1351254725">
                                        小丑
                                    </a>
                                </li>
                                <li>
                                    <a href="/song?id=1357991046">
                                        Sunset
                                    </a>
                                </li>
                                <li>
                                    <a href="/song?id=1357991043">
                                        Intro
                                    </a>
                                </li>
                                <li>
                                    <a href="/song?id=1354504971">
                                        Delay
                                    </a>
                                </li>
                                <li>
                                    <a href="/song?id=1350803909">
                                        Arrow
                                    </a>
                                </li>
                                <li>
                                    <a href="/song?id=1358164664">
                                        Let The Diss Be Louder (feat.Tracy)
                                    </a>
                                </li>
                                <li>
                                    <a href="/song?id=1336856865">
                                        想要把全宇宙最特别的爱都给你
                                    </a>
                                </li>
                                <li>
                                    <a href="/song?id=1356795124">
                                        Old Town Road (Remix)
                                    </a>
                                </li>
                                <li>
                                    <a href="/song?id=513360721">
                                        云烟成雨
                                    </a>
                                </li>
                                <li>
                                    <a href="/song?id=1354108573">
                                        想你
                                    </a>
                                </li>
                                <li>
                                    <a href="/song?id=1359548410">
                                        Nothing
                                    </a>
                                </li>
                                <li>
                                    <a href="/song?id=1352270525">
                                        Illusion幻
                                    </a>
                                </li>
                                <li>
                                    <a href="/song?id=1338695683">
                                        起风了
                                    </a>
                                </li>
                                <li>
                                    <a href="/song?id=1359432181">
                                        23岁
                                    </a>
                                </li>
                                <li>
                                    <a href="/song?id=1358852296">
                                        滋滋
                                    </a>
                                </li>
                                <li>
                                    <a href="/song?id=1359281695">
                                        人去楼空
                                    </a>
                                </li>
                                <li>
                                    <a href="/song?id=1345503394">
                                        什么
                                    </a>
                                </li>
                                <li>
                                    <a href="/song?id=1357999898">
                                        山中客
                                    </a>
                                </li>
                                <li>
                                    <a href="/song?id=1359553508">
                                        O-Ku-Ri-Mo-No Sunday! (M@STER VERSION)
                                    </a>
                                </li>
                                <li>
                                    <a href="/song?id=1359281152">
                                        Birdie
                                    </a>
                                </li>
                                <li>
                                    <a href="/song?id=1359371521">
                                        Don't Hurt Yourself (Homecoming Live)
                                    </a>
                                </li>
                                <li>
                                    <a href="/song?id=1325702742">
                                        南风北巷
                                    </a>
                                </li>
                                <li>
                                    <a href="/song?id=1338149101">
                                        Believer
                                    </a>
                                </li>
                                <li>
                                    <a href="/song?id=569213279">
                                        大千世界
                                    </a>
                                </li>
                                <li>
                                    <a href="/song?id=1337554954">
                                        新旧论（Prod.By.今晚吃鱼丸）
                                    </a>
                                </li>
                                <li>
                                    <a href="/song?id=1356074482">
                                        YAYO
                                    </a>
                                </li>
                                <li>
                                    <a href="/song?id=29004400">
                                        烟火里的尘埃
                                    </a>
                                </li>
                                <li>
                                    <a href="/song?id=1334667452">
                                        太阳系
                                    </a>
                                </li>
                                <li>
                                    <a href="/song?id=1357963386">
                                        两人份美好
                                    </a>
                                </li>
                                <li>
                                    <a href="/song?id=1334297185">
                                        时间简史
                                    </a>
                                </li>
                                <li>
                                    <a href="/song?id=1337799011">
                                        L O V E
                                    </a>
                                </li>
                                <li>
                                    <a href="/song?id=1336559582">
                                        例外
                                    </a>
                                </li>
                                <li>
                                    <a href="/song?id=549309116">
                                        离人愁
                                    </a>
                                </li>
                                <li>
                                    <a href="/song?id=1359554489">
                                        Destiny Calls
                                    </a>
                                </li>
                                <li>
                                    <a href="/song?id=1352002513">
                                        空山新雨后
                                    </a>
                                </li>
                                <li>
                                    <a href="/song?id=1342278329">
                                        人生苦短
                                    </a>
                                </li>
                                <li>
                                    <a href="/song?id=474739467">
                                        心安理得
                                    </a>
                                </li>
                                <li>
                                    <a href="/song?id=1359554505">
                                        Is who cares
                                    </a>
                                </li>
                                <li>
                                    <a href="/song?id=569214126">
                                        可能否
                                    </a>
                                </li>
                                <li>
                                    <a href="/song?id=1334131579">
                                        Ain't No Better Life
                                    </a>
                                </li>
                                <li>
                                    <a href="/song?id=1359457137">
                                        时间是台推土机
                                    </a>
                                </li>
                                <li>
                                    <a href="/song?id=1359499003">
                                        第二杯半价
                                    </a>
                                </li>
                                <li>
                                    <a href="/song?id=1359282227">
                                        陈词烂调
                                    </a>
                                </li>
                                <li>
                                    <a href="/song?id=1355324656">
                                        樱花大道
                                    </a>
                                </li>
                                <li>
                                    <a href="/song?id=1339518112">
                                        雨天
                                    </a>
                                </li>
                                <li>
                                    <a href="/song?id=1359210380">
                                        风啊
                                    </a>
                                </li>
                                <li>
                                    <a href="/song?id=1357825630">
                                        最近 (正式版)
                                    </a>
                                </li>
                                <li>
                                    <a href="/song?id=1357828613">
                                        红了叶
                                    </a>
                                </li>
                                <li>
                                    <a href="/song?id=1350460585">
                                        我一点都不想你
                                    </a>
                                </li>
                                <li>
                                    <a href="/song?id=507114391">
                                        黎明前的黑暗
                                    </a>
                                </li>
                                <li>
                                    <a href="/song?id=1353723423">
                                        爱而不得
                                    </a>
                                </li>
                                <li>
                                    <a href="/song?id=1338737882">
                                        雨后彩虹
                                    </a>
                                </li>
                                <li>
                                    <a href="/song?id=1357816405">
                                        只是太爱你
                                    </a>
                                </li>
                                <li>
                                    <a href="/song?id=1347702312">
                                        Clout
                                    </a>
                                </li>
                                <li>
                                    <a href="/song?id=1359523156">
                                        Look But Don't Touch
                                    </a>
                                </li>
                                <li>
                                    <a href="/song?id=1320421436">
                                        那时候的爱情
                                    </a>
                                </li>
                                <li>
                                    <a href="/song?id=441491828">
                                        水星记
                                    </a>
                                </li>
                                <li>
                                    <a href="/song?id=1359366993">
                                        Freedom (Homecoming Live)
                                    </a>
                                </li>
                            </ul>
                            <textarea id="song-list-pre-data" style="display:none;">
                                [{"no":3,"fee":8,"ftype":0,"publishTime":0,"status":0,"score":100.0,"copyrightId":0,"mvid":0,"transNames":null,"commentThreadId":"R_SO_4_1357999894","type":0,"duration":206002,"alias":[],"privilege":{"st":0,"flag":64,"subp":1,"fl":128000,"fee":8,"dl":0,"cp":1,"preSell":false,"cs":false,"toast":false,"maxbr":999000,"id":1357999894,"pl":128000,"sp":7,"payed":0},"djid":0,"album":{"id":78439289,"name":"一碗","picUrl":"http://p1.music.126.net/H6dt7IgvXNWhRM_w7XbcqQ==/109951163990575387.jpg","tns":[],"pic_str":"109951163990575387","pic":109951163990575387},"artists":[{"id":8103,"name":"花粥","tns":[],"alias":[]}],"name":"归去来兮","id":1357999894,"lastRank":1},{"no":1,"fee":8,"ftype":0,"publishTime":0,"status":0,"score":0.0,"copyrightId":0,"mvid":0,"transNames":null,"commentThreadId":"R_SO_4_1359376992","type":0,"duration":235029,"alias":["电影《雪暴》同名宣传曲"],"privilege":{"st":0,"flag":64,"subp":1,"fl":128000,"fee":8,"dl":0,"cp":1,"preSell":false,"cs":false,"toast":false,"maxbr":999000,"id":1359376992,"pl":128000,"sp":7,"payed":0},"djid":0,"album":{"id":78570934,"name":"雪暴","picUrl":"http://p2.music.126.net/KvNSzIVnyaU6Emy6rk-zRA==/109951164005523292.jpg","tns":[],"pic_str":"109951164005523292","pic":109951164005523292},"artists":[{"id":12429072,"name":"隔壁老樊","tns":[],"alias":[]}],"name":"雪暴","id":1359376992},{"no":0,"fee":8,"ftype":0,"publishTime":0,"status":0,"score":0.0,"copyrightId":1416088,"mvid":0,"transNames":null,"commentThreadId":"R_SO_4_1359357616","type":0,"duration":229336,"alias":[],"privilege":{"st":0,"flag":0,"subp":1,"fl":128000,"fee":8,"dl":0,"cp":1,"preSell":false,"cs":false,"toast":false,"maxbr":999000,"id":1359357616,"pl":128000,"sp":7,"payed":0},"djid":0,"album":{"id":78570428,"name":"她在睡梦中remix","picUrl":"http://p2.music.126.net/PXGucGeiIBKZXAXNBmkbpw==/109951164005282949.jpg","tns":[],"pic_str":"109951164005282949","pic":109951164005282949},"artists":[{"id":4721,"name":"朴树","tns":[],"alias":[]}],"name":"她在睡梦中remix","id":1359357616},{"no":2,"fee":8,"ftype":0,"publishTime":0,"status":0,"score":0.0,"copyrightId":1380821,"mvid":0,"transNames":null,"commentThreadId":"R_SO_4_1359289775","type":0,"duration":244182,"alias":[],"privilege":{"st":0,"flag":68,"subp":1,"fl":128000,"fee":8,"dl":0,"cp":1,"preSell":false,"cs":false,"toast":false,"maxbr":999000,"id":1359289775,"pl":128000,"sp":7,"payed":0},"djid":0,"album":{"id":78561479,"name":"值得一提的事","picUrl":"http://p2.music.126.net/lsjHbT20m1aGvhrlK4Xfag==/109951164004775573.jpg","tns":[],"pic_str":"109951164004775573","pic":109951164004775573},"artists":[{"id":12120150,"name":"朱星杰","tns":[],"alias":[]}],"name":"春天的歌","id":1359289775},{"no":1,"fee":8,"ftype":0,"publishTime":1555516800000,"status":0,"score":0.0,"copyrightId":722012,"mvid":0,"transNames":null,"commentThreadId":"R_SO_4_1359385243","type":0,"duration":176904,"alias":["Mango
                                Crazy"],"privilege":{"st":0,"flag":0,"subp":1,"fl":128000,"fee":8,"dl":0,"cp":1,"preSell":false,"cs":false,"toast":false,"maxbr":999000,"id":1359385243,"pl":128000,"sp":7,"payed":0},"djid":0,"album":{"id":78570986,"name":"芒疯了","picUrl":"http://p2.music.126.net/Dy5PBJc6lLlDfuMDjVC6UA==/109951164005574121.jpg","tns":[],"pic_str":"109951164005574121","pic":109951164005574121},"artists":[{"id":12002201,"name":"Higher Brothers","tns":[],"alias":[]}],"name":"芒疯了","id":1359385243},{"no":1,"fee":8,"ftype":0,"publishTime":0,"status":0,"score":0.0,"copyrightId":754020,"mvid":0,"transNames":null,"commentThreadId":"R_SO_4_1359058820","type":0,"duration":229379,"alias":["电视剧《趁我们还年轻》人物主题曲"],"privilege":{"st":0,"flag":68,"subp":1,"fl":128000,"fee":8,"dl":0,"cp":1,"preSell":false,"cs":false,"toast":false,"maxbr":999000,"id":1359058820,"pl":128000,"sp":7,"payed":0},"djid":0,"album":{"id":78528540,"name":"我的一切都和你有关系","picUrl":"http://p2.music.126.net/_7u8527na_67eGvL7oVu4Q==/109951164002399594.jpg","tns":[],"pic_str":"109951164002399594","pic":109951164002399594},"artists":[{"id":5538,"name":"汪苏泷","tns":[],"alias":[]}],"name":"我的一切都和你有关系","id":1359058820},{"no":5,"fee":8,"ftype":0,"publishTime":0,"status":0,"score":0.0,"copyrightId":1380821,"mvid":0,"transNames":null,"commentThreadId":"R_SO_4_1359289819","type":0,"duration":297805,"alias":[],"privilege":{"st":0,"flag":68,"subp":1,"fl":128000,"fee":8,"dl":0,"cp":1,"preSell":false,"cs":false,"toast":false,"maxbr":999000,"id":1359289819,"pl":128000,"sp":7,"payed":0},"djid":0,"album":{"id":78561479,"name":"值得一提的事","picUrl":"http://p2.music.126.net/lsjHbT20m1aGvhrlK4Xfag==/109951164004775573.jpg","tns":[],"pic_str":"109951164004775573","pic":109951164004775573},"artists":[{"id":12120150,"name":"朱星杰","tns":[],"alias":[]}],"name":"留我半醉","id":1359289819},{"no":1,"fee":8,"ftype":0,"publishTime":1548394617415,"status":0,"score":100.0,"copyrightId":0,"mvid":0,"transNames":null,"commentThreadId":"R_SO_4_1341964346","type":0,"duration":251428,"alias":[],"privilege":{"st":0,"flag":64,"subp":1,"fl":128000,"fee":8,"dl":0,"cp":1,"preSell":false,"cs":false,"toast":false,"maxbr":999000,"id":1341964346,"pl":128000,"sp":7,"payed":0},"djid":0,"album":{"id":75302730,"name":"你的酒馆对我打了烊","picUrl":"http://p2.music.126.net/LiRR__0pJHSivqBHZzbMUw==/109951163816225567.jpg","tns":[],"pic_str":"109951163816225567","pic":109951163816225567},"artists":[{"id":12382970,"name":"陈雪凝","tns":[],"alias":[]}],"name":"你的酒馆对我打了烊","id":1341964346,"lastRank":23},{"no":1,"fee":0,"ftype":0,"publishTime":0,"status":0,"score":0.0,"copyrightId":1415925,"mvid":0,"transNames":null,"commentThreadId":"R_SO_4_1359346700","type":0,"duration":252020,"alias":[],"privilege":{"st":0,"flag":0,"subp":1,"fl":320000,"fee":0,"dl":320000,"cp":1,"preSell":false,"cs":false,"toast":false,"maxbr":999000,"id":1359346700,"pl":320000,"sp":7,"payed":0},"djid":0,"album":{"id":78567556,"name":"入梦也","picUrl":"http://p2.music.126.net/r8cRI5EWCwSDy-pQ0Rqd2g==/109951164005121340.jpg","tns":[],"pic_str":"109951164005121340","pic":109951164005121340},"artists":[{"id":12308369,"name":"黄诗扶","tns":[],"alias":[]}],"name":"入梦也","id":1359346700},{"no":1,"fee":8,"ftype":0,"publishTime":1555430400000,"status":0,"score":0.0,"copyrightId":7003,"mvid":0,"transNames":null,"commentThreadId":"R_SO_4_1359432651","type":0,"duration":298213,"alias":[],"privilege":{"st":0,"flag":260,"subp":1,"fl":128000,"fee":8,"dl":0,"cp":1,"preSell":false,"cs":false,"toast":false,"maxbr":320000,"id":1359432651,"pl":128000,"sp":7,"payed":0},"djid":0,"album":{"id":78573880,"name":"Medellín","picUrl":"http://p2.music.126.net/0FXhAxgOnqRBI8iCi_2bDA==/109951164007474572.jpg","tns":[],"pic_str":"109951164007474572","pic":109951164007474572},"artists":[{"id":66364,"name":"Madonna","tns":[],"alias":[]},{"id":1049649,"name":"Maluma","tns":[],"alias":[]}],"name":"Medellín","id":1359432651},{"no":1,"fee":8,"ftype":0,"publishTime":1555689600000,"status":0,"score":0.0,"copyrightId":7001,"mvid":0,"transNames":null,"commentThreadId":"R_SO_4_1359114559","type":0,"duration":222302,"alias":[],"privilege":{"st":0,"flag":4,"subp":1,"fl":128000,"fee":8,"dl":0,"cp":1,"preSell":false,"cs":false,"toast":false,"maxbr":320000,"id":1359114559,"pl":128000,"sp":7,"payed":0},"djid":0,"album":{"id":78539322,"name":"Wobble
                                Up","picUrl":"http://p2.music.126.net/tkhWtSBiWMrO0tPz3IXaOA==/109951164008034489.jpg","tns":[],"pic_str":"109951164008034489","pic":109951164008034489},"artists":[{"id":29960,"name":"Chris
                                Brown","tns":[],"alias":[]},{"id":70183,"name":"Nicki Minaj","tns":[],"alias":[]},{"id":820036,"name":"G-Eazy","tns":[],"alias":[]}],"name":"Wobble
                                Up","id":1359114559},{"no":3,"fee":8,"ftype":0,"publishTime":0,"status":0,"score":100.0,"copyrightId":0,"mvid":0,"transNames":null,"commentThreadId":"R_SO_4_1353387651","type":0,"duration":215040,"alias":[],"privilege":{"st":0,"flag":0,"subp":1,"fl":128000,"fee":8,"dl":0,"cp":1,"preSell":false,"cs":false,"toast":false,"maxbr":999000,"id":1353387651,"pl":128000,"sp":7,"payed":0},"djid":0,"album":{"id":78043726,"name":"黎明前的黑暗","picUrl":"http://p2.music.126.net/1_ehY1slgPHRXSHm6G8aSA==/109951163942631992.jpg","tns":[],"pic_str":"109951163942631992","pic":109951163942631992},"artists":[{"id":31638608,"name":"颜小七","tns":[],"alias":[]}],"name":"黎明前的黑暗","id":1353387651},{"no":6,"fee":8,"ftype":0,"publishTime":0,"status":0,"score":100.0,"copyrightId":0,"mvid":0,"transNames":null,"commentThreadId":"R_SO_4_1349292048","type":0,"duration":185390,"alias":[],"privilege":{"st":0,"flag":0,"subp":1,"fl":128000,"fee":8,"dl":0,"cp":1,"preSell":false,"cs":false,"toast":false,"maxbr":999000,"id":1349292048,"pl":128000,"sp":7,"payed":0},"djid":0,"album":{"id":75350006,"name":"成语接龙","picUrl":"http://p2.music.126.net/MLQl_7poLz2PTON6_JZZRQ==/109951163938219545.jpg","tns":[],"pic_str":"109951163938219545","pic":109951163938219545},"artists":[{"id":12121264,"name":"Ice
                                Paper","tns":[],"alias":[]}],"name":"心如止水","id":1349292048},{"no":1,"fee":8,"ftype":0,"publishTime":0,"status":0,"score":0.0,"copyrightId":1416015,"mvid":10863360,"transNames":null,"commentThreadId":"R_SO_4_1358255235","type":0,"duration":175782,"alias":["电影《狗眼看人心》主题曲"],"privilege":{"st":0,"flag":0,"subp":1,"fl":128000,"fee":8,"dl":0,"cp":1,"preSell":false,"cs":false,"toast":false,"maxbr":999000,"id":1358255235,"pl":128000,"sp":7,"payed":0},"djid":0,"album":{"id":78482484,"name":"宅男配狗，天长地久","picUrl":"http://p2.music.126.net/apJtWswZwkZQYd7r6VJPWw==/109951163992830147.jpg","tns":[],"pic_str":"109951163992830147","pic":109951163992830147},"artists":[{"id":711683,"name":"好妹妹","tns":[],"alias":[]}],"name":"宅男配狗，天长地久","id":1358255235},{"no":1,"fee":8,"ftype":0,"publishTime":0,"status":0,"score":100.0,"copyrightId":1399823,"mvid":0,"transNames":null,"commentThreadId":"R_SO_4_1357587133","type":0,"duration":231351,"alias":[],"privilege":{"st":0,"flag":0,"subp":1,"fl":128000,"fee":8,"dl":0,"cp":1,"preSell":false,"cs":false,"toast":false,"maxbr":999000,"id":1357587133,"pl":128000,"sp":7,"payed":0},"djid":0,"album":{"id":78397818,"name":"北极耳语","picUrl":"http://p2.music.126.net/uFauPpNwzx217GXUwqju9g==/109951163988646612.jpg","tns":[],"pic_str":"109951163988646612","pic":109951163988646612},"artists":[{"id":12091076,"name":"白宇","tns":[],"alias":[]}],"name":"北极耳语","id":1357587133},{"no":2,"fee":8,"ftype":0,"publishTime":1555430400000,"status":0,"score":0.0,"copyrightId":7001,"mvid":0,"transNames":null,"commentThreadId":"R_SO_4_1359366992","type":0,"duration":167392,"alias":[],"privilege":{"st":0,"flag":4,"subp":1,"fl":128000,"fee":8,"dl":0,"cp":1,"preSell":false,"cs":false,"toast":false,"maxbr":320000,"id":1359366992,"pl":128000,"sp":7,"payed":0},"djid":0,"album":{"id":78570733,"name":"HOMECOMING:
                                THE LIVE ALBUM","picUrl":"http://p2.music.126.net/Rllcz01PsKA9tqSSXtwrdA==/109951164005416293.jpg","tns":[],"pic_str":"109951164005416293","pic":109951164005416293},"artists":[{"id":48436,"name":"Beyoncé","tns":[],"alias":[]}],"name":"Crazy
                                In Love (Homecoming Live)","id":1359366992},{"no":0,"fee":8,"ftype":0,"publishTime":0,"status":0,"score":0.0,"copyrightId":0,"mvid":0,"transNames":null,"commentThreadId":"R_SO_4_1359559460","type":0,"duration":160000,"alias":[],"privilege":{"st":0,"flag":0,"subp":1,"fl":128000,"fee":8,"dl":0,"cp":1,"preSell":false,"cs":false,"toast":false,"maxbr":999000,"id":1359559460,"pl":128000,"sp":7,"payed":0},"djid":0,"album":{"id":78586967,"name":"我想她爱我","picUrl":"http://p2.music.126.net/Kx0SlMDm2Vm9YlfSPGstjQ==/109951164007496006.jpg","tns":[],"pic_str":"109951164007496006","pic":109951164007496006},"artists":[{"id":12359027,"name":"HAS","tns":[],"alias":[]},{"id":1087200,"name":"AThree-Arslan","tns":[],"alias":[]}],"name":"我想她爱我","id":1359559460},{"no":1,"fee":8,"ftype":0,"publishTime":0,"status":0,"score":0.0,"copyrightId":530019,"mvid":0,"transNames":null,"commentThreadId":"R_SO_4_1359356904","type":0,"duration":217135,"alias":[],"privilege":{"st":0,"flag":0,"subp":1,"fl":128000,"fee":8,"dl":0,"cp":1,"preSell":false,"cs":false,"toast":false,"maxbr":999000,"id":1359356904,"pl":128000,"sp":7,"payed":0},"djid":0,"album":{"id":78569349,"name":"偶尔梦见你","picUrl":"http://p1.music.126.net/amnUBsvcEVlUe2RLGQPg_A==/109951164005278983.jpg","tns":[],"pic_str":"109951164005278983","pic":109951164005278983},"artists":[{"id":12094099,"name":"徐真真","tns":[],"alias":[]},{"id":12379051,"name":"何柏诚","tns":[],"alias":[]}],"name":"偶尔梦见你","id":1359356904},{"no":0,"fee":8,"ftype":0,"publishTime":1555516800000,"status":0,"score":0.0,"copyrightId":1371825,"mvid":0,"transNames":null,"commentThreadId":"R_SO_4_1357663406","type":0,"duration":237772,"alias":[],"privilege":{"st":0,"flag":0,"subp":1,"fl":128000,"fee":8,"dl":0,"cp":1,"preSell":false,"cs":false,"toast":false,"maxbr":999000,"id":1357663406,"pl":128000,"sp":7,"payed":0},"djid":0,"album":{"id":78408399,"name":"往南","picUrl":"http://p2.music.126.net/1JP1SkNgp_EEkGU7xYcCMg==/109951163986940542.jpg","tns":[],"pic_str":"109951163986940542","pic":109951163986940542},"artists":[{"id":12479356,"name":"郭聪明","tns":[],"alias":[]}],"name":"往南","id":1357663406},{"no":1,"fee":8,"ftype":0,"publishTime":0,"status":0,"score":100.0,"copyrightId":1415925,"mvid":0,"transNames":null,"commentThreadId":"R_SO_4_1337761764","type":0,"duration":254310,"alias":[],"privilege":{"st":0,"flag":0,"subp":1,"fl":128000,"fee":8,"dl":0,"cp":1,"preSell":false,"cs":false,"toast":false,"maxbr":999000,"id":1337761764,"pl":128000,"sp":7,"payed":0},"djid":0,"album":{"id":75064076,"name":"Coco9","picUrl":"http://p2.music.126.net/0bBYTQPasu0Fv6tmjt050w==/109951163777126858.jpg","tns":[],"pic_str":"109951163777126858","pic":109951163777126858},"artists":[{"id":12157330,"name":"周星星","tns":[],"alias":[]}],"name":"Coco9","id":1337761764,"lastRank":29},{"no":1,"fee":8,"ftype":0,"publishTime":1549209600007,"status":0,"score":100.0,"copyrightId":0,"mvid":0,"transNames":null,"commentThreadId":"R_SO_4_1336866698","type":0,"duration":228288,"alias":[],"privilege":{"st":0,"flag":64,"subp":1,"fl":128000,"fee":8,"dl":0,"cp":1,"preSell":false,"cs":false,"toast":false,"maxbr":999000,"id":1336866698,"pl":128000,"sp":7,"payed":0},"djid":0,"album":{"id":75017048,"name":"浮白","picUrl":"http://p2.music.126.net/dy4SZtCPKqnXh5qI61S3Nw==/109951163825880020.jpg","tns":[],"pic_str":"109951163825880020","pic":109951163825880020},"artists":[{"id":8103,"name":"花粥","tns":[],"alias":[]},{"id":9808,"name":"胜娚","tns":[],"alias":[]}],"name":"浮白","id":1336866698},{"no":1,"fee":8,"ftype":0,"publishTime":0,"status":0,"score":0.0,"copyrightId":1410822,"mvid":0,"transNames":["Goodbye
                                with a Smile"],"commentThreadId":"R_SO_4_1359539723","type":0,"duration":207517,"alias":[],"privilege":{"st":0,"flag":68,"subp":1,"fl":128000,"fee":8,"dl":0,"cp":1,"preSell":false,"cs":false,"toast":false,"maxbr":999000,"id":1359539723,"pl":128000,"sp":7,"payed":0},"djid":0,"album":{"id":78585404,"name":"웃으며
                                인사해","picUrl":"http://p2.music.126.net/NjxpFzrAF2DyHFHswPqvKQ==/109951164007327471.jpg","tns":["Goodbye
                                with a Smile"],"pic_str":"109951164007327471","pic":109951164007327471},"artists":[{"id":123179,"name":"李起光","tns":[],"alias":[]},{"id":789470,"name":"孙东云","tns":[],"alias":[]}],"name":"웃으며
                                인사해","id":1359539723},{"no":1,"fee":1,"ftype":0,"publishTime":0,"status":0,"score":0.0,"copyrightId":1416151,"mvid":0,"transNames":null,"commentThreadId":"R_SO_4_1359398866","type":0,"duration":228000,"alias":[],"privilege":{"st":0,"flag":1092,"subp":0,"fl":0,"fee":1,"dl":0,"cp":0,"preSell":false,"cs":false,"toast":false,"maxbr":999000,"id":1359398866,"pl":0,"sp":0,"payed":0},"djid":0,"album":{"id":78248182,"name":"壹九","picUrl":"http://p2.music.126.net/IW1ODYC1UcHISkvs-ayS5w==/109951163959987702.jpg","tns":[],"pic_str":"109951163959987702","pic":109951163959987702},"artists":[{"id":27726025,"name":"龙井说唱
                                孙旭","tns":[],"alias":[]}],"name":"有个地方 (北京的地下城)","id":1359398866},{"no":3,"fee":8,"ftype":0,"publishTime":0,"status":0,"score":90.0,"copyrightId":0,"mvid":0,"transNames":null,"commentThreadId":"R_SO_4_1355637652","type":0,"duration":259640,"alias":[],"privilege":{"st":0,"flag":0,"subp":1,"fl":128000,"fee":8,"dl":0,"cp":1,"preSell":false,"cs":false,"toast":false,"maxbr":999000,"id":1355637652,"pl":128000,"sp":7,"payed":0},"djid":0,"album":{"id":78240148,"name":"岁月","picUrl":"http://p2.music.126.net/yNq-8Nn5-14fh1MjMmEnqQ==/109951163964864828.jpg","tns":[],"pic_str":"109951163964864828","pic":109951163964864828},"artists":[{"id":12126871,"name":"Su乐团","tns":[],"alias":[]}],"name":"岁月","id":1355637652},{"no":1,"fee":8,"ftype":0,"publishTime":0,"status":0,"score":75.0,"copyrightId":1382818,"mvid":0,"transNames":null,"commentThreadId":"R_SO_4_1358276655","type":0,"duration":247834,"alias":[],"privilege":{"st":0,"flag":0,"subp":1,"fl":128000,"fee":8,"dl":0,"cp":1,"preSell":false,"cs":false,"toast":false,"maxbr":999000,"id":1358276655,"pl":128000,"sp":7,"payed":0},"djid":0,"album":{"id":78483901,"name":"只是太爱你","picUrl":"http://p2.music.126.net/0bGn0gZu1Ghz-h3JSltHcA==/109951164000365863.jpg","tns":[],"pic_str":"109951164000365863","pic":109951164000365863},"artists":[{"id":29794923,"name":"赵大紫","tns":[],"alias":[]}],"name":"只是太爱你","id":1358276655},{"no":1,"fee":8,"ftype":0,"publishTime":1533312000007,"status":0,"score":100.0,"copyrightId":1384819,"mvid":10751099,"transNames":null,"commentThreadId":"R_SO_4_1297750680","type":0,"duration":244596,"alias":[],"privilege":{"st":0,"flag":66,"subp":1,"fl":128000,"fee":8,"dl":0,"cp":1,"preSell":false,"cs":false,"toast":false,"maxbr":999000,"id":1297750680,"pl":128000,"sp":7,"payed":0},"djid":0,"album":{"id":72072835,"name":"这是你想要的生活吗","picUrl":"http://p2.music.126.net/XFdWXCIzKZPlWR_vJJYvPA==/109951163439964688.jpg","tns":[],"pic_str":"109951163439964688","pic":109951163439964688},"artists":[{"id":1050282,"name":"房东的猫","tns":[],"alias":[]}],"name":"这是你想要的生活吗","id":1297750680},{"no":1,"fee":8,"ftype":0,"publishTime":0,"status":0,"score":0.0,"copyrightId":0,"mvid":0,"transNames":null,"commentThreadId":"R_SO_4_1359554406","type":0,"duration":129156,"alias":[],"privilege":{"st":0,"flag":64,"subp":1,"fl":128000,"fee":8,"dl":0,"cp":1,"preSell":false,"cs":false,"toast":false,"maxbr":999000,"id":1359554406,"pl":128000,"sp":7,"payed":0},"djid":0,"album":{"id":78537104,"name":"等","picUrl":"http://p2.music.126.net/vvDAwAq_z-duJYBU-FuSRA==/109951164007373353.jpg","tns":[],"pic_str":"109951164007373353","pic":109951164007373353},"artists":[{"id":12083570,"name":"YKEY","tns":[],"alias":[]}],"name":"等","id":1359554406},{"no":0,"fee":8,"ftype":0,"publishTime":0,"status":0,"score":0.0,"copyrightId":1416078,"mvid":0,"transNames":null,"commentThreadId":"R_SO_4_1358911768","type":0,"duration":223367,"alias":[],"privilege":{"st":0,"flag":64,"subp":1,"fl":128000,"fee":8,"dl":0,"cp":1,"preSell":false,"cs":false,"toast":false,"maxbr":999000,"id":1358911768,"pl":128000,"sp":7,"payed":0},"djid":0,"album":{"id":78516954,"name":"你
                                知不知道","picUrl":"http://p1.music.126.net/sVxS_8zEQSq_mcTlAgERBw==/109951164000721303.jpg","tns":[],"pic_str":"109951164000721303","pic":109951164000721303},"artists":[{"id":12976654,"name":"Rima
                                Zeidan","tns":[],"alias":[]}],"name":"你 知不知道","id":1358911768},{"no":1,"fee":8,"ftype":0,"publishTime":0,"status":0,"score":100.0,"copyrightId":0,"mvid":0,"transNames":null,"commentThreadId":"R_SO_4_1358848433","type":0,"duration":219827,"alias":[],"privilege":{"st":0,"flag":64,"subp":1,"fl":128000,"fee":8,"dl":0,"cp":1,"preSell":false,"cs":false,"toast":false,"maxbr":999000,"id":1358848433,"pl":128000,"sp":7,"payed":0},"djid":0,"album":{"id":78505657,"name":"追","picUrl":"http://p2.music.126.net/Ax-zrmAPBrASWxT92t3fdw==/109951164000242827.jpg","tns":[],"pic_str":"109951164000242827","pic":109951164000242827},"artists":[{"id":12077204,"name":"陈壹千","tns":[],"alias":[]}],"name":"追","id":1358848433},{"no":0,"fee":0,"ftype":0,"publishTime":1517414400007,"status":0,"score":100.0,"copyrightId":552011,"mvid":0,"transNames":null,"commentThreadId":"R_SO_4_534540116","type":0,"duration":269082,"alias":[],"privilege":{"st":0,"flag":128,"subp":1,"fl":320000,"fee":0,"dl":320000,"cp":1,"preSell":false,"cs":false,"toast":false,"maxbr":999000,"id":534540116,"pl":320000,"sp":7,"payed":0},"djid":0,"album":{"id":37467042,"name":"黎明前的黑暗","picUrl":"http://p2.music.126.net/uTmnajlYaTlIHyS1gCq7pw==/109951163127374639.jpg","tns":[],"pic_str":"109951163127374639","pic":109951163127374639},"artists":[{"id":12493017,"name":"限制行动乐队","tns":[],"alias":[]}],"name":"黎明前的黑暗","id":534540116},{"no":1,"fee":8,"ftype":0,"publishTime":0,"status":0,"score":100.0,"copyrightId":1372818,"mvid":0,"transNames":null,"commentThreadId":"R_SO_4_1353443885","type":0,"duration":196363,"alias":[],"privilege":{"st":0,"flag":0,"subp":1,"fl":128000,"fee":8,"dl":0,"cp":1,"preSell":false,"cs":false,"toast":false,"maxbr":999000,"id":1353443885,"pl":128000,"sp":7,"payed":0},"djid":0,"album":{"id":78143563,"name":"胆小鬼","picUrl":"http://p2.music.126.net/hy6a6t8xnVgSLkeVYfB5DQ==/109951163943236780.jpg","tns":[],"pic_str":"109951163943236780","pic":109951163943236780},"artists":[{"id":31376161,"name":"颜人中","tns":[],"alias":[]}],"name":"胆小鬼","id":1353443885},{"no":4,"fee":1,"ftype":0,"publishTime":0,"status":0,"score":90.0,"copyrightId":1416153,"mvid":0,"transNames":null,"commentThreadId":"R_SO_4_1357985449","type":0,"duration":162000,"alias":[],"privilege":{"st":0,"flag":1152,"subp":0,"fl":0,"fee":1,"dl":0,"cp":0,"preSell":false,"cs":false,"toast":false,"maxbr":999000,"id":1357985449,"pl":0,"sp":0,"payed":0},"djid":0,"album":{"id":78164064,"name":"Dear
                                X","picUrl":"http://p2.music.126.net/IYCE_y6PqPh5IuD11-pOAA==/109951163948155766.jpg","tns":[],"pic_str":"109951163948155766","pic":109951163948155766},"artists":[{"id":12276375,"name":"NINEONE#","tns":[],"alias":[]}],"name":"SENBEI","id":1357985449},{"no":3,"fee":1,"ftype":0,"publishTime":0,"status":0,"score":0.0,"copyrightId":1416151,"mvid":0,"transNames":null,"commentThreadId":"R_SO_4_1359398951","type":0,"duration":224000,"alias":[],"privilege":{"st":0,"flag":1092,"subp":0,"fl":0,"fee":1,"dl":0,"cp":0,"preSell":false,"cs":false,"toast":false,"maxbr":999000,"id":1359398951,"pl":0,"sp":0,"payed":0},"djid":0,"album":{"id":78248182,"name":"壹九","picUrl":"http://p2.music.126.net/IW1ODYC1UcHISkvs-ayS5w==/109951163959987702.jpg","tns":[],"pic_str":"109951163959987702","pic":109951163959987702},"artists":[{"id":12276665,"name":"Swang多雷","tns":[],"alias":[]}],"name":"呐喊无眠","id":1359398951},{"no":3,"fee":8,"ftype":0,"publishTime":0,"status":0,"score":95.0,"copyrightId":0,"mvid":0,"transNames":null,"commentThreadId":"R_SO_4_1358455155","type":0,"duration":189348,"alias":[],"privilege":{"st":0,"flag":0,"subp":1,"fl":128000,"fee":8,"dl":0,"cp":1,"preSell":false,"cs":false,"toast":false,"maxbr":999000,"id":1358455155,"pl":128000,"sp":7,"payed":0},"djid":0,"album":{"id":78459074,"name":"一张十分安静的专辑","picUrl":"http://p2.music.126.net/Vm7wkKOPFYPyXSPagovBDQ==/109951163995197322.jpg","tns":[],"pic_str":"109951163995197322","pic":109951163995197322},"artists":[{"id":12780060,"name":"Will$","tns":[],"alias":[]}],"name":"Carole
                                & Tuesday","id":1358455155},{"no":1,"fee":8,"ftype":0,"publishTime":0,"status":0,"score":100.0,"copyrightId":0,"mvid":0,"transNames":null,"commentThreadId":"R_SO_4_1359026536","type":0,"duration":237257,"alias":[],"privilege":{"st":0,"flag":64,"subp":1,"fl":128000,"fee":8,"dl":0,"cp":1,"preSell":false,"cs":false,"toast":false,"maxbr":999000,"id":1359026536,"pl":128000,"sp":7,"payed":0},"djid":0,"album":{"id":78505876,"name":"就留在江苏海洋大学","picUrl":"http://p2.music.126.net/V7YEbLMsJDG1IdVcLcm3lw==/109951164002012473.jpg","tns":[],"pic_str":"109951164002012473","pic":109951164002012473},"artists":[{"id":30126441,"name":"顽石930","tns":[],"alias":[]},{"id":0,"name":"蔡淑怡","tns":[],"alias":[]},{"id":0,"name":"刘佳雯","tns":[],"alias":[]}],"name":"就留在江苏海洋大学","id":1359026536},{"no":1,"fee":8,"ftype":0,"publishTime":0,"status":0,"score":0.0,"copyrightId":756010,"mvid":0,"transNames":null,"commentThreadId":"R_SO_4_1359275278","type":0,"duration":247026,"alias":["TV动画《为什么老师会在这里!?》片头曲
                                / TVアニメ「なんでここに先生が!?」オープニングテーマ"],"privilege":{"st":0,"flag":64,"subp":1,"fl":128000,"fee":8,"dl":0,"cp":1,"preSell":false,"cs":false,"toast":false,"maxbr":999000,"id":1359275278,"pl":128000,"sp":7,"payed":0},"djid":0,"album":{"id":78559361,"name":"ボン♡キュッ♡ボンは彼のモノ♡","picUrl":"http://p2.music.126.net/J2nflUd5LxVSSl-oCWBBHg==/109951164004641890.jpg","tns":[],"pic_str":"109951164004641890","pic":109951164004641890},"artists":[{"id":18105,"name":"上坂すみれ","tns":[],"alias":[]}],"name":"ボン♡キュッ♡ボンは彼のモノ♡","id":1359275278},{"no":7,"fee":4,"ftype":0,"publishTime":0,"status":0,"score":100.0,"copyrightId":723010,"mvid":0,"transNames":null,"commentThreadId":"R_SO_4_1357652443","type":0,"duration":249215,"alias":[],"privilege":{"st":0,"flag":64,"subp":0,"fl":0,"fee":4,"dl":0,"cp":0,"preSell":false,"cs":false,"toast":false,"maxbr":999000,"id":1357652443,"pl":0,"sp":0,"payed":0},"djid":0,"album":{"id":78408027,"name":"MAP
                                OF THE SOUL : PERSONA","picUrl":"http://p2.music.126.net/88CLadTMReCQzGVIj4w8cA==/109951163986796994.jpg","tns":[],"pic_str":"109951163986796994","pic":109951163986796994},"artists":[{"id":783124,"name":"BTS
                                (防弹少年团)","tns":[],"alias":[]}],"name":"Dionysus","id":1357652443},{"no":5,"fee":1,"ftype":0,"publishTime":0,"status":0,"score":0.0,"copyrightId":1416151,"mvid":0,"transNames":null,"commentThreadId":"R_SO_4_1359398960","type":0,"duration":183925,"alias":[],"privilege":{"st":0,"flag":1092,"subp":0,"fl":0,"fee":1,"dl":0,"cp":0,"preSell":false,"cs":false,"toast":false,"maxbr":999000,"id":1359398960,"pl":0,"sp":0,"payed":0},"djid":0,"album":{"id":78248182,"name":"壹九","picUrl":"http://p2.music.126.net/IW1ODYC1UcHISkvs-ayS5w==/109951163959987702.jpg","tns":[],"pic_str":"109951163959987702","pic":109951163959987702},"artists":[{"id":12760523,"name":"唧唧JIJI","tns":[],"alias":[]}],"name":"睡不着","id":1359398960},{"no":1,"fee":0,"ftype":0,"publishTime":0,"status":0,"score":0.0,"copyrightId":0,"mvid":0,"transNames":null,"commentThreadId":"R_SO_4_1359595932","type":0,"duration":179580,"alias":[],"privilege":{"st":0,"flag":0,"subp":1,"fl":320000,"fee":0,"dl":320000,"cp":1,"preSell":false,"cs":false,"toast":false,"maxbr":999000,"id":1359595932,"pl":320000,"sp":7,"payed":0},"djid":0,"album":{"id":78540338,"name":"My
                                Town 莒县（$IMON子琛）","picUrl":"http://p2.music.126.net/2a6N9lp026VgdWKfgJVtPQ==/109951164007815997.jpg","tns":[],"pic_str":"109951164007815997","pic":109951164007815997},"artists":[{"id":0,"name":"$IMON子琛","tns":[],"alias":[]}],"name":"My
                                Town 莒县","id":1359595932},{"no":1,"fee":8,"ftype":0,"publishTime":1548950400000,"status":0,"score":100.0,"copyrightId":7003,"mvid":0,"transNames":null,"commentThreadId":"R_SO_4_1343458283","type":0,"duration":193175,"alias":[],"privilege":{"st":0,"flag":260,"subp":1,"fl":128000,"fee":8,"dl":0,"cp":1,"preSell":false,"cs":false,"toast":false,"maxbr":320000,"id":1343458283,"pl":128000,"sp":7,"payed":0},"djid":0,"album":{"id":75404997,"name":"Be
                                My Anti-Valentine","picUrl":"http://p1.music.126.net/87tfEQ0bi73So9ojNNOHoQ==/109951163935992984.jpg","tns":[],"pic_str":"109951163935992984","pic":109951163935992984},"artists":[{"id":44266,"name":"Taylor
                                Swift","tns":[],"alias":[]}],"name":"We Are Never Ever Getting Back Together","id":1343458283},{"no":1,"fee":8,"ftype":0,"publishTime":1549595243834,"status":0,"score":100.0,"copyrightId":1372820,"mvid":0,"transNames":null,"commentThreadId":"R_SO_4_1344814341","type":0,"duration":276521,"alias":["原唱：曾轶可"],"privilege":{"st":0,"flag":68,"subp":1,"fl":128000,"fee":8,"dl":0,"cp":1,"preSell":false,"cs":false,"toast":false,"maxbr":999000,"id":1344814341,"pl":128000,"sp":7,"payed":0},"djid":0,"album":{"id":75473750,"name":"有可能的夜晚","picUrl":"http://p2.music.126.net/gIem1coXkK8QGlQPjqNvbQ==/109951163849728760.jpg","tns":[],"pic_str":"109951163849728760","pic":109951163849728760},"artists":[{"id":31376161,"name":"颜人中","tns":[],"alias":[]}],"name":"有可能的夜晚","id":1344814341,"lastRank":42},{"no":1,"fee":8,"ftype":0,"publishTime":0,"status":0,"score":100.0,"copyrightId":0,"mvid":0,"transNames":null,"commentThreadId":"R_SO_4_1355248395","type":0,"duration":280000,"alias":[],"privilege":{"st":0,"flag":2,"subp":1,"fl":128000,"fee":8,"dl":0,"cp":1,"preSell":false,"cs":false,"toast":false,"maxbr":999000,"id":1355248395,"pl":128000,"sp":7,"payed":0},"djid":0,"album":{"id":78204778,"name":"没有你","picUrl":"http://p2.music.126.net/6iyJr8D9KNltdFiiMeckDg==/109951163960007466.jpg","tns":[],"pic_str":"109951163960007466","pic":109951163960007466},"artists":[{"id":12471771,"name":"石恩隆","tns":[],"alias":[]}],"name":"没有你","id":1355248395},{"no":3,"fee":8,"ftype":0,"publishTime":0,"status":0,"score":100.0,"copyrightId":1380821,"mvid":0,"transNames":null,"commentThreadId":"R_SO_4_1351254725","type":0,"duration":276270,"alias":[],"privilege":{"st":0,"flag":68,"subp":1,"fl":128000,"fee":8,"dl":0,"cp":1,"preSell":false,"cs":false,"toast":false,"maxbr":999000,"id":1351254725,"pl":128000,"sp":7,"payed":0},"djid":0,"album":{"id":78561479,"name":"值得一提的事","picUrl":"http://p2.music.126.net/lsjHbT20m1aGvhrlK4Xfag==/109951164004775573.jpg","tns":[],"pic_str":"109951164004775573","pic":109951164004775573},"artists":[{"id":12120150,"name":"朱星杰","tns":[],"alias":[]}],"name":"小丑","id":1351254725},{"no":5,"fee":1,"ftype":0,"publishTime":0,"status":0,"score":90.0,"copyrightId":1416153,"mvid":0,"transNames":null,"commentThreadId":"R_SO_4_1357991046","type":0,"duration":227378,"alias":[],"privilege":{"st":0,"flag":1152,"subp":0,"fl":0,"fee":1,"dl":0,"cp":0,"preSell":false,"cs":false,"toast":false,"maxbr":999000,"id":1357991046,"pl":0,"sp":0,"payed":0},"djid":0,"album":{"id":78164064,"name":"Dear
                                X","picUrl":"http://p2.music.126.net/IYCE_y6PqPh5IuD11-pOAA==/109951163948155766.jpg","tns":[],"pic_str":"109951163948155766","pic":109951163948155766},"artists":[{"id":12276375,"name":"NINEONE#","tns":[],"alias":[]}],"name":"Sunset","id":1357991046},{"no":1,"fee":1,"ftype":0,"publishTime":0,"status":0,"score":90.0,"copyrightId":1416153,"mvid":0,"transNames":null,"commentThreadId":"R_SO_4_1357991043","type":0,"duration":69459,"alias":[],"privilege":{"st":0,"flag":1152,"subp":0,"fl":0,"fee":1,"dl":0,"cp":0,"preSell":false,"cs":false,"toast":false,"maxbr":320000,"id":1357991043,"pl":0,"sp":0,"payed":0},"djid":0,"album":{"id":78164064,"name":"Dear
                                X","picUrl":"http://p2.music.126.net/IYCE_y6PqPh5IuD11-pOAA==/109951163948155766.jpg","tns":[],"pic_str":"109951163948155766","pic":109951163948155766},"artists":[{"id":12276375,"name":"NINEONE#","tns":[],"alias":[]}],"name":"Intro","id":1357991043},{"no":1,"fee":8,"ftype":0,"publishTime":0,"status":0,"score":100.0,"copyrightId":0,"mvid":0,"transNames":null,"commentThreadId":"R_SO_4_1354504971","type":0,"duration":159473,"alias":[],"privilege":{"st":0,"flag":0,"subp":1,"fl":128000,"fee":8,"dl":0,"cp":1,"preSell":false,"cs":false,"toast":false,"maxbr":999000,"id":1354504971,"pl":128000,"sp":7,"payed":0},"djid":0,"album":{"id":78206647,"name":"Delay","picUrl":"http://p2.music.126.net/8MUNkbrV0bCJz6ipmVQJpg==/109951163953650680.jpg","tns":[],"pic_str":"109951163953650680","pic":109951163953650680},"artists":[{"id":30003879,"name":"YYYtripley","tns":[],"alias":[]}],"name":"Delay","id":1354504971},{"no":1,"fee":8,"ftype":0,"publishTime":1554998400000,"status":0,"score":0.0,"copyrightId":743010,"mvid":0,"transNames":null,"commentThreadId":"R_SO_4_1350803909","type":0,"duration":241042,"alias":[],"privilege":{"st":0,"flag":133,"subp":1,"fl":128000,"fee":8,"dl":0,"cp":1,"preSell":false,"cs":false,"toast":false,"maxbr":999000,"id":1350803909,"pl":128000,"sp":7,"payed":0},"djid":0,"album":{"id":75803451,"name":"Arrow","picUrl":"http://p2.music.126.net/gtP89I4LzVGr2HlT-5WnJg==/109951163913092419.jpg","tns":[],"pic_str":"109951163913092419","pic":109951163913092419},"artists":[{"id":1181562,"name":"Alexander
                                Jean","tns":[],"alias":[]}],"name":"Arrow","id":1350803909},{"no":1,"fee":8,"ftype":0,"publishTime":0,"status":0,"score":65.0,"copyrightId":0,"mvid":0,"transNames":null,"commentThreadId":"R_SO_4_1358164664","type":0,"duration":197592,"alias":[],"privilege":{"st":0,"flag":0,"subp":1,"fl":128000,"fee":8,"dl":0,"cp":1,"preSell":false,"cs":false,"toast":false,"maxbr":999000,"id":1358164664,"pl":128000,"sp":7,"payed":0},"djid":0,"album":{"id":78456742,"name":"Let
                                The Diss Be Louder","picUrl":"http://p2.music.126.net/hrAUlqdFYmceyZ6UD7qK8w==/109951163991935431.jpg","tns":[],"pic_str":"109951163991935431","pic":109951163991935431},"artists":[{"id":30132692,"name":"Zok","tns":[],"alias":[]},{"id":30001349,"name":"DJ
                                Tracy","tns":[],"alias":[]}],"name":"Let The Diss Be Louder (feat.Tracy)","id":1358164664},{"no":0,"fee":8,"ftype":0,"publishTime":1549987200007,"status":0,"score":100.0,"copyrightId":0,"mvid":0,"transNames":null,"commentThreadId":"R_SO_4_1336856865","type":0,"duration":199297,"alias":[],"privilege":{"st":0,"flag":130,"subp":1,"fl":128000,"fee":8,"dl":0,"cp":1,"preSell":false,"cs":false,"toast":false,"maxbr":999000,"id":1336856865,"pl":128000,"sp":7,"payed":0},"djid":0,"album":{"id":75020146,"name":"想要把全宇宙最特别的爱都给你","picUrl":"http://p2.music.126.net/WyN6QZOzRB4f3yl1-MOzNg==/109951163834693616.jpg","tns":[],"pic_str":"109951163834693616","pic":109951163834693616},"artists":[{"id":816358,"name":"高姗","tns":[],"alias":[]}],"name":"想要把全宇宙最特别的爱都给你","id":1336856865},{"no":1,"fee":8,"ftype":0,"publishTime":1554393600000,"status":0,"score":100.0,"copyrightId":7001,"mvid":0,"transNames":null,"commentThreadId":"R_SO_4_1356795124","type":0,"duration":157126,"alias":[],"privilege":{"st":0,"flag":4,"subp":1,"fl":128000,"fee":8,"dl":0,"cp":1,"preSell":false,"cs":false,"toast":false,"maxbr":320000,"id":1356795124,"pl":128000,"sp":7,"payed":0},"djid":0,"album":{"id":78339336,"name":"Old
                                Town Road (Remix)","picUrl":"http://p2.music.126.net/cxlFwgtN8W8wmpGSZ6656Q==/109951163977322804.jpg","tns":[],"pic_str":"109951163977322804","pic":109951163977322804},"artists":[{"id":31646483,"name":"Lil
                                Nas X","tns":[],"alias":[]},{"id":29385,"name":"Billy Ray Cyrus","tns":[],"alias":[]}],"name":"Old
                                Town Road (Remix)","id":1356795124,"lastRank":27},{"no":1,"fee":8,"ftype":0,"publishTime":1508342400007,"status":0,"score":100.0,"copyrightId":0,"mvid":5686040,"transNames":null,"commentThreadId":"R_SO_4_513360721","type":0,"duration":240782,"alias":["动画《我是江小白》片尾曲"],"privilege":{"st":0,"flag":2,"subp":1,"fl":128000,"fee":8,"dl":0,"cp":1,"preSell":false,"cs":false,"toast":false,"maxbr":999000,"id":513360721,"pl":128000,"sp":7,"payed":0},"djid":0,"album":{"id":36583135,"name":"云烟成雨","picUrl":"http://p2.music.126.net/DSTg1dR7yKsyGq4IK3NL8A==/109951163046050093.jpg","tns":[],"pic_str":"109951163046050093","pic":109951163046050093},"artists":[{"id":1050282,"name":"房东的猫","tns":[],"alias":[]}],"name":"云烟成雨","id":513360721},{"no":1,"fee":0,"ftype":0,"publishTime":0,"status":0,"score":95.0,"copyrightId":0,"mvid":0,"transNames":null,"commentThreadId":"R_SO_4_1354108573","type":0,"duration":231106,"alias":[],"privilege":{"st":0,"flag":64,"subp":1,"fl":320000,"fee":0,"dl":320000,"cp":1,"preSell":false,"cs":false,"toast":false,"maxbr":999000,"id":1354108573,"pl":320000,"sp":7,"payed":0},"djid":0,"album":{"id":75822997,"name":"想你","picUrl":"http://p2.music.126.net/U-pFzhWvmUp-3dX95gAu0Q==/109951163949443056.jpg","tns":[],"pic_str":"109951163949443056","pic":109951163949443056},"artists":[{"id":0,"name":"孙千雅","tns":[],"alias":[]}],"name":"想你","id":1354108573},{"no":2,"fee":8,"ftype":0,"publishTime":0,"status":0,"score":0.0,"copyrightId":1410822,"mvid":10863807,"transNames":null,"commentThreadId":"R_SO_4_1359548410","type":0,"duration":194129,"alias":[],"privilege":{"st":0,"flag":68,"subp":1,"fl":128000,"fee":8,"dl":0,"cp":1,"preSell":false,"cs":false,"toast":false,"maxbr":999000,"id":1359548410,"pl":128000,"sp":7,"payed":0},"djid":0,"album":{"id":78585404,"name":"웃으며
                                인사해","picUrl":"http://p1.music.126.net/NjxpFzrAF2DyHFHswPqvKQ==/109951164007327471.jpg","tns":["Goodbye
                                with a Smile"],"pic_str":"109951164007327471","pic":109951164007327471},"artists":[{"id":123179,"name":"李起光","tns":[],"alias":[]}],"name":"Nothing","id":1359548410},{"no":1,"fee":8,"ftype":0,"publishTime":0,"status":0,"score":95.0,"copyrightId":0,"mvid":0,"transNames":null,"commentThreadId":"R_SO_4_1352270525","type":0,"duration":157567,"alias":[],"privilege":{"st":0,"flag":64,"subp":1,"fl":128000,"fee":8,"dl":0,"cp":1,"preSell":false,"cs":false,"toast":false,"maxbr":999000,"id":1352270525,"pl":128000,"sp":7,"payed":0},"djid":0,"album":{"id":75617296,"name":"Illusion（幻）","picUrl":"http://p2.music.126.net/rcFMNT3XS-BgUJzHa1LUVA==/109951163929726380.jpg","tns":[],"pic_str":"109951163929726380","pic":109951163929726380},"artists":[{"id":1215014,"name":"Childsion","tns":[],"alias":[]}],"name":"Illusion幻","id":1352270525},{"no":1,"fee":8,"ftype":0,"publishTime":0,"status":0,"score":100.0,"copyrightId":1416018,"mvid":10851179,"transNames":null,"commentThreadId":"R_SO_4_1338695683","type":0,"duration":313565,"alias":["电视剧《加油，你是最棒的》主题曲"],"privilege":{"st":0,"flag":68,"subp":1,"fl":128000,"fee":8,"dl":0,"cp":1,"preSell":false,"cs":false,"toast":false,"maxbr":999000,"id":1338695683,"pl":128000,"sp":7,"payed":0},"djid":0,"album":{"id":75116936,"name":"起风了","picUrl":"http://p2.music.126.net/aMVPsO00OqlVTS2yMH8RgA==/109951163785600029.jpg","tns":[],"pic_str":"109951163785600029","pic":109951163785600029},"artists":[{"id":187229,"name":"吴青峰","tns":[],"alias":[]}],"name":"起风了","id":1338695683},{"no":1,"fee":0,"ftype":0,"publishTime":0,"status":0,"score":0.0,"copyrightId":0,"mvid":0,"transNames":null,"commentThreadId":"R_SO_4_1359432181","type":0,"duration":280212,"alias":[],"privilege":{"st":0,"flag":0,"subp":1,"fl":320000,"fee":0,"dl":320000,"cp":1,"preSell":false,"cs":false,"toast":false,"maxbr":320000,"id":1359432181,"pl":320000,"sp":7,"payed":0},"djid":0,"album":{"id":78533106,"name":"23岁","picUrl":"http://p1.music.126.net/JrdKZYhFBaIOit87rHG_Ug==/109951164006213458.jpg","tns":[],"pic_str":"109951164006213458","pic":109951164006213458},"artists":[{"id":0,"name":"霍泊宏","tns":[],"alias":[]}],"name":"23岁","id":1359432181},{"no":1,"fee":8,"ftype":0,"publishTime":0,"status":0,"score":100.0,"copyrightId":0,"mvid":0,"transNames":null,"commentThreadId":"R_SO_4_1358852296","type":0,"duration":209739,"alias":[],"privilege":{"st":0,"flag":64,"subp":1,"fl":128000,"fee":8,"dl":0,"cp":1,"preSell":false,"cs":false,"toast":false,"maxbr":320000,"id":1358852296,"pl":128000,"sp":7,"payed":0},"djid":0,"album":{"id":78457421,"name":"滋滋","picUrl":"http://p2.music.126.net/GHq3sXx3dmRY6EO3-lItVg==/109951164000304708.jpg","tns":[],"pic_str":"109951164000304708","pic":109951164000304708},"artists":[{"id":29949284,"name":"王懒懒","tns":[],"alias":[]}],"name":"滋滋","id":1358852296},{"no":2,"fee":0,"ftype":0,"publishTime":0,"status":0,"score":0.0,"copyrightId":681011,"mvid":0,"transNames":null,"commentThreadId":"R_SO_4_1359281695","type":0,"duration":234000,"alias":[],"privilege":{"st":0,"flag":64,"subp":1,"fl":320000,"fee":0,"dl":320000,"cp":1,"preSell":false,"cs":false,"toast":false,"maxbr":999000,"id":1359281695,"pl":320000,"sp":7,"payed":0},"djid":0,"album":{"id":78561024,"name":"OOO","picUrl":"http://p2.music.126.net/okS6xVSJvAXDeOnY7GKixA==/109951164004720826.jpg","tns":[],"pic_str":"109951164004720826","pic":109951164004720826},"artists":[{"id":12605278,"name":"wweimm","tns":[],"alias":[]}],"name":"人去楼空","id":1359281695},{"no":1,"fee":8,"ftype":0,"publishTime":1549943988438,"status":0,"score":95.0,"copyrightId":0,"mvid":0,"transNames":null,"commentThreadId":"R_SO_4_1345503394","type":0,"duration":216058,"alias":[],"privilege":{"st":0,"flag":0,"subp":1,"fl":128000,"fee":8,"dl":0,"cp":1,"preSell":false,"cs":false,"toast":false,"maxbr":999000,"id":1345503394,"pl":128000,"sp":7,"payed":0},"djid":0,"album":{"id":75502077,"name":"什么","picUrl":"http://p2.music.126.net/CYA0rqMxVrLHpGy0x8AmtQ==/109951163856162872.jpg","tns":[],"pic_str":"109951163856162872","pic":109951163856162872},"artists":[{"id":30713118,"name":"村上风","tns":[],"alias":[]}],"name":"什么","id":1345503394},{"no":8,"fee":8,"ftype":0,"publishTime":0,"status":0,"score":100.0,"copyrightId":0,"mvid":0,"transNames":null,"commentThreadId":"R_SO_4_1357999898","type":0,"duration":226112,"alias":[],"privilege":{"st":0,"flag":64,"subp":1,"fl":128000,"fee":8,"dl":0,"cp":1,"preSell":false,"cs":false,"toast":false,"maxbr":999000,"id":1357999898,"pl":128000,"sp":7,"payed":0},"djid":0,"album":{"id":78439289,"name":"一碗","picUrl":"http://p1.music.126.net/H6dt7IgvXNWhRM_w7XbcqQ==/109951163990575387.jpg","tns":[],"pic_str":"109951163990575387","pic":109951163990575387},"artists":[{"id":8103,"name":"花粥","tns":[],"alias":[]}],"name":"山中客","id":1357999898},{"no":0,"fee":0,"ftype":0,"publishTime":0,"status":0,"score":0.0,"copyrightId":663018,"mvid":10863812,"transNames":null,"commentThreadId":"R_SO_4_1359553508","type":0,"duration":284547,"alias":[],"privilege":{"st":0,"flag":128,"subp":1,"fl":320000,"fee":0,"dl":320000,"cp":1,"preSell":false,"cs":false,"toast":false,"maxbr":999000,"id":1359553508,"pl":320000,"sp":7,"payed":0},"djid":0,"album":{"id":78585574,"name":"O-Ku-Ri-Mo-No
                                Sunday! (M@STER VERSION)","picUrl":"http://p1.music.126.net/W9yymtUHZX7t4wywnkmfLw==/109951164007355204.jpg","tns":[],"pic_str":"109951164007355204","pic":109951164007355204},"artists":[{"id":31979542,"name":"立花日菜","tns":[],"alias":[]},{"id":12463018,"name":"長江里加","tns":[],"alias":[]}],"name":"O-Ku-Ri-Mo-No
                                Sunday! (M@STER VERSION)","id":1359553508},{"no":1,"fee":0,"ftype":0,"publishTime":0,"status":0,"score":0.0,"copyrightId":0,"mvid":0,"transNames":null,"commentThreadId":"R_SO_4_1359281152","type":0,"duration":102974,"alias":[],"privilege":{"st":0,"flag":128,"subp":1,"fl":320000,"fee":0,"dl":128000,"cp":1,"preSell":false,"cs":false,"toast":false,"maxbr":128000,"id":1359281152,"pl":128000,"sp":7,"payed":0},"djid":0,"album":{"id":78560860,"name":"Birdie","picUrl":"http://p2.music.126.net/yPLveEizdr9x2dN7RuBBfg==/109951164004698252.jpg","tns":[],"pic_str":"109951164004698252","pic":109951164004698252},"artists":[{"id":12637448,"name":"Kota
                                the Friend","tns":[],"alias":[]}],"name":"Birdie","id":1359281152},{"no":18,"fee":8,"ftype":0,"publishTime":1555430400000,"status":0,"score":0.0,"copyrightId":7001,"mvid":0,"transNames":null,"commentThreadId":"R_SO_4_1359371521","type":0,"duration":256862,"alias":[],"privilege":{"st":0,"flag":4,"subp":1,"fl":128000,"fee":8,"dl":0,"cp":1,"preSell":false,"cs":false,"toast":false,"maxbr":320000,"id":1359371521,"pl":128000,"sp":7,"payed":0},"djid":0,"album":{"id":78570733,"name":"HOMECOMING:
                                THE LIVE ALBUM","picUrl":"http://p2.music.126.net/Rllcz01PsKA9tqSSXtwrdA==/109951164005416293.jpg","tns":[],"pic_str":"109951164005416293","pic":109951164005416293},"artists":[{"id":48436,"name":"Beyoncé","tns":[],"alias":[]}],"name":"Don't
                                Hurt Yourself (Homecoming Live)","id":1359371521},{"no":1,"fee":8,"ftype":0,"publishTime":1542269706048,"status":0,"score":100.0,"copyrightId":0,"mvid":0,"transNames":null,"commentThreadId":"R_SO_4_1325702742","type":0,"duration":250330,"alias":[],"privilege":{"st":0,"flag":66,"subp":1,"fl":128000,"fee":8,"dl":0,"cp":1,"preSell":false,"cs":false,"toast":false,"maxbr":999000,"id":1325702742,"pl":128000,"sp":7,"payed":0},"djid":0,"album":{"id":74387689,"name":"借忧
                                所以然","picUrl":"http://p2.music.126.net/Txr6At7-WyGW16JF_V26Hg==/109951163691637080.jpg","tns":[],"pic_str":"109951163691637080","pic":109951163691637080},"artists":[{"id":29392693,"name":"解忧邵帅","tns":[],"alias":[]}],"name":"南风北巷","id":1325702742},{"no":1,"fee":8,"ftype":0,"publishTime":1546790400007,"status":0,"score":100.0,"copyrightId":7003,"mvid":0,"transNames":null,"commentThreadId":"R_SO_4_1338149101","type":0,"duration":219742,"alias":[],"privilege":{"st":0,"flag":260,"subp":1,"fl":128000,"fee":8,"dl":0,"cp":1,"preSell":false,"cs":false,"toast":false,"maxbr":320000,"id":1338149101,"pl":128000,"sp":7,"payed":0},"djid":0,"album":{"id":75082998,"name":"Believer","picUrl":"http://p2.music.126.net/0_YzqMGHrDXU9C277IFerA==/109951163783209324.jpg","tns":[],"pic_str":"109951163783209324","pic":109951163783209324},"artists":[{"id":94779,"name":"Imagine
                                Dragons","tns":[],"alias":[]},{"id":38118,"name":"Lil Wayne","tns":[],"alias":[]}],"name":"Believer","id":1338149101},{"no":2,"fee":0,"ftype":0,"publishTime":1527782400007,"status":0,"score":100.0,"copyrightId":14026,"mvid":5917476,"transNames":null,"commentThreadId":"R_SO_4_569213279","type":0,"duration":255391,"alias":[],"privilege":{"st":0,"flag":0,"subp":1,"fl":320000,"fee":0,"dl":320000,"cp":1,"preSell":false,"cs":false,"toast":false,"maxbr":999000,"id":569213279,"pl":320000,"sp":7,"payed":0},"djid":0,"album":{"id":71747023,"name":"寻宝游戏","picUrl":"http://p2.music.126.net/BUFZLieG5a6E3ZVpkHP6fA==/109951163402069754.jpg","tns":[],"pic_str":"109951163402069754","pic":109951163402069754},"artists":[{"id":5771,"name":"许嵩","tns":[],"alias":[]}],"name":"大千世界","id":569213279},{"no":1,"fee":0,"ftype":0,"publishTime":1546691327548,"status":0,"score":95.0,"copyrightId":0,"mvid":0,"transNames":null,"commentThreadId":"R_SO_4_1337554954","type":0,"duration":188064,"alias":[],"privilege":{"st":0,"flag":128,"subp":1,"fl":320000,"fee":0,"dl":320000,"cp":1,"preSell":false,"cs":false,"toast":false,"maxbr":320000,"id":1337554954,"pl":320000,"sp":7,"payed":0},"djid":0,"album":{"id":75036946,"name":"新旧论","picUrl":"http://p2.music.126.net/lueKfw4-MswHaz4kb98Nrw==/109951163774735659.jpg","tns":[],"pic_str":"109951163774735659","pic":109951163774735659},"artists":[{"id":12611258,"name":"刘俊峰","tns":[],"alias":[]}],"name":"新旧论（Prod.By.今晚吃鱼丸）","id":1337554954},{"no":1,"fee":8,"ftype":0,"publishTime":1554998400000,"status":0,"score":0.0,"copyrightId":743010,"mvid":0,"transNames":null,"commentThreadId":"R_SO_4_1356074482","type":0,"duration":222666,"alias":[],"privilege":{"st":0,"flag":133,"subp":1,"fl":128000,"fee":8,"dl":0,"cp":1,"preSell":false,"cs":false,"toast":false,"maxbr":999000,"id":1356074482,"pl":128000,"sp":7,"payed":0},"djid":0,"album":{"id":78285633,"name":"YAYO","picUrl":"http://p2.music.126.net/raBDnCisH212xM7-deY2EQ==/109951163969437850.jpg","tns":[],"pic_str":"109951163969437850","pic":109951163969437850},"artists":[{"id":665034,"name":"Papayo","tns":[],"alias":[]},{"id":41143,"name":"Pitbull","tns":[],"alias":[]},{"id":37822,"name":"Ky-Mani
                                Marley","tns":[],"alias":[]}],"name":"YAYO","id":1356074482},{"no":1,"fee":8,"ftype":0,"publishTime":1408982400007,"status":0,"score":100.0,"copyrightId":636011,"mvid":365701,"transNames":null,"commentThreadId":"R_SO_4_29004400","type":0,"duration":321000,"alias":[],"privilege":{"st":0,"flag":68,"subp":1,"fl":128000,"fee":8,"dl":0,"cp":1,"preSell":false,"cs":false,"toast":false,"maxbr":999000,"id":29004400,"pl":128000,"sp":7,"payed":0},"djid":0,"album":{"id":2975208,"name":"烟火里的尘埃","picUrl":"http://p2.music.126.net/_49Xz_x9kTTdEgmYYk6w2w==/6672936069046297.jpg","tns":[],"pic":6672936069046297},"artists":[{"id":861777,"name":"华晨宇","tns":[],"alias":[]}],"name":"烟火里的尘埃","id":29004400},{"no":2,"fee":8,"ftype":0,"publishTime":1545321600000,"status":0,"score":90.0,"copyrightId":7003,"mvid":0,"transNames":null,"commentThreadId":"R_SO_4_1334667452","type":0,"duration":259395,"alias":["Dive"],"privilege":{"st":0,"flag":132,"subp":1,"fl":128000,"fee":8,"dl":0,"cp":1,"preSell":false,"cs":false,"toast":false,"maxbr":320000,"id":1334667452,"pl":128000,"sp":7,"payed":0},"djid":0,"album":{"id":74946061,"name":"0","picUrl":"http://p2.music.126.net/08DOd2Q2ilKjFe46tRCo3w==/109951163920729126.jpg","tns":[],"pic_str":"109951163920729126","pic":109951163920729126},"artists":[{"id":8336,"name":"林忆莲","tns":[],"alias":[]}],"name":"太阳系","id":1334667452},{"no":1,"fee":8,"ftype":0,"publishTime":0,"status":0,"score":100.0,"copyrightId":1399823,"mvid":0,"transNames":null,"commentThreadId":"R_SO_4_1357963386","type":0,"duration":202222,"alias":["网剧《致我们暖暖的小时光》片尾曲"],"privilege":{"st":0,"flag":0,"subp":1,"fl":128000,"fee":8,"dl":0,"cp":1,"preSell":false,"cs":false,"toast":false,"maxbr":999000,"id":1357963386,"pl":128000,"sp":7,"payed":0},"djid":0,"album":{"id":78437011,"name":"两人份美好","picUrl":"http://p2.music.126.net/D9O5r9_0pJXzXRYG8AgvKg==/109951163992675405.jpg","tns":[],"pic_str":"109951163992675405","pic":109951163992675405},"artists":[{"id":13059444,"name":"李俊毅","tns":[],"alias":[]}],"name":"两人份美好","id":1357963386},{"no":1,"fee":8,"ftype":0,"publishTime":1546099200007,"status":0,"score":100.0,"copyrightId":0,"mvid":0,"transNames":null,"commentThreadId":"R_SO_4_1334297185","type":0,"duration":464810,"alias":[],"privilege":{"st":0,"flag":66,"subp":1,"fl":128000,"fee":8,"dl":0,"cp":1,"preSell":false,"cs":false,"toast":false,"maxbr":999000,"id":1334297185,"pl":128000,"sp":7,"payed":0},"djid":0,"album":{"id":74928688,"name":"时间简史","picUrl":"http://p1.music.126.net/eOwIZxk3uB0ccs4WsUGX4g==/109951163758084767.jpg","tns":[],"pic_str":"109951163758084767","pic":109951163758084767},"artists":[{"id":1050282,"name":"房东的猫","tns":[],"alias":[]},{"id":11318,"name":"晨曦光廊","tns":[],"alias":[]}],"name":"时间简史","id":1334297185},{"no":1,"fee":0,"ftype":0,"publishTime":1546770969872,"status":0,"score":5.0,"copyrightId":0,"mvid":0,"transNames":null,"commentThreadId":"R_SO_4_1337799011","type":0,"duration":161044,"alias":[],"privilege":{"st":0,"flag":128,"subp":1,"fl":320000,"fee":0,"dl":320000,"cp":1,"preSell":false,"cs":false,"toast":false,"maxbr":999000,"id":1337799011,"pl":320000,"sp":7,"payed":0},"djid":0,"album":{"id":75027600,"name":"L
                                O V E","picUrl":"http://p1.music.126.net/RO7Tcs3F5GWXv2lYmWB27w==/109951163777493776.jpg","tns":[],"pic_str":"109951163777493776","pic":109951163777493776},"artists":[{"id":28175239,"name":"Ezang","tns":[],"alias":[]}],"name":"L
                                O V E","id":1337799011},{"no":1,"fee":8,"ftype":0,"publishTime":1546270462838,"status":0,"score":100.0,"copyrightId":0,"mvid":0,"transNames":null,"commentThreadId":"R_SO_4_1336559582","type":0,"duration":288750,"alias":[],"privilege":{"st":0,"flag":64,"subp":1,"fl":128000,"fee":8,"dl":0,"cp":1,"preSell":false,"cs":false,"toast":false,"maxbr":999000,"id":1336559582,"pl":128000,"sp":7,"payed":0},"djid":0,"album":{"id":75006776,"name":"例外","picUrl":"http://p2.music.126.net/HEP_qyrEXr7xagM3Os6hAw==/109951163872704105.jpg","tns":[],"pic_str":"109951163872704105","pic":109951163872704105},"artists":[{"id":12205361,"name":"刘莱斯","tns":[],"alias":[]}],"name":"例外","id":1336559582},{"no":1,"fee":8,"ftype":0,"publishTime":1522166400007,"status":0,"score":100.0,"copyrightId":1415925,"mvid":0,"transNames":null,"commentThreadId":"R_SO_4_549309116","type":0,"duration":227200,"alias":[],"privilege":{"st":0,"flag":0,"subp":1,"fl":128000,"fee":8,"dl":0,"cp":1,"preSell":false,"cs":false,"toast":false,"maxbr":999000,"id":549309116,"pl":128000,"sp":7,"payed":0},"djid":0,"album":{"id":38134025,"name":"离人愁","picUrl":"http://p2.music.126.net/mhNZuN94H5ovRN-yfDHMIA==/109951163219198843.jpg","tns":[],"pic_str":"109951163219198843","pic":109951163219198843},"artists":[{"id":12419710,"name":"曲肖冰","tns":[],"alias":[]}],"name":"离人愁","id":549309116,"lastRank":92},{"no":1,"fee":0,"ftype":0,"publishTime":0,"status":0,"score":0.0,"copyrightId":663018,"mvid":0,"transNames":null,"commentThreadId":"R_SO_4_1359554489","type":0,"duration":292033,"alias":["TV动画《卡片战斗先导者(2018年版)》OP2
                                / TVアニメ「カードファイト!! ヴァンガード(2018年版)」OP2テーマ"],"privilege":{"st":0,"flag":128,"subp":1,"fl":320000,"fee":0,"dl":320000,"cp":1,"preSell":false,"cs":false,"toast":false,"maxbr":999000,"id":1359554489,"pl":320000,"sp":7,"payed":0},"djid":0,"album":{"id":78587746,"name":"Destiny
                                Calls","picUrl":"http://p2.music.126.net/PTiU20HfT_vkCyHt3jaK5w==/109951164007406038.jpg","tns":[],"pic_str":"109951164007406038","pic":109951164007406038},"artists":[{"id":17241,"name":"三森すずこ","tns":[],"alias":[]},{"id":17421,"name":"南條愛乃","tns":[],"alias":[]},{"id":725478,"name":"愛美","tns":[],"alias":[]}],"name":"Destiny
                                Calls","id":1359554489},{"no":1,"fee":8,"ftype":0,"publishTime":0,"status":0,"score":100.0,"copyrightId":1416070,"mvid":0,"transNames":null,"commentThreadId":"R_SO_4_1352002513","type":0,"duration":173617,"alias":[],"privilege":{"st":0,"flag":2,"subp":1,"fl":128000,"fee":8,"dl":0,"cp":1,"preSell":false,"cs":false,"toast":false,"maxbr":999000,"id":1352002513,"pl":128000,"sp":7,"payed":0},"djid":0,"album":{"id":75853338,"name":"空山新雨后","picUrl":"http://p2.music.126.net/-Ox3azW3BpHMpwyXrzqzsw==/109951163927362248.jpg","tns":[],"pic_str":"109951163927362248","pic":109951163927362248},"artists":[{"id":12174521,"name":"音阙诗听","tns":[],"alias":[]},{"id":12277185,"name":"锦零","tns":[],"alias":[]}],"name":"空山新雨后","id":1352002513,"lastRank":87},{"no":1,"fee":8,"ftype":0,"publishTime":1548518400000,"status":0,"score":100.0,"copyrightId":0,"mvid":0,"transNames":null,"commentThreadId":"R_SO_4_1342278329","type":0,"duration":168000,"alias":[],"privilege":{"st":0,"flag":66,"subp":1,"fl":128000,"fee":8,"dl":0,"cp":1,"preSell":false,"cs":false,"toast":false,"maxbr":999000,"id":1342278329,"pl":128000,"sp":7,"payed":0},"djid":0,"album":{"id":75338700,"name":"及时","picUrl":"http://p2.music.126.net/0uaGGn0buPTRmEWeZhONMQ==/109951163919653331.jpg","tns":[],"pic_str":"109951163919653331","pic":109951163919653331},"artists":[{"id":12002137,"name":"JSore","tns":[],"alias":[]}],"name":"人生苦短","id":1342278329},{"no":1,"fee":8,"ftype":0,"publishTime":1493049600000,"status":0,"score":100.0,"copyrightId":1403818,"mvid":0,"transNames":null,"commentThreadId":"R_SO_4_474739467","type":0,"duration":269366,"alias":[],"privilege":{"st":0,"flag":256,"subp":1,"fl":128000,"fee":8,"dl":0,"cp":1,"preSell":false,"cs":false,"toast":false,"maxbr":999000,"id":474739467,"pl":128000,"sp":7,"payed":0},"djid":0,"album":{"id":35377679,"name":"心安理得","picUrl":"http://p2.music.126.net/Hrckg2IfeAV34N4UAZctRg==/109951163604902705.jpg","tns":[],"pic_str":"109951163604902705","pic":109951163604902705},"artists":[{"id":12390184,"name":"王天戈","tns":[],"alias":[]}],"name":"心安理得","id":474739467},{"no":1,"fee":8,"ftype":0,"publishTime":0,"status":0,"score":0.0,"copyrightId":0,"mvid":0,"transNames":null,"commentThreadId":"R_SO_4_1359554505","type":0,"duration":150857,"alias":[],"privilege":{"st":0,"flag":0,"subp":1,"fl":128000,"fee":8,"dl":0,"cp":1,"preSell":false,"cs":false,"toast":false,"maxbr":999000,"id":1359554505,"pl":128000,"sp":7,"payed":0},"djid":0,"album":{"id":78535688,"name":"ywjhu","picUrl":"http://p2.music.126.net/94EgGct_Wa0GIOOS9_gxXg==/109951164007401761.jpg","tns":[],"pic_str":"109951164007401761","pic":109951164007401761},"artists":[{"id":29234405,"name":"月社_Moon
                                leagues","tns":[],"alias":[]}],"name":"Is who cares","id":1359554505},{"no":1,"fee":1,"ftype":0,"publishTime":1527609600007,"status":0,"score":100.0,"copyrightId":748010,"mvid":0,"transNames":null,"commentThreadId":"R_SO_4_569214126","type":0,"duration":227899,"alias":[],"privilege":{"st":0,"flag":1092,"subp":0,"fl":0,"fee":1,"dl":0,"cp":0,"preSell":false,"cs":false,"toast":false,"maxbr":999000,"id":569214126,"pl":0,"sp":0,"payed":0},"djid":0,"album":{"id":39483016,"name":"可能否","picUrl":"http://p2.music.126.net/SJYnDay7wgewU3O7tPfmOQ==/109951163322541581.jpg","tns":[],"pic_str":"109951163322541581","pic":109951163322541581},"artists":[{"id":12037229,"name":"木小雅","tns":[],"alias":[]}],"name":"可能否","id":569214126},{"no":1,"fee":8,"ftype":0,"publishTime":1545062400007,"status":0,"score":80.0,"copyrightId":743010,"mvid":0,"transNames":null,"commentThreadId":"R_SO_4_1334131579","type":0,"duration":192155,"alias":[],"privilege":{"st":0,"flag":133,"subp":1,"fl":128000,"fee":8,"dl":0,"cp":1,"preSell":false,"cs":false,"toast":false,"maxbr":999000,"id":1334131579,"pl":128000,"sp":7,"payed":0},"djid":0,"album":{"id":74909673,"name":"Ain't
                                No Better Life","picUrl":"http://p1.music.126.net/F5HHN-ieH5z4s11B05_xkQ==/109951163732331978.jpg","tns":[],"pic_str":"109951163732331978","pic":109951163732331978},"artists":[{"id":1081221,"name":"Refuzion","tns":[],"alias":[]}],"name":"Ain't
                                No Better Life","id":1334131579},{"no":1,"fee":8,"ftype":0,"publishTime":1555516800000,"status":0,"score":0.0,"copyrightId":22036,"mvid":0,"transNames":null,"commentThreadId":"R_SO_4_1359457137","type":0,"duration":257272,"alias":[],"privilege":{"st":0,"flag":128,"subp":1,"fl":128000,"fee":8,"dl":0,"cp":1,"preSell":false,"cs":false,"toast":false,"maxbr":999000,"id":1359457137,"pl":128000,"sp":7,"payed":0},"djid":0,"album":{"id":78574407,"name":"时间是台推土机","picUrl":"http://p2.music.126.net/jyN7ohxUb6rxjFlhXsISXg==/109951164006513840.jpg","tns":[],"pic_str":"109951164006513840","pic":109951164006513840},"artists":[{"id":5352,"name":"王梵瑞","tns":[],"alias":[]}],"name":"时间是台推土机","id":1359457137},{"no":1,"fee":0,"ftype":0,"publishTime":0,"status":0,"score":0.0,"copyrightId":1387818,"mvid":0,"transNames":null,"commentThreadId":"R_SO_4_1359499003","type":0,"duration":165489,"alias":[],"privilege":{"st":0,"flag":0,"subp":1,"fl":320000,"fee":0,"dl":320000,"cp":1,"preSell":false,"cs":false,"toast":false,"maxbr":999000,"id":1359499003,"pl":320000,"sp":7,"payed":0},"djid":0,"album":{"id":78584179,"name":"第二杯半价","picUrl":"http://p1.music.126.net/40uPjmAZMhenNWbKEemekA==/109951164006798926.jpg","tns":[],"pic_str":"109951164006798926","pic":109951164006798926},"artists":[{"id":12318400,"name":"林晨阳","tns":[],"alias":[]}],"name":"第二杯半价","id":1359499003},{"no":1,"fee":0,"ftype":0,"publishTime":0,"status":0,"score":0.0,"copyrightId":681011,"mvid":0,"transNames":null,"commentThreadId":"R_SO_4_1359282227","type":0,"duration":214000,"alias":[],"privilege":{"st":0,"flag":64,"subp":1,"fl":320000,"fee":0,"dl":320000,"cp":1,"preSell":false,"cs":false,"toast":false,"maxbr":999000,"id":1359282227,"pl":320000,"sp":7,"payed":0},"djid":0,"album":{"id":78561024,"name":"OOO","picUrl":"http://p2.music.126.net/okS6xVSJvAXDeOnY7GKixA==/109951164004720826.jpg","tns":[],"pic_str":"109951164004720826","pic":109951164004720826},"artists":[{"id":12605278,"name":"wweimm","tns":[],"alias":[]}],"name":"陈词烂调","id":1359282227},{"no":1,"fee":8,"ftype":0,"publishTime":0,"status":0,"score":100.0,"copyrightId":0,"mvid":0,"transNames":null,"commentThreadId":"R_SO_4_1355324656","type":0,"duration":172941,"alias":[],"privilege":{"st":0,"flag":0,"subp":1,"fl":128000,"fee":8,"dl":0,"cp":1,"preSell":false,"cs":false,"toast":false,"maxbr":999000,"id":1355324656,"pl":128000,"sp":7,"payed":0},"djid":0,"album":{"id":78239741,"name":"樱花大道","picUrl":"http://p2.music.126.net/l3X4X6Ro2fVzH_x0aY1BPQ==/109951163961124473.jpg","tns":[],"pic_str":"109951163961124473","pic":109951163961124473},"artists":[{"id":28863864,"name":"DandanBachata","tns":[],"alias":[]}],"name":"樱花大道","id":1355324656},{"no":1,"fee":8,"ftype":0,"publishTime":1547351444641,"status":0,"score":60.0,"copyrightId":0,"mvid":0,"transNames":null,"commentThreadId":"R_SO_4_1339518112","type":0,"duration":351427,"alias":[],"privilege":{"st":0,"flag":0,"subp":1,"fl":128000,"fee":8,"dl":0,"cp":1,"preSell":false,"cs":false,"toast":false,"maxbr":999000,"id":1339518112,"pl":128000,"sp":7,"payed":0},"djid":0,"album":{"id":75139289,"name":"雨天","picUrl":"http://p2.music.126.net/17VC-4osfPdYobWvwFtXCA==/109951163792176876.jpg","tns":[],"pic_str":"109951163792176876","pic":109951163792176876},"artists":[{"id":12119269,"name":"南里乐队","tns":[],"alias":[]}],"name":"雨天","id":1339518112},{"no":3,"fee":8,"ftype":0,"publishTime":0,"status":0,"score":0.0,"copyrightId":0,"mvid":0,"transNames":null,"commentThreadId":"R_SO_4_1359210380","type":0,"duration":243571,"alias":[],"privilege":{"st":0,"flag":0,"subp":1,"fl":128000,"fee":8,"dl":0,"cp":1,"preSell":false,"cs":false,"toast":false,"maxbr":999000,"id":1359210380,"pl":128000,"sp":7,"payed":0},"djid":0,"album":{"id":78533784,"name":"今日阴|晴","picUrl":"http://p2.music.126.net/nQ0qU98i88AWxfPlx2Ahhg==/109951164003962805.jpg","tns":[],"pic_str":"109951164003962805","pic":109951164003962805},"artists":[{"id":12032105,"name":"头发胡同","tns":[],"alias":[]},{"id":28071434,"name":"罗佳","tns":[],"alias":[]}],"name":"风啊","id":1359210380},{"no":1,"fee":8,"ftype":0,"publishTime":0,"status":0,"score":100.0,"copyrightId":754021,"mvid":0,"transNames":null,"commentThreadId":"R_SO_4_1357825630","type":0,"duration":217058,"alias":[],"privilege":{"st":0,"flag":0,"subp":1,"fl":128000,"fee":8,"dl":0,"cp":1,"preSell":false,"cs":false,"toast":false,"maxbr":999000,"id":1357825630,"pl":128000,"sp":7,"payed":0},"djid":0,"album":{"id":78425810,"name":"最近","picUrl":"http://p2.music.126.net/dq9DaZxPNDYg0B2sWKJnig==/109951163988596212.jpg","tns":[],"pic_str":"109951163988596212","pic":109951163988596212},"artists":[{"id":29069586,"name":"王小帅","tns":[],"alias":[]}],"name":"最近
                                (正式版)","id":1357825630,"lastRank":28},{"no":1,"fee":8,"ftype":0,"publishTime":0,"status":0,"score":20.0,"copyrightId":0,"mvid":0,"transNames":null,"commentThreadId":"R_SO_4_1357828613","type":0,"duration":255485,"alias":[],"privilege":{"st":0,"flag":66,"subp":1,"fl":128000,"fee":8,"dl":0,"cp":1,"preSell":false,"cs":false,"toast":false,"maxbr":999000,"id":1357828613,"pl":128000,"sp":7,"payed":0},"djid":0,"album":{"id":75814020,"name":"著新风","picUrl":"http://p1.music.126.net/m2xl_V39mlL2NMv-dbzwOQ==/109951163921417935.jpg","tns":[],"pic_str":"109951163921417935","pic":109951163921417935},"artists":[{"id":12626424,"name":"马睿哲","tns":[],"alias":[]}],"name":"红了叶","id":1357828613},{"no":1,"fee":8,"ftype":0,"publishTime":0,"status":0,"score":100.0,"copyrightId":0,"mvid":0,"transNames":null,"commentThreadId":"R_SO_4_1350460585","type":0,"duration":199393,"alias":[],"privilege":{"st":0,"flag":0,"subp":1,"fl":128000,"fee":8,"dl":0,"cp":1,"preSell":false,"cs":false,"toast":false,"maxbr":999000,"id":1350460585,"pl":128000,"sp":7,"payed":0},"djid":0,"album":{"id":75758593,"name":"我一点都不想你","picUrl":"http://p2.music.126.net/HbTs-kqQ41PIsYoB7JMy5A==/109951163907670375.jpg","tns":[],"pic_str":"109951163907670375","pic":109951163907670375},"artists":[{"id":12227290,"name":"BigYear大年","tns":[],"alias":[]}],"name":"我一点都不想你","id":1350460585,"lastRank":15},{"no":7,"fee":0,"ftype":0,"publishTime":1504454400007,"status":0,"score":90.0,"copyrightId":576016,"mvid":0,"transNames":null,"commentThreadId":"R_SO_4_507114391","type":0,"duration":178983,"alias":[],"privilege":{"st":0,"flag":128,"subp":1,"fl":320000,"fee":0,"dl":320000,"cp":1,"preSell":false,"cs":false,"toast":false,"maxbr":999000,"id":507114391,"pl":320000,"sp":7,"payed":0},"djid":0,"album":{"id":36225288,"name":"天启联盟
                                游戏原声","picUrl":"http://p2.music.126.net/Rw4QWMnlXfjt3UnUmUldtQ==/109951163027858832.jpg","tns":[],"pic_str":"109951163027858832","pic":109951163027858832},"artists":[{"id":751129,"name":"网易游戏","tns":[],"alias":[]},{"id":12637922,"name":"Jeff
                                Broadben","tns":[],"alias":[]}],"name":"黎明前的黑暗","id":507114391},{"no":1,"fee":8,"ftype":0,"publishTime":0,"status":0,"score":100.0,"copyrightId":0,"mvid":0,"transNames":null,"commentThreadId":"R_SO_4_1353723423","type":0,"duration":238550,"alias":[],"privilege":{"st":0,"flag":0,"subp":1,"fl":128000,"fee":8,"dl":0,"cp":1,"preSell":false,"cs":false,"toast":false,"maxbr":320000,"id":1353723423,"pl":128000,"sp":7,"payed":0},"djid":0,"album":{"id":78153650,"name":"爱而不得","picUrl":"http://p2.music.126.net/RvsZGgAG4cbegXzP6l6_iQ==/109951163945851972.jpg","tns":[],"pic_str":"109951163945851972","pic":109951163945851972},"artists":[{"id":12253040,"name":"于兜兜","tns":[],"alias":[]},{"id":12138215,"name":"傅酥","tns":[],"alias":[]}],"name":"爱而不得","id":1353723423},{"no":1,"fee":8,"ftype":0,"publishTime":1547481600007,"status":0,"score":100.0,"copyrightId":7001,"mvid":0,"transNames":null,"commentThreadId":"R_SO_4_1338737882","type":0,"duration":207151,"alias":[],"privilege":{"st":0,"flag":4,"subp":1,"fl":128000,"fee":8,"dl":0,"cp":1,"preSell":false,"cs":false,"toast":false,"maxbr":320000,"id":1338737882,"pl":128000,"sp":7,"payed":0},"djid":0,"album":{"id":75119512,"name":"雨后彩虹","picUrl":"http://p2.music.126.net/B2gPRzrExeqVmWq0apiA6w==/109951163803903378.jpg","tns":[],"pic_str":"109951163803903378","pic":109951163803903378},"artists":[{"id":7063,"name":"A-Lin","tns":[],"alias":[]}],"name":"雨后彩虹","id":1338737882},{"no":1,"fee":8,"ftype":0,"publishTime":0,"status":0,"score":100.0,"copyrightId":1372818,"mvid":0,"transNames":null,"commentThreadId":"R_SO_4_1357816405","type":0,"duration":247749,"alias":[],"privilege":{"st":0,"flag":0,"subp":1,"fl":128000,"fee":8,"dl":0,"cp":1,"preSell":false,"cs":false,"toast":false,"maxbr":999000,"id":1357816405,"pl":128000,"sp":7,"payed":0},"djid":0,"album":{"id":78425421,"name":"只是太爱你","picUrl":"http://p2.music.126.net/mKhOfpO72lu1vrXbXohX8A==/109951163988545723.jpg","tns":[],"pic_str":"109951163988545723","pic":109951163988545723},"artists":[{"id":12206844,"name":"丁芙妮","tns":[],"alias":[]}],"name":"只是太爱你","id":1357816405},{"no":12,"fee":8,"ftype":0,"publishTime":1550764800000,"status":0,"score":90.0,"copyrightId":7003,"mvid":10863742,"transNames":null,"commentThreadId":"R_SO_4_1347702312","type":0,"duration":205803,"alias":[],"privilege":{"st":0,"flag":260,"subp":1,"fl":128000,"fee":8,"dl":0,"cp":1,"preSell":false,"cs":false,"toast":false,"maxbr":999000,"id":1347702312,"pl":128000,"sp":7,"payed":0},"djid":0,"album":{"id":75666656,"name":"FATHER
                                OF 4","picUrl":"http://p2.music.126.net/_LKo9f0IDzlRMbKk9r46xQ==/109951163909304464.jpg","tns":[],"pic_str":"109951163909304464","pic":109951163909304464},"artists":[{"id":832703,"name":"Offset","tns":[],"alias":[]},{"id":12504253,"name":"Cardi
                                B","tns":[],"alias":[]}],"name":"Clout","id":1347702312},{"no":1,"fee":0,"ftype":0,"publishTime":0,"status":0,"score":0.0,"copyrightId":0,"mvid":0,"transNames":null,"commentThreadId":"R_SO_4_1359523156","type":0,"duration":218801,"alias":[],"privilege":{"st":0,"flag":128,"subp":1,"fl":320000,"fee":0,"dl":320000,"cp":1,"preSell":false,"cs":false,"toast":false,"maxbr":320000,"id":1359523156,"pl":320000,"sp":7,"payed":0},"djid":0,"album":{"id":78585774,"name":"Look
                                But Don't Touch","picUrl":"http://p2.music.126.net/P7M1rtROnVBY8l03kDCPNg==/109951164007096109.jpg","tns":[],"pic_str":"109951164007096109","pic":109951164007096109},"artists":[{"id":742170,"name":"Polyphia","tns":[],"alias":[]}],"name":"Look
                                But Don't Touch","id":1359523156},{"no":1,"fee":0,"ftype":0,"publishTime":1540463738615,"status":0,"score":75.0,"copyrightId":0,"mvid":10826119,"transNames":null,"commentThreadId":"R_SO_4_1320421436","type":0,"duration":236428,"alias":[],"privilege":{"st":0,"flag":2,"subp":1,"fl":320000,"fee":0,"dl":320000,"cp":1,"preSell":false,"cs":false,"toast":false,"maxbr":999000,"id":1320421436,"pl":320000,"sp":7,"payed":0},"djid":0,"album":{"id":74074958,"name":"那时候的爱情","picUrl":"http://p2.music.126.net/9Me3XH-lhjAGtyc7WKxyqA==/109951163624708399.jpg","tns":[],"pic_str":"109951163624708399","pic":109951163624708399},"artists":[{"id":12559499,"name":"韩俊林","tns":[],"alias":[]}],"name":"那时候的爱情","id":1320421436},{"no":5,"fee":8,"ftype":0,"publishTime":1480003200007,"status":0,"score":100.0,"copyrightId":7003,"mvid":5404031,"transNames":null,"commentThreadId":"R_SO_4_441491828","type":0,"duration":325266,"alias":[],"privilege":{"st":0,"flag":132,"subp":1,"fl":128000,"fee":8,"dl":0,"cp":1,"preSell":false,"cs":false,"toast":false,"maxbr":999000,"id":441491828,"pl":128000,"sp":7,"payed":0},"djid":0,"album":{"id":35005583,"name":"飞行器的执行周期","picUrl":"http://p2.music.126.net/wSMfGvFzOAYRU_yVIfquAA==/2946691248081599.jpg","tns":[],"pic":2946691248081599},"artists":[{"id":2843,"name":"郭顶","tns":[],"alias":[]}],"name":"水星记","id":441491828},{"no":3,"fee":8,"ftype":0,"publishTime":1555430400000,"status":0,"score":0.0,"copyrightId":7001,"mvid":0,"transNames":null,"commentThreadId":"R_SO_4_1359366993","type":0,"duration":114416,"alias":[],"privilege":{"st":0,"flag":4,"subp":1,"fl":128000,"fee":8,"dl":0,"cp":1,"preSell":false,"cs":false,"toast":false,"maxbr":320000,"id":1359366993,"pl":128000,"sp":7,"payed":0},"djid":0,"album":{"id":78570733,"name":"HOMECOMING:
                                THE LIVE ALBUM","picUrl":"http://p2.music.126.net/Rllcz01PsKA9tqSSXtwrdA==/109951164005416293.jpg","tns":[],"pic_str":"109951164005416293","pic":109951164005416293},"artists":[{"id":48436,"name":"Beyoncé","tns":[],"alias":[]}],"name":"Freedom
                                (Homecoming Live)","id":1359366993}]
                            </textarea>
                        </div>
                        <div class="n-cmt" id="comment-box" data-tid="A_PL_0_19723756" data-count="152150">
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="g-ft ">
            <div class="m-ft">
                <div class="wrap f-cb">
                    <div class="copy">
                        <p class="link">
                            <a href="//help.mail.163.com/service.html" target="_blank" class="item s-fc4">
                                客户服务
                            </a>
                            <span class="line">
                                |
                            </span>
                            <a href="//music.163.com/html/web2/service.html" target="_blank" class="item s-fc4">
                                服务条款
                            </a>
                            <span class="line">
                                |
                            </span>
                            <a href="//corp.163.com/gb/legal.html" target="_blank" class="item s-fc4">
                                隐私政策
                            </a>
                            <span class="line">
                                |
                            </span>
                            <a href="//music.163.com/st/staticdeal/complaints.html" target="_blank"
                            class="item s-fc4">
                                版权投诉指引
                            </a>
                            <span class="line">
                                |
                            </span>
                            <a id="g_feedback" href="#" class="s-fc4" onclick="nm.x.feedback();return false;"
                            hidefocus="true">
                                意见反馈
                            </a>
                        </p>
                        <p class="right s-fc3">
                            <span class="sep span">
                                网易公司版权所有©1997-2019
                            </span>
                            <span class="span">
                                杭州乐读科技有限公司运营：
                            </span>
                            <a href="http://p1.music.126.net/03WF0APmm-J0TqdbOc8-XQ==/109951163649544962.png"
                            target="_blank" class="alink s-fc3">
                                浙网文[2018]3506-263号
                            </a>
                        </p>
                        <p class="contact s-fc3">
                            <span class="sep span">
                                违法和不良信息举报电话：0571-89853516
                            </span>
                            <span class="span">
                                举报邮箱：
                            </span>
                            <a class="alink" href="mailto:ncm5990@163.com">
                                ncm5990@163.com
                            </a>
                        </p>
                    </div>
                    <ul class="enter f-fr">
                        <li class="unit">
                            <a class="logo logonew logo-auth f-tid" href="//music.163.com/st/userbasic#/auth"
                            target="_blank">
                            </a>
                            <span class="tt tt-auth">
                            </span>
                        </li>
                        <li class="unit">
                            <a class="logo logonew logo-musician f-tid" href="//music.163.com/recruit"
                            target="_blank">
                            </a>
                            <span class="tt tt-musician">
                            </span>
                        </li>
                        <li class="unit">
                            <a class="logo logonew logo-reward f-tid" href="//music.163.com/web/reward"
                            target="_blank">
                            </a>
                            <span class="tt tt-reward">
                            </span>
                        </li>
                        <li class="unit">
                            <a class="logo logonew logo-cash f-tid" href="//music.163.com/uservideo#/plan"
                            target="_blank">
                            </a>
                            <span class="tt tt-cash">
                            </span>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
        <a title="回到顶部" class="m-back" href="#" id="g_backtop" hidefocus="true"
        style="display:none;">
            回到顶部
        </a>
        <div id="template-box" style="display:none;">
            <textarea name="ntp" id="m-wgt-selector" style="display:none;">
                <div class="u-slt f-pr">
                    <span class="curr f-thide">
                    </span>
                    <i class="btn">
                    </i>
                    <ul>
                    </ul>
                </div>
            </textarea>
            <textarea name="jst" id="m-wgt-selector-list" style="display:none;">
                {list data as x}
                <li class="f-thide">
                    <a href="#" data-value="${x.v}" title="${x.t}">
                        ${x.t}
                    </a>
                </li>
                {/list}
            </textarea>
            <textarea name="ntp" id="m-wgt-create" style="display:none;">
                <div class="lyct m-crgd f-cb f-tc">
                    <p>
                        歌单名：
                        <input type="text" class="u-txt j-flag">
                    </p>
                    <div class="u-err f-vhide j-flag">
                        <i class="u-icn u-icn-25">
                        </i>
                        错误提示
                    </div>
                    <p class="tip s-fc4">
                        可通过“收藏”将音乐添加到新歌单中
                    </p>
                    <div class="btn">
                        <a href="javascript:;" class="u-btn2 u-btn2-2 u-btn2-w2 j-flag" hidefocus="true">
                            <i>
                                新 建
                            </i>
                        </a>
                        <a href="javascript:;" class="u-btn2 u-btn2-1 u-btn2-w2 j-flag" hidefocus="true">
                            <i>
                                取 消
                            </i>
                        </a>
                    </div>
                </div>
            </textarea>
            <textarea name="ntp" id="m-wgt-comment" style="display:none;">
                <div class="u-title u-title-1">
                    <h3>
                        <span class="f-ff2">
                            评论
                        </span>
                    </h3>
                    <span class="sub s-fc3">
                        共
                        <span class="j-flag">
                            0
                        </span>
                        条评论
                    </span>
                </div>
                <div class="m-cmmt">
                    <div class="iptarea">
                        <div class="head">
                            <img src="http://s4.music.126.net/style/web2/img/default/default_avatar.jpg?param=50y50">
                        </div>
                        <div class="j-flag">
                        </div>
                    </div>
                    <div class="cmmts j-flag">
                    </div>
                    <div class="j-flag">
                    </div>
                </div>
            </textarea>
            <textarea name="ntp" id="m-wgt-comment2" style="display:none;">
                <div class="m-dynamic">
                    <div class="dbox dbox-cmt">
                        <span class="darr">
                            <i class="bd">
                                ◆
                            </i>
                            <i class="bg">
                                ◆
                            </i>
                        </span>
                        <div class="m-cmmt m-cmmt-s">
                            <div class="iptarea j-flag">
                            </div>
                            <div class="cmmts">
                                <div class="j-flag">
                                </div>
                                <div class="dmore dmore-cmt f-cb">
                                    <div class="dhas s-fc3">
                                        后面还有
                                        <span class="j-flag">
                                            0
                                        </span>
                                        条评论，
                                        <a data-type="viewmore" class="s-fc3 f-ff1" href="javascript:void(0)">
                                            查看更多&gt;
                                        </a>
                                    </div>
                                    <a data-type="cc" class="dtoggle" href="javascript:void(0)">
                                        收起
                                        <i data-type="cc" class="u-icn u-icn-61">
                                        </i>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </textarea>
            <textarea name="ntp" id="m-wgt-comment3" style="display:none;">
                <div class="dcmt">
                    <p>
                        <span class="f-fw1">
                            评论
                        </span>
                        (
                        <span class="j-flag">
                        </span>
                        )
                    </p>
                    <div class="m-cmmt m-cmmt-s">
                        <div class="iptarea j-flag">
                        </div>
                        <div class="cmmts j-flag">
                        </div>
                        <div class="j-flag">
                        </div>
                    </div>
                </div>
            </textarea>
            <textarea name="jst" id="m-wgt-comment-item" style="display:none;">
                {list beg..end as y} {var x=xlist[y]} {if !!x}
                <div id="${x.commentId|seed}" class="itm" data-id="${x.commentId}">
                    <div class="head">
                        <a href="/user/home?id=${x.user.userId}">
                            <img src="${x.user.avatarUrl}?param=50y50">
                        </a>
                    </div>
                    <div class="cntwrap">
                        <div class="">
                            <div class="cnt f-brk">
                                <a href="/user/home?id=${x.user.userId}" class="s-fc7">
                                    ${escape(x.user.nickname)}
                                </a>
                                ${getAuthIcon(x.user)} {if x.user.vipRights} {if x.user.vipRights.associator
                                && x.user.vipRights.associator.rights} {if x.user.vipRights.redVipAnnualCount
                                >= 1}
                                <img src="//p1.music.126.net/y8pM-M1mytg6B1ThedCbJA==/109951163709550847.png"
                                class="brand-tag brand-vip" />
                                {else}
                                <img src="//p1.music.126.net/iOnYL-pAvH2LuQfStGOjfQ==/109951163709553273.png"
                                class="brand-tag brand-vip" />
                                {/if} {elseif x.user.vipRights.musicPackage && x.user.vipRights.musicPackage.rights}
                                <img src="//p1.music.126.net/G2KYG9JjrGGP5grSaXOZaw==/109951163309837705.png"
                                class="brand-tag brand-package" />
                                {/if} {/if} {if !!x.beRepliedUser} &nbsp;回复&nbsp;
                                <a href="/user/home?id=${x.beRepliedUser.userId}" class="s-fc7">
                                    ${escape(x.beRepliedUser.nickname)}
                                </a>
                                ${getAuthIcon(x.beRepliedUser)} {if x.beRepliedUser.vipRights} {if x.beRepliedUser.vipRights.associator
                                && x.beRepliedUser.vipRights.associator.rights} {if x.beRepliedUser.vipRights.redVipAnnualCount
                                >= 1}
                                <img src="//p1.music.126.net/y8pM-M1mytg6B1ThedCbJA==/109951163709550847.png"
                                class="brand-tag brand-vip" />
                                {else}
                                <img src="//p1.music.126.net/iOnYL-pAvH2LuQfStGOjfQ==/109951163709553273.png"
                                class="brand-tag brand-vip" />
                                {/if} {elseif x.beRepliedUser.vipRights.musicPackage && x.beRepliedUser.vipRights.musicPackage.rights}
                                <img src="//p1.music.126.net/G2KYG9JjrGGP5grSaXOZaw==/109951163309837705.png"
                                class="brand-tag brand-package" />
                                {/if} {/if} {/if} ：${getRichText(escape(x.content),'s-fc7')} {if !!x.expressionUrl}
                                <div class="u-expression">
                                    <img src="${x.expressionUrl}?param=70y70">
                                    </img>
                                </div>
                                {/if}
                            </div>
                        </div>
                        {if x.beReplied&&x.beReplied.length} {var replied = x.beReplied[0]}
                        <div class="que f-brk f-pr s-fc3">
                            <span class="darr">
                                <i class="bd">
                                    ◆
                                </i>
                                <i class="bg">
                                    ◆
                                </i>
                            </span>
                            {if (replied && replied.status!=-5) && (replied.content || replied.expressionUrl)}
                            <a class="s-fc7" href="/user/home?id=${replied.user.userId}">
                                ${replied.user.nickname}${getAuthIcon(replied.user)}
                            </a>
                            {if replied.user.vipRights} {if replied.user.vipRights.associator && replied.user.vipRights.associator.rights}
                            {if replied.user.vipRights.redVipAnnualCount >= 1}
                            <img src="//p1.music.126.net/y8pM-M1mytg6B1ThedCbJA==/109951163709550847.png"
                            class="brand-tag brand-vip" />
                            {else}
                            <img src="//p1.music.126.net/iOnYL-pAvH2LuQfStGOjfQ==/109951163709553273.png"
                            class="brand-tag brand-vip" />
                            {/if} {elseif replied.user.vipRights.musicPackage && replied.user.vipRights.musicPackage.rights}
                            <img src="//p1.music.126.net/G2KYG9JjrGGP5grSaXOZaw==/109951163309837705.png"
                            class="brand-tag brand-package" />
                            {/if} {/if} ：${getRichText(escape(replied.content),'s-fc7')} {if !!replied.expressionUrl}
                            <div class="u-expression">
                                <img src="${replied.expressionUrl}?param=70y70">
                                </img>
                            </div>
                            {/if} {else} 该评论已删除 {/if}
                        </div>
                        {/if}
                        <div class="rp">
                            <div class="time s-fc4">
                                ${timeformat(x.time)}
                            </div>
                            {if x.topCommentId}
                            <span class="top">
                                音乐人置顶
                            </span>
                            {/if} {if canTop()&&GUser&&GUser.userId&&(GUser.userId==x.user.userId)}
                            <span class="dlt">
                                {if x.topCommentId}
                                <a href="javascript:void(0)" class="s-fc3" data-id="${x.commentId}" data-tid="${x.topCommentId}"
                                data-type="canceltop">
                                    解除置顶
                                </a>
                                {else}
                                <a href="javascript:void(0)" class="s-fc3" data-id="${x.commentId}" data-type="gotop">
                                    置顶评论
                                </a>
                                {/if}
                                <span class="sep">
                                    |
                                </span>
                            </span>
                            {/if} {if GUser&&GUser.userId&&(GUser.userId==x.user.userId||GUser.userId==resUserId)}
                            <span class="dlt">
                                <a href="javascript:void(0)" class="s-fc3" data-id="${x.commentId}" {if
                                x.topCommentId}data-tid="${x.topCommentId}" {/if}data-type="delete">
                                    删除
                                </a>
                                <span class="sep">
                                    |
                                </span>
                            </span>
                            {/if} {if GAllowRejectComment} {if hot||!x.isRemoveHotComment}
                            <span class="dlt">
                                <a href="javascript:void(0)" class="s-fc3" data-id="${x.commentId}" data-type="reject">
                                    移除精彩评论
                                </a>
                                <span class="sep">
                                    |
                                </span>
                            </span>
                            {else}
                            <span class="s-fc3">
                                已移除精彩评论
                            </span>
                            <span class="sep">
                                |
                            </span>
                            {/if} {/if} {if !x.topCommentId}
                            <a data-id="${x.commentId}" data-type="{if !x.liked}like{else}unlike{/if}"
                            href="javascript:void(0)">
                                <i class="zan u-icn2 u-icn2-{if x.liked}13{else}12{/if}">
                                </i>
                                {if x.likedCount} (${getPlayCount(x.likedCount)}){/if}
                            </a>
                            <span class="sep">
                                |
                            </span>
                            {/if}
                            <a href="javascript:void(0)" class="s-fc3" data-id="${x.commentId}" data-type="reply">
                                回复
                            </a>
                        </div>
                    </div>
                </div>
                {/if} {/list}
            </textarea>
            <textarea name="jst" id="m-wgt-comment-item-2" style="display:none;">
                {list beg..end as y} {var x=xlist[y]}
                <div class="itm" data-id="${x.commentId}">
                    <div class="head">
                        <a href="/user/home?id=${x.user.userId}">
                            <img src="${x.user.avatarUrl}?param=50y50">
                        </a>
                    </div>
                    <div class="cntwrap">
                        <div class="cnt2 f-brk">
                            <a href="/user/home?id=${x.user.userId}" class="s-fc7">
                                ${escape(x.user.nickname)}
                            </a>
                            ${getAuthIcon(x.user)} {if x.user.vipRights} {if x.user.vipRights.associator
                            && x.user.vipRights.associator.rights} {if x.user.vipRights.redVipAnnualCount
                            >= 1}
                            <img src="//p1.music.126.net/y8pM-M1mytg6B1ThedCbJA==/109951163709550847.png"
                            class="brand-tag brand-vip" />
                            {else}
                            <img src="//p1.music.126.net/iOnYL-pAvH2LuQfStGOjfQ==/109951163709553273.png"
                            class="brand-tag brand-vip" />
                            {/if} {elseif x.user.vipRights.musicPackage && x.user.vipRights.musicPackage.rights}
                            <img src="//p1.music.126.net/G2KYG9JjrGGP5grSaXOZaw==/109951163309837705.png"
                            class="brand-tag brand-package" />
                            {/if} {/if} {if !!x.beRepliedUser} &nbsp;回复&nbsp;
                            <a href="/user/home?id=${x.beRepliedUser.userId}" class="s-fc7">
                                ${escape(x.beRepliedUser.nickname)}
                            </a>
                            ${getAuthIcon(x.beRepliedUser)} {if x.beRepliedUser.vipRights} {if x.beRepliedUser.vipRights.associator
                            && x.beRepliedUser.vipRights.associator.rights} {if x.beRepliedUser.vipRights.redVipAnnualCount
                            >= 1}
                            <img src="//p1.music.126.net/y8pM-M1mytg6B1ThedCbJA==/109951163709550847.png"
                            class="brand-tag brand-vip" />
                            {else}
                            <img src="//p1.music.126.net/iOnYL-pAvH2LuQfStGOjfQ==/109951163709553273.png"
                            class="brand-tag brand-vip" />
                            {/if} {elseif x.beRepliedUser.vipRights.musicPackage && x.beRepliedUser.vipRights.musicPackage.rights}
                            <img src="//p1.music.126.net/G2KYG9JjrGGP5grSaXOZaw==/109951163309837705.png"
                            class="brand-tag brand-package" />
                            {/if} {/if} {/if} ：${getRichText(escape(x.content),'s-fc7')} {if !!x.expressionUrl}
                            <div class="u-expression">
                                <img src="${x.expressionUrl}?param=70y70">
                                </img>
                            </div>
                            {/if}
                        </div>
                        {if x.beReplied&&x.beReplied.length} {var replied = x.beReplied[0]}
                        <div class="que f-brk f-pr s-fc3">
                            <span class="darr">
                                <i class="bd">
                                    ◆
                                </i>
                                <i class="bg">
                                    ◆
                                </i>
                            </span>
                            {if replied&&replied.content}
                            <a class="s-fc7" href="/user/home?id=${replied.user.userId}">
                                ${replied.user.nickname}${getAuthIcon(replied.user)}
                            </a>
                            {if replied.user.vipRights} {if replied.user.vipRights.associator && replied.user.vipRights.associator.rights}
                            {if replied.user.vipRights.redVipAnnualCount >= 1}
                            <img src="//p1.music.126.net/y8pM-M1mytg6B1ThedCbJA==/109951163709550847.png"
                            class="brand-tag brand-vip" />
                            {else}
                            <img src="//p1.music.126.net/iOnYL-pAvH2LuQfStGOjfQ==/109951163709553273.png"
                            class="brand-tag brand-vip" />
                            {/if} {elseif replied.user.vipRights.musicPackage && replied.user.vipRights.musicPackage.rights}
                            <img src="//p1.music.126.net/G2KYG9JjrGGP5grSaXOZaw==/109951163309837705.png"
                            class="brand-tag brand-package" />
                            {/if} {/if} ：${getRichText(escape(replied.content),'s-fc7')} {else} 该评论已删除
                            {/if}
                        </div>
                        {/if}
                        <div class="rp">
                            <div class="time s-fc4">
                                ${timeformat(x.time)}
                            </div>
                            {if GUser&&GUser.userId&&(GUser.userId==x.user.userId||GUser.userId==resUserId)}
                            <span class="dlt">
                                <a href="javascript:void(0)" class="s-fc3" data-id="${x.commentId}" data-type="delete">
                                    删除
                                </a>
                                <span class="sep">
                                    |
                                </span>
                            </span>
                            {/if}
                            <a data-id="${x.commentId}" data-type="{if !x.liked}like{else}unlike{/if}"
                            href="javascript:void(0)">
                                <i class="zan u-icn2 u-icn2-{if x.liked}13{else}12{/if}">
                                </i>
                                {if x.likedCount} (${getPlayCount(x.likedCount)}){/if}
                            </a>
                            <span class="sep">
                                |
                            </span>
                            <a href="javascript:void(0)" class="s-fc3" data-id="${x.commentId}" data-type="reply">
                                回复
                            </a>
                        </div>
                    </div>
                </div>
                {/list}
            </textarea>
            <textarea name="jst" id="m-wgt-input-1" style="display:none;">
                <div class="m-cmmtipt f-cb f-pr">
                    <div class="u-txtwrap holder-parent f-pr">
                        <textarea class="u-txt area j-flag" data-type="" placeholder="${placeholder}">
                            <&#47;textarea>
                    </div>
                    <div class="btns f-cb f-pr">
                        <i class="icn u-icn u-icn-36 j-flag">
                        </i>
                        <i class="icn u-icn u-icn-41 j-flag">
                        </i>
                        <a href="javascript:void(0)" class="btn u-btn u-btn-1 j-flag">
                            评论
                        </a>
                        <span class="zs s-fc4 j-flag">
                            110/120
                        </span>
                    </div>
                    <div class="corr u-arr">
                        <em class="arrline">
                            ◆
                        </em>
                        <span class="arrclr">
                            ◆
                        </span>
                    </div>
                </div>
                </textarea>
                <textarea name="jst" id="m-wgt-input-2" style="display:none;">
                    <div class="rept m-quk m-quk-1 f-pr">
                        <div class="iner">
                            <div class="corr u-arr u-arr-1">
                                <em class="arrline">
                                    ◆
                                </em>
                                <span class="arrclr">
                                    ◆
                                </span>
                            </div>
                            <div class="m-cmmtipt m-cmmtipt-1 f-cb f-pr">
                                <div class="u-txtwrap holder-parent f-pr j-wrap">
                                    <textarea class="u-txt area j-flag" placeholder="${placeholder}">
                                        <&#47;textarea>
                                </div>
                                <div class="btns f-cb f-pr">
                                    <i class="icn u-icn u-icn-36 j-flag">
                                    </i>
                                    <i class="icn u-icn u-icn-41 j-flag">
                                    </i>
                                    <a href="javascript:void(0)" class="btn u-btn u-btn-1 j-flag">
                                        回复
                                    </a>
                                    <span class="zs s-fc4 j-flag">
                                        110/120
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                    </textarea>
                    <textarea name="jst" id="m-wgt-input-3" style="display:none;">
                        <div class="m-cmmtipt f-cb f-pr">
                            <div class="u-txtwrap holder-parent f-pr">
                                <textarea class="u-txt area j-flag" placeholder="${placeholder}">
                                    <&#47;textarea>
                            </div>
                            <div class="btns f-cb f-pr">
                                <i class="icn u-icn u-icn-36 j-flag">
                                </i>
                                <i class="icn u-icn u-icn-41 j-flag">
                                </i>
                                <a class="btn u-btn u-btn-1 j-flag" href="javascript:void(0)">
                                    回复
                                </a>
                                <span class="zs s-fc4 j-flag">
                                    110/120
                                </span>
                            </div>
                        </div>
                        </textarea>
                        <textarea name="jst" id="m-wgt-input-4" style="display:none;">
                            <div class="m-cmmtipt f-cb f-pr">
                                <div class="u-txtwrap f-pr">
                                    <textarea class="u-txt area j-flag">
                                        <&#47;textarea>
                                </div>
                                <div class="btns f-cb f-pr">
                                    <i class="icn u-icn u-icn-36 j-flag">
                                    </i>
                                    <i class="icn u-icn u-icn-41 j-flag" style="display:none;">
                                    </i>
                                    <a class="f-fr u-btn u-btn-1 j-flag" href="javascript:void(0)">
                                        发送
                                    </a>
                                    <span class="zs s-fc4 j-flag">
                                        110/120
                                    </span>
                                </div>
                            </div>
                            </textarea>
                            <textarea name="jst" id="m-wgt-input-5" style="display:none;">
                                <div class="m-cmmtipt f-cb f-pr">
                                    <div class="u-txtwrap holder-parent f-pr">
                                        <textarea class="u-txt area j-flag" placeholder="${placeholder}">
                                            <&#47;textarea>
                                    </div>
                                    <div class="btns f-cb f-pr">
                                        <i class="icn u-icn u-icn-36 j-flag">
                                        </i>
                                        <i class="icn u-icn u-icn-41 j-flag">
                                        </i>
                                        <a class="btn u-btn u-btn-1 j-flag" href="javascript:void(0)">
                                            评论
                                        </a>
                                        <span class="zs s-fc4 j-flag">
                                            110/120
                                        </span>
                                    </div>
                                </div>
                                </textarea>
                                <textarea name="jst" id="m-wgt-input-6" style="display:none;">
                                    <div class="m-cmmtipt f-cb f-pr">
                                        <div class="u-txtwrap holder-parent f-pr">
                                            <textarea class="u-txt area j-flag" placeholder="${placeholder}">
                                                <&#47;textarea>
                                        </div>
                                        <div class="btns f-cb f-pr">
                                            <i class="icn u-icn u-icn-36 j-flag">
                                            </i>
                                            <i class="icn u-icn u-icn-41 j-flag">
                                            </i>
                                            <a class="btn u-btn u-btn-1 j-flag" href="javascript:void(0)">
                                                发送
                                            </a>
                                            <span class="zs s-fc4 j-flag">
                                                110/120
                                            </span>
                                        </div>
                                    </div>
                                    </textarea>
                                    <textarea name="ntp" id="m-wgt-subscribe" style="display:none;">
                                        <div class="lyct lyct-1 m-favgd f-cb">
                                            <div class="tit j-flag">
                                                <i class="u-icn u-icn-33">
                                                </i>
                                                新歌单
                                            </div>
                                            <div class="j-flag">
                                                <div class="u-load s-fc4">
                                                    <i class="icn">
                                                    </i>
                                                    加载中...
                                                </div>
                                            </div>
                                        </div>
                                    </textarea>
                                    <textarea name="jst" id="m-wgt-subscribe-item" style="display:none;">
                                        <ul>
                                            {list beg..end as y} {var x=xlist[y]}
                                            <li data-id="${x.id}" class="xtag {if x.trackCount+size>10000}dis{/if}">
                                                <div class="item f-cb">
                                                    <div class="left">
                                                        <a href="javascript:void(0)" class="avatar" target="_blank">
                                                            <img alt="" src="${x.coverImgUrl}?param=40y40">
                                                            {if x.highQuality}
                                                            <i class="u-jp u-icn2 u-icn2-jp5">
                                                            </i>
                                                            {/if}
                                                        </a>
                                                    </div>
                                                    <p class="name f-thide">
                                                        <a class="s-fc0" href="javascript:void(0)" target="_blank">
                                                            ${escape(cutStr(x.name,40))}
                                                        </a>
                                                    </p>
                                                    <p class="s-fc3">
                                                        ${x.trackCount}首
                                                    </p>
                                                    {if x.trackCount+size>10000}
                                                    <p class="limit">
                                                        歌单已满
                                                    </p>
                                                    {/if}
                                                </div>
                                            </li>
                                            {/list}
                                        </ul>
                                    </textarea>
                                    <textarea name="ntp" id="m-wgt-forward" style="display:none;">
                                        <div class="lyct lyct-1 f-cb">
                                            <div class="m-lyshare">
                                                <div class="u-txtwrap f-pr">
                                                    <label style="display: block;" class="j-flag">
                                                        说点什么
                                                    </label>
                                                    <textarea class="u-txt area j-flag" text=>
                                                        <&#47;textarea>
                                                </div>
                                                <div class="oper f-cb j-flag">
                                                    <div class="face f-fl f-pr">
                                                        <i class="u-icn u-icn-36 f-fl j-flag">
                                                        </i>
                                                        <i class="u-icn u-icn-41 j-flag">
                                                        </i>
                                                    </div>
                                                    <span class="zs f-fr s-fc3 j-flag">
                                                        140
                                                    </span>
                                                </div>
                                                <div class="btnwrap">
                                                    <a class="u-btn2 u-btn2-2 u-btn2-w2 j-flag" hidefocus="true" href="#">
                                                        <i>
                                                            转发
                                                        </i>
                                                    </a>
                                                    <a class="u-btn2 u-btn2-1 u-btn2-w2 j-flag" hidefocus="true" href="#">
                                                        <i>
                                                            取消
                                                        </i>
                                                    </a>
                                                </div>
                                                <div class="j-flag u-err">
                                                    <i class="u-icn u-icn-25">
                                                    </i>
                                                    <span>
                                                    </span>
                                                </div>
                                            </div>
                                        </div>
                                        </textarea>
                                        <textarea name="ntp" id="m-import-ok" style="display:none;">
                                            <div class="lyct f-cb f-tc">
                                                <p class="f-fs3 f-ff2">
                                                    <i class="u-icn u-icn-76">
                                                    </i>
                                                    &nbsp;&nbsp;歌曲同步完成
                                                </p>
                                                <div class="lybtn">
                                                    <a href="javascript:;" class="u-btn2 u-btn2-2 j-flag" hidefocus="true">
                                                        <i>
                                                            查看我的音乐
                                                        </i>
                                                    </a>
                                                </div>
                                            </div>
                                        </textarea>
                                        <textarea name="jst" id="m-wgt-atlist" style="display:none;">
                                            <div class="u-atlist">
                                                {if suggests.length == 0}
                                                <p>
                                                    轻敲空格完成输入
                                                </p>
                                                {else}
                                                <p>
                                                    选择最近@的人或直接输入
                                                </p>
                                                {/if}
                                                <div class="lst">
                                                    {list suggests as suggest}
                                                    <a href="javascript:;" data-index=${suggest_index} class="f-thide j-sgt">
                                                        ${suggest.nickname}
                                                    </a>
                                                    {/list}
                                                </div>
                                            </div>
                                        </textarea>
                                        <textarea name="jst" id="m-wgt-receiverInput" style="display:none;">
                                            <div class="ct f-pr">
                                                <div class="u-txtwrap f-pr">
                                                    <div class="u-txt txtwrap j-flag">
                                                        {if receiver}
                                                        <div class="blk s-fc3 j-receiver">
                                                            ${receiver.nickname}
                                                            <a href="#" class="cls" title="删除">
                                                                &times;
                                                            </a>
                                                        </div>
                                                        {/if}
                                                        <span class="holder-parent j-flag" style="float:left">
                                                            <input type="text" class="txt j-flag" />
                                                            <label class="holder j-flag">
                                                                选择或输入好友昵称
                                                            </label>
                                                        </span>
                                                    </div>
                                                </div>
                                                <ul class="full j-flag" style="_height:182px;display:none">
                                                    {list users as user}
                                                    <li class="j-item" data-userId=${user.userId} data-username=${user.nickname}
                                                    data-index=${user_index}>
                                                        <a href="#">
                                                            <img src=${user.avatarUrl}>
                                                            ${user.nickname}
                                                        </a>
                                                    </li>
                                                    {/list}
                                                </ul>
                                                <div class="j-flag" style="position:absolute;left: -1000px;width:auto;">
                                                </div>
                                            </div>
                                        </textarea>
                                        <textarea name="jst" id="m-wgt-receiverList" style="display:none;">
                                            {list users as user}
                                            <li class="j-item" data-userId=${user.userId} data-username=${user.nickname}
                                            data-index=${user_index}>
                                                <a href="#">
                                                    <img src=${user.avatarUrl}>
                                                    ${user.nickname}
                                                </a>
                                            </li>
                                            {/list}
                                        </textarea>
                                        <textarea name="ntp" id="m-wgt-sharewin" style="display:none;">
                                            <div class="lyct lyct-1 f-cb">
                                                <div class="m-lyshare">
                                                    <ul class="m-tabs1 j-flag">
                                                        <li>
                                                            <a href="#">
                                                                <em>
                                                                    分享给大家
                                                                </em>
                                                            </a>
                                                        </li>
                                                        <li>
                                                            <a href="#">
                                                                <em>
                                                                    私信分享
                                                                </em>
                                                            </a>
                                                        </li>
                                                    </ul>
                                                    <div class="u-err j-flag" style="display:none">
                                                        最多选择10位好友
                                                    </div>
                                                    <div class="j-flag">
                                                    </div>
                                                    <div class="j-slogan">
                                                    </div>
                                                    <div class="u-txtwrap f-pr">
                                                        <textarea class="u-txt area j-flag" placeholder="说点什么吧" data-action="txt">
                                                            <&#47;textarea>
                                                                <div class="info f-pr j-flag" data-action="search">
                                                                </div>
                                                    </div>
                                                    <div class="oper f-cb">
                                                        <div class="face f-fl f-pr">
                                                            <i class="u-icn u-icn-36 f-fl j-flag" data-action="emot">
                                                            </i>
                                                            <i class="u-icn u-icn-41 f-fl j-flag" data-action="at">
                                                            </i>
                                                            <i class="u-icn u-icn-97 j-flag f-pr" data-action="upload" data-default>
                                                            </i>
                                                        </div>
                                                        <span class="f-fr s-fc4 j-flag">
                                                            140/140
                                                        </span>
                                                    </div>
                                                    <div class="f-cb j-flag">
                                                    </div>
                                                    <div class="f-cb">
                                                        <div class="btnwrap f-fl">
                                                            <a class="u-btn2 u-btn2-2 u-btn2-w2 j-flag" hidefocus="true" href="javascript:;"
                                                            data-action="share">
                                                                <i>
                                                                    分享
                                                                </i>
                                                            </a>
                                                            <a class="u-btn2 u-btn2-1 u-btn2-w2 j-flag" hidefocus="true" href="javascript:;"
                                                            data-action="close">
                                                                <i>
                                                                    取消
                                                                </i>
                                                            </a>
                                                        </div>
                                                        <div class="f-cb j-flag f-fr">
                                                            <div class="share f-fr">
                                                                <span class="f-fl s-fc3">
                                                                    同时分享到：
                                                                </span>
                                                                <ul class="u-logo u-logo-s f-cb">
                                                                    <li>
                                                                        <a class="u-slg u-slg-sn j-t" data-action="sns" data-type="2" hidefocus="true"
                                                                        href="//music.163.com/api/sns/authorize?snsType=2&clientType=web2&callbackType=Binding&forcelogin=true"
                                                                        title="新浪微博">
                                                                        </a>
                                                                    </li>
                                                                    <li>
                                                                        <a class="u-slg u-slg-db j-t" data-action="sns" data-type="3" hidefocus="true"
                                                                        href="//music.163.com/api/sns/authorize?snsType=3&clientType=web2&callbackType=Binding&forcelogin=true"
                                                                        title="豆瓣网">
                                                                        </a>
                                                                    </li>
                                                                </ul>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div class="u-err j-flag">
                                                        <i class="u-icn u-icn-25">
                                                        </i>
                                                        <span>
                                                        </span>
                                                    </div>
                                                </div>
                                            </div>
                                            </textarea>
                                            <textarea name="jst" id="m-search-suggest" style="display:none;">
                                                {macro listArtists(artists)} {list artists as art} ${art.name|mark}&nbsp;
                                                {/list} {/macro}
                                                <div class="m-schlist">
                                                    <p class="note s-fc3">
                                                        <a class="s-fc3 xtag" href="/search/#/?s=${keyword}&type=1002">
                                                            搜“${keyword|cutStr}” 相关用户
                                                        </a>
                                                        &gt;
                                                    </p>
                                                    <div class="rap">
                                                        {list result.order as index} {var lst=result[index]} {if !!lst&&!!lst.length}
                                                        <div class="itm f-cb">
                                                            {if index=="songs"}
                                                            <h3 class="hd">
                                                                <i class="icn u-icn u-icn-26">
                                                                </i>
                                                                <em class="f-fl">
                                                                    单曲
                                                                </em>
                                                            </h3>
                                                            <ul class="{if index_index%2!=0}odd{/if} f-cb">
                                                                {list lst as song}
                                                                <li>
                                                                    <a class="s-fc0 f-thide xtag" href="/song?id=${song.id}">
                                                                        ${song.name|mark}-${listArtists(song.artists)}
                                                                    </a>
                                                                </li>
                                                                {/list}
                                                            </ul>
                                                            {elseif index=="artists"}
                                                            <h3 class="hd">
                                                                <i class="icn u-icn u-icn-27">
                                                                </i>
                                                                <em class="f-fl">
                                                                    歌手
                                                                </em>
                                                            </h3>
                                                            <ul class="{if index_index%2!=0}odd{/if} f-cb">
                                                                {list lst as artist}
                                                                <li>
                                                                    <a class="s-fc0 f-thide xtag" href="/artist?id=${artist.id}">
                                                                        ${artist.name|mark}
                                                                    </a>
                                                                </li>
                                                                {/list}
                                                            </ul>
                                                            {elseif index=="albums"}
                                                            <h3 class="hd">
                                                                <i class="icn u-icn u-icn-28">
                                                                </i>
                                                                <em class="f-fl">
                                                                    专辑
                                                                </em>
                                                            </h3>
                                                            <ul class="{if index_index%2!=0}odd{/if} f-cb">
                                                                {list lst as album}
                                                                <li>
                                                                    <a class="s-fc0 f-thide xtag" href="/album?id=${album.id}">
                                                                        ${album.name|mark}{if album.artist}-${album.artist.name|mark}{/if}
                                                                    </a>
                                                                </li>
                                                                {/list}
                                                            </ul>
                                                            {elseif index=="playlists"}
                                                            <h3 class="hd">
                                                                <i class="icn u-icn u-icn-29">
                                                                </i>
                                                                <em class="f-fl">
                                                                    歌单
                                                                </em>
                                                            </h3>
                                                            <ul class="{if index_index%2!=0}odd{/if} f-cb">
                                                                {list lst as playlist}
                                                                <li>
                                                                    <a class="s-fc0 f-thide xtag" href="/playlist?id=${playlist.id}">
                                                                        ${playlist.name|mark}
                                                                    </a>
                                                                </li>
                                                                {/list}
                                                            </ul>
                                                            {elseif index=="mvs"}
                                                            <h3 class="hd">
                                                                <i class="icn u-icn u-icn-96">
                                                                </i>
                                                                <em class="f-fl">
                                                                    视频
                                                                </em>
                                                            </h3>
                                                            <ul class="{if index_index%2!=0}odd{/if} f-cb">
                                                                {list lst as mv}
                                                                <li>
                                                                    <a class="s-fc0 f-thide xtag" href="/mv?id=${mv.id}">
                                                                        MV:${mv.name|mark}{if mv.artistName}-${mv.artistName|mark}{/if}
                                                                    </a>
                                                                </li>
                                                                {/list}
                                                            </ul>
                                                            {/if}
                                                        </div>
                                                        {/if} {/list}
                                                    </div>
                                                </div>
                                            </textarea>
                                            <textarea name="jst" id="m-xwgt-share-infobar" style="display:none;">
                                                <i class="highlight">
                                                </i>
                                                <div class="text f-fl f-fs1">
                                                    <p class="f-thide">
                                                        ${info|escape}
                                                    </p>
                                                </div>
                                                {if canChange}
                                                <i class="f-fr icn u-icn2 u-icn2-arr">
                                                </i>
                                                {/if}
                                            </textarea>
                                            <textarea name="jst" id="m-xwgt-share-videobar" style="display:none;">
                                                <div class="text">
                                                    <div class="cvr f-fl f-pr" style="background-image:url(${picUrl}?imageView&thumbnail=107x60),url(${picUrl}?imageView&thumbnail=107y60&blur=30x15)">
                                                    </div>
                                                    <h3 class="f-thide f-fs1">
                                                        ${title}
                                                    </h3>
                                                    <i class="f-fr icn u-icn2 u-icn2-arr">
                                                    </i>
                                                </div>
                                            </textarea>
                                            <textarea name="ntp" id="m-xwgt-share-upload" style="display:none;">
                                                <div class="f-pr choose f-cb">
                                                    <ul class="pics f-pr f-cb j-flag">
                                                        <li class="f-pr add j-flag u-icn2 u-icn2-addimg" title="添加新图片">
                                                        </li>
                                                    </ul>
                                                    <div class="f-pa tip s-fc6 j-flag">
                                                    </div>
                                                </div>
                                            </textarea>
                                            <textarea name="jst" id="m-xwgt-share-upload-preview" style="display:none;">
                                                <li class="pic f-pr{if fail} z-fail{/if}">
                                                    {if !fail}
                                                    <i class="f-img icn">
                                                    </i>
                                                    {else}
                                                    <div class="mask f-blk f-pa">
                                                    </div>
                                                    <div class="f-blk f-pa error">
                                                        ${fail}
                                                    </div>
                                                    {/if}
                                                    <span class="del f-pa u-icn2 u-icn2-delimg" title="删除">
                                                    </span>
                                                </li>
                                            </textarea>
                                            <textarea name="jst" id="m-xwgt-share-upload-preview-img" style="display:none;">
                                                {if !fail}
                                                <img class="f-img" src="${url}?imageView&thumbnail=80y80" draggable=false>
                                                {else}
                                                <div class="mask f-blk f-pa">
                                                </div>
                                                <div class="f-blk f-pa error">
                                                    ${fail}
                                                </div>
                                                {/if}
                                            </textarea>
                                            <textarea name="ntp" id="ntp-alert" style="display:none;">
                                                <div class="lyct f-cb f-tc">
                                                    <p class="f-fs1">
                                                        <i class="u-icn u-icn-89 j-flag">
                                                        </i>
                                                        <span class="f-fw1">
                                                            &nbsp;&nbsp;&nbsp;
                                                            <span class="j-flag">
                                                            </span>
                                                        </span>
                                                    </p>
                                                    <p class="mesg j-flag">
                                                        &nbsp;
                                                    </p>
                                                    <div class="lybtn">
                                                        <a href="javascript:;" class="u-btn2 u-btn2-2 u-btn2-w2 j-flag" hidefocus="true">
                                                            <i>
                                                                知道了
                                                            </i>
                                                        </a>
                                                    </div>
                                                </div>
                                            </textarea>
                                            <textarea name="ntp" id="m-layer-commwin" style="display:none;">
                                                <div class="lyct f-tc">
                                                    <p class="j-t">
                                                        <i class="u-icn u-icn-90">
                                                        </i>
                                                    </p>
                                                    <p class="j-t msg1">
                                                    </p>
                                                </div>
                                                <div class="j-t lsbtn f-tc">
                                                    <a href="javascript:;" class="u-btn2 u-btn2-2 u-btn2-w2" hidefocus="true">
                                                        <i>
                                                            上传节目
                                                        </i>
                                                    </a>
                                                </div>
                                            </textarea>
                                            <textarea name="ntp" id="m-layer-delwin" style="display:none;">
                                                <div class="lyct lyct-1 f-cb">
                                                    <div class="n-log2 n-log2-4">
                                                        <p class="js-tip u-tip-2">
                                                        </p>
                                                        <div class="lybtn f-tc">
                                                            <a href="javascript:;" class="u-btn2 u-btn2-2" hidefocus="true" data-action="ok">
                                                                <i>
                                                                    删除
                                                                </i>
                                                            </a>
                                                            <a href="javascript:;" class="u-btn2 u-btn2-1" hidefocus="true" data-action="cancel">
                                                                <i>
                                                                    取消
                                                                </i>
                                                            </a>
                                                        </div>
                                                    </div>
                                                </div>
                                            </textarea>
                                            <textarea name="jst" id="m-layer-commwin-btn" style="display:none;">
                                                {list buttons as item}
                                                <a hidefocus="true" class="u-btn2 ${item.klass} {if item.style}${item.style}{else}u-btn2-w2{/if}"
                                                href="#" {if !!item.action}data-action="${item.action}" {/if}>
                                                    <i>
                                                        ${item.text}
                                                    </i>
                                                </a>
                                                {/list}
                                            </textarea>
                                            <textarea name="ntp" id="m-layer-outershare" style="display:none;">
                                                <div class="lyct lyct-1">
                                                    <ul class="n-outshr f-cb">
                                                        <li>
                                                            <a href="#" data-action="wxfrd" class="logo wxfrd">
                                                            </a>
                                                            <a href="#" data-action="wxfrd" class="wd">
                                                                微信
                                                            </a>
                                                        </li>
                                                        <!-- <li>
                                                        <a href="#" data-action="wxevt" class="logo wxevt"></a>
                                                        <a href="#" data-action="wxevt" class="wd">微信朋友圈</a>
                                                        </li>
                                                        -->
                                                        <li>
                                                            <a href="#" data-action="yxfrd" class="logo yxfrd">
                                                            </a>
                                                            <a href="#" data-action="yxfrd" class="wd">
                                                                易信
                                                            </a>
                                                        </li>
                                                        <!-- <li>
                                                        <a href="#" data-action="yxevt" class="logo yxevt"></a>
                                                        <a href="#" data-action="yxevt" class="wd">易信朋友圈</a>
                                                        </li>
                                                        -->
                                                        <li>
                                                            <a href="#" data-action="qzone" class="logo qzone">
                                                            </a>
                                                            <a href="#" data-action="qzone" class="wd">
                                                                QQ空间
                                                            </a>
                                                        </li>
                                                        <li>
                                                            <a href="#" data-action="lofte" class="logo lofte">
                                                            </a>
                                                            <a href="#" data-action="lofte" class="wd">
                                                                LOFTER
                                                            </a>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </textarea>
                                            <textarea name="ntp" id="m-layer-tip" style="display:none;">
                                                <div class="lyct f-cb f-tc">
                                                    <div class="f-fs1 j-flag">
                                                        message
                                                    </div>
                                                    <div class="lybtn">
                                                        <a hidefocus="true" class="u-btn2 u-btn2-2 u-btn2-w2 j-flag" href="javascript:;">
                                                            <i>
                                                                知道了
                                                            </i>
                                                        </a>
                                                    </div>
                                                </div>
                                            </textarea>
                                            <textarea name="ntp" id="m-outshare-layer" style="display:none;">
                                                <div class="lyct lyct-1 f-cb">
                                                    <ul class="m-shareto f-cb j-flag">
                                                        <li class="fst" data-action="sn" data-type="2">
                                                            <a href="#" class="logo logo-sn">
                                                            </a>
                                                            <a href="#" class="wd s-fc3">
                                                                新浪微博
                                                            </a>
                                                        </li>
                                                        <li data-action="tx" data-type="6" style="display:none;">
                                                            <a href="#" class="logo logo-tc">
                                                            </a>
                                                            <a href="#" class="wd s-fc3">
                                                                腾讯微博
                                                            </a>
                                                        </li>
                                                        <li data-action="db" data-type="3">
                                                            <a href="#" class="logo logo-db">
                                                            </a>
                                                            <a href="#" class="wd s-fc3">
                                                                豆瓣
                                                            </a>
                                                        </li>
                                                    </ul>
                                                </div>
        </div>
        </textarea>
        <textarea name="ntp" id="m-sharesingle-layer" style="display:none;">
            <div class="lyct lyct-1 f-cb">
                <div class="m-lyshare">
                    <div class="u-txtwrap f-pr">
                        <textarea data-action="txt" class="u-txt area j-flag">
                            <&#47;textarea>
                    </div>
                    <div class="oper f-cb">
                        <div class="face f-fl f-pr j-flag">
                            <i data-action="emt" class="u-icn u-icn-36 f-fl">
                            </i>
                        </div>
                        <span class="zs f-fr s-fc3 j-flag">
                            140
                        </span>
                    </div>
                    <div class="btnwrap">
                        <a data-action="ok" class="u-btn2 u-btn2-2 u-btn2-w2 j-flag" hidefocus="true"
                        href="#">
                            <i>
                                分享
                            </i>
                        </a>
                        <a data-action="cc" class="u-btn2 u-btn2-1 u-btn2-w2" hidefocus="true"
                        href="#">
                            <i>
                                取消
                            </i>
                        </a>
                    </div>
                    <div class="u-err f-hide j-flag">
                        <i class="u-icn u-icn-25">
                        </i>
                    </div>
                </div>
            </div>
            </textarea>
            <textarea name="jst" id="m-popup-info" style="display:none;">
                <div class="lyct f-tc">
                    <div class="f-cb m-tipinfo">
                        <i class="u-icn2 u-icn2-11 f-fl">
                        </i>
                        <div class="f-fr f-pr f-fs1 tip">
                            ${tip}
                        </div>
                    </div>
                </div>
                <div class="lsbtn f-tc">
                    <a data-action="ok" href="javascript:void(0)" class="u-btn2 u-btn2-2 u-btn2-2-h {if oktext.length<=2}u-btn2-w2{/if}"
                    hidefocus="true">
                        <i>
                            ${oktext}
                        </i>
                    </a>
                    <a data-action="cc" href="javascript:void(0)" hidefocus="true" class="u-btn2 u-btn2-1 u-btn2-1-h {if cctext.length<=2}u-btn2-w2{/if}">
                        <i>
                            ${cctext}
                        </i>
                    </a>
                </div>
            </textarea>
            <textarea name="jst" id="m-popup-song-buy" style="display:none;">
                <div class="lyct m-songpay f-tc">
                    <div class="f-cb m-tipinfo">
                        <i class="u-icn2 u-icn2-11 f-fl">
                        </i>
                        <div class="f-fr f-pr f-fs1 tip">
                            ${tip}
                        </div>
                    </div>
                    <div class="f-pr f-tc">
                        <a data-action="ok" href="javascript:void(0)" class="u-btn2 u-btn2-2 {if oktext.length<=2}u-btn2-w2{/if}"
                        hidefocus="true">
                            <i>
                                ${oktext}
                            </i>
                        </a>
                        {if showSongText}
                        <a data-action="song" class="song s-fc4" href="javascript:void(0)">
                            ${songTxt}
                        </a>
                        {/if}
                    </div>
                </div>
            </textarea>
            <textarea name="jst" id="m-popup-alert" style="display:none;">
                <div class="lyct f-tc">
                    <p>
                        <i class="${icon}">
                        </i>
                    </p>
                    <p class="msg1">
                        <span class="f-fs1 s-fc1">
                            ${tip}
                        </span>
                    </p>
                </div>
                <div class="lsbtn f-tc">
                    {if typeof(oktext) != 'undefined'}
                    <a data-action="ok" href="javascript:void(0)" class="u-btn2 u-btn2-2 u-btn2-2-h {if oktext.length<=2}u-btn2-w2{/if}"
                    hidefocus="true">
                        <i>
                            ${oktext}
                        </i>
                    </a>
                    {/if} {if typeof(cctext) != 'undefined'}
                    <a data-action="cc" href="javascript:void(0)" class="u-btn2 u-btn2-1 u-btn2-1-h {if cctext.length<=2}u-btn2-w2{/if}"
                    hidefocus="true">
                        <i>
                            ${cctext}
                        </i>
                    </a>
                    {/if}
                </div>
            </textarea>
            <textarea name="txt" id="m-donate-tip" style="display:none;">
                <p>
                    该资源为公益歌曲
                    <p>
                        <p>
                            捐赠任意金额（2~4999元）即可无限畅听下载
                        </p>
            </textarea>
            <textarea name="ntp" id="m-simple-share-layer" style="display:none;">
                <div class="lyct lyct-1">
                    <ul class="n-outshr f-cb">
                        <li data-type="xlwb">
                            <a href="javascript:;" class="logo xlwb">
                            </a>
                            <a href="javascript:;" class="wd">
                                新浪微博
                            </a>
                        </li>
                        <li data-type="wx">
                            <a href="javascript:;" class="logo wxfrd">
                            </a>
                            <a href="javascript:;" class="wd">
                                微信
                            </a>
                        </li>
                        <li data-type="yx">
                            <a href="javascript:;" class="logo yxfrd">
                            </a>
                            <a href="javascript:;" class="wd">
                                易信好友
                            </a>
                        </li>
                        <li data-type="qzone">
                            <a href="javascript:;" class="logo qzone">
                            </a>
                            <a href="javascript:;" class="wd">
                                QQ空间
                            </a>
                        </li>
                        <li data-type="lofter" style="display:none;">
                            <a href="javascript:;" class="logo lofte">
                            </a>
                            <a href="javascript:;" class="wd">
                                LOFTER
                            </a>
                        </li>
                        <li data-type="db" style="display:none;">
                            <a href="javascript:;" class="logo db">
                            </a>
                            <a href="javascript:;" class="wd">
                                豆瓣
                            </a>
                        </li>
                    </ul>
                </div>
            </textarea>
            <textarea name="txt" id="m-report-point" style="display:none;">
                <div class="zcnt">
                    <div class="lyct f-cb f-tc">
                        <p class="f-fs2">
                            悬赏1积分让大家来帮你补歌词，是否继续？
                        </p>
                        <p style="padding-top: 10px;">
                            若30天内歌词未补充，积分将退还给您
                        </p>
                        <div class="lybtn">
                            <a href="javascript:;" data-action="ok" class="u-btn2 u-btn2-2 u-btn2-w2"
                            hidefocus="true">
                                <i>
                                    继续求
                                </i>
                            </a>
                            <a href="javascript:;" data-action="cc" class="u-btn2 u-btn2-1 u-btn2-w2"
                            hidefocus="true">
                                <i>
                                    取消
                                </i>
                            </a>
                        </div>
                    </div>
                </div>
            </textarea>
            <textarea name="txt" id="txt-mobilestatus" style="display:none;">
                <div class="box f-cb">
                    <div data-action="invalid" class="item z-first f-fl">
                        <div class="icon">
                        </div>
                        <p>
                            原手机号已停用
                        </p>
                        <p class="s-fc3">
                            (使用其他方式验证)
                        </p>
                    </div>
                    <div data-action="valid" class="item f-fr">
                        <div class="icon">
                        </div>
                        <p>
                            原手机号仍能使用
                        </p>
                        <p class="s-fc3">
                            (使用手机验证码验证)
                        </p>
                    </div>
                </div>
            </textarea>
            <textarea name="ntp" id="m-question" style="display:none;">
                <div class="m-question">
                    <div>
                        请填写以下安全问题的答案
                    </div>
                    <div class="qa j-flag f-cb">
                        <label class="f-fl">
                            问题：
                        </label>
                    </div>
                    <div class="qa f-cb">
                        <label class="f-fl">
                            回答：
                        </label>
                        <input type="text" class="u-txt txt f-fl j-flag">
                    </div>
                    <div class="u-err f-hide j-flag">
                        <i class="u-icn u-icn-25">
                        </i>
                        帐号或密码错误
                    </div>
                    <div class="btnwrap">
                        <a data-action="back" class="u-btn2 u-btn2-1 u-btn2-w2" hidefocus="true"
                        href="javascript:void(0)">
                            <i>
                                上一步
                            </i>
                        </a>
                        <a data-action="next" class="u-btn2 u-btn2-2 u-btn2-w2" hidefocus="true"
                        href="javascript:void(0)">
                            <i>
                                下一步
                            </i>
                        </a>
                    </div>
                </div>
            </textarea>
            <textarea name="ntp" id="g-select" style="display:none;">
                <div class="u-slt f-ib">
                    <span class="curr f-thide">
                        －请选择－
                    </span>
                    <i class="btn">
                    </i>
                    <ul class="f-hide">
                    </ul>
                </div>
            </textarea>
            <textarea name="ntp" id="ntp-linuxlinks" style="display:none;">
                <div class="lyct lyct-1">
                    <div class="dc f-cb">
                        <ul class="links">
                            <li class="link f-cb">
                                <a href="" class="right" target="_blank" hidefocus="true" title="Linux版下载">
                                    deepin15（64位）
                                </a>
                                <a href="" class="right" target="_blank" hidefocus="true" title="Linux版下载">
                                    ubuntu16.04（64位）
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </textarea>
            <textarea name="ntp" id="ntp-pcRedirect" style="display:none;">
                <div class="lyct lyct-1">
                    <div class="pcdld f-cb">
                        <img src="../../../style/web2/img/down/uwpWindown.png" alt="网易云音乐-UWP版">
                        <p class="txt">
                            您的系统为Windows 10，推荐下载UWP版
                        </p>
                        <div class="choose">
                            <a class="u-btn2 u-btn2-2" data-res-action="bilog" data-log-action="downloadapp"
                            data-log-json='{"type":"pc","source":"downloadapp"}' href="https://www.microsoft.com/store/apps/9nblggh6g0jf"
                            onclick="g_stat('uwp',true,event);_gaq.push(['_trackEvent','download','uwp','download']);"
                            hidefocus="true" title="UWP版下载" target="_blank">
                                <i>
                                    下载UWP版本
                                </i>
                            </a>
                            <a class="link" data-res-action="bilog" data-log-action="downloadapp"
                            data-log-json='{"type":"pc","source":"downloadapp"}' href="https://music.163.com/api/pc/download/latest"
                            onclick="g_stat('pc',true,event);_gaq.push(['_trackEvent','download','pc','download']);"
                            hidefocus="true" title="PC版下载" target="_blank">
                                <i>
                                    继续下载PC版本
                                </i>
                            </a>
                        </div>
                    </div>
                </div>
            </textarea>
            <textarea name="jst" id="g-select-item" style="display:none;">
                {list options as o}
                <li class="f-thide" data-index="${o_index}">
                    <a href="javascript:;">
                        ${o|filter}
                    </a>
                </li>
                {/list}
            </textarea>
            <textarea name="ntp" id="m-download-layer" style="display:none;">
                <h3 class="f-tc">
                    使用云音乐客户端
                </h3>
                <h4 class="f-tc s-fc3">
                    即可无限下载高品质音乐
                </h4>
                <div class="f-cb wrap">
                    <div class="left">
                        <div data-action="download" data-src="https://music.163.com/api/osx/download/latest"
                        class="btn btn-mac">
                            <i>
                            </i>
                            Mac版
                            <span class="ver j-flag">
                                V1.9.1
                            </span>
                        </div>
                        <div data-action="download" data-src="https://music.163.com/api/pc/download/latest"
                        class="btn f-hide">
                            <i>
                            </i>
                            PC版
                            <span class="ver j-flag">
                                V1.9.1
                            </span>
                        </div>
                        <div data-action="orpheus" class="btn btn-installed j-flag">
                            已安装PC版
                        </div>
                    </div>
                    <div class="right">
                        <div class="qtcode">
                        </div>
                        <div class="s-fc3 f-tc">
                            扫描下载手机版
                        </div>
                    </div>
                </div>
            </textarea>
            <textarea name="ntp" id="m-programtips-layer" style="display:none;">
                <div class="f-tc wrap ">
                    <p class="f-fs1 s-fc1 wrap-p">
                        该资源为付费内容，扫描下方二维码，使用最新的安卓或iPhone版本购买后即可畅享
                    </p>
                    <div class="f-tc wrap-d">
                        <span class="qtcode j-flag">
                        </span>
                    </div>
                </div>
            </textarea>
            <textarea name="jst" id="com-artists-title" style="display:none;">
                {var title=""} {if artists && artists.length} {list artists as x} {if
                x} {var title = title + x.name} {if x_index
                < x_length - 1} {var title=t itle + " / "} {/if} {/if} {/list} {/if} ${escape(title)}
                </textarea>
                    <textarea name="jst" id="com-mv-artists" style="display:none;">
                        {if artists && artists.length}
                        <span class="${boxClazz}" title="${comJST('com-artists-title', artists)}">
                            {list artists as x} {if !!x} {if !!x.id}
                            <a href="/artist?id=${x.id}" class="${clazz}">
                                ${mark(escape(x.name))}
                            </a>
                            {else}
                            <span class="${clazz}">
                                ${mark(escape(x.name))}
                            </span>
                            {/if} {if x_index
                            < x_length - 1}&nbsp;/&nbsp;{/if} {/if} {/list} </span>
                                {/if}
                    </textarea>
                    <textarea name="jst" id="com-album-artists" style="display:none;">
                        ${comJST('com-mv-artists', artists, clazz, mark, boxClazz)}
                    </textarea>
                    <textarea name="jst" id="com-user-type" style="display:none;">
                        {if x.userType==4}${before}
                        <sup class="${clazz2} u-icn2 u-icn2-music2 ${clazz}">
                        </sup>
                        ${after}{elseif x.authStatus==1}${before}
                        <sup class="u-icn u-icn-1 ${clazz}">
                        </sup>
                        ${after}{elseif (x.expertTags && x.expertTags.length>0) || !isEmptyObject(x.experts)}${before}
                        <sup class="u-icn u-icn-84 ${clazz}">
                        </sup>
                        ${after}{/if}
                    </textarea>
                    <textarea name="ntp" id="ntp-portrait" style="display:none;">
                        <div class="m-emts z-show">
                            <div class="j-flag emtwrap f-cb">
                            </div>
                            <div class="page">
                                <a href="#" hidefocus="true" class="j-flag u-btn u-btn-prv">
                                </a>
                                <em class="j-flag s-fc3">
                                    1/2
                                </em>
                                <a href="#" hidefocus="true" class="j-flag u-btn u-btn-nxt">
                                </a>
                            </div>
                        </div>
                    </textarea>
                    <textarea name="jst" id="jst-portrait" style="display:none;">
                        {list plist as item}
                        <span title="${item.key}" class="emtitm">
                            <img data-text="${item.key}" data-url="${item.key|purl}" class="f-alpha"
                            src="${item.key|purl}">
                        </span>
                        {/list}
                    </textarea>
                    <textarea name="ntp" id="m-wgt-song-box" style="display:none;">
                        <div class="j-flag">
                        </div>
                        <div class="j-flag">
                        </div>
                    </textarea>
                    <textarea name="jst" id="m-wgt-song-list" style="display:none;">
                        <table class="m-table {if type=='rank'}m-table-rank{/if}">
                            <thead>
                                <tr>
                                    <th class="first {if type=='rank'}wrk{else}w1{/if}">
                                        <div class="wp">
                                            &nbsp;
                                        </div>
                                    </th>
                                    <th>
                                        <div class="wp af0">
                                        </div>
                                    </th>
                                    <th class="w2">
                                        <div class="wp af1">
                                        </div>
                                    </th>
                                    <th class="w3">
                                        <div class="wp af2">
                                        </div>
                                    </th>
                                    <th class="w4">
                                        <div class="wp af3">
                                        </div>
                                    </th>
                                </tr>
                            </thead>
                            <tbody>
                                {list beg..end as y} {var x=xlist[y]}
                                <tr id="${x.id|seed}" class="{if y%2==0}even{/if} {if disable(x)}js-dis{/if}">
                                    <td class="left">
                                        <div class="hd {if type=='rank'}rank{/if}">
                                            <span data-res-id="${x.id}" data-res-type="18" data-res-action="play"
                                            {if from}data-res-from="${from.fid}" data-res-data="${from.fdata}" {/if}
                                            class="ply {if isPlaying(x)}ply-z-slt{/if}">
                                                &nbsp;
                                            </span>
                                            <span class="num">
                                                ${y+1}
                                            </span>
                                            {if type=='rank'}
                                            <div class="rk rk-1">
                                                {if x.lastRank>=0} {if y-x.lastRank>0}
                                                <span class="ico u-icn u-icn-74 s-fc10">
                                                    ${y-x.lastRank}
                                                </span>
                                                {elseif y-x.lastRank==0}
                                                <span class="ico u-icn u-icn-72 s-fc4">
                                                    0
                                                </span>
                                                {else}
                                                <span class="ico u-icn u-icn-73 s-fc9">
                                                    ${x.lastRank-y}
                                                </span>
                                                {/if} {else}
                                                <span class="u-icn u-icn-75">
                                                </span>
                                                {/if}
                                            </div>
                                            {/if}
                                        </div>
                                    </td>
                                    <td class="">
                                        <div class="f-cb">
                                            <div class="tt">
                                                <div class="ttc">
                                                    <span class="txt">
                                                        {var alia=songAlia(x)}
                                                        <a href="/song?id=${x.id}">
                                                            <b title="${x.name|escape}{if alia} - (${alia|escape}){/if}">
                                                                ${soil(x.name)}
                                                            </b>
                                                        </a>
                                                        {if alia}
                                                        <span title="${alia|escape}" class="s-fc8">
                                                            - (${soil(alia)})
                                                        </span>
                                                        {/if} {if x.mvid>0}
                                                        <span data-res-id="${x.id}" data-res-action="mv" title="播放mv" class="mv">
                                                            MV
                                                        </span>
                                                        {/if}
                                                    </span>
                                                </div>
                                            </div>
                                        </div>
                                    </td>
                                    <td class=" s-fc3">
                                        <span class="u-dur {if canDel}candel{/if}">
                                            ${dur2time(x.duration/1000)}{if x.ftype==2}
                                            <i title="歌曲来自第三方网站" class="migu u-icn2 u-icn2-14">
                                            </i>
                                            {/if}
                                        </span>
                                        <div class="opt hshow">
                                            <a class="u-icn u-icn-81 icn-add" href="javascript:;" title="添加到播放列表"
                                            hidefocus="true" data-res-type="18" data-res-id="${x.id}" data-res-action="addto"
                                            {if from}data-res-from="${from.fid}" data-res-data="${from.fdata}" {/if}>
                                            </a>
                                            <span data-res-id="${x.id}" data-res-type="18" data-res-action="fav" class="icn icn-fav"
                                            title="收藏">
                                            </span>
                                            <span data-res-id="${x.id}" data-res-type="18" data-res-action="share"
                                            data-res-name="${x.name}" data-res-author="{list x.artists as art}${art.name}{if art_index<x.artists.length-1}/{/if}{/list}"
                                            {if x.album}data-res-pic="${x.album.picUrl}" {/if} class="icn icn-share"
                                            title="分享">
                                                分享
                                            </span>
                                            <span data-res-id="${x.id}" data-res-type="18" data-res-action="download"
                                            class="icn icn-dl" title="下载">
                                            </span>
                                            {if canDel}
                                            <span data-res-id="${x.id}" data-res-type="18" data-res-action="delete"
                                            class="icn icn-del" title="删除">
                                                删除
                                            </span>
                                            {/if}
                                        </div>
                                    </td>
                                    <td class="">
                                        <div class="text" title="{list x.artists as art}${art.name}{if art_index<x.artists.length-1}/{/if}{/list}">
                                            ${getArtistName(x.artists, '', '', false, false, true)}
                                        </div>
                                    </td>
                                    {if type=='dayRcmd'}
                                    <td class="hascls">
                                        <div class="f-pr">
                                            <div class="text">
                                                {if x.album}
                                                <a href="/album?id=${x.album.id}" title="${x.album.name}">
                                                    ${x.album.name}
                                                </a>
                                                {/if}
                                            </div>
                                            <a href="javascript:;" data-res-action="dislike" data-res-id="${x.id}"
                                            data-res-alg="${x.alg}" class="cls u-icn u-icn-80 f-tid icn-dislike" title="不感兴趣">
                                                不感兴趣
                                            </a>
                                        </div>
                                    </td>
                                    {else}
                                    <td class="">
                                        <div class="text">
                                            {if x.album}
                                            <a href="/album?id=${x.album.id}" title="${x.album.name|escape}">
                                                ${soil(x.album.name)}
                                            </a>
                                            {/if}
                                        </div>
                                    </td>
                                    {/if}
                                </tr>
                                {/list}
                            </tbody>
                        </table>
                    </textarea>
                    <textarea name="jst" id="m-wgt-album-list" style="display:none;">
                        <table class="m-table {if type=='rank'}m-table-rank{/if}">
                            <thead>
                                <tr>
                                    <th class="first {if type=='rank'}wrk{else}w1{/if}">
                                        <div class="wp">
                                            &nbsp;
                                        </div>
                                    </th>
                                    <th>
                                        <div class="wp">
                                            歌曲标题
                                        </div>
                                    </th>
                                    <th class="w2-1">
                                        <div class="wp">
                                            时长
                                        </div>
                                    </th>
                                    <th class="w4">
                                        <div class="wp">
                                            歌手
                                        </div>
                                    </th>
                                </tr>
                            </thead>
                            <tbody>
                                {list beg..end as y} {var x=xlist[y]}
                                <tr id="${x.id|seed}" class="{if y%2==0}even{/if} {if disable(x)}js-dis{/if}">
                                    <td class="left">
                                        <div class="hd {if type=='rank'}rank{/if}">
                                            <span data-res-id="${x.id}" data-res-type="18" data-res-action="play"
                                            {if from}data-res-from="${from.fid}" data-res-data="${from.fdata}" {/if}
                                            class="ply {if isPlaying(x)}ply-z-slt{/if}">
                                                &nbsp;
                                            </span>
                                            <span class="num">
                                                ${y+1}
                                            </span>
                                            {if type=='rank'}
                                            <div class="rk rk-1">
                                                {if x.lastRank>=0} {if y-x.lastRank>0}
                                                <span class="ico u-icn u-icn-74 s-fc10">
                                                    ${y-x.lastRank}
                                                </span>
                                                {elseif y-x.lastRank==0}
                                                <span class="ico u-icn u-icn-72 s-fc4">
                                                    0
                                                </span>
                                                {else}
                                                <span class="ico u-icn u-icn-73 s-fc9">
                                                    ${x.lastRank-y}
                                                </span>
                                                {/if} {else}
                                                <span class="u-icn u-icn-75">
                                                </span>
                                                {/if}
                                            </div>
                                            {/if}
                                        </div>
                                    </td>
                                    <td class="">
                                        <div class="f-cb">
                                            <div class="tt">
                                                <div class="ttc">
                                                    <span class="txt">
                                                        {var alia=songAlia(x)}
                                                        <a href="/song?id=${x.id}">
                                                            <b title="${x.name|escape}{if alia} - (${alia|escape}){/if}">
                                                                ${soil(x.name)}
                                                            </b>
                                                        </a>
                                                        {if alia}
                                                        <span title="${alia|escape}" class="s-fc8">
                                                            - (${soil(alia)})
                                                        </span>
                                                        {/if} {if x.mvid>0}
                                                        <span data-res-id="${x.id}" data-res-action="mv" title="播放mv" class="mv">
                                                            MV
                                                        </span>
                                                        {/if}
                                                    </span>
                                                </div>
                                            </div>
                                        </div>
                                    </td>
                                    <td class=" s-fc3">
                                        <span class="u-dur {if canDel}candel{/if}">
                                            ${dur2time(x.duration/1000)}{if x.ftype==2}
                                            <i title="歌曲来自第三方网站" class="migu u-icn2 u-icn2-14">
                                            </i>
                                            {/if}
                                        </span>
                                        <div class="opt hshow">
                                            <a class="u-icn u-icn-81 icn-add" href="javascript:;" title="添加到播放列表"
                                            hidefocus="true" data-res-type="18" data-res-id="${x.id}" data-res-action="addto"
                                            {if from}data-res-from="${from.fid}" data-res-data="${from.fdata}" {/if}>
                                            </a>
                                            <span data-res-id="${x.id}" data-res-type="18" data-res-action="fav" class="icn icn-fav"
                                            title="收藏">
                                            </span>
                                            <span data-res-id="${x.id}" data-res-type="18" data-res-action="share"
                                            data-res-name="${x.name}" data-res-author="{list x.artists as art}${art.name}{if art_index<x.artists.length-1}/{/if}{/list}"
                                            {if x.album}data-res-pic="${x.album.picUrl}" {/if} class="icn icn-share"
                                            title="分享">
                                                分享
                                            </span>
                                            <span data-res-id="${x.id}" data-res-type="18" data-res-action="download"
                                            class="icn icn-dl" title="下载">
                                            </span>
                                            {if canDel}
                                            <span data-res-id="${x.id}" data-res-type="18" data-res-action="delete"
                                            class="icn icn-del" title="删除">
                                                删除
                                            </span>
                                            {/if}
                                        </div>
                                    </td>
                                    <td class="">
                                        <div class="text" title="{list x.artists as art}${art.name}{if art_index<x.artists.length-1}/{/if}{/list}">
                                            ${getArtistName(x.artists, '', '/', false, true, true)}
                                        </div>
                                    </td>
                                </tr>
                                {/list}
                            </tbody>
                        </table>
                    </textarea>
                    <textarea name="jst" id="m-wgt-song-top50-list" style="display:none;">
                        <table class="m-table m-table-1 m-table-4">
                            <tbody>
                                {list beg..end as y} {var x=xlist[y]}
                                <tr id="${x.id|seed}" class="{if y%2==0}even{/if} {if disable(x)}js-dis{/if}">
                                    <td class="w1">
                                        <div class="hd">
                                            <span data-res-id="${x.id}" data-res-type="18" data-res-action="play"
                                            {if from}data-res-from="${from.fid}" data-res-data="${from.fdata}" {/if}
                                            class="ply {if isPlaying(x)}ply-z-slt{/if}">
                                                &nbsp;
                                            </span>
                                            <span class="num">
                                                ${y+1}
                                            </span>
                                        </div>
                                    </td>
                                    <td class="">
                                        <div class="f-cb">
                                            <div class="tt">
                                                <div class="ttc">
                                                    <span class="txt">
                                                        {var alia=songAlia(x)}
                                                        <a href="/song?id=${x.id}">
                                                            <b title="${x.name|escape}{if alia} - (${alia|escape}){/if}">
                                                                ${soil(x.name)}
                                                            </b>
                                                        </a>
                                                        {if alia}
                                                        <span title="${alia|escape}" class="s-fc8">
                                                            - (${soil(alia)})
                                                        </span>
                                                        {/if} {if x.mvid>0}
                                                        <span data-res-id="${x.id}" data-res-action="mv" title="播放mv" class="mv">
                                                            MV
                                                        </span>
                                                        {/if}
                                                    </span>
                                                </div>
                                            </div>
                                        </div>
                                    </td>
                                    <td class="w2-1 s-fc3">
                                        <span class="u-dur {if canDel}candel{/if}">
                                            ${dur2time(x.duration/1000)}{if x.ftype==2}
                                            <i title="歌曲来自第三方网站" class="migu u-icn2 u-icn2-14">
                                            </i>
                                            {/if}
                                        </span>
                                        <div class="opt hshow">
                                            <a class="u-icn u-icn-81 icn-add" href="javascript:;" title="添加到播放列表"
                                            hidefocus="true" data-res-type="18" data-res-id="${x.id}" data-res-action="addto"
                                            {if from}data-res-from="${from.fid}" data-res-data="${from.fdata}" {/if}>
                                            </a>
                                            <span data-res-id="${x.id}" data-res-type="18" data-res-action="fav" class="icn icn-fav"
                                            title="收藏">
                                            </span>
                                            <span data-res-id="${x.id}" data-res-type="18" data-res-action="share"
                                            data-res-name="${x.name}" data-res-author="{list x.artists as art}${art.name}{if art_index<x.artists.length-1}/{/if}{/list}"
                                            {if x.album}data-res-pic="${x.album.picUrl}" {/if} class="icn icn-share"
                                            title="分享">
                                                分享
                                            </span>
                                            <span data-res-id="${x.id}" data-res-type="18" data-res-action="download"
                                            class="icn icn-dl" title="下载">
                                            </span>
                                            {if canDel}
                                            <span data-res-id="${x.id}" data-res-type="18" data-res-action="delete"
                                            class="icn icn-del" title="删除">
                                                删除
                                            </span>
                                            {/if}
                                        </div>
                                    </td>
                                    <td class="w4">
                                        <div class="text">
                                            {if x.album} {var transName = x.album.tns && x.album.tns.length > 0 ?
                                            x.album.tns[0] : ''}
                                            <a href="/album?id=${x.album.id}" title="${x.album.name|escape}{if transName} - (${transName|escape}){/if}">
                                                ${soil(x.album.name)}
                                            </a>
                                            {if transName}
                                            <span title="${transName|escape}" class="s-fc8">
                                                - (${transName|escape})
                                            </span>
                                            {/if} {/if}
                                        </div>
                                    </td>
                                </tr>
                                {/list}
                            </tbody>
                        </table>
                    </textarea>
                    <textarea name="jst" id="m-wgt-song-rank-list" style="display:none;">
                        <table class="m-table m-table-rank">
                            <thead>
                                <tr>
                                    <th class="first w1">
                                    </th>
                                    <th>
                                        <div class="wp">
                                            标题
                                        </div>
                                    </th>
                                    <th class="w2-1">
                                        <div class="wp">
                                            时长
                                        </div>
                                    </th>
                                    <th class="w3">
                                        <div class="wp">
                                            歌手
                                        </div>
                                    </th>
                                </tr>
                            </thead>
                            <tbody>
                                {list beg..end as y} {var x=xlist[y]}
                                <tr id="${x.id|seed}" class="{if y%2==0}even{/if} {if disable(x)}js-dis{/if}">
                                    {if y
                                    <3} <td>
                                        <div class="hd">
                                            <span class="num">
                                                ${y+1}
                                            </span>
                                            <div class="rk ">
                                                {if x.lastRank>=0} {if y-x.lastRank>0}
                                                <span class="ico u-icn u-icn-74 s-fc10">
                                                    ${y-x.lastRank}
                                                </span>
                                                {elseif y-x.lastRank==0}
                                                <span class="ico u-icn u-icn-72 s-fc4">
                                                    0
                                                </span>
                                                {else}
                                                <span class="ico u-icn u-icn-73 s-fc9">
                                                    ${x.lastRank-y}
                                                </span>
                                                {/if} {else}
                                                <span class="u-icn u-icn-75">
                                                </span>
                                                {/if}
                                            </div>
                                        </div>
                                        </td>
                                        <td class="rank">
                                            <div class="f-cb">
                                                <div class="tt">
                                                    <a href="/song?id=${x.id}">
                                                        {if x.album}
                                                        <img class="rpic" src="${x.album.picUrl}?param=50y50&quality=100">
                                                        {/if}
                                                    </a>
                                                    <span data-res-id="${x.id}" data-res-type="18" data-res-action="play"
                                                    {if from}data-res-from="${from.fid}" data-res-data="${from.fdata}" {/if}
                                                    class="ply {if isPlaying(x)}ply-z-slt{/if}">
                                                        &nbsp;
                                                    </span>
                                                    <div class="ttc">
                                                        <span class="txt">
                                                            {var alia=songAlia(x)}
                                                            <a href="/song?id=${x.id}">
                                                                <b title="${x.name|escape}{if alia} - (${alia|escape}){/if}">
                                                                    ${soil(x.name)}
                                                                </b>
                                                            </a>
                                                            {if alia}
                                                            <span title="${alia|escape}" class="s-fc8">
                                                                - (${soil(alia)})
                                                            </span>
                                                            {/if} {if x.mvid>0}
                                                            <span data-res-id="${x.id}" data-res-action="mv" title="播放mv" class="mv">
                                                                MV
                                                            </span>
                                                            {/if}
                                                        </span>
                                                    </div>
                                                </div>
                                            </div>
                                        </td>
                                        {else}
                                        <td>
                                            <div class="hd">
                                                <span class="num">
                                                    ${y+1}
                                                </span>
                                                <div class="rk ">
                                                    {if x.lastRank>=0} {if y-x.lastRank>0}
                                                    <span class="ico u-icn u-icn-74 s-fc10">
                                                        ${y-x.lastRank}
                                                    </span>
                                                    {elseif y-x.lastRank==0}
                                                    <span class="ico u-icn u-icn-72 s-fc4">
                                                        0
                                                    </span>
                                                    {else}
                                                    <span class="ico u-icn u-icn-73 s-fc9">
                                                        ${x.lastRank-y}
                                                    </span>
                                                    {/if} {else}
                                                    <span class="u-icn u-icn-75">
                                                    </span>
                                                    {/if}
                                                </div>
                                            </div>
                                        </td>
                                        <td class="">
                                            <div class="f-cb">
                                                <div class="tt">
                                                    <span data-res-id="${x.id}" data-res-type="18" data-res-action="play"
                                                    {if from}data-res-from="${from.fid}" data-res-data="${from.fdata}" {/if}
                                                    class="ply {if isPlaying(x)}ply-z-slt{/if}">
                                                        &nbsp;
                                                    </span>
                                                    <div class="ttc">
                                                        <span class="txt">
                                                            {var alia=songAlia(x)}
                                                            <a href="/song?id=${x.id}">
                                                                <b title="${x.name|escape}{if alia} - (${alia|escape}){/if}">
                                                                    ${soil(x.name)}
                                                                </b>
                                                            </a>
                                                            {if alia}
                                                            <span title="${alia|escape}" class="s-fc8">
                                                                - (${soil(alia)})
                                                            </span>
                                                            {/if} {if x.mvid>0}
                                                            <span data-res-id="${x.id}" data-res-action="mv" title="播放mv" class="mv">
                                                                MV
                                                            </span>
                                                            {/if}
                                                        </span>
                                                    </div>
                                                </div>
                                            </div>
                                        </td>
                                        {/if}
                                        <td class=" s-fc3">
                                            <span class="u-dur {if canDel}candel{/if}">
                                                ${dur2time(x.duration/1000)}{if x.ftype==2}
                                                <i title="歌曲来自第三方网站" class="migu u-icn2 u-icn2-14">
                                                </i>
                                                {/if}
                                            </span>
                                            <div class="opt hshow">
                                                <a class="u-icn u-icn-81 icn-add" href="javascript:;" title="添加到播放列表"
                                                hidefocus="true" data-res-type="18" data-res-id="${x.id}" data-res-action="addto"
                                                {if from}data-res-from="${from.fid}" data-res-data="${from.fdata}" {/if}>
                                                </a>
                                                <span data-res-id="${x.id}" data-res-type="18" data-res-action="fav" class="icn icn-fav"
                                                title="收藏">
                                                </span>
                                                <span data-res-id="${x.id}" data-res-type="18" data-res-action="share"
                                                data-res-name="${x.name}" data-res-author="{list x.artists as art}${art.name}{if art_index<x.artists.length-1}/{/if}{/list}"
                                                {if x.album}data-res-pic="${x.album.picUrl}" {/if} class="icn icn-share"
                                                title="分享">
                                                    分享
                                                </span>
                                                <span data-res-id="${x.id}" data-res-type="18" data-res-action="download"
                                                class="icn icn-dl" title="下载">
                                                </span>
                                                {if canDel}
                                                <span data-res-id="${x.id}" data-res-type="18" data-res-action="delete"
                                                class="icn icn-del" title="删除">
                                                    删除
                                                </span>
                                                {/if}
                                            </div>
                                        </td>
                                        <td class="">
                                            <div class="text" title="{list x.artists as art}${art.name}{if art_index<x.artists.length-1}/{/if}{/list}">
                                                ${getArtistName(x.artists, '', '', false, false, true)}
                                            </div>
                                        </td>
                                </tr>
                                {/list}
                            </tbody>
                        </table>
                    </textarea>
                    <textarea name="jst" id="m-wgt-song-pgm-list" style="display:none;">
                        <table class="m-table m-table-prog">
                            <tbody id="song-list">
                                {list beg..end as y} {var x=xlist[y]}
                                <tr id="${x.id|seed}" class="{if y%2!=0}even{/if} {if disable(x)}js-dis{/if}">
                                    <td class="first col1">
                                        <div class="hd">
                                            <span data-res-id="${x.id}" data-res-type="18" data-res-action="play"
                                            {if from}data-res-from="${from.fid}" data-res-data="${from.fdata}" {/if}
                                            class="ply {if isPlaying(x)}ply-z-slt{/if}">
                                                &nbsp;
                                            </span>
                                            <span class="num">
                                                ${y+1}
                                            </span>
                                        </div>
                                    </td>
                                    <td class="col2">
                                        <div class="f-cb">
                                            <div class="tt">
                                                <div class="ttc">
                                                    <span class="txt">
                                                        {var alia=songAlia(x)}
                                                        <a href="/song?id=${x.id}">
                                                            <b title="${x.name|escape}{if alia} - (${alia|escape}){/if}">
                                                                ${soil(x.name)}
                                                            </b>
                                                        </a>
                                                        {if alia}
                                                        <span title="${alia|escape}" class="s-fc8">
                                                            - (${soil(alia)})
                                                        </span>
                                                        {/if} {if x.mvid>0}
                                                        <span data-res-id="${x.id}" data-res-action="mv" title="播放mv" class="mv">
                                                            MV
                                                        </span>
                                                        {/if}
                                                    </span>
                                                </div>
                                            </div>
                                        </div>
                                    </td>
                                    <td class="col3 s-fc3">
                                        <span class="u-dur {if canDel}candel{/if}">
                                            ${dur2time(x.duration/1000)}{if x.ftype==2}
                                            <i title="歌曲来自第三方网站" class="migu u-icn2 u-icn2-14">
                                            </i>
                                            {/if}
                                        </span>
                                        <div class="opt hshow">
                                            <a class="u-icn u-icn-81 icn-add" href="javascript:;" title="添加到播放列表"
                                            hidefocus="true" data-res-type="18" data-res-id="${x.id}" data-res-action="addto"
                                            {if from}data-res-from="${from.fid}" data-res-data="${from.fdata}" {/if}>
                                            </a>
                                            <span data-res-id="${x.id}" data-res-type="18" data-res-action="fav" class="icn icn-fav"
                                            title="收藏">
                                            </span>
                                            <span data-res-id="${x.id}" data-res-type="18" data-res-action="share"
                                            data-res-name="${x.name}" data-res-author="{list x.artists as art}${art.name}{if art_index<x.artists.length-1}/{/if}{/list}"
                                            {if x.album}data-res-pic="${x.album.picUrl}" {/if} class="icn icn-share"
                                            title="分享">
                                                分享
                                            </span>
                                            <span data-res-id="${x.id}" data-res-type="18" data-res-action="download"
                                            class="icn icn-dl" title="下载">
                                            </span>
                                            {if canDel}
                                            <span data-res-id="${x.id}" data-res-type="18" data-res-action="delete"
                                            class="icn icn-del" title="删除">
                                                删除
                                            </span>
                                            {/if}
                                        </div>
                                    </td>
                                    <td class="col4">
                                        <div class="text" title="{list x.artists as art}${art.name}{if art_index<x.artists.length-1}/{/if}{/list}">
                                            ${getArtistName(x.artists, '', '', false, false, true)}
                                        </div>
                                    </td>
                                    <td class="col5">
                                        <div class="text">
                                            {if x.album}
                                            <a href="/album?id=${x.album.id}" title="${x.album.name|escape}">
                                                ${soil(x.album.name)}
                                            </a>
                                            {/if}
                                        </div>
                                    </td>
                                </tr>
                                {/list}
                            </tbody>
                        </table>
                    </textarea>
                    <textarea name="jst" id="m-wgt-song-listen" style="display:none;">
                        <ul>
                            {list beg..end as y} {var x=xlist[y]} {if extData&&extData.limit&&y>=extData.limit}
                            {break} {/if} {var from=getFrom()}
                            <li id="${x.id|seed}" {if y%2 !=0 }class='even' {/if}>
                                <div class="hd ">
                                    <span data-res-id="${x.id}" data-res-type="18" data-res-action="play"
                                    {if from}data-res-from="${from.fid}" data-res-data="${from.fdata}" {/if}
                                    class="ply {if isPlaying(x)}ply-z-slt{/if}">
                                        &nbsp;
                                    </span>
                                    <span class="num">
                                        ${y+1}.
                                    </span>
                                </div>
                                <div class="song">
                                    <div class="tt">
                                        <div class="ttc">
                                            <span class="txt">
                                                <a href="/song?id=${x.id}">
                                                    <b title="${x.name}">
                                                        ${x.name}
                                                    </b>
                                                </a>
                                                <span class='ar s-fc8'>
                                                    <em>
                                                        -
                                                    </em>
                                                    ${getArtistName(x.artists, 's-fc8')}
                                                </span>
                                            </span>
                                        </div>
                                    </div>
                                    <div class="opt">
                                        <a class="u-icn u-icn-81 icn-add" href="javascript:;" title="添加到播放列表"
                                        hidefocus="true" data-res-type="18" data-res-id="${x.id}" data-res-action="addto"
                                        {if from}data-res-from="${from.fid}" data-res-data="${from.fdata}" {/if}>
                                        </a>
                                        <span data-res-id="${x.id}" data-res-type="18" data-res-action="subscribe"
                                        class="icn icn-fav" title="收藏">
                                        </span>
                                        <span data-res-id="${x.id}" data-res-type="18" data-res-action="share"
                                        data-res-name="${x.name}" data-res-author="{list x.artists as art}${art.name}{if art_index<x.artists.length-1}/{/if}{/list}"
                                        class="icn icn-share" title="分享">
                                            分享
                                        </span>
                                        <span data-res-id="${x.id}" data-res-type="18" data-res-action="download"
                                        class="icn icn-dl" title="下载">
                                            下载
                                        </span>
                                    </div>
                                </div>
                                <div class="tops">
                                    <span class="bg" style='width:${x.score*100/x.max}%;'>
                                    </span>
                                    {if extData.showCount&&x.playCount}
                                    <span class="times f-ff2">
                                        ${x.playCount}次
                                    </span>
                                    {/if}
                                </div>
                            </li>
                            {/list}
                        </ul>
                        {if extData&&extData.limit&&xlist.length>extData.limit}
                        <div class="more">
                            <a href="/user/songs/rank?id=${hostId}">
                                查看更多&gt;
                            </a>
                        </div>
                        {/if}
                    </textarea>
                    <textarea name="jst" id="m-wgt-purchased-song-list" style="display:none;">
                        {list beg..end as y} {var x=xlist[y]}
                        <tr id="${x.id|seed}" class="{if y%2==1}even{/if} {if disable(x)}js-dis{/if}">
                            <td class="left">
                                <div class="hd {if type=='rank'}rank{/if}">
                                    <span data-res-id="${x.id}" data-res-type="18" data-res-action="play"
                                    {if from}data-res-from="${from.fid}" data-res-data="${from.fdata}" {/if}
                                    class="ply {if isPlaying(x)}ply-z-slt{/if}">
                                        &nbsp;
                                    </span>
                                    <span class="num">
                                        ${y+1}
                                    </span>
                                    {if type=='rank'}
                                    <div class="rk rk-1">
                                        {if x.lastRank>=0} {if y-x.lastRank>0}
                                        <span class="ico u-icn u-icn-74 s-fc10">
                                            ${y-x.lastRank}
                                        </span>
                                        {elseif y-x.lastRank==0}
                                        <span class="ico u-icn u-icn-72 s-fc4">
                                            0
                                        </span>
                                        {else}
                                        <span class="ico u-icn u-icn-73 s-fc9">
                                            ${x.lastRank-y}
                                        </span>
                                        {/if} {else}
                                        <span class="u-icn u-icn-75">
                                        </span>
                                        {/if}
                                    </div>
                                    {/if}
                                </div>
                            </td>
                            <td class="u-hasopt">
                                <div class="f-cb">
                                    <div class="tt">
                                        <div class="ttc">
                                            <span class="txt">
                                                {var alia=songAlia(x)}
                                                <a href="/song?id=${x.id}">
                                                    <b title="${x.name|escape}{if alia} - (${alia|escape}){/if}">
                                                        ${soil(x.name)}
                                                    </b>
                                                </a>
                                                {if alia}
                                                <span title="${alia|escape}" class="s-fc8">
                                                    - (${soil(alia)})
                                                </span>
                                                {/if} {if x.mvid>0}
                                                <span data-res-id="${x.id}" data-res-action="mv" title="播放mv" class="mv">
                                                    MV
                                                </span>
                                                {/if}
                                            </span>
                                        </div>
                                    </div>
                                    <div class="opt hshow">
                                        <a class="u-icn u-icn-81 icn-add" href="javascript:;" title="添加到播放列表"
                                        hidefocus="true" data-res-type="18" data-res-id="${x.id}" data-res-action="addto"
                                        {if from}data-res-from="${from.fid}" data-res-data="${from.fdata}" {/if}>
                                        </a>
                                        <span data-res-id="${x.id}" data-res-type="18" data-res-action="fav" class="icn icn-fav"
                                        title="收藏">
                                        </span>
                                        <span data-res-id="${x.id}" data-res-type="18" data-res-action="share"
                                        data-res-name="${x.name}" data-res-author="{list x.artists as art}${art.name}{if art_index<x.artists.length-1}/{/if}{/list}"
                                        {if x.album}data-res-pic="${x.album.picUrl}" {/if} class="icn icn-share"
                                        title="分享">
                                            分享
                                        </span>
                                        <span data-res-id="${x.id}" data-res-type="18" data-res-action="download"
                                        class="icn icn-dl" title="下载">
                                        </span>
                                        {if canDel}
                                        <span data-res-id="${x.id}" data-res-type="18" data-res-action="delete"
                                        class="icn icn-del" title="删除">
                                            删除
                                        </span>
                                        {/if}
                                    </div>
                                </div>
                            </td>
                            <td class="">
                                <div class="text" title="{list x.artists as art}${art.name}{if art_index<x.artists.length-1}/{/if}{/list}">
                                    ${getArtistName(x.artists, '', '', false, false, true)}
                                </div>
                            </td>
                            <td class="">
                                <div class="text">
                                    {if x.album}
                                    <a href="/album?id=${x.album.id}" title="${x.album.name|escape}">
                                        ${soil(x.album.name)}
                                    </a>
                                    {/if}
                                </div>
                            </td>
                            <td class="s-fc3">
                                ${formatTime(x.paidTime)}
                            </td>
                        </tr>
                        {/list}
                    </textarea>
                    <textarea name="ntp" id="m-msg-private-send" style="display:none;">
                        <div class="lyct lyct-1 f-cb">
                            <div class="m-lyshare m-plshare">
                                <div class="u-err j-flag" style="display: none;">
                                    最多选择10位好友
                                </div>
                                <div class="item item-1 f-cb">
                                    <label>
                                        发 给：
                                    </label>
                                    <div class="ct f-pr j-flag">
                                    </div>
                                </div>
                                <div class="item f-cb">
                                    <label>
                                        内 容：
                                    </label>
                                    <div class="ct j-flag">
                                    </div>
                                </div>
                            </div>
                        </div>
                    </textarea>
                    </div>
                    <script src="//s3.music.126.net/web/s/core_1c82083c4e2d59f4a40f34b63de29546.js?1c82083c4e2d59f4a40f34b63de29546"
                    type="text/javascript">
                    </script>
                    <script src="//s3.music.126.net/web/s/pt_discover_toplist_6dd5ffb17b23c96449f9221db1fa4052.js?6dd5ffb17b23c96449f9221db1fa4052"
                    type="text/javascript">
                    </script>
    </body>
    <script type="text/javascript">
        var _gaq = _gaq || [];
        _gaq.push(['_setAccount', 'UA-38766552-1'], ['_setLocalGifPath', '/UA-38766552-1/__utm.gif'], ['_setLocalRemoteServerMode']);
        _gaq.push(['_trackPageview']);
        //fix ipad下的一个bug
        if (navigator.userAgent.indexOf('iPad') != -1) {
            iframeHeight = Math.max(Math.max(document.body.scrollHeight, document.documentElement.scrollHeight), Math.max(document.body.offsetHeight, document.documentElement.offsetHeight), Math.max(document.body.clientHeight, document.documentElement.clientHeight));
            top.document.body.style.height = iframeHeight + 20 + 'px';
        }
    </script>

</html>
