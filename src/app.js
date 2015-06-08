var HelloWorldLayer = cc.Layer.extend({
    sprite: null,
    ctor: function () {
        //////////////////////////////
        // 1. super init first
        this._super();

        /////////////////////////////
        // 2. add a menu item with "X" image, which is clicked to quit the program
        //    you may modify it.
        // ask the window size
        var size = cc.winSize;

        // add a "close" icon to exit the progress. it's an autorelease object
        var closeItem = new cc.MenuItemImage(
            res.CloseNormal_png,
            res.CloseSelected_png,
            function () {
                cc.log("Menu is clicked!");
            }, this);
        closeItem.attr({
            x: size.width - 20,
            y: 20,
            anchorX: 0.5,
            anchorY: 0.5
        });

        var menu = new cc.Menu(closeItem);
        menu.x = 0;
        menu.y = 0;
        this.addChild(menu, 1);

        /////////////////////////////
        // 3. add your codes below...
        // add a label shows "Hello World"
        // create and initialize a label
        var helloLabel = new cc.LabelTTF("Hello World", "Arial", 38);
        // position the label on the center of the screen
        helloLabel.x = size.width / 2;
        helloLabel.y = 0;
        // add the label as a child to this layer
        this.addChild(helloLabel, 5);


        // add "HelloWorld" splash screen"
        var MySprite = new cc.Sprite("res/a1.png");
        MySprite.attr({
            x: size.width / 2,
            y: size.height / 2,
            scale: 0.2,
            rotation: 0
        });
        //MySprite.flipY = true;
        this.addChild(MySprite, 0);


        //this.sprite
       MySprite.runAction(
            cc.sequence(
                cc.scaleTo(2,1,1)
                //cc.rotateTo(2,0)

            )
        );
        helloLabel.runAction(
            cc.spawn(
                cc.moveBy(2.5, cc.p(0, size.height - 40)),
                cc.tintTo(2.5, 255, 125, 0)
            )
        );
        //cc.SpriteFrameCache.getInstance().addSpriteFrames(spritesheet_plist); // add Spritesheet Plist
        //var SpriteSheet = cc.SpriteBatchNode.create(spritesheet_png);  // add Spritesheet Png
        //this.addChild(SpriteSheet,1);

        // Push the frames for animation
       /* var animFrames = ["res/a1.png", "res/a2.png", "res/a3png];



        // taadaa ...!!  Animate the sprites
        var animation = cc.Animation(animFrames, 0.06);
        var sprite = cc.Sprite.createWithSpriteFrameName(res.a1_png);
        sprite.setAnchorPoint(0.5,0.5); // optional
        sprite.setScale(1.0,1.0); // optional
        sprite.setPosition(50, 50);
        sprite.runAction(cc.RepeatForever(cc.Animate(animation)));
        this.addChild(sprite,1);*/
        return true;
    }
});

//var HelloWorldScene = cc.Scene.extend({
//    onEnter: function () {
//        this._super();
//        var layer = new HelloWorldLayer();
//        this.addChild(layer);
//    }
//});