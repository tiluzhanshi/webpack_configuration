const {
    SyncHook,
	SyncBailHook,
	SyncWaterfallHook,
	SyncLoopHook,
	AsyncParallelHook,
	AsyncParallelBailHook,
	AsyncSeriesHook,
	AsyncSeriesBailHook,
	AsyncSeriesWaterfallHook
} = require("tapable");

let queue = new SyncHook(['ne1ame'.toString()]);

queue.tap("1", function(name){
    console.log(name);
});

queue.call("webpack");