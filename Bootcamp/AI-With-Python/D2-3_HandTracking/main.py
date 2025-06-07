import cv2
import time
import HandDetector as hd

# --- Initialization ---
handDetect = hd.handDetector(detection_confident=0.8)
cap = cv2.VideoCapture(0)
previous_time = 0

if not cap.isOpened():
    print("Error: Could not open video stream.")
    exit()

# --- Main Loop ---
while True:
    ret, frame = cap.read()
    if not ret:
        print("Error: Can't receive frame (stream end?). Exiting ...")
        break
    
    frame = cv2.flip(frame, 1)
    frame = handDetect.findHands(frame)
    lmlist = handDetect.getHandLocation(frame, draw=True)
    print(lmlist)

    # --- FPS Calculation ---
    current_time = time.time()
    if previous_time > 0:
        fps = 1 / (current_time - previous_time)
        cv2.putText(
            frame, 
            "frame rate: " + str(int(fps)),
            (350, 70), 
            cv2.FONT_HERSHEY_PLAIN, 
            2, 
            (0, 0, 255),
            2
        )
    previous_time = current_time

    # --- Display Frame ---
    cv2.imshow('frame', frame)

    if cv2.waitKey(1) & 0xFF == ord('q'):
        break

# --- Cleanup ---
cap.release()
cv2.destroyAllWindows()