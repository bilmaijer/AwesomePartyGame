/**
 * Created by Spikey on 16.05.2015.
 */
var GameBoardLayer = cc.Layer.extend({
    sprite: null,
    ctor: function () {
        //////////////////////////////
        // 1. super init first
        this._super();
        /////////////////////////////
        // 3. add your codes below...
        // add a label shows "Hello World"
        // create and initialize a label
        for (i = 1; i < 6; i++) {
            for (j = 1; j < 6; j++) {
                var temp = new ccui.Button();
                temp.loadTextures("res/CloseNormal.png", "res/CloseSelected.png", " ");
                temp.x = cc.winSize.width / 5 * i - cc.winSize.width / 10;
                temp.y = cc.winSize.height / 6 * j + cc.winSize.height / 12;
                this.addChild(temp, 201);
            }
        }
        var hero = new cc.Sprite("res/favicon.ico");
        hero.x = cc.winSize.width / 2;
        hero.y = cc.winSize.height / 12;
        this.addChild(hero, 250);
        return true;
    }
});
var GameboardScene = cc.Scene.extend({
    onEnter: function () {
        this._super();
        var layer = new GameBoardLayer();
        this.addChild(layer);
    }
});
