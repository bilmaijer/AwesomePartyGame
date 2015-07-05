var MainMenu = cc.Layer.extend({
    sprite: null,
    ctor: function () {
        this._super();

        var size = cc.winSize;
        var howToPlayButton = new ccui.Button();
        var menu = new ccui.Layout();
        var howNotToPlayButton = new ccui.Button();
        var playButton = new ccui.Button();

        //cc.audioEngine.playMusic(res.s_menu, true);

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

        howNotToPlayButton.loadTextures("res/howNotToPlay.png", "res/howNotToPlayPressed.png", " ");
        howNotToPlayButton.type = 2;
        howNotToPlayButton.x = 0;
        howNotToPlayButton.y = -49;
        howNotToPlayButton.setScale(0.6);
        howNotToPlayButton.addTouchEventListener(onMouseUp, this);

        var shutDown = new ccui.Button();
        shutDown.loadTextures("res/temp.png", "res/temp2.png", " ");
        shutDown.type = 3;
        shutDown.x = -200;
        shutDown.y = -100;
        shutDown.setScale(0.1);
        shutDown.addTouchEventListener(onMouseUp, this);

        menu.addChild(playButton);
        menu.addChild(howToPlayButton);
        menu.addChild(howNotToPlayButton);
        menu.addChild(shutDown);

        menu.x = size.width / 2;
        menu.y = size.height / 2;
        menu.setContentSize(size);
        this.addChild(menu, 1);

        /////////////////////////////
        // 3. add your codes below...
        function onMouseUp (event, type){
            if (type == ccui.Widget.TOUCH_ENDED && event.type == 0){
                cc.director.runScene(new ConfigScene());
            } else if(type == ccui.Widget.TOUCH_ENDED && event.type == 1) {
                cc.director.runScene(new HowToPlayScene());
            } else if (type == ccui.Widget.TOUCH_ENDED && event.type == 2) {
                cc.director.runScene(new NotHowToPlayScene());
            } else if (type == ccui.Widget.TOUCH_ENDED && event.type == 3) {
                cc.director.end()
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