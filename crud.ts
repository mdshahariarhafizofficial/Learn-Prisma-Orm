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
    // const retriveAllData = await prisma.user.findMany({
    //     // include: {
    //     //     posts: true,
    //     //     profile: true
    //     // }
    //     select: {
    //         id: true,
    //         email: true
    //     }
    // });
    // console.log(retriveAllData);

    // find one
    // const getUser = await prisma.user.findFirst({
    //     where: {
    //         id: 1
    //     },
    //     select: {
    //         posts: true
    //     }
    // })
    // console.log(getUser);

    // // update user
    // const updateUser = await prisma.user.update({
    //     where: {
    //         id: 1
    //     },
    //     data: {
    //         name: "Rahim Uddin"
    //     }
        
    // })
    // console.log(updateUser);

    // get post
    const getPost = await prisma.post.findMany({
        where: {
            id: 1
        }
    })
    console.log(getPost);
    
    // delete
    const deletePost = await prisma.post.delete({
        where: {
            id: 1
        }
    })
    console.log(deletePost);
    

}

main();