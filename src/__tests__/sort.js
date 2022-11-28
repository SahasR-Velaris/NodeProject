import {expect, jest, test} from '@jest/globals'
import { insertSort } from '../sort'

const expected = [1, 2, 3, 4, 5, 6, 7];

test('Testing for a sorted array', () => {
    const arr = [1, 2, 3, 4, 5, 6, 7];
    const newArr = insertSort(arr);

    expect(newArr).toMatchObject(expected);
})

test('Testing for a reverse sorted array', () => {
    const arr = [7, 6, 5, 4, 3, 2, 1];
    const newArr = insertSort(arr);

    expect(newArr).toMatchObject(expected);
})

test('Testing for an unsorted array', () => {
    const arr = [4, 5, 1, 2, 3, 7, 6];
    const newArr = insertSort(arr);

    expect(newArr).toMatchObject(expected);
})

test('Testing for an empty array', () => {
    const arr = [];
    const newArr = insertSort(arr);

    expect(newArr).toMatchObject([]);
})

test('Testing for null', () => {
    const arr = null;
    const newArr = insertSort(null);

    expect(newArr).toBe(null);
})