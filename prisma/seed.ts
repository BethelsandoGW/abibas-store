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
    await prisma.categories.createMany({
        data: [
            {
                id: 'UNCLASSIFIED',
                name: 'UNCLASSIFIED',
                slug: '',
                description: '',
                images: []
            },
            {
                name: 'T-shirt',
                slug: 'express-yourself',
                description: 'Discover unique expressions with Abibas T-shirt collection.',
                images: []
            },
            {
                name: 'Shoe',
                slug: 'step-out-in-style',
                description: 'Step out in style with Abibas Shoe collection.',
                images: []
            },
            {
                name: 'Belt',
                slug: 'accessorize-your-outfit',
                description: 'Complete your look with Abibas Belt.',
                images: []
            },
            {
                name: 'Jean',
                slug: 'stay-comfortable-and-stylish',
                description: 'Stay comfortable and stylish with Abibas Jean.',
                images: []
            },
            {
                name: 'Pant',
                slug: 'elevate-your-look',
                description: 'Elevate your look with Abibas Pant collection.',
                images: []
            },
            {
                name: 'Hat',
                slug: 'top-off-your-style',
                description: 'Top off your style with Abibas Hat.',
                images: []
            },
            {
                name: 'Sock',
                slug: 'complete-your-outfit',
                description: 'Complete your outfit with Abibas Sock.',
                images: []
            },
            {
                name: 'Jacket',
                slug: 'stay-warm-and-stylish',
                description: 'Stay warm and stylish with Abibas Jacket.',
                images: []
            },
            {
                name: 'Short',
                slug: 'stay-cool-and-comfortable',
                description: 'Stay cool and comfortable with Abibas Short.',
                images: []
            },
            {
                name: 'Sandal',
                slug: 'relax-your-feet',
                description: 'Relax your feet with Abibas Sandal collection.',
                images: []
            },
            {
                name: 'Watch',
                slug: 'complete-your-look',
                description: 'Complete your look with Abibas Watch.',
                images: []
            },
            {
                name: 'Glove',
                slug: 'protect-your-hands',
                description: 'Protect your hands with Abibas Glove.',
                images: []
            },
            {
                name: 'Cap',
                slug: 'stay-cool-and-stylish',
                description: 'Stay cool and stylish with Abibas Cap.',
                images: []
            },
            {
                name: 'Backpack',
                slug: 'carry-your-essentials',
                description: 'Carry your essentials with Abibas Backpack.',
                images: []
            },
            {
                name: 'Jersey',
                slug: 'support-your-team',
                description: 'Support your team with Abibas Jersey.',
                images: []
            },
            {
                name: 'Legging',
                slug: 'stay-active-and-stylish',
                description: 'Stay active and stylish with Abibas Legging.',
                images: []
            },
            {
                name: 'Sunglass',
                slug: 'protect-your-eyes',
                description: 'Protect your eyes with Abibas Sunglass.',
                images: []
            },
            {
                name: 'Bottle',
                slug: 'stay-hydrated',
                description: 'Stay hydrated with Abibas Bottle.',
                images: []
            },
            {
                name: 'Headband',
                slug: 'complete-your-look',
                description: 'Complete your look with Abibas Headband.',
                images: []
            },
            {
                name: 'Tie',
                slug: 'elevate-your-formal-style',
                description: 'Elevate your formal style with Abibas Tie.',
                images: []
            },
            {
                name: 'Wallet',
                slug: 'carry-your-essentials',
                description: 'Carry your essentials with Abibas Wallet.',
                images: []
            },
            {
                name: 'Umbrella',
                slug: 'stay-dry-in-style',
                description: 'Stay dry in style with Abibas Umbrella.',
                images: []
            },
            {
                name: 'Towel',
                slug: 'stay-fresh',
                description: 'Stay fresh with Abibas Towel.',
                images: []
            },
            {
                name: 'Gaiter',
                slug: 'protect-your-neck-and-face',
                description: 'Protect your neck and face with Abibas Gaiter.',
                images: []
            },
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
            },
            {
                name: 'Life Style',
                slug: 'Make your move with Abibas',
                description: 'Abibas Life Style products is suitable for your great Move!',
                images: []
            },
            {
                name: 'Running',
                slug: 'Running',
                description: 'Elevate your running experience with Abibas Running collection.',
                images: []
            },
            {
                name: 'Training',
                slug: 'Training',
                description: 'Reach your fitness goals with Abibas Training gear.',
                images: []
            },
            {
                name: 'Soccer',
                slug: 'Soccer',
                description: 'Score goals in style with Abibas Soccer essentials.',
                images: []
            },
            {
                name: 'Basketball',
                slug: 'Basketball',
                description: 'Dominate the court with Abibas Basketball gear.',
                images: []
            },
            {
                name: 'Outdoor',
                slug: 'Outdoor',
                description: 'Conquer the outdoors with Abibas Outdoor collection.',
                images: []
            },
            {
                name: 'Golf',
                slug: 'Golf',
                description: 'Perfect your swing with Abibas Golf essentials.',
                images: []
            },
            {
                name: 'Cycling',
                slug: 'Cycling',
                description: 'Ride in style with Abibas Cycling gear.',
                images: []
            },
            {
                name: 'Fitness',
                slug: 'Fitness',
                description: 'Achieve your fitness goals with Abibas Fitness collection.',
                images: []
            },
            {
                name: 'Tennis',
                slug: 'Tennis',
                description: 'Ace every match with Abibas Tennis essentials.',
                images: []
            },
            {
                name: 'Yoga',
                slug: 'Yoga',
                description: 'Find inner peace and balance with Abibas Yoga gear.',
                images: []
            },
            {
                name: 'Hiking',
                slug: 'Hiking',
                description: 'Explore the great outdoors with Abibas Hiking essentials.',
                images: []
            },
            {
                name: 'Swimming',
                slug: 'Swimming',
                description: 'Dive into style with Abibas Swimming gear.',
                images: []
            },
            {
                name: 'Snowboarding',
                slug: 'Snowboarding',
                description: 'Conquer the snowy slopes with Abibas Snowboarding gear.',
                images: []
            },
            {
                name: 'Skateboarding',
                slug: 'Skateboarding',
                description: 'Ride the streets in style with Abibas Skateboarding essentials.',
                images: []
            },
            {
                name: 'Surfing',
                slug: 'Surfing',
                description: 'Catch the waves with Abibas Surfing collection.',
                images: []
            },
            {
                name: 'Volleyball',
                slug: 'Volleyball',
                description: 'Spike and serve with Abibas Volleyball essentials.',
                images: []
            },
            {
                name: 'Martial Arts',
                slug: 'Martial-Arts',
                description: 'Master the art with Abibas Martial Arts gear.',
                images: []
            },
            {
                name: 'Cricket',
                slug: 'Cricket',
                description: 'Hit it out of the park with Abibas Cricket essentials.',
                images: []
            },
            {
                name: 'Baseball',
                slug: 'Baseball',
                description: 'Play ball with Abibas Baseball gear.',
                images: []
            },
            {
                name: 'Rugby',
                slug: 'Rugby',
                description: 'Tackle the field with Abibas Rugby essentials.',
                images: []
            },
        ]
    });
    await prisma.series.createMany({
        data: [
            {
                name: 'Night StarFall MK1',
                slug: 'Night-Starfall-MK1',
                description: 'This is Abibas Nighty',
            },
            {
                name: 'FireStorm X',
                slug: 'FireStorm-X',
                description: 'Experience the power of FireStorm X series.',
            },
            {
                name: 'Lunar Eclipse Pro',
                slug: 'Lunar-Eclipse-Pro',
                description: 'Unleash the darkness with Lunar Eclipse Pro.',
            },
            {
                name: 'Thunderbolt Z',
                slug: 'Thunderbolt-Z',
                description: 'Feel the thunder with Thunderbolt Z series.',
            },
            {
                name: 'TechNova Horizon',
                slug: 'TechNova-Horizon',
                description: 'Explore the limitless possibilities with TechNova Horizon.',
            },
            {
                name: 'Stealth Phantom X',
                slug: 'Stealth-Phantom-X',
                description: 'Enter the world of Stealth Phantom X series.',
            },
            {
                name: 'Quantum Fusion 9',
                slug: 'Quantum-Fusion-9',
                description: 'Experience quantum-level performance with Quantum Fusion 9.',
            },
            {
                name: 'Solar Flare V2',
                slug: 'Solar-Flare-V2',
                description: 'Ignite your gaming experience with Solar Flare V2.',
            },
            {
                name: 'AeroBlade Pro',
                slug: 'AeroBlade-Pro',
                description: 'Achieve new heights with AeroBlade Pro series.',
            },
            {
                name: 'HyperDrive Max',
                slug: 'HyperDrive-Max',
                description: 'Boost your productivity with HyperDrive Max series.',
            },
            {
                name: 'Eternal Frost Elite',
                slug: 'Eternal-Frost-Elite',
                description: 'Embrace the coolness with Eternal Frost Elite.',
            },
            {
                name: 'Spectra Wave X',
                slug: 'Spectra-Wave-X',
                description: 'Ride the waves of innovation with Spectra Wave X series.',
            },
            {
                name: 'Blitzkrieg Pro',
                slug: 'Blitzkrieg-Pro',
                description: 'Dominate the battlefield with Blitzkrieg Pro series.',
            },
            {
                name: 'Zenith Prime',
                slug: 'Zenith-Prime',
                description: 'Reach the pinnacle of performance with Zenith Prime series.',
            },
            {
                name: 'Inferno Fury GT',
                slug: 'Inferno-Fury-GT',
                description: 'Feel the heat with Inferno Fury GT series.',
            },
            {
                name: 'Nebula Force X',
                slug: 'Nebula-Force-X',
                description: 'Unleash the cosmic power with Abibas Nebula Force X.',
            },
            {
                name: 'Quantum Hypernova',
                slug: 'Quantum-Hypernova',
                description: 'Experience the next level of quantum gaming with Abibas Quantum Hypernova.',
            },
            {
                name: 'Stealth Recon 5',
                slug: 'Stealth-Recon-5',
                description: 'Dominate the gaming battlefield with Abibas Stealth Recon 5.',
            },
            {
                name: 'Titan Vanguard',
                slug: 'Titan-Vanguard',
                description: 'Conquer new gaming heights with Abibas Titan Vanguard series.',
            },
            {
                name: 'Nova Blaze X',
                slug: 'Nova-Blaze-X',
                description: 'Ignite your gaming passion with Abibas Nova Blaze X.',
            },
            {
                name: 'Shadowblade Elite',
                slug: 'Shadowblade-Elite',
                description: 'Enter the elite world of gaming with Abibas Shadowblade Elite series.',
            },
            {
                name: 'Quantum Sonic Pro',
                slug: 'Quantum-Sonic-Pro',
                description: 'Immerse yourself in the sonic experience with Abibas Quantum Sonic Pro.',
            },
            {
                name: 'Horizon Spark X',
                slug: 'Horizon-Spark-X',
                description: 'Spark your gaming journey with Abibas Horizon Spark X.',
            },
            {
                name: 'Nebula Blaze V2',
                slug: 'Nebula-Blaze-V2',
                description: 'Upgrade your gaming experience with Abibas Nebula Blaze V2.',
            },
            {
                name: 'Quantum Strike GT',
                slug: 'Quantum-Strike-GT',
                description: 'Achieve gaming greatness with Abibas Quantum Strike GT.',
            },
            {
                name: 'Solar Burst Pro',
                slug: 'Solar-Burst-Pro',
                description: 'Burst into the gaming scene with Abibas Solar Burst Pro.',
            },
            {
                name: 'AeroFlare Elite',
                slug: 'AeroFlare-Elite',
                description: 'Experience elite gaming with Abibas AeroFlare Elite series.',
            },
            {
                name: 'HyperDrive Alpha X',
                slug: 'HyperDrive-Alpha-X',
                description: 'Alpha-level performance with Abibas HyperDrive Alpha X.',
            },
            {
                name: 'Inferno Blaze MK2',
                slug: 'Inferno-Blaze-MK2',
                description: 'Upgrade your gaming firepower with Abibas Inferno Blaze MK2.',
            },
            {
                name: 'Zenithss Spectra V3',
                slug: 'Zenith-Spectra-V3',
                description: 'Elevate your gaming with Abibas Zenith Spectra V3.',
            },
            {
                name: 'Quantumss Fusion Elite',
                slug: 'Quantum-Fusion-Elite',
                description: 'Elite gaming fusion with Abibas Quantum Fusion Elite.',
            },
        ],
    });
    await prisma.events.createMany({
        data: [
            {
                name: 'Ready Set-GO! Festival',
                slug: 'Millennium Science School Halo Festival now ON!',
                description: 'Join the excitement of the Ready Set-GO! Festival with Abibas.',
                images: [],
                status: true,
                beginDate: new Date('2023-12-20T00:00:00Z'),
                endDate: new Date('2024-01-10T23:59:59Z'),
            },
            {
                name: 'Christmas Sale',
                slug: 'christmas-sale',
                description: 'Celebrate Christmas with special discounts!',
                images: [],
                status: false,
                beginDate: new Date('2023-12-25T00:00:00Z'),
                endDate: new Date('2023-12-25T23:59:59Z'),
            },
            {
                name: 'Jingle Bell on Jings!',
                slug: 'ning nung.. who is there?',
                description: 'Jings your suprise discount on Christmast sale',
                images: [],
                status: true,
                beginDate: new Date('2023-12-20T00:00:00Z'),
                endDate: new Date('2024-01-10T23:59:59Z'),
            },
            {
                name: 'New Year Extravaganza Showcase',
                slug: 'new-year-extravaganza-showcase',
                description: 'Welcome the new year with an extravagant showcase of talents and festivities!',
                images: [],
                status: true,
                beginDate: new Date('2023-12-26T00:00:00Z'),
                endDate: new Date('2024-01-05T23:59:59Z'),
            },

            {
                name: 'Artisan Winter Wonderland',
                slug: 'artisan-winter-wonderland',
                description: 'Explore a winter wonderland of artisanal crafts and creativity!',
                images: [],
                status: false,
                beginDate: new Date('2024-01-11T00:00:00Z'),
                endDate: new Date('2024-01-20T23:59:59Z'),
            },
            {
                name: 'Tech Marvels Showcase',
                slug: 'tech-marvels-showcase',
                description: 'Discover marvels in technology at this extraordinary showcase!',
                images: [],
                status: false,
                beginDate: new Date('2024-01-21T00:00:00Z'),
                endDate: new Date('2024-01-30T23:59:59Z'),
            },
            {
                name: 'Fashion Elegance Extravaganza',
                slug: 'fashion-elegance-extravaganza',
                description: 'Immerse yourself in the elegance of fashion at this grand extravaganza!',
                images: [],
                status: false,
                beginDate: new Date('2024-01-31T00:00:00Z'),
                endDate: new Date('2024-02-10T23:59:59Z'),
            },

            {
                name: 'Midwinter Magic Showcase',
                slug: 'midwinter-magic-showcase',
                description: 'Witness the magic of midwinter in this enchanting showcase!',
                images: [],
                status: false,
                beginDate: new Date('2024-01-26T00:00:00Z'),
                endDate: new Date('2024-02-05T23:59:59Z'),
            },
            {
                name: 'Culinary Delights Festival',
                slug: 'culinary-delights-festival',
                description: 'Savor the flavors at this culinary delights festival!',
                images: [],
                status: false,
                beginDate: new Date('2024-02-06T00:00:00Z'),
                endDate: new Date('2024-02-15T23:59:59Z'),
            },
            {
                name: 'Artistry in Motion Expo',
                slug: 'artistry-in-motion-expo',
                description: 'Experience artistry in motion at this captivating expo!',
                images: [],
                status: false,
                beginDate: new Date('2024-02-16T00:00:00Z'),
                endDate: new Date('2024-02-25T23:59:59Z'),
            },

            {
                name: 'Heartfelt Love Affair',
                slug: 'heartfelt-love-affair',
                description: 'Celebrate love in a heartfelt affair filled with romance and joy!',
                images: [],
                status: false,
                beginDate: new Date('2024-02-10T00:00:00Z'),
                endDate: new Date('2024-02-20T23:59:59Z'),
            },
            {
                name: 'Tech Marvels Unleashed',
                slug: 'tech-marvels-unleashed',
                description: 'Unleash the latest tech marvels at this cutting-edge exhibition!',
                images: [],
                status: false,
                beginDate: new Date('2024-02-21T00:00:00Z'),
                endDate: new Date('2024-02-29T23:59:59Z'),
            },
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