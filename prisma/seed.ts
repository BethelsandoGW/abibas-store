import prisma from "../lib/prisma";
async function main() {
    await prisma.roles.createMany({
        data: [
            { id: 'ADMIN', name: 'ADMIN' },
            { id: 'USER', name: 'USER' },
            { id: 'HARUNA', name: 'HARUNA' },
        ]
    });
    await prisma.audiences.createMany({
        data: [
            { name: 'ALL' },
            { name: 'MEN' },
            { name: 'WOMEN' },
            { name: 'KID' },
            { name: 'TEEN' },
        ]
    });
    await prisma.series.createMany({
        data: [
            {
                id: 'ORIGINAL',
                name: 'ORIGINAL',
                slug: 'ORIGINAL',
                description: 'ORIGINAL'
            }
        ]
    });
    await prisma.genres.createMany({
        data: [
            {
                id: 'ORIGINAL',
                name: 'ORIGINAL',
                slug: '',
                description: '',
                images: []
            }
        ]
    });

    // return await prisma.$queryRaw`SELECT name FROM "Audiences" WHERE name LIKE ${ 'w%'.toUpperCase() }`;
}
main()
    .then(async () => {
        console.log();
        await prisma.$disconnect();
    })
    .catch(async (e) => {
        console.error(e);
        await prisma.$disconnect();
        process.exit(1);
    });