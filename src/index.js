/**
 * Created by Spikey on 16.05.2015.
 */
var GameBoardLayer = cc.Layer.extend({
    sprite:null,
    ctor:function () {
        //////////////////////////////
        // 1. super init first
        this._super();
        /////////////////////////////
        // 3. add your codes below...
        // add a label shows "Hello World"
        // create and initialize a label
        var uiButton = new ccui.Button();
        uiButton.loadTextures("res/CloseNormal.png", "res/CloseSelected.png"," ");
        uiButton.x = 50;
        uiButton.y = 50;

        this.addChild(uiButton, 200);

        return true;
    }
});
var GameboardScene = cc.Scene.extend({
    onEnter:function () {
        this._super();
        var layer = new GameBoardLayer();
        this.addChild(layer);
    }
});
