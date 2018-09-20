# from queue import Queue
# from threading import Thread
import asyncio
from asyncio import Queue


def log(*args):
    print(*args)


def spawn(loop, func, *args):
    pid = Queue()
    # Thread(target=func, args=(pid, *args)).start()
    loop.create_task(func(pid, *args))
    return pid


async def get(pid, re, *args):
    await pid.put(re, *args)
    return await re.get()


async def close(pid):
    await pid.put(None)


# 累加器
async def accumulatord(self, num):
    '''每调用一次 +1'''

    # q = Queue()
    to = await self.get()
    if to is None:
        log('close')
        return

    new_num = num + 1
    await to.put(new_num)
    return accumulatord(self, new_num)


# def loop(acc, self, n=10):
#     if n == 0:
#         return
#     else:
#         new_num = get(acc, self)
#         print(new_num)
#         return loop(acc, self, n-1)


def main():
    loop = asyncio.get_event_loop()

    n = 0
    acc = spawn(loop, accumulatord, n)
    self = Queue()
    # loop(acc, self)
    # list(map(lambda _: log(get(acc, self)), range(10)))
    task = asyncio.ensure_future(get(acc, self))
    task.add_done_callback(log)
    loop.create_task(task)
    # [ log(get(acc, self)) for _ in range(10) ]
    # close(acc)
    loop.stop()
    loop.run_forever()


main()
