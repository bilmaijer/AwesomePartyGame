/**
 * Created by Spikey on 16.05.2015.
 */
var end = true;
var cumulative = 5;
function openCard(temp, s, card, allPossibleTasks) {
    function onMouseUp(event, type) {
        s.busy = false;
        var randomnumber1=Math.round(Math.random());
        var randomnumber2=Math.round(Math.random());
        if (randomnumber1 == 0){
            randomnumber1 = -1;
        }
        if (randomnumber2 == 0){
            randomnumber2 = -1;
        }
        if (type == ccui.Widget.TOUCH_ENDED && event.didIt) {
            cumulative += 5;
            score += cumulative;
            s.labelCoin.setString("Score: " + score);
            event.getParent().runAction(
                cc.moveTo(2, randomnumber1 * (-1) * cc.winSize.width * (Math.random()*3+2), randomnumber2 * (-1) * cc.winSize.height * (Math.random()*3+2))
            );
            console.log(Math.random()*3+3);
            console.log(Math.random()*3+3);
            if (win == 1) {
                winC();
            }
        } else if (type == ccui.Widget.TOUCH_ENDED) {
            score -= 25;
            s.labelCoin.setString("Score: " + score);
            event.getParent().runAction(
                cc.moveTo(2, randomnumber1 * (-1) * cc.winSize.width * (Math.random()*3+2), randomnumber2 * (-1) * cc.winSize.height * (Math.random()*3+2))
            );
            if (win == 1) {
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
        x: temp.x,
        y: temp.y
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
        fontSize: 70,
        anchorX: 0.5,
        anchorY: 0,
        x: widgetSize.width/2
    });
    if (contentText.string.length < 100 && contentText.string.length > 50){
        contentText.fontSize = 60;
    } else if (contentText.string.length < 200){
        contentText.fontSize = 50;
    } else if (contentText.string.length < 250){
        contentText.fontSize = 40;
    } else if (contentText.string.length < 300){
        contentText.fontSize = 40;
    }
    contentText.setColor(cc.color(0,0,0));
    contentText.setContentSize(cc.size(800,900));
    contentText.setScale(0.4);
    contentText.ignoreContentAdaptWithSize(false);
    contentText.setFontName(_b_getFontName(res.robota));
    allSpecificTasks.splice(newTaskPosition, 1);
    allPossibleTasks[card] = allSpecificTasks;
    var next = new ccui.Button();
    next.loadTextures("res/check.png", "res/check.png", " ");
    next.setScale(0.4);
    next.addTouchEventListener(onMouseUp, this);
    next.setPosition(180, 70);
    next.didIt = true;

    var decline = new ccui.Button();
    decline.loadTextures("res/decline.png", "res/decline.png", " ");
    decline.setScale(0.1);
    decline.addTouchEventListener(onMouseUp, this);

    decline.setPosition(260, 50 );
    decline.didIt = false;

    layout.addChild(decline, 252);
    layout.addChild(next, 252);
    layout.addChild(contentText, 252);
    s.addChild(layout, 251);

    layout.runAction(
        cc.spawn(
            //cc.scaleTo(1,0.5,0.5),
            cc.moveTo(1, cc.winSize.width / 2, cc.winSize.height / 2)
        )
    );
}

function winC() {
    cc.director.runScene(new EndScene());
}
