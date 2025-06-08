# Machine Learning for Kids Bootcamp

This repository contains projects and resources for teaching machine learning concepts to kids through interactive and engaging activities.

## Project Structure

- `D1/` - Introduction to image classification
  - `Cat-Or-Dog.sb3` - A Scratch project that demonstrates basic image classification

- `D2/` - Interactive ML applications
  - `Fun-Face-Filter.sb3` - A face filter application built in Scratch
  - `Virtual-Catcher-Game.sb3` - An interactive game using machine learning

- `D3/` - Language processing and chatbots
  - `AI-Chatbot.sb3` - A simple chatbot built in Scratch
  - Text training files (`atmosphere.txt`, `blue_sky.txt`, etc.) - Sample data for training the chatbot

- `chatbot/` - Python implementation of an Earth Explorer chatbot
  - Uses the Machine Learning for Kids API to classify user questions
  - Provides information about Earth's atmosphere, water, and sky

## Dependencies

Python 3.9 (recommended)

This project requires the following Python libraries:
- - Requests library (`requests==2.32.3`)

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

## Machine Learning for Kids Platform

This project uses the [Machine Learning for Kids](https://machinelearningforkids.co.uk/) platform, which provides child-friendly tools to train and test machine learning models.

## Resources

- [Machine Learning for Kids](https://machinelearningforkids.co.uk/)
- [Scratch](https://machinelearningforkids.co.uk/scratch/)