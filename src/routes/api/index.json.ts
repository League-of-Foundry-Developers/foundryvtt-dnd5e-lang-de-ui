import type { RequestHandler } from '@sveltejs/kit';
import type { Locals } from '$lib/types';
import { dev } from '$app/env';
import * as fs from 'fs';
// import * as path from 'path';
import path from 'path';
import { readCookie, translatorUser } from '$lib/cookie';
import { logger } from '$lib/logger';
const dirname = path.resolve('./');

const projectRoot = path.join(dirname, dev ? 'static/compendium' : 'srv/translator/build/assets/compendium');

const fullPath = (filePath) => path.join(projectRoot, filePath);

const readFile = (filePath) => fs.readFileSync(fullPath(filePath), 'utf8');
const writeFile = (filePath, content) => fs.writeFileSync(fullPath(filePath), content);

export const get: RequestHandler<Locals, string> = (request) => {
    let body = '';
    const file = request.query.get('file');
    if (file) {
        body = readFile(file);
    }
    return {
        status: 200,
        headers: {
            'content-type': 'appliction/json'
        },
        body
    }
}

export const post: RequestHandler<Locals, string> = async (request) => {
    const update = JSON.parse(request.body);
    const fileName = update.file;
    delete update.file;
    const file = readFile(fileName);
    const json = JSON.parse(file);

    logger.warn('user', readCookie(request)[translatorUser], 'save to file', fileName, '. Change follow element', json.entries[update.id]);
    
    // new files, some entfernen
    if (json.entries[update.id]) {
        json.entries[update.id] = {
            name: update.name,
            description: update.description,
            material: update.material,
            source: update.source,
        };
        writeFile(fileName, JSON.stringify(json));  
    }  
    return {
        status: 200,
        body: 'go home'
    }
};

