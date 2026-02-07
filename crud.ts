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

    const createPost = await prisma.post.create({
        data: {
            title: "this is a title 1",
            content: "this is a content 1",
            authorId: 1
        }
    })
    console.log("Post created: ", createPost);
}

main();