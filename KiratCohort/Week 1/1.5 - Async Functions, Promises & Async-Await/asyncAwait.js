const uploadVideo1 = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const error = false;
      if (error) {
        reject("Error in uploading Video 1");
      } else {
        resolve("Video 1 is uploaded");
      }
    }, 5000);
  });
};

const uploadVideo2 = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const error = false;
      if (error) {
        reject("Error in uploading Video 2");
      } else {
        resolve("Video 2 is uploaded");
      }
    }, 2000);
  });
};

const uploadVideo3 = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const error = false;
      if (error) {
        reject("Error in uploading Video 3");
      } else {
        resolve("Video 3 is uploaded");
      }
    }, 4000);
  });
};

const uploadVideo4 = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const error = false;
      if (error) {
        reject("Error in uploading Video 4");
      } else {
        resolve("Video 4 is uploaded");
      }
    }, 1000);
  });
};

const uploadVideo5 = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const error = false;
      if (error) {
        reject("Error in uploading Video 5");
      } else {
        resolve("Video 5 is uploaded");
      }
    }, 3000);
  });
};

const uploadVideo = async () => {
  try {
    const video1 = await uploadVideo1();
    console.log(video1);
    const video2 = await uploadVideo2();
    console.log(video2);
    const video3 = await uploadVideo3();
    console.log(video3);
    const video4 = await uploadVideo4();
    console.log(video4);
    const video5 = await uploadVideo5();
    console.log(video5);
    console.log("All videos are uploadd");
  } catch (error) {
    console.log(error);
  }
};

uploadVideo();
