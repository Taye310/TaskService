var DialoguePanel = (function (_super) {
    __extends(DialoguePanel, _super);
    function DialoguePanel(npc) {
        _super.call(this);
        this.x = npc.x;
        this.y = npc.y;
        this._textField.textContent = "hello!";
        this._button.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onButtonClick, this);
    }
    var d = __define,c=DialoguePanel,p=c.prototype;
    p.onButtonClick = function (e) {
        for (var i = 0; i < TaskService.taskList.length; i++) {
            switch (TaskService.taskList[i].status) {
                case TaskStatus.ACCEPTABLE:
                    TaskService.accept(TaskService.taskList[i].id);
                    break;
                case TaskStatus.CAN_SUMBIT:
                    TaskService.finish(TaskService.taskList[i].id);
                    break;
            }
        }
    };
    return DialoguePanel;
}(egret.DisplayObjectContainer));
egret.registerClass(DialoguePanel,'DialoguePanel');
//# sourceMappingURL=DialoguePanel.js.map