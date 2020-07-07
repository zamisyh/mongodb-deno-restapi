import db from "../config/database.ts";

const profiles = db.collection('profiles');

const getData = async({
    response
}: {
    response: any;
})=> {
    const data = await profiles.find();
    response.status = 200;
    response.body = {
        success: true,
        message: "Success get all profile data",
        data: data
    }
}

const insertOne = async({
 response, request   
}: {
    response: any;
    request: any;
}) => {
    const body = await request.body();
    const data = body.value;
    
    await profiles.insertOne(data);

    response.status = 201,
    response.body = {
        success: true,
        message: "Success created data",
        data: data
    }
}

const findOne = async({
    response, params
} : {
    response: any;
    params: any;
}) => {
    const data = await profiles.findOne({
        _id: {
            $oid: params.id
        }
    });

    response.status = 200;
    response.body = {
        success: true,
        message: "Success find one data",
        data: data
    }
}

const updateOne = async({
    response, request, params
}: {
    response: any;
    request: any;
    params: any;
}) => {
    const body = await request.body();
    const data = body.value;

    await profiles.updateOne(
        {
            _id: {
                $oid: params.id
            }
        },{
            $set: {
                ...data
            }
        }
    );

    const res = await profiles.findOne({
        _id: {
            $oid: params.id
        }
    });

    response.status = 200;
    response.body = {
        success: true,
        message: "Success update one data",
        data: res
    }


        
    
    
}

const deleteOne = async({
    response, params
}: {
    response: any;
    params: any;
}) => {
    await profiles.deleteOne({
        _id:{
            $oid: params.id
        }
    });

    response.status = 200;
    response.body = {
        success: true,
        message: "Success delete one data",
        data: null
    }

}



export { getData, insertOne, findOne, updateOne, deleteOne };