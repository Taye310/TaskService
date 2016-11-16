class NPC extends egret.DisplayObjectContainer implements Observer {
    private _emoji: egret.Bitmap = new egret.Bitmap;
    private _id: string;
    private _chara: egret.Bitmap = new egret.Bitmap;
    constructor(id: string, x: number, y: number, texture: string) {
        super();
        this._id = id;
        // this.x=x;
        // this.y=y;
        this._chara.x = x;
        this._chara.y = y
        this._chara.texture = RES.getRes(texture);
        this.addChild(this._chara);
        this._emoji.x=x;
        this._emoji.y=y+80;
        this.addChild(this._emoji);
        this._emoji.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onNPCClick, this);
    }

    private onNPCClick() {
        var dialogPanel = new DialoguePanel(this);


    }
    public onChange(task: Task) {
        switch (task.status) {
            case TaskStatus.ACCEPTABLE:
                this._emoji.texture = RES.getRes("ytanhao_png");
                break;
            case TaskStatus.DURING:
                this._emoji.texture = RES.getRes("gwenhao_png");
                break;
            case TaskStatus.CAN_SUMBIT:
                this._emoji.texture = RES.getRes("ywenhao_png");
                break;
            case TaskStatus.SUBMITTED || TaskStatus.UNACCEPTABLE:
                this._emoji.texture = RES.getRes(null);
                break;
        }
        // if (task.status == TaskStatus.ACCEPTABLE) {
        //     this._emoji.texture = RES.getRes("ytanhao_png");
        // }
        // if (task.status == TaskStatus.DURING) {
        //     this._emoji.texture = RES.getRes("gwenhao_png");
        // }
        // if (task.status == TaskStatus.CAN_SUMBIT) {
        //     this._emoji.texture = RES.getRes("ywenhao_png");
        // }
        // if (task.status == TaskStatus.SUBMITTED||task.status == TaskStatus.UNACCEPTABLE) {
        //     this._emoji.texture = RES.getRes(null);
        // }

    }
}