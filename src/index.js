/**
 * Created by Spikey on 16.05.2015.
 */
var GameBoardLayer = cc.Layer.extend({
    sprite: null,
    ctor: function () {
        this._super();
        var a = {};
        createTable();
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
