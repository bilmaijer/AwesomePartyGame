/**
 * Created by Spikey on 16.05.2015.
 */
function openCard(a, b, s){
    console.log(a +" "+ b);

    this.labelInstructions = new cc.LabelTTF("Drink!");
    this.labelInstructions.setColor(cc.color(0,0,0));
    var MySprite = new cc.Sprite("res/a4.png");

    MySprite.attr({
        x: a,
        y: b,
        scale: 1,
        rotation: 0
    });
    //MySprite.flipY = true;


    var next = new ccui.Button();




    next.loadTextures("res/check.png", "res/check.png", " ");
    next.setScale(0.5);
    var labelX = MySprite.width;
    var labelY = MySprite.height;


    this.labelInstructions.setPosition(labelX/2, labelY/2);
    next.setPosition(labelX/2, labelY/5)
    MySprite.addChild(next, 252);
    MySprite.addChild(this.labelInstructions, 252);
    s.addChild(MySprite, 251);

    var x = cc.winSize.width/2;
    var y = cc.winSize.height/2;

    //this.sprite
    MySprite.runAction(
        cc.spawn(
            cc.scaleTo(1,4,4),
            cc.moveTo(1,x,y)

        )
    );

}
function nextMove(a, b, hero) {

}