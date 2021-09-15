#!/usr/bin/env node 

import fs from 'fs'
import glob from 'glob'
import matter from 'gray-matter'
import marked from 'marked'
import mkdirp from 'mkdirp'
import path from 'path'
import boxen from 'boxen'
import yargs from 'yargs'
import { hideBin } from 'yargs/helpers'



const options  = yargs(hideBin(process.argv))
 .usage("Usage: -h <file>")
 .option("i", { alias: "input", describe: "File name", type: "string", demandOption: true })
 .argv;

 let filename = `${options.input}` ;
 console.log(filename);

const readFile = (filename) => {
	const rawFile = fs.readFileSync(filename, 'utf8')
	const parsed = matter(rawFile)
	const html = marked(parsed.content)

	return { ...parsed, html }
}

const templatize = (template, { date, title, content }) =>
	template
		.replace(/<!-- PUBLISH_DATE -->/g, date)
		.replace(/<!-- TITLE -->/g, title)
		.replace(/<!-- CONTENT -->/g, content)

const saveFile = (filename, contents) => {
	const dir = path.dirname(filename)
	mkdirp.sync(dir)
	fs.writeFileSync(filename, contents)
}

const getOutputFilename = (filename, outPath) => {
	const basename = path.basename(filename)
	const newfilename = basename.substring(0, basename.length - 3) + 'html'
	const outfile = path.join(outPath, newfilename)
	return outfile
}

const processFile = (filename, template, outPath) => {
	const file = readFile(filename)
	const outfilename = getOutputFilename(filename, outPath)

	const templatized = templatize(template, {
		date: file.data.date,
		title: file.data.title,
		content: file.html,
	})

	saveFile(outfilename, templatized)
	console.log(`📝 ${outfilename}`)
}

const main = () => {
	const srcPath = path.resolve('src')
	const outPath = path.resolve('dist')
	const template = fs.readFileSync(path.join(srcPath, 'template.html'), 'utf8')
	if(filename.includes('.')){
		const filenames = glob.sync(srcPath + `/**/${filename}`)
		filenames.forEach((filename) => {
			processFile(filename, template, outPath)
		})
		console.log("ok")
	}else{
		const filenames = glob.sync(srcPath + `/${filename}/**/*.txt`)
		filenames.forEach((filename) => {
			processFile(filename, template, outPath)
		})
	}
	

	
}

main()
