var TheEnd = cc.Layer.extend({
    sprite: null,

    ctor: function () {
        this._super();
        var VictoryMessage = cc.LabelTTF.create("the end.", _b_getFontName(res.robota), 48, cc.size(300, 0), cc.TEXT_ALIGNMENT_CENTER, cc.VERTICAL_TEXT_ALIGNMENT_TOP);
        var ScoreMessage = cc.LabelTTF.create("final score: ", _b_getFontName(res.robota), 36, cc.size(300, 0), cc.TEXT_ALIGNMENT_CENTER, cc.VERTICAL_TEXT_ALIGNMENT_TOP);
        var ScoreMessage2 = cc.LabelTTF.create(score, _b_getFontName(res.robota), 36, cc.size(300, 0), cc.TEXT_ALIGNMENT_CENTER, cc.VERTICAL_TEXT_ALIGNMENT_TOP);
        var PlayAgain = new ccui.Button();

        VictoryMessage.x = cc.winSize.width / 2;
        VictoryMessage.y = cc.winSize.height - 100;

        ScoreMessage.x = cc.winSize.width / 2;
        ScoreMessage.y = cc.winSize.height - 150;

        ScoreMessage2.x = cc.winSize.width / 2;
        ScoreMessage2.y = cc.winSize.height - 190;

        PlayAgain.loadTextures("res/playAgain.png", "res/playAgainPressed.png", " ");
        PlayAgain.setPosition(cc.winSize.width / 2, cc.winSize.height - 300);
        PlayAgain.setScale(0.6);
        PlayAgain.addTouchEventListener(onMouseUp, this);

        this.addChild(VictoryMessage);
        this.addChild(ScoreMessage);
        this.addChild(ScoreMessage2);
        this.addChild(PlayAgain);

        function onMouseUp(event, type) {
            if (type == ccui.Widget.TOUCH_ENDED) {
                cc.director.runScene(new MainMenuScene());
            }
        }

        return true;
    }
});
/**
 * Created by Spikey on 12.06.2015.
 */

var EndScene = cc.Scene.extend({
    onEnter: function () {
        this._super();
        var layer = new TheEnd();
        this.addChild(layer);
    }
});