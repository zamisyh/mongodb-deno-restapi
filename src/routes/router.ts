import { Router } from "https://deno.land/x/oak/mod.ts";
import { getData, insertOne, findOne, deleteOne, updateOne } from "../controllers/crud.ts";

const route = new Router();

route
    .get('/', async ({
        response  
    }: {
        response: any;
    }) => {
        response.status = 200;
        response.body = {
            message: "Welcome to deno land"
        }  
    })
    .get('/api/v1/profiles', getData)
    .post('/api/v1/profiles', insertOne)
    .get('/api/v1/profiles/detail/:id', findOne)
    .delete('/api/v1/profiles/delete/:id', deleteOne)
    .put('/api/v1/profiles/update/:id', updateOne);
    
    


export default route; 