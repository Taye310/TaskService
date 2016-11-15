class TaskPanel extends egret.DisplayObjectContainer implements Observer{
    public textField:egret.TextField;
    private panel:egret.Shape=new egret.Shape;

    constructor(){
        super();
        this.panel.x=0;
        this.panel.y=0;
        this.panel.graphics.clear();
        this.panel.graphics.clear();
        this.panel.graphics.beginFill(0x000000, 0.5);
        this.panel.graphics.drawRect(0, 0, 250, 300);
        this.panel.graphics.endFill();
        this.addChild(this.panel);
        this.addChild(this.textField);
    }

    public onChange(task:Task){
        this.textField.text=task.name+"finished";
    }
}