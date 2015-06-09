/**
 * Created by Spikey on 9.06.2015.
 */
var ConfigLayer = cc.Layer.extend({
    sprite: null,
    ctor: function () {
        this._super();
        var sv = new ccui.ScrollView();
        var ls = cc.sys.localStorage;
        var widgetSize = cc.winSize;
        sv.setContentSize(cc.size(widgetSize.width / 2, widgetSize.height / 2));
        sv.anchorX = 0.5;
        sv.anchorY = 0.5;
        sv.x = widgetSize.width / 2;
        sv.y = widgetSize.height / 2;
        sv.setTouchEnabled(true);
        sv.setDirection(ccui.ScrollView.DIR_VERTICAL);

        var suvaline = new cc.LabelTTF();
        //esimese korra funktsioon käivitatakse ainult siis, kui tuvastatakse, et local storage's puudub "keys"
        //praegu on firstTime all alert, mis teatab, kui on esimene kord. Siis saame seda testida native appina.
        //TODO: UNCOMMENT IF CLAUSE FOR FINAL VERSION. ALSO UNCOMMENT WHEN TESTING ON WINDOWS, ALSO UNCOMMENT IN firstTime().
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

        function firstTime() {
            //TODO: OUR CONTENT GOES HERE
            var keys = ["drinking", "sporty", "brainy", "tutvumis", "naughty"];
            var drinking = ["Programmers drink!", "Pick three people to share their drinks with anyone who wishes", "Bottoms up!"];
            var sporty = ["Jump off a cliff!", "Do jumping jacks!", "Do a barrel roll!"];
            var brainy = ["Think reallllly hard", "Riddle the person to your right", "Ask the impossible question"];
            var tutvumis = ["Ask the second person on your left three personal questions", "Everyone say their name", "please someone, let me out, i'm stuck in the card printing mach"];
            var naughty = ["Lick a shoe or smth", "I don't know what you young people do.", "Back in my day..."];
            //TODO: IF TESTING ON WINDOWS, UNCOMMENT. CHECKS IF IT DOES ACTUALLY SAVE.
            //alert("Esimene kord!");
            ls.setItem("keys", keys);
            ls.setItem("drinking", drinking);
            ls.setItem("sporty", sporty);
            ls.setItem("brainy", brainy);
            ls.setItem("tutvumis", tutvumis);
            ls.setItem("naughty", naughty);
        }

        function onMouseUp(event, type){
            if (type == ccui.Widget.TOUCH_ENDED){
                //TODO: FIGURE OUT WHAT TO DO HERE...
                alert("FUCK THIS.")
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