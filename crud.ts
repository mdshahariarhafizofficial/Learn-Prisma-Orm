import { prisma } from "./lib/prisma"

const main = async () => {

    // create user
    // const createUser = await prisma.user.create({
    //     data: {
    //         name: "admin",
    //         email: "admin@email.com",
    //         role: "admin"
    //     }
    // });

    // const createPost = await prisma.post.create({
    //     data: {
    //         title: "this is a title 1",
    //         content: "this is a content 1",
    //         authorId: 1
    //     }
    // })


    // console.log("Post created: ", createPost);

    // Retrive all data
    const retriveAllData = await prisma.user.findMany({
        // include: {
        //     posts: true,
        //     profile: true
        // }
        select: {
            id: true,
            email: true
        }
    });
    console.log(retriveAllData);
     
}

main();