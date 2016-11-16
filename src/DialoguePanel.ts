class DialoguePanel extends egret.DisplayObjectContainer {
    private _textField=new egret.TextField;
    private _button: egret.Bitmap = new egret.Bitmap();

    constructor(chara:egret.Bitmap) {
        super();
        this.x = chara.x;
        this.y = chara.y;
        this.width=300;
        this.height=200;
        this._button.scaleX=3;
        this._button.scaleY=3;
        //console.log(this.x+this.y);
        this._button.x=80;
        this._button.y=80;
        this._button.texture=RES.getRes("gtanhao_png");
        this._textField.text="可接受!";
        
        this.addChild(this._button);
        this.addChild(this._textField);
        this._button.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onButtonClick, this);
        this._button.touchEnabled=true;
    }

    private onButtonClick(e: egret.TouchEvent) {
        for (var i = 0; i < TaskService.taskList.length; i++) {
            switch (TaskService.taskList[i].status) {
                case TaskStatus.ACCEPTABLE:
                    TaskService.accept(TaskService.taskList[i].id);
                    this._textField.text="已接受！";
                    break;
                case TaskStatus.CAN_SUMBIT:
                    TaskService.finish(TaskService.taskList[i].id);
                    this._textField.text="已完成！";
                    break;
            }
        }
    }

}