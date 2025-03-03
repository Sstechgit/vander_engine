const ftp = require('basic-ftp');

const uploadToFTP = async (localFilePath, remoteFileName) => {
  const client = new ftp.Client();
  client.ftp.verbose = true; // Enable verbose logging

  try {
    // Connect to the FTP server
    await client.access({
      host: '185.201.10.159',
      user: 'u539141958.vanderengines.com',
      password: 'SStech@9219@9219',
      port: 21,
      secure: false, // Plain FTP; use true if your server requires FTPS
    });

    console.log('Connected to FTP server');

    // Ensure the entire directory structure exists
    await client.ensureDir('assets/img/real');

    // Upload the file using only the relative path
    await client.uploadFrom(localFilePath, `${remoteFileName}`);

    console.log(`File uploaded successfully: public_html/assets/img/real/${remoteFileName}`);
  } catch (err) {
    console.error('FTP upload failed:', err.message);
    throw new Error('FTP upload failed');
  } finally {
    client.close(); // Always close the connection
  }
};

module.exports = uploadToFTP;
