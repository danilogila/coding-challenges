#!/bin/python3

import math
import os
import random
import re
import sys

# Complete the rotLeft function below.


def rotLeft(a, d):
    TAM_ARRAY = len(a)

    temp_arr = [0] * TAM_ARRAY

    for x in range(0, TAM_ARRAY):
        pos = x - d
        temp_arr[pos] = a[x]

    print(temp_arr)
    return temp_arr


if __name__ == '__main__':
    fptr = open(os.environ['OUTPUT_PATH'], 'w')

    nd = input().split()

    n = int(nd[0])

    d = int(nd[1])

    a = list(map(int, input().rstrip().split()))

    result = rotLeft(a, d)

    fptr.write(' '.join(map(str, result)))
    fptr.write('\n')

    fptr.close()
