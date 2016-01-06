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
 

var Layer_Success = {};

Layer_Success.init = function (node, parentLayer) {

 
    
    Layer_Success.layerNode = node;

    Layer_Success.parentLayer = parentLayer;

    Layer_Success.panelBg = $(node, "Panel_Color");

 

    Layer_Success.btnNext = $(node, "Button_Next");
    Layer_Success.img = $(node, "Image_Panel");
      

    Layer_Success.btnNext.bind("touchend", function () {
        Layer_Success.img.items[0].setVisible(false);
        Util.playEffic("res/Audio/button.mp3");
        GLOBAL_LAYER.CURRENT_COUNT++;

        GLOBAL_LAYER.countDown(function () {
            Layer_Success.layerNode.removeFromParent();
            GLOBAL_LAYER.startMonster(GLOBAL_LAYER.CURRENT_COUNT+2);

        });
    });


 

};
 
 
 
 