class TaskService {
    private observerList: Observer[];
    private taskList: Task[];
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
    public finish(id: string): ErrorCode {
        var taskPanel = new TaskPanel();
        for (var i = 0; i < this.taskList.length; i++) {
            if (this.taskList[i].id == id) {
                taskPanel.onChange(this.taskList[i]);
                return ErrorCode.SUCCESS;
            }
        }
    }
    public accept(id: string): void {
        for (var i = 0; i < this.taskList.length; i++) {
            if (this.taskList[i].id == id) {
                
            }
        }
    }
    private getTaskByCustomRole(rule: Function): Task {

        return
    }
    private notify(): void {

    }
}