class DialoguePanel extends egret.DisplayObjectContainer {
    private _textField: Text;
    private _button: egret.DisplayObjectContainer;

    constructor(npc: NPC) {
        super();
        this.x = npc.x;
        this.y = npc.y;
        this._textField.textContent = "hello!";
        this._button.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onButtonClick, this);
    }

    private onButtonClick(e: egret.TouchEvent) {
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
    }
    
}