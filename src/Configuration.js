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
        var keys = ["drinking", "sporty", "brainy", "tutvumis", "naughty"];
        var buttons = [];

        for (var p = 0; p < keys.length; p++) {
            var temp = new ccui.Button();
            temp.a = "res/test.png";
            temp.b = "res/test2.png";
            temp.loadTextures(temp.a, temp.b, " ");
            temp.addTouchEventListener(onMouseUp, this);
            temp.setScale(0.7);
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

        layout.addChild(confirm, 252);
        this.addChild(layout, 251);

        function onConfirm(event, type) {
            if (type == ccui.Widget.TOUCH_ENDED && event.didIt) {
                finalThemes = [];
                for (var r = 0; r < buttons.length; r++){
                    if (buttons[r].didIt == false){
                        finalThemes.push(buttons[r].key)
                    }
                }
                cc.director.runScene(new GameBoardScene())
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

        /*"""var sv = new ccui.ScrollView();
         var widgetSize = cc.winSize;
         sv.setContentSize(cc.size(widgetSize.width, widgetSize.height));
         sv.anchorX = 0.5;
         sv.anchorY = 0.5;
         sv.x = widgetSize.width / 2;
         sv.y = widgetSize.height / 2;
         sv.setTouchEnabled(true);
         sv.setDirection(ccui.ScrollView.DIR_VERTICAL);

         var suvaline = new cc.LabelTTF();
         //esimese korra funktsioon käivitatakse ainult siis, kui tuvastatakse, et local storage's puudub "keys"
         //praegu on firstTime all alert, mis teatab, kui on esimene kord. Siis saame seda testida native appina.
         //if (ls.getItem("keys") == null){
         firstTime();
         //}
         var options = ls.getItem("keys").split(",");
         var innerWidth = sv.getContentSize().width;
         var innerHeight = sv.getContentSize().height + suvaline.getContentSize().height*options.length;
         sv.setInnerContainerSize(cc.size(innerWidth, innerHeight));
         suvaline.x = innerWidth / 2;
         suvaline.y = innerHeight / 2;
         sv.addChild(suvaline);
         for (var i = 0; i < options.length; i++){
         var tempBox = new ccui.CheckBox();
         tempBox.setTouchEnabled(true);
         tempBox.loadTextures("res/grey_circle.png","res/grey_boxTick.png","res/grey_boxTick.png","res/grey_circle.png","res/grey_boxTick.png");
         tempBox.x = innerWidth / 2 + 30;
         tempBox.y = innerHeight / options.length * i;
         tempBox.string = options[i];
         var temp = new cc.LabelTTF();
         temp.setString(options[i]);
         temp.x = innerWidth / 2;
         temp.y = innerHeight / options.length * i;
         temp.setEventListener(onMouseUp,this);
         sv.addChild(temp);
         }
         this.addChild(sv);
         */

        //function firstTime() {
        //    //TODO: OUR CONTENT GOES HERE
        //    var keys = ["drinking", "sporty", "brainy", "tutvumis", "naughty"];
        //    var drinking = ["Programmers drink!", "Pick three people to share their drinks with anyone who wishes", "Bottoms up!"];
        //    var sporty = ["Jump off a cliff!", "Do jumping jacks!", "Do a barrel roll!"];
        //    var brainy = ["Think reallllly hard", "Riddle the person to your right", "Ask the impossible question"];
        //    var tutvumis = ["Ask the second person on your left three personal questions", "Everyone say their name", "please someone, let me out, i'm stuck in the card printing mach"];
        //    var naughty = ["Lick a shoe or smth", "I don't know what you young people do.", "Back in my day..."];
        //    //TODO: IF TESTING ON WINDOWS, UNCOMMENT. CHECKS IF IT DOES ACTUALLY SAVE.
        //    //alert("Esimene kord!");
        //    ls.setItem("keys", keys);
        //    ls.setItem("drinking", drinking);
        //    ls.setItem("sporty", sporty);
        //    ls.setItem("brainy", brainy);
        //    ls.setItem("tutvumis", tutvumis);
        //    ls.setItem("naughty", naughty);
        //}
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