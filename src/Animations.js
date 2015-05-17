/**
 * Created by Spikey on 16.05.2015.
 */
function openCard(a, b, s){
    console.log(a +" "+ b);

    function onMouseUp(event, type) {
        if (type == ccui.Widget.TOUCH_ENDED) {
            event.getParent().runAction(
                cc.moveTo(0.5,cc.winSize.width*2,cc.winSize.height*2)
            )

        }
        //var array = map[event];
        //penCard(array.get(0), array.get(1))
    }
    //this.labelInstructions = new cc.LabelTTF("Drink!");
    //this.labelInstructions.setColor(cc.color(0,0,0));
    var MySprite = new cc.Sprite("res/card3.png");

    var next = new ccui.Button();
    next.loadTextures("res/check.png", "res/check.png", " ");

    next.setScale(0.4);
    next.addTouchEventListener(onMouseUp, this);





    //this.labelInstructions.setPosition(labelX/2, labelY/2);

    //MySprite.setScale(0.25);

    MySprite.attr({
        x: a,
        y: b,
        scale: 1,
        rotation: 0
    });
    //MySprite.flipY = true;




    next.setPosition(200, 70);
    //MySprite.setScale(0,01);

    //MySprite.addChild(this.labelInstructions, 252);
    MySprite.addChild(next, 252);
    s.addChild(MySprite, 251);




    var x = cc.winSize.width/2;
    var y = cc.winSize.height/2;

    //this.sprite
    MySprite.runAction(
        cc.spawn(
            //cc.scaleTo(1,0.5,0.5),
            cc.moveTo(1,x,y)

        )
    );

}
