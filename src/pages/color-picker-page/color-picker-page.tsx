import { rgbToHex } from '@/helper/color';
import { ClearSubstrings } from '@/helper/string';
import { ImageFileTypes } from '@/utilities/AllowedFiles';
import { Button, ButtonGroup, Typography } from '@mui/material';
import { useState } from 'react';
import { ImageColorPicker } from 'react-image-color-picker';
const ColorPickerPage: React.FC = () => {

  const [color, setColor] = useState({
    hex: '',
    rgb: '',
  })

  const onPickColor = (e : string) => {

    const rgbString = ClearSubstrings(e, [' ', 'rgb(', ')']);
    const rgbChars = rgbString.split(',');
    const r = parseInt(rgbChars[0]);
    const g = parseInt(rgbChars[1]);
    const b = parseInt(rgbChars[2]);
    const hex = rgbToHex(r, g, b);

    setColor({
      rgb: e.toLowerCase(),
      hex: hex.toLowerCase(),
    })
  }

  const [image, setImage] = useState('');

  const onDragOver = (e: React.DragEvent<HTMLDivElement>) => e.preventDefault();

  const onDropFile = async (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    const {
      dataTransfer: { files },
    } = e;
    if(!files || !files.length) return;
    const file = files.item(0);
    if(!file) return;
    if(!ImageFileTypes.includes(file.type)) return;
    setImage(URL.createObjectURL(file));
  }

  const onPasteFile = async (e: React.ClipboardEvent<HTMLDivElement>) => {
    e.preventDefault();
    const items = e.clipboardData?.items;
    if (!items || !items.length) return;
    
    for (let i = 0; i < items.length; i++) {
      const item = items[i];
      if (item.type.indexOf('image') !== -1) {
        const blob = item.getAsFile();
        if (blob) {
          setImage(URL.createObjectURL(blob));
          break;
        }
      }
    }

  }

  const onCopyColor = (name: 'rgb' | 'hex') => {
    navigator.clipboard.writeText(color[name])
  }

  return (
    <div className="page flex flex-col items-center justify-center bg-gray-700">
      <div className='border-dashed border-4 rounded p-10 m-5'
        onDragOver={onDragOver}
        onDrop={onDropFile}
        onPaste={onPasteFile}>
        <Typography variant='h5'>DROP IMAGE</Typography>
      </div>
      <div className='flex gap-2 justify-between my-5'>
        <ButtonGroup variant="contained" aria-label="Basic button group">
          <Button onClick={()=>onCopyColor('rgb')}>
            {color.rgb}
          </Button>
          <Button onClick={()=>onCopyColor('hex')}>
            {color.hex}
          </Button>
        </ButtonGroup>
        <ButtonGroup variant="contained" aria-label="Basic button group">
          <Button>Upload</Button>
          <Button onClick={()=>setImage('')}>Clear</Button>
        </ButtonGroup>
        <ButtonGroup variant="contained" aria-label="Basic button group">
          <Button style={{ backgroundColor: color.rgb}}
            onClick={()=>onCopyColor('rgb')}>
            {color.rgb}
          </Button>
          <Button style={{ backgroundColor: color.hex}}
            onClick={()=>onCopyColor('hex')}>
            {color.hex}
          </Button>
        </ButtonGroup>
      </div>
      <ImageColorPicker
        onColorPick={onPickColor}
        imgSrc={image}
        zoom={1}
        />
    </div>
    )
}

export default ColorPickerPage;