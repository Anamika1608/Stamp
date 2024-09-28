import { v2 as cloudinary } from 'cloudinary';

const imageOfCPSLinks = [
    "https://postagestamps.gov.in/Uploads/2024/MS%20for%20video%20BTMOD.jpg",
    "https://postagestamps.gov.in/Uploads/2023/RAO_BIRENDER_SINGH_STAMP.jpg",
    "https://postagestamps.gov.in/Uploads/2023/225_Glorious_%20Years_STAMP.jpg",
    "https://postagestamps.gov.in/Uploads/2023/1CBPO-Stamp.jpg",
    "https://postagestamps.gov.in/Uploads/2023/75_Years_of_India_Luxembourg_Friendship_Souvenir_Sheet.png",
    "https://postagestamps.gov.in/Uploads/2023/International_Year_of_Millets_STAMP.jpg",
    "https://postagestamps.gov.in/Uploads/2023/Parshuram_Stamp.jpg",
    "https://postagestamps.gov.in/Uploads/2023/Legends_of_Odisha_STAMP.jpg",
    "https://postagestamps.gov.in/Uploads/2023/Diamond%20Jubilee%20of%20CBI%20STAMP.jpg",
    "https://postagestamps.gov.in/Uploads/2023/Gauhati_High_Court_STAMP.jpg",
    "https://postagestamps.gov.in/Uploads/2023/Dayanand%20Saraswati%20STAMP.jpg",
    "https://postagestamps.gov.in/Uploads/2023/75th_Year_of_Indian_Army_Day_Stamp.jpg",
    "https://postagestamps.gov.in/Uploads/2023/Mann_Ki_Baat_stamp.jpg",
    "https://postagestamps.gov.in/Uploads/2023/Raja_Ram_Mohan_Roy_Stamp.jpg",
    "https://postagestamps.gov.in/Uploads/2023/Parliament_Complex_Stamp.jpg",
    "https://postagestamps.gov.in/Uploads/2023/SCO_Stamp.jpg",
    "https://postagestamps.gov.in/Uploads/2023/UP-RajBhwaan_Stamp.jpg",
    "https://postagestamps.gov.in/Uploads/2023/Gandhe_STAMP.jpg",
    "https://postagestamps.gov.in/Uploads/2023/G20_STAMP.jpg",
    "https://postagestamps.gov.in/Uploads/2023/High_Court_Orissa_2023_STAMP.jpg",
    "https://postagestamps.gov.in/Uploads/2023/Dada_JP_Vaswani_STAMP.jpg",
    "https://postagestamps.gov.in/Uploads/2023/500th_Birthday_Rani_Durgavati_STAMP.jpg",
    "https://postagestamps.gov.in/Uploads/2023/Hemachandra_Vikramaditya_STAMP.jpg",
    "https://postagestamps.gov.in/Uploads/2023/50%20years%20of%20establishment%20of%20Diplomatic%20Relations%20between%20India%20and%20Vietnam%20STAMP.jpg",
    "https://postagestamps.gov.in/Uploads/2024/ECI.jpg",
    "https://postagestamps.gov.in/Uploads/2024/MS%20for%20video%20BTMOD.jpg",
    "https://postagestamps.gov.in/Uploads/2024/Bombay%20Sappers.jpg",
    "https://postagestamps.gov.in/Uploads/2024/Olympic%20Stamp.jpg",
    "https://postagestamps.gov.in/Uploads/2024/Supreme%20Court%20Stamp.jpg"
];

cloudinary.config({
    cloud_name: 'dfdz50ehp',
    api_key: '184844229728663',
    api_secret: '2T5FXNbhr6C3pWXG-ry0BBX_XaY',
});

imageOfCPSLinks.map((i) => (
    cloudinary.uploader.upload(i, (error, result) => {
        if (error) console.log(error);
        console.log(result.public_id);
    })
))

