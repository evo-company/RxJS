module.exports = [
    'src/core/headers/license.js',
    'src/core/headers/intro.js',
    'src/core/headers/liteheader.js',

    // Stack trace start
    'src/core/internal/trycatch.js',
    'src/core/longstacktraces/longstackbegin.js',
    'src/core/longstacktraces/longstacktraces.js',

    'src/core/internal/errors.js',

    'src/core/headers/enumeratorheader.js',

    'src/core/internal/bindcallback.js',
    'src/core/internal/dontenums.js',
    'src/core/internal/isequal.js',
    'src/core/internal/util.js',
    'src/core/disposables/compositedisposable.js',
    'src/core/disposables/disposable.js',
    'src/core/disposables/booleandisposable.js',
    'src/core/disposables/binarydisposable.js',
    'src/core/disposables/refcountdisposable.js',

    'src/core/concurrency/scheduleditem.js',
    'src/core/concurrency/scheduler.js',
    'src/core/concurrency/scheduler.recursive.js',
    'src/core/concurrency/scheduler.periodic.js',
    'src/core/concurrency/immediatescheduler.js',
    'src/core/concurrency/currentthreadscheduler.js',
    'src/core/concurrency/scheduleperiodicrecursive.js',
    'src/core/concurrency/defaultscheduler.js',
    'src/core/internal/priorityqueue.js',

    'src/core/notification.js',
    'src/core/observer-lite.js',
    'src/core/abstractobserver.js',
    'src/core/anonymousobserver.js',
    'src/core/observable.js',
    'src/core/scheduledobserver.js',
    'src/core/perf/observablebase.js',
    'src/core/perf/operators/flatmapbase.js',
    'src/core/enumerable.js',

    // Creation
    'src/core/perf/operators/toarray.js',
    'src/core/linq/observable/create.js',
    'src/core/perf/operators/empty.js',
    'src/core/perf/operators/from.js',
    'src/core/perf/operators/fromarrayobservable.js', 'src/core/perf/operators/fromarray.js',
    'src/core/perf/operators/of.js',
    'src/core/perf/operators/repeat.js',
    'src/core/perf/operators/just.js',

    // Multiple
    'src/core/linq/observable/catchproto.js',
    'src/core/linq/observable/catch.js',
    'src/core/linq/observable/combinelatestproto.js',
    'src/core/perf/operators/combinelatest.js',
    'src/core/linq/observable/concatproto.js',
    'src/core/perf/operators/concat.js',
    'src/core/perf/operators/mergeconcat.js',
    'src/core/perf/operators/mergeall.js',
    'src/core/linq/observable/merge.js',
    'src/core/perf/operators/skipuntil.js',
    'src/core/perf/operators/takeuntil.js',
    'src/core/perf/operators/withlatestfrom.js',
    'src/core/perf/operators/zip.js',
    'src/core/linq/observable/zip.js',
    'src/core/perf/operators/switch.js',

    // Single
    'src/core/linq/observable/asobservable.js',
    'src/core/linq/observable/bufferwithcount.js',
    'src/core/perf/operators/distinctuntilchanged.js',
    'src/core/perf/operators/tap.js',
    'src/core/perf/operators/finally.js',
    'src/core/linq/observable/retry.js',
    'src/core/perf/operators/scan.js',
    'src/core/linq/observable/startwith.js',
    'src/core/linq/observable/windowwithcount.js',
    'src/core/linq/observable/materialize.js',

    // Standard Query Operators
    'src/core/perf/operators/map.js',
    'src/core/linq/observable/pluck.js',
    'src/core/perf/operators/flatmap.js',
    'src/core/perf/operators/flatmaplatest.js',
    'src/core/linq/observable/selectmanyobserver.js',
    'src/core/perf/operators/skip.js',
    'src/core/linq/observable/skipwhile.js',
    'src/core/perf/operators/take.js',
    'src/core/linq/observable/takewhile.js',
    'src/core/perf/operators/filter.js',
    'src/core/linq/observable/distinct.js',

    // Aggregate Operators
    'src/core/linq/observable/first.js',

    // Async Operators
    'src/core/linq/observable/spawn.js',
    'src/core/perf/operators/fromcallback.js',
    'src/core/perf/operators/fromnodecallback.js',
    'src/core/linq/observable/fromevent.js', // publish
    'src/core/perf/operators/frompromise.js', // AsyncSubject, asObservable

    // Binding Operators
    'src/core/linq/observable/multicast.js', // ConnectableObservable
    'src/core/linq/observable/publish.js',   // mulitcast, Subject
    'src/core/linq/observable/share.js',   // mulitcast, Subject, Reference counted
    'src/core/linq/observable/sharevalue.js', // multicast, BehaviorSubject, Reference counted
    'src/core/linq/observable/replay.js', // multicast, ReplaySubject
    'src/core/linq/observable/sharereplay.js',
    'src/core/linq/connectableobservable.js',

    // Coincidence operators
    'src/core/linq/observable/pairwise.js',

    // Time operators
    'src/core/linq/observable/_observabletimer.js', // AnonymousObservable
    'src/core/linq/observable/_observabletimerdateandperiod.js', // AnonymousObservable, normalizeTime

    'src/core/linq/observable/_observabletimertimespanandperiod.js', // AnonymousObservable, defer, _observabletimerdateandperiod
    'src/core/linq/observable/interval.js', // timeoutScheduler, _observabletimertimespanandperiod
    'src/core/linq/observable/timeinterval.js', // timeoutScheduler, defer, select
    'src/core/linq/observable/timer.js', // timeoutScheduler, _observabletimerdate, _observabletimerdateandperiod, _observabletimertimespan, _observabletimertimespanandperiod
    'src/core/linq/observable/delay.js', // AnonymousObservable, timeoutScheduler, SerialDisposable, materialize, timestamp
    'src/core/linq/observable/debounce.js', // AnonymousObservable, SerialDisposable, timeoutScheduler, SingleAssignmentDisposable, CompositeDisposable
    'src/core/linq/observable/windowwithtimeorcount.js', // AnonymousObservable, SerialDisposable, SingleAssignmentDisposable, RefCountDisposable, CompositeDisposable, addref, subject
    'src/core/linq/observable/bufferwithtimeorcount.js', // windowwithtimeorcount, selectMany, toArray
    'src/core/linq/observable/timestamp.js', // timeoutScheduler, select
    'src/core/linq/observable/sample.js', // AnonymousObservable, CompositeDisposable, interval, timeoutScheduler
    'src/core/linq/observable/timeout.js', // AnonymousObservable, timeoutScheduler, throw, SingleAssignmentDisposable, SerialDisposable, CompositeDisposable
    'src/core/linq/observable/throttle.js',

    // Backpressure operators
    'src/core/backpressure/pausable.js',
    'src/core/backpressure/pausablebuffered.js',

    'src/core/anonymousobservable.js',
    'src/core/autodetachobserver.js',
    'src/core/subjects/innersubscription.js',
    'src/core/subjects/subject.js',
    'src/core/subjects/behaviorsubject.js',
    'src/core/subjects/replaysubject.js',
    'src/core/headers/exports.js',

    // End long stack traces
    'src/core/longstacktraces/longstackend.js',

    'src/core/headers/outro.js',
];
