import { exit } from 'process'

import {readFile} from 'fs/promises'

const filePath = process.argv[2]
 
if(!filePath)  {
    console.error(`error: please provide a JSON file path`)
    exit()
}

async function handleFile() {
    let data
    let json_data
    try {
        data = await readFile(filePath, 'utf8')
    }
    catch(error) {
        console.error(`error: could not read file: missing.json`)
        process.exitCode = 1
        return;
    }
    try {
        json_data = JSON.parse(data)
    }
    catch(error) {
        console.error(`error: invalid JSON in file: broken.json`)
        process.exitCode = 1
        return;
    }
    console.log(JSON.stringify(json_data,null, 2))
}

await handleFile()