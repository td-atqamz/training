import cv2
import FaceMeshDetector as fmd

detector = fmd.FaceMesh()

cap = cv2.VideoCapture(0)
cap.set(3, 1280)  # mengatur lebar canvas
cap.set(4, 960)  # mengatur tinggi canvas
left_eye = cv2.imread("meeting_14-DragonFaceFilter/assets/eye1.png")
right_eye = cv2.imread("meeting_14-DragonFaceFilter/assets/eye2.png")
smoke_animation = cv2.VideoCapture(
    "meeting_14-DragonFaceFilter/assets/smoke_animation.mp4"
)
smoke_frame_counter = 0

while True:
    ret, frame = cap.read()
    ret, smoke_frame = smoke_animation.read()
    smoke_frame_counter += 1

    if smoke_frame_counter == smoke_animation.get(cv2.CAP_PROP_FRAME_COUNT):
        smoke_animation.set(cv2.CAP_PROP_POS_FRAMES, 0)
        smoke_frame_counter = 0

    frame = cv2.flip(frame, 1)  # Untuk flip video frames

    face_mesh_frame, face_mesh_results = detector.detectFacialLandmarks(
        frame, detector.faceMeshVideos
    )

    cv2.imshow("Smoke Frame", smoke_frame)
    cv2.imshow("Face Mesh Frame", face_mesh_frame)
    cv2.imshow("Frame", frame)
    if cv2.waitKey(10) & 0xFF == ord("q"):
        break

cap.release()
cv2.destroyAllWindows()
