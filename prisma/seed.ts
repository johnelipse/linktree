import slugify from "slugify";
import { db } from "./db";

async function main() {
  // Use a transaction for the entire seeding process
  await db.$transaction(
    async (tx) => {
      // Clear existing data
      await tx.product.deleteMany({});
      await tx.category.deleteMany({});

      const categories = [
        {
          title: "Gas Products",
          slug: slugify("Gas Products"),
          description:
            "LPG cylinders, regulators, and gas accessories for home and industrial use.",
        },
        {
          title: "Lubricants",
          slug: slugify("Lubricants"),
          description:
            "Engine oils and lubricants for cars, motorcycles, and industrial machinery.",
        },
        {
          title: "Excellium Energy",
          slug: slugify("Excellium Energy"),
          description:
            "Advanced fuel products for cleaner engine performance and fuel economy.",
        },
        {
          title: "Car Care Products",
          slug: slugify("Car Care Products"),
          description:
            "Exterior and interior maintenance products for all vehicle types.",
        },
        {
          title: "Batteries",
          slug: slugify("Batteries"),
          description: "Reliable automotive and motorcycle batteries.",
        },
        {
          title: "Accessories",
          slug: slugify("Accessories"),
          description: "Hoses, clips, safety valves, gas stoves and more.",
        },
      ];

      for (const category of categories) {
        await tx.category.create({
          data: category,
        });
        console.log(`Created categories`);
      }

      const allCategories = await tx.category.findMany();

      // Check for duplicate slugs in the products array
      const slugMap = new Map();

      const products = [
        {
          title: "12kg Total Gas Cylinder",
          slug: slugify("12kg Total Gas Cylinder"),
          description: "A refillable LPG cylinder ideal for household cooking.",
          price: 120000,
          imageUrl:
            "https://images.unsplash.com/photo-1585238341986-08d38bfa1a94", // LPG cylinder
          manualPdfUrl: "/manuals/12kg-installation.pdf",
          videoUrl: "https://www.youtube.com/watch?v=gas_tutorial1",
          categoryId: allCategories[0].id,
        },
        {
          title: "Total Gas Regulator",
          slug: slugify("Total Gas Regulator"),
          description:
            "High-quality regulator compatible with Total Gas cylinders.",
          price: 25000,
          imageUrl:
            "https://images.unsplash.com/photo-1610623842460-27e2e2d87e67", // Gas valve/regulator
          categoryId: allCategories[0].id,
        },
        {
          title: "Quartz 9000 Energy 5W-40",
          slug: slugify("Quartz 9000 Energy 5W-40"),
          description:
            "Synthetic engine oil for high-performance gasoline engines.",
          price: 95000,
          imageUrl:
            "https://images.unsplash.com/photo-1613459625606-8c0be2c38a71", // Engine oil
          categoryId: allCategories[1].id,
        },
        {
          title: "Hi-Perf 4T Sport 10W-40",
          slug: slugify("Hi-Perf 4T Sport 10W-40"),
          description:
            "Motorcycle engine oil for gear shifting and engine protection.",
          price: 32000,
          imageUrl:
            "https://images.unsplash.com/photo-1617611483547-49fa3dc58c38", // Motorcycle oil
          categoryId: allCategories[1].id,
        },
        {
          title: "Excellium Petrol",
          slug: slugify("Excellium Petrol"),
          description: "Premium petrol for engine protection and fuel economy.",
          price: 5300,
          imageUrl:
            "https://images.unsplash.com/photo-1570129477492-45c003edd2be", // Petrol pump
          categoryId: allCategories[2].id,
        },
        {
          title: "Excellium Diesel",
          slug: slugify("Excellium Diesel"),
          description:
            "Improves combustion, reduces engine wear, lowers emissions.",
          price: 5200,
          imageUrl: "https://images.unsplash.com/photo-1556740749-887f6717d7e4", // Diesel fuel
          categoryId: allCategories[2].id,
        },
        {
          title: "Total Car Wash Shampoo",
          slug: slugify("Total Car Wash Shampoo"),
          description: "Foaming car shampoo for exterior cleaning.",
          price: 18000,
          imageUrl:
            "https://images.unsplash.com/photo-1615412704914-e6c5aa474f2f", // Car wash
          categoryId: allCategories[3].id,
        },
        {
          title: "Interior Cleaner Spray",
          slug: slugify("Interior Cleaner Spray"),
          description: "Multipurpose spray for dashboard and seat cleaning.",
          price: 15000,
          imageUrl:
            "https://images.unsplash.com/photo-1600369671521-6b3a9d3edc5b", // Car interior cleaning
          categoryId: allCategories[3].id,
        },
        {
          title: "Total Car Battery 55Ah",
          slug: slugify("Total Car Battery 55Ah"),
          description:
            "High-performance maintenance-free battery for passenger cars.",
          price: 250000,
          imageUrl:
            "https://images.unsplash.com/photo-1642175297350-c9d09cbcc4c6", // Car battery
          categoryId: allCategories[3].id,
        },
        {
          title: "Double Burner Gas Stove",
          slug: slugify("Double Burner Gas Stove"),
          description: "Compact and durable gas stove for home kitchens.",
          price: 85000,
          imageUrl:
            "https://images.unsplash.com/photo-1633422114098-b41de13f0b76", // Gas stove
          categoryId: allCategories[4].id,
        },
        {
          title: "LPG Hose Pipe (1.5m)",
          slug: slugify("LPG Hose Pipe (1.5m)"),
          description: "Flexible rubber gas hose with brass clips.",
          price: 12000,
          imageUrl:
            "https://images.unsplash.com/photo-1633011947827-4bfe2f9e31d3", // Gas pipe/hose
          categoryId: allCategories[4].id,
        },
        {
          title: "Total Gas 6kg Cylinder",
          slug: slugify("Total Gas 6kg Cylinder"),
          description:
            "Compact cooking gas cylinder ideal for small households.",
          imageUrl: "https://source.unsplash.com/featured/?gas-cylinder",
          price: 65000,
          categoryId: allCategories[0].id,
        },
        {
          title: "Total Gas 12.5kg Cylinder",
          slug: slugify("Total Gas 12.5kg Cylinder"),
          description: "Standard-size LPG cylinder for regular domestic use.",
          imageUrl: "https://source.unsplash.com/featured/?lpg",
          price: 120000,
          categoryId: allCategories[0].id,
        },
        {
          title: "Total Gas 45kg Cylinder",
          slug: slugify("Total Gas 45kg Cylinder"),
          description:
            "Large-capacity gas cylinder for commercial or high-usage homes.",
          imageUrl: "https://source.unsplash.com/featured/?propane",
          price: 350000,
          categoryId: allCategories[0].id,
        },
        {
          title: "Total Quartz 9000 5W-40 (4L)",
          slug: slugify("Total Quartz 9000 5W-40 (4L)"),
          description:
            "Synthetic engine oil designed for optimal engine performance.",
          imageUrl: "https://source.unsplash.com/featured/?engine-oil",
          price: 95000,
          categoryId: allCategories[1].id,
        },
        {
          title: "Total Quartz 5000 20W-50 (4L)",
          slug: slugify("Total Quartz 5000 20W-50 (4L)"),
          description: "High-performance mineral oil for petrol engines.",
          imageUrl: "https://source.unsplash.com/featured/?motor-oil",
          price: 62000,
          categoryId: allCategories[1].id,
        },
        {
          title: "Total Excellium Diesel",
          slug: slugify("Total Excellium Diesel"),
          description: "Premium diesel fuel with engine-cleaning additives.",
          imageUrl: "https://source.unsplash.com/featured/?diesel-fuel",
          price: 5700,
          categoryId: allCategories[2].id,
        },
        {
          title: "Total Excellium Petrol",
          slug: slugify("Total Excellium Petrol"),
          description:
            "High-octane petrol with advanced engine-cleaning technology.",
          imageUrl: "https://source.unsplash.com/featured/?petrol",
          price: 5800,
          categoryId: allCategories[2].id,
        },
        {
          title: "Total Transmission Gear 8 75W-80 (1L)",
          slug: slugify("Total Transmission Gear 8 75W-80 (1L)"),
          description: "Premium transmission oil for manual gearboxes.",
          imageUrl: "https://source.unsplash.com/featured/?gear-oil",
          price: 29000,
          categoryId: allCategories[1].id,
        },
        {
          title: "Total ATF D3 (1L)",
          slug: slugify("Total ATF D3 (1L)"),
          description:
            "Automatic transmission fluid designed for smooth shifting.",
          imageUrl: "https://source.unsplash.com/featured/?transmission-fluid",
          price: 25000,
          categoryId: allCategories[1].id,
        },
        {
          title: "Total Brake Fluid DOT 4 (500ml)",
          slug: slugify("Total Brake Fluid DOT 4 (500ml)"),
          description:
            "High-performance brake fluid ensuring safety and reliability.",
          imageUrl: "https://source.unsplash.com/featured/?brake-fluid",
          price: 15000,
          categoryId: allCategories[3].id,
        },
        {
          title: "Total Coolant Glacelf Auto Supra (1L)",
          slug: slugify("Total Coolant Glacelf Auto Supra (1L)"),
          description: "Long-life coolant for superior engine protection.",
          imageUrl: "https://source.unsplash.com/featured/?car-coolant",
          price: 18000,
          categoryId: allCategories[3].id,
        },
        {
          title: "Total Gas Regulator",
          slug: slugify("Total Gas Regulator"),
          description: "Safe and reliable regulator for LPG cylinders.",
          imageUrl: "https://source.unsplash.com/featured/?gas-regulator",
          price: 25000,
          categoryId: allCategories[5].id,
        },
        {
          title: "Total Gas Hose Pipe (1.5m)",
          slug: slugify("Total Gas Hose Pipe (1.5m)"),
          description: "High-quality LPG hose for secure connections.",
          imageUrl: "https://source.unsplash.com/featured/?gas-hose",
          price: 12000,
          categoryId: allCategories[5].id,
        },
        {
          title: "Total Motorcycle Oil Hi-Perf 4T",
          slug: slugify("Total Motorcycle Oil Hi-Perf 4T"),
          description: "Engine oil formulated for high-performance motorbikes.",
          imageUrl: "https://source.unsplash.com/featured/?motorbike-oil",
          price: 18000,
          categoryId: allCategories[5].id,
        },
        {
          title: "Total Chain Lube Spray",
          slug: slugify("Total Chain Lube Spray"),
          description: "Lubricates and protects motorcycle and bicycle chains.",
          imageUrl: "https://source.unsplash.com/featured/?chain-lube",
          price: 10000,
          categoryId: allCategories[5].id,
        },
        {
          title: "Total Tyre Inflator (500ml)",
          slug: slugify("Total Tyre Inflator (500ml)"),
          description: "Instant tyre inflator for emergency roadside fixes.",
          imageUrl: "https://source.unsplash.com/featured/?tyre-inflator",
          price: 22000,
          categoryId: allCategories[3].id,
        },
        {
          title: "Total Glass Cleaner Spray",
          slug: slugify("Total Glass Cleaner Spray"),
          description: "Streak-free formula for crystal-clear visibility.",
          imageUrl: "https://source.unsplash.com/featured/?glass-cleaner",
          price: 8000,
          categoryId: allCategories[3].id,
        },
        {
          title: "Total Car Shampoo (1L)",
          slug: slugify("Total Car Shampoo (1L)"),
          description: "Gentle but powerful cleaning for all car surfaces.",
          imageUrl: "https://source.unsplash.com/featured/?car-wash",
          price: 15000,
          categoryId: allCategories[3].id,
        },
        {
          title: "Total Grease Multi-Purpose",
          slug: slugify("Total Grease Multi-Purpose"),
          description: "Heavy-duty grease for automotive and industrial use.",
          imageUrl: "https://source.unsplash.com/featured/?grease",
          price: 20000,
          categoryId: allCategories[1].id,
        },
        {
          title: "Total Gas Cooker (Table Top)",
          slug: slugify("Total Gas Cooker (Table Top)"),
          description: "Two-burner gas cooker ideal for home kitchens.",
          imageUrl: "https://source.unsplash.com/featured/?gas-cooker",
          price: 130000,
          categoryId: allCategories[5].id,
        },
      ];

      // Ensure unique slugs
      const uniqueProducts = products.map((product) => {
        let slug = product.slug;
        let counter = 1;

        // If we find a duplicate slug, append a counter
        while (slugMap.has(slug)) {
          slug = `${product.slug}-${counter}`;
          counter++;
        }

        slugMap.set(slug, true);
        return { ...product, slug };
      });

      console.log("creating products...");
      for (const product of uniqueProducts) {
        await tx.product.create({
          data: product,
        });
      }
      console.log("products created..");
    },
    {
      // Optional: Set a longer timeout for the transaction if needed
      timeout: 30000, // 30 seconds
    }
  );
}

main()
  .then(() => {
    console.log("Seeding complete");
    return db.$disconnect();
  })
  .catch((e) => {
    console.error("Error seeding data", e);
    return db.$disconnect();
  });
