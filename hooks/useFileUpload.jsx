import { useState } from "react";
import storage from "@react-native-firebase/storage";

const useFileUpload = () => {
  const [uploading, setUploading] = useState(false);
  const [uploadProgress, setUploadProgress] = useState(0);
  const [uploadError, setUploadError] = useState(null);
  const [downloadURL, setDownloadURL] = useState(null);

  const uploadFile = async (uri, path) => {
    try {
      setUploading(true);
      setUploadProgress(0);
      setUploadError(null);

      const reference = storage().ref(path);
      const response = await fetch(uri);
      const blob = await response.blob();

      const uploadTask = reference.put(blob);

      uploadTask.on(
        "state_changed",
        (snapshot) => {
          const progress =
            (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
          setUploadProgress(progress);
        },
        (error) => {
          setUploadError(error);
          setUploading(false);
        },
        async () => {
          const url = await uploadTask.snapshot.ref.getDownloadURL();
          setDownloadURL(url);
          setUploading(false);
        }
      );
    } catch (error) {
      console.error("Error uploading file:", error);
      setUploadError(error);
      setUploading(false);
    }
  };

  return { uploading, uploadProgress, uploadError, downloadURL, uploadFile };
};

export default useFileUpload;
