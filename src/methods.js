/**
 * Created by Spikey on 16.05.2015.
 */
var score = 0;
var win = 0;

function createTable(s) {
    var i;
    var j;
    var kasutatud = [];
    s.busy = false;
    var ls = cc.sys.localStorage;


    // allPossibleTasks on hashMap, kus võtmeteks on kategooriad ja väärtusteks arrayList, kus on kõik võimalikud taskid.
    // SEDA HASHMAPI KASUTADA EVENTLISTENERIS, MITTE LOCAL STORAGE'T.
    var allPossibleTasks = createMap();


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


    function fullRefresh() {
        win = 0;
        for (i = 1; i < 6; i++) {
            for (j = 1; j < 6; j++) {
                refresh(i - 1, j - 1, map[(i - 1).toString() + " " + (j - 1).toString()][0]);
            }
        }
    }

    function createMap() {
        var map = {};
        var toLoop = ls.getItem("keys").split(",");
        for (var i = 0; i < toLoop.length; i++) {
            map[toLoop[i]] = ls.getItem(toLoop[i]).split(",");
        }
        return map;
    }

}