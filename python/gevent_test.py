import gevent
from gevent.queue import Queue
# from threading import Thread


def log(*args):
    print(*args)


def spawn(func, *args):
    pid = Queue()
    # Thread(target=func, args=(pid, *args)).start()
    # loop.create_task(func(pid, *args))
    gevent.spawn(func, pid, *args)
    return pid


def get(pid, re, *args):
    pid.put(re, *args)
    return re.get()


def close(pid):
    pid.put(None)


# 累加器
def accumulatord(self, num):
    '''每调用一次 +1'''

    # q = Queue()
    to = self.get()
    log('start')
    if to is None:
        log('close')
        return

    new_num = num + 1
    gevent.sleep(1)
    log('stop')
    to.put(new_num)
    return accumulatord(self, new_num)


def j():
    log('start')
    gevent.sleep(1)
    log('stop')


def main():
    # loop = asyncio.get_event_loop()

    n = 0
    acc = spawn(accumulatord, n)
    # acc2 = spawn(accumulatord, n)
    self = Queue()
    # jobs = [gevent.spawn(get, acc, self), gevent.spawn(get, acc2, self)]
    # jobs = [gevent.spawn(j), gevent.spawn(j)]
    # gevent.joinall(jobs)
    # log(*[j.value for j in jobs])
    log(get(acc, self))
    log(get(acc, self))


main()
