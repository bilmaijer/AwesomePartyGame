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
    var map_fromButton = [];
    var map_fromIndex = [];

    var listener1 = cc.EventListener.create({
        event: cc.EventListener.MOUSE,
        onMouseUp: function(event){
            console.log("click");
            var array = map_fromButton[event.getButton()];
            openCard(array.get(0), array.get(1))
        }
    });
    //buttonite tegemise asi randomiga

    for (i = 1; i < 6; i++) {
        for (j = 1; j < 6; j++) {
            var temp = new ccui.Button();
            cc.eventManager.addListener(listener1, temp);
            temp.loadTextures("res/a5.png", "res/a4.png", " ");

            temp.x = cc.winSize.width / 6 * i;
            temp.y = cc.winSize.height / 6 * j + cc.winSize.height / 12;
            s.addChild(temp, 201);

            console.log(temp);
            var randInt = Math.floor(Math.random() * (content.length));

            map_fromIndex[i.toString() + " " + j.toString()] = [temp.toString(), content[randInt]];
            //console.log("rand "+content[randInt]);
            //console.log("")
            map_fromButton[temp] = [i, j, content[randInt]];
            console.log("rand "+map_fromButton);
            content.splice(randInt, 1);

        }
    }
    console.log(map_fromButton);
    var hero = new cc.Sprite("res/favicon.ico");
    hero.x = cc.winSize.width / 2;
    hero.y = cc.winSize.height / 12;
    s.addChild(hero, 250);

}