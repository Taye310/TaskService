var DialoguePanel = (function (_super) {
    __extends(DialoguePanel, _super);
    function DialoguePanel(chara) {
        _super.call(this);
        this._textField = new egret.TextField;
        this._button = new egret.Bitmap();
        this.x = chara.x;
        this.y = chara.y;
        this.width = 300;
        this.height = 200;
        this._button.scaleX = 3;
        this._button.scaleY = 3;
        //console.log(this.x+this.y);
        this._button.x = 80;
        this._button.y = 80;
        this._button.texture = RES.getRes("gtanhao_png");
        this._textField.text = "可接受!";
        this.addChild(this._button);
        this.addChild(this._textField);
        this._button.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onButtonClick, this);
        this._button.touchEnabled = true;
    }
    var d = __define,c=DialoguePanel,p=c.prototype;
    p.onButtonClick = function (e) {
        for (var i = 0; i < TaskService.taskList.length; i++) {
            switch (TaskService.taskList[i].status) {
                case TaskStatus.ACCEPTABLE:
                    TaskService.accept(TaskService.taskList[i].id);
                    this._textField.text = "已接受！";
                    break;
                case TaskStatus.CAN_SUMBIT:
                    TaskService.finish(TaskService.taskList[i].id);
                    this._textField.text = "已完成！";
                    break;
            }
        }
    };
    return DialoguePanel;
}(egret.DisplayObjectContainer));
egret.registerClass(DialoguePanel,'DialoguePanel');
//# sourceMappingURL=DialoguePanel.js.map