# clearPath-Demo

## General info
This is a very very rough implementation of what I had in mind when it comes to a possible architecture for the robot configerator page
	
  
## initialize the project
clone this repo, navigate to the folder through your terminal, and run ```npm install```

to run the app use ```npm run dev``` and navigate to local host 3000


## Adding a bot
Navigate to the config_options.js file
* If you want to add an option, add it to the options list of the necessary drop down menu
* If you want to add a new drop down menu, add another element to the list linked to the respective bot, mimic the format of previous elements
* If you want to add a new bot, follow the template below, also, you can navigate to the new bot page by visiting the url 'localhost3000/bot-config/[bot name]'

```
[bot name]: [{
    id: 1,
    label: "   ",
    options: ["   ", "   "],
  },
  {
    id: 2,
    label: "   ",
    options: ["   ", "   "],
  },
  {
    id: 3,
    label: "   ",
    options: ["   ", "   "],
  }]
```

