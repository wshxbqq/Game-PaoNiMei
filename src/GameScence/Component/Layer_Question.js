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
 

var Layer_Question = {};

Layer_Question.init = function (node, parentLayer) {

 
    
    Layer_Question.layerNode = node;

    Layer_Question.parentLayer = parentLayer;

    Layer_Question.panelBg = $(node, "Panel_Color");

    Layer_Question.example_1 = $(node, "example_1");


 
    Layer_Question.Button_1 = $(node, "Button_1");

    Layer_Question.Button_2 = $(node, "Button_2");

    Layer_Question.Button_3 = $(node, "Button_3");

 
     

  


 

};

Layer_Question.targetNum=null;

Layer_Question.setQSprite = function (qSprite) {
    var pSp = Layer_Question.example_1.items[0];
    pSp.setVisible(false);
    qSprite.setPosition(pSp.getPosition());
    pSp.getParent().addChild(qSprite);
    qSprite.doAction("walk", undefined, undefined, 1);
    var tNum = 0;

    for (var i in GLOBAL_LAYER.monsters) {
        var m = GLOBAL_LAYER.monsters[i];
        if (m.hero == qSprite.hero) {
            tNum++;
        }
    }

    var a1Txt = "";
    var a2Txt = "";
    var a3Txt = "";

    var a1Flag = null;
    var a2Flag = null;
    var a3Flag = null;

    var rightPosition = 0;

    if (tNum==1) {
        rightPosition = _.random(0,1);
    }

    if (tNum > 1) {
        rightPosition = _.random(0, 2);
    }

    switch (rightPosition) {
        case 0:
            a1Flag = 1;

            a1Txt = tNum + "只";
            a2Txt = tNum+1 + "只";
            a3Txt = tNum+2 + "只";
            ; break;

        case 1:
            a2Flag = 1;

            a1Txt = tNum-1 + "只";
            a2Txt = tNum   + "只";
            a3Txt = tNum + 2 + "只";
            ; break;

        case 2:
            a3Flag = 1;

            a1Txt = tNum - 2 + "只";
            a2Txt = tNum -1 +"只";
            a3Txt = tNum  + "只";
            ; break;
    }


    Layer_Question.Button_1.items[0].setTitleText(a1Txt);
    Layer_Question.Button_2.items[0].setTitleText(a2Txt);
    Layer_Question.Button_3.items[0].setTitleText(a3Txt);


    Layer_Question.Button_1.bind("touchend", function () {
        Layer_Question.layerNode.removeFromParent();
        if (a1Flag) {
            GLOBAL_LAYER.showSuccessPanel();
        } else {
            GLOBAL_LAYER.showFailPanel();

        }

    });

    Layer_Question.Button_2.bind("touchend", function () {
        Layer_Question.layerNode.removeFromParent();
        if (a2Flag) {
            GLOBAL_LAYER.showSuccessPanel();
        } else {
            GLOBAL_LAYER.showFailPanel();

        }

    });

    Layer_Question.Button_3.bind("touchend", function () {
        Layer_Question.layerNode.removeFromParent();
        if (a3Flag) {
            GLOBAL_LAYER.showSuccessPanel();
        } else {
            GLOBAL_LAYER.showFailPanel();

        }

    });

    


}
 
 
 
 