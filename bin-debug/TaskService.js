var TaskService = (function () {
    function TaskService() {
    }
    var d = __define,c=TaskService,p=c.prototype;
    //danli
    TaskService.getInstance = function () {
        if (this.instance == null) {
            this.instance = new TaskService();
        }
        return this.instance;
    };
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
    TaskService.accept = function (id) {
        if (!id) {
            return ErrorCode.FAILED;
        }
        var task = TaskService.taskList[id];
        if (task.id == id) {
            task.status = TaskStatus.CAN_SUMBIT;
            this.notify(TaskService.taskList[id]);
            console.log("111");
            return ErrorCode.SUCCESS;
        }
        else {
            return ErrorCode.FAILED;
        }
    };
    TaskService.finish = function (id) {
        if (!id) {
            return ErrorCode.FAILED;
        }
        var task = TaskService.taskList[id];
        if (task.id == id) {
            task.status = TaskStatus.SUBMITTED;
            this.notify(TaskService.taskList[id]);
            return ErrorCode.SUCCESS;
        }
        else {
            return ErrorCode.FAILED;
        }
    };
    p.getTaskByCustomRole = function (rule) {
        return rule();
    };
    TaskService.notify = function (task) {
        for (var _i = 0, _a = this.observerList; _i < _a.length; _i++) {
            var observer = _a[_i];
            observer.onChange(task);
        }
    };
    p.addObserver = function (observer) {
        for (var i = 0; i < TaskService.observerList.length; i++) {
            if (observer == TaskService.observerList[i])
                return ErrorCode.FAILED;
        }
        TaskService.observerList.push(observer);
    };
    TaskService.taskList = new Array();
    TaskService.instance = null;
    return TaskService;
}());
egret.registerClass(TaskService,'TaskService');
//# sourceMappingURL=TaskService.js.map