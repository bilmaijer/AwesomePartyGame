/**
 * Created by Spikey on 16.05.2015.
 */
function createTable(s) {

    var win;
    var i;
    var j;
    var kasutatud = [];
    var ls = cc.sys.localStorage;
    //esimese korra funktsioon käivitatakse ainult siis, kui tuvastatakse, et local storage's puudub "keys"
    //praegu on firstTime all alert, mis teatab, kui on esimene kord. Siis saame seda testida native appina.
    //TODO: uncomment if clause for final version.
    //if (ls.getItem("keys") == null){
        firstTime();
    //}
    //buttonite tegemise asi randomiga

    var content = [];

    for (var l = 0; l < 5; l++) {
        content.push("res/drinking");
        content.push("res/sporty");
        content.push("res/brainy");
        content.push("res/tutvumis");
        content.push("res/naughty");
    }
    var cards = [];
    for (var k = 0; k < 5; k++) {
        cards.push("res/card1.png");
        cards.push("res/card2.png");
        cards.push("res/card3.png");
    }

    var map = [];

    function onMouseUp(event, type) {
        if (type == ccui.Widget.TOUCH_ENDED) {
            var uus = event.name.split(" ");
            var test = uus[0].toString() + " " + uus[1].toString();
            var array = map[test];
            if (array[0].switch){
                openCard(array[0].x, array[0].y, s, cards[0]);
                cards.splice(0,1);
                var moveTo = new cc.MoveTo(2, cc.p(array[0].x, array[0].y));
                hero.runAction(moveTo);
                if (asukoht[0] != null) {
                    kasutatud.push(asukoht[0].toString() + " " + asukoht[1].toString());
                    asukoht = uus;
                    fullRefresh();
                }
            }
        }
    }

    //buttonite tegemise asi randomiga

    var asukoht = [2, -1];
    //var empty = new ccui.Widget();
    win = 0;
    for (i = 1; i < 6; i++) {
        for (j = 1; j < 6; j++) {
            var temp = new ccui.Button();
            temp.x = cc.winSize.width / 6 * i;
            temp.y = cc.winSize.height / 6 * j;
            temp.switch = !!(i == 0 && j == 2);
            x = i - 1;
            y = j - 1;
            temp.addTouchEventListener(onMouseUp, this);
            s.addChild(temp, 201);
            temp.name = (i - 1).toString() + " " + (j - 1).toString();
            var randInt = Math.floor(Math.random() * (content.length));
            map[temp.name] = [temp, content[randInt]];
            refresh(x, y, temp);
        }
    }

    var hero = new cc.Sprite();
    hero.x = cc.winSize.width / 2;
    hero.y = cc.winSize.height / 12;
    s.addChild(hero, 250);

    // L�hedal asuvate ruutude kontroll ja ikooni muutus

    function refresh(x, y, temp) {
        if (kasutatud.indexOf(x.toString() + " " + y.toString()) == -1) {
            if (asukoht[0] - x == 0 || asukoht[0] - x == 1 || asukoht[0] - x == -1) {
                if (asukoht[1] - y == 0 || asukoht[1] - y == 1 || asukoht[1] - y == -1) {
                    if (asukoht[1] - y != 0 && asukoht[0] - x != 0){
                        temp.loadTextures("res/inactive.png", "res/inactive.png", " ");
                        temp.setScale(0.7, 0.7);
                        temp.switch = false;
                    }
                    else {
                        temp.loadTextures(map[temp.name][1] + ".png", map[temp.name][1] + "1.png", " ");
                        temp.setScale(0.7, 0.7);
                        temp.switch = true;
                        win++;
                    }
                }
                else {
                    temp.loadTextures("res/inactive.png", "res/inactive.png", " ");
                    temp.setScale(0.7, 0.7);
                    temp.switch = false;
                }
            }
            else {
                temp.loadTextures("res/inactive.png", "res/inactive.png", " ");
                temp.setScale(0.7, 0.7);
                temp.switch = false;
            }
        }
        else {
            temp.loadTextures("res/done.png", "res/done.png", " ");
            temp.setScale(0.7, 0.7);
            temp.switch = false;
        }
        if (asukoht[0] - x == 0 && asukoht[1] - y == 0) {
            temp.loadTextures("res/done.png", "res/done.png", " ");
            temp.setScale(0.7, 0.7);
            temp.switch = false;
        }
    }
    function firstTime() {
        //TODO: OUR CONTENT GOES HERE
        var keys = ["drinking", "sporty", "brainy", "tutvumis", "naughty"];
        var drinking = ["Programmers drink!", "Pick three people to share their drinks with anyone who wishes", "Bottoms up!"];
        var sporty = ["Jump off a cliff!", "Do jumping jacks!", "Do a barrel roll!"];
        var brainy = ["Think reallllly hard", "Riddle the person to your right", "Ask the impossible question"];
        var tutvumis = ["Ask the second person on your left three personal questions","Everyone say their name","please someone, let me out, i'm stuck in the card printing mach"];
        var naughty = ["Lick a shoe or smth", "I don't know what you young people do.", "Back in my day..."];
        alert("Esimene kord!");
        ls.setItem("keys", keys);
        ls.setItem("drinking", drinking);
        ls.setItem("sporty", sporty);
        ls.setItem("brainy", brainy);
        ls.setItem("tutvumis", tutvumis);
        ls.setItem("naughty", naughty);
    }
    function fullRefresh() {
        win = 0;
            for (i = 1; i < 6; i++) {
                for (j = 1; j < 6; j++) {
                    refresh(i - 1, j - 1, map[(i - 1).toString() + " " + (j - 1).toString()][0]);
                }
            }
        if (win==1){
            console.log("Game Over");
            //WIN STATE CONFIRMED!!!!
            //INSERT FUNCTION HERE!!!
        }
        }
    }