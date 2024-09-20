const imageUrls: string[] = [
  "https://img.freepik.com/free-photo/business-man-using-his-mobile-phone_23-2148018588.jpg?t=st=1726759394~exp=1726762994~hmac=960625f1675cd79dd204dea8689e5443a80e4d6b3581fdf93ca3ec28cbbcd70c&w=360",
  "https://img.freepik.com/free-photo/young-successful-businessman_144627-14766.jpg?t=st=1726759487~exp=1726763087~hmac=bbdf997aab20d8faa418b0b8e6cd5f3d6c2a09e5b0c9553a666d290323f799c1&w=360",
  "https://img.freepik.com/premium-photo/man-with-beard-blue-jacket-is-posing-photo_1239757-9216.jpg?w=740",
  "https://img.freepik.com/free-photo/front-view-professional-business-woman-suit_23-2148603020.jpg?t=st=1726759653~exp=1726763253~hmac=0364539385bda13ed79efc5ff3f62b3b9ebb4fc70e852ad21f3a440d87fb3de6&w=360",
  "https://img.freepik.com/free-photo/smiling-brunette-girl-posing-with-coat_23-2148135969.jpg?t=st=1726759689~exp=1726763289~hmac=6380b4bdec875e4aa8a58a13e4e2f738b08e6707a4f90a629a12614e198a9f2a&w=360",
];

// Function to randomly return an image URL
export default function getRandomImageUrl(): string {
  const index: number = Math.floor(Math.random() * imageUrls.length);
  return imageUrls[index];
}
