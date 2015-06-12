/**
 * Created by Spikey on 12.06.2015.
 */
var NotHowToPlayScene = cc.Scene.extend({
    onEnter: function () {
        this._super();
        var layer = new NotHowToPlay();
        this.addChild(layer);
    }
});