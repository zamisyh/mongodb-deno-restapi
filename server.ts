import { Application } from "https://deno.land/x/oak/mod.ts";
import route from './src/routes/router.ts';

const app = new Application();
const port = 3000;

app.use(route.routes());
app.use(route.allowedMethods()); 

console.log(`Server is running on : https://localhost:${port}`);

await app.listen({port}); 