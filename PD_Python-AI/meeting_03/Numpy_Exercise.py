import numpy as np

# a = np.array([1, 2, 3, 4, 5])  # Membuat Numpy array 1D
# b = np.array([6, 7, 8, 9, 10])  # Membuat Numpy array 1D

# # Menampilkan output dari Numpy array
# print(a)
# print("")
# print(b)
# print("")

# # Membuat Numpy array 1D dengan kombinasi tipe data
# c = np.array([1, "hello", 3.14])
# print(c)
# print("")

# array2D = np.array([[1, 2, 3, 4, 5], [6, 7, 8, 9, 10], [11, 12, 13, 14, 15]])
# print(array2D)
# print("")

# array3D = np.array(
#     [[[1, 2, 3], [4, 5, 6]], [[7, 8, 9], [10, 11, 12]], [[13, 14, 15], [16, 17, 18]]]
# )
# print(array3D)
# print("")

# array 2D dengan 2 baris dan 4 kolom
# data = np.array([[1, 2, 3, 4], [5, 6, 7, 8]])
# print(data.shape)
# print(data[0, 3])
# print(data[1, 2])
# print(data[:, 2])
# print(data[1, :])
# print(data[:, 1:3])
# print(data[1, 1:4])
# print(data.diagonal(2))

# empty = np.zeros((4, 4), dtype="int")
# empty[0, 1:4] = [1, 55, 3]
# empty[-1, 0] = 7
# empty[1:3, 1] = [9, 5]
# print(empty)

c = np.array([3, 6, 9, 12])
d = np.array([2, 4, 6, 8])
# print(np.add(c, d))
# print(np.subtract(c, d))
# print(np.multiply(c, d))
# print(np.divide(c, d))
print(c.sum(), d.sum())
print(c.min(), d.min())
print(c.max(), d.max())
