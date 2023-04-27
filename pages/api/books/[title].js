import path from 'path';
import { promises as fs } from 'fs';

export default async function getBooks(req, res) {
    //Find the absolute path of the json directory
    const jsonDirectory = path.join(process.cwd(), 'json');
    //Read the json data file data.json
    const fileContents = await fs.readFile(jsonDirectory + '/data.json', 'utf8');
    const {title} = req.query;
    //Return the content of the data file in json format
    res.status(200).json(JSON.parse(fileContents).filter(b => b.title === title));
}