const destinations = [
   {
      name: "Paris, France",
      slug: "paris-france",
      image: "https://images.unsplash.com/photo-1502602898657-3e91760cbb34",
      description: "The city of lights and love. Explore iconic landmarks like the Eiffel Tower, the Louvre, and Notre-Dame.",
      places: ["Eiffel Tower", "Louvre Museum", "Notre-Dame Cathedral"],
      days: 5,
      nights: 4,
      hotels :['Hotel A', 'Hotel B','Hotel C'],
      price : 1500
   },
   {
      name: "Bali, Indonesia",
      slug: "bali-findonesia",
      image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e",
      description: "Tropical paradise with lush rice fields, beaches, temples, and a rich culture. A great place for relaxation and adventure.",
      places: ["Ubud Monkey Forest", "Tegallalang Rice Terrace", "Tanah Lot Temple"],
      days: 6,
      nights: 5,
      hotels :['Hotel A', 'Hotel B','Hotel C'],
      price : 1500
   },
   {
      name: "Tokyo, Japan",
      slug: "tokyo-japan",
      image: "https://media.istockphoto.com/id/505797368/photo/shibuya-shopping-district-tokyo-japan.webp?a=1&b=1&s=612x612&w=0&k=20&c=TcxRZ-MZovuax_OV_zSXZbv2ZlfBFBy7MWKn3cRBoXk=",
      description: "A blend of tradition and future. Visit historic shrines, towering skyscrapers, and indulge in sushi at iconic spots.",
      places: ["Senso-ji Temple", "Shibuya Crossing", "Tokyo Skytree"],
      days: 7,
      nights: 6,
      hotels :['Hotel A', 'Hotel B','Hotel C'],
      price : 1500
   },
   {
      name: "Sydney, Australia",
      slug: "sydney-australia",
      image: "https://media.istockphoto.com/id/535455441/photo/view-of-sydney-harbour-australia.webp?a=1&b=1&s=612x612&w=0&k=20&c=ppqJgsi9-pLlVIq9UGFO0meliF-YYd4gE9ilRwxhx6I=",
      description: "Famous for its stunning harbor, iconic Opera House, and relaxed beach lifestyle.",
      places: ["Sydney Opera House", "Bondi Beach", "Sydney Harbour Bridge"],
      days: 5,
      nights: 4,
      hotels :['Hotel A', 'Hotel B','Hotel C'],
      price : 1500
   },
   {
      name: "Rome, Italy",
      slug: "rome-italy",
      image: "https://plus.unsplash.com/premium_photo-1675972401096-e8d67c81a074?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8Um9tZSUyQyUyMEl0YWx5fGVufDB8fDB8fHww",
      description: "Walk through centuries of history in the Eternal City, with its ancient ruins and vibrant piazzas.",
      places: ["Colosseum", "Roman Forum", "St. Peter's Basilica"],
      days: 4,
      nights: 3,
      hotels :['Hotel A', 'Hotel B','Hotel C'],
      price : 1500
   },
   {
      name: "New York, USA",
      slug: "newyork-USA",
      image: "https://media.istockphoto.com/id/525232662/photo/new-york-empire-state-building-and-statue-of-liberty.webp?a=1&b=1&s=612x612&w=0&k=20&c=TKIO6WmJV5IPagdotl0Eo2hli29n3X4XpuZt5Uq6pA4=",
      description: "A bustling metropolis filled with iconic landmarks, Broadway shows, and diverse cultures.",
      places: ["Statue of Liberty", "Central Park", "Times Square"],
      days: 6,
      nights: 5,
      hotels :['Hotel A', 'Hotel B','Hotel C'],
      price : 1500
   },
   {
      name: "Santorini, Greece",
      slug: "santorini-greece",
      image: "https://media.istockphoto.com/id/1397763152/photo/oia-town-on-santorini-island-greece-traditional-and-famous-houses-and-churches-with-blue.webp?a=1&b=1&s=612x612&w=0&k=20&c=-b349K4hdlHHndhTujiqHpUd6cwZery08ZgsxAL71c4=",
      description: "Known for its whitewashed buildings and stunning sunsets over the Aegean Sea.",
      places: ["Oia Village", "Fira Town", "Red Beach"],
      days: 5,
      nights: 4,
      hotels :['Hotel A', 'Hotel B','Hotel C'],
      price : 1500
   },
   {
      name: "Dubai, UAE",
      slug: "dubai-UAE",
      image: "https://media.istockphoto.com/id/1309800132/photo/dubai-skyline-view-from-the-marasi-marina-in-city-business-bay-downtown-area-in-the-uae.webp?a=1&b=1&s=612x612&w=0&k=20&c=6xcGSchbXLdNZGsMw2i08oilYNZ2s-vU3Qs0U-faQZY=",
      description: "A luxurious city known for its modern architecture, shopping, and desert adventures.",
      places: ["Burj Khalifa", "The Dubai Mall", "Desert Safari"],
      days: 4,
      nights: 3, 
      hotels :['Hotel A', 'Hotel B','Hotel C'],
      price : 1500
   },
   {
      name: "Machu Picchu, Peru",
      slug: "machupicchu-peru",
      image: "https://media.istockphoto.com/id/542826216/photo/llamas-at-first-light-at-machu-picchu-peru.webp?a=1&b=1&s=612x612&w=0&k=20&c=-AJg3LvDFPvAfqc70ipAGipWv_mwvs3wG2phEgyMwLk=",
      description: "A UNESCO World Heritage Site, home to the ancient Inca civilization, nestled in the Andes mountains.",
      places: ["Machu Picchu", "Sacred Valley", "Inca Trail"],
      days: 6,
      nights: 5,
      hotels :['Hotel A', 'Hotel B','Hotel C'],
      price : 1500
   },
   {
      name: "Cape Town, South Africa",
      slug: "capetown-southafrica",
      image: "https://images.unsplash.com/photo-1591742708307-ce49d19450d4?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fENhcGUlMjBUb3duJTJDJTIwU291dGglMjBBZnJpY2F8ZW58MHx8MHx8fDA%3D",
      description: "A beautiful coastal city known for its beaches, vineyards, and majestic Table Mountain.",
      places: ["Table Mountain", "Robben Island", "Cape of Good Hope"],
      days: 5,
      nights: 4,
      hotels :['Hotel A', 'Hotel B','Hotel C'],
      price : 1500
   },
   {
      name: "Venice, Italy",
      slug: "venice-italy",
      image: "https://media.istockphoto.com/id/1320288002/photo/canals-in-venice.webp?a=1&b=1&s=612x612&w=0&k=20&c=B2yli8LDZoHShKgvxdkRiu-6TRo3wm-2ke-dcUauOqE=",
      description: "A romantic city of canals and historic architecture, offering a unique European experience.",
      places: ["St. Mark's Basilica", "Rialto Bridge", "Grand Canal"],
      days: 4,
      nights: 3,
      hotels :['Hotel A', 'Hotel B','Hotel C'],
      price : 1500
   },
   {
      name: "Kruger National Park, South Africa",
      slug: "krugernationalpark-southafrica",
      image: "https://plus.unsplash.com/premium_photo-1661952488645-b782882964d6?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8S3J1Z2VyJTIwTmF0aW9uYWwlMjBQYXJrJTJDJTIwU291dGglMjBBZnJpY2F8ZW58MHx8MHx8fDA%3D",
      description: "A premier wildlife destination offering safaris and the opportunity to see the 'Big Five' in their natural habitat.",
      places: ["Kruger National Park", "Blyde River Canyon", "Panorama Route"],
      days: 5,
      nights: 4,
      hotels :['Hotel A', 'Hotel B','Hotel C'],
      price : 1500
   },
   {
      name: "Kyoto, Japan",
      slug: "kyoto-japan",
      image: "https://media.istockphoto.com/id/640250034/photo/geishas-holding-red-umbrellas-during-rainy-season.webp?a=1&b=1&s=612x612&w=0&k=20&c=17ey9RrFlLiCaiMPVguPCyF0wi8QVdh_7JquMI_gu14=",
      description: "Known for its beautiful temples, shrines, and traditional tea houses.",
      places: ["Kinkaku-ji Temple", "Fushimi Inari Shrine", "Arashiyama Bamboo Grove"],
      days: 5,
      nights: 4,
      hotels :['Hotel A', 'Hotel B','Hotel C'],
      price : 1500
   },
   {
      name: "Amsterdam, Netherlands",
      slug: "amsterdam-netherlands",
      image: "https://media.istockphoto.com/id/1223433962/photo/amsterdam-canals-and-typical-canal-houses-at-dusk.webp?a=1&b=1&s=612x612&w=0&k=20&c=AD5rfpxaNaRW5amNw0b_0_9VIrTICwyeDjJ8W7xu5zE=",
      description: "A charming city filled with picturesque canals, museums, and historical sites.",
      places: ["Rijksmuseum", "Anne Frank House", "Van Gogh Museum"],
      days: 4,
      nights: 3,
      hotels :['Hotel A', 'Hotel B','Hotel C'],
      price : 1500
   },
   {
      name: "Jaipur, India",
      slug: "jaipur-india",
      image: "https://media.istockphoto.com/id/482557081/photo/hawa-mahal-jaipur-india.webp?a=1&b=1&s=612x612&w=0&k=20&c=DvT0nj1f53epEEMwsEM3jTzZH96jG8iM-TvYTDp7wEc=",
      description: "The capital city of Rajasthan, famous for its grand palaces, forts, and vibrant culture.",
      places: ["Amber Fort", "Hawa Mahal", "City Palace"],
      days: 4,
      nights: 3,
      hotels :['Hotel A', 'Hotel B','Hotel C'],
      price : 1500
   }  
]
export default destinations;