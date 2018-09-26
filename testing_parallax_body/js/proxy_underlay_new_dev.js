// Old Script Domain
innity_domain   = "";
// Campaign ID
var campaignid_127309 = "11612";
// Cache buster
var cb_127309   = new Date().getTime();
var auth_127309 = Math.random().toString(36).substring(7) + "-" + cb_127309;

innity_pub = "something";
zone_127309 = "something";
pcu_127309 = "something";

ad_127309 = {};
ad_127309.id = "innity_adslot_127309" + cb_127309;
ad_127309.zindex = "2147483645";
ad_127309.base = innity_domain;
ad_127309.src = "https://www.innity.com/img/innity_banner_1.png";
// ad_127309.src = "./display_ads.html";

// ad_127309.src = ad_127309.base + "assets/underlay_story/index.html?adid=c127309&init=true";
/* ClickTAG START */
var clickTAG_127309 = "";

tempWin = window;
try {
    if (window.self !== window.top) {
        tempWin = window.parent.window;
    }
}
catch (e) {}

function c177002_adReadyCallback(adMsg) {
    // adReady --> when ad is loaded & ready.
    // pubError --> Cannot find innity-in-post element.
    console.log('%cAd is ready ('+adMsg+')', 'color:white; background:darkblue;');
};
function c177002_adScrollCallback(percentage) {
    console.log('%cAd is at '+percentage+'%', 'color:black; background:pink;');
};

var c127309_options = {
    invAdID: '127309-'+cb_127309,
    invContainerID: ad_127309.id,
    invIframeSrc: ad_127309.src,
    inreadSpanID: 'innity-in-post',
//    language: 'tc', // default will be English.
//    language: 'sc',
//    language: 'kr',
//    language: 'id',
//    language: 'th',
//    language: 'vn',
//    logoPos: 'bottom-right', // default will be bottom left.
//    logoPos: 'top-left',
//    logoPos: 'top-right',
//    logoPos: 'none',
//    isVideoAd: true, // default will be false (boolean).
    // Custom publisher.
//    appledaily: true, // default will be false (boolean).
//    jusky: true, // default will be false (boolean).
//    nextmag: true, inlineTag: true, // default will be false for both (boolean).
//    sph: true, // default will be false for both (boolean).
//    udn: true, // default will be false for both (boolean).
//    oppa: true, // default will be false for both (boolean).
    adReadinessCallback: c177002_adReadyCallback,
//    callbackOnScroll: c177002_adScrollCallback,
//    inlineTag: true, // default will be false (boolean).
//    accessibleWindow: null,
//    accessibleDocument: null,
//    currentScript: c177002_getCurrentScript,
};
if (tempWin.location.href.indexOf('appledaily.com') > -1) {
    c127309_options.appledaily = true;
}
else if (tempWin.location.href.indexOf('juksy.com') > -1) {
    c127309_options.jusky = true;
}
else if (tempWin.location.href.indexOf('nextmag.com.tw') > -1) {
    c127309_options.nextmag = true;
    c127309_options.inlineTag = true;
}
else if (tempWin.location.href.indexOf('sph.com.sg') > -1) {
    c127309_options.sph = true;
}
else if (tempWin.location.href.indexOf('udn.com') > -1) {
    c127309_options.udn = true;
}

