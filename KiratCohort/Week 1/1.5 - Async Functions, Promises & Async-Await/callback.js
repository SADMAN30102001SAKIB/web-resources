/* 
I wanna upload 5 videos for YT. Each video will take some time to upload which needs to be done asynchronously. But, I want to make sure that the videos are uploaded in order. So, After uploading the 1st video then only the 2nd video uploading should start and so on.
*/

const uploadVideo1 = callback => {
  setTimeout(() => {
    const error = false;
    if (error) {
      callback("Error in uploading Video 1");
    } else {
      console.log("Video 1 is uploaded");
      callback(null);
    }
  }, 5000);
};

const uploadVideo2 = callback => {
  setTimeout(() => {
    const error = false;
    if (error) {
      callback("Error in uploading Video 2");
    } else {
      console.log("Video 2 is uploaded");
      callback(null);
    }
  }, 2000);
};

const uploadVideo3 = callback => {
  setTimeout(() => {
    const error = false;
    if (error) {
      callback("Error in uploading Video 3");
    } else {
      console.log("Video 3 is uploaded");
      callback(null);
    }
  }, 4000);
};

const uploadVideo4 = callback => {
  setTimeout(() => {
    const error = true;
    if (error) {
      callback("Error in uploading Video 4");
    } else {
      console.log("Video 4 is uploaded");
      callback(null);
    }
  }, 1000);
};

const uploadVideo5 = callback => {
  setTimeout(() => {
    const error = false;
    if (error) {
      callback("Error in uploading Video 5");
    } else {
      console.log("Video 5 is uploaded");
      callback(null);
    }
  }, 3000);
};

uploadVideo1(error => {
  if (error) {
    console.log(error);
  } else {
    uploadVideo2(error => {
      if (error) {
        console.log(error);
      } else {
        uploadVideo3(error => {
          if (error) {
            console.log(error);
          } else {
            uploadVideo4(error => {
              if (error) {
                console.log(error);
              } else {
                uploadVideo5(error => {
                  if (error) {
                    console.log(error);
                  } else {
                    console.log("All videos are uploaded");
                  }
                });
              }
            });
          }
        });
      }
    });
  }
});
