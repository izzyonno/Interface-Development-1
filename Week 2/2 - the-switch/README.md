# The Switch

## The solution

Given the HTML and CSS as provided, use jQuery to hear the click of the switch and meet the following criteria:

- When someone hits the button in the switch, remove the current state class (on/off), and apply the opposite class (on/off)
- Swap the colors of the body's background and text by adding or removing the dark/light class
- Lastly, change the text in box to say "It's so bright in here!" when it's on, and "Hey, who turn off the lights?" when it's off

## Hints

Start with small steps:

1. Change the status text when the document is ready
2. Add a click listener to the switch and incorporate the text change from number 1
  - Note that now you've confirmed the switch works
3. How do we switch the classes back now?
  - This is easy if we knew what class was currently on the switch
  - Javascript "IF" will give us an easy way, but there's a way to do this by attaching the events to the global scope
