/**
 * Created by Spikey on 16.05.2015.
 */
function createTable(s){
    //buttonite tegemise asi randomiga

    var content = [];
    for(i=0; i<25;i++){
        content.push(i)
    }
    var map_fromButton=[];
    var map_fromIndex=[];

    //buttonite tegemise asi randomiga

    for (i=1;i<6;i++) {
        for (j = 1; j = 6; j++) {
            var temp = new ccui.Button();
            temp.loadTextures("res/CloseNormal.png", "res/CloseSelected.png", " ");
            temp.x = cc.winSize.width / 5 * i - cc.winSize.width / 10;
            temp.y = cc.winSize.height / 6 * j + cc.winSize.height / 12;
            s.addChild(temp, 201);

            var randInt = Math.floor(Math.random() * (content.length));
            map_fromIndex[i.toString() + " " + j.toString()] = [temp.toString(), content[randInt]];
            map_fromButton[temp.toString()] = [i, j, content[randInt]];

        }
    }
    var hero = new cc.Sprite("res/favicon.ico");
    hero.x = cc.winSize.width / 2;
    hero.y = cc.winSize.height / 12;
    s.addChild(hero, 250);
    var listener1 = cc.EventListener.create({
        event: cc.EventListener.MOUSE,
        onMouseUp: function(event) {
            var array = kaart[event.getButton()];
            openCard(array[0], array[1]);
        }
    });
}