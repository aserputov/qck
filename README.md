# QCK-SSG
release 0.1

Quick (Static Site Generator)- is a software application for creating finished HTML pages from hard data and files, without having to author any HTML by hand. Made with ```Node.js.```
# Start

To launch the app: 


1. Clone the repo:

    $git clone ``` https://github.com/aserputov/final-qck-ssg ```

2. Install dependencies:

    ``` npm install ```

3. You can start working:

    ```node .  ```

# Features

- ```node . -- version (-v) ```

- ```node . -- help (-h)```

- ```node . -- input (-i)```

- ```node . -- config (-c)```(Themes Update)

## Example
(Start from the main directory)

- ```node . -i index.txt``` (index.txt as an example you can use another file name )

- ```node . --input /SherlocksStories``` (/src/page is an example you can use another path to a folder )

- ``` node . --input /SherlocksStories -s https://cdnjs.cloudflare.com/ajax/libs/tufte-css/1.8.0/tufte.min.css```

## Option Features

- type ```-s``` or ```-stylesheet``` on the command line, it will be converted to a style tag link.

-  ```$npm install --save-dev prettier```

-  Populated the ```<title>...</title>```

- Automatically generate an ```index.html``` with all the links.

- Generates markdown file to html file

    example: ```node . --input /SherlocksStories/testmd.md```

- Support for configuration files

## Configuration file
Configuration file should contain the following attributes: *input*, *stylesheet*

```
{
    "input":"SherlocksStories/testmd.md",
    "stylesheet": "https://cdnjs.cloudflare.com/ajax/libs/tufte-css/1.8.0/tufte.min.css"
}
```

# Authors

Anatoliy Serputov

# Links
- Blog [```Medium```](https://medium.com/@aserputov/qck-ssg-eb593782b856)

- Static Website Ex. [```Vercel```](https://cli-ssg-qck-cmp74iuwg-aserputov.vercel.app)
# License

MIT License 
