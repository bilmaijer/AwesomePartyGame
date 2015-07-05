var GameBoardLayer = cc.Layer.extend({
    sprite: null,
    ctor: function () {
        this._super();
        createTable(this);
        return true;
    }
});
var GameBoardScene = cc.Scene.extend({
    onEnter: function () {
        this._super();
        var layer = new GameBoardLayer();
        this.addChild(layer);
    }
});
