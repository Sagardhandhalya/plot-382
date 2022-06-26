import { useState } from "react";
import { collection, addDoc } from "firebase/firestore";
import { db } from "./../../firebase.config";
import { getStorage, ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { Triangle } from 'react-loader-spinner'
import "./Admin.css"
const storage = getStorage();
const uploadImageToFirebase = async (file) => {
  const fname = "/images/" + file.name;
  try {
    const storageRef = ref(storage, fname);
    await uploadBytes(storageRef, file);
    const url = await getDownloadURL(storageRef, fname);
    console.log(url);
    return url;
  }
  catch (err) {
    console.log('not able to upload ', err);
    return false
  }
}
const options = [
  'સન પ્લાય',
  'સ્ક્રિન ડોર',
  'કોરી પ્લાય',
  'એલ્યુમિનિયમ ડોર',
  'એલ્યુમિનિયમ બારી'
]

const Admin = () => {
  const [isPassCorrect, setIsPassCorrect] = useState(false)
  const [imageStr, setImageStr] = useState("")
  const [name, setName] = useState("")
  const [price, setPrice] = useState(0)
  const [description, setDescription] = useState("")
  const [note, setNote] = useState(null)
  const [category, setCategory] = useState('સન પ્લાય')
  const [isLoader, setIsLoader] = useState(false)

  const checkPass = (pass) => {
    console.log(pass);
    if (pass === 'plot383') {
      setIsPassCorrect(true)
    } else {
      setIsPassCorrect(false)
    }
  }

  const showAndUploadImage = async (input) => {
    console.log(input);
    if (input.files && input.files[0]) {
      var reader = new FileReader();
      reader.onload = async function () {
        console.log(reader.result);
        const isUploaded = await uploadImageToFirebase(input.files[0])
        if (!isUploaded) {
          setNote({ success: false, content: "Not able to upload image try again" })
        }
        console.log(isUploaded);
        setImageStr(isUploaded)
      };
      reader.readAsDataURL(input.files[0]);
    }
  }

  const addProduct = async () => {
    if(description && imageStr && name && price ){
      const product = { description, imageUrl: imageStr, name, price,cat:category }
      console.log(product);
      setIsLoader(true)
      addDoc(collection(db, "products"), product).then(res => {
        setIsLoader(false)
        setNote({ success: true, content: "product added successful" })
        window.scroll(0,0)
      }).catch(e => {
        console.log(e);
        setIsLoader(false)
        setNote({ success: false, content: "Not able to add product" })
        window.scroll(0,0)
      });
    }else{
      window.scroll(0,0)
      setNote({ success: false, content: "Please fill all the feild." })
    }
 }

  return <div>
    {isLoader && <div class="loader123">
      <div><Triangle color="#00BFFF" height={80} width={80} />
      </div></div>}
    {note && <article className={note.success ? "message is-success" : "message is-danger"}>
      <div className="message-header">
        <p>{note.content}</p>
        <button className="delete" aria-label="delete"></button>
      </div>
    </article>}
    <h1 className="is-size-5 has-text-centered mb-4">Add New Product </h1>
    <div className="field">
      <label className="label">Admin Password</label>
      <div className="control">
        <input className="input" type="password" placeholder="password" onChange={e => checkPass(e.target.value)} />
      </div>
    </div>
    {
      isPassCorrect && <div>
        {imageStr && <img src={imageStr} alt="" width={300} height={300} />}
        <div className="field">
          <label className="label">image</label>
          <div className="control">
            <input className="input" type="file" onChange={e => showAndUploadImage(e.target)} />
          </div>
        </div>
        <div className="field">
          <label className="label">product Name</label>
          <div className="control">
            <input className="input" type="text" placeholder="લાકડાના પ્લાય" onChange={e => setName(e.target.value)} />
          </div>
        </div>
        <div className="field">
          <label className="label">price</label>
          <div className="control">
            <input className="input" type="number" placeholder="2000" onChange={e => setPrice(e.target.value)} />
          </div>
        </div>
        <div className="field">
        <label className="label">Category</label>
          <div class="select">
            <select onChange={(e) => {
              setCategory(e.target.value)
            }}>
              {
                options.map((op,idx) => {
                  return <option value={op}>{op}</option>
                })
              }
            </select>
          </div>
        </div>
        <div className="field">
          <label className="label">Description</label>
          <div className="control">
            <textarea className="textarea" placeholder="Textarea" onChange={e => setDescription(e.target.value)}></textarea>
          </div>
        </div>
        <div className="control is-flex">
          <button className="button is-link mt-5 ml-5" onClick={addProduct}>Add Product</button>
        </div>
      </div>
    }

  </div>;
};

export default Admin;
