import {Request,Response} from 'express'
import { QueryResult } from 'pg';
import { pool } from '../database';
export const getUsers = async (req:Request , res:Response):Promise<Response>=>{
    try{const response = await pool.query('SELECT * FROM users');
    console.log(response.rows)
    return res.status(200).json(response.rows)
}catch(e){
    console.log(e);
    return res.status(5000).json('Internak problem');
}
}

export const getUserbyId = async (req:Request,res:Response):Promise<Response>=>{
    const id =parseInt(req.params.id)
   const response = pool.query('SELECT * FROM users WHERE id = $1',[id])
    return res.json((await response).rows)
}

export const createUser = async (req:Request,res:Response):Promise<Response>=>{
    const {name,email} = req.body;
    const response : QueryResult = await pool.query('INSERT INTO users(name,email) VALUES($1,$2)',[name,email]);
    
    return res.json({
        Message :'User di tambahkan',
        body:{
            name,
            email
        }
    })

}

export const updateUser = async (req:Request,res:Response):Promise<Response>=>{
    const id = parseInt(req.params.id);
    const {name,email} = req.body;

    pool.query('UPDATE users SET name = $1,email = $2 WHERE id = $3',[name,email,id]);
    return res.json('Oke teredit');

}

export const deleteUser = async (req:Request,res:Response):Promise<Response>=>{
    const id = parseInt(req.params.id);
    const response = await pool.query('DELETE FROM users WHERE id= $1',[id]);
    return res.json(`user ${id} di hapus`)

}