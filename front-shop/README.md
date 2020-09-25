### Front-shop exercise for Open Food Network

**To run the application**
- Run `npm install`
- Run `npm start`

**Assumptions:**
 - Each product can only be added to the cart once
- Image would come from the json-response. Since the images were not correct, I added the image-name directly to "small_image" in the JSON
- The JSON was a bit malformed, I removed a few commas. If I would use a response from the api, I would use "useEffect" for fetching the data and also catch errors in case there was any from the api

**Notes and things I would like to add:**
- I decided to not use any complex css handling since this is a small application. Its better you see how I handle plain css than specific frameworks. If this were a production-app, I would have considered using Styled Components or CSS-modules.

- Tests!! I decided to focus on the react-functionality itself and the css during the hours I spent, but the same here, if this were to be a production-application, tests are non-negotiable.

**Time spent**
~ 5 hours active time