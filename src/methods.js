/**
 * Created by Spikey on 16.05.2015.
 */
function createTable(){
    for (i = 1; i < 6; i++) {
        for (j = 1; j < 6; j++) {
            var temp = new ccui.Button();
            temp.loadTextures("res/CloseNormal.png", "res/CloseSelected.png", " ");
            temp.x = cc.winSize.width / 5 * i - cc.winSize.width / 10;
            temp.y = cc.winSize.height / 6 * j + cc.winSize.height / 12;
            this.addChild(temp, 201);
        }
    }
    var hero = new cc.Sprite("res/favicon.ico");
    hero.x = cc.winSize.width / 2;
    hero.y = cc.winSize.height / 12;
    this.addChild(hero, 250);
   /* var listener1 = cc.EventListener.create({
        event: cc.EventListener.MOUSE,
        onMouseUp: function(event){
            var array = kaart[event.getButton()];
            openCard(array.get(0), array.get(1))
        }
    });*/
}