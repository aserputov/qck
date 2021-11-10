#  ❄️ Quick- Static Site Generator ❄️

Version: Release 0.3

Quick (Static Site Generator)- is a software application for creating finished HTML pages from hard data and files, without having to author any HTML by hand. Made with `Node.js.`

> :warning: **For Development**: visit [`CONTRIBUTING`](https://github.com/aserputov/QckStaticSiteGenerator/blob/main/CONTRIBUTING.md)!

# Features

- `node . -- version (-v) `

- `node . -- help (-h)`

- `node . -- input (-i)`

- `node . -- config (-c)`(Themes Update)

## Option Features

- type `-s` or `-stylesheet` on the command line, it will be converted to a style tag link.

- `$npm install --save-dev prettier`

- Populated the `<title>...</title>`

- Automatically generate an `index.html` with all the links.

- Generates markdown file to html file

  example: `node . --input /SherlocksStories/testmd.md`

- Support for configuration files

## Configuration file

Configuration file should contain the following attributes: _input_, _stylesheet_

```
{
    "input":"SherlocksStories/testmd.md",
    "stylesheet": "https://cdnjs.cloudflare.com/ajax/libs/tufte-css/1.8.0/tufte.min.css"
}
```

# Authors

Anatoliy Serputov

# Links

- Blog [`Medium`](https://medium.com/@aserputov/qck-ssg-eb593782b856)

- Static Website Ex. [`Vercel`](https://cli-ssg-qck-cmp74iuwg-aserputov.vercel.app)

# License

MIT License
