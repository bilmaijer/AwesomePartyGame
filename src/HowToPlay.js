/**
 * Created by Spikey on 12.06.2015.
 */
var HowToPlayScene = cc.Scene.extend({
    onEnter: function () {
        this._super();
        var layer = new HowToPlay();
        this.addChild(layer);
    }
});