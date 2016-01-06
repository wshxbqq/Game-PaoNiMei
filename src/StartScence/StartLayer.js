/// <reference path="../GameScence/Component/Monster.js" />
/// <reference path="../../cocos2d-js-v3.6.js" />
/// <reference path="../CfgPanel/CfgPanel.js" />
/// <reference path="../Util/JQ.js" />
/// <reference path="Component/Cell.js" />
/// <reference path="../Util/util.js" />
/// <reference path="Component/Ball.js" />
/// <reference path="../Util/underscore.js" />
/// <reference path="Component/Layer_GameStart.js" />
/// <reference path="Component/Hand.js" />
/// <reference path="Component/Enemy.js" />
/// <reference path="../Util/EightSprite.js" />
/// <reference path="../GameScence/Component/Monster.js" />
/// <reference path="../GameScence/Component/Layer_Cfg.js" />
 

var MainLayer = cc.Layer.extend({

    ctor: function () {
        this._super();
        this.init();
        return true;
    },

    init: function () {
        var _this = this;
        this.isStarted = 0;
        GLOBAL_LAYER = this;

        this.CURRENT_COUNT = 1;

        var mainScenceUI = $.ui.create("res/MainScene.json");
        this.addChild(mainScenceUI);
        

        this.startUI = $.ui.create("res/Layer_Start.json");
        this.addChild(this.startUI);
        Layer_Start.init(this.startUI, this);




        var size = cc.director.getWinSize();

       


        

        
        
      
        
        

        //var layerQ = $.ui.create("res/Layer_Question.json");
        //this.addChild(layerQ);
        
        
        //this.monsters = Monster.createBatch(23);
        //this.addMoster(this.monsters);

    },
    startMonster: function (num) {
        this.monsters = Monster.createBatch(num);
        this.addMoster(this.monsters);
        this.isStarted = 1;
        this.scheduleUpdate();

    },

    addMoster: function (monsters) {
        var _this = this;
        for (var i = 0; i < monsters.length; i++) {
            (function (_i) {
                setTimeout(function () {
                    var m = monsters[_i];
                    m.setLocalZOrder(2000-m.getPositionY());
                    _this.addChild(m);
                }, _.random(0, 1500));
            })(i)
        }
    },
    countDown: function (cb) {
        var size = cc.director.getWinSize();
        Util.playEffic("res/Audio/sound_ready.mp3");
        var stageSprite = cc.Sprite.create("res/stage.png");
        stageSprite.setPosition(cc.p(190,760));
        this.addChild(stageSprite);

        var stageNum = ccui.Text.create(this.CURRENT_COUNT+"", "", 150);
        stageNum.setPosition(cc.p(450, 750));
        this.addChild(stageNum);

        var prepareSprite = cc.Sprite.create("res/prepare1.png");
         prepareSprite.setPosition(cc.p(size.width / 2, size.height / 2 - 100));
         
         this.addChild(prepareSprite);

        var startSprite = cc.Sprite.create("res/start1.png");
        startSprite.setPosition(cc.p(size.width / 2, size.height / 2 - 100));
        
       



        var _this=this;
   
        setTimeout(function(){
            prepareSprite.removeFromParent();
            _this.addChild(startSprite);
            Util.playEffic("res/Audio/sound_go.mp3");
            setTimeout(function () {
                startSprite.removeFromParent();
          
                stageSprite.removeFromParent();
                stageNum.removeFromParent();

                cb();
            }, 1000);
        },1000);
 

        


    },

    showQuestionPanel: function () {
        this.questionUI = $.ui.create("res/Layer_Question.json");
        this.addChild(this.questionUI);
        Layer_Question.init(this.questionUI, this);
        var qSprite = this.monsters[_.random(0, this.monsters.length - 1)];

        Layer_Question.setQSprite(qSprite);

        Util.playEffic("res/Audio/correct_answer.mp3");
    },
    

    showSuccessPanel: function () {
        this.successUI = $.ui.create("res/Layer_Success.json");
        this.addChild(this.successUI);
        Layer_Success.init(this.successUI, this);

        Util.playEffic("res/Audio/right.mp3");

    },

    showFailPanel: function () {
        this.failUI = $.ui.create("res/Layer_Fail.json");
        this.addChild(this.failUI);
        Layer_Fail.init(this.failUI, this);
        Util.playEffic("res/Audio/wrong.mp3");
        $.net.dcUserDefault(58,GLOBAL_DATA.UserSocre, 1);
    },

    
    update: function (dt) {
        var _this = this;
        var result=0;
        for (var i in this.monsters) {
            var m = this.monsters[i];
            if (!m.isDone) {
                result = 1;
            }
        }

        if (!result) {
            this.showQuestionPanel();
            this.isStarted = 0;
            this.unscheduleUpdate();
        }
    },

    onEnter: function () {
        this._super();
    },

    onExit: function () {
        this._super();
    }

});