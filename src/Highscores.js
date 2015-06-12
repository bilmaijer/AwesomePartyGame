/**
 * Created by Spikey on 12.06.2015.
 */
var HighscoresScene = cc.Scene.extend({
    onEnter: function () {
        this._super();
        var layer = new Highscores();
        this.addChild(layer);
    }
});