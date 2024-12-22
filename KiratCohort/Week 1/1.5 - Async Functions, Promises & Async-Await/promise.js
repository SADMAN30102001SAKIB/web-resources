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
      const error = true;
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

uploadVideo1()
  .then(result => {
    console.log(result);
    return uploadVideo2();
  })
  .then(result => {
    console.log(result);
    return uploadVideo3();
  })
  .then(result => {
    console.log(result);
    return uploadVideo4();
  })
  .then(result => {
    console.log(result);
    return uploadVideo5();
  })
  .then(result => {
    console.log(result);
    console.log("All videos are uploaded");
  })
  .catch(error => {
    console.log(error);
  });
