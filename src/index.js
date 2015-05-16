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
        var uiButton = ccs.Button.create();
        uiButton.setPosition(50,50);
        uiButton.setAnchorPoint(40,40);
        uiButton.setTitleText("Hello!");
        uiButton.setTitleColor(cc.color);

        this.addChild(uiButton, 5);

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
