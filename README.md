# SFDC-Einstein-Intent-Lightning-Comp

In this module
1) Trained a Model using Einstein Intent. 
2) Created a generic Lightning Component which can sit on the following Lightning record pages - Accounts, Cases, Tasks. On the click of a button, the Model will be invoked to analyse the Comments field and provide the Intent

Reference Links:
1) https://trailhead.salesforce.com/en/modules/einstein_intent_basics - Salesforce Trailhead - tutorial on Einstein Intent
2) https://github.com/salesforceidentity/jwt - Salesforce provided JWT libraries. You will need these
3) http://help.sentiment140.com/for-students - I used the datasets provided here for initial POC

Explanation of files;
1) CURL Commands.txt;
  These are well documented to the Traihead link above. 2 notes on the data set;
  a) if you use CSV - it needs to be of a format - "content", intent
  b) I found the path needed to be in an online publically accessible location (I placed on S3)

2) JWT.cls, JWTBearerFLow.cls - JWT Classed provided by Salesforce

3) EinsteinIntentWrapper.cmp, EinsteinIntentWrapper1.apxc, EinsteinIntentWrapperController - My Lightning Component and Controller


