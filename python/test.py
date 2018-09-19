from queue import Queue
from threading import Thread


def log(*args):
    print(*args)


def spawn(func, *args):
    pid = Queue()
    Thread(target=func, args=(pid, *args)).start()
    return pid


def get(pid, re, *args):
    pid.put(re, *args)
    return re.get()


def close(pid):
    pid.put(None)


# 累加器
def accumulatord(q, num):
    '''每调用一次 +1'''

    # q = Queue()
    re = q.get()
    if not re:
        log('close')
        return

    new_num = num + 1
    re.put(new_num)
    return accumulatord(q, new_num)


# def loop(acc, self, n=10):
#     if n == 0:
#         return
#     else:
#         new_num = get(acc, self)
#         print(new_num)
#         return loop(acc, self, n-1)


def main():
    n = 0
    acc = spawn(accumulatord, n)
    self = Queue()
    # loop(acc, self)
    # list(map(lambda _: log(get(acc, self)), range(10)))
    [ log(get(acc, self)) for _ in range(10) ]
    close(acc)


main()
