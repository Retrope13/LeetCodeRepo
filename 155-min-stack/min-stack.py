class MinStack(object):

    def __init__(self):
        self.stack = []
        self.mins = []

    def push(self, val):
        if len(self.mins) == 0 or self.mins[-1] >= val:
            self.mins.append(val)
        self.stack.append(val)
        """
        :type val: int
        :rtype: None
        """
        

    def pop(self):
        if len(self.mins) > 0 and self.mins[-1] == self.stack[-1]:
            self.mins.pop()
        self.stack.pop()
        """
        :rtype: None
        """
        

    def top(self):
        return self.stack[-1]
        """
        :rtype: int
        """
        

    def getMin(self):
        return self.mins[-1]
        """
        :rtype: int
        """
        


# Your MinStack object will be instantiated and called as such:
# obj = MinStack()
# obj.push(val)
# obj.pop()
# param_3 = obj.top()
# param_4 = obj.getMin()