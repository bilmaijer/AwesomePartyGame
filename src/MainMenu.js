var fromWhere;
var MainMenu = cc.Layer.extend({
    sprite: null,
    ctor: function () {
        this._super();

        var size = cc.winSize;
        var howToPlayButton = new ccui.Button();
        var menu = new ccui.Layout();
        var endGameButton = new ccui.Button();
        var playButton = new ccui.Button();

        //cc.audioEngine.playMusic(res.s_menu, true);
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

        endGameButton.loadTextures("res/end_button.png", "res/end_button_pressed.png", " ");
        endGameButton.type = 2;
        endGameButton.x = 0;
        endGameButton.y = -49;
        endGameButton.setScale(0.6);
        endGameButton.addTouchEventListener(onMouseUp, this);

        /*var shutDown = new ccui.Button();
        shutDown.loadTextures("res/temp.png", "res/temp2.png", " ");
        shutDown.type = 3;
        shutDown.x = -200;
        shutDown.y = -100;
        shutDown.setScale(0.1);
        shutDown.addTouchEventListener(onMouseUp, this);*/

        menu.addChild(playButton);
        menu.addChild(howToPlayButton);
        menu.addChild(endGameButton);
        //menu.addChild(shutDown);

        menu.x = size.width / 2;
        menu.y = size.height / 2-50;
        menu.setContentSize(size);
        this.addChild(menu, 1);

        //var logoTargetSize = Size(100,100);
        console.log(logo.width);
        logo.x= size.width / 2;
        logo.y = size.height / 1.2-40;
        logo.setScale(0.06, 0.06);
        this.addChild(logo,2);
        /////////////////////////////
        // 3. add your codes below...
        function onMouseUp (event, type){
            if (type == ccui.Widget.TOUCH_ENDED && event.type == 0){
                cc.director.runScene(new ConfigScene());
            } else if(type == ccui.Widget.TOUCH_ENDED && event.type == 1) {
                fromWhere = 0;
                cc.director.runScene(new HowToPlayScene());
            } else if (type == ccui.Widget.TOUCH_ENDED && event.type == 2) {
                cc.director.end();
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