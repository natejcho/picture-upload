import Head from 'next/head'
import axios from 'axios';

export const Home = (): JSX.Element => {
  // tODO: separate upload and file selection
  // validate file type
  const fileUploadHandler = async (event: React.ChangeEvent<HTMLInputElement>) => {
    const fd = new FormData();
    fd.append('image', event.target.files[0], event.target.files[0].name)
    try {

      const res = await axios.post('/upload', fd
        // , {
        //   onUploadProgress: progressEvent => {
        //     console.log('Upload progress: ' + Math.round(progressEvent.loaded / progressEvent.total) * 100 + "%");
        //   }
        // }
      );
      console.log(res);
    } catch (e) {
      console.error(e.message);
    }
  }

  return (<div className="container" >
    <Head>
      <title>Picture upload</title>
      <link rel="icon" href="/favicon.ico" />
    </Head>

    <main>
      <h1 className="title">
        Welcome to this image uploader
      </h1>

      <input type="file"
        onChange={fileUploadHandler} />
    </main>

    <footer>
      <span>Powered by </span>
    </footer>
  </div >
  )
}

export default Home
