const disasters = [
  {
    id: 1,
    name: "Earthquake",
    description: "An earthquake is a sudden and violent shaking of the ground, often caused by movements along faults within the Earth's crust.",
    image: "/images/earthquake.jpg",
    detailedInfo: {
      about: "Earthquakes are natural phenomena that occur when tectonic plates beneath the Earth's surface shift and release energy, causing the ground to shake. These seismic events can range from minor tremors, which may go unnoticed, to major earthquakes that cause extensive destruction. The impact of an earthquake depends on its magnitude, depth, and location. In urban areas, where infrastructure may not be designed to withstand strong shaking, the consequences can be devastating. Buildings may collapse, roads may crack, and services such as electricity and water can be disrupted. The cascading effects of an earthquake can include fires, landslides, tsunamis, and aftershocks, all of which compound the damage and complicate rescue efforts.",
      previousCases: "Notable historical earthquakes include the 2001 Gujarat earthquake in India, which killed around 20,000 people and caused extensive damage. Another significant event was the 2015 Nepal earthquake, which not only devastated Nepal but also affected northern India, causing immense damage to infrastructure and resulting in a large number of casualties.",
      severity: "High - Earthquakes pose a high risk to life and property, particularly in densely populated areas. The severity is magnified in regions with inadequate building codes or poor infrastructure.",
      prevention: "Preventive measures include constructing buildings and infrastructure to be earthquake-resistant, implementing early warning systems, and conducting public education campaigns on safety protocols. Regular earthquake drills and community preparedness programs can significantly reduce the risk of injury and death during an earthquake.",
      emergencyResponse: "During an earthquake, take cover under a sturdy piece of furniture, stay indoors until the shaking stops, and move to an open area away from buildings, trees, and power lines once it is safe. It is also crucial to have an emergency kit ready and know the emergency contacts.",
      contactInfo: "For earthquake emergencies, contact the National Disaster Management Authority (NDMA) helpline at 1078 or local emergency services."
    }
  },
  {
    id: 2,
    name: "Flood",
    description: "Flooding occurs when water overflows onto normally dry land. This can happen due to heavy rain, dam failures, or rapid snowmelt.",
    image: "/images/flood.jpg",
    detailedInfo: {
      about: "Floods are among the most frequent and widespread of all natural disasters. They can occur suddenly and without warning, with devastating effects on communities, especially in low-lying areas or near rivers. Floodwaters can submerge entire towns, destroy homes, wash away crops, and disrupt infrastructure such as roads and power lines. In addition to the immediate physical damage, floods can cause long-term economic hardship, displace populations, and contribute to health crises by contaminating drinking water supplies and promoting the spread of waterborne diseases. The impact of a flood is often compounded by poor urban planning and inadequate drainage systems.",
      previousCases: "India has experienced several severe floods, such as the 2013 Uttarakhand flash floods that claimed over 5,000 lives and caused massive destruction. Another significant event was the 2020 Kerala floods, which were triggered by heavy monsoon rains, resulting in widespread loss of life, property damage, and displacement of communities.",
      severity: "Moderate to High - The severity of a flood depends on several factors, including the intensity and duration of rainfall, the topography of the area, and the preparedness of the local population. Floods can range from minor events with minimal impact to catastrophic situations with massive loss of life and property.",
      prevention: "Effective flood prevention strategies include constructing flood barriers, maintaining proper drainage systems, implementing sustainable land use practices, and restoring natural vegetation that can help absorb excess water. Early warning systems and public awareness campaigns are also crucial in reducing the risk of flood-related casualties.",
      emergencyResponse: "If a flood is imminent, evacuate to higher ground immediately. Avoid walking or driving through floodwaters, as they can be deeper and stronger than they appear. Stay informed by listening to emergency broadcasts and follow the instructions of local authorities.",
      contactInfo: "In case of flooding, contact the NDMA helpline at 1078 or your local disaster management authority."
    }
  },
  {
    id: 3,
    name: "Cyclone",
    description: "Cyclones are large-scale air masses that rotate around a strong center of low atmospheric pressure, often causing severe weather.",
    image: "/images/cyclone.jpg",
    detailedInfo: {
      about: "Cyclones, also known as hurricanes or typhoons depending on their location, are powerful storms characterized by strong winds, heavy rainfall, and storm surges. These storms typically form over warm ocean waters and can move hundreds of miles, bringing severe weather conditions to coastal and inland areas alike. The impact of a cyclone can be devastating, particularly in densely populated coastal regions. Cyclones can destroy homes, knock down trees and power lines, cause flooding, and lead to massive economic losses. The aftermath of a cyclone often includes long-term disruptions to livelihoods, especially in agriculture and fishing communities.",
      previousCases: "India is no stranger to cyclones, with some of the most severe storms in recent history including the 1999 Odisha Super Cyclone, which killed nearly 10,000 people and caused enormous destruction, and Cyclone Amphan in 2020, which affected millions in West Bengal and Odisha, leading to significant economic losses and widespread displacement.",
      severity: "High - Cyclones pose a high risk to life and property, especially in coastal areas. Their severity is determined by their wind speed, size, duration, and the density of population in the areas they affect.",
      prevention: "To mitigate the impact of cyclones, accurate forecasting and early warning systems are essential. Governments and communities must invest in cyclone shelters, enforce building codes designed to withstand strong winds, and educate the public on cyclone preparedness.",
      emergencyResponse: "During a cyclone, evacuate to a designated shelter if instructed, secure your home, stay indoors away from windows, and keep emergency supplies such as water, food, and first-aid kits ready.",
      contactInfo: "In case of a cyclone, contact the Indian Meteorological Department (IMD) or your local disaster management authority."
    }
  },
  {
    id: 4,
    name: "Drought",
    description: "A drought is an extended period of deficient rainfall that results in water shortages, impacting agriculture, water supply, and ecosystems.",
    image: "/images/drought.jpg",
    detailedInfo: {
      about: "Droughts occur when there is a prolonged period of insufficient rainfall, leading to a shortage of water that can have devastating effects on agriculture, water supply, and the natural environment. Droughts can last for months or even years and often develop slowly, making them less visible but equally destructive compared to other natural disasters. They can lead to crop failures, loss of livestock, and food shortages, triggering economic and social crises. Droughts can also increase the risk of wildfires and exacerbate conditions for desertification, leading to long-term ecological damage.",
      previousCases: "India has experienced several significant droughts, such as the 2016 drought that affected large parts of the country, leading to severe water shortages and agricultural losses. The 1987 drought, considered one of the worst in the 20th century, impacted over 300 million people across 15 states.",
      severity: "High - The severity of a drought depends on its duration, the degree of water shortage, and the vulnerability of the affected population. Droughts can have far-reaching consequences on food security, public health, and economic stability.",
      prevention: "Prevention measures include sustainable water management practices, rainwater harvesting, drought-resistant crop cultivation, and the development of robust drought early warning systems.",
      emergencyResponse: "During a drought, conserve water by reducing non-essential usage, follow government guidelines on water rationing, and ensure access to clean drinking water. Public awareness campaigns can help communities better prepare for drought conditions.",
      contactInfo: "For drought-related information and assistance, contact the local agricultural department or water management authority."
    }
  },
  {
    id: 5,
    name: "Wildfire",
    description: "Wildfires are uncontrolled fires that spread rapidly through vegetation, often triggered by natural or human causes.",
    image: "/images/wildfire.jpg",
    detailedInfo: {
      about: "Wildfires are uncontrolled fires that can spread quickly through forests, grasslands, and rural areas, consuming everything in their path. They are often caused by lightning strikes, human negligence, or intentional arson. Wildfires pose a severe risk to life, property, and wildlife, and they can result in extensive damage to the environment. The intensity and spread of wildfires are influenced by weather conditions, vegetation type, and topography. While fires play a natural role in many ecosystems, excessive or unmanaged wildfires can cause severe ecological damage, destroy habitats, and contribute to air pollution and climate change.",
      previousCases: "India has seen several devastating wildfires, such as the 2020 Uttarakhand forest fires that destroyed thousands of hectares of forest land, threatening wildlife and local communities. The 2016 Simlipal National Park fire was another major incident that affected a large area of one of India’s most important wildlife reserves.",
      severity: "Moderate to High - Wildfires can range from small, easily controllable fires to large-scale infernos that destroy vast areas and require significant resources to manage. Their severity depends on the fuel load, weather conditions, and proximity to human settlements.",
      prevention: "Prevention strategies include controlled burns to manage fuel load, creating firebreaks, enforcing regulations on fire use in forest areas, and raising public awareness about fire safety.",
      emergencyResponse: "If caught in a wildfire, evacuate immediately if instructed, stay low to the ground to avoid smoke inhalation, and cover yourself with a wet cloth. Avoid driving through smoke, and be aware of road closures and evacuation routes.",
      contactInfo: "In case of a wildfire, contact the Forest Department or your local fire services."
    }
  },
  {
    id: 6,
    name: "Tsunami",
    description: "A tsunami is a series of ocean waves caused by large undersea disturbances, such as earthquakes, volcanic eruptions, or landslides.",
    image: "/images/tsunami.jpg",
    detailedInfo: {
      about: "Tsunamis are massive waves triggered by seismic activity, such as undersea earthquakes, volcanic eruptions, or landslides. These waves can travel at speeds of up to 800 km/h across the ocean and increase dramatically in height as they approach shallow coastal waters. The sheer force of a tsunami can destroy coastal towns, cause severe flooding, and lead to significant loss of life and property. Tsunamis are particularly dangerous because they often occur with little warning, leaving residents with minimal time to evacuate to higher ground. The aftermath can be devastating, with extensive damage to infrastructure, contamination of freshwater supplies, and disruption of livelihoods, particularly in fishing and coastal communities.",
      previousCases: "One of the deadliest tsunamis in history occurred in 2004, affecting multiple countries around the Indian Ocean, including India, Sri Lanka, Thailand, and Indonesia, resulting in over 230,000 deaths. The 2011 Japan tsunami, caused by a magnitude 9.1 earthquake, led to widespread devastation and a nuclear disaster at the Fukushima Daiichi plant.",
      severity: "High - Tsunamis pose a high risk to coastal communities, particularly in areas with dense populations or inadequate early warning systems.",
      prevention: "Preventive measures include the development of early warning systems, public education on evacuation routes, and the construction of protective seawalls in vulnerable areas.",
      emergencyResponse: "If a tsunami warning is issued, move to higher ground immediately, stay away from beaches and rivers, and follow instructions from local authorities. Remain in safe areas until the all-clear signal is given.",
      contactInfo: "For tsunami alerts and assistance, contact the Indian National Centre for Ocean Information Services (INCOIS) or local disaster management authorities."
    }
  },
  {
    id: 7,
    name: "Volcanic Eruption",
    description: "Volcanic eruptions occur when magma from beneath the Earth's crust escapes to the surface, often causing explosions, lava flows, and ash clouds.",
    image: "/images/volcano.jpg",
    detailedInfo: {
      about: "Volcanic eruptions are powerful geophysical events where molten rock, ash, and gases escape from a volcano's vent or fissure. These eruptions can range from effusive, producing slow lava flows, to explosive, ejecting ash clouds and pyroclastic material high into the atmosphere. The impact of an eruption can be catastrophic, particularly for nearby communities. It can destroy infrastructure, bury towns under ash, disrupt air travel, and lead to significant environmental changes. Additionally, the release of volcanic gases like sulfur dioxide can affect air quality and climate, sometimes triggering acid rain.",
      previousCases: "India's only active volcano, Barren Island in the Andaman and Nicobar Islands, erupted in 2017, causing concern among nearby residents and scientists. The 2010 eruption of Mount Merapi in Indonesia killed over 350 people and displaced thousands.",
      severity: "High - The severity of a volcanic eruption depends on its explosivity, the proximity of human settlements, and the eruption's duration.",
      prevention: "Preventive measures include monitoring volcanic activity, maintaining exclusion zones around active volcanoes, and preparing communities through evacuation plans and drills.",
      emergencyResponse: "In the event of a volcanic eruption, evacuate immediately if advised, avoid low-lying areas prone to lava flows, and protect yourself from ash by staying indoors and using masks.",
      contactInfo: "For volcanic eruption updates, contact the Geological Survey of India (GSI) or local emergency services."
    }
  },
  {
    id: 8,
    name: "Landslide",
    description: "Landslides are the downward movement of rock, soil, and debris, often caused by heavy rainfall, earthquakes, or human activities.",
    image: "/images/landslide.jpg",
    detailedInfo: {
      about: "Landslides are rapid downhill movements of rock, soil, and debris, triggered by natural factors such as heavy rainfall, earthquakes, volcanic eruptions, or human activities like deforestation and construction. Landslides can cause significant damage by destroying buildings, roads, and infrastructure, and they can be fatal, particularly in mountainous or hilly areas where they occur without warning. They also contribute to secondary disasters, such as river blockages and floods.",
      previousCases: "The 2013 Kedarnath landslide in India, triggered by heavy rainfall, caused massive destruction and claimed thousands of lives. The 2019 Malin landslide in Maharashtra buried an entire village, killing over 150 people.",
      severity: "Moderate to High - The severity of a landslide is determined by its speed, volume, and the vulnerability of the affected area.",
      prevention: "Preventive measures include slope stabilization, afforestation, proper drainage management, and land-use planning to avoid construction in landslide-prone areas.",
      emergencyResponse: "If a landslide occurs, move to higher ground, avoid river valleys and slopes, and follow evacuation orders from local authorities.",
      contactInfo: "In case of a landslide, contact the local disaster management authority or State Geological Departments."
    }
  },
  {
    id: 9,
    name: "Heatwave",
    description: "A heatwave is a prolonged period of excessively hot weather, which can have severe health, environmental, and economic impacts.",
    image: "/images/heatwave.jpg",
    detailedInfo: {
      about: "Heatwaves are prolonged periods of excessively high temperatures, often accompanied by high humidity, that pose significant risks to human health, agriculture, and infrastructure. Heatwaves can lead to heat exhaustion, heatstroke, and other health emergencies, particularly among vulnerable populations such as the elderly, children, and those with preexisting health conditions. They also increase the risk of wildfires, droughts, and power outages due to increased electricity demand for cooling.",
      previousCases: "India experienced severe heatwaves in 2015, resulting in over 2,000 deaths, particularly in Andhra Pradesh and Telangana. In 2019, a heatwave led to temperatures exceeding 50°C in parts of Rajasthan, causing widespread discomfort and health issues.",
      severity: "Moderate to High - The severity of a heatwave depends on its intensity, duration, and the preparedness of affected communities.",
      prevention: "Preventive measures include public awareness campaigns on staying hydrated and cool, the establishment of cooling centers, and urban planning to reduce heat island effects.",
      emergencyResponse: "During a heatwave, stay hydrated, avoid outdoor activities during peak heat hours, use air conditioning or fans, and check on vulnerable neighbors.",
      contactInfo: "For heatwave advisories, contact the local meteorological department or health services."
    }
  },
  {
    id: 10,
    name: "Pandemic",
    description: "A pandemic is a global outbreak of a disease that spreads rapidly and affects a large number of people across multiple countries or continents.",
    image: "/images/pandemic.jpg",
    detailedInfo: {
      about: "A pandemic is a widespread outbreak of an infectious disease that affects people globally. It occurs when a new virus emerges to which humans have little or no immunity, spreading rapidly from person to person. The impact of a pandemic can be catastrophic, leading to millions of deaths, overwhelming healthcare systems, and causing severe social and economic disruptions. Pandemics like the COVID-19 outbreak in 2019 highlight the importance of global cooperation, effective health policies, and emergency preparedness.",
      previousCases: "The COVID-19 pandemic, which began in late 2019, has resulted in millions of deaths worldwide and caused unprecedented disruptions to daily life, economies, and healthcare systems. Previous pandemics include the 1918 influenza pandemic (Spanish flu) that claimed over 50 million lives globally.",
      severity: "High - The severity of a pandemic depends on the transmissibility of the pathogen, the availability of vaccines or treatments, and public health responses.",
      prevention: "Preventive measures include vaccination, social distancing, mask-wearing, hand hygiene, travel restrictions, and quarantine protocols.",
      emergencyResponse: "During a pandemic, follow public health guidelines, practice social distancing, wear masks in crowded places, and get vaccinated as recommended.",
      contactInfo: "For pandemic-related information, contact the Ministry of Health and Family Welfare or the World Health Organization (WHO)."
    }
  },
  {
  id: 11,
  name: "Cold Wave",
  description: "A cold wave is a rapid fall in temperature over a short period, often causing health issues, crop damage, and disruptions to daily life.",
  image: "/images/coldwave.jpg",
  detailedInfo: {
    about: "Cold waves are periods of abnormally low temperatures that occur over a large area, causing significant disruptions to daily life, transportation, and agriculture. They can lead to hypothermia, frostbite, and other cold-related illnesses, particularly among vulnerable populations such as the elderly, homeless, and those with inadequate heating. Cold waves can also cause severe crop damage, disrupt power supplies due to increased demand for heating, and contribute to economic losses.",
    previousCases: "In 2018, a severe cold wave affected northern India, causing multiple fatalities and disruptions. In 2021, cold waves in Europe led to significant disruptions in transportation and energy supplies.",
    severity: "Moderate to High - The severity of a cold wave depends on its intensity, duration, and the preparedness of affected communities.",
    prevention: "Preventive measures include weather forecasting, public warnings, the establishment of warming shelters, and ensuring vulnerable populations have access to adequate heating and clothing.",
    emergencyResponse: "During a cold wave, dress warmly in layers, limit time spent outdoors, check on vulnerable neighbors, and use heating devices safely.",
    contactInfo: "For cold wave warnings, contact the local meteorological department or disaster management authorities."
  }
},
{
  id: 12,
  name: "Hailstorm",
  description: "Hailstorms involve precipitation in the form of balls or lumps of ice that can cause severe damage to crops, vehicles, and infrastructure.",
  image: "/images/hailstorm.jpg",
  detailedInfo: {
    about: "Hailstorms are characterized by the precipitation of ice balls or lumps, known as hailstones, which form within powerful thunderstorm updrafts. These hailstones can vary in size from small pellets to larger stones capable of causing significant damage. Hailstorms can damage crops, vehicles, roofs, and other structures, and pose risks to people and animals caught outdoors. Hail can also lead to flash floods by overwhelming stormwater drainage systems.",
    previousCases: "The 2013 hailstorm in Maharashtra, India, caused extensive damage to crops, leading to significant economic losses for farmers. A hailstorm in 2018 in Rajasthan injured dozens and destroyed hundreds of houses.",
    severity: "Moderate - The severity of a hailstorm depends on the size and velocity of the hailstones, and the vulnerability of the affected area.",
    prevention: "Preventive measures include early warning systems, public awareness campaigns, and using protective coverings for crops and vehicles.",
    emergencyResponse: "During a hailstorm, stay indoors, avoid windows, protect pets and livestock, and cover vehicles to minimize damage.",
    contactInfo: "For hailstorm alerts, contact the local meteorological department."
  }
},
{
  id: 13,
  name: "Cyclone",
  description: "Cyclones are intense circular storms that originate over warm tropical oceans and are characterized by high winds and heavy rainfall.",
  image: "/images/cyclone.jpg",
  detailedInfo: {
    about: "Cyclones are powerful and destructive storms that form over warm tropical oceans and are characterized by strong winds, heavy rain, and thunderstorms. They can lead to widespread flooding, storm surges, and significant damage to infrastructure, homes, and livelihoods, particularly in coastal areas. Cyclones can also trigger landslides and cause loss of life. The Bay of Bengal and the Arabian Sea are particularly prone to cyclonic storms that impact coastal regions in India.",
    previousCases: "Cyclone Amphan in 2020 caused widespread destruction in West Bengal and Odisha, leading to over 100 deaths and massive economic losses. Cyclone Tauktae in 2021 was one of the strongest cyclones to hit the Arabian Sea, causing severe damage in Gujarat and Maharashtra.",
    severity: "High - The severity of a cyclone is determined by its wind speed, size, and the extent of the affected area.",
    prevention: "Preventive measures include early warning systems, evacuation plans, cyclone shelters, and community awareness programs.",
    emergencyResponse: "During a cyclone, evacuate if instructed, secure property, avoid coastal areas, and stay indoors until the storm passes.",
    contactInfo: "For cyclone warnings, contact the Indian Meteorological Department (IMD) or local disaster management authorities."
  }
},
{
  id: 14,
  name: "Drought",
  description: "Droughts are prolonged periods of insufficient rainfall that result in water shortages, crop failures, and adverse environmental effects.",
  image: "/images/drought.jpg",
  detailedInfo: {
    about: "Droughts occur when there is a prolonged lack of rainfall, leading to water shortages for agriculture, drinking, and other essential uses. Droughts can result in crop failures, loss of livestock, reduced water quality, and long-term impacts on ecosystems. They also affect the livelihood of farmers and can lead to severe economic and social consequences, especially in rural areas. Climate change is increasing the frequency and severity of droughts worldwide.",
    previousCases: "The drought of 2016-2017 in India affected over 330 million people, with significant water shortages in Maharashtra, Karnataka, and Tamil Nadu. The 2002 drought was one of the worst in India's history, affecting nearly 56% of the country's geographical area.",
    severity: "High - The severity of a drought is determined by its duration, intensity, and the availability of water resources in the affected area.",
    prevention: "Preventive measures include water conservation, efficient irrigation techniques, rainwater harvesting, and sustainable agricultural practices.",
    emergencyResponse: "During a drought, conserve water, use it wisely, avoid overuse, and adhere to local water restrictions and conservation guidelines.",
    contactInfo: "For drought management assistance, contact the local water resources department or agricultural extension services."
  }
},
{
id: 15,
name: "Industrial Accident",
description: "An industrial accident involves unexpected events occurring in industrial settings that cause harm to people, property, or the environment.",
image: "/images/industrial-accident.jpg",
detailedInfo: {
  about: "Industrial accidents refer to any unexpected incidents that occur in industrial settings, such as factories, plants, or construction sites, that result in injury, property damage, or environmental harm. These accidents can be caused by equipment failure, human error, unsafe practices, or exposure to hazardous materials. The impact of industrial accidents can range from minor injuries to severe casualties and extensive damage to facilities and the surrounding environment. Ensuring safety protocols and proper training can mitigate the risks associated with industrial operations.",
  previousCases: "Notable industrial accidents include the Bhopal Gas Tragedy of 1984, one of the world's worst industrial disasters, which resulted in thousands of deaths due to the release of toxic gas. Another significant event was the 2013 Dhaka garment factory collapse in Bangladesh, which killed over 1,100 workers and highlighted issues related to safety standards and working conditions.",
  severity: "High - Industrial accidents can have severe consequences depending on the nature of the incident, including potential loss of life, environmental damage, and economic losses. The severity is influenced by the type of industry, safety measures in place, and the response to the accident.",
  prevention: "Preventive measures include implementing strict safety protocols, regular maintenance of equipment, thorough training for employees, and ensuring compliance with safety regulations. Conducting risk assessments and having emergency response plans in place are also crucial.",
  emergencyResponse: "In the event of an industrial accident, evacuate the area immediately if possible, seek medical attention for injuries, and report the incident to emergency services. Follow the guidance of safety officers and adhere to established emergency procedures.",
  contactInfo: "For industrial accidents, contact the local occupational safety and health administration or emergency services."
}
},
{
id: 16,
name: "Building Collapse",
description: "A building collapse occurs when a structure fails, causing it to fall or partially fall, often due to structural weaknesses or external factors.",
image: "/images/building-collapse.jpg",
detailedInfo: {
  about: "Building collapses can occur due to various reasons, including structural deficiencies, poor construction practices, natural disasters, or external impacts. When a building collapses, it can cause significant damage to surrounding structures, pose severe risks to occupants and passersby, and result in substantial economic losses. The causes of building collapses can range from design flaws and material failures to insufficient maintenance and seismic activity. Addressing these issues through proper engineering, construction standards, and regular inspections is essential to prevent such incidents.",
  previousCases: "Notable building collapses include the 2013 Rana Plaza disaster in Bangladesh, which led to over 1,100 deaths due to structural failures in a garment factory building. Another example is the 2021 Miami building collapse in the United States, where the Champlain Towers South building partially collapsed, resulting in numerous casualties and highlighting concerns about building safety and maintenance.",
  severity: "High - The severity of a building collapse is generally high due to the potential for significant loss of life, injury, and property damage. Factors such as the size of the building, the number of occupants, and the structural integrity play a role in determining the extent of the damage.",
  prevention: "Preventive measures include adhering to strict building codes and standards, conducting regular structural inspections and maintenance, and ensuring that construction practices are followed. Implementing early warning systems and engaging in disaster preparedness planning can also be effective.",
  emergencyResponse: "During a building collapse, seek shelter away from the collapse zone, avoid entering unstable areas, and contact emergency services immediately. Provide first aid to any injured individuals if safe to do so and follow instructions from rescue teams.",
  contactInfo: "For building collapse emergencies, contact local emergency services or the fire department."
}
},
{
id: 17,
name: "Fire Accident",
description: "A fire accident is an unexpected fire that occurs due to various causes, such as electrical faults, human error, or flammable materials.",
image: "/images/fire-accident.jpg",
detailedInfo: {
  about: "Fire accidents can occur due to various reasons including electrical faults, cooking accidents, careless disposal of flammable materials, or arson. Fires can spread rapidly, causing extensive damage to property, injuries, and loss of life. The impact of a fire can be severe, depending on the size and location of the fire, as well as the speed of response. Effective fire safety measures and preparedness can help mitigate the risks associated with fire accidents.",
  previousCases: "Significant fire accidents include the 2019 Delhi fire tragedy, where a fire in a building killed over 40 people due to inadequate safety measures and blocked exits. Another major incident was the 2018 Mumbai fire, which resulted in numerous casualties and highlighted issues related to fire safety regulations.",
  severity: "High - Fire accidents can have high severity due to their potential to cause extensive damage to life and property. The severity is influenced by factors such as the availability of fire suppression systems, building safety features, and the promptness of the response.",
  prevention: "Preventive measures include installing smoke detectors and fire alarms, maintaining electrical systems, ensuring proper storage of flammable materials, and conducting regular fire drills. Public education on fire safety and preparedness is also crucial.",
  emergencyResponse: "In case of a fire accident, evacuate the premises immediately, use fire extinguishers if safe to do so, and call emergency services. Do not use elevators during a fire, and stay low to avoid smoke inhalation.",
  contactInfo: "For fire emergencies, contact the local fire department or emergency services immediately."
}
}
];
  export { disasters };