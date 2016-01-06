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
 

var Layer_Start = {};

Layer_Start.init = function (node, parentLayer) {

 
    
    Layer_Start.layerNode = node;

    Layer_Start.parentLayer = parentLayer;

   

    Layer_Start.startBtn = $(node, "Button_Start");

    Layer_Start.img = $(node, "Image_Start_Title");

    Layer_Start.panel = $(node, "Panel_Color");
     
    Layer_Start.startBtn.bind("touchend", function () {
        Layer_Start.startBtn.items[0].removeFromParent();
        Layer_Start.img.items[0].removeFromParent();
        Util.playEffic("res/Audio/button.mp3");
        GLOBAL_LAYER.countDown(function () {
            GLOBAL_LAYER.startUI.removeFromParent();
            GLOBAL_LAYER.startMonster(GLOBAL_LAYER.CURRENT_COUNT+2);

        });

    });

     

};
 
 
 
 