class TaskService {
    private static observerList: Observer[];
    public static taskList=new Array<Task>();
    private static instance: TaskService = null;
    
    constructor() {
        
    }
    //danli
    public static getInstance(){
        if( this.instance == null ) {
            this.instance = new TaskService();
        }
        return this.instance;
    }
    // public finish(id: string): ErrorCode {
    //     var taskPanel = new TaskPanel();
    //     for (var i = 0; i < TaskService.taskList.length; i++) {
    //         if (TaskService.taskList[i].id == id) {
    //             taskPanel.onChange(TaskService.taskList[i]);
    //             return ErrorCode.SUCCESS;
    //         }
    //     }
    // }
    // public accept(id: string): void {
    //     var taskPanel = new TaskPanel();
    //     for (var i = 0; i < TaskService.length; i++) {
    //         if (TaskService.taskList[i].id == id) {
    //             taskPanel.onChange(TaskService.taskList[i]);
                
    //         }
    //     }
    // }
    static accept(id: string) {
        if (!id) {
            return ErrorCode.FAILED;
        }
        let task = TaskService.taskList[id];
        if (task.id == id) {
            task.status = TaskStatus.CAN_SUMBIT;
            this.notify(TaskService.taskList[id]);
            console.log("111");
            return ErrorCode.SUCCESS;
        }
        else {
            return ErrorCode.FAILED;
        }

    }

    static finish(id: string) {
        if (!id) {
            return ErrorCode.FAILED;
        }
        let task = TaskService.taskList[id];
        if (task.id == id) {
            task.status = TaskStatus.SUBMITTED;
            this.notify(TaskService.taskList[id]);
          
            return ErrorCode.SUCCESS;
        }
        else {
            return ErrorCode.FAILED;
        }
    }
    public getTaskByCustomRole(rule: Function): Task {
        return rule();
    }
    private static notify(task:Task): void {
        for (var observer of this.observerList) {
            observer.onChange(task);
        }
    }

    public addObserver(observer: Observer) {
        for (var i = 0; i < TaskService.observerList.length; i++) {
            if (observer == TaskService.observerList[i])
                return ErrorCode.FAILED;
        }
        TaskService.observerList.push(observer);
    }
}