/**
 * Created by Spikey on 16.05.2015.
 */
var counter=true;
var end = true;
function openCard(a, b, s, card, allPossibleTasks){
    console.log(a +" "+ b);

    function onMouseUp(event, type) {

        s.busy = false;
        if (type == ccui.Widget.TOUCH_ENDED && event.didIt) {
            score+= 10;
            event.getParent().runAction(
                cc.moveTo(2,cc.winSize.width*3,cc.winSize.height*3)
            );
            if (win==1){
                winC();
            }
        } else if (type == ccui.Widget.TOUCH_ENDED) {
            score-=25;
            //TODO: HERE COMES THE NEGATIVE SCORE THING
            event.getParent().runAction(
                cc.moveTo(2,cc.winSize.width*3,cc.winSize.height*3)
            );
            if (win==1){
                winC();
            }
        }

        //var array = map[event];
        //penCard(array.get(0), array.get(1))
    }

    //this.labelInstructions = new cc.LabelTTF("Drink!");
    //this.labelInstructions.setColor(cc.color(0,0,0));
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
    next.setPosition(125, 70);
    next.didIt = true;

    var decline = new ccui.Button();
    decline.loadTextures("res/decline.png", "res/decline.png", " ");
    decline.setScale(0.2);
    decline.addTouchEventListener(onMouseUp, this);
    decline.setPosition(275, 70);
    decline.didIt = false;

    layout.addChild(decline, 252);
    layout.addChild(next, 252);
    layout.addChild(contentText, 252);
    s.addChild(layout, 251);

    layout.runAction(
        cc.spawn(
            //cc.scaleTo(1,0.5,0.5),
            cc.moveTo(1,cc.winSize.width/2,cc.winSize.height/2)


        )
    );
}
function winC(){
        if (counter) {
            counter=false;
            setTimeout(alert("Game Over!\n Your score is " + score),1000);
            console.log("Game Over1");

            //TODO: WIN STATE CONFIRMED!!!!
            //TODO: INSERT FUNCTION CALL HERE!!!
        }
}
