"use client";

import { useRef, useState } from "react";
import classes from "./image-picker.module.css";
import Image from "next/image";

interface PropsInterface {
  label: string;
  name: string;
}

export default function ImagePicker({ label, name }: PropsInterface) {
  const [pickedImage, setPickedImage] = useState<string | null>(null);
  const imageInputRef = useRef<HTMLInputElement>(null);

  function handlePickImageClick() {
    imageInputRef.current?.click();
  }

  function handlePickImageChange(event: React.ChangeEvent<HTMLInputElement>) {
    const file = event.target?.files?.[0];

    if (!file) {
      setPickedImage(null);
      return;
    }

    const fileReader = new FileReader();

    fileReader.onload = function () {
      setPickedImage(fileReader.result as string);
    };

    fileReader.readAsDataURL(file);
  }

  return (
    <div className={classes.picker}>
      <label htmlFor={name}>{label}</label>

      <div className={classes.controls}>
        <div className={classes.preview}>
          {pickedImage ? (
            <Image src={pickedImage} alt="picked image" fill />
          ) : (
            <p> No image picked yet</p>
          )}
        </div>

        <input
          className={classes.input}
          type="file"
          id={name}
          accept="image/png, image/jpeg"
          name={name}
          required
          ref={imageInputRef}
          onChange={handlePickImageChange}
        />

        <button
          className={classes.button}
          type="button"
          onClick={handlePickImageClick}
        >
          Pick on image
        </button>
      </div>
    </div>
  );
}
