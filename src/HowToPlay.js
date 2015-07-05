/**
 * Created by Spikey on 12.06.2015.
 */
var HowToPlay = cc.Layer.extend({
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
        /*var allSpecificTasks = allPossibleTasks[card];
        var newTaskPosition = Math.floor((Math.random() * allSpecificTasks.length - 1) + 1);*/
        contentText.attr({
            string: "Welcome!\nThis is a game and a tool for parties.\nThe aim of the game is to have fun with your friends. So make sure you have some ready!\nThe game is played on a gameboard consisting of 25 cards.\nYou only need to open the game on one device.\nWhen you hit the \"Play\" button, it opens up a screen where you can choose different categories for you game. You have to have at least three, but there is no upper limit.\nOnce you have chosen the categories you should also choose who will be your Gamemaster. If you have the \"Rules\" cards in play, then the Gamemaster might change, but if not, then he/she\'ll be set for the whole game!\nNow that you\'re ready, you can go on.\nThe game is played with the whole group. You will earn points and complete tasks together. I mentioned the game was played on a gameboard. On this gameboard you have to move from card to card. You can\'t go back and you can only move to the adjecent cards. The game will end once there are no more possible moves. You have to choose how to move together, so choose wisely!\nAt first there will only be one card available to you and the others will be gray. If you click on a card you will get a task or activity to do. Once you have done the task on the card, you can press the check button and earn some points. If you didn\'t do the task (since you don\'t have to) you can also press the X and lose a significant amount of points.",
            fontName: "Marker Felt",
            fontSize: 20,
            anchorX: 0.5,
            anchorY: 0,
            x: widgetSize.width/2
        });

        contentText.setColor(cc.color(0,0,0));
        contentText.setContentSize(cc.size(800,800));
        contentText.setScale(0.47);
        contentText.ignoreContentAdaptWithSize(false);
        contentText.setFontName(_b_getFontName(res.robota));
        layout.addChild(contentText, 252);
        /*var instruction = new cc.Sprite("res/HowTo.png");
        instruction.setPosition(200, 200);
        layout.addChild(instruction);*/

        //// Confirm button
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
                else if (fromWhere == 1){
                    cc.director.runScene(new ConfigScene())
                }
            }
        }

        return true;
    }
});

var HowToPlayScene = cc.Scene.extend({
    onEnter: function () {
        this._super();
        var layer = new HowToPlay();
        this.addChild(layer);
    }
});
