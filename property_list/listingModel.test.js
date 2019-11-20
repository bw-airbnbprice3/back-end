const db = require("../data/dbConfig.js");

const Listing = require("./listingModel.js");

describe("listing model", () => {
  beforeEach(async () => {
    await db("listings").truncate();
  });

  describe("add", () => {
    it("should add the provided listing into the db", async () => {
      await Listing.add({
        id: 1,
        host_username: "testing username",
        property_name: "testing name",
        room_type: 1,
        address: "testing address2",
        neighborhood_group: 1,
        neighborhood: 2,
        availability_of_year: 200,
        property_price: 100,
        bedroom_number: 3,
        bathroom_number: 2,
        minimum_nights: 3,
        property_amenities: "gym, swimming pool"
      });
      await Listing.add({
        id: 2,
        host_username: "testing username2",
        property_name: "testing name2",
        room_type: 1,
        address: "testing address2",
        neighborhood_group: 1,
        neighborhood: 2,
        availability_of_year: 200,
        property_price: 100,
        bedroom_number: 3,
        bathroom_number: 2,
        minimum_nights: 3,
        property_amenities: "gym, swimming pool"
      });

      const listings = await db("listings");
      expect(listings).toHaveLength(2);
    });

    it("should addthe provided listing into the db", async () => {
      let listing = await Listing.add({
        id: 3,
        host_username: "testing username3",
        property_name: "test name",
        room_type: 1,
        address: "test address",
        neighborhood_group: 1,
        neighborhood: 2,
        availability_of_year: 200,
        property_price: 100,
        bedroom_number: 3,
        bathroom_number: 2,
        minimum_nights: 3,
        property_amenities: "gym, swimming pool"
      });
      console.log(listing);
      expect(listing.host_username).toBe("testing username3");
      expect(listing.property_name).toBe("test name");
      expect(listing.room_type).toBe(1);
      expect(listing.address).toBe("test address");
      expect(listing.neighborhood_group).toBe(1);
      expect(listing.neighborhood).toBe(2);
      expect(listing.availability_of_year).toBe(200);
    });
  });
});
