/**
 * Created by Spikey on 9.06.2015.
 */
var ConfigLayer = cc.Layer.extend({
    sprite: null,
    ctor: function () {
        this._super();
        var lv = new ccui.ListView();
        // set list view ex direction
        lv.setDirection(ccui.ScrollView.DIR_NONE);
        var widgetSize = this._widget.getContentSize();
        lv.setContentSize(cc.size(240, 130));
        lv.x = widgetSize.width / 2;
        lv.y = widgetSize.height / 2;

        var suvaline = new cc.LabelTTF();
        suvaline.setString("Hello!");

        var default_item = new ccui.Layout();
        default_item.setTouchEnabled(true);
        default_item.setContentSize(suvaline.getContentSize());
        default_item.width = lv.width;
        suvaline.x = default_item.width / 2;
        suvaline.y = default_item.height / 2;
        default_item.addChild(lv);

        lv.setItemModel(default_item);
        lv.pushBackDefaultItem(suvaline);
        this.addChild(lv);


        return true;
    }
});
var ConfigScene = cc.Scene.extend({
    onEnter: function () {
        this._super();
        var layer = new ConfigLayer();
        this.addChild(layer);
    }
});