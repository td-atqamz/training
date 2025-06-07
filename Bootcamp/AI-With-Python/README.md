# AI With Python Bootcamp

This repository contains materials for the AI With Python Bootcamp, focusing on computer vision applications including face detection, hand tracking, and facial emotion recognition.

## Project Structure

- `D1_FaceDetection/` - Face detection exercises and examples
- `D2-3_HandTracking/` - Hand tracking exercises and examples
- `D4-5_FacialEmotion/` - Facial emotion recognition exercises and examples

## Dependencies

Python 3.9 (recommended)

This project requires the following Python libraries:
- OpenCV (Computer Vision)
- TensorFlow and Keras (Deep Learning)
- MediaPipe (Media Processing)

## Setup Instructions

### Creating a Virtual Environment

1. Open Command Prompt (CMD) or PowerShell

2. Create a virtual environment:

   #### On Windows (Python 3.9 64-bit):
   ```bash
   py -3.9 -m venv venv
   ```

   #### On macOS and Linux:
   ```bash
   python3.9 -m venv venv
   ```

### Activating the Virtual Environment

You should see `(venv)` appear at the beginning of your terminal, indicating the virtual environment is active.

#### On Windows:

```bash
.\venv\Scripts\activate
```

#### On macOS and Linux:

```bash
source venv/bin/activate
```

### Installing Dependencies

With the virtual environment activated, install the required packages:


```bash
pip install -r requirements.txt
```

This will install all the dependencies listed in the requirements.txt file.

### Deactivating the Virtual Environment

When you're done working on the project, you can deactivate the virtual environment:

```bash
deactivate
```

        