const { MongoClient } = require("mongodb");
// Connection URL
const url =
  "mongodb+srv://partswebsite124:partswebsite@cluster0.b6dr2.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";
const dbName = "Parts_Website";

async function insertData() {
  const client = new MongoClient(url);

  try {
    // Connect to the MongoDB server
    await client.connect();

    // Access the database
    const db = client.db(dbName);

    // Get the collection
    const collection = db.collection("vehicleparts");

    // Insert multiple documents
  const vehicles = 
  [
    { parts: "Engine Block" },
    { parts: "Cylinder Head" },
    { parts: "Pistons" },
    { parts: "Crankshaft" },
    { parts: "Camshaft" },
    { parts: "Timing Chain/Belt" },
    { parts: "Valve Lifters" },
    { parts: "Oil Pump" },
    { parts: "Alternator" },
    { parts: "Water Pump" },
    { parts: "Timing Gear" },
    { parts: "Gearbox" },
    { parts: "Clutch" },
    { parts: "Flywheel" },
    { parts: "Differential" },
    { parts: "Axles" },
    { parts: "CV Joints" },
    { parts: "U-Joints" },
    { parts: "Driveshaft" },
    { parts: "Torque Converter" },
    { parts: "Battery" },
    { parts: "Alternator" },
    { parts: "Starter Motor" },
    { parts: "Spark Plugs" },
    { parts: "Fuses" },
    { parts: "Wiring Harness" },
    { parts: "Ignition Coil" },
    { parts: "ECU (Engine Control Unit)" },
    { parts: "Sensors" },
    { parts: "Oxygen Sensor" },
    { parts: "Crankshaft Position Sensor" },
    { parts: "Fuel Tank" },
    { parts: "Fuel Pump" },
    { parts: "Fuel Injectors" },
    { parts: "Fuel Filter" },
    { parts: "Fuel Pressure Regulator" },
    { parts: "Radiator" },
    { parts: "Thermostat" },
    { parts: "Coolant Reservoir" },
    { parts: "Cooling Fan" },
    { parts: "Radiator Cap" },
    { parts: "Heater Core" },
    { parts: "Exhaust Manifold" },
    { parts: "Catalytic Converter" },
    { parts: "Muffler" },
    { parts: "Tailpipe" },
    { parts: "Oxygen Sensors" },
    { parts: "Brake Pads" },
    { parts: "Brake Rotors" },
    { parts: "Brake Calipers" },
    { parts: "Brake Lines" },
    { parts: "Master Cylinder" },
    { parts: "Brake Fluid Reservoir" },
    { parts: "Anti-lock Braking System (ABS) Sensors" },
    { parts: "Brake Booster" },
    { parts: "Shocks/Struts" },
    { parts: "Springs" },
    { parts: "Control Arms" },
    { parts: "Ball Joints" },
    { parts: "Steering Rack" },
    { parts: "Tie Rods" },
    { parts: "Power Steering Pump" },
    { parts: "Steering Wheel" },
    { parts: "Wheel Bearings" },
    { parts: "Bumpers" },
    { parts: "Fenders" },
    { parts: "Doors" },
    { parts: "Hood" },
    { parts: "Trunk" },
    { parts: "Windshield" },
    { parts: "Side Mirrors" },
    { parts: "Windows" },
    { parts: "Tailgate" },
    { parts: "Headlights" },
    { parts: "Taillights" },
    { parts: "Turn Signal Lights" },
    { parts: "Seats" },
    { parts: "Seat Belts" },
    { parts: "Seat Cover" }, 
    { parts: "Dashboard" },
    { parts: "Instrument Cluster" },
    { parts: "Steering Wheel" },
    { parts: "Air Conditioning Components" },
    { parts: "Heater Controls" },
    { parts: "Interior Lights" },
    { parts: "Carpets" },
    { parts: "Upholstery" },
    { parts: "Tires" },
    { parts: "Rims" },
    { parts: "Hubcaps" },
    { parts: "Valve Stems" },
    { parts: "Tire Pressure Monitoring System (TPMS)" },
    { parts: "Wiper Blades" },
    { parts: "Battery Terminals" },
    { parts: "Fuse Box" },
    { parts: "Radiator Hoses" },
    { parts: "Timing Belt Tensioner" },
    { parts: "Windshield Washer Pump" },
    { parts: "Air Filters" },
    { parts: "Horn" },

  ]
  

    const result = await collection.insertMany(vehicles);

    console.log(`${result.insertedCount} documents were inserted.`);
    } catch (err) {
    console.error(err);
  } finally {
    // Close the connection
    await client.close();
  }
}

insertData();
