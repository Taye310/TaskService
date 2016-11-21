var EventEmitter = (function () {
    function EventEmitter() {
    }
    var d = __define,c=EventEmitter,p=c.prototype;
    p.addObserver = function (observer) {
    };
    p.notify = function (task) {
    };
    return EventEmitter;
}());
egret.registerClass(EventEmitter,'EventEmitter');
var TaskService = (function (_super) {
    __extends(TaskService, _super);
    function TaskService() {
        _super.call(this);
    }
    var d = __define,c=TaskService,p=c.prototype;
    //danli
    TaskService.getInstance = function () {
        if (this.instance == null) {
            this.instance = new TaskService();
        }
        return this.instance;
    };
    p.onChange = function (task) {
    };
    TaskService.accept = function (id) {
        if (!id) {
            return ErrorCode.FAILED;
        }
        var task = TaskService.taskList[id];
        if (task.id == id) {
            task.status = TaskStatus.DURING;
            TaskService.notify(task);
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
            TaskService.notify(task);
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
        console.log(TaskService.taskList[0].status);
    };
    TaskService.addObserver = function (observer) {
        for (var i = 0; i < TaskService.observerList.length; i++) {
            if (observer == TaskService.observerList[i])
                return ErrorCode.FAILED;
        }
        TaskService.observerList.push(observer);
    };
    TaskService.observerList = new Array();
    TaskService.taskList = new Array();
    TaskService.instance = null;
    return TaskService;
}(EventEmitter));
egret.registerClass(TaskService,'TaskService',["Observer"]);
//# sourceMappingURL=EventEmitter.js.map