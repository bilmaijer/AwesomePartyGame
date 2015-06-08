/**
 * Created by Spikey on 16.05.2015.
 */
function createTable(s) {

    var i;
    var j;
    var kasutatud = [];

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

    //buttonite tegemise asi randomiga

    var asukoht = [2, -1];
    //var empty = new ccui.Widget();

    for (i = 1; i < 6; i++) {
        for (j = 1; j < 6; j++) {
            var temp = new ccui.Button();
            temp.x = cc.winSize.width / 6 * i;
            temp.y = cc.winSize.height / 6 * j;
            x = i - 1;
            y = j - 1;
            temp.loadTextures("res/active.png", "res/a4.png", " ");
            s.addChild(temp, 201);
            temp.name = (i - 1).toString() + " " + (j - 1).toString();
            var randInt = Math.floor(Math.random() * (content.length));
            map[temp.name] = [temp, content[randInt]];
            refresh(x, y, temp);
            checkWin(x, y, temp);
        }
    }
    console.log(map.size);

    var hero = new cc.Sprite();
    hero.x = cc.winSize.width / 2;
    hero.y = cc.winSize.height / 12;
    s.addChild(hero, 250);

    // Lähedal asuvate ruutude kontroll ja ikooni muutus

    function refresh(x, y, temp) {
        if (kasutatud.indexOf(x.toString() + " " + y.toString()) == -1) {
            if (asukoht[0] - x == 0 || asukoht[0] - x == 1 || asukoht[0] - x == -1) {
                if (asukoht[1] - y == 0 || asukoht[1] - y == 1 || asukoht[1] - y == -1) {
                    if (asukoht[1] - y != 0 && asukoht[0] - x != 0){
                        temp.loadTextures("res/inactive.png", "res/inactive.png", " ");
                        temp.setScale(0.7, 0.7);
                    }
                    else {
                        temp.loadTextures(map[temp.name][1] + ".png", map[temp.name][1] + "1.png", " ");
                        temp.addTouchEventListener(onMouseUp, this);
                        temp.setScale(0.7, 0.7);
                    }
                }
                else {
                    temp.loadTextures("res/inactive.png", "res/inactive.png", " ");
                    temp.setScale(0.7, 0.7);
                }
            }
            else {
                temp.loadTextures("res/inactive.png", "res/inactive.png", " ");
                temp.setScale(0.7, 0.7);
            }
        }
        else {
            temp.loadTextures("res/done.png", "res/done.png", " ");
            temp.setScale(0.7, 0.7);
        }
        if (asukoht[0] - x == 0 && asukoht[1] - y == 0) {
            temp.loadTextures("res/done.png", "res/done.png", " ");
            temp.setScale(0.7, 0.7);
        }
    }

    function checkWin(x, y, temp){

    }

    function fullRefresh() {
            for (i = 1; i < 6; i++) {
                for (j = 1; j < 6; j++) {

                    refresh(i - 1, j - 1, map[(i - 1).toString() + " " + (j - 1).toString()][0]);
                }
            }
        }
    }