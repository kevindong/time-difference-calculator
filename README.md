# Time Difference Calculator
A time difference calculator for Amazon's Alexa. May or may not be published right now. Creating this trivial skill was used as a learning experience.

# Replication of this Skill
1. Create a [Amazon Lambda function](https://console.aws.amazon.com/lambda) with the Alexa Skills Kit as the trigger. Take note of the ARN and copy it somewhere safe. You'll need it soon.
2. Clone this repo and run `npm install`. 
3. Upload a zip of the contents of this file (note: *not* the folder containing all the files). Include the resulting `node_modules` folder.
4. Go [here](https://developer.amazon.com/edw/home.html) to set up the Alexa Skill with the following values:

## Skill Information
### Name
Time Difference Calculator

### Invocation Name
time difference calculator

## Interaction Model
### Intent Schema
```json
{
  "intents": [
    {
      "slots": [
        {
          "name": "begin",
          "type": "AMAZON.TIME"
        },
        {
          "name": "end",
          "type": "AMAZON.TIME"
        }
      ],
      "intent": "getTimeDiff"
    },
    {
      "intent": "AMAZON.HelpIntent"
    },
    {
      "intent": "AMAZON.StopIntent"
    },
    {
      "intent": "AMAZON.CancelIntent"
    }
  ]
}
```

### Sample Utterances
```
getTimeDiff how long between {begin} and {end}
getTimeDiff how long is between {begin} and {end}
getTimeDiff how much time is between {begin} and {end}
getTimeDiff what's the time difference between {begin} and {end}
getTimeDiff what's the difference between {begin} and {end}
````

## Configuration
Pick `AWS Lambda ARN (Amazon Resource Name)`, select the appropriate geographic region, and paste in the ARN from step 1.

## Publishing
### Category
Education & Reference

### Testing Instructions
No specific testing instructions.

### Countries & Regions
All

### Short Skill Description
Quickly calculates the difference between two times.

### Full Skill Description
This skill will tell you the difference between the two times that you give it.

### Example Phrases
1. Alexa, ask Time Difference Calculator how much time is between 12:45 am and 4:46 pm?
2. Alexa, ask Time Difference Calculator what's the difference between noon and 5:26 pm?
3. Alexa, ask Time Difference Calculator what's the time difference between 6 am and 4:37 am?

### Keywords
time,calculator,time,difference,time,keeping

# License
Apache 2.0