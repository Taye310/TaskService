var TaskService = (function () {
    function TaskService() {
        this.main = new Main();
        this.taskList.push(this.main.task1);
    }
    var d = __define,c=TaskService,p=c.prototype;
    //danli
    TaskService.getInstance = function () {
        if (this.instance == null) {
            this.instance = new TaskService();
        }
        return this.instance;
    };
    p.finish = function (id) {
        var taskPanel = new TaskPanel();
        for (var i = 0; i < this.taskList.length; i++) {
            if (this.taskList[i].id == id) {
                taskPanel.onChange(this.taskList[i]);
                return ErrorCode.SUCCESS;
            }
        }
    };
    p.accept = function (id) {
        for (var i = 0; i < this.taskList.length; i++) {
            if (this.taskList[i].id == id) {
            }
        }
    };
    p.getTaskByCustomRole = function (rule) {
        return;
    };
    p.notify = function () {
    };
    TaskService.instance = null;
    return TaskService;
}());
egret.registerClass(TaskService,'TaskService');
//# sourceMappingURL=TaskService.js.map