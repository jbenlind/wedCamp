'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Venues', [
      {
        name: "Chapters on the Horizon",
        description: "Quaint and countrified, Chapters on the Horizon boasts an idyllic charm, perfect for a WEEKEND gathering of family and friends to celebrate your nuptials. Conveniently host all festivities on site -rehearsal dinner, ceremony and reception. In the fall, the forest showcases vibrant, intense foliage, and you can wander the small apple orchard. Exchange vows on the lush green lawn under a simple arbor, before sneaking off to the pond for a quick ride in the blue rowboat (hello, photo op!) while your guests enjoy a cocktail or two on the deck, which is equipped with gas fire pits to keep things cozy during cooler nights. You can top off your evening with dinner and dancing while the sun drops down over the dramatic valley views, either outdoors under the stars, or in the charming banquet hall.",
        gpsLocation: "43.512155776323056, -90.65116008465739",
        city: "Viola",
        state: "Wisconsin",
        zipCode: 54664,
        maxNumberGuests: 400,
        averagePrice: 5755,
        imgUrl: "https://cdn.wedding-spot.com/__sized__/images/venues/16725/Chapters-on-the-Horizon-Viola-WI-69e66fb5-0599-4b0a-b0ed-5203553594e9.1608222566-97450e389c42885476f1fbe9bc5bca5a.jpeg",
        host:"Chapters on the Horizon",
        reservedDates: null,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: "The Loft and Chapel at Cedar Ridge",
        description: "Choose The Loft and Chapel at Cedar Ridge for your beautiful wedding celebration. The Loft and Chapel provide beautifully landscaped outdoor grounds for your ceremony. The breathtaking outdoor gazebo, a mid acres of perfectly manicured grounds, is the perfect location to tie the knot. The structure is simple, white and surrounded by greenery. It also creates the perfect backdrop for capturing once-in-a-lifetime photos. But don't worry if you decide to get married in the winter. The Loft and Chapel offers a wonderful hall for all of your guest to enjoy your ceremony and reception on your special day, while staying warm and toasty indoors. The Loft features exposed brick walls, neutral tones and wood trim accents. The open layout allows you to configure the exact layout you need to accommodate your guests for a flawless gathering. Celebrate the most romantic day of your life at The Loft and Chapel at Cedar Ridge.",
        gpsLocation: "43.04052, -88.22286",
        city: "Waukesha",
        state: "Wisconsin",
        zipCode: 53188,
        maxNumberGuests: 300,
        averagePrice: 1472,
        imgUrl: "https://cdn.wedding-spot.com/__sized__/images/venues/7687/The-Loft-and-Chapel-at-Cedar-Ridge-Waukesha-WI-6fe90302-1962-4db2-b4ec-54a5c80f31c4-97450e389c42885476f1fbe9bc5bca5a.jpeg",
        host: "Cedar Ridge",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: "The Ridge Hotel",
        description: "Whether you desire a grand, luxurious wedding or you prefer a smaller, more intimate affair, the Ridge Hotel in Lake Geneva, Wisconsin has it all and more. The recently renovated contemporary hotel boasts 10,000 square feet of versatile event space and multiple indoor venues, as well as a stunning outdoor area. Hold your ceremony at the hotel’s Outdoor Wedding Pavilion, where the gorgeous wooden pergola, impeccably manicured lawn, and surrounding lush foliage will form a breathtaking backdrop while you exchange your vows. For your reception, choose between the Aspen Ballroom, an elegant space with high ceilings and lovely French doors opening up to the Veranda; and the Fireside Room, a more intimate space with a grand stone fireplace and beautiful lake views. Whatever you decide, your reception in this stylish setting is sure to be a spectacular event. With exquisite cuisine, a skilled staff of wedding coordinators, stunning facilities, and a great location, the Ridge Hotel is the perfect place to host your upcoming wedding celebration.",
        gpsLocation: "42.58478, -88.50925",
        city: "Lake Geneva",
        state: "Wisconsin",
        zipCode: 53147,
        maxNumberGuests: 300,
        averagePrice: 5420,
        imgUrl: "https://cdn.wedding-spot.com/__sized__/images/venues/10490/The-Ridge-Hotel-Lake-Geneva-WI-f73cf488-b267-4c42-85fd-2cd4bb189933-97450e389c42885476f1fbe9bc5bca5a.jpg",
        host: "The Ridge Hotel",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: "Windwood of Watertown",
        description: "Windwood of Watertown is known for their seamless and stress-free weddings, above many other attributes! This can only be supported by their friendliness and professionalism to help guide every step of the planning process and ensure details are attended to. Choose from either indoor or outdoor ceremony options, both including decorative details such as a wedding arbor and fireplace, to set the ambiance for the entire evening. From there take your guests to The Grand Banquet Hall, that seats up to 300 guests and provides the best view of the golf course’s lush greenery. For a more intimate reception, choose The Courtyard room, seating up to 125 guests and provides the most convenient access to the charming patio and outdoor fire pit. Either way, we’re sure you will quickly see why Windwood of Watertown is the ideal wedding destination in southern Wisconsin!",
        gpsLocation: "43.19969, -88.67654",
        city: "Watertown",
        state: "Wisconsin",
        zipCode: 53098,
        maxNumberGuests: 300,
        averagePrice: 2412,
        imgUrl: "https://cdn.wedding-spot.com/__sized__/images/venues/10205/Windwood-of-Watertown-Watertown-WI-d5eb328a-3bd7-477f-9f52-6e3b36a81485-97450e389c42885476f1fbe9bc5bca5a.jpg",
        host: "Windwood",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: "Kilkarney Hills Golf Course",
        description: "Serving the Western Wisconsin area since 1994, Kilkarney Hills Golf Club provides the romantic atmosphere your wedding deserves. Boasting a beautifully furnished 7,300 square foot banquet facility with the capacity for up to 350, you can host a small, intimate gathering or a grand celebration for hundreds of guests -- it is all available to you. Imagine your wedding ceremony with a backdrop of lush golf course greenery with dozens of beautiful maple trees and charming ponds. And then dance the night away with dramatic sunset views of the picturesque golf course and surrounding landscape. The on-site Executive Chef will work with you to create a customized menu to amaze everyone’s taste buds. With your own personal Event Coordinator, every detail will be thought out carefully and you can be sure that the perfect atmosphere will be set for you and your loved ones.",
        gpsLocation: "44.88971, -92.64355",
        city: "River Falls",
        state: "Wisconsin",
        zipCode: 54022,
        maxNumberGuests: 1000,
        averagePrice: 2140,
        imgUrl: "https://cdn.wedding-spot.com/__sized__/images/venues/10316/Kilkarney-Hills-Golf-Course-River-Falls-WI-ed42570d-e006-4297-b899-f67eabdc1de9.1550165219-97450e389c42885476f1fbe9bc5bca5a.jpg",
        host: "Kilkarney Hills Golf Course",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: "Chula Vista Resort",
        description: "Chula Vista Resort is a gorgeous venue to host your perfect wedding. This one of a kind location is great for both an intimate crowd or grand celebration. Surrounded by 100-foot Norway pine trees along the stunning Wisconsin River, your exchange of vows will be an unforgettable moment! Whether you want an outdoor or indoor wedding, Chula Vista Resort can accommodate it all. This property has 3 different outdoor ceremony spots, 3 indoor ceremony & reception spots, and one grand outdoor tent. This astonishing venue will exceed all expectations! There is no doubt that you will create lots of beautiful memories with all your friends and family here at Chula Vista Resort.",
        gpsLocation: "43.66400, -89.77890",
        city: "Wisconsin Dells",
        state: "Wisconsin",
        zipCode: 53965,
        maxNumberGuests: 450,
        averagePrice: 5248,
        imgUrl: "https://cdn.wedding-spot.com/__sized__/images/venues/11756/Chula-Vista-Resort-Wisconsin-Dells-WI-7bcc643a-653a-4f94-ad5e-9ef95b8e1a6c-97450e389c42885476f1fbe9bc5bca5a.jpg",
        host: "Chula Vista Resort",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: "Racine Zoo",
        description: "Are you looking for a wildly unique place to host your wedding or wedding reception? Look no further than the Racine Zoological Gardens! The Zoo offers multiple locations to make your special day truly one of a kind! With scenic views of Lake Michigan, beautiful flower gardens and a private giraffe encounter, the Racine Zoo is the perfect option for your special day! The Racine Zoo, located in Racine, Wisconsin, was established in March 1923 by Jacob Stoffel, Jr. That winter, the Racine Zoological Society was formed to work with the park board and to increase interest in the Zoo. The Zoo’s first animals were donated by Stoffel himself. After that, many organizations throughout Racine donated animals such as badgers, foxes, and mountain goats to add to the collection. In 1925, monkeys were added, the first species native to areas outside the United States. Currently, the Racine Zoo cares for approximately 100 different species of animals from Wisconsin and around the world. Gather your loved ones and celebrate your wedding day at this special location.",
        gpsLocation: "42.74893, -87.78453",
        city: "Racine",
        state: "Wisconsin",
        zipCode: 53402,
        maxNumberGuests: 100,
        averagePrice: 2928,
        imgUrl: "https://cdn.wedding-spot.com/__sized__/images/venues/14185/Racine-Zoo-Racine-WI-d76b65b5-ae54-436d-bde3-d4689b79134e-97450e389c42885476f1fbe9bc5bca5a.jpg",
        host: "Racine Zoo",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: "Justin Trails Resort",
        description: "Tucked away on an organic farm in the heart of the Wisconsin Driftless Region, the Justin Trails Resort offers a relaxed country setting for your wedding day. Located only minutes away from downtown Sparta, this venue perfectly combines a secluded rural feel with modern convenience to create the ideal backdrop for saying your “I do’s.” Nestled in a quiet valley on three acres of finely manicured lawns and carefully landscaped English-style gardens, this resort is brimming with romance! Exchange your vows in one of the venue’s many locations, including sprawling meadows, lush woodlands, and majestic rolling hills. Celebrate with your nearest and dearest in the elegant barn, which can be dressed up or down according to your preferences. Sky high vaulted ceilings supported by exposed wooden beams add an unrivaled element of drama to the space, and can be adorned with lanterns, blooming flowers, sparkling string lights, colorful streamers, or anything that your heart desires!",
        gpsLocation: "43.85247 -90.84150",
        city: "Sparta",
        state: "Wisconsin",
        zipCode: 54656,
        maxNumberGuests: 200,
        averagePrice: 9677,
        imgUrl: "https://cdn.wedding-spot.com/__sized__/images/venues/8421/Justin-Trails-Resort-Sparta-WI-d594c3a5-a0da-438e-8c4f-0fc63bf799d0-97450e389c42885476f1fbe9bc5bca5a.jpg",
        host: "Justin Trails Resort",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: "The Hollyhock House & Garden",
        description: "A love as unique as yours should be celebrated in a venue that is equally as unique. The Hollyhock House and Gardens is not your ordinary bed and breakfast. The Hollyhock House is a charming Queen Anne-style Victorian cottage, decorated inside and out to capture the beauty and elegance of a by-gone era, that specializes in providing a storybook setting for wedding events. Situated on nearly two acres of gardens and lawns, the Hollyhock grounds are ideal for holding your outdoor wedding celebration. If you're looking for a romantic setting for your wedding that offers breathtakingly beautiful backdrops for your wedding photos, and memories that will last a lifetime, you'll find that and more at The Hollyhock House and Gardens. Exchange vows in a romantic victorian or bohemian inspired ceremony. Then enjoy an alfresco reception, as you dine and dance beneath the open sky. Hollyhock grounds boasts a brick patio, a rose covered arbor, various fountains, and private walking paths surrounding the garden. The friendly owners and staff will provide assistance and advice when you want it, and work with you to ensure that your special day is everything you ever hoped for!",
        gpsLocation: "44.44943, -87.50489",
        city: "Kewaunee",
        state: "Wisconsin",
        zipCode: 54216,
        maxNumberGuests: 200,
        averagePrice: 3026,
        imgUrl: "https://cdn.wedding-spot.com/__sized__/images/venues/7737/The-Hollyhock-House---Garden-Kewaunee-WI-7fe35734-a7f5-40dd-a0f6-a62e32f4884b-97450e389c42885476f1fbe9bc5bca5a.jpg",
        host: "The Hollyhock House & Garden",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: "Camp Luwisomo",
        description: "Make it an affair to remember at Camp LuWiSoMo, a unique, all-inclusive wedding venue! Rustic and laidback, it is surrounded by stunning natural scenery that sets the perfectly whimsical backdrop for the lakefront wedding of your dreams! From the Meditation Hill - the second highest point in Waushara County - to the the Chapel of St. Barnabas which has all the rustic charm of a barn and can accommodate 300 guests, there is something perfect for the bride envisioning a countryside ceremony. Take the reception festivities into the Banquet Hall which offers breathtaking views of Round Lake, or the outdoor Picnic Shelter which also overlooks the lake. Dreamy and laidback, Camp LuWiSoMo is ready to help you create memories for life on your special day!",
        gpsLocation: "44.16307, -89.15492",
        city: "Wild Rose",
        state: "Wisconsin",
        zipCode: 54984,
        maxNumberGuests: 300,
        averagePrice: 2872,
        imgUrl: "https://cdn.wedding-spot.com/__sized__/images/venues/11237/Camp-Luwisomo-Wild-Rose-WI-0c819fe5-1282-461c-85b3-d3656e73d91f-97450e389c42885476f1fbe9bc5bca5a.jpg",
        host: "Camp Luwisomo",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: "Madison Museum of Contemporary Art",
        description: "Located in the heart of downtown Madison, MMoCA’s outdoor Sculpture Garden combines the rustic feel of an outdoor wedding with chic sophistication. Madison’s skyline serves as a one-of-a-kind backdrop for a one-of-a-kind day. Featuring bird’s eye views of the Capitol, colorful garden beds, and large-scale outdoor sculptures lit by the starry night sky, MMoCA is one of Madison’s architectural gems and the perfect spot for all types of celebrations of love, including wedding ceremonies, receptions, rehearsal dinners, engagement parties, and brunches.",
        gpsLocation: "43.07510, -89.38927",
        city: "Madison",
        state: "Wisconsin",
        zipCode: 53703,
        maxNumberGuests: 230,
        averagePrice: 6624,
        imgUrl: "https://cdn.wedding-spot.com/__sized__/images/venues/14314/Madison-Museum-of-Contemporary-Art-Madison-WI-3320f9ff-6b08-4090-b676-8d498eea0590-97450e389c42885476f1fbe9bc5bca5a.jpg",
        host: "Madison Museum of Contemporary Art",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: "Grand Lodge Waterpark Resort",
        description: "It’s always 84 degrees at Grand Lodge Waterpark Resort – the biggest indoor waterpark in Central Wisconsin! Speed and slip your way down one of the seven waterslides, laze the day away in the relaxing lazy river and splash around with your loved ones. This location is available for your exciting wedding day. Whether you've always dreamt about an intimate gathering or large celebration for your special day, at Grand Lodge Waterpark Resort in Rothschild, near Wausau, we can exceed your expectations and make your day nothing short of unforgettable. An on-site experienced wedding coordinator will work hard from beginning to end, ensuring that every moment and every detail is picture-perfect. From the choice of colors, to the first taste testing. It's your moment to be in love, they'll take care of the rest. Start the next chapter of your life together at Grand Lodge Waterpark Resort.",
        gpsLocation: "44.86349, -89.63460",
        city: "Rothschild",
        state: "Wisconsin",
        zipCode: 54474,
        maxNumberGuests: 250,
        averagePrice: 3009,
        imgUrl: "https://cdn.wedding-spot.com/__sized__/images/venues/9991/Grand-Lodge-Waterpark-Resort-Rothschild-WI-ca002bc2-15fa-4949-a450-bde82806f036-97450e389c42885476f1fbe9bc5bca5a.JPG",
        host: "Grand Lodge Waterpark Resort",
        createdAt: new Date(),
        updatedAt: new Date()
      },



    ], {});

  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Venues', null, {});
    // {
    //   name: "",
    //   description: "",
    //   gpsLocation: "",
    //   city: "",
    //   state: "Wisconsin",
    //   zipCode: ,
    //   maxNumberGuests: ,
    //   averagePrice: ,
    //   imgUrl: "",
    //   host: "",
    //   createdAt: new Date(),
    //   updatedAt: new Date()
    // },
  }
};
