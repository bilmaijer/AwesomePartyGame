/**
 * Created by Spikey on 9.06.2015.
 */
var finalThemes;

var ConfigLayer = cc.Layer.extend({
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

        finalThemes = [];
        var keys = [ "sporty", "tutvumis", "naughty",  "questions","rules", "discussions", "brainy","drinking"];
        var buttons = [];

        for (var p = 0; p < keys.length; p++) {
            var temp = new ccui.Button();
            temp.a = "res/"+keys[p]+"_cat.png";
            temp.b = "res/"+keys[p]+"_selected.png";
            temp.loadTextures(temp.a, temp.b, " ");
            temp.addTouchEventListener(onMouseUp, this);
            temp.setScale(0.5);
            if (p < 4) {
                temp.setPosition(100, 420 - ((p+1) * 70));
            }
            else {
                temp.setPosition(300, 420 - (((p+1) - 4) * 70));
            }
            temp.didIt = true;
            temp.key = keys[p];
            buttons.push(temp);
            layout.addChild(temp, 252);
        }

        //// Confirm button
        var confirm = new ccui.Button();
        confirm.loadTextures("res/check.png", "res/check.png", " ");
        confirm.setScale(0.2);
        confirm.addTouchEventListener(onConfirm, this);
        confirm.setPosition(200, 70);
        confirm.didIt = true;

        var help = new ccui.Button();
        help.loadTextures("res/check.png", "res/check.png", " ");
        help.setScale(0.2);
        help.addTouchEventListener(onHelp, this);
        help.setPosition(400, 70);
        help.didIt = true;

        layout.addChild(confirm, 252);
        layout.addChild(help, 252);
        this.addChild(layout, 251);

        function onHelp(event, type){
            if (type == ccui.Widget.TOUCH_ENDED && event.didIt) {
                fromWhere = 1;
                cc.director.runScene(new HowToPlayScene());
            }
        }

        function onConfirm(event, type) {
            if (type == ccui.Widget.TOUCH_ENDED && event.didIt) {
                finalThemes = [];
                for (var r = 0; r < buttons.length; r++){
                    if (buttons[r].didIt == false){
                        finalThemes.push(buttons[r].key)
                    }
                }
                if (finalThemes.length>2) {
                    cc.director.runScene(new GameBoardScene())
                }
                else{
                    var warning = new ccui.Text;
                    warning.attr({
                        string: "Minimum three themes!",
                        fontName: "Marker Felt",
                        fontSize: 80,
                        anchorX: 0.6,
                        anchorY: 0
                    });
                    warning.setTextHorizontalAlignment(cc.TEXT_ALIGNMENT_CENTER)
                    warning.setColor(cc.color(255, 0, 0, 0));
                    warning.setPositionX(230);
                    warning.setPositionY(20);
                    warning.setScale(0.25);
                    warning.setFontName(_b_getFontName(res.robota));
                    layout.addChild(warning, 252)
                }
            }
        }

        function onMouseUp(event, type) {
            if (type == ccui.Widget.TOUCH_ENDED) {
                cc.delayTime(50);
                if (event.didIt) {
                    event.didIt = false;
                    event.loadTextures(event.b, event.a, " ");
                }
                else {
                    event.didIt = true;
                    event.loadTextures(event.a, event.b, " ");
                }
            }
        }
        return true;
    }
});
var ConfigScene = cc.Scene.extend({
    onEnter: function () {
        this._super();
        var layer = new ConfigLayer();
        this.addChild(layer);
    }
});