/**
 * Created by Spikey on 16.05.2015.
 */
var GameLayer = cc.Layer.extend({
    sprite: null,
    ctor: function () {
        this._super();
        this.init();
    },
    init: function () {


        var winsize = cc.director.getWinSize();
        this.labelInstructions = new cc.LabelTTF("Lorem ipsum dolor sit amet, eu sit mutat mazim. Eu duo idque facer tritani, et mea quas tritani. \n" +
        "At qui pericula aliquando, ne mentitum voluptua gubergren pri. \n" +
        "Natum ocurreret mei cu, in eum exerci eripuit, sea no utinam ubique persius. Mei elitr comprehensam in. \n" +
        "Suavitate corrumpit mei ex, ei sea posse facer mazim, an diceret nostrum vis. \n" +
        "Eos mundi euismod mandamus ut, appetere complectitur intellegebat ex mei, pro ea falli omittantur. \n" +
        "In tollit numquam conclusionemque vix, ipsum laudem at vel. \n" +
        "Vim iudico salutatus ad, vim quod moderatius an, ex sit eius congue utamur. \n" +
        "Te error lucilius scribentur nec, mel an ocurreret splendide. \n" +
        "Est minimum fastidii in, ne fabulas adipisci duo.\n" +
        "Et vide error quaestio vis, an has veniam tempor omittam. \n" +
        "Nisl denique ei eum. Mea aliquam volutpat complectitur at. \n" +
        "His ei choro iracundia, te ipsum aliquid veritus sea.\n" +
        "Ea graeco efficiantur vel, pri in mucius salutatus delicatissimi. \n" +
        "Te est veniam mediocrem, pri eros tempor eruditi an. \n" +
        "Duo ea adipiscing sadipscing, mea nisl saepe epicurei ea, id ancillae singulis efficiantur vix. \n" +
        "Vis natum dicam in. Ex vim quot ornatus, ad albucius pertinax scripserit vix, eu mea oratio corrumpit deseruisse. \n" +
        "Usu simul pericula ex.Discere atomorum definitionem te vix, has te lucilius mandamus similique, vide nulla timeam ius ne. \n" +
        "Eu solet habemus mediocrem eum, id eos utinam facilisi. \n" +
        "Ei mei decore utinam ullamcorper. Quas expetendis no qui, vivendum insolens cum et. \n" +
        "Clita ponderum theophrastus sea te.", "Helvetica", 12);
        this.labelInstructions.setColor(cc.color(0, 0, 0));
        this.labelInstructions.setPosition(winsize.width / 2, winsize.height / 2);
        this.addChild(this.labelInstructions);
        var temp = new ccui.Button();
        temp.loadTextures("res/CloseNormal.png", "res/CloseSelected.png", " ");
        temp.x = cc.winSize.width / 2;
        temp.y = cc.winSize.height / 10;
        this.addChild(temp, 201);
        return true;
    }

});
var BackgroundLayer = cc.Layer.extend({
    ctor: function () {
        this._super();
        this.init();
    },

    init: function () {
        this._super();
        var winsize = cc.director.getWinSize();

        //create the background image and position it at the center of screen
        var centerPos = cc(winsize.width / 2, winsize.height / 2);

        var spriteBG = new cc.Sprite("res/a4.png");
        spriteBG.setPosition(centerPos);
        this.addChild(spriteBG);
    }
});
var GameScene = cc.Scene.extend({
    onEnter: function () {
        this._super();
        var backLayer = new BackgroundLayer();
        var gameLayer = new GameLayer();
        this.addChild(backLayer);
        this.addChild(gameLayer)
    }
});