export type Product = {
    id: number;
    name: string;
    price: number;
    image: string;
    category: string;
    description: string;
    stock: number;
    rating: number;
}

export const dummyProducts: Product[] = [
    {
        id: 1,
        name: 'Organic Spinach',
        price: 2.00,
        image: 'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEivzYDZOKIsK-piM7uL8CaP4ye84bO-nj5wjPlybEoZv452WACHnyaT-BGiaP75X0yQh3dTS6lfx03rH32cthnhe3qoF-nOZbaepnDOKHGk_LtH2UbmXRodT83MC87RCm8FA-64Zaz5LaMxPmKSWbBk4M_eO1L-Vt-d8bXdJwHLPpOTLnuYtUTK4zyf5wE/s1024/_a5ccf12f-8459-465e-a140-cd4581c2ad42.jpg',
        category: 'Vegetables',
        description: 'Fresh, organic spinach packed with nutrients and grown sustainably. Perfect for salads, soups, and smoothies.',
        stock: 90,
        rating: 4.8
    },
    {
        id: 2,
        name: 'Mangoes',
        price: 3.20,
        image: 'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhI9b0W8Adr9Rivtie0LxO4Cv7msNWTjFT4yFZyRTcN5woW9E5fMBHRtgUW3lh46L_M_ywQFOXoDfXF-LxV585r8gB17LK6Sq1rhBOL4yuJF00UmbUwIh8sXN1XLB5xbzFhk-lCdyDvLgZ8o1xrSrpcdmJaMKJpeGW9vEDON4jo8LI8ltda8mIQ8DcAWGc/s1024/_3aefd143-e726-4004-881b-8347b8bbee30.jpg',
        category: 'Fruits',
        description: 'Juicy, sweet mangoes grown in the heart of the farm, handpicked for maximum flavor and freshness. Ideal for desserts, salads, or snacks.',
        stock: 70,
        rating: 4.9
    },
    {
        id: 3,
        name: 'Farm-grown Carrots',
        price: 1.50,
        image: 'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhxCzQsrphPPxTdBbTvmzrNfT-G5rexhCT-J37yRbXPZ0ZlFuDL8uCg8V7rjQ43fWamzoEmUKqPyNt62c8KxiFfd1TSJ_ul2oPZSXFH35VUHecuz-YyyHOotFjtPelv3Y2_YKij8C-8Srch6jmOw0EExGu2IloGlbwlNTDnhML7Ujr82eR28rFzXaGIbYs/s1024/_2f05890f-6abb-4fa4-af8e-fdc5088c8bdd.jpg',
        category: 'Vegetables',
        description: 'These farm-grown carrots are crisp, fresh, and full of natural sweetness. Perfect for salads, soups, and healthy snacking.',
        stock: 120,
        rating: 4.5
    },
    {
        id: 4,
        name: 'Honey',
        price: 6.00,
        image: 'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgI7iIeZf2nS0yBn8CyPWZqFn-GJUP8KLGV4GVDnZr2yTBOAtwLyB35soe95vSCR7HhA_CMrFJMgdXCmgh6bHPsMpwZUIE0UegypedPpdQneY-fToJSah9jw0vy81pcddhn3YPj5GiGgZMQAQfka48GGhDVM3H3Ii-4LgfAtLeyr_5vomDPZcgMl16j3uM/s1024/_55ddb899-8c29-4ba5-a50c-4c01e5ace4f2.jpg',
        category: 'Honey & Jam',
        description: 'Pure, natural honey harvested from organic hives. No additives or preservatives, just pure sweetness from nature.',
        stock: 30,
        rating: 5.0
    },
    {
        id: 5,
        name: 'Organic Potatoes',
        price: 1.80,
        image: 'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjB237E_DChJncBY4ZLZNUiB0_ItnS3lpvQKhyphenhyphenGcSinin17y1HgRuwvCuQjWLWZJuWcxr4zKofsDfbzlC3IB1pjm2LR_cRu3oSg_i9u3Vb4YtzdDCzojwW5mSN_ZI1Ao9hLoIQNlRUaDqjMZKJjhlaSQ7PIfkIRY_TS81q5peG0iWkPbuNZU76XyI1alG4/s1024/_529f3d46-139f-44ad-adf8-08d4516a0d5b.jpg',
        category: 'Vegetables',
        description: 'These organic potatoes are grown naturally without the use of pesticides. Ideal for all types of cooking, including baking, frying, and boiling.',
        stock: 150,
        rating: 4.7
    },
    {
        id: 6,
        name: 'Fresh Cow Milk',
        price: 1.20,
        image: 'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEifp4VCtpeyDZNt8_V8J3GJTSpZUXlok_J68ynzSMHaHXcYS7__pTNOc0gvzs6DdIbVB1W3oCMT0nN_zoNj2ebz4IVbXmCd_01AEW-tBVHvDnXtAugz1o-nGE1miqkh3SafuPAGIal7oU5kNkWgvuB338ud-SvCd0-qcBsh6peifmm5yPa_gayt1cZD3QQ/s1024/_891efc04-0b8f-44dc-a5ca-88bb56d60f8e.jpg',
        category: 'Dairy',
        description: 'Pure, fresh cow milk directly from the farm. Unprocessed and delivered straight to your door for a truly fresh dairy experience.',
        stock: 80,
        rating: 4.6
    },
    {
        id: 7,
        name: 'Free-range Chicken Eggs',
        price: 3,
        image: 'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhJ8o-HBSHC4cjGvZWP4dWEfm5dkjTzjtUV7F3uy5j9xwGqOEPBHp5X35Ch7NClAw6EMThbuP5qepYh9lTliuKd5QEqKZhz6Y1tC4iTMHR5R6qXWGiNfPiCeF3JX62tYw95PfwTkkDvdXJFqf13Viesg_PilreG9Zsy2i-0wYPkc-bBaY5pJ0ZrAeSq2V4/s1024/_00f72a60-c9c1-4427-84f8-e3f6e1e3f6e1.jpg',
        category: 'Dairy',
        description: 'These free-range chicken eggs are rich in nutrients, with deep yellow yolks. Enjoy a fresher, tastier egg for your breakfast, baking, or recipes.',
        stock: 50,
        rating: 4.6
    },
    {
        id: 8,
        name: 'Organic Tomatoes',
        price: 2.5,
        image: 'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjc6fWwK7k4HBpAq9DVaX0BJ_QtSpshjbua78dcaimlpS0pT2C6Mmd5RwoKao-HY_JW0iZj28X0LVUdBFjqEhM2XieXoYY8pdEOqu3X0VcXT-xlfEPmuxIoyA7Lb4WRGA0Z30r-xF8dz3kAm1LKIQNrkZPbM5qKh3XlmZCt7i8hhVF07ZQsfYkXhgyxvcI/s1024/_b19bf05c-436e-4c1a-95c5-9f9f8643f7fb.jpg',
        category: 'Vegetables',
        description: 'Fresh, organic tomatoes grown without pesticides, ensuring high quality and rich flavor. Perfect for salads, sauces, and daily cooking.',
        stock: 100,
        rating: 4.8
    },
    {
        id: 9,
        name: 'Organic Brown Rice',
        price: 1.8,
        image: 'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEiD9yi_Q3ftEXL1Tx6P8gEaNudG0TAEHHaPrTzRYc7mKFhupyVbaW4XifQzHUzjrx8pcn25UYFB66NXRK2-AzIAIMKLIJcssMun5GmHcTgQjmY34oQFgj4y9vbxacrGfBMHFlh_WRe9cZ5zw23uQ0smQvmCxbF9cdAND06slvyklVaS_onlFujfnFYy8hI/s1024/_cadb0ab3-d26d-4d3c-9a1d-02616cf10076.jpg',
        category: 'Grains & Cereal',
        description: 'High-quality organic brown rice, rich in fiber and nutrients. Perfect for those who are looking for a healthy staple in their diet.',
        stock: 200,
        rating: 4.7
    },
    {
        id: 10,
        name: 'Farm-raised Chicken',
        price: 5.5,
        image: 'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgGGneWOWsx27HCZrLW1eauoGhVAHJBj9godVHdUUDafvbXYA83BVq0z0BEtF5ldn68RwxSi6G0q8jjPyUwn1tSTUPGH9KrHD5O0AJD25i9s_DQFXP0xP7tO4ts2PJnRJSGcp_gMfWdmEUi_uYhIc4wk9sQVEkx1S9e2lp7-NxFTK6mfl4KIUMbG3tRj6s/s1024/_c6d95748-f395-4610-b90e-8889aeb9103e.jpg',
        category: 'Dairy',
        description: 'Tender and flavorful farm-raised chicken. Grown in a free-range environment, ensuring the highest quality of meat for your meals.',
        stock: 80,
        rating: 4.9
    },
];
