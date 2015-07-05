var Help = cc.Layer.extend({
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

        var contentText = new ccui.Text;
        var widgetSize = layout.getContentSize();
        contentText.attr({
            string: "Sporty\n" +
            "The Sporty category has activities that involve activity and movement. Good for the outside, but can easily be done indoors as well.\n" +
            "Icebreakers" +
            "\nIcebreakers are games that are meant to help people get to know each other and start communicating. Good if you have newcomers." +
            "\nNaughty" +
            "\nNaughty is a category that involves naughty tasks. Be ready to strip." +
            "\nQuestions" +
            "\nQuestions are exactly that: quick questions that can be answered in a short manner. These are a nice change of pace." +
            "\nRules" +
            "\nRules are a set of cards that change how the game is played overall. These work well together with all the other categories." +
            "\nDiscussions" +
            "\nDiscussions are longer versions of questions. These are topics that provoke thought and opinions and take a lot more time." +
            "\nBrainy" +
            "\nBrainy tasks need creativity and fast thinking. Good for a quick IQ test." +
            "\nDrinking" +
            "\nDrinking games are... well, for drinking. A nice party-starter.",
            fontName: "Marker Felt",
            fontSize: 20,
            anchorX: 0.5,
            anchorY: 0,
            x: widgetSize.width / 2
        });

        contentText.setColor(cc.color(0, 0, 0));
        contentText.setContentSize(cc.size(800, 800));
        contentText.setScale(0.47);
        contentText.ignoreContentAdaptWithSize(false);
        contentText.setFontName(_b_getFontName(res.robota));
        layout.addChild(contentText, 252);

        var confirm = new ccui.Button();
        confirm.loadTextures("res/check.png", "res/check.png", " ");
        confirm.setScale(0.2);
        confirm.addTouchEventListener(onMouseUp, this);
        confirm.setPosition(200, 50);
        confirm.didIt = true;

        layout.addChild(confirm, 252);
        this.addChild(layout, 251);

        function onMouseUp(event, type) {
            if (type == ccui.Widget.TOUCH_ENDED && event.didIt) {
                if (fromWhere == 0) {
                    cc.director.runScene(new MainMenuScene())
                }
                else if (fromWhere == 1) {
                    cc.director.runScene(new ConfigScene())
                }
            }
        }

        return true;
    }
});

var HelpScene = cc.Scene.extend({
    onEnter: function () {
        this._super();
        var layer = new Help();
        this.addChild(layer);
    }
});