var c127309_innityInlineScrollObj = new c127309_InnityAppsUnderlay(c127309_options);
function c127309_InnityAppsUnderlay(options) {
    this.getDebugMessage = getDebugMessage;
    this.cleanDebugMessage = cleanDebugMessage;
    this.getVersion = getVersion;

    var timeForDebug = new Date();
    var debugMessage = '';

    var version = '4.4.4';

    var curWin = window;
    var curDoc = document;
    var extraOptions = mergeObject({
        invAdID: null,
        invContainerID: null,
        invIframeSrc: 'https://www.innity.com/img/innity_banner_1.png',
        inreadSpanID: 'innity-in-post',
        language: 'en',
        // top/bottom then left/right.
        logoPos: 'bottom-left',
        isVideoAd: false,
        adReadinessCallback: null,
        callbackOnScroll: null,
        inlineTag: false,
        // Custom publisher
        appledaily: false,
        jusky: false,
        nextmag: false,
        sph: false,
        udn: false,
        oppa: false,
        accessibleWindow: null,
        accessibleDocument: null,
        invisiblePubIframe: true,
        currentScript: curDoc.currentScript,
        enableDebug: true
    }, options, 'extraOptions');
    var iframeBreaker = new InnityAppsIframeBreaker();
    var customPub = new InnityAppsCustomPub();

    var clsInvitationAdID = extraOptions.invAdID || 'invitation_ad';
    var clsInvitationContainerID = extraOptions.invContainerID || 'invitation_container';
    var invIframeID = 'innity_iframe_' + clsInvitationAdID;
    var isClassInit = false;
    var styleElement, innityInPostSpanEl, adContainerEl, fixContainerEl, adIframeEl, inlineAdSpaceEl;
    var adShow10 = 0, adShow20 = 0, adShow30 = 0, adShow40 = 0, adShow50 = 0;
    var adShow60 = 0, adShow70 = 0, adShow80 = 0, adShow90 = 0;
    var isAdHidden = false;
    var logoObj = null;

    var supporter = new InnityAppsUnderlaySupport();

    if (curDoc.readyState !== 'loading') {
        getElementPlacement();

        log('DOM is ready, direct execute the class.');
    }
    else {
        curDoc.addEventListener('DOMContentLoaded', getElementPlacement, false);

        log('DOM isn\'t ready, listen to DOMContentLoaded event.');
    }

    function getElementPlacement() {
        if (supporter.getSupportStatus() !== supporter.supported) {
            log('Not supported device or fallback!');
            return;
        }

        if (extraOptions.inlineTag === true) {
            new InnityAppsInlineElPlacement(insertFollowScriptPlacementCallback);
            return;
        }

        new InnityAutoSpanGenerator(autoInsertCallback);
    };
    function autoInsertCallback(isSuccess) {
        if (isSuccess === false) {
            new InnityAppsInlineElPlacement(insertFollowScriptPlacementCallback);
            return;
        }

        queryAutoInsertSpan();
    };
    function queryAutoInsertSpan() {
        innityInPostSpanEl = curDoc.getElementById(extraOptions.inreadSpanID);
        if (innityInPostSpanEl === null) {
            console.error('Cannot find element '+'%'+extraOptions.inreadSpanID+'!', 'color:black;font-size:20px;');
            adReadyCallback('pubError');
            return;
        }
        initClass();
    };
    function insertFollowScriptPlacementCallback(isSuccess) {
        if (isSuccess === true) {
            queryFollowScriptSpan();
        }
    };
    function queryFollowScriptSpan() {
        innityInPostSpanEl = curDoc.getElementById('innity-follow-script-mobile-scroll-post');
        if (innityInPostSpanEl === null) {
            console.error('Cannot find element '+'%cinnity-follow-script-mobile-scroll-post!', 'color:black;font-size:20px;');
            adReadyCallback('pubError');
            return;
        }
        initClass();
    };
    function initClass() {
        if (isClassInit === true) {
            return;
        }

        isClassInit = true;

        generateElements();
        generateLogo();
        bindEvent();

        customPub.runCustomAfterProxyLoaded();

        log('Class init completed.');
    };

    function generateElements() {
        setupStyle();
        setupAdContainer();
    };
    function setupStyle() {
        styleElement = curDoc.createElement('style');
        styleElement.setAttribute('data-owner', 'Innity');
        styleElement.innerHTML = ".innity-apps-reset{padding:0;margin:0;border:0}.innity-apps-underlay-ad{position:absolute;top:0;left:0;overflow:visible;z-index:2147483644;font-size:0;line-height:0;text-align:left;display:block}.innity-apps-underlay-fixed{position:fixed!important;top:0!important;left:0!important;overflow:hidden!important;font-size:0!important;line-height:0!important;text-align:left!important;z-index:2147483643}.innity-apps-underlay-iframe{width:100%!important;position:absolute!important;visibility:visible!important;display:block!important}.innity-apps-underlay-inline-gap{position:relative!important;left:0!important;top:0!important;overflow:hidden!important}";

        curDoc.getElementsByTagName('body')[0].appendChild(styleElement);

        log('style element creation completed.');
    };
    function setupAdContainer() {
        inlineAdSpaceEl = curDoc.createElement('div');
        inlineAdSpaceEl.classList.add('innity-apps-reset');
        inlineAdSpaceEl.classList.add('innity-apps-underlay-inline-gap');

        adContainerEl = curDoc.createElement('div');
        adContainerEl.setAttribute('id', clsInvitationContainerID);
        adContainerEl.classList.add('innity-apps-reset');
        adContainerEl.classList.add('innity-apps-underlay-ad');

        setupFixedContainer();
        setupAdIframe();

        innityInPostSpanEl.parentNode.insertBefore(inlineAdSpaceEl, innityInPostSpanEl);

        curDoc.getElementsByTagName('body')[0].insertAdjacentElement('afterbegin', adContainerEl);

        log('ad container creation completed.');
    };
    function setupFixedContainer() {
        fixContainerEl = curDoc.createElement('div');
        fixContainerEl.classList.add('innity-apps-reset');
        fixContainerEl.classList.add('innity-apps-underlay-fixed');

        adContainerEl.appendChild(fixContainerEl);

        log('fixed container creation completed.');
    };
    function setupAdIframe() {
        adIframeEl = curDoc.createElement('iframe');
        adIframeEl.setAttribute('id', invIframeID);
        adIframeEl.src = extraOptions.invIframeSrc;
        adIframeEl.classList.add('innity-apps-reset');
        adIframeEl.classList.add('innity-apps-underlay-iframe');
        adIframeEl.setAttribute('allowfullscreen', 'true');
        adIframeEl.setAttribute('webkitallowfullscreen', 'true');
        adIframeEl.setAttribute('scrolling', 'no');

        fixContainerEl.appendChild(adIframeEl);

        log('iframe creation completed.');
    };

    function generateLogo() {
        logoObj = new InnityAppsLogo(inlineAdSpaceEl);
    };

    function bindEvent() {
        if (iframeBreaker.isInsideIframe() === true) {
            window.addEventListener('message', listenToMessage, false);
            curWin.addEventListener('message', listenToMessage, false);
        }
        else {
            curWin.addEventListener('message', listenToMessage, false);
        }

        curWin.addEventListener('resize', resizeHandler, false);
        curWin.addEventListener('orientationchange', function() {
            setTimeout(resizeHandler, 500);
        }, false);
        curWin.addEventListener('scroll', scrollHandler, false);

        resizeHandler();
        scrollHandler();

        log('Event binding completed.');
    };
    function resizeHandler() {
        if (curWin.innerWidth > curWin.innerHeight) {
            isAdHidden = true;
            hide();
            return;
        }

        isAdHidden = false;
        show();
        calcPercentage();

        fixContainerEl.style.width = screen.width+'px';
        fixContainerEl.style.height = screen.height+'px';
        adIframeEl.style.height = screen.height+'px';

        // Full bleed design.
        inlineAdSpaceEl.style.width = screen.width+'px';
        inlineAdSpaceEl.style.height = customPub.runCustomContainerHeight()+'px';
        if (inlineAdSpaceEl.getBoundingClientRect().left > 0) {
            inlineAdSpaceEl.style.marginLeft = -inlineAdSpaceEl.getBoundingClientRect().left+'px';
        }

        postMsgToIframe('resize', {windowHeight: curWin.innerHeight});
    };
    function calcPercentage() {
        var pageHeight = curWin.innerHeight;
        var portions = 10;
        adShow10 = Math.round(pageHeight / portions) * (portions - 1);
        adShow20 = Math.round(pageHeight / portions) * (portions - 2);
        adShow30 = Math.round(pageHeight / portions) * (portions - 3);
        adShow40 = Math.round(pageHeight / portions) * (portions - 4);
        adShow50 = Math.round(pageHeight / portions) * (portions - 5);
        adShow60 = Math.round(pageHeight / portions) * (portions - 6);
        adShow70 = Math.round(pageHeight / portions) * (portions - 7);
        adShow80 = Math.round(pageHeight / portions) * (portions - 8);
        adShow90 = Math.round(pageHeight / portions) * (portions - 9);

    };
    function listenToMessage(event) {
        var supportedMsg = event.data;
        if (typeof(supportedMsg.owner) === 'undefined' || supportedMsg.owner !== 'Innity' || typeof(supportedMsg.adType) === 'undefined') {
            return;
        }

        if (supportedMsg.version != version) {
            log('Proxy and ad version is different! v' + supportedMsg.version);
        }

        // Supported ad type.
        switch (supportedMsg.action) {
            case 'adReady':
                callbackAdReadinessToProxy(supportedMsg.action);

                if (supportedMsg.data !== undefined && supportedMsg.data.orientation === true) {
                    new InnityAppsOrientation();
                }

                if (supportedMsg.data.customize !== undefined) {
                    creativeCustomize(supportedMsg.data.customize);
                }

                postMsgToIframe('resize', {windowHeight: curWin.innerHeight});
                break;
        }
    };
    function callbackAdReadinessToProxy(msg) {
        if (typeof(adReadinessCallback) === 'function') {
            adReadinessCallback({adMessage: msg});
        }
    };
    /**
     * Special customize from creative base on different publisher or group.
     * @param {string} customizeFor
     */
    function creativeCustomize(customizeFor) {
        switch (customizeFor) {
            case 'oppa':
                extraOptions.oppa = true;
                resizeHandler();
                break;
            default:
                break;
        }
    }

    function scrollHandler() {
        if (isAdHidden === true) {
            return;
        }

        revealHandler();
        scrollAdVisibilityHandler();
    };
    function revealHandler() {
        var clipStyle = 'rect('+(inlineAdSpaceEl.getBoundingClientRect().top + 9)+'px '+screen.width+'px '+(inlineAdSpaceEl.getBoundingClientRect().top+screen.height)+'px 0px)';

        if (extraOptions.sph === true ||
            extraOptions.oppa === true) {
            clipStyle = customPub.runCustomRevealHandlerFormula();
        }

        fixContainerEl.style.clip = clipStyle;
    };
    function scrollAdVisibilityHandler() {
        if (inlineAdSpaceEl.getBoundingClientRect().top < curWin.innerHeight && inlineAdSpaceEl.getBoundingClientRect().top > -curWin.innerHeight) {
            var absoluteTop = Math.abs(inlineAdSpaceEl.getBoundingClientRect().top);
            adShowing = 10;
            // Less than 10 percentage of ad showing.
            if (absoluteTop > adShow10) {
                adShowing = 10;
            }
            // Between 10 - 20 percentage of ad showing.
            else if (absoluteTop <= adShow10 && absoluteTop > adShow20) {
                adShowing = 20;
            }
            // Between 20 - 30 percentage of ad showing.
            else if (absoluteTop <= adShow20 && absoluteTop > adShow30) {
                adShowing = 30;
            }
            // Between 30 - 40 percentage of ad showing.
            else if (absoluteTop <= adShow30 && absoluteTop > adShow40) {
                adShowing = 40;
            }
            // Between 40 - 50 percentage of ad showing.
            else if (absoluteTop <= adShow40 && absoluteTop > adShow50) {
                adShowing = 50;
            }
            // Between 50 - 60 percentage of ad showing.
            else if (absoluteTop <= adShow50 && absoluteTop > adShow60) {
                adShowing = 60;
            }
            // Between 60 - 70 percentage of ad showing.
            else if (absoluteTop <= adShow60 && absoluteTop > adShow70) {
                adShowing = 70;
            }
            // Between 70 - 80 percentage of ad showing.
            else if (absoluteTop <= adShow70 && absoluteTop > adShow80) {
                adShowing = 80;
            }
            // Between 80 - 90 percentage of ad showing.
            else if (absoluteTop <= adShow80 && absoluteTop > adShow90) {
                adShowing = 90;
            }
            // More than 90 percentage of ad showing.
            else if (absoluteTop <= adShow90) {
                adShowing = 100;
            }

            postMsgToIframe('movement', {percentage: adShowing});
            postMsgToIframeBackward();
            callbackToProxyOnScroll();
        }
    };

    function postMsgToIframe(action, data) {
        if (adIframeEl.contentWindow === null) {
            return;
        }

        adIframeEl.contentWindow.postMessage({owner: 'Innity', adType: 'innity-apps-underlay', action: action, data: data, version: version}, '*');
    };
    /**
     * A backward compatibility support for old postMessage format.
     */
    function postMsgToIframeBackward() {
        adIframeEl.contentWindow.postMessage({owner: 'Innity', adType: 'innity-apps-underlay', action: 'movement', percentage: adShowing, version: version}, '*');
    };
    function callbackToProxyOnScroll() {
        if (typeof(extraOptions.callbackOnScroll) === 'function') {
            extraOptions.callbackOnScroll(adShowing);

            log('Callback to proxy with ad showing ('+adShowing+'%)');
        }
    };
    function show() {
        inlineAdSpaceEl.style.display = '';
    };
    function hide() {
        fixContainerEl.style.clip = 'rect(0 0 0 0)';
        inlineAdSpaceEl.style.display = 'none';
    };

    function mergeObject(defaultObj, overrideObject, reference) {
        for (var attributeKey in overrideObject) {
            if (defaultObj.hasOwnProperty(attributeKey)) {
                defaultObj[attributeKey] = overrideObject[attributeKey];
            }
            else {
                console.warn('Key ['+attributeKey+'] not found in object merging process.', reference);
            }
        }

        return defaultObj;
    };
    function getDebugMessage() {
        return debugMessage;
    };
    function cleanDebugMessage() {
        debugMessage = '';
    };
    function log(msg) {
        if (extraOptions.enableDebug === true) {
            debugMessage += 'v'+version+' ['+timeForDebug.toGMTString()+'] '+msg+'\n';
        }
    };
    function getVersion() {
        return version;
    };

    function InnityAppsIframeBreaker() {
        this.isInsideIframe = isInsideIframe;

        initClass();

        function initClass() {
            if (extraOptions.accessibleWindow !== null && extraOptions.accessibleDocument !== null) {
                curWin = extraOptions.accessibleWindow;
                curDoc = extraOptions.accessibleDocument;
                log('Window & Document were pass in by Proxy.');
            }
            else {
                handleDocumentAndWindow();
            }

            invisiblePublisherIframe();
        };

        function isInsideIframe() {
            try {
                return window.self !== window.top;
            }
            catch (e) {
                return true;
            }
        };
        function handleDocumentAndWindow() {
            if (isInsideIframe() === true) {
                curWin = (extraOptions.accessibleWindow === null) ? top.window : extraOptions.accessibleWindow;
                curDoc = (extraOptions.accessibleDocument === null) ? top.document : extraOptions.accessibleDocument;
                log('Proxy is within DFP or IFRAME.');
            }
            else {
                curWin = (extraOptions.accessibleWindow === null) ? window : extraOptions.accessibleWindow;
                curDoc = (extraOptions.accessibleDocument === null) ? document : extraOptions.accessibleDocument;
                log('Proxy is same layer with publisher.');
            }
        };

        function invisiblePublisherIframe() {
            if (extraOptions.invisiblePubIframe !== true) {
                return;
            }

            if (isInsideIframe() === true) {
                var pubIframeEl = null;
                var allIframes = [];

                allIframes = parent.document.getElementsByTagName('iframe');

                for (var i = 0; i < allIframes.length; i++) {
                    try {
                        if (allIframes[i].contentWindow === window || allIframes[i].contentDocument === document) {
                            pubIframeEl = allIframes[i];
                            break;
                        }
                    }
                    catch(e) {}
                }

                if (pubIframeEl === null) {
                    return;
                }

                pubIframeEl.width = 0;
                pubIframeEl.height = 0;
                pubIframeEl.style.width = 0;
                pubIframeEl.style.height = 0;
                pubIframeEl.style.margin = 0;
                pubIframeEl.style.padding = 0;
                pubIframeEl.style.border = 'none';
            }
        };
    };

    function InnityAppsUnderlaySupport() {
        this.supported = 1;
        this.fallback = 2;
        this.unsupported = 0;

        this.getOS = getOS;
        this.getOSVersion = getOSVersion;
        this.getSupportStatus = getSupportStatus;

        var self = this;
        var os = 'other';
        var osVersion = '0';
        var supportStatus = self.supported;

        _detection();
        _unsupportedCondition();

        function _detection() {
            if (/(iPhone|iPod|iPad)/i.test(navigator.userAgent)) {
                os = 'ios';
                var v = (navigator.appVersion).match(/OS (\d+)_(\d+)_?(\d+)?/);
                osVersion = [parseInt(v[1], 10), parseInt(v[2], 10), parseInt(v[3] || 0, 10)];
            }
            else if (navigator.userAgent.toLowerCase().indexOf('android') > -1) {
                os = 'android';
                var v = navigator.userAgent.match(/Android (\d+(?:\.\d+){1,2})/i);
                if (v !== null) {
                    osVersion = v[v.length - 1];
                }
            }
        };

        function _unsupportedCondition() {
            if (os === 'android') {
                if (parseFloat(osVersion) < 4.3) {
                    supportStatus = self.fallback;
                }

                if (navigator.userAgent.toLowerCase().indexOf('chrome') === -1) {
                    supportStatus = self.fallback;
                }

                // Not supporting Opera Mini in Android. Opera Mini will generate a big gap after the underlay ad.
                if(navigator.userAgent.match(/Opera Mini/i)) {
                    supportStatus = self.unsupported;
                }
            }

            if(navigator.userAgent.match(/Firefox|UCBrowser|IEMobile|MxBrowser/i)) {
                supportStatus = self.unsupported;
            }

            // On 22 Aug 2018
            // Biggest width = 414
            // Biggest height = 823
            // So we use 450x850
            if (screen.width * screen.height > 450 * 850) {
                supportStatus = self.unsupported;
            }
        };

        function getOS() {
            return os;
        };
        function getOSVersion() {
            return osVersion;
        };
        function getSupportStatus() {
            return supportStatus;
        };
    };

    function InnityAutoSpanGenerator(callback) {
        var articleLocator = (function(){function ap(e){if(!e||e.length===0)return!1;var t=e.charCodeAt(0);return t>11904&&t<12031? !0:t>12352&&t<12543? !0:t>12736&&t<19903? !0:t>19968&&t<40959? !0:t>44032&&t<55215? !0:t>63744&&t<64255? !0:t>65072&&t<65103? !0:t>131072&&t<173791? !0:t>194560&&t<195103? !0: !1};function aV(e,t,n){var r=[],i=e;while(i)r.unshift(i),i=i.parentNode;var s=[];i=t;while(i)s.unshift(i),i=i.parentNode;var o=Math.min(r.length,s.length),u=Math.abs(r.length-s.length);for(var a=o;a>=0;--a){if(r[a]===s[a])break;u+=2;if(n&&u>=n)return n}return u};function ag(e,t){var n=parseInt(e.fontSize);return isNaN(n)&&(n=t?t:dv),n};function bL(e,t){function n(e){if(bm(e))return null;var t=getComputedStyle(e.parentNode);return t.float!=="none"?null:t};var r="descendant::text()[not(parent::h1) and not(parent::h2) and not(parent::h3) and not(parent::h4) and not(parent::h5) and not(parent::h6)]",i=e.evaluate(r,t,null,XPathResult.ORDERED_NODE_SNAPSHOT_TYPE,null),s=i.snapshotLength;for(var o=0;o<s;++o){var u=n(i.snapshotItem(o));if(u)return u}return null};function bm(e){return!e||e.nodeType!==Node.TEXT_NODE? !1: !/\S/.test(e.data)};function bd(e){return e.replace(/\s+/g,"")};function ah(e){return e&&e.nodeType===Node.ELEMENT_NODE? !0: !1};function bG(e){var t=getComputedStyle(e);if(t.visibility!=="visible"||t.display==="none")return!1;if(bo(e).height)return!0;var n=document.createRange();return n.selectNode(e),! !n.getBoundingClientRect().height};function bn(e){var t=bo(e);return!t.height|| !t.width? !1:t.bottom<=0||t.right<=0? !0: !1};function aq(e){var t=0;while(e)e=e.parentElement,t++;return t};function aP(e,t){while(e=e.parentElement)if(e.tagName===t)return e;return null};function bo(e){if(e.bh)return e.bh;var t=e.getBoundingClientRect();return aF.bc.push(e),!aF.cV&& !aF.cR?(e.bh=t,e.bh):(e.bh={top:t.top+aF.cR,right:t.right+aF.cV,bottom:t.bottom+aF.cR,left:t.left+aF.cV,width:t.width,height:t.height},e.bh)};function by(){var e=aF.bc,t=e.length;for(var n=0;n<t;++n)e[n].bh=null;aF.bc=[]};function bz(e){var t=e.innerText;return t||(t=e.textContent),t};function aE(e,t){var n=e.length,r=t.length,i=new Array(n+1);for(var s=0;s<n+1;++s)i[s]=new Array(r+1),i[s][0]=s;for(var o=0;o<r+1;++o)i[0][o]=o;for(var o=1;o<r+1;++o)for(var s=1;s<n+1;++s)if(e[s-1]===t[o-1])i[s][o]=i[s-1][o-1];else{var u=i[s-1][o]+1,a=i[s][o-1]+1,f=i[s-1][o-1]+1;i[s][o]=Math.min(u,a,f)}return i[n][r]};function aH(e,t){var n=Math.max(e.length,t.length);return n?(n-aE(e,t))/n:0};function bk(e,t){return e===t? !0:aH(e,t)>bE};function aA(e){if(/(^|\s)comment/.test(e.className))return!0;var t=e.getAttribute("id");return t&&t.indexOf("comment")===0? !0: !1};function aI(e){if(!e|| !e.length)return 1;var t=Math.min(e.length,aw),n=0,r=0;for(var i=0;i<t;i++){var s=e[i].nodeValue.trim(),o=Math.min(s.length,aT);for(var u=0;u<o;u++)ap(s[u])&&n++;r+=o}return n>=r*bs?aC:1};function al(e){var t=1;for(var n=e;n;n=n.parentElement){var r=n.getAttribute("id");r&&(cw.test(r)&&(t+=dp),ck.test(r)&&(t-=dm));var i=n.className;i&&(cw.test(i)&&(t+=dp),ck.test(i)&&(t-=dm)),n.tagName==="ARTICLE"&&(t+=dp)}return t<0?0:t};function aj(e,t){if(typeof aD!="undefined"&&aD.cl){var n=aD.cl(e,t);return n&&n.nodeType!==Node.ELEMENT_NODE&&(n=n.parentElement),n}return document.elementFromPoint(e,t)};function aL(e){return typeof aD!="undefined"&&aD.aL?aD.aL(e):e};function aK(e,t){var n=t.createElement("a");return n.href=e,n};function an(e){return /\battachment\b/i.test(e.getAttribute("rel"))};function bj(e){return /\bcategory|tag\b/i.test(e.getAttribute("rel"))};function bJ(e,t){return e.tagName===t.tagName&&e.className===t.className};function av(e){var t=e.tagName,n=e.classList,r=n.length;for(var i=0;i<r;i++)t+="."+n[i];return t};function bp(e,t){function s(e,t){if(!e)return "";var o=[];o.push(av(e));var u=e.children,a=u.length;if(a&&t>0){o.push(n);for(var f=0;f<a;++f)o.push(s(u[f],t-1)),f!==a-1&&o.push(i);o.push(r)}return o.join("")};var n=" / ",r=" \\",i=" | ";return s(e,t)};function aW(e){var t=e.parentElement;return t?t.children:[]};function ad(e){var t=[];for(var n in e)e.hasOwnProperty(n)&&t.push({key:n,value:e[n]});return t.sort(function(e,t){return t.value-e.value}),t};var ds=1600,cN=15,dB=4.25,bi={},bH=[],ba=280,ax=150,cX=8e4,cG=1300,aY=.5,aU=4,bw={A:1,EMBED:1,FORM:1,HTML:1,IFRAME:1,OBJECT:1,OL:1,OPTION:1,SCRIPT:1,STYLE:1,svg:1,UL:1},aM=50,be=200,ao=150,di={cr:1,justify:1,left:1,right:1,small:1},ck=/comment|meta|footer|footnote/,dm=.75,cw=/(?:(?:^|\s)(?:(post|hentry|entry)[-_]?(?:content|text|body)?|article[-_]?(?:content|text|body|page)?)(?:\s|$))/i,dp=.5,cU="#disqus_thread, #comments, .userComments",dg=/^on|^id$|^class$|^style$/,bY=/article|body|content|entry|hentry|page|pagination|post|text/i,cf=/advertisement|breadcrumb|combx|comment|contact|disqus|footer|link|meta|mod-conversations|promo|related|scroll|share|shoutbox|sidebar|social|sponsor|tags|toolbox|widget/i,ae=/instapaper_body/,dJ=/instapaper_ignore/,bv=200,au=200,ai=.1,aw=3,aT=12,bs=.5,aC=3,dr=150,aQ=.25,bM=.2,cd=/continue/gi,fN=/next/gi,fq=/page/gi,fd=5,fh=10,fH=15,da=15,dE=3,cn=2,fg=200,bg=200,bx=150,de="descendant-or-self::*[(not(@id) or (@id!='disqus_thread' and @id!='comments')) and (not(@class) or @class!='userComments')]/a",eN=/\D(?:\d\d(?:\d\d)?[\-\/](?:10|11|12|0?[1-9])[\-\/](?:30|31|[12][0-9]|0?[1-9])|\d\d(?:\d\d)?\/(?:10|11|12|0[1-9])|(?:10|11|12|0?[1-9])\-(?:30|31|[12][0-9]|0?[1-9])\-\d\d(?:\d\d)?|(?:30|31|[12][0-9]|0?[1-9])\-(?:10|11|12|0?[1-9])\-\d\d(?:\d\d)?)\D/,aO=/(page|^p$|^pg$)/i,bA=/\/.*page.*\/\d+/i,cD=/\/\d+\/?$/,bP=/archives?\/\d+\/?$/,bN=/author|comment|feed|id|related/i,dG=100,ca=.75,az=200,ac=.75,cI=130,bZ=32,bD=50,cJ=325,cg=100,dQ=100,du=83,dv=16,dR=1.125,dP=9007199254740992,aZ=.1,cj=1,dI=2,cc=4,cv=8,dO=16,aB=1.25,dN={"data-lazy-src":1,"data-original":1,"data-src":1,"original-src":1,"rel:bf_image_src":1},bE=.97;db=function(e,t){this.element=e,this.contentDocument=t,this.ce=this.cz(this.element),this.cB=this.dF(),this.bS=this.bu(),this.aS=0,this.dz=0},db.am=function(t,n,r,i){var s="a, b, strong, i, em, u, span";var o=bo(t),u=bo(n.element);if(i&&o.height<aM|| !i&&o.height<be)if(t.childElementCount&&t.querySelectorAll("*").length!==t.querySelectorAll(s).length)return null;if(i){if(o.bottom>u.top)return null}else if(o.top<u.bottom)return null;if(!i){var a=o.top-u.bottom;if(a>ao)return null}var f=.1*u.width;if(Math.abs(o.left-u.left)>f||Math.abs(o.right-n.right)>f)return null;var l=new db(t,r);return l.eA=i,l},db.bI=function(t,n,r){var i=bo(t);return i.width<ba||i.height<ax?null:i.width*i.height<cX?null: !r&&i.top>cG?null:db.aa(t)<ax?null:new db(t,n)},db.aa=function(t){var n=bo(t),r=n.height,i=t.getElementsByTagName("form"),s=i.length;for(var o=0;o<s;++o){var u=i[o],a=bo(u);a.width>n.width*aY&&(r-=a.height)}var f=t.querySelectorAll("ol, ul"),l=f.length,c=null;for(var o=0;o<l;++o){var h=f[o];if(c&&c.compareDocumentPosition(h)&dO)continue;var p=h.getElementsByTagName("li"),d=p.length,v=bo(h);if(!d){r-=v.height;continue}var m=v.height/d,g=getComputedStyle(p[0]),y=parseInt(g.lineHeight);if(isNaN(y)){var b=ag(g);y=b*dR}v.width>n.width*aY&&m/y<aU&&(r-=v.height,c=h)}return r},db.prototype={dF:function(){var t=0,n=this.ce,r=n.length;for(var i=0;i<r;++i)t+=this.cY(n[i]);return t},bu:function(){return al(this.element)},ab:function(){if(this.aS!==0)return;this.aS=aI(this.ce)},cW:function(){return this.dz||(this.dz=aq(this.element)),this.dz},cC:function(){return this.ab(),this.dc()*this.aS},dc:function(){return this.cB*this.bS},cq:function(){var t=0,n=this.element.querySelector(cU);n&&(t=n.clientWidth*n.clientHeight);var r=this.element.children,i=r.length;for(var s=0;s<i;++s){var o=r[s];aA(o)&&(t+=o.clientWidth*o.clientHeight)}var u=bo(this.element).width*bo(this.element).height,a=u*bM,f=bo(this.element).width*aQ,l=this.element.querySelectorAll("img, object, video"),c=l.length;for(var s=0;s<c;++s){var h=bo(l[s]);if(h.width>=f&&h.height>dr){var p=h.width*h.height;p<a&&(t+=p)}}var d=this.dc(),v=u-t,m=this.ce.length,g=0,y=0;for(var s=0;s<m;++s){var b=this.ce[s].parentNode;b&&(y+=ag(getComputedStyle(b)),g++)}var w=dv;return g&&(w=y/=g),this.ab(),d/v*1e3*(w/dv)*this.aS},cz:function(t){var n=[];if(!t)return n;var r={A:1,DD:1,DT:1,NOSCRIPT:1,OL:1,OPTION:1,PRE:1,SCRIPT:1,STYLE:1,TD:1,UL:1,IFRAME:1};var i=this.contentDocument,s=function(e){var t="text()|*/text()|*/a/text()|*/li/text()|*/span/text()|*/em/text()|*/i/text()|*/strong/text()|*/b/text()|*/font/text()|blockquote/*/text()|div[count(./p)=count(./*)]/p/text()";var s=i.evaluate(t,e,null,XPathResult.ORDERED_NODE_SNAPSHOT_TYPE,null),o=s.snapshotLength;for(var u=0;u<o;++u){var a=s.snapshotItem(u);if(r[a.parentNode.tagName]||a.bW||bm(a))continue;a.bW= !0,n.push(a)}};s(t);var o=t.aJ(),u=o.length;for(var a=0;a<u;++a){var f=o[a];s(f)}var l=n.length;for(var a=0;a<l;++a)delete n[a].bW;return n},ar:function(t){var n=this.ce.length;for(var r=0;r<n;++r)this.ce[r].cK= !0;var i=t.ce,s=i.length;for(var r=0;r<s;++r)i[r].cK||this.ce.push(i[r]);var n=this.ce.length;for(var r=0;r<n;++r)this.ce[r].cK=null;this.cB=this.dF()},cY:function(t){var n=20;if(!t)return 0;var r=t.length;if(r<n)return 0;var i=t.parentNode;if(!bG(i))return 0;var s=1;while(i&&i!==this.element)s-=.1,i=i.parentNode;return Math.pow(r*s,aB)},bF:function(){return this.cq()<dB? !0: !1},aG:function(){var t=this.element.getElementsByTagName("hr"),n=t.length,r=0,i=bo(this.element),s=i.width*.7;for(var o=0;o<n;++o)t[o].clientWidth>s&&r++;if(r){var u=i.height/r;if(u<bv)return!0}return!1},bK:function(){var t="(h1|h2|h3|h4|h5|h6|*/h1|*/h2|*/h3|*/h4|*/h5|*/h6)[a[@href]]",n=this.contentDocument.evaluate(t,this.element,null,XPathResult.ORDERED_NODE_SNAPSHOT_TYPE,null),r=n.snapshotLength;if(r>2){var i=0,s=bo(this.element),o=s.height*ai;for(var u=0;u<r;++u){var a=n.snapshotItem(u),f=bo(a);f.top-s.top>o&&s.bottom-f.bottom>o&&i++}var l=s.height/i;if(l<au)return!0}return!1},bC:function(t){function i(e){return! !{H1:1,H2:1,H3:1,H4:1,H5:1,H6:1}[e.tagName]};function s(e,t){if(!e|| !t)return!1;var n=1;return e.className?e.className===t.className:bp(e,n)===bp(t,n)};var n=/clearfix/i,r="h1, h2, h3, h4, h5, h6";var o=this.element;if(o.tagName==="LI"||o.tagName==="DD"){var u=o.parentNode,a=u.children.length;for(var f=0;f<a;++f){var l=u.children[f];if(l.tagName===o.tagName&&l.className===o.className&&l!==o)return!0}}var c=o.getAttribute("class");c||(o=o.parentElement,o&&(c=o.getAttribute("class"),c||(o=o.parentElement,o&&(c=o.getAttribute("class")))));if(c){t||(t=[]);var h=t.length;for(var f=0;f<h;++f)t[f].element.dq=t[f];var p;try{var d=c.split(" "),v="";for(var f=0;f<d.length;++f){if(n.test(d[f]))continue;d[f].length&&(v+="."+d[f])}p=this.contentDocument.querySelectorAll(v)}catch(m){p=[]}var g= !1,y=aq(o),b=p.length;for(var f=0;f<b;++f){var l=p[f];if(l===o)continue;if(l.parentElement===o||o.parentElement===l)continue;if(!bG(l))continue;var w=l.dq;if(!w){w=new db(l,this.contentDocument);if(!w)continue}if(w.dc()*cN>this.dc()){if(!g&&bo(l).bottom<bo(this.element).top){g= !0;continue}if(s(o.previousElementSibling,l.previousElementSibling)||s(o.nextElementSibling,l.nextElementSibling)){var E=o.querySelector(r),S=l.querySelector(r);if(E&&S&&bJ(E,S))return!0;E=o.previousElementSibling,S=l.previousElementSibling;if(E&&S&&i(E)&&i(S)&&bJ(E,S))return!0}if(aq(l)===y)while(l.parentElement&&o.parentElement){if(l.parentElement===o.parentElement)break;l=l.parentElement,o=o.parentElement}while(o.childElementCount<=1){if(!o.childElementCount|| !l.childElementCount)return!1;if(l.childElementCount>1)return!1;if(o.firstElementChild.tagName!==l.firstElementChild.tagName)return!1;o=o.firstElementChild,l=l.firstElementChild}if(l.childElementCount<=1)return!1;var S=l.firstElementChild,x=l.lastElementChild,E=o.firstElementChild,T=o.lastElementChild;if(S.tagName!==E.tagName)return!1;if(x.tagName!==T.tagName)return!1;var N=S.className,C=x.className,k=E.className,L=x.className,A=L===k?2:1;if(N.length||k.length){if(!N.length|| !k.length)return!1;if(N===k&&o.querySelectorAll("."+k.replace(/\s+/,".")).length<=A)return!0}if(C.length||L.length){if(!C.length|| !L.length)return!1;if(C===L&&o.querySelectorAll("."+L.replace(/\s+/,".")).length<=A)return!0}var O=E.clientHeight,M=T.clientHeight;return!O|| !S.clientHeight? !1: !M|| !x.clientHeight? !1:O===S.clientHeight||M===x.clientHeight? !0: !1}}for(var f=0;f<h;++f)t[f].element.dq=null}return!1},cP:function(){function n(e){var t=e.pathname.substring(1).split("/");return t[t.length-1]||t.pop(),t};var t=5;var r=this.element,i=this.contentDocument.location,s=n(i),o=s.length,u=[],a=r.getElementsByTagName("a"),f=a.length;for(var l=0;l<f;l++){var c=a[l];if(i.host!==c.host)continue;if(n(c).length<=o)continue;if((c.host+c.pathname).indexOf(i.host+i.pathname)!==0)continue;if(an(c))continue;u.push(c);if(u.length<t)continue;var h=r.offsetTop+r.offsetHeight/t;return u[0].offsetTop<h}return!1}},String.prototype.fm=function(){var t=/[0-9]+/g;var n=this.match(t);return n?parseInt(n[n.length-1]):NaN},String.prototype.dM=function(e){var t= !1,n=e.length;for(var r=0;r<n;++r)if(this.indexOf(e.charAt(r))!== -1){t= !0;break}if(!t)return this;var i="",s=this.length;for(var r=0;r<s;++r)e.indexOf(this.charAt(r))!== -1&&(i+="\\"),i+=this.charAt(r);return i},String.prototype.eD=function(){return this.dM("^[]{}()\\.$*+?|")},top.Element.prototype.aJ=function(){var e=this.children;if(!e)return[];var t=e.length;if(!t)return[];var n={};for(var r=0;r<t;++r){var i=e[r];if(bw[i.tagName]|| !i.className)continue;var s=i.classList,o=s.length;for(var u=0;u<o;++u){var a=s[u],f=n[a];f?f.push(i):n[a]=[i]}}var l=Math.floor(t/2);for(var a in n){var f=n[a];if(f.length>l)return f}return[]},bf=function(e){this.contentDocument=e,this.ay= !1,this.article=null,this.cs= !1,this.ez=null,this.eP=null,this.cR=0,this.cV=0,this.bc=[],this.bO=null,this.dC=1,this.dk=null,this.bb=[],this.af=[]},bf.prototype={df:function(){return this.cF()?this.cE()? !0:(this.dw(),this.article=this.as(),this.article&&this.cb(),! !this.article):null},aR:function(){var e=/(.*page.*)(\d{1,2})(.*)/i,t=3;var n=[],r=this.articleNode(),i,s=0;for(;;){i=e.exec(r.getAttribute("id"));if(i)break;r=r.parentElement;if(!r||s++ ===t)return[]}var o=aW(r),u=o.length;for(var a=0;a<u;++a){var f=o[a];if(f===r)continue;var l=e.exec(f.getAttribute("id"));if(!l||l[1]!==i[1]||l[3]!==i[3])continue;if(bG(f)&& !bn(f))continue;n.push(f)}return n},ak:function(){return this.aR().map(function(e){return this.cp(e,e.cloneNode(!0),!1)},this)},bB:function(t){return t? !(t.toLowerCase()in di): !1},aN:function(t){return t.tagName==="SCRIPT"||t.tagName==="LINK"||t.tagName==="STYLE"? !0:t.tagName!=="TR"? !1:t.offsetHeight? !1: !0},ff:function(){var t=[],n=this.articleNode();while(n){var r={};r.tagName=n.tagName;var i=n.getAttribute("id");i&&(r.id=i),this.bB(n.className)&&(r.className=n.className),r.index=1;for(var s=n.previousElementSibling;s;s=s.previousElementSibling)this.aN(s)||r.index++;t.unshift(r),n=n.parentElement}return t},cL:function(t){if(!this.article)return;var n=this.article.element;while(n=n.parentElement)if(ae.test(n.className)){this.article.element=n;return}n=this.article.element;if(n.getAttribute("id")|| !n.className)return;var r=n.tagName,i=n.className,s=n.parentElement,o=s.children;for(var u=0,a=o.length;u<a;++u){var f=o[u];if(f===n)continue;if(f.tagName!==r||f.className!==i)continue;var l=db.bI(f,this.contentDocument,!0);if(!l||l.cC()<ds)continue;this.article.element=s;return}},articleNode:function(t){return this.ay||(this.article||(this.article=this.bU()),this.article||(this.article=this.as()),!this.article&&t&&(this.article=this.bU(!0)),this.ay= !0,this.article&&this.cb()),this.cL(),this.article?this.article.element:null},ek:function(){return null},dw:function(){this.cR=window.scrollY,this.cV=window.scrollX},es:function(){return this.bO?this.bO:(this.bO=bL(this.contentDocument,this.articleNode()),this.bO||(this.bO=getComputedStyle(this.articleNode())),this.bO)},cZ:function(t,n){var r=0,i=t.textContent,s= -1;while(r<n&&(s=i.indexOf(",",s+1))>=0)r++;return r<n},dA:function(t){var n=bd(t.textContent).length;if(!n)return 0;var r=t.getElementsByTagName("a"),i=0,s=r.length;for(var o=0;o<s;++o)i+=bd(r[o].textContent).length;return i/n},dn:function(t,n){var r=.33,i=.5,s=.2,o=25,u=4e4,a=/youtube|vimeo|dailymotion/;if(!t.parentElement)return!1;if(t.tagName==="IFRAME")return!a.test(aK(t.src,this.contentDocument).hostname);if(t.tagName!=="OBJECT"&&t.tagName!=="EMBED"&&t.tagName!=="CANVAS"){var f= !1,l=t.childNodes.length;for(var c=0;c<l;++c){var h=t.childNodes[c],p=h.nodeType;if(p===Node.ELEMENT_NODE||p===Node.TEXT_NODE&& !bm(h)){f= !0;break}}if(!f){if(t.tagName==="P"){var d=t.previousSibling,v=t.nextSibling;if(d&&d.nodeType===Node.TEXT_NODE&& !bm(d)&&v&&v.nodeType===Node.TEXT_NODE&& !bm(v))return!1}return!0}if(t.tagName==="P")return!1}if(t.tagName==="CANVAS")return t.parentNode.tagName==="CUFON";var m=0;if(n){if(dJ.test(n.className))return!0;var g=n.className,y=n.getAttribute("id");bY.test(g)&&m++,bY.test(y)&&m++,cf.test(g)&&m--,cf.test(y)&&m--}if(m<0)return!0;if(t.tagName==="UL")return n.querySelector("iframe")&&n.querySelector("script")? !0: !1;if(t.tagName==="OBJECT"){var b=t.querySelector("embed[src]"),w=b?aK(b.src,this.contentDocument):null;if(w&&a.test(w.hostname))return!1;var E=t.getAttribute("data");return w=E?aK(E,this.contentDocument):null,w&&a.test(w.hostname)? !1: !0}if(t.childElementCount===1){var S=t.firstElementChild;if(S.tagName==="A")return!1;if(S.tagName==="SPAN"&&S.className==="converted-anchor"&&aP(S,"TABLE"))return!1}var x=t.getElementsByTagName("img"),T=x.length;if(T){var N=0;for(var c=0;c<T;++c){var C=x[c].bX;if(!bG(C))continue;var k=bo(C);N+=k.width/T*(k.height/T)}if(N>u)return!1}if(!this.cZ(t,10))return!1;var L=t.getElementsByTagName("p").length,A=t.getElementsByTagName("br").length,O=L+Math.floor(A/2);if(T>O)return!0;if(t.getElementsByTagName("li").length>O)return!0;if(t.getElementsByTagName("input").length/O>r)return!0;if(t.textContent.length<o&&T!==1)return!0;if(t.querySelector("embed"))return!0;var M=this.dA(t);if(m>=1&&M>i)return!0;if(m<1&&M>s)return!0;if(t.tagName==="TABLE"){var _=bd(t.innerText).length,D=bd(n.innerText).length;if(_<=D*.5)return!0}return!1},dh:function(t,n){var r=0,i=t.textContent,s= -1;while((s=i.indexOf(" ",s+1))>=0&&r<n)r++;return r<n},cT:function(t){return!this.article|| !t? !1:t.getBoundingClientRect().width>=this.article.element.getBoundingClientRect().width-bD},eJ:function(t){var n=this.contentDocument.createElement("div");return t&&(n.innerHTML=t.innerHTML),n},ci:function(t){var n={AREA:1,BR:1,CANVAS:1,EMBED:1,FRAME:1,HR:1,IMG:1,INPUT:1},r=120;if(window.scrollY<r)return null;var i=bo(t),s=t.ownerDocument.elementFromPoint((i.left+i.right)/2,0);s&&s.tagName in n&&(s=s.parentElement);var o=s;while(o&&o!==t)o=o.parentNode;return o?s:null},dj:function(e){var t=e.children,n=t.length,r={};for(var i=0;i<n;++i){var s=t[i];if(!bG(s))continue;var o=av(s);r[o]?r[o]+=1:r[o]=1}var u=ad(r);switch(u.length){case 0:return null;case 1:return u[0].key;default:var a=u[0];return a.value>u[1].value?a.key:null}},cp:function(t,n,r){function S(e){f+=e,l&&(l+=e),c&&(c+=e),h&&(h+=e),p&&(p+=e)};function x(){l===1&&(l=0),c===1&&(c=0),h===1&&(h=0),p===1&&(p=0)};function T(){var e=.8;var n=bo(t);if(n.width===0||n.height===0)return!0;var r=t.aJ(),i=r.length,s;if(i){s=[];for(var o=0;o<i;++o){var u=r[o];if(getComputedStyle(u).float==="none"){var a=u.children,f=a.length;for(var l=0;l<f;++l)s.push(a[l])}else s.push(u)}}else s=t.children;var c=s.length,h=0;for(var o=0;o<c;++o){var p=s[o];getComputedStyle(p).float!=="none"&&(h+=p.innerText.length)}var d=t.innerText.length,v=h/d;return v>e};function N(e){var n=50;if(bo(e).height>n)return!1;var r={UL:1,LI:1,NAV:1};return r[e.tagName]? !0:e.parentElement===t&& !e.nextElementSibling? !0: !1};var i={FORM:1,SCRIPT:1,STYLE:1,LINK:1},s={DIV:1,TABLE:1,OBJECT:1,UL:1,CANVAS:1,P:1,IFRAME:1,ASIDE:1},o={I:1,EM:1},u={B:1,STRONG:1,H1:1,H2:1,H3:1,H4:1,H5:1,H6:1};var a=[],f=0,l=0,c=0,h=0,p=0,d=t,v=d.ownerDocument.defaultView,m=n,g=this.dK(),y=this.cS,b=this.ci(t),w=null,E=bG(t),C=this.dj(t),k=T(),L=new Set;this.af.forEach(function(e){L.add(e)});while(d){var O=null,M=m.tagName;m.bX=d,d===b&&(w=m),M in i&&(O=m),!O&&d===y&&(O=m);if(!O&&(M==="H1"||M==="H2")){var _=d.offsetTop-t.offsetTop;if(_<az){var D=bz(d),P=D.length*ac;aE(g,D)<=P&&(O=m)}}var H;O||(H=getComputedStyle(d));if(!O&&M==="DIV"&&m.parentNode){var B=d.querySelectorAll("a, blockquote, dl, div, img, ol, p, pre, table, ul"),j=l||H["float"]!=="none";if(!j&& !B.length){var F=m.parentNode,I=this.contentDocument.createElement("p");while(m.firstChild){var q=m.firstChild;I.appendChild(q)}F.replaceChild(I,m),w===m&&(w=I),m=I,m.bX=d,M=m.tagName}}!O&&m.parentNode&&M in s&&a.push(m);if(!O){if(E){var R=H.display==="none"||H.visibility!=="visible";if(R){var U=C?f===1&&av(d)===C: !1;U||(O=m)}}bn(d)?O=m:d!==t&& !l&&H["float"]!=="none"&& !k&&(bo(d).height>=cI||d.childElementCount>1)&&(l=1)}if(!O){var z=m.attributes;for(var W=0;W<z.length;++W){var X=z[W].nodeName;dg.test(X)&&(m.removeAttribute(X),W--)}H.clear==="both"&&m.classList.add("clear");if((M==="UL"||M==="OL")&&H["list-style-type"]==="none"&&H["background-image"]==="none"){var V=d.children,$=V.length,J= !0;for(var W=0;W<$;++W){var K=getComputedStyle(V[W]);if(K["list-style-type"]!=="none"||parseInt(K["-webkit-padding-start"])!==0){J= !1;break}}J&&m.classList.add("list-style-type-none")}!h&&H.fontStyle!=="normal"&&(M in o||(m.style.fontStyle=H.fontStyle),h=1),!p&&H.fontWeight!=="normal"&&(M in u||(m.style.fontWeight=H.fontWeight),p=1);if(l){l===1&&(bo(d).width<=cJ?m.setAttribute("class","auxiliary float "+H["float"]):m.classList.add("auxiliary"));var Q=d.style.getPropertyValue("width");if(Q)m.style.width=Q;else{var G=v.ei(d,"",!0);if(G){var Y=G.length;for(var W=Y-1;W>=0;--W){Q=G[W].style.getPropertyValue("width");if(Q){m.style.width=Q;break}}}}l===1&& !Q&&(m.style.width=bo(d).width+"px");var Z=m.parentNode===n?36:12,et=m.style.width;et&&parseInt(et)>=screen.width-Z&&m.setAttribute("class","large-element")}if(M==="TABLE")c||(c=1);else if(M==="VIDEO"){var tt=bo(d);var nt=36;tt.width>screen.width-nt&&m.setAttribute("class","large-element")}else if(M==="IMG"){var rt= !1;if(m.naturalWidth===1&&m.naturalHeight===1){var it=z.length;for(var W=0;W<it;++W){var X=z[W].nodeName;if(dN[X.toLowerCase()]){m.setAttribute("src",m.getAttribute(X)),rt= !0;break}}}m.removeAttribute("border"),m.removeAttribute("hspace"),m.removeAttribute("vspace");var st=m.getAttribute("align");m.removeAttribute("align");if(st==="left"||st==="right")m.classList.add("float"),m.classList.add(st);if(!l&& !rt){var ot=bo(d),ut=ot.width,at=ot.height;ut===1&&at===1?O=m:ut<bZ&&at<bZ&&m.setAttribute("class","reader-image-tiny")}}else if(M==="FONT")m.removeAttribute("size"),m.removeAttribute("face"),m.removeAttribute("color");else if(M==="A"&&m.parentNode){var ft=m.getAttribute("href");if(ft&&ft.length&&(ft[0]==="#"||ft.substring(0,11)==="javascript:")){if(!c&& !m.childElementCount&&m.parentElement.childElementCount===1&&m.parentElement.tagName!=="LI"){var lt=this.contentDocument.evaluate("text()",m.parentElement,null,XPathResult.ORDERED_NODE_SNAPSHOT_TYPE,null);lt.snapshotLength||(O=m)}if(!O){var I=this.contentDocument.createElement("span");if(m.childElementCount===1&&m.firstElementChild.tagName==="IMG"){var ct=m.firstElementChild;ct.width>cg&&ct.height>dQ&&I.setAttribute("class","converted-image-anchor")}I.className||I.setAttribute("class","converted-anchor");while(m.firstChild)I.appendChild(m.firstChild);m.parentNode.replaceChild(I,m),m=I,w===m&&(w=I)}}}}!O&&aA(d)&&(O=m);if(!O&&M==="A"&&L.has(d.href)){var ht=d,pt=m,dt,vt;while((ht=ht.parentElement)&&(pt=pt.parentElement)){var mt=10;if(bo(ht).top-bo(d).top>mt)break;if(ht===t)break;N(ht)&&(dt=ht,vt=pt)}dt&&(O=vt,d=dt,m=vt,m.bX=d,M=m.tagName),ht=null,pt=null,dt=null,vt=null}var gt=O?null:d.firstElementChild;if(gt)d=gt,m=m.firstElementChild,S(1);else{var yt;while(d!==t&& !(yt=d.nextElementSibling))d=d.parentElement,m=m.parentElement,S(-1);if(d===t){if(O)if(O.parentElement)O.remove();else if(r)return null;break}d=yt,m=m.nextElementSibling,x()}if(O)if(O.parentElement)O.remove();else if(r)return null}for(var W=a.length-1;W>=0;--W){var bt=a[W];bt.parentNode&&this.dn(bt,bt.bX)&&(w===bt&&((w=bt.nextElementSibling)||(w=bt.parentElement)),bt.remove())}var wt=n.querySelectorAll(".float");for(var W=0;W<wt.length;++W){var Et= !1,St=wt[W];if(!Et){var xt=St.querySelectorAll("a, span.converted-image-anchor"),Tt=St.querySelectorAll("span.converted-anchor");Et=St.parentNode&&Tt.length>xt.length}if(!Et){var Nt=St.querySelectorAll("embed, object").length,Ct=St.bX.querySelectorAll("embed, object").length;!Nt&&Ct&&(Et= !0)}if(!Et){var kt=St.bX.getElementsByTagName("img"),Lt=kt.length,At=0;for(var Ot=0;Ot<Lt;++Ot){E&&bG(kt[Ot])&&At++;if(At>1)break}if(At===1){var Mt=St.getElementsByTagName("img").length;Mt||(Et= !0)}}Et&&(w===St&&((w=St.nextElementSibling)||(w=St.parentElement)),St.remove())}if(r&& !bd(n.innerText).length)return null;if(w){var _t=document.createElement("div"),Dt=w.bX.getBoundingClientRect(),Pt=Dt.height>0?Dt.top*100/Dt.height:0;_t.style.position="relative",_t.style.top=Math.round(-Pt)+"%",_t.setAttribute("id","safari-reader-element-marker"),w.insertBefore(_t,w.firstChild)}return n},dK:function(){return ''},cb:function(){if(!this.co){var t=getComputedStyle(this.article.element);this.co=t?t.direction==="ltr": !0}return this.co},dH:function(){var t=this.cu;if(!t|| !t.length)return null;var n,r;for(r=t.length-1;r>=0;--r)if(t[r].id){n=this.contentDocument.getElementById(t[r].id);if(n)break}r++,n||(n=this.contentDocument);while(r<t.length){var i=t[r],s=n.nodeType===Node.DOCUMENT_NODE?n.documentElement:n.firstElementChild;for(var o=1;s&&o<i.index;s=s.nextElementSibling)this.aN(s)||o++;if(!s)return null;if(s.tagName!==i.tagName)return null;if(i.className&&s.className!==i.className)return null;n=s,r++}return bG(n)?new db(n,this.contentDocument):null},cF:function(){var e=this.contentDocument.location.hostname,t=this.contentDocument.location.pathname;for(var n in bi){var r=new RegExp(n.eD());if(!r.test(e))continue;var i=bi[n];return i instanceof RegExp?i.test(t): !1}return!0},bU:function(t){var n=this.dH(),r=this.cO();if(!r|| !r.length)return n;if(n&&n.dc()>=ds)return n;var i=this.aX(r);for(var s=i.element;s!==this.contentDocument;s=s.parentNode)if(s.tagName==="BLOCKQUOTE"){var o=s.parentNode,u=r.length;for(var a=0;a<u;++a){var f=r[a];if(f.element===o){i=f;break}}break}if(n&&i.cC()<ds)return n;if(!t){if(i.bF())return null;if(i.aG())return null;if(i.bK())return null;if(i.bC(r))return null}return i},aX:function(t){var n=0,r=null,i=t.length;for(var s=0;s<i;++s){var o=t[s],u=o.dc();u>=n&&(n=u,r=o)}return r},bQ:function(t){function n(e,t){return e.dc()!==t.dc()?t.dc()-e.dc():t.cW()-e.cW()};return t.sort(n)},cO:function(){var t=1e3;var n=Date.now()+t,r=this.contentDocument.getElementsByTagName("*"),i=r.length,s=[];for(var o=0;o<i;++o){var u=r[o];if(bw[u.tagName])continue;var a=db.bI(u,this.contentDocument);a&&s.push(a);if(Date.now()>n){s=[];break}}var f=s.length;for(var o=0;o<f;++o)s[o].element.dq=s[o];for(var o=0;o<f;++o){var l=s[o];if(l.element.tagName!=="BLOCKQUOTE")continue;var c=l.element.parentElement.dq;if(!c)continue;c.ar(l)}for(var o=0;o<f;++o)s[o].element.dq=null;return s},bq:function(t){function o(e,t){function u(t){var n=e.children[0];if(n){var r=n.children,i=r.length;for(var s=0;s<i;++s)if(getComputedStyle(r[s]).float!=="none")return!1}return!0};function a(e,i){if(e.nodeType===Node.TEXT_NODE){/\S/.test(e.nodeValue)&&r.push(e);return}if(e.nodeType!==Node.ELEMENT_NODE)return;if(!bG(e))return;if(t&& ++n>t)return;if(e.bV)return;var f=e.tagName;if(f==="IFRAME"||f==="FORM")return;o[f]?i-- :(f==="UL"||f==="OL")&&u(e)&&i--;var l=i+1;if(l<s){var c=e.childNodes,h=c.length;for(var p=0;p<h;++p)a(c[p],l)}};var n=0,r=[],o={P:1,STRONG:1,B:1,EM:1,I:1,SPAN:1};return i&&(o.CENTER=1,o.FONT=1),a(e,0),r};var n=110,r=1800;var i=t.tagName==="BODY",s=i?2:3,u=o(t,n),a=r/al(t)/aI(u),f={},l=u.length;for(var c=0;c<l;++c){var h=u[c],p=h.length,d=h.parentElement,v=window.getComputedStyle(d),m=v.fontFamily+"|"+v.fontSize,g=Math.pow(p,aB);if(f[m]){if((f[m]+=g)>a)break}else f[m]=g}for(var m in f)if(f[m]>a)return!0;return!1},cA:function(){var t=window.innerWidth,n=t/4,r=t/2,i=128,s=320;return[[r,800],[r,600],[n,800],[r,400],[r-i,1200],[s,700],[3*n,800],[t-s,700]]},cQ:function(){var t=this.bb.length;for(var n=0;n<t;++n)delete this.bb[n].bV;this.bb=[]},as:function(){this.cQ();var t=this.cA(),n=t.length;for(var r=0;r<n;r++){var i=t[r][0],s=t[r][1],o=aj(i,s);for(var u=o;u;u=u.parentElement){if(u.bV)break;if(ae.test(u.className))return new db(u,this.contentDocument);if(bw[u.tagName])continue;var a=u.offsetWidth,f=u.offsetHeight;if(!a&& !f){var l=bo(u);a=l.width,f=l.height}if(a<ba||f<ax||a*f<cX)continue;var c=this.bq(u);u.bV= !0,this.bb.push(u);if(!c)continue;if(db.aa(u)<ax)continue;var h=new db(u,this.contentDocument);if(h.bC())return null;if(h.aG())return null;if(h.bK())return null;if(h.cP())continue;return h}}return null}};var aF=new bf(top.document);var article=aF.articleNode();return article;})();

        var articleSubTitle = [];
        var topThreeLength = [
            {position: 1000, dataLength: 2, obj: {}},
            {position: 2000, dataLength: 1, obj: {}},
            {position: 3000, dataLength: 0, obj: {}}
        ];
        var minPosition = 1;

        initClass();

        function initClass() {
            if (isSpanExist() === true) {
                log(extraOptions.inreadSpanID+' SPAN found in page, skip auto generation.');
                return onCompleted(true);
            }

            if (articleLocator === null) {
                log('No node was found.');
                return onCompleted(false);
            }

            var isInserted = insertSpan();

            onCompleted(isInserted);
        };
        function insertSpan() {
            var spanEl = spanCreation();
            var isSpanInserted = insertByAdvenue(spanEl);

            if (isSpanInserted === true) {
                return isSpanInserted;
            }
            log('Insert SPAN tag with Advenue method failed.');

            appsplorationPreparation();
            isSpanInserted = insertByAppsploration(spanEl);

            if (isSpanInserted === false) {
                log('Insert SPAN tag with Appsploration method failed.');
            }

            return isSpanInserted;
        }

        function isSpanExist() {
            if (curDoc.getElementById(extraOptions.inreadSpanID) !== null) {
                return true;
            }
            return false;
        };

        function insertByAdvenue(ad_slot) {
            var isInserted = false;
            var post_paragraph_count = 2; //insert after which paragraph
            var min_character_count = 100; //minimum character count as paragraph

            if (articleLocator.hasChildNodes()) {
                var childNodes = articleLocator.childNodes, excludes = "br,h1,h2,h3,h4,h5,h6", possible_candidate=0;
                var previousNode = null;
                for (var inode = 0; inode < childNodes.length; inode++) {
                    var currentNode = childNodes[inode];
                    if(currentNode.nodeType === curDoc.ELEMENT_NODE && (excludes + ",").indexOf(currentNode.nodeName.toLowerCase() + ",") === -1) {
                        if(currentNode.innerHTML.replace(/<[^>]*>/g, "").length > min_character_count){
                            if(possible_candidate > (post_paragraph_count-1)){
                                articleLocator.insertBefore(ad_slot, currentNode);
                                isInserted = true;
                                log('SPAN inserted using Advenue method.');
                                break;
                            }
                            possible_candidate++;
                        }
                    }else if(currentNode.nodeType === curDoc.TEXT_NODE){
                        if(currentNode.textContent.length > min_character_count){
                            if(possible_candidate > (post_paragraph_count-1)){
                                if(inode-1 >= 0 && childNodes[(inode-1)].nodeName.toLowerCase() == "br"){
                                    if(inode-2 >= 0 && childNodes[(inode-2)].nodeName.toLowerCase() == "br"){
                                        articleLocator.insertBefore(ad_slot, childNodes[(inode-2)]);
                                        isInserted = true;
                                        break;
                                    }
                                }
                                articleLocator.insertBefore(ad_slot, currentNode);
                                isInserted = true;
                                log('SPAN inserted using Advenue method.');
                                break;
                            }
                            possible_candidate++;
                        }
                    }
                    if(inode > 0){
                        previousNode = currentNode;
                    }
                }
            }

            return isInserted;
        };
        function insertByAppsploration(spanEl) {
            var isSpanInserted = false;
            var suitablePosition = topThreeLength[findTopPosition()].position;
            var mostSuitableObj = topThreeLength[findTopPosition()].obj;

            if (suitablePosition < 1000) {
                articleLocator.insertBefore(spanEl, mostSuitableObj.nextSibling);
                isSpanInserted = true;

                log('SPAN tag was append after element number - ' + topThreeLength[findTopPosition()].position + ' <' + mostSuitableObj.nodeName + '>');
            }

            return isSpanInserted;
        };

        function appsplorationPreparation() {
            for (var i = 0; i < articleLocator.childElementCount; i++) {
                switch (articleLocator.childNodes[i].nodeName.toLowerCase()) {
                    // Ingore condition.
                    case '#text':
                    case 'br':
                        break;
                    // Title or sub-title.
                    case 'h1':
                    case 'h2':
                    case 'h3':
                    case 'h4':
                    case 'h5':
                    case 'h6':
                        articleSubTitle.push(articleLocator.childNodes[i]);
                        break;
                    default:
                        findTopLength(i, articleLocator.childNodes[i]);
                        break;
                }
            }
        };
        function findTopLength(nodeIndex, curNode) {
            if (nodeIndex < minPosition) {
                return;
            }

            if (curNode.textContent.length > topThreeLength[0].dataLength) {
                replaceTop1(nodeIndex, curNode);
            }
            else if (curNode.textContent.length > topThreeLength[1].dataLength) {
                replaceTop2(nodeIndex, curNode);
            }
            else if (curNode.textContent.length > topThreeLength[2].dataLength) {
                replaceTop3(nodeIndex, curNode);
            }
        };
        function replaceTop1(dataIndex, dataObj) {
            topThreeLength[2].dataLength = topThreeLength[1].dataLength;
            topThreeLength[2].position = topThreeLength[1].position;
            topThreeLength[2].obj = topThreeLength[1].obj;

            topThreeLength[1].dataLength = topThreeLength[0].dataLength;
            topThreeLength[1].position = topThreeLength[0].position;
            topThreeLength[1].obj = topThreeLength[0].obj;

            topThreeLength[0].dataLength = dataObj.textContent.length;
            topThreeLength[0].position = dataIndex;
            topThreeLength[0].obj = dataObj;
        };
        function replaceTop2(dataIndex, dataObj) {
            topThreeLength[2].dataLength = topThreeLength[1].dataLength;
            topThreeLength[2].position = topThreeLength[1].position;
            topThreeLength[2].obj = topThreeLength[1].obj;

            topThreeLength[1].dataLength = dataObj.textContent.length;
            topThreeLength[1].position = dataIndex;
            topThreeLength[1].obj = dataObj;
        };
        function replaceTop3(dataIndex, dataObj) {
            topThreeLength[2].dataLength = dataObj.textContent.length;
            topThreeLength[2].position = dataIndex;
            topThreeLength[2].obj = dataObj;
        };
        function findTopPosition() {
            var topPosition = 1000;
            var suitableIndex = 0;
            for (var i = 0; i < topThreeLength.length; i++) {
                if (topThreeLength[i].position < topPosition) {
                    topPosition = topThreeLength[i].position;
                    suitableIndex = i;
                }
            }

            return suitableIndex;
        };

        function spanCreation() {
            var spanEl = curDoc.createElement('span');
            spanEl.id = extraOptions.inreadSpanID;

            return spanEl;
        };
        function onCompleted(isSuccess) {
            if (typeof(callback) === 'function') {
                callback(isSuccess);
            }
        };
    };


    function InnityAppsInlineElPlacement(onCompleted) {
        var innityEl = null;

        initClass();

        function initClass() {
            if (iframeBreaker.isInsideIframe() === true) {
                getByIframe();
            }
            else {
                getByScript();
            }

            innityEl.parentNode.insertBefore(spanCreation(), innityEl);

            if (typeof(onCompleted) === 'function') {
                onCompleted(true);
            }
        };

        function getByIframe() {
            var allIframes = [];

            allIframes = parent.document.getElementsByTagName('iframe');

            for (var i = 0; i < allIframes.length; i++) {
                try {
                    if (allIframes[i].contentWindow === window || allIframes[i].contentDocument === document) {
                        innityEl = allIframes[i];
                        break;
                    }
                }
                catch(e) {}
            }
        };
        function getByScript() {
            if (typeof(extraOptions.currentScript) === 'function') {
                innityEl = extraOptions.currentScript();
            }
            else {
                innityEl = extraOptions.currentScript;
            }
        };

        function spanCreation() {
            var spanEl = curDoc.createElement('span');
            spanEl.id = 'innity-follow-script-mobile-scroll-post';

            return spanEl;
        };
    };

    function InnityAppsCustomPub() {
        this.runCustomAfterProxyLoaded = runCustomAfterProxyLoaded;
        this.runCustomRevealHandlerFormula = runCustomRevealHandlerFormula;
        this.runCustomContainerHeight = runCustomContainerHeight;

        function runCustomAfterProxyLoaded() {
            if (extraOptions.appledaily === true) {
                proxyLoadedAppleDaily();
            }

            if (extraOptions.jusky === true) {
                proxyLoadedJusky();
            }

            if (extraOptions.nextmag === true) {
                proxyLoadedNextMag();
            }

            if (extraOptions.sph === true) {
                proxyLoadedSPH();
            }

            if (extraOptions.udn === true) {
                proxyLoadedUDN();
            }
        };
        function runCustomRevealHandlerFormula() {
            if (extraOptions.sph === true) {
                return customRevealSPH();
            }

            if (extraOptions.oppa === true) {
                return customRevealOppa();
            }
        };
        function runCustomContainerHeight() {
            if (extraOptions.oppa === true) {
                return screen.width * 416 / 320;
            }

            // Default container height.
            return screen.height;
        }

        function proxyLoadedAppleDaily() {
            var uiWraps = curDoc.getElementsByClassName('ui-panel-content-wrap');
            if (uiWraps.length === 0) {
                return;
            }

            var pubEl = uiWraps[0];
            pubEl.style.transform = 'none';
            pubEl.style.webkitTransform = 'none';

            var zIndex = 900;
            new logoZIndex(zIndex);
            new adZIndex(zIndex);

            function logoZIndex(customZIndex) {
                var logos = curDoc.getElementsByClassName('innity-apps-innity-logo-container');
                if (logos.length === 0) {
                    return;
                }

                var innityLogoEl = logos[0];
                innityLogoEl.style.zIndex = customZIndex;
            };
            function adZIndex(customZIndex) {
                var adContainers = curDoc.getElementsByClassName('innity-apps-underlay-ad');
                if (adContainers.length === 0) {
                    return;
                }

                var adContainer = adContainers[0];
                adContainer.style.zIndex = customZIndex;

                var fixedEls = curDoc.getElementsByClassName('innity-apps-underlay-fixed');
                if (fixedEls.length === 0) {
                    return;
                }

                var fixedEl = fixedEls[0];
                fixedEl.style.zIndex = customZIndex;
            };
        };

        function proxyLoadedJusky() {
            var zIndex = 2;
            new logoZIndex(zIndex);
            new adZIndex(zIndex);

            function logoZIndex(customZIndex) {
                var logos = curDoc.getElementsByClassName('innity-apps-innity-logo-container');
                if (logos.length === 0) {
                    return;
                }

                var innityLogoEl = logos[0];
                innityLogoEl.style.zIndex = customZIndex;
            };
            function adZIndex(customZIndex) {
                var adContainers = curDoc.getElementsByClassName('innity-apps-underlay-ad');
                if (adContainers.length === 0) {
                    return;
                }

                var adContainer = adContainers[0];
                adContainer.style.zIndex = customZIndex;

                var fixedEls = curDoc.getElementsByClassName('innity-apps-underlay-fixed');
                if (fixedEls.length === 0) {
                    return;
                }

                var fixedEl = fixedEls[0];
                fixedEl.style.zIndex = customZIndex;
            };
        };

        function proxyLoadedNextMag() {
            var articleEls = curDoc.getElementsByTagName('article');
            for (var $i = 0; $i < articleEls.length; $i++) {
                articleEls[$i].style.overflow = 'initial';
            }

            var zIndex = 900;
            new logoZIndexAndLineHeight(zIndex);
            new adZIndex(zIndex);

            function logoZIndexAndLineHeight(customZIndex) {
                var logos = curDoc.getElementsByClassName('innity-apps-innity-logo-container');
                if (logos.length === 0) {
                    return;
                }

                var innityLogoEl = logos[0];
                innityLogoEl.style.zIndex = customZIndex;
                innityLogoEl.style.lineHeight = '13.7143px';
            };
            function adZIndex(customZIndex) {
                var adContainers = curDoc.getElementsByClassName('innity-apps-underlay-ad');
                if (adContainers.length === 0) {
                    return;
                }

                var adContainer = adContainers[0];
                adContainer.style.zIndex = customZIndex;

                var fixedEls = curDoc.getElementsByClassName('innity-apps-underlay-fixed');
                if (fixedEls.length === 0) {
                    return;
                }

                var fixedEl = fixedEls[0];
                fixedEl.style.zIndex = customZIndex;
            };
        };

        function proxyLoadedSPH() {
            var innityLogoEls = curDoc.getElementsByClassName('innity-apps-innity-logo-container');
            for (var i = 0; i < innityLogoEls.length; i++) {
                innityLogoEls[i].style.display = 'none';
            }

            new customTopLabel();
            new customBottomLabel();

            function customTopLabel() {
                var labelEl = curDoc.createElement('div');
                labelEl.innerHTML = 'ADVERTISEMENT';
                labelEl.style.setProperty('width', '100%', 'important');
                labelEl.style.setProperty('position', 'absolute', 'important');
                labelEl.style.setProperty('color', 'white', 'important');
                labelEl.style.setProperty('font-size', '0.7em', 'important');
                labelEl.style.setProperty('z-index', '5', 'important');
                labelEl.style.setProperty('text-align', 'center', 'important');
                labelEl.style.setProperty('background-color', '#000000', 'important');

                inlineAdSpaceEl.appendChild(labelEl);
            };
            function customBottomLabel() {
                var labelEl = curDoc.createElement('div');
                labelEl.innerHTML = 'SCROLL TO CONTINUE WITH CONTENT';
                labelEl.style.setProperty('width', '100%', 'important');
                labelEl.style.setProperty('position', 'absolute', 'important');
                labelEl.style.setProperty('bottom', '0', 'important');
                labelEl.style.setProperty('color', 'white', 'important');
                labelEl.style.setProperty('font-size', '0.7em', 'important');
                labelEl.style.setProperty('z-index', '5', 'important');
                labelEl.style.setProperty('text-align', 'center', 'important');
                labelEl.style.setProperty('background-color', '#000000', 'important');

                inlineAdSpaceEl.appendChild(labelEl);
            };
        };
        function customRevealSPH() {
            return 'rect('+(inlineAdSpaceEl.getBoundingClientRect().top + 12)+'px '+screen.width+'px '+(inlineAdSpaceEl.getBoundingClientRect().top+screen.height-12)+'px 0px)';
        };

        function proxyLoadedUDN() {
            var udnContainer = curDoc.getElementById('container');
            if (udnContainer === null) {
                return;
            }
            udnContainer.prepend(adContainerEl);
            adContainerEl.style.zIndex = 2;
        }

        function customRevealOppa() {
            return 'rect('+(inlineAdSpaceEl.getBoundingClientRect().top + 9)+'px '+screen.width+'px '+(inlineAdSpaceEl.getBoundingClientRect().top+(screen.width * 416 / 320))+'px 0px)';
        }
    }

    function InnityAppsLogo(adContainerToPutLogo) {
        this.onResize = onResize;

        var innityLogoContainer = null, secondWrapper = null, logoWrapperEl = null, otherWordEl = null, innityWordEl = null;

        initClass();

        function initClass() {
            setupStyle();

            innityLogoContainer = curDoc.createElement('div');
            innityLogoContainer.classList.add('innity-apps-innity-logo-container');
            innityLogoContainer.classList.add(getPosition());
            innityLogoContainer.addEventListener('click', clickHandler, false);

            secondWrapper = curDoc.createElement('div');
            secondWrapper.classList.add('innity-apps-innity-logo-second-container');

            generateSVGLogo();
            generateName();
            drawByLanguage();

            innityLogoContainer.appendChild(secondWrapper);
            adContainerToPutLogo.appendChild(innityLogoContainer);
        };

        function setupStyle() {
            var styleElement = curDoc.createElement('style');
            styleElement.setAttribute('data-owner', 'Innity');
            styleElement.setAttribute('data-purpose', 'Logo Style');
            styleElement.innerHTML = ".innity-apps-innity-logo-container,.innity-apps-innity-logo-second-container{position:relative!important;width:auto!important;text-align:center!important}.innity-apps-innity-logo-container{height:20px!important;background-color:#999!important;display:block;left:0!important;top:-1px!important;font-size:9.6px!important;line-height:13.71px!important;z-index:2147483647;padding:2px!important}.innity-apps-innity-logo-container.innity-apps-totally-hide{display:none!important}.innity-apps-innity-logo-second-container{display:inline-block!important;height:100%!important;border:0!important;outline:0!important;margin:0 auto!important}.innity-apps-innity-logo{display:block!important;float:left!important;width:16px!important;height:16px!important;margin:0 .1em!important}.innity-apps-innity-logo-innity-word,.innity-apps-innity-logo-other-word{float:left!important;line-height:13.71px!important;height:100%!important;font-size:9.6px!important;color:#fff!important;padding:.2em .1em 0!important}.innity-apps-innity-logo-other-word{display:block!important}";

            curDoc.getElementsByTagName('body')[0].appendChild(styleElement);
        };

        function clickHandler(e) {
            e.stopPropagation();
            e.preventDefault();

//            Desktop - https://goo.gl/qQKCCc
//            Responsive - https://goo.gl/8a4pku
//            Video - https://goo.gl/51m8Ds
//            Mobile - https://goo.gl/VjSyDH
            if (extraOptions.isVideoAd === true) {
                curWin.open('https://goo.gl/51m8Ds');
            }
            else {
                curWin.open('https://goo.gl/VjSyDH');
            }
        };

        function generateSVGLogo() {
            logoWrapperEl = curDoc.createElement('div');
            logoWrapperEl.classList.add('innity-apps-innity-logo');

            // Embed SVG inline.
            var brandSvg = document.createElementNS("http://www.w3.org/2000/svg","svg");
            brandSvg.setAttribute("viewBox","0 0 16 16");
            brandSvg.style.cssText = "display:block;width:inherit;height:inherit;";
            var c1 = document.createElementNS("http://www.w3.org/2000/svg","circle");
            c1.setAttribute("cx","5.091");c1.setAttribute("cx","5.091");c1.setAttribute("cy","4.049");c1.setAttribute("r","1.266");
            var c2 = document.createElementNS("http://www.w3.org/2000/svg","circle");
            c2.setAttribute("cx","5.091");c2.setAttribute("cx","10.061");c2.setAttribute("cy","3.563");c2.setAttribute("r","2.032");
            var poly1 = document.createElementNS("http://www.w3.org/2000/svg","polygon");
            poly1.setAttribute("points","6.515 6.075 7.136 9.404 7.938 8.821 9.235 10.188 9.562 9.977 8.681 8.285 9.487 7.702 6.515 6.075");
            var c3 = document.createElementNS("http://www.w3.org/2000/svg","circle");
            c3.setAttribute("cx","3.098");c3.setAttribute("cy","8.687");c3.setAttribute("r","2.031");
            var c4 = document.createElementNS("http://www.w3.org/2000/svg","circle");
            c4.setAttribute("cx","12.902");c4.setAttribute("cy","7.623");c4.setAttribute("r","2.031");
            var c5 = document.createElementNS("http://www.w3.org/2000/svg","circle");
            c5.setAttribute("cx","10.917");c5.setAttribute("cy","12.037");c5.setAttribute("r","2.03");
            var c6 = document.createElementNS("http://www.w3.org/2000/svg","circle");
            c6.setAttribute("cx","6.096");c6.setAttribute("cy","12.69");c6.setAttribute("r","2.031");
            var path1 = document.createElementNS("http://www.w3.org/2000/svg","path");
            path1.setAttribute("d","M5.091,6.275A2.227,2.227,0,1,0,2.862,4.05,2.229,2.229,0,0,0,5.091,6.275Zm0-4.017A1.792,1.792,0,1,1,3.3,4.05,1.794,1.794,0,0,1,5.091,2.258Z");
            c1.style.fill=c2.style.fill=poly1.style.fill=c3.style.fill=c4.style.fill=c5.style.fill=c6.style.fill=path1.style.fill='#fff';
            brandSvg.appendChild(c1);
            brandSvg.appendChild(c2);
            brandSvg.appendChild(poly1);
            brandSvg.appendChild(c3);
            brandSvg.appendChild(c4);
            brandSvg.appendChild(c5);
            brandSvg.appendChild(c6);
            brandSvg.appendChild(path1);

            logoWrapperEl.appendChild(brandSvg);
        };
        function generateName() {
            otherWordEl = curDoc.createElement('span');
            otherWordEl.classList.add('innity-apps-innity-logo-other-word');
            otherWordEl.classList.add('innity-apps-innity-logo-word');

            innityWordEl = curDoc.createElement('span');
            innityWordEl.classList.add('innity-apps-innity-logo-innity-word');
            innityWordEl.classList.add('innity-apps-innity-logo-word');
            innityWordEl.innerHTML = 'Innity';
        };

        function drawByLanguage() {
            switch (extraOptions.language) {
                case 'tc':
                    drawTC();
                    break;
                case 'sc':
                    drawSC();
                    break;
                case 'kr':
                    drawKR();
                    break;
                case 'id':
                    drawID();
                    break;
                case 'th':
                    drawTH();
                    break;
                case 'vn':
                    drawVN();
                    break;
                default:
                    drawEN();
                    break;
            }
        };
        function drawEN() {
            otherWordEl.innerHTML = 'Ads by';

            secondWrapper.appendChild(otherWordEl);
            secondWrapper.appendChild(logoWrapperEl);
            secondWrapper.appendChild(innityWordEl);
        };
        function drawTC() {
            otherWordEl.innerHTML = '提供的廣告';

            secondWrapper.appendChild(logoWrapperEl);
            secondWrapper.appendChild(innityWordEl);
            secondWrapper.appendChild(otherWordEl);
        };
        function drawSC() {
            otherWordEl.innerHTML = '提供的广告';

            secondWrapper.appendChild(logoWrapperEl);
            secondWrapper.appendChild(innityWordEl);
            secondWrapper.appendChild(otherWordEl);
        };
        function drawKR() {
            otherWordEl.innerHTML = '광고배너';

            secondWrapper.appendChild(logoWrapperEl);
            secondWrapper.appendChild(innityWordEl);
            secondWrapper.appendChild(otherWordEl);
        };
        function drawID() {
            otherWordEl.innerHTML = 'Iklan oleh';

            secondWrapper.appendChild(otherWordEl);
            secondWrapper.appendChild(logoWrapperEl);
            secondWrapper.appendChild(innityWordEl);
        };
        function drawTH() {
            otherWordEl.innerHTML = 'โฆษณาโดย';

            secondWrapper.appendChild(otherWordEl);
            secondWrapper.appendChild(logoWrapperEl);
            secondWrapper.appendChild(innityWordEl);
        };
        function drawVN() {
            otherWordEl.innerHTML = 'Quảng cáo bởi';

            secondWrapper.appendChild(otherWordEl);
            secondWrapper.appendChild(logoWrapperEl);
            secondWrapper.appendChild(innityWordEl);
        };

        function onResize() {};

        function getPosition() {
            switch (extraOptions.logoPos) {
                case 'none':
                    return 'innity-apps-totally-hide';
                default:
                    return 'innity-apps';
            }
        };
    };

    function InnityAppsOrientation() {
        initClass();

        function initClass() {
            if (curWin.DeviceOrientationEvent) {
                curWin.addEventListener('orientationchange', onOrientationChange, false);
                curWin.addEventListener('deviceorientation', onDeviceOrientation, false);
            }
            else {
                postMsgToIframe('orientationNoSupported');
            }
        };

        function onOrientationChange(e) {
            var data = {eventType: 'orientationchange'};
            postMsgToIframe('', data);
        };
        function onDeviceOrientation(e) {
            var data = {eventType: 'deviceorientation', alpha: e.alpha, beta: e.beta, gamma: e.gamma};
            postMsgToIframe('', data);
        };
    };
}
