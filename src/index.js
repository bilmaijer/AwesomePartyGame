/**
 * Created by Spikey on 16.05.2015.
 */
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
        for (var j = 0; j<finalThemes.length;j++){
            console.log(finalThemes[j])
        }
        this._super();
        var layer = new GameBoardLayer();
        this.addChild(layer);
    }
});
