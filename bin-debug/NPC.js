var NPC = (function (_super) {
    __extends(NPC, _super);
    function NPC(id, x, y, texture) {
        _super.call(this);
        this._emoji = new egret.Bitmap;
        this._chara = new egret.Bitmap;
        this._id = id;
        // this.x=x;
        // this.y=y;
        this._chara.x = x;
        this._chara.y = y;
        this._chara.texture = RES.getRes(texture);
        this.addChild(this._chara);
    }
    var d = __define,c=NPC,p=c.prototype;
    p.onNPCClick = function () {
    };
    p.onChange = function (task) {
    };
    return NPC;
}(egret.DisplayObjectContainer));
egret.registerClass(NPC,'NPC',["Observer"]);
//# sourceMappingURL=NPC.js.map