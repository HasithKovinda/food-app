
'use client'
import { useRef, useState } from 'react'
import styles from './ImagePicker.module.css'
import Image from 'next/image'

function ImagePicker({label,name}) {
  const imageRef = useRef()
  const[imagePreview,setImagePreview] = useState(null)

  function handleImagePick(){
     imageRef.current.click()
  }
  
  function handleImagePreview(event){
    const file = event.target.files[0]

    if(!file){
        setImagePreview(null)
        return
    }

    const fileReader = new FileReader()

    fileReader.onload=()=>{
        setImagePreview(fileReader.result)
    }

    fileReader.readAsDataURL(file)
  }
  return (
    <div className={styles.picker}>
        <label htmlFor={name} >{label}</label>
        <div  className={styles.controls}>
            <div className={styles.preview}>
             {!imagePreview && <p>No image picked yet.</p>}
             {imagePreview && <Image src={imagePreview} alt='meal image' fill />}
            </div>
            <input className={styles.input} type="file" accept="image/png,image/jpeg" id={name} name={name} ref={imageRef} onChange={handleImagePreview} required />
            <button type='button' className={styles.button} onClick={handleImagePick} >Pick an image</button>
        </div>
    </div>
  )
}

export default ImagePicker