/**
 * Created by Spikey on 16.05.2015.
 */
function createTable(s){

    var i;
    var j;

    //buttonite tegemise asi randomiga

    var content = [];
    for (i = 0; i < 25; i++) {
        content.push(i)
    }
    var map = [];


    function onMouseUp(event, type) {
        if (type == ccui.Widget.TOUCH_ENDED){
            console.log("click");
        }
        //var array = map[event];
        //penCard(array.get(0), array.get(1))
    }
    //buttonite tegemise asi randomiga

    for (i = 1; i < 6; i++) {
        for (j = 1; j < 6; j++) {
            var temp = new ccui.Button();
            //cc.eventManager.addListener(listener1, temp);
            temp.loadTextures("res/a5.png", "res/a4.png", " ");
            temp.addTouchEventListener(onMouseUp, this);
            temp.x = cc.winSize.width / 6 * i;
            temp.y = cc.winSize.height / 6 * j + cc.winSize.height / 12;
            s.addChild(temp, 201);
            temp.name = (i-1).toString() + " " + (j-1).toString();
            console.log(temp.name);

            var randInt = Math.floor(Math.random() * (content.length));
            map[temp.name] = [i-1, j-1, content[randInt]];
        }
    }
    var hero = new cc.Sprite("res/favicon.ico");
    hero.x = cc.winSize.width / 2;
    hero.y = cc.winSize.height / 12;
    s.addChild(hero, 250);
    var moveTo = new cc.MoveTo(2, cc.p(cc.winSize.width / 2, cc.winSize.height / 3));
    //hero.runAction(moveTo);
         /*function onMouseUp(event) {
            var array = kaart[event.getButton()];
            openCard(array[0], array[1]);

    }*/
}