var fromWhere;
var MainMenu = cc.Layer.extend({
    sprite: null,
    ctor: function () {
        this._super();

        var size = cc.winSize;
        var howToPlayButton = new ccui.Button();
        var menu = new ccui.Layout();
        var CategoriesButton = new ccui.Button();
        var playButton = new ccui.Button();

        var logo = cc.Sprite.create("res/blankbox_logo.png");
        playButton.loadTextures("res/playButton.png", "res/playButtonPressed.png", " ");
        playButton.type = 0;
        playButton.x = 0;
        playButton.y = 49;
        playButton.setScale(0.6);
        playButton.addTouchEventListener(onMouseUp, this);

        howToPlayButton.loadTextures("res/howToPlay.png", "res/howToPlayPressed.png", " ");
        howToPlayButton.type = 1;
        howToPlayButton.x = 0;
        howToPlayButton.y = 0;
        howToPlayButton.setScale(0.6);
        howToPlayButton.addTouchEventListener(onMouseUp, this);

        CategoriesButton.loadTextures("res/categories_button.png", "res/categories_pressed.png", " ");
        CategoriesButton.type = 2;
        CategoriesButton.x = 0;
        CategoriesButton.y = -49;
        CategoriesButton.setScale(0.6);
        CategoriesButton.addTouchEventListener(onMouseUp, this);

        menu.addChild(playButton);
        menu.addChild(howToPlayButton);
        menu.addChild(CategoriesButton);

        menu.x = size.width / 2;
        menu.y = size.height / 2 - 50;
        menu.setContentSize(size);
        this.addChild(menu, 1);

        logo.x = size.width / 2;
        logo.y = size.height / 1.2 - 40;
        logo.setScale(0.06, 0.06);
        this.addChild(logo, 2);

        function onMouseUp(event, type) {
            if (type == ccui.Widget.TOUCH_ENDED && event.type == 0) {
                cc.director.runScene(new ConfigScene());
            } else if (type == ccui.Widget.TOUCH_ENDED && event.type == 1) {
                cc.director.runScene(new HowToPlayScene());
            } else if (type == ccui.Widget.TOUCH_ENDED && event.type == 2) {
                fromWhere = 0;
                cc.director.runScene(new HelpScene());
            }
        }

        return true;
    }
});

var MainMenuScene = cc.Scene.extend({
    onEnter: function () {
        this._super();

        var layer = new MainMenu();

        this.addChild(layer);
    }
});

var _b_getFontName = function (resource) {
    if (cc.sys.isNative) {
        return resource.srcs[0];
    } else {
        return resource.name;
    }
};