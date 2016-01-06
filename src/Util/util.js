/// <reference path="../../cocos2d-js-v3.6.js" />
/// <reference path="../GLOBAL_DATA.js" />
/// <reference path="JQ/JQ.js" />
/// <reference path="JQ/Component/device.js" />
/// <reference path="JQ/Component/net.js" />
/// <reference path="JQ/Component/sql.js" />
/// <reference path="JQ/Component/ui.js" />
/// <reference path="JQ/Component/util.js" />
/// <reference path="JQ/Component/wx.js" />



var Util = {};

Util.playMusic = function (src,isLoop) {
    if (GLOBAL_DATA.Music) {
       cc.audioEngine.playMusic(src, isLoop);
    }
}
Util.StopMusic = function () {
    cc.audioEngine.stopMusic();

}

Util.playEffic = function (src) {
    if (GLOBAL_DATA.Sound) {
       cc.audioEngine.playEffect(src);
    }

}

Util.getText = function (key) {
    var lang = cc.sys.language;
    var result;
    var objL = LANG[key];
    if (!objL) {
        result = "no_text_for:" + key
    } else {
        if (objL[lang]!==undefined) {
            result = objL[lang];
        } else {
            result = objL["en"];
        }
    }
    return result;
}


 
Util.openShare = function () {
    if (cc.sys.isNative) {
        if (cc.sys.language.toLowerCase() == "zh") {
            $.device.openShare("分享文案", "res/logo_200.png", "https://itunes.apple.com/us/app/rock-paper-scissors-battle/id1014895272?l=zh&ls=1&mt=8");
        } else {
            $.device.openShare("share text", "res/logo_200.png", "https://itunes.apple.com/us/app/rock-paper-scissors-battle/id1014895272?l=us&ls=1&mt=8");
        }
    } else {
        $.weixin.showMask();

    }
}
