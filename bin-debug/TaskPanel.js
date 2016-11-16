var TaskPanel = (function (_super) {
    __extends(TaskPanel, _super);
    function TaskPanel() {
        _super.call(this);
        this.textField = new egret.TextField;
        this.panel = new egret.Shape;
        this.panel.x = 0;
        this.panel.y = 0;
        this.textField.text = "----";
        this.panel.graphics.clear();
        this.panel.graphics.clear();
        this.panel.graphics.beginFill(0x000000, 0.5);
        this.panel.graphics.drawRect(0, 0, 250, 300);
        this.panel.graphics.endFill();
        this.addChild(this.panel);
        this.addChild(this.textField);
    }
    var d = __define,c=TaskPanel,p=c.prototype;
    p.onChange = function (task) {
        this.textField.text = task.name + "finished";
        console.log("111");
    };
    return TaskPanel;
}(egret.DisplayObjectContainer));
egret.registerClass(TaskPanel,'TaskPanel',["Observer"]);
//# sourceMappingURL=TaskPanel.js.map