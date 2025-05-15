import unittest
from bubble_sort import bubble_sort

class TestBubbleSort(unittest.TestCase):


    def test_sort(self):
        list = [65, 55, 45, 35, 25, 15, 10]
        expectation = [10,15,25,35,45,55,65]
        self.assertEqual(bubble_sort(list), expectation)

    

if __name__ == '__main__':
    unittest.main()