import type { RequestHandler } from '@sveltejs/kit';
import type { Locals } from '$lib/types';
import { dev } from '$app/env';
import * as fs from 'fs';
import Datastore from 'nedb';

// import * as path from 'path';
import path from 'path';
import { readCookie, translatorUser } from '$lib/cookie';
import { logger } from '$lib/logger';

const dirname = path.resolve('./');

const projectRoot = path.join(dirname, dev ? 'static/packs' : 'srv/translator/build/assets/packs');

const fullPath = (filePath) => path.join(projectRoot, filePath);

const readFile:Promise<string> = (filePath:string) => {
    
    return new Promise((resolve, reject) => {
        const db = new Datastore({ filename: fullPath(filePath), autoload: true });
        db.loadDatabase(function (error) {
            if (error) {
                logger.fatal('FATAL: local database could not be loaded. Caused by: ' + error);
                console.log('FATAL: local database could not be loaded. Caused by: ' + error);
                return reject(JSON.stringify(error, null, 2));
            }

            logger.info('INFO: local database loaded successfully.');
            console.log('INFO: local database loaded successfully.');
            db.find({}, function(err, docs) {
                if(err) return reject(err);
                return resolve(JSON.stringify(docs))
            });
            
        });
    })
};

export const get: RequestHandler<Locals, string> = async (request) => {
    let body = '';
    const file = request.query.get('file');
    
    if (file) {
        logger.info('user', readCookie(request)[translatorUser], 'open file', file);
        body = await readFile(file);
    }
    return {
        status: 200,
        headers: {
            'content-type': 'appliction/json'
        },
        body
    }
}