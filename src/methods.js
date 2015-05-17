/**
 * Created by Spikey on 16.05.2015.
 */
function createTable(s){

    var i;
    var j;
    var array;
    var kasutatud=[];
    var asukoht = [2,-1];
    var uus;
    var test;

    //buttonite tegemise asi randomiga

    var content = [];
    for (i = 0; i < 25; i++) {
        content.push(i)
    }
    var map = [];
    var hero = new cc.Sprite("res/favicon.ico");
    hero.x = cc.winSize.width / 2;
    hero.y = cc.winSize.height / 12;

    function onMouseUp(event, type) {
        if (type == ccui.Widget.TOUCH_ENDED){
            uus = event.name.split(" ");
            test = uus[0].toString() + " " + uus[1].toString();
            array = map[test];
            s.addChild(hero, 250);
            var moveTo = new cc.MoveTo(2, cc.p(array[0].x, array[0].y));
            hero.runAction(moveTo);
            if (asukoht[0] != null) {
                kasutatud.push(asukoht[0].toString() + " " + asukoht[1].toString());
                asukoht = (parseInt(uus[0]), parseInt(uus[1]));
                refresh(parseInt(uus[0]), parseInt(uus[1]), array[0]);
                //console.log("click");
            }
        }
        //var array = map[event];
        //penCard(array.get(0), array.get(1))
    }
    //buttonite tegemise asi randomiga

    for (i = 1; i < 6; i++) {
        for (j = 1; j < 6; j++) {
            var temp = new ccui.Button();
            temp.x = cc.winSize.width / 6 * i;
            temp.y = cc.winSize.height / 6 * j + cc.winSize.height / 12;
            x = i - 1;
            y = j - 1;
        refresh(x, y, temp);

            s.addChild(temp, 201);
            temp.name = (i-1).toString() + " " + (j-1).toString();
            //console.log(temp.name);

            var randInt = Math.floor(Math.random() * (content.length));
            map[temp.name] = [temp, content[randInt]];
        }
    }
    function refresh(x, y, temp){
        if (kasutatud.indexOf(x.toString()+" "+ y.toString())===-1) {
            if (asukoht[0] - x === 0 || asukoht[0] - x === 1 || asukoht[0] - x === -1) {
                if (asukoht[1] - y === 0 || asukoht[1] - y === 1 || asukoht[1] - y === -1) {
                    temp.loadTextures("res/a5.png", "res/a4.png", " ");
                    temp.addTouchEventListener(onMouseUp, this);
                }
                else {
                    temp.loadTextures("res/b5.png", "res/b5.png", " ");
                }
            }
            else {
                temp.loadTextures("res/b5.png", "res/b5.png", " ");
            }
        }
        else{
            temp.loadTextures("res/c5.png", "res/c5.png", " ");
        }
    }
}