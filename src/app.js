var MainMenu = cc.Layer.extend({
    sprite: null,
    ctor: function () {
        //////////////////////////////
        // 1. super init first
        this._super();

        /////////////////////////////
        // 2. add a menu item with "X" image, which is clicked to quit the program
        //    you may modify it.
        // ask the window size
        var size = cc.winSize;

        // add a "close" icon to exit the progress. it's an autorelease object
        var playButton = new ccui.Button();
        playButton.loadTextures("res/playButton.png", "res/playButtonPressed.png", " ");
        playButton.type = 0;
        playButton.x = 0;
        playButton.y = 49;
        playButton.addTouchEventListener(onMouseUp, this);
        var howToPlayButton = new ccui.Button();
        howToPlayButton.loadTextures("res/howToPlay.png", "res/howToPlayPressed.png", " ");
        howToPlayButton.type = 1;
        howToPlayButton.x = 0;
        howToPlayButton.y = 0;
        howToPlayButton.addTouchEventListener(onMouseUp, this);
        var howNotToPlayButton = new ccui.Button();
        howNotToPlayButton.loadTextures("res/howNotToPlay.png", "res/howNotToPlayPressed.png", " ");
        howNotToPlayButton.type = 2;
        howNotToPlayButton.x = 0;
        howNotToPlayButton.y = -49;
        howNotToPlayButton.addTouchEventListener(onMouseUp, this);
        var highscoresButton = new ccui.Button();
        highscoresButton.loadTextures("res/highscores.png", "res/highscoresPressed.png", " ");
        highscoresButton.type = 3;
        highscoresButton.x = 0;
        highscoresButton.y = -98;
        highscoresButton.addTouchEventListener(onMouseUp, this);

        var menu = new ccui.Layout();
        menu.addChild(playButton);
        menu.addChild(howToPlayButton);
        menu.addChild(howNotToPlayButton);
        menu.addChild(highscoresButton);
        menu.x = size.width / 2;
        menu.y = size.height / 2;
        menu.setContentSize(size);
        this.addChild(menu, 1);

        /////////////////////////////
        // 3. add your codes below...
        function onMouseUp (event, type){
            if (type == ccui.Widget.TOUCH_ENDED && event.type == 0){
                cc.director.runScene(new GameboardScene());
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
