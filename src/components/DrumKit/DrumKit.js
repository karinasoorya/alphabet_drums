import React from 'react';
import Drum from '../Drum/Drum.js';
import './DrumKit.css';
import UIfx from 'uifx';

import aDrum from '../Drum/drum_files/CYCdh_K5-Rim03.mp3';
import bDrum from '../Drum/drum_files/CYCdh_K5-Kick93.mp3';
import cDrum from '../Drum/drum_files/CYCdh_K5-ClHat02.mp3';
import dDrum from '../Drum/drum_files/CYCdh_K5-OpHat02.mp3';
import eDrum from '../Drum/drum_files/CYCdh_K5-PdHat.mp3';
import fDrum from '../Drum/drum_files/CYCdh_K5-Rim01.mp3';
import gDrum from '../Drum/drum_files/CYCdh_K5-Rim02.mp3';
import hDrum from '../Drum/drum_files/CYCdh_K5-SdSt03.mp3';
import iDrum from '../Drum/drum_files/CYCdh_K5-Snr01.mp3';
import jDrum from '../Drum/drum_files/CYCdh_K5-Snr04.mp3';
import kDrum from '../Drum/drum_files/CYCdh_K5-Tom01a.mp3';
import lDrum from '../Drum/drum_files/CYCdh_K5-Tom01b.mp3';
import mDrum from '../Drum/drum_files/CYCdh_K5-Tom01c.mp3';
import nDrum from '../Drum/drum_files/CYCdh_K5-Tom02b.mp3';
import oDrum from '../Drum/drum_files/CYCdh_K5-Tom02c.mp3';
import pDrum from '../Drum/drum_files/CYCdh_K5-Tom03a.mp3';
import qDrum from '../Drum/drum_files/CYCdh_K5-Tom03b.mp3';
import rDrum from '../Drum/drum_files/CYCdh_K5-Tom03c.mp3';
import sDrum from '../Drum/drum_files/CYCdh_K6-ClHat.mp3';
import tDrum from '../Drum/drum_files/CYCdh_K6-Kick01.mp3';
import uDrum from '../Drum/drum_files/CYCdh_K6-OpHat01.mp3';
import vDrum from '../Drum/drum_files/CYCdh_K6-OpHat02.mp3';
import wDrum from '../Drum/drum_files/CYCdh_K6-Snr02.mp3';
import xDrum from '../Drum/drum_files/CYCdh_K6-Snr03.mp3';
import yDrum from '../Drum/drum_files/CYCdh_K6-Snr04.mp3';
import zDrum from '../Drum/drum_files/CYCdh_K6-SnrBuzz.mp3';


let drum_objects = []

drum_objects.push(aDrum);
drum_objects.push(bDrum);
drum_objects.push(cDrum);
drum_objects.push(dDrum);
drum_objects.push(eDrum);
drum_objects.push(fDrum);
drum_objects.push(gDrum);
drum_objects.push(hDrum);
drum_objects.push(iDrum);
drum_objects.push(jDrum);
drum_objects.push(kDrum);
drum_objects.push(lDrum);
drum_objects.push(mDrum);
drum_objects.push(nDrum);
drum_objects.push(oDrum);
drum_objects.push(pDrum);
drum_objects.push(qDrum);
drum_objects.push(rDrum);
drum_objects.push(sDrum);
drum_objects.push(tDrum);
drum_objects.push(uDrum);
drum_objects.push(vDrum);
drum_objects.push(wDrum);
drum_objects.push(xDrum);
drum_objects.push(yDrum);
drum_objects.push(zDrum);

let tick;
let drums = [];

for(let i = 0; i<drum_objects.length;i++) {
  tick = new UIfx({asset: drum_objects[i]});
  drums.push(<Drum tick = {tick} keyVal = {65 + i}/>);
}

class DrumKit extends React.Component {

  render() {
    return (
      <div className = "DrumKit">
        {drums}
      </div>
    );
  }
}

export default DrumKit;
