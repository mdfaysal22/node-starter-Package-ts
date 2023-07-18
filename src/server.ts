import app from "./app";
import database from "./app/utils/database"
import config from "./config";

const server =async () => {
    try{
        await database();
    app.listen(config.port, () => {
        console.log(`Server running on port ${config.port}`);
    })
    }catch(error){
        console.log("Error server Starting");
    }
};

server();