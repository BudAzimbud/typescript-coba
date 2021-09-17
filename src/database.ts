import {Pool} from 'pg'

export const pool = new Pool({
    user:'postgres',
    host:'localhost',
    password:'123',
    database:'typescriptdatabase',
    port:5432
});