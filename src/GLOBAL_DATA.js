var GLOBAL_DATA = {};

var GLOBAL_LAYER=null;
GLOBAL_DATA.Music = true;
GLOBAL_DATA.Sound = true;

GLOBAL_DATA.UserSocre = 0;
GLOBAL_DATA.UserBest = 0;


GLOBAL_DATA.save = function () {
    cc.sys.localStorage.setItem("UserBest", GLOBAL_DATA.UserBest + "");
}

GLOBAL_DATA.load = function () {
    var userBest = cc.sys.localStorage.getItem("UserBest");
    GLOBAL_DATA.UserBest = userBest ? parseInt(userBest) : GLOBAL_DATA.UserBest;
    GLOBAL_DATA.UserBest = parseInt(GLOBAL_DATA.UserBest);
}