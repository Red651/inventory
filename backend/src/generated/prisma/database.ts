import { PrismaClient } from "../prisma";
import { withAccelerate } from "@prisma/extension-accelerate";

export const prisma = new PrismaClient()
        .$extends(withAccelerate())

async function main() {
}
    main()
    .then(async()=>{
        await prisma.$disconnect()
    })
    .catch(async(e)=>{
        console.log(e)
        await prisma.$disconnect()
        process.exit(1)
    })

export default prisma