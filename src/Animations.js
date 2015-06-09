/**
 * Created by Spikey on 16.05.2015.
 */
function openCard(a, b, s, card, allPossibleTasks){
    console.log(a +" "+ b);


    function onMouseUp(event, type) {
        if (type == ccui.Widget.TOUCH_ENDED) {
            event.getParent().runAction(
                cc.moveTo(2,cc.winSize.width*3,cc.winSize.height*3)
            )

        }
        //var array = map[event];
        //penCard(array.get(0), array.get(1))
    }
    //this.labelInstructions = new cc.LabelTTF("Drink!");
    //this.labelInstructions.setColor(cc.color(0,0,0));
    var MySprite = new cc.Sprite(card);
    var layout = new ccui.Layout();
    layout.attr({
        anchorX: 0.5,
        anchorY: 0.5,
        x: a,
        y: b
    });
    layout.setBackGroundColorType(ccui.Layout.BG_COLOR_SOLID);
    layout.setBackGroundColor(cc.color(222, 214, 185));
    layout.setContentSize(cc.size(400, 400));
    var contentText = new ccui.Text;
    var widgetSize = layout.getContentSize();
    var allSpecificTasks = allPossibleTasks[card];
    var newTaskPosition = Math.floor((Math.random() * allSpecificTasks.length - 1) + 1);
    contentText.attr({
        string: allSpecificTasks[newTaskPosition],
        fontName: "Marker Felt",
        anchorX: 1,
        anchorY: 1,
        x: widgetSize.width,
        y: widgetSize.height
    });
    contentText.setContentSize(cc.size(400,400));
    contentText.ignoreContentAdaptWithSize(false);
    allSpecificTasks.splice(newTaskPosition, 1);
    allPossibleTasks[card] = allSpecificTasks;
    var next = new ccui.Button();
    next.loadTextures("res/check.png", "res/check.png", " ");

    next.setScale(0.4);
    next.addTouchEventListener(onMouseUp, this);





    //this.labelInstructions.setPosition(labelX/2, labelY/2);

    //MySprite.setScale(0.25);

    //MySprite.flipY = true;
    MySprite.attr({
        x: a,
        y: b,
        scale: 1,
        rotation: 0
    });

    next.setPosition(200, 70);
    //MySprite.setScale(0,01);

    //MySprite.addChild(this.labelInstructions, 252);
    layout.addChild(next, 252);
    layout.addChild(contentText, 252);
    s.addChild(layout, 251);


    var x = cc.winSize.width/2;
    var y = cc.winSize.height/2;

    //this.sprite
    layout.runAction(
        cc.spawn(
            //cc.scaleTo(1,0.5,0.5),
            cc.moveTo(1,x,y)

        )
    );

}
