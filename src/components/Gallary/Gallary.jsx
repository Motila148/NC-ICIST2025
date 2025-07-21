import React, { useState } from 'react';
import './Gallary.css';
import Modal from './Modal'; // We will create this new component

// --- Restructure your data to include an array of images for each location ---
// --- The first image in the array will be the cover photo ---
const locationsData = [
  { 
    name: 'Loktak Lake', 
    description: '48 Kms. from Imphal, is the largest fresh water lake in the North East Region. From the Tourist Bunglow set atop Sendra Island, visitors get a bird’s eye view of life on the Lake small islands that are actually floating weeds on which the Lake-dwellers live in the backdrop of the shimmering blue water of the Lake, labyrinthine boat routes and colourful water plants. The Sendra Tourist Home with an attached Cafeteria is an ideal tourist spot. Boating and other water sports are organised here in Takmu Water Sports Complex.', 
    images: [
      'https://i.pinimg.com/736x/96/ce/8e/96ce8e5e21c59bfd98226eadd12e81ab.jpg', 
      'https://c.ndtvimg.com/gws/ms/manipurs-loktak-worlds-only-floating-lake/assets/5.jpeg',
      'https://horizons.tatatrusts.org/2020/december/images/share/floating-feeling-01.jpg',
    ] 
  },
  { 
    name: 'Kangla Fort', 
    description: 'The centre of Manipur’s power till 1891, the historical embodiment of Manipur Rulers and the people of Manipur, Kangla have a significant place in the heart and mind of the people of Manipur Govindajee temple, outer and inner moat and other relics are perfect reflections of the rich art and culture of Manipur and her civilization.', 
    images: [
        'https://miro.medium.com/v2/resize:fit:1100/format:webp/1*QRYN-yfSToEC6_5dZHoPtg.jpeg',
        'https://upload.wikimedia.org/wikipedia/commons/thumb/2/21/Southeastern_view_of_the_Pakhangba_Temple_inside_the_Kangla_fort_in_Imphal.jpg/500px-Southeastern_view_of_the_Pakhangba_Temple_inside_the_Kangla_fort_in_Imphal.jpg', 
        'https://upload.wikimedia.org/wikipedia/commons/thumb/f/f8/Uttra_Sanglen.JPG/1260px-Uttra_Sanglen.JPG',
      
    ] 
  },
  { 
    name: 'Ima Keithel', 
    description: 'A unique all women’s market, having 3,000 or more “Imas” or mothers who run the stalls. It is splited into two sections on either side of a road. Vegetables, fruits, fishes and household groceries are sold on one side and exquisite handlooms and household tools on the other.', 
    images: [
      'https://i0.wp.com/asombarta.com/wp-content/uploads/2023/02/Ima-1-scaled.jpg?fit=2560%2C1707&ssl=1',
      'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/0a/f1/91/1c/more-clothes.jpg?w=900&h=500&s=1',
      'https://d3lzcn6mbbadaf.cloudfront.net/media/details/WhatsApp_Image_2022-02-16_at_9.02.50_PM2022021615344720220216160305.jpg',
    ]
  },
   { 
    name: 'Khongjom War Memorial ', 
    description: 'Khongjom War Memorial Complex is a war memorial commemorating the Anglo-Manipur War. Situated at Khongjom, Thoubal district of Manipur, the complex houses the world\'s tallest sword statue.', 
    images: [
      'https://lh3.googleusercontent.com/gps-cs-s/AC9h4noOGdEevdVey7OGtx-y_gw1H9pLy_Ue20bpbjN3js95Hf6JLpayvTAOwOEFSckog8ysAN4phS_tQO1CSascvhxO9VQ3UTZT0cfO4i07UFnRfG7INzkDOMTGXtHEHFeHWpE5498z=s1360-w1360-h1020-rw',
      'https://lh3.googleusercontent.com/gps-cs-s/AC9h4nqD7Ldz6D9btaENe6mvdG9XWPvnjikqN3KMTMjv_BcQBBtqnUnKX2ooOFoUFDbkdnk2SoP06-WKNDpvDfD6job59I4PFcGTpgUZFB5hsTLArU8lkHRHxvCRF3AcquWoXPxocYw5=s1360-w1360-h1020-rw',
      'https://lh3.googleusercontent.com/gps-cs-s/AC9h4nqM68qDvqB_IM14e40xXeUHUg73Amehrw2EDdE1OsPlMlTY-fDHMGOc4A2nQLdjbHfLoBtq4goapmI5ZUQjM-qh4rI6b6KaUwew2pJAJk82BMf4feu8u0bPN71Zod3NTVee2SU=s1360-w1360-h1020-rw',
      'https://lh3.googleusercontent.com/gps-cs-s/AC9h4nqBxheKwmOpy_bT4BRvVQDr29--8liOc0RMJZ2S0GNF6kxbf1sxIcSXkYyeHMDEKMMLLrtMkRUsPPJdBTzogtj80rva_kxY3mhkUvQrWZagcoXmDTCIpXMQQkJBvZmzYNVLXpBMYw=s1360-w1360-h1020-rw',
    ]
  },
   { 
    name: 'Manipur State Museum', 
    description: 'This interesting Museum near the Polo Ground has a fairly good collection and display of Manipur’s tribal heritage and a collection of portraits of Manipur’s former rulers. Particularly interesting items are costumes, arms & ammunitions, relics and historical documents.', 
    images: [
      'https://cdn.s3waas.gov.in/s3faa9afea49ef2ff029a833cccc778fd0/uploads/bfi_thumb/2018072552-olwe2wy6cyjk3y9ppj95mzgw4tx9ldkxxs9315noui.png',
      'https://cdn.s3waas.gov.in/s3faa9afea49ef2ff029a833cccc778fd0/uploads/bfi_thumb/2018073123-olwe2ytuqmm4r66zek2eryztblo00rsem1k1zpkwi2.jpg',
      'https://shop.museumsofindia.org/sites/default/files/2017-11/_IMG9656.jpg',
    ]
  },
   { 
    name: 'Imphal War Cemetery', 
    description: 'Commemorating the memories of the British and Indian soldiers who died during the World War II, these War Cemeteries are managed by the Commonwealth War Graves Commission. Serene are well maintained, the War Cemetery carries little stone markers and bronze plaques recording the sacrifice of those gallant soldiers.', 
    images: [
      'https://s7ap1.scene7.com/is/image/incredibleindia/imphal-war-cemetery-imphal-manipur-1-attr-hero?qlt=82&ts=1742155907878',
      'https://upload.wikimedia.org/wikipedia/commons/0/0b/Imphal_War_cemetery.jpg',
      'https://d2kihw5e8drjh5.cloudfront.net/eyJidWNrZXQiOiJ1dGEtaW1hZ2VzIiwia2V5IjoicGxhY2VfaW1nL2QzMjgyYzcxOWYwMDQ5NjA4MDI5Y2EyMzU5MTc4ZmVkIiwiZWRpdHMiOnsicmVzaXplIjp7IndpZHRoIjo2NDAsImhlaWdodCI6NjQwLCJmaXQiOiJpbnNpZGUifSwicm90YXRlIjpudWxsLCJ0b0Zvcm1hdCI6ICJ3ZWJwIn19',
    ]
  },
  { 
    name: 'Shree Shree Govindajee Temple', 
    description: 'A historic Vaishnavite centre, adjoining Manipur’s former Maharajas’ Royal Palace, the Govindajee temple is one of the most attractive sights for the tourists. Twin domes, a paved courtyard, and a large raised congregation hall form a perfect backdrop for priests who descend the steps, to accept offerings from devotees in the courtyard. The shrines of Lord Krishna and Balaram and Jagannath flank the two sides of the presiding deity. Early hours Prayer (Aarti) is a must for devoted followers, exudingspiritual fervour and ecstasy.', 
    images: [
      'https://cdn.s3waas.gov.in/s3a684eceee76fc522773286a895bc8436/uploads/bfi_thumb/2018063056-olwbaofrjzbs0xva0pge8s2bmlz5rcnehns1nwa2dm.jpg',
      'https://lh3.googleusercontent.com/gps-cs-s/AC9h4npIkNeXpFOVMkWXKmdZgBV4P652zFIhzmB9m2gf0DTW4-kuYuJrPdvid69Id_E2YSDrQ2ehepovVMQ9H5RxALHSFhpEfl86hwV-OYPTPbYbnnSBt7RBV-cqrjugtYizL-KLVVA=s1360-w1360-h1020-rw',
      'https://lh3.googleusercontent.com/gps-cs-s/AC9h4nra500RoKZRtSSK8tgFLfKB7yrHhlSfvN7agtcbfbHXuOVz7W5CzC0gJDRx3Qmg7SRpLcMqg_8KAe5ADPz5fEFYu3FFp34Km4T3p8SBm1nVUwUajVRCI5srm7Xbc8KQcmRKveLEzw=s1360-w1360-h1020-rw',
    ]
  },
  { 
    name: 'Keibul Lamjao National Park', 
    description: 'The park is located in the south western part of the Loktak lake. This is the last natural habitat of the brow-antlered deer(Sangai) the dancing deer of Manipur. Keibul Lamjao National Park is the only floating park in the world. A glimpse of the deer in this unique wetland ecosystem is a must for any wildlife enthusiast. Other wildlife to be seen include: Hog Deer, Otter, a host of water fowls and migratory birds, the latter usually sighted during November to March. The Forest Department of Manipur maintains watch towers and two rest houses within the park. Shooting game is prohibited there', 
    images: [
        'https://cdn.s3waas.gov.in/s305f971b5ec196b8c65b75d2ef8267331/uploads/bfi_thumb/2018061339-2-olw6bkax8i4rny1jxa7p3z88jct6zpkr74h5hpus22.jpg',
      'https://cdn.s3waas.gov.in/s305f971b5ec196b8c65b75d2ef8267331/uploads/bfi_thumb/2018061312-olw6bjd31o3hcc2x2rt2jhgrxyxts0h0uzto0fw68a.jpg',
      'https://cdn.s3waas.gov.in/s305f971b5ec196b8c65b75d2ef8267331/uploads/bfi_thumb/2018061312-olw6bjd31o3hcc2x2rt2jhgrxyxts0h0uzto0fw68a.jpg',
    ]
  },
  { 
    name: 'Dzuko Valley', 
    description: 'It is a very beautiful green valley and the mostpicturesque place in Senapati District bordering Nagaland. It is famous for its rare terrestrial lily called Dzuko Lily and the enchanting snow clad valley during January & February. The highest peak of Manipur Mount Iso is also located behind this valley.', 
    images: [
        'https://upload.wikimedia.org/wikipedia/commons/thumb/4/44/Breathtaking_beauty_of_Dzukou_Valley_in_Manipur-Nagaland_border_%28edit%29.jpg/1920px-Breathtaking_beauty_of_Dzukou_Valley_in_Manipur-Nagaland_border_%28edit%29.jpg',
      'https://www.e-pao.org/galleries/images/Flora/2016/Shirui_Lily_06/Part_5/Shirui_Lily_201606_5_1.jpg',
      'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgkNxymkBOhvYHbqnns2tX4ExPHltNu55l6m3ifXgvZ8a7rkVNJAtFtUeO24knT_O1i9Flk1-HuOuS3oPSMkZG5KWHcy-tI14MwdlbfHLkaitZntGcUgvuFhmDAJaMHgm9vS3wJXsLMoSY/s1600/dzukou-valley.jpg',
    ]
  },
  { 
    name: 'Japan War Memorial Complex', 
    description: 'It is a hillock about 17 Kms south of Imphal City on Tiddim Road (NH-150). A fierce battle was fought at the site between the Allied Forcews and the Japanese Forces during World War II. Japanese war veterans constructed a monument at the foot of this hill and it is significantly named “India Peace Memorial” . It is a place of pilgrimage for Japanese tourists.', 
    images: [
        'https://www.e-paolive.net/galleries/images/Landscape/2010/MaibamLokpa09/Japan_Peace_201009_1.jpg',
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQxpNYa6vdHTxK7O4stFRiXSKqzhUA9D0ANfFQwkvInZaboYYHdzpqOIgyggN19PGNK8bs&usqp=CAU',
      'https://www.gosahin.com/go/p/c/t/1520447425_Japanese-War-Memorial3.jpg',
    ]
  },
   { 
    name: 'Nupilal Complex', 
    description: 'The complex is a tribute to the courageous Manipuri women, who sacrificed their lives fighting for justice against the British on 12th December, 1939.', 
    images: [
        'https://cdn.s3waas.gov.in/s3faa9afea49ef2ff029a833cccc778fd0/uploads/bfi_thumb/2018073189-1-olwe33j1osskd805n43jmft4aj0u39b2aothe3dxmy.jpg',
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTicYVHJqF032T6EjOjQR_8PMWTFS8I729uTw&s',
    ]
  },
  { 
    name: 'Ukhrul', 
    description: 'Ukhrul, the highest hill station of the state is located at a distance of 83 kms. to the east of Imphal. Ukhrul is well developed and is a centre of a colourful warrior tribe, the Tangkhul Nagas. Siroi Hills and Khangkhui Lime Caves are interesting places for excursions. Siroi Hills: Ukhrul is also known for a peculiar type of land-lily, the Siroi Lily, grows on the Siroi hills at a height of 8,500 ft. This beautiful lily growing only in this part of world blooms during May-June. Tangkhul is one of the oldest and major tribes of Manipur.', 
    images: [
        'https://encrypted-tbn3.gstatic.com/licensed-image?q=tbn:ANd9GcTMBe9G2r3N_YPGSNYp5VGiFPG5EqxTnVfvYsqtpTjduG-PFOXIu2cADBTJgyUmz_FjleSSMXc_kH5BfyGxHL0klCNZwisAPJq8Dk7Z6w',
      'https://lh3.googleusercontent.com/p/AF1QipNDxDcMYkn9Xub_mEGaMyuk1Iiy3P6I-fvsnXeM=s1360-w1360-h1020-rw',
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSwEJ1Ezk2XnY53fKpcKXvryk89xz5q3k7rpw&s',
    ]
  },
  // ... Add the rest of your 9 locations here in the same format
];

const Gallery = () => {
  const [selectedLocation, setSelectedLocation] = useState(null);

  return (
    <>
      <section className="gallery-section">
        <div className="container">
          <h2 className="section-title">Places to Visit</h2>
          <p className="section-subtitle">Explore the rich culture and stunning landscapes of Manipur.</p>
          <div className="gallery-grid">
            {locationsData.map((location, index) => (
              <div 
                className="gallery-card" 
                key={index}
                onClick={() => setSelectedLocation(location)}
              >
                <img src={location.images[0]} alt={location.name} className="card-background" />
                <div className="card-overlay">
                  <div className="card-content">
                    <h3 className="card-title">{location.name}</h3>
                    <p className="card-description">Click to see more</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Conditionally render the modal when a location is selected */}
      {selectedLocation && (
        <Modal 
          location={selectedLocation} 
          onClose={() => setSelectedLocation(null)} 
        />
      )}
    </>
  );
};

export default Gallery;