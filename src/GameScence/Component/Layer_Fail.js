/// <reference path="../../Util/JQ/Component/device.js" />
/// <reference path="../../Util/JQ/Component/encrypt.js" />
/// <reference path="../../Util/JQ/Component/net.js" />
/// <reference path="../../Util/JQ/Component/sql.js" />
/// <reference path="../../Util/JQ/Component/ui.js" />
/// <reference path="../../Util/JQ/Component/util.js" />
/// <reference path="../../Util/JQ/Component/wx.js" />
/// <reference path="../../Util/JQ/JQ.js" />
/// <reference path="../../Util/underscore.js" />
/// <reference path="../../GLOBAL_DATA.js" />
/// <reference path="../../Util/util.js" />
 

var Layer_Fail = {};

Layer_Fail.init = function (node, parentLayer) {



    Layer_Fail.layerNode = node;

    Layer_Fail.parentLayer = parentLayer;



    Layer_Fail.btnAgain = $(node, "Button_Again");

    Layer_Fail.img = $(node, "Image_Panel");

    Layer_Fail.panel = $(node, "Panel_Color");

    Layer_Fail.score = $(node, "Text_Score");
    Layer_Fail.best = $(node, "Text_Best");


    GLOBAL_DATA.UserSocre = GLOBAL_LAYER.CURRENT_COUNT;
    if (GLOBAL_DATA.UserSocre > GLOBAL_DATA.UserBest) {
        GLOBAL_DATA.UserBest = GLOBAL_DATA.UserSocre;
    }
    Layer_Fail.score.setString(GLOBAL_DATA.UserSocre);
    Layer_Fail.best.setString(GLOBAL_DATA.UserBest);

 
    Layer_Fail.btnAgain.bind("touchend", function () {
        Util.playEffic("res/Audio/button.mp3");
        Layer_Fail.img.items[0].removeFromParent();

        GLOBAL_LAYER.CURRENT_COUNT = 1;
        GLOBAL_LAYER.countDown(function () {
            Layer_Fail.layerNode.removeFromParent();
            GLOBAL_LAYER.startMonster(GLOBAL_LAYER.CURRENT_COUNT+2);

        });

    });



};
