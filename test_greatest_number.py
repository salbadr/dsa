import unittest
from greatest_number import inefficientGreatestNumber, efficientGreatestNumber


class TestGreatestNumber(unittest.TestCase):

    def test_inefficient(self):
        list = [65, 55, 45, 35, 25, 75, 100]
        expectation = 100
        self.assertEqual(inefficientGreatestNumber(list), expectation)

    def test_efficient(self):
        list = [1, 2, 5, 3, 12, 7, 100]
        expectation = 100
        self.assertEqual(efficientGreatestNumber(list), expectation)


if __name__ == '__main__':
    unittest.main()
