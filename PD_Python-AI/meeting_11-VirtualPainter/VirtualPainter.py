import cv2
import numpy as np
import time
import os

import HandTrackingModule as htm

detector = htm.handDetector(detectionConfidence=0.85)

cap = cv2.VideoCapture(0)
cap.set(3, 1280)  # ---------> mengatur lebar canvas
cap.set(4, 720)  # ---------> mengatur tinggi canvas

myListDirectory = os.listdir(
    "meeting_11-VirtualPainter/header"
)  # membaca file yang ada di dalam folder header
print(myListDirectory)
overlayList = []

for imPath in myListDirectory:
    image = cv2.imread(f"meeting_11-VirtualPainter/header/{imPath}")
    overlayList.append(image)

header = overlayList[
    0
]  # index ke-0 dari list overlayList akan dijadikan sebagai default
header

while True:
    res, frame = cap.read()
    frame[0:125, 0:1280] = header
    frame = cv2.flip(frame, 1)
    frame = detector.findHands(frame)
    cv2.imshow("Frame", frame)
    if cv2.waitKey(10) & 0xFF == ord("q"):

        break
cap.release()
cv2.destroyAllWindows()
