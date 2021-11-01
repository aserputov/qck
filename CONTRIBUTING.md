### Setup and Development

# Start

To launch the app:

1. Clone the repo:

   $git clone `https://github.com/aserputov/final-qck-ssg`

2. Install dependencies:

   `npm install`

3. You can start working:

   `node . `

## Example

(Start from the main directory)

- `node . -i index.txt` (index.txt as an example you can use another file name )

- `node . --input /SherlocksStories` (/src/page is an example you can use another path to a folder )

- ` node . --input /SherlocksStories -s https://cdnjs.cloudflare.com/ajax/libs/tufte-css/1.8.0/tufte.min.css`

## Requirements. Code Fomatting.

Quick - Static Site Generator use Prettier and ESLint as a code formatters, before submitting your pull request, please do the following:

# Step 1

`npx prettier --check .`

or(if you sure that your code won't break use: )

`npx prettier --write .`

Also,

> `prettier --write .` is great for formatting everything, but for a big project it might take a little while. You may run `prettier --write app/` to format a certain directory, or prettier `--write app/components/Button.js` to format a certain file. Or use a glob like prettier `--write "app/**/*.test.js" ` to format all tests in a directory

# Step 2

`npx eslint . `

or ( check single file or folder byy using:)

`npx eslint yourfile.js`
