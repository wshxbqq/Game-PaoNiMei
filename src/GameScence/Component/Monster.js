/// <reference path="../../Util/underscore.js" />
/// <reference path="../../../cocos2d-js-v3.6.js" />
/// <reference path="Monster.js" />


var Monster = {};


Monster.createBatch = function (num) {
    Monster.Types = ["305", "307", "310", "600", "603", "610", "613"];

    if (num > 0 && num<5) {
        Monster.Types = Monster.Types.splice(0,3);
    }

    if (num >= 5 && num < 10) {
        Monster.Types = Monster.Types.splice(0, 5);
    }


    var result = [];
    var size = cc.director.getWinSize();
    var minHeight = 230;
    var maxHeight = 820;

    var preLevelHeight = (maxHeight - minHeight) / (num + 1);


    var currentHeight = minHeight;
    for (var i = 0; i < num; i++) {
        currentHeight += preLevelHeight;

        var tp = Monster.Types[_.random(0, Monster.Types.length - 1)];
      


        var monster = new EightSprite();
        monster.retain();
        monster.hero = tp;
        
        monster.current_action = "walk";
        if (_.random(0,1)) {
            monster.setPosition(cc.p(size.width + 200, currentHeight));
            monster.current_direction = "3";
            
            (function () {
                var a = cc.moveTo(2 + cc.random0To1()*6, cc.p(-200, currentHeight));
                var cb = cc.callFunc(function (node) {
                    node.removeFromParent();
                    node.isDone = 1;
                });
                var seq = cc.sequence(a, cb);
                monster.runAction(seq);

            })();
            
            
        } else {
            monster.setPosition(cc.p(-200, currentHeight));
            monster.current_direction = "7";
            (function () {
                var a = cc.moveTo(2 + cc.random0To1() * 6, cc.p(size.width + 200, currentHeight));
                var cb = cc.callFunc(function (node) {
                    node.removeFromParent();
                    node.isDone = 1;
                });
                var seq = cc.sequence(a, cb);
                monster.runAction(seq);

            })();
        }
        

        monster.doAction(undefined, undefined, undefined, true);

        result.push(monster);

    }
    result.reverse();

    return result;
}

 