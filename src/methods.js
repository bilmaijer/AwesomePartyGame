/**
 * Created by Spikey on 16.05.2015.
 */
var score = 0;
var win = 0;

function createTable(s) {
    var i;
    var j;
    var kasutatud = [];
    score = 0;
    win = 0;
    s.busy = false;

    // allPossibleTasks on hashMap, kus võtmeteks on kategooriad ja väärtusteks arrayList, kus on kõik võimalikud taskid.
    // SEDA HASHMAPI KASUTADA EVENTLISTENERIS, MITTE LOCAL STORAGE'T.
    var allPossibleTasks = createAll();


    //buttonite tegemise asi randomiga

    var content = [];

    for (var l = 0; l < 5; l++) {
        content.push("res/drinking");
        content.push("res/sporty");
        content.push("res/brainy");
        content.push("res/tutvumis");
        content.push("res/naughty");
    }
    //var cards = [];
    //for (var k = 0; k < 5; k++) {
    //    cards.push("res/card1.png");
    //    cards.push("res/card2.png");
    //    cards.push("res/card3.png");
    //}

    var map = [];

    var where;
    var which = 0;
    //score label
    /*s.labelCoin = new cc.LabelTTF("Score: " + score, "Helvetica", 20);
    s.labelCoin.setColor(cc.color(245, 245, 245));//black color
    s.labelCoin.setPosition(cc.p(70, cc.winSize.height - 20));
    s.addChild(s.labelCoin);*/
    function onMouseUp(event, type) {
        if (type == ccui.Widget.TOUCH_ENDED && !s.busy) {
            var uus = event.name.split(" ");
            var test = uus[0].toString() + " " + uus[1].toString();
            var array = map[test];
            if (array[0].switch) {
                s.busy = true;
                openCard(array[0].x, array[0].y, s, array[0].type.slice(4), allPossibleTasks);
                if (asukoht[0] != null) {
                    kasutatud.push(asukoht[0].toString() + " " + asukoht[1].toString());
                    if (asukoht[0]>uus[0]){
                        where = "left";
                    }
                    else if (asukoht[0]<uus[0]){
                        where = "right";
                    }
                    else if (asukoht[1]>uus[1]){
                        where = "down";
                    }
                    else{
                        where = "up";
                    }
                    console.log(where);
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
            var x = i - 1;
            var y = j - 1;
            temp.addTouchEventListener(onMouseUp, this);
            s.addChild(temp, 201);
            temp.name = (i - 1).toString() + " " + (j - 1).toString();
            var randInt = Math.floor(Math.random() * (content.length));
            map[temp.name] = [temp, content[randInt]];
            refresh(x, y, temp);
        }
    }

    //var hero = new cc.Sprite();
    //hero.x = cc.winSize.width / 2;
    //hero.y = cc.winSize.height / 12;
    //s.addChild(hero, 250);

    // L�hedal asuvate ruutude kontroll ja ikooni muutus

    function refresh(x, y, temp) {
        if (kasutatud.indexOf(x.toString() + " " + y.toString()) == -1) {
            if (asukoht[0] - x == 0 || asukoht[0] - x == 1 || asukoht[0] - x == -1) {
                if (asukoht[1] - y == 0 || asukoht[1] - y == 1 || asukoht[1] - y == -1) {
                    if (asukoht[1] - y != 0 && asukoht[0] - x != 0) {
                        temp.loadTextures("res/inactive.png", "res/inactive.png", " ");
                        temp.setScale(0.7, 0.7);
                        temp.switch = false;
                    }
                    else {
                        temp.loadTextures(map[temp.name][1] + ".png", map[temp.name][1] + "1.png", " ");
                        temp.type = map[temp.name][1];
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
        /*else {
            temp.loadTextures("res/footprintR.png", "res/footprintR.png", " ");

            temp.setScale(0.07, 0.07);
            temp.switch = false;
        }*/
        /*if (asukoht[0] - x == 0 && asukoht[1] - y == 0) {
            if (which % 2 == 0) {
                temp.loadTextures("res/footprintR.png", "res/footprintR.png", " ");
            }
            else{
                temp.loadTextures("res/footprintL.png", "res/footprintL.png", " ");
            }
            which++;
            if (where == "right") {
                temp.attr({
                    rotation: 90
                });
            }
            else if (where == "left"){
                temp.attr({
                    rotation: 270
                });
            }
            else if (where == "down"){
                temp.attr({
                    rotation: 180
                });
            }
            temp.setScale(0.07, 0.07);

            temp.switch = false;
        }*/
    }


    function fullRefresh() {
        win = 0;
        for (i = 1; i < 6; i++) {
            for (j = 1; j < 6; j++) {
                refresh(i - 1, j - 1, map[(i - 1).toString() + " " + (j - 1).toString()][0]);
            }
        }
    }

    //function createMap() {
    //    var keys = ["drinking", "sporty", "brainy", "tutvumis", "naughty"];
    //    var map = {};
    //    var toLoop = ls.getItem("keys").split(",");
    //    for (var i = 0; i < toLoop.length; i++) {
    //        map[toLoop[i]] = ls.getItem(toLoop[i]).split(",");
    //    }
    //    return map;
    //}
    function createAll() {
        //TODO: OUR CONTENT GOES HERE
        var map = {};
        var keys = ["drinking", "sporty", "brainy", "tutvumis", "naughty"];
        var drinking = ["Programmers drink!", "Pick three people to share their drinks with anyone who wishes", "Bottoms up!"];
        var sporty = ["Jump off a cliff!", "Do jumping jacks!", "Do a barrel roll!"];
        var brainy = ["Think reallllly hard", "Riddle the person to your right", "Ask the impossible question"];
        var tutvumis = ["Ask the second person on your left three personal questions", "Everyone say their name", "please someone, let me out, i'm stuck in the card printing mach"];
        var naughty = ["Lick a shoe or smth", "I don't know what you young people do.", "Back in my day..."];
        //alert("Esimene kord!");
        map["keys"] = keys;
        map["drinking"] = drinking;
        map["sporty"] = sporty;
        map["brainy"] = brainy;
        map["tutvumis"] = tutvumis;
        map["naughty"] = naughty;
        return map;
    }
}