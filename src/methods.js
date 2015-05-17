/**
 * Created by Spikey on 16.05.2015.
 */
function createTable(s) {

    var i;
    var j;
    var array;
    var kasutatud = [];
    var uus;
    var test;

    //buttonite tegemise asi randomiga

    var content = [];
    for (i = 0; i < 5; i++) {
        content.push("res/drinking");
        content.push("res/sporty");
        content.push("res/brainy");
        content.push("res/tutvumis");
        content.push("res/naughty");
    }
    var map = [];


    function onMouseUp(event, type) {
        if (type == ccui.Widget.TOUCH_ENDED) {
            var uus = event.name.split(" ");
            var test = uus[0].toString() + " " + uus[1].toString();
            var array = map[test];

            openCard(array[0].x, array[0].y, s);
            var moveTo = new cc.MoveTo(2, cc.p(array[0].x, array[0].y));
            hero.runAction(moveTo);
            if (asukoht[0] != null) {
                kasutatud.push(asukoht[0].toString() + " " + asukoht[1].toString());
                asukoht = uus;
                fullRefresh(asukoht[0], asukoht[1]);
            }
        }
    }

    //buttonite tegemise asi randomiga

    var asukoht = [2, -1];

    var empty = new ccui.Widget();
    for (i = 1; i < 6; i++) {
        for (j = 1; j < 6; j++) {
            var temp = new ccui.Button();
            temp.x = cc.winSize.width / 6 * i;
            temp.y = cc.winSize.height / 6 * j + cc.winSize.height / 12;
            x=i-1;
            y=j-1;
            temp.loadTextures("res/active.png", "res/a4.png", " ", empty);
            s.addChild(temp, 201);
            temp.name = (i - 1).toString() + " " + (j - 1).toString();
            var randInt = Math.floor(Math.random() * (content.length));
            map[temp.name] = [temp, content[randInt]];
            refresh(x, y, temp.name);
        }
    }

    var hero = new cc.Sprite();
    hero.x = cc.winSize.width / 2;
    hero.y = cc.winSize.height / 12;
    s.addChild(hero, 250);
    function refresh(x, y, tempName) {
        if (kasutatud.indexOf(x.toString() + " " + y.toString()) == -1) {
            if (asukoht[0] - x == 0 || asukoht[0] - x == 1 || asukoht[0] - x == -1) {
                if (asukoht[1] - y == 0 || asukoht[1] - y == 1 || asukoht[1] - y == -1) {
                    console.log(map[tempName]);
                    var arr = map[tempName];
                    temp.loadTextures(arr[1]+".png",arr[1]+"1.png"," ");
                    temp.setScale(0.1, 0.1);
                    temp.addTouchEventListener(onMouseUp, this);
                }
                else {
                    temp.loadTextures("res/inactive.png", "res/inactive.png", " ");
                }
            }
            else {
                temp.loadTextures("res/inactive.png", "res/inactive.png", " ");
            }
        }
        else {
            temp.loadTextures("res/c5.png", "res/c5.png", " ");
        }
    }

    function fullRefresh() {
        for (i = 1; i < 6; i++) {
            for (j = 1; j < 6; j++) {

                refresh(i - 1, j - 1, (i - 1).toString() + " " + (j - 1).toString());
            }

        }
    }
}