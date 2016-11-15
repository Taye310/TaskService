class NPC extends egret.DisplayObjectContainer implements Observer{
    private _emoji:egret.Bitmap=new egret.Bitmap;
    private _id:string;
    private _chara:egret.Bitmap=new egret.Bitmap;
    constructor(id:string,x:number,y:number,texture:string){
        super();
        this._id=id;
        // this.x=x;
        // this.y=y;
        this._chara.x=x;
        this._chara.y=y
        this._chara.texture=RES.getRes(texture);
        this.addChild(this._chara);
    }

    private onNPCClick(){


    }
    public onChange(task:Task){


    }
}