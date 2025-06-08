import time  # To add delays
import random  # To generate random numbers
import requests


atmosphere_answers = [
    "The atmosphere is a layer of gases that surrounds Earth, protecting us and helping us breathe. Isn;t it amazing?",
    "The atmosphere is like Earth's invisible blanket, made of gases like nitrogen and oxygen. It keeps us warm and protects us from harmful sunlight. Isn't that fascinating",
    "The atmosphere is where clouds form and where weather happens. It's essential for life as we know it!",
]
water_answers = [
    "Around 71% of Earth's surface is water, but did you know less than 1% of this is easily accessible for human use? The rest is locked in glaciers, underground, or in salty oceans.",
    "About 71% of Earth's surface is covered with water, mostly in oceans. That's why we call it the Blue Planet!",
    "Earth is truly a watery planet, with around 1.386 billion cubic kilometers (or 332.5 million cubic miles) of water. Most of it is salty ocean water, while only 3% is freshwater.",
]
sky_answers = [
    "The sky looks blue because sunlight scatters in the atmosphere, and blue light scatters the most. It's like nature's magic!",
    "It's all about wavelengths! Blue light has shorter wavelengths and is scattered more by air molecules. Cool, right?",
    "Sunlight hits air molecules and scatters in all directions. Our eyes see the blue light best, which is why the sky looks blue.",
]
reaction_answers = [
    "I know, right? Science is full of surprises!",
    "Isn't it amazing how much we can learn about our planet? ",
    "There's always more to discover. What else do you want to know?",
]

greeting_answers = [
    "Hi there!  I'm here to chat about Earth. What do you want to know?",
    "Hello! Let's talk about our amazing planet. What's on your mind? ",
    "Hey! Ready to learn some cool facts about Earth?",
]


# This function will pass your text to the machine learning model
# and return the top result with the highest confidence
def classify(text):
    key = "69556d40-443f-11f0-9df7-0f1d3cfa3c36a3e6e0a1-b1cb-4b62-a2f6-09cb1a5c8ef8"
    url = "https://machinelearningforkids.co.uk/api/scratch/" + key + "/classify"

    response = requests.get(url, params={"data": text})

    if response.ok:
        responseData = response.json()
        topMatch = responseData[0]
        return topMatch
    else:
        response.raise_for_status()


def typing_animation(text, delay=0.05):
    for char in text:
        print(char, end="", flush=True)
        time.sleep(delay)
    print()


def chatbot():
    # Display welcome message
    print("=" * 50)
    print("🌍  Welcome to Earth Explorer Chatbot!  🤖")
    print("=" * 50)
    print("I can answer questions about Earth's atmosphere, water, and more!")
    print("Type 'exit' to end the chat.\n")
    print("=" * 50)

    while True:
        # Get user input
        question = input("🟢 Ask me a question: ").strip()
        answer = classify(question)
        answer_label = answer["class_name"]
        answer_confidence = answer["confidence"]
        # Exit condition
        if question.lower() == "exit":
            typing_animation("🔵 Thanks for chatting with me! Goodbye! ")
            break
        if answer_confidence < 10:
            typing_animation("Sorry, I'm not sure about that one")
        else:
            # Respond based on the label
            random_number = random.randint(0, 2)
            print("🤖 Chatbot says:")
            if answer_label == "greeting":
                bot_says = greeting_answers[random_number]
                typing_animation(bot_says)
            elif answer_label == "atmosphere":
                bot_says = atmosphere_answers[random_number]
                typing_animation(bot_says)
            elif answer_label == "water":
                bot_says = water_answers[random_number]
                typing_animation(bot_says)
            elif answer_label == "blue_sky":
                bot_says = sky_answers[random_number]
                typing_animation(bot_says)


# Run the chatbot
if __name__ == "__main__":
    chatbot()
