/**
 * Created by Spikey on 12.06.2015.
 */
var NotHowToPlay = cc.Layer.extend({
    sprite: null,
    ctor: function () {
        this._super();

        var layout = new ccui.Layout();
        layout.attr({
            anchorX: 0.5,
            anchorY: 0.5,
            x: cc.winSize.width / 2,
            y: cc.winSize.height / 2
        });

        layout.setBackGroundColorType(ccui.Layout.BG_COLOR_SOLID);
        layout.setBackGroundColor(cc.color(222, 214, 185));
        layout.setContentSize(cc.size(400, 400));

        var instruction = new cc.Sprite("res/NotHowTo.png");
        instruction.setPosition(200, 200);
        layout.addChild(instruction);

        //// Confirm button
        var confirm = new ccui.Button();
        confirm.loadTextures("res/check.png", "res/check.png", " ");
        confirm.setScale(0.2);
        confirm.addTouchEventListener(onMouseUp, this);
        confirm.setPosition(200, 70);
        confirm.didIt = true;

        layout.addChild(confirm, 252);
        this.addChild(layout, 251);

        return true;
    }
});

function onMouseUp (event, type) {
    if (type == ccui.Widget.TOUCH_ENDED && event.didIt) {
        cc.director.runScene(new MainMenuScene())
    }
}

var NotHowToPlayScene = cc.Scene.extend({
    onEnter: function () {
        this._super();
        var layer = new NotHowToPlay();
        this.addChild(layer);
    }
});