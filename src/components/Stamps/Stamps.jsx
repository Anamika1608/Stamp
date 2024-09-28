import React from 'react';
import { Cloudinary } from '@cloudinary/url-gen';
import { auto } from '@cloudinary/url-gen/actions/resize';
import { autoGravity } from '@cloudinary/url-gen/qualifiers/gravity';
import { AdvancedImage } from '@cloudinary/react';
import data from './data';

function Stamps() {
  const cld = new Cloudinary({ cloud: { cloudName: 'dfdz50ehp' } });
  
  return (
    <div>
      {data.map((d) => {
        const img = cld
          .image(d.ImageOfCPS) 
          .format('auto') 
          .quality('auto')
          .resize(auto().gravity(autoGravity()).width(500).height(500)); 

        return (
          <div key={d.NameOfStamp}>
            <AdvancedImage cldImg={img} alt={d.NameOfStamp} />
            <div>Name: {d.NameOfStamp}</div>
            <div>Date of Release: {d.DateOfRelease}</div>
            <div>Denomination: {d.Denomination}</div>
            <div>Quantity: {d.Quantity}</div>
            <div>Description: {d.Description}</div>
            <button onClick={d.Brochure}>Brochure</button>
          </div>
        );
      })}
    </div>
  );
}

export default Stamps;
